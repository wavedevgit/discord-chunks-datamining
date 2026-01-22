/** Chunk was on 40394 **/
/** chunk id: 217563, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk477782 = require("./477782.js"),
  Chunk956793 = require("./956793.js"),
  Chunk796774 = require("./796774.js"),
  Chunk984813 = require("./984813.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(n, t) {
  let e = (0, l.bG)([o.A], () => o.A.can(u.xBc.CONNECT, n), [n]),
    b = (0, l.bG)([d.A], () => d.A.getVoiceChannelId()),
    h = (0, c.mz)(t),
    g = b === n.id;
  return n.isGuildVocal() && e && null != h && !g ? (0, i.jsx)(r.Dr, {
    id: "join-muted-custom-join-sound",
    label: A.intl.string(A.t.saLMWc),
    action: () => {
      (0, s.CX)(n.id), a.default.selectVoiceChannel(n.id)
    }
  }) : null
}