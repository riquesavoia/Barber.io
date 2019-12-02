module.exports = pool => (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) return next(err);

        req.connection = connection;

        next();

        res.on('finish', () => {
            if (pool._freeConnections.indexOf(connection) < 0) {
                console.log('Releasing connection');
                req.connection.release();
            }
        });
    });
};