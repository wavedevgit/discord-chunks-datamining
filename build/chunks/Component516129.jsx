/** Chunk was on 64982 **/
/** chunk id: 516129, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk208567 = require("./208567.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk156811 = require("./156811.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let p = Chunk981631.Ilk.PRIMARY_400,
  f = Chunk981631.Ilk.PRIMARY_500;

function h(e) {
  var {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: i
  } = e, u = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["enabled", "imageClassName", "iconWrapperClassName"]);
  let h = (0, o.ZP)(),
    b = (0, a.wj)(h) ? p : f,
    x = {
      height: 18,
      width: 18,
      color: (0, c.Lq)(b)
    };
  return (0, r.jsx)(d.Z, m({
    className: l()({
      [g.avatarUploader]: t,
      [g.avatarUploaderDisabled]: !t
    }),
    imageClassName: l()(n, g.avatarUploaderInnerSquare, {
      [g.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != u.image && "" !== u.image ? (0, r.jsx)(s.vdY, m({
      size: "custom"
    }, x)) : (0, r.jsx)(s.FmF, m({
      size: "custom"
    }, x)),
    iconClassName: l()(g.avatarUploadIcon, g.hideDefaultIcon),
    iconWrapperClassName: i,
    showIcon: true,
    showIconDisabled: true,
    hideSize: true
  }, u))
}