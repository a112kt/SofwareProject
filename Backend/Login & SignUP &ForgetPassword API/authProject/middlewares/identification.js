const jwt = require("jsonwebtoken");

exports.identifier = (req, res, next) => {
    let token;

    // تحديد مصدر التوكن بناءً على نوع العميل
    if (req.headers.client === 'not-browser') {
        token = req.headers.authorization;
    } else {
        token = req.cookies['Authorization'];
    }

    // التأكد من وجود التوكن
    if (!token) {
        return res.status(403).json({ success: false, message: 'غير مصرح: لم يتم تقديم التوكن' });
    }

    // التأكد من وجود "Bearer" في بداية التوكن، ثم استخراجه
    if (token.startsWith('Bearer ')) {
        token = token.split(' ')[1];
    } else {
        return res.status(400).json({ success: false, message: 'غير مصرح: التوكن غير صالح (يجب أن يبدأ بـ Bearer)' });
    }

    try {
        // التحقق من صحة التوكن
        const jwtVerified = jwt.verify(token, process.env.TOKEN_SECRET);

        // ربط بيانات المستخدم بطلب السيرفر
        req.user = jwtVerified;
        next();

    } catch (error) {
        console.error('JWT Verify Error:', error.message);

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'غير مصرح: التوكن منتهي الصلاحية' });
        }

        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ success: false, message: 'غير مصرح: التوكن غير صالح أو التوقيع غير صحيح' });
        }

        return res.status(500).json({ success: false, message: 'حدث خطأ في الخادم أثناء التحقق من التوكن' });
    }
};
