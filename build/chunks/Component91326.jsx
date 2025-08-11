/** Chunk was on 1272 **/
/** chunk id: 91326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk471445 = require("./471445.js"),
  Chunk862099 = require("./862099.jsx"),
  Chunk938475 = require("./938475.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk376000 = require("./376000.js");
let u = function(e) {
  let {
    name: t,
    channel: n
  } = e, u = (0, i.Wu)([o.ZP], () => o.ZP.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), d = (0, l.KS)(n);
  return (0, r.jsx)(a.gt, {
    heading: s.intl.string(s.t["X2K3//"]),
    topic: t,
    location: s.intl.string(s.t.LZA6NT),
    locationIcon: null != d ? (0, r.jsx)(d, {
      size: "xs",
      color: "currentColor",
      className: c.icon
    }) : null,
    children: (0, r.jsx)(a.Co, {
      channel: n,
      speakers: u,
      voiceType: a.bZ.STUDY_ROOM
    })
  })
}