/** Chunk was on 71264 **/
/** chunk id: 355827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk207055 = require("./207055.jsx"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk959 = require("./959.js");

function d(e) {
  let {
    channel: t
  } = e, n = (0, r.e7)([o.ZP], () => o.ZP.getVoiceStatesForChannel(t));
  return (0, i.jsxs)("div", {
    className: u.root,
    children: [(0, i.jsx)(l.Text, {
      variant: "text-xs/bold",
      className: u.header,
      children: c.intl.format(c.t.e95u3C, {
        count: n.length
      })
    }), (0, i.jsx)(l.Ttm, {
      className: u.scroller,
      children: (0, i.jsx)(a.Z, {
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