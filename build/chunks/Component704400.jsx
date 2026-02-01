/** Chunk was on 9753 **/
/** chunk id: 704400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk414614 = require("./414614.js");

function s(e) {
  let {
    message: t
  } = e;
  return (0, r.jsxs)(i.DUT, {
    onClick: () => {
      (0, i.mMO)(async () => {
        let {
          default: e
        } = await n.e("35270").then(n.bind(n, 743461));
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
    className: a.L,
    children: [(0, r.jsx)(i.mir, {
      size: "xs",
      color: "currentColor"
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      className: a.m,
      children: l.intl.string(l.t["2aXnfa"])
    })]
  })
}