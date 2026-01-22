/** Chunk was on 21738 **/
/** chunk id: 606748, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk64983 = require("./64983.jsx"),
  Chunk450510 = require("./450510.js"),
  Chunk976860 = require("./976860.js"),
  Chunk323443 = require("./323443.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk213242 = require("./213242.js");
let d = e => {
  let {
    channel: t,
    guild: n
  } = e;
  return (0, r.jsx)(i.A, {
    guild: n,
    onDismissed: () => {
      (0, l.sF)(l._2.HUB_STUDY_ROOM_NOTICE)
    },
    onClick: () => {
      (0, l.sF)(l._2.HUB_STUDY_ROOM_NOTICE), null != t && null != t.getGuildId() && ((0, s.av)(t), (0, a.uh)(t.getGuildId(), t.id))
    },
    title: c.intl.string(c.t["4Y2AS7"]),
    message: c.intl.string(c.t.wTsxTS),
    cta: c.intl.string(c.t.wBoE6L),
    image: u,
    type: o.n5X.HUB_STUDY_ROOM
  })
}