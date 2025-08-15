/** Chunk was on 60962 **/
/** chunk id: 516129, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk208567 = require("./208567.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk156811 = require("./156811.js");

function p(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}
let h = Chunk981631.Ilk.PRIMARY_400,
  g = Chunk981631.Ilk.PRIMARY_500;

function x(e) {
  var {
    enabled: n,
    imageClassName: t,
    iconWrapperClassName: l
  } = e, u = function(e, n) {
    if (null == e) return {};
    var t, r, l = function(e, n) {
      if (null == e) return {};
      var t, r, l = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++) t = a[r], n.indexOf(t) >= 0 || (l[t] = e[t]);
      return l
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) t = a[r], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t])
    }
    return l
  }(e, ["enabled", "imageClassName", "iconWrapperClassName"]);
  let x = (0, o.ZP)(),
    b = (0, i.wj)(x) ? h : g,
    f = {
      height: 18,
      width: 18,
      color: (0, c.Lq)(b)
    };
  return (0, r.jsx)(d.Z, p({
    className: a()({
      [m.avatarUploader]: n,
      [m.avatarUploaderDisabled]: !n
    }),
    imageClassName: a()(t, m.avatarUploaderInnerSquare, {
      [m.avatarUploaderInnerSquareDisabled]: !n
    }),
    icon: null != u.image && "" !== u.image ? (0, r.jsx)(s.vdY, p({
      size: "custom"
    }, f)) : (0, r.jsx)(s.FmF, p({
      size: "custom"
    }, f)),
    iconClassName: a()(m.avatarUploadIcon, m.hideDefaultIcon),
    iconWrapperClassName: l,
    showIcon: true,
    showIconDisabled: true,
    hideSize: true
  }, u))
}