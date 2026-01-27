/** Chunk was on web.js **/
/** chunk id: 520165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk15285 = require("./15285.js"),
  Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk290863 = require("./290863.js"),
  Chunk383501 = require("./383501.js"),
  Chunk461213 = require("./461213.js"),
  Chunk977997 = require("./977997.js"),
  Chunk661191 = require("./661191.js"),
  Chunk372684 = require("./372684.js"),
  Chunk696016 = require("./696016.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  if (null != e) return {
    state: e.state,
    details: e.details,
    timestamps: e.timestamps,
    party: null != e.party ? {
      id: e.party.id,
      size: e.party.size
    } : true
  }
}

function E(e) {
  var t, n, d;
  if (null != e) {
    let {
      ownerId: t
    } = i.Iy(e);
    if (t !== o.default.getId()) {
      let e = l.A.getActivities(t).find(e => e.type === h.$pd.PLAYING);
      return {
        sourceName: null == e ? true : e.name,
        sourceApplicationId: null == e ? true : e.application_id,
        activity: g(e)
      }
    }
  }
  let f = a.A.getStreamerActiveStreamMetadata(),
    p = null == f ? true : f.pid,
    _ = null == f ? true : f.sourceName,
    m = (() => {
      if (null == f) return r.Ay.getVisibleGame();
      {
        let e = null != p ? r.Ay.getGameForPID(p) : null,
          t = null != _ ? r.Ay.getGameForName(_) : null;
        return null != e ? e : t
      }
    })(),
    E = null != (t = null == f ? true : f.id) ? t : null == m ? true : m.id,
    y = null != (n = null == f ? true : f.sourceName) ? n : null == m ? true : m.name,
    b = c.A.getChannelId(),
    O = null == y && null != b;
  if (O) {
    let e = null != b ? s.A.getChannel(b) : null;
    y = null != (d = null == e ? true : e.name) ? d : ""
  }
  return {
    sourceName: y,
    sourceApplicationId: E,
    activity: g(u.A.getActivities(false).find(e => e.type === h.$pd.PLAYING && e.application_id === E)),
    isVoiceOnly: O
  }
}

function y(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "manual",
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : p.nQ.CLIP,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : [],
    i = arguments.length > 4 ? arguments[4] : true,
    {
      sourceName: a,
      sourceApplicationId: s,
      activity: l,
      isVoiceOnly: u
    } = E(e),
    h = c.A.getChannelId(),
    g = c.A.getGuildId(),
    y = new Set([o.default.getId()]);
  null != h && (y = y.union(new Set(Object.keys(d.A.getVoiceStatesForChannel(h)))));
  let b = "auto" === t;
  r.forEach(e => {
    let {
      signal: t
    } = e;
    "userId" in t && null != t.userId && y.add(t.userId)
  });
  let O = u && n === p.nQ.CLIP ? p.nQ.VOICE_CLIP : n;
  return {
    id: f.default.fromTimestamp(Date.now()),
    version: _.kd,
    applicationName: null != a ? a : m.intl.string(m.t.qtSJxb),
    applicationId: s,
    activity: l,
    users: Array.from(y),
    clipMethod: t,
    isTemporary: b,
    guildId: null != g ? g : true,
    channelId: null != h ? h : true,
    timeline: r,
    decision: i,
    length: 0,
    thumbnail: "",
    type: O
  }
}