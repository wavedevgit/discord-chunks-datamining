/** Chunk was on 83331 **/
/** chunk id: 381924, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk828214 = require("./828214.js"),
  Chunk287734 = require("./287734.js"),
  Chunk208049 = require("./208049.js"),
  Chunk893663 = require("./893663.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(n, t) {
  let e = (0, l.e7)([o.Z], () => o.Z.can(u.Plq.CONNECT, n), [n]),
    h = (0, l.e7)([d.Z], () => d.Z.getVoiceChannelId()),
    g = (0, c.tT)(t),
    f = h === n.id;
  return n.isGuildVocal() && e && null != g && !f ? (0, i.jsx)(r.sN, {
    id: "join-muted-custom-join-sound",
    label: Z.intl.string(Z.t.saLMWc),
    action: () => {
      (0, s.Db)(n.id), a.default.selectVoiceChannel(n.id)
    }
  }) : null
}