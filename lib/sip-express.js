'use strict';

var SipApplication = require('./sip-application');

module.exports = function sipExpress() {
    return new SipApplication();
};
