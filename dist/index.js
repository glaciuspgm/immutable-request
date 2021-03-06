'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _Request = require('./Request');

var _Request2 = _interopRequireDefault(_Request);

var _Requester = require('./Requester');

var _Requester2 = _interopRequireDefault(_Requester);

var _ = require('lodash');
var should = require('should');
var Promise = (global || window).Promise = require('bluebird');
var __DEV__ = process.env.NODE_ENV !== 'production';
var __PROD__ = !__DEV__;
var __BROWSER__ = typeof window === 'object';
var __NODE__ = !__BROWSER__;
if (__DEV__) {
  Promise.longStackTraces();
  Error.stackTraceLimit = Infinity;
}

_Request2['default'].Requester = new _Requester2['default'](_Request2['default']);
exports['default'] = _Request2['default'];
module.exports = exports['default'];