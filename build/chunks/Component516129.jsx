/** Chunk was on 58023 **/
/** chunk id: 516129, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk208567 = require("./208567.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk758253 = require("./758253.js");

function x(e) {
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
let g = Chunk981631.Ilk.PRIMARY_400,
  h = Chunk981631.Ilk.PRIMARY_500;

function v(e) {
  var {
    enabled: t,
    imageClassName: n,
    iconWrapperClassName: l
  } = e, d = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["enabled", "imageClassName", "iconWrapperClassName"]);
  let v = (0, o.ZP)(),
    p = (0, a.wj)(v) ? g : h,
    f = {
      height: 18,
      width: 18,
      color: (0, c.Lq)(p)
    };
  return (0, r.jsx)(u.Z, x({
    className: i()({
      [m.avatarUploader]: t,
      [m.avatarUploaderDisabled]: !t
    }),
    imageClassName: i()(n, m.avatarUploaderInnerSquare, {
      [m.avatarUploaderInnerSquareDisabled]: !t
    }),
    icon: null != d.image && "" !== d.image ? (0, r.jsx)(s.vdY, x({
      size: "custom"
    }, f)) : (0, r.jsx)(s.FmF, x({
      size: "custom"
    }, f)),
    iconClassName: i()(m.avatarUploadIcon, m.hideDefaultIcon),
    iconWrapperClassName: l,
    showIcon: true,
    showIconDisabled: true,
    hideSize: true
  }, d))
}