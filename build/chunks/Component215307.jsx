/** Chunk was on 21738 **/
/** chunk id: 215307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk713654 = require("./713654.js"),
  Chunk289357 = require("./289357.jsx"),
  Chunk607567 = require("./607567.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk158796 = require("./158796.js");
let u = function(e) {
  let {
    name: t,
    channel: n
  } = e, u = (0, i.yK)([s.Ay], () => s.Ay.getVoiceStatesForChannel(n).map(e => {
    let {
      user: t
    } = e;
    return t
  }), [n]), d = (0, l.gU)(n);
  return (0, r.jsx)(a.Qv, {
    heading: o.intl.string(o.t["X2K3/4"]),
    topic: t,
    location: o.intl.string(o.t.LZA6Na),
    locationIcon: null != d ? (0, r.jsx)(d, {
      size: "xs",
      color: "currentColor",
      className: c.K
    }) : null,
    children: (0, r.jsx)(a.$i, {
      channel: n,
      speakers: u,
      voiceType: a.SY.STUDY_ROOM
    })
  })
}