/** Chunk was on 1636 **/
/** chunk id: 220167, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk930125 = require("./930125.js"),
  Chunk282108 = require("./282108.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  let c = (0, a.Fg)(e),
    s = null != t && (0, a.qo)({
      type: l.D.GenericMedia,
      media: t
    }, c);
  return null != t && s ? (0, r.jsx)(i.Drp, {
    id: "report-image-false-positive",
    label: o.intl.string(o.t.ZH7P2h),
    action: () => {
      (0, i.mMO)(async () => {
        let {
          default: i
        } = await n(652442);
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
    leadingAccessory: {
      type: "icon",
      icon: i.DAq
    },
    icon: i.DAq
  }, "report-image-false-positive") : null
}