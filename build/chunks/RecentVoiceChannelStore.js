/** Chunk was on 57010 **/
/** chunk id: 648427, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js"), require("./667532.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let c = [],
  h = new Set,
  f = [],
  g = new Set;

function I(e) {
  let {
    channelId: t,
    history: n,
    historySet: r
  } = e;
  if (r.has(t)) {
    let e = n.filter(e => e !== t);
    return e.unshift(t), {
      didChange: true,
      history: e,
      historySet: new Set([...e])
    }
  }
  let i = [t, ...n],
    l = new Set(r);
  return (l.add(t), i.length > 10) ? (i.length = 10, {
    didChange: true,
    history: i,
    historySet: new Set([...i])
  }) : {
    didChange: true,
    history: i,
    historySet: l
  }
}
class A extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t, n;
    this.waitFor(u.Ay, o.A, a.A), c = null != (t = null == e ? true : e.voiceChannelHistory) ? t : [], f = null != (n = null == e ? true : e.textChannelHistory) ? n : [], h = new Set([...c]), g = new Set([...f])
  }
  getState() {
    return {
      voiceChannelHistory: c,
      textChannelHistory: f
    }
  }
  getVoiceChannelHistory() {
    return c
  }
  getTextChannelHistory() {
    return f
  }
}
d(A, "displayName", "RecentVoiceChannelStore"), d(A, "persistKey", "RecentVoiceChannelStore"), d(A, "migrations", [e => {
  var t, n, r;
  return null == e || "object" != typeof e ? {
    voiceChannelHistory: [],
    textChannelHistory: []
  } : {
    voiceChannelHistory: null != (t = null != (n = e.voiceChannelHistory) ? n : e.channelHistory) ? t : [],
    textChannelHistory: null != (r = e.textChannelHistory) ? r : []
  }
}]);
let S = new A(Chunk73153.h, {
  POST_CONNECTION_OPEN: function() {
    h = new Set([...c]), g = new Set([...f])
  },
  VOICE_CHANNEL_SELECT: function(e) {
    var t, n;
    let {
      channelId: r
    } = e;
    if (null == r || !(null != (t = null == (n = a.A.getChannel(r)) ? true : n.isVocal()) && t)) returnfalse;
    let i = I({
      channelId: r,
      history: c,
      historySet: h
    });
    return c = i.history, h = i.historySet, i.didChange
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) returnfalse;
    let n = a.A.getChannel(t);
    if (null == n || n.isVocal() || n.isPrivate() || !(0, s.ke)(n.type)) returnfalse;
    let r = I({
      channelId: t,
      history: f,
      historySet: g
    });
    return f = r.history, g = r.historySet, r.didChange
  }
})