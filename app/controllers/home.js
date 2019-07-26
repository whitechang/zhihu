const path = require('path');
const send = require('koa-send');

class HomeController {
    index(ctx) {
        ctx.body = '这是主页1';
    }
    upload(ctx) {
        const file = ctx.request.files.file;
        const basename = path.basename(file.path);
        ctx.body = { url: `${ctx.origin}/uploads/${basename}` };
    }
    async download(ctx) {
        const fileName = 'upload_8902e19c90f6b25327dca9169065f230.png'
        ctx.attachment(fileName);
        await send(ctx, 'app/public/uploads/upload_8902e19c90f6b25327dca9169065f230.png');
    }
}

module.exports = new HomeController();