/** Chunk was on web.js **/
/** chunk id: 310323, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk401843 = require("./401843.js"),
  Chunk439372 = require("./439372.js"),
  Chunk709710 = require("./709710.js"),
  Chunk601900 = require("./601900.js"),
  Chunk253932 = require("./253932.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk498642 = require("./498642.js"),
  Chunk873985 = require("./873985.js"),
  Chunk309010 = require("./309010.js"),
  Chunk162605 = require("./162605.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk652896 = require("./652896.js"),
  Chunk502075 = require("./502075.js"),
  Chunk652215 = require("./652215.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}
let S = (0, Chunk735438.debounce)(Chunk401843.a8, 1e3),
  T = {},
  C = {},
  N = 3 * Chunk927813.A.Millis.MINUTE,
  w = 5 * Chunk927813.A.Millis.SECOND,
  R = 12 * Chunk927813.A.Millis.SECOND,
  P = null;

function D(e) {
  var t;
  null == (t = T[e]) || t.stop(), delete T[e]
}

function L(e) {
  var t;
  null == (t = C[e]) || t.stop(), delete C[e]
}

function x(e, t) {
  if (m.A.getVoiceChannelId() !== e) returnfalse;
  let n = p.A.getChannel(e);
  if (null == n || !n.isDM() && !n.isGuildStageVoice() || null != d.A.getActiveStreamForUser(t, n.getGuildId())) returnfalse;
  let r = d.A.getStreamForUser(t, n.getGuildId());
  if (null == r) returnfalse;
  let i = (0, b._z)(r);
  return i !== P && (P = i, (0, o.A9)(r, {
    noFocus: true
  }), true)
}

function M(e, t) {
  let n = null != t ? t : h.A.getPreferredRegion();
  null != n && n !== h.A.getRegion(g.A.getHostname(e)) && (0, o.dA)(e, n)
}

function j(e, t) {
  var n;
  if (g.A.getAllActiveStreamKeys().includes(e)) return;
  let r = null != (n = C[e]) ? n : new i.Ep;
  C[e] = r, r.start(t ? R : w, () => {
    a.h.dispatch({
      type: "STREAM_TIMED_OUT",
      streamKey: e
    })
  })
}
class k extends Chunk439372.A {
  constructor(...e) {
    super(...e), A(this, "handleStreamWatch", e => {
      let {
        streamKey: t,
        allowMultiple: n
      } = e, {
        channelId: r
      } = (0, b.Iy)(t), i = p.A.getChannel(r);
      j(t, null == i ? true : i.isGuildStageVoice()), D(t), n || d.A.getAllActiveStreams().forEach(e => {
        let n = (0, b._z)(e);
        e.ownerId === f.default.getId() || n !== t && (0, o.vN)(n, false)
      })
    }), A(this, "handleStreamStart", e => {
      let {
        channelId: t,
        streamType: n,
        guildId: r
      } = e, i = p.A.getChannel(t);
      j((0, b._z)({
        streamType: n,
        guildId: r,
        channelId: t,
        ownerId: f.default.getId()
      }), null == i ? true : i.isGuildStageVoice()), this.platformHandleStreamStart(e)
    }), A(this, "handleStreamCreate", e => {
      var t;
      let {
        streamKey: n
      } = e;
      L(n);
      let {
        ownerId: r,
        guildId: i
      } = (0, b.Iy)(n);
      if (null == i || null == r || r !== (null == (t = E.default.getCurrentUser()) ? true : t.id)) return;
      let a = _.A.getMemberCount(i);
      null == a || a <= O.oe || a > O.G1 || u.wv.getSetting() && S(n)
    }), A(this, "handleStreamUpdate", e => {
      let {
        streamKey: t
      } = e;
      L(t)
    }), A(this, "handleStreamDelete", e => {
      let {
        reason: t,
        streamKey: n
      } = e;
      L(n), t === v.H2B.STREAM_FULL && ((0, l.QW)(I({
        type: l.iy.STREAM_FULL
      }, (0, c.id)(n))), (0, o.Xi)(n, false), this.platformShowStreamFull())
    }), A(this, "handleStreamClose", e => {
      let {
        streamKey: t
      } = e;
      D(t), L(t)
    }), A(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t
      } = e;
      if (null == t) return;
      P = null;
      let n = d.A.getAllApplicationStreamsForChannel(t).filter(e => {
        let {
          ownerId: t
        } = e;
        return t !== f.default.getId()
      })[0];
      null != n && x(t, n.ownerId)
    }), A(this, "handleVoiceStateUpdates", e => {
      let {
        voiceStates: t
      } = e;
      t.forEach(e => {
        let {
          userId: t,
          channelId: n,
          guildId: r,
          selfStream: a
        } = e;
        if (this.platformHandleVoiceStateUpdate(e), t !== f.default.getId() && null != n) {
          if (a && x(n, t)) return;
          let e = d.A.getActiveStreamForUser(t, r);
          if (null != e && e.channelId === n) {
            if (!a && e.state !== v.XYD.ENDED) {
              var s;
              let t = (0, b._z)(e),
                n = null != (s = T[t]) ? s : new i.Ep;
              n.start(N, () => (0, o.Xi)(t, false)), T[t] = n
            }
            if (a && e.state === v.XYD.ENDED) {
              D((0, b._z)(e));
              let n = d.A.getStreamForUser(t, r);
              if (null == n) return;
              (0, o.A9)(n)
            }
          }
        }
      })
    }), A(this, "handleCallUpdate", e => {
      let {
        channelId: t,
        region: n
      } = e, r = d.A.getCurrentUserActiveStream();
      (null == r ? true : r.channelId) === t && M((0, b._z)(r), n)
    }), A(this, "handleChannelUpdates", e => {
      let {
        channels: t
      } = e, n = d.A.getCurrentUserActiveStream();
      if (null != n)
        for (let e of t) n.channelId === e.id && M((0, b._z)(n), e.rtcRegion)
    }), A(this, "actions", {
      STREAM_WATCH: this.handleStreamWatch,
      STREAM_START: this.handleStreamStart,
      STREAM_CREATE: this.handleStreamCreate,
      STREAM_UPDATE: this.handleStreamUpdate,
      STREAM_DELETE: this.handleStreamDelete,
      STREAM_CLOSE: this.handleStreamClose,
      CALL_UPDATE: this.handleCallUpdate,
      CHANNEL_UPDATES: this.handleChannelUpdates,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates
    })
  }
}