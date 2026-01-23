/** Chunk was on 97492 **/
/** chunk id: 649247, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk181079 = require("./181079.js"),
  Chunk734057 = require("./734057.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk996439 = require("./996439.js"),
  Chunk661191 = require("./661191.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk652215 = require("./652215.js");

function h(e) {
  let {
    voiceState: t,
    userNick: n,
    user: r
  } = e, l = (0, s.hz)(t, n);
  return {
    user: r,
    voiceState: t,
    nick: n,
    comparator: l
  }
}

function f(e) {
  let [t] = (0, r.bG)([u.A, i.A, l.A], () => {
    let t;
    return [(t = e === p.YYv ? c.default.keys(l.A.getFavoriteChannels()).map(e => i.A.getChannel(e)).filter(a.Vq).filter(e => e.isGuildStageVoice()) : u.A.getChannels(e)).reduce((e, t) => {
      let n = u.A.getMutableParticipants(t.id, d.ip.SPEAKER);
      return e[t.id] = n.filter(e => e.type === d.wY.VOICE).map(h), e
    }, {}), t.reduce((e, t) => {
      let {
        id: n
      } = t;
      return e + u.A.getParticipantsVersion(n)
    }, 0)]
  }, [e], o.D);
  return t
}