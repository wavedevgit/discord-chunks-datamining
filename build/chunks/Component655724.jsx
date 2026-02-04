/** Chunk was on 88474 **/
/** chunk id: 655724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk235052 = require("./235052.jsx"),
  Chunk426127 = require("./426127.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    userId: t,
    channel: n,
    onAction: s,
    variant: c = "primary"
  } = e, u = (0, l.u)(t, n, "useRequestToStreamButton");
  return null == u ? null : (0, r.jsx)(i.$nd, {
    text: o.intl.string(a.default.DKHhec),
    variant: c,
    size: "sm",
    onClick: () => {
      u.handleRequestToStream("request to stream button"), null == s || s()
    },
    fullWidth: true
  })
}