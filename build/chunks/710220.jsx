/** Chunk was on 75708 **/
/** chunk id: 710220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk182294 = require("./182294.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk416820 = require("./416820.js");
let c = e => null != e.globalName ? e.globalName : e.username;

function d(e) {
  let {
    referrer: t,
    enablePremiumBrandRefresh: n
  } = e, {
    avatarSrc: d,
    eventHandlers: u
  } = (0, s.Z)({
    userId: null == t ? true : t.id,
    size: n ? a.EF.SIZE_24 : a.EF.SIZE_32,
    animateOnHover: true
  });
  return <div className={o.attributionBannerContainerRebranded}><div className={o.attributionBannerContentApplicationHomeRebranded}>{<div className={o.iconContainerApplicationHome}><r.qEK{...function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          className: o.icon,
          src: d,
          "aria-label": t.username,
          size: a.EF.SIZE_32
        }, u)} /></div>}{<r.X6q variant={"heading-sm/normal"} className={o.textContainerRebranded} color={"header-primary"}>{l.intl.format(l.t.IqxblZ, {
          username: c(t)
        })}</r.X6q>}</div></div>
}