/** Chunk was on 1272 **/
/** chunk id: 51382, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk82950 = require("./82950.jsx"),
  Chunk536442 = require("./536442.js"),
  Chunk703656 = require("./703656.js"),
  Chunk922482 = require("./922482.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882977 = require("./882977.js");
let d = e => {
  let {
    channel: t,
    guild: n
  } = e;
  return (0, r.jsx)(i.Z, {
    guild: n,
    onDismissed: () => {
      (0, l.Kw)(l.v6.HUB_STUDY_ROOM_NOTICE)
    },
    onClick: () => {
      (0, l.Kw)(l.v6.HUB_STUDY_ROOM_NOTICE), null != t && null != t.getGuildId() && ((0, s.Cq)(t), (0, a.XU)(t.getGuildId(), t.id))
    },
    title: c.intl.string(c.t["4Y2AS7"]),
    message: c.intl.string(c.t.wTsxTS),
    cta: c.intl.string(c.t.wBoE6L),
    image: u,
    type: o.vID.HUB_STUDY_ROOM
  })
}