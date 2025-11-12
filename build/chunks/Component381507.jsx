/** Chunk was on 54400 **/
/** chunk id: 381507, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
let m = () => {
  let e = (0, Chunk105759.Z)(),
    {
      avatarSrc: t,
      eventHandlers: n
    } = (0, Chunk518950.Z)({
      userId: null == module ? true : module.id,
      size: Chunk268685.EF.SIZE_32,
      animateOnHover: true
    }),
    m = (0, Chunk410030.Fg)(),
    f = (0, Chunk780384.ap)(m),
    x = Chunk51144.ZP.getName(module),
    _ = f ? Chunk898969.Z : Chunk703614.Z;
  return null == module ? null : (0, Chunk951288.jsxs)("div", {
    className: Chunk908780.attributionBannerContainer,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk908780.avatarContainer,
      children: (0, Chunk951288.jsx)(Chunk481060.qEK, function(e) {
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
      }({
        src: exports,
        "aria-label": module.username,
        size: Chunk268685.EF.SIZE_32
      }, require))
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/bold",
      className: Chunk908780.bannerHeader,
      children: Chunk388032.intl.format(Chunk388032.t.oxhCOl, {
        userName: x
      })
    }), (0, Chunk951288.jsx)(_, {
      className: Chunk908780.bannerIcon
    })]
  })
}