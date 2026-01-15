/** Chunk was on web.js **/
/** chunk id: 550351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk594190 = require("./594190.js"),
  Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk158776 = require("./158776.js"),
  Chunk19780 = require("./19780.js"),
  Chunk885110 = require("./885110.js"),
  Chunk979651 = require("./979651.js"),
  Chunk709054 = require("./709054.js"),
  Chunk894694 = require("./894694.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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
    } = i.my(e);
    if (t !== o.default.getId()) {
      let e = l.Z.getActivities(t).find(e => e.type === h.IIU.PLAYING);
      return {
        sourceName: null == e ? true : e.name,
        sourceApplicationId: null == e ? true : e.application_id,
        activity: g(e)
      }
    }
  }
  let f = a.Z.getStreamerActiveStreamMetadata(),
    p = null == f ? true : f.pid,
    _ = null == f ? true : f.sourceName,
    m = (() => {
      if (null == f) return r.ZP.getVisibleGame();
      {
        let e = null != p ? r.ZP.getGameForPID(p) : null,
          t = null != _ ? r.ZP.getGameForName(_) : null;
        return null != e ? e : t
      }
    })(),
    E = null != (t = null == f ? true : f.id) ? t : null == m ? true : m.id,
    b = null != (n = null == f ? true : f.sourceName) ? n : null == m ? true : m.name,
    y = c.Z.getChannelId(),
    O = null == b && null != y;
  if (O) {
    let e = null != y ? s.Z.getChannel(y) : null;
    b = null != (d = null == e ? true : e.name) ? d : ""
  }
  return {
    sourceName: b,
    sourceApplicationId: E,
    activity: g(u.Z.getActivities(false).find(e => e.type === h.IIU.PLAYING && e.application_id === E)),
    isVoiceOnly: O
  }
}

function b(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "manual",
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : p.NJ.CLIP,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : [],
    i = arguments.length > 4 ? arguments[4] : true,
    {
      sourceName: a,
      sourceApplicationId: s,
      activity: l,
      isVoiceOnly: u
    } = E(e),
    h = c.Z.getChannelId(),
    g = c.Z.getGuildId(),
    b = new Set([o.default.getId()]);
  null != h && (b = b.union(new Set(Object.keys(d.Z.getVoiceStatesForChannel(h)))));
  let y = "auto" === t;
  r.forEach(e => {
    let {
      signal: t
    } = e;
    "userId" in t && null != t.userId && b.add(t.userId)
  });
  let O = u && n === p.NJ.CLIP ? p.NJ.VOICE_CLIP : n;
  return {
    id: f.default.fromTimestamp(Date.now()),
    version: _.Bg,
    applicationName: null != a ? a : m.intl.string(m.t.qtSJxb),
    applicationId: s,
    activity: l,
    users: Array.from(b),
    clipMethod: t,
    isTemporary: y,
    guildId: null != g ? g : true,
    channelId: null != h ? h : true,
    timeline: r,
    decision: i,
    length: 0,
    thumbnail: "",
    type: O
  }
}