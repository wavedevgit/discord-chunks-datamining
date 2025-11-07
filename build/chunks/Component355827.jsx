/** Chunk was on 13140 **/
/** chunk id: 355827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk207055 = require("./207055.jsx"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560059 = require("./560059.js");

function d(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([o.ZP], () => o.ZP.getVoiceStatesForChannel(t));
  return (0, r.jsxs)("div", {
    className: u.root,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-xs/bold",
      className: u.header,
      children: c.intl.format(c.t.e95u3C, {
        count: n.length
      })
    }), (0, r.jsx)(l.Ttm, {
      className: u.scroller,
      children: (0, r.jsx)(a.Z, {
        allowDragging: false,
        allowPreviews: false,
        className: u.voiceUsers,
        channel: t,
        voiceStates: n,
        collapsed: false,
        location: s.Sbl.CHANNEL_CALL
      })
    })]
  })
}