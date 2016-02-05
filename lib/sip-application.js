'use strict';

var ware = require('ware');

function SipApplication() {
    this._middleware = ware();
}

var proto = SipApplication.prototype;

proto._handleRaw = function _handleRaw(rawSipMessage) {

};

proto._handle = function _handle(sipMessage) {
    var app = this;
    app._middleware.run(sipMessage, function handleFinal(err) {
        app._handleFinal(err, sipMessage);
    });
};

proto._handleFinal = function _handleFinal(err, sipMessage) {

};

proto.request = function request(uri, fn) {

};

proto.response = function response(status, fn) {

};

proto.use = function use(fn) {
    if (fn instanceof SipApplication) {
        this._middleware.use(function sipApplication(sipMessage) {
            fn._handle(sipMessage);
        });
    } else {
        this._middleware.use(fn);
    }

};

module.exports = SipApplication;
