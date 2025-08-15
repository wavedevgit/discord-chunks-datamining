/** Chunk was on 92522 **/
/** chunk id: 192079, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  ER: () => s,
  kk: () => _,
  s$: () => E
}), require("./388685.js"), require("./392711.js");
var Chunk19780 = require("./19780.js"),
  Chunk5192 = require("./5192.js"),
  Chunk700785 = require("./700785.js"),
  Chunk427679 = require("./427679.js"),
  Chunk157925 = require("./157925.js"),
  Chunk981631 = require("./981631.js"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx");

function s(n, e, t, i) {
  let l = e[0],
    u = r.ZP.getName(n, t, l),
    a = null != i ? i : e.length;
  return 1 === a && null != l ? u : null == l ? d.intl.formatToPlainString(d.t.chmM9P, {
    count: a
  }) : d.intl.formatToPlainString(d.t.GhkJ29, {
    name: u,
    count: a - 1
  })
}

function _(n, e) {
  switch (n) {
    case c.aC.OWNER:
      return d.intl.string(d.t.icuNBA);
    case c.aC.ADMINISTRATOR:
      return d.intl.string(d.t.eTmN5e);
    case c.aC.MEMBER:
    case c.aC.ROLE:
      return e ? d.intl.string(d.t.Hw3XW1) : d.intl.string(d.t.YieyPj);
    case c.aC.EMPTY_STATE:
  }
  return null
}

function E(n) {
  let e = u.Z.getStageInstanceByChannel(n.id);
  return {
    channel_id: n.id,
    guild_id: n.guild_id,
    topic: null == e ? true : e.topic,
    media_session_id: i.Z.getMediaSessionId(),
    request_to_speak_state: l.Uu(o.Plq.REQUEST_TO_SPEAK, n) ? a.BM.EVERYONE : a.BM.NO_ONE,
    stage_instance_id: null == e ? true : e.id
  }
}