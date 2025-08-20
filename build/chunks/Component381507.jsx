/** Chunk was on 54400 **/
/** chunk id: 381507, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk518950 = require("./518950.js"),
  Chunk51144 = require("./51144.js"),
  Chunk105759 = require("./105759.js"),
  Chunk898969 = require("./898969.jsx"),
  Chunk703614 = require("./703614.jsx"),
  Chunk268685 = require("./268685.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk908780 = require("./908780.js");
let _ = () => {
  let e = (0, Chunk105759.Z)(),
    {
      avatarSrc: n,
      eventHandlers: t
    } = (0, Chunk518950.Z)({
      userId: null == module ? true : module.id,
      size: Chunk268685.EF.SIZE_32,
      animateOnHover: true
    }),
    _ = (0, Chunk410030.Fg)(),
    f = (0, Chunk780384.ap)(_),
    h = Chunk51144.ZP.getName(module),
    j = f ? Chunk898969.Z : Chunk703614.Z;
  return null == module ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk908780.attributionBannerContainer,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk908780.avatarContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.qEK, function(e) {
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
      }({
        src: exports,
        "aria-label": module.username,
        size: Chunk268685.EF.SIZE_32
      }, require))
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/bold",
      className: Chunk908780.bannerHeader,
      children: Chunk388032.intl.format(Chunk388032.t.oxhCOj, {
        userName: h
      })
    }), (0, Chunk951288.jsx)(j, {
      className: Chunk908780.bannerIcon
    })]
  })
}