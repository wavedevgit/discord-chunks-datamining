/** Chunk was on 31505 **/
/** chunk id: 381507, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk518950 = require("./518950.js"),
  Chunk51144 = require("./51144.js"),
  Chunk105759 = require("./105759.js"),
  Chunk898969 = require("./898969.jsx"),
  Chunk703614 = require("./703614.jsx"),
  Chunk182294 = require("./182294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk332546 = require("./332546.js");
let x = () => {
  let e = (0, Chunk105759.Z)(),
    {
      avatarSrc: r,
      eventHandlers: n
    } = (0, Chunk518950.Z)({
      userId: null == module ? true : module.id,
      size: Chunk182294.EF.SIZE_32,
      animateOnHover: true
    }),
    x = (0, Chunk410030.Fg)(),
    f = (0, Chunk780384.ap)(x),
    m = Chunk51144.ZP.getName(module),
    h = f ? Chunk898969.Z : Chunk703614.Z;
  return null == module ? null : (0, Chunk255367.jsxs)("div", {
    className: Chunk332546.attributionBannerContainer,
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk332546.avatarContainer,
      children: (0, Chunk255367.jsx)(Chunk481060.qEK, function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), t.forEach(function(r) {
            var t;
            t = n[r], r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[r] = t
          })
        }
        return e
      }({
        src: exports,
        "aria-label": module.username,
        size: Chunk182294.EF.SIZE_32
      }, require))
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-xs/bold",
      className: Chunk332546.bannerHeader,
      children: Chunk388032.intl.format(Chunk388032.t.oxhCOj, {
        userName: m
      })
    }), (0, Chunk255367.jsx)(h, {
      className: Chunk332546.bannerIcon
    })]
  })
}