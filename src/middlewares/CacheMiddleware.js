const { getValue, setValue, setValueWithExpire } = require('../services/redisClient');

async function cacheMiddleware(req, res, next) {
    const { organization } = req.params;

    const dataInCache = await getValue(organization);

    if (dataInCache) {
        return res.status(200).json(dataInCache);
    }

    res.sendResponse = res.json;

    res.json = async (body) => {
        await setValueWithExpire(organization, body, 10);
        res.sendResponse(body);
    }

    return next();
}

module.exports = cacheMiddleware;