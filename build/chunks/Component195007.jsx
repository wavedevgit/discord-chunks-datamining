/** Chunk was on 97887 **/
/** chunk id: 195007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk588224 = require("./588224.jsx"),
  Chunk607567 = require("./607567.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk911855 = require("./911855.js");

function d(e) {
  let {
    channel: t
  } = e, n = (0, l.bG)([a.Ay], () => a.Ay.getVoiceStatesForChannel(t));
  return (0, r.jsxs)("div", {
    className: u.zr,
    children: [(0, r.jsx)(i.Text, {
      variant: "text-xs/bold",
      className: u.wx,
      children: c.intl.format(c.t.e95u3C, {
        count: n.length
      })
    }), (0, r.jsx)(i.HOs, {
      className: u.XG,
      children: (0, r.jsx)(s.A, {
        allowDragging: false,
        allowPreviews: false,
        className: u.Xk,
        channel: t,
        voiceStates: n,
        collapsed: false,
        location: o.ThZ.CHANNEL_CALL
      })
    })]
  })
}