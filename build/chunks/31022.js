/** Chunk was on 64271 **/
/** chunk id: 31022, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk853856 = require("./853856.js"),
  Chunk592125 = require("./592125.js"),
  Chunk938475 = require("./938475.js"),
  Chunk823379 = require("./823379.js"),
  Chunk136015 = require("./136015.js"),
  Chunk709054 = require("./709054.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let {
    voiceState: t,
    userNick: n,
    user: r
  } = e, i = (0, o.sQ)(t, n);
  return {
    user: r,
    voiceState: t,
    nick: n,
    comparator: i
  }
}

function h(e) {
  let [t] = (0, r.e7)([u.Z, l.Z, i.Z], () => {
    let t;
    return [(t = e === f.I_8 ? c.default.keys(i.Z.getFavoriteChannels()).map(e => l.Z.getChannel(e)).filter(a.lm).filter(e => e.isGuildStageVoice()) : u.Z.getChannels(e)).reduce((e, t) => {
      let n = u.Z.getMutableParticipants(t.id, d.pV.SPEAKER);
      return e[t.id] = n.filter(e => e.type === d.Ui.VOICE).map(p), e
    }, {}), t.reduce((e, t) => {
      let {
        id: n
      } = t;
      return e + u.Z.getParticipantsVersion(n)
    }, 0)]
  }, [e], s.Q);
  return t
}