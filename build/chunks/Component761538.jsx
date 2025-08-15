/** Chunk was on 66866 **/
/** chunk id: 761538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903893 = require("./903893.js");

function o(e) {
  let {
    message: t
  } = e;
  return (0, r.jsxs)(i.P3F, {
    onClick: () => {
      (0, i.ZDy)(async () => {
        let {
          default: e
        } = await n.e("14021").then(n.bind(n, 910673));
        return n => (0, r.jsx)(e, function(e) {
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
          channelId: t.channel_id,
          messageId: t.id
        }, n))
      })
    },
    className: a.accessory,
    children: [(0, r.jsx)(i.d3s, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      className: a.accessoryText,
      children: l.intl.string(l.t["2aXnfX"])
    })]
  })
}