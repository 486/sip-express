var sipExpress = require('./../');

describe('The SIP application', function() {
    var app;

    beforeEach(function() {
        app = sipExpress();
    });

    it('should take middleware functions', function(done) {
        var fakeMessage = 'foo';
        app.use(function(msg) {
            expect(msg).toBe(fakeMessage);
            done();
        });
        app._handle(fakeMessage);
    });
});
