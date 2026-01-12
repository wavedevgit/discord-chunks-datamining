/** Chunk was on 9536 **/
/** chunk id: 516129, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk208567 = require("./208567.jsx"),
  Chunk37679 = require("./37679.js");

function u(e) {
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
let g = Chunk692547.Z.unsafe_rawColors.PRIMARY_400.css,
  f = Chunk692547.Z.unsafe_rawColors.PRIMARY_500.css;

function m(e) {
  var {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: i
  } = e, a = function(e, t) {
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
  let m = (0, o.ZP)(),
    b = {
      height: 18,
      width: 18,
      color: (0, s.wjy)(m) ? g : f
    };
  return (0, r.jsx)(c.Z, u({
    className: l()({
      [d.avatarUploader]: t,
      [d.avatarUploaderDisabled]: !t
    }),
    imageClassName: l()(n, d.avatarUploaderInnerSquare, {
      [d.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != a.image && "" !== a.image ? (0, r.jsx)(s.vdY, u({
      size: "custom"
    }, b)) : (0, r.jsx)(s.FmF, u({
      size: "custom"
    }, b)),
    iconClassName: l()(d.avatarUploadIcon, d.hideDefaultIcon),
    iconWrapperClassName: i,
    showIcon: true,
    showIconDisabled: true,
    hideSize: true
  }, a))
}