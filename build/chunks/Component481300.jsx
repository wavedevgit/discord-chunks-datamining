/** Chunk was on 37220 **/
/** chunk id: 481300, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk991621 = require("./991621.js"),
  Chunk629710 = require("./629710.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t) {
  let s = (0, a.rb)(e),
    c = null != t && (0, a.g4)({
      type: l.l.GenericMedia,
      media: t
    }, s);
  return null != t && c ? (0, r.jsx)(i.sNh, {
    id: "report-image-false-positive",
    label: o.intl.string(o.t.ZH7P2h),
    action: () => {
      (0, i.ZDy)(async () => {
        let {
          default: i
        } = await n(788679);
        return n => (0, r.jsx)(i, function(e) {
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
          channelId: e.channel_id,
          messageId: e.id,
          mediaItemUrl: t.url
        }, n))
      })
    },
    icon: i.fFY
  }, "report-image-false-positive") : null
}