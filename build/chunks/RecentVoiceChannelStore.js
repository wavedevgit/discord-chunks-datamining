/** Chunk was on 7685 **/
/** chunk id: 648427, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./667532.js");
var l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = [],
  h = new Set,
  g = [],
  f = new Set;

function p(e) {
  let {
    channelId: t,
    history: n,
    historySet: l
  } = e;
  if (l.has(t)) {
    let e = n.filter(e => e !== t);
    return e.unshift(t), {
      didChange: true,
      history: e,
      historySet: new Set([...e])
    }
  }
  let r = [t, ...n],
    i = new Set(l);
  return (i.add(t), r.length > 10) ? (r.length = 10, {
    didChange: true,
    history: r,
    historySet: new Set([...r])
  }) : {
    didChange: true,
    history: r,
    historySet: i
  }
}
class I extends(l = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t, n;
    this.waitFor(o.Ay, u.A, a.A), d = null != (t = null == e ? true : e.voiceChannelHistory) ? t : [], g = null != (n = null == e ? true : e.textChannelHistory) ? n : [], h = new Set([...d]), f = new Set([...g])
  }
  getState() {
    return {
      voiceChannelHistory: d,
      textChannelHistory: g
    }
  }
  getVoiceChannelHistory() {
    return d
  }
  getTextChannelHistory() {
    return g
  }
}
c(I, "displayName", "RecentVoiceChannelStore"), c(I, "persistKey", "RecentVoiceChannelStore"), c(I, "migrations", [e => {
  var t, n, l;
  return null == e || "object" != typeof e ? {
    voiceChannelHistory: [],
    textChannelHistory: []
  } : {
    voiceChannelHistory: null != (t = null != (n = e.voiceChannelHistory) ? n : e.channelHistory) ? t : [],
    textChannelHistory: null != (l = e.textChannelHistory) ? l : []
  }
}]);
let m = new I(Chunk73153.h, {
  POST_CONNECTION_OPEN: function() {
    h = new Set([...d]), f = new Set([...g])
  },
  VOICE_CHANNEL_SELECT: function(e) {
    var t, n;
    let {
      channelId: l
    } = e;
    if (null == l || !(null != (t = null == (n = a.A.getChannel(l)) ? true : n.isVocal()) && t)) returnfalse;
    let r = p({
      channelId: l,
      history: d,
      historySet: h
    });
    return d = r.history, h = r.historySet, r.didChange
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) returnfalse;
    let n = a.A.getChannel(t);
    if (null == n || n.isVocal() || n.isPrivate() || !(0, s.ke)(n.type)) returnfalse;
    let l = p({
      channelId: t,
      history: g,
      historySet: f
    });
    return g = l.history, f = l.historySet, l.didChange
  }
})