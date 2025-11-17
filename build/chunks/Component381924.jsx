/** Chunk was on 83331 **/
/** chunk id: 381924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
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

function f(e, t) {
  let n = (0, r.e7)([s.Z], () => s.Z.can(d.Plq.CONNECT, e), [e]),
    f = (0, r.e7)([u.Z], () => u.Z.getVoiceChannelId()),
    g = (0, c.tT)(t),
    h = f === e.id;
  return e.isGuildVocal() && n && null != g && !h ? (0, i.jsx)(l.sN, {
    id: "join-muted-custom-join-sound",
    label: Z.intl.string(Z.t.saLMWc),
    action: () => {
      (0, o.Db)(e.id), a.default.selectVoiceChannel(e.id)
    }
  }) : null
}