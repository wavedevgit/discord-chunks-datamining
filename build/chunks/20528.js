/** Chunk was on web.js **/
/** chunk id: 20528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  Chunk846519 = require("./846519.js"),
  Chunk570140 = require("./570140.js"),
  Chunk872810 = require("./872810.js"),
  Chunk147913 = require("./147913.js"),
  Chunk458725 = require("./458725.js"),
  Chunk442741 = require("./442741.js"),
  Chunk695346 = require("./695346.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk650774 = require("./650774.js"),
  Chunk936349 = require("./936349.js"),
  Chunk944486 = require("./944486.js"),
  Chunk959457 = require("./959457.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk992817 = require("./992817.js"),
  Chunk569545 = require("./569545.js"),
  Chunk70722 = require("./70722.js"),
  Chunk981631 = require("./981631.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
let A = (0, Chunk392711.debounce)(Chunk872810.xc, 1e3),
  C = {},
  N = {},
  R = 3 * Chunk70956.Z.Millis.MINUTE,
  P = 5 * Chunk70956.Z.Millis.SECOND,
  w = 12 * Chunk70956.Z.Millis.SECOND,
  D = null;

function L(e) {
  var t;
  null == (t = C[e]) || t.stop(), delete C[e]
}

function x(e) {
  var t;
  null == (t = N[e]) || t.stop(), delete N[e]
}

function M(e, t) {
  if (m.Z.getVoiceChannelId() !== e) returnfalse;
  let n = _.Z.getChannel(e);
  if (null == n || !n.isDM() && !n.isGuildStageVoice() || null != d.Z.getActiveStreamForUser(t, n.getGuildId())) returnfalse;
  let r = d.Z.getStreamForUser(t, n.getGuildId());
  if (null == r) returnfalse;
  let i = (0, O.V9)(r);
  return i !== D && (D = i, (0, o.rn)(r, {
    noFocus: true
  }), true)
}

function k(e, t) {
  let n = null != t ? t : h.Z.getPreferredRegion();
  null != n && n !== h.Z.getRegion(g.Z.getHostname(e)) && (0, o.dV)(e, n)
}

function j(e, t) {
  var n;
  if (g.Z.getAllActiveStreamKeys().includes(e)) return;
  let r = null != (n = N[e]) ? n : new i.V7;
  N[e] = r, r.start(t ? w : P, () => {
    a.Z.dispatch({
      type: "STREAM_TIMED_OUT",
      streamKey: e
    })
  })
}
class U extends Chunk147913.Z {
  constructor(...e) {
    super(...e), T(this, "handleStreamWatch", e => {
      let {
        streamKey: t,
        allowMultiple: n
      } = e, {
        channelId: r
      } = (0, O.my)(t), i = _.Z.getChannel(r);
      j(t, null == i ? true : i.isGuildStageVoice()), L(t), n || d.Z.getAllActiveStreams().forEach(e => {
        let n = (0, O.V9)(e);
        e.ownerId !== f.default.getId() && n !== t && (0, o.g)(n, false)
      })
    }), T(this, "handleStreamStart", e => {
      let {
        channelId: t,
        streamType: n,
        guildId: r
      } = e, i = _.Z.getChannel(t);
      j((0, O.V9)({
        streamType: n,
        guildId: r,
        channelId: t,
        ownerId: f.default.getId()
      }), null == i ? true : i.isGuildStageVoice()), this.platformHandleStreamStart(e)
    }), T(this, "handleStreamCreate", e => {
      var t;
      let {
        streamKey: n
      } = e;
      x(n);
      let {
        ownerId: r,
        guildId: i
      } = (0, O.my)(n);
      if (null == i || null == r || (0, y.Bx)({
          guildId: i,
          location: "ApplicationStreamingManager"
        }) || r !== (null == (t = E.default.getCurrentUser()) ? true : t.id)) return;
      let a = p.Z.getMemberCount(i);
      null == a || a < 2 || a > v.tB || u.eo.getSetting() && A(n)
    }), T(this, "handleStreamUpdate", e => {
      let {
        streamKey: t
      } = e;
      x(t)
    }), T(this, "handleStreamDelete", e => {
      let {
        reason: t,
        streamKey: n
      } = e;
      x(n), t === I.si2.STREAM_FULL && ((0, l.kr)(S({
        type: l.u.STREAM_FULL
      }, (0, c.rT)(n))), (0, o.aP)(n, false), this.platformShowStreamFull())
    }), T(this, "handleStreamClose", e => {
      let {
        streamKey: t
      } = e;
      L(t), x(t)
    }), T(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t
      } = e;
      if (null == t) return;
      D = null;
      let n = d.Z.getAllApplicationStreamsForChannel(t).filter(e => {
        let {
          ownerId: t
        } = e;
        return t !== f.default.getId()
      })[0];
      null != n && M(t, n.ownerId)
    }), T(this, "handleVoiceStateUpdates", e => {
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
          if (a && M(n, t)) return;
          let e = d.Z.getActiveStreamForUser(t, r);
          if (null != e && e.channelId === n) {
            if (!a && e.state !== I.jm8.ENDED) {
              var s;
              let t = (0, O.V9)(e),
                n = null != (s = C[t]) ? s : new i.V7;
              n.start(R, () => (0, o.aP)(t, false)), C[t] = n
            }
            if (a && e.state === I.jm8.ENDED) {
              L((0, O.V9)(e));
              let n = d.Z.getStreamForUser(t, r);
              if (null == n) return;
              (0, o.rn)(n)
            }
          }
        }
      })
    }), T(this, "handleCallUpdate", e => {
      let {
        channelId: t,
        region: n
      } = e, r = d.Z.getCurrentUserActiveStream();
      (null == r ? true : r.channelId) === t && k((0, O.V9)(r), n)
    }), T(this, "handleChannelUpdates", e => {
      let {
        channels: t
      } = e, n = d.Z.getCurrentUserActiveStream();
      if (null != n)
        for (let e of t) n.channelId === e.id && k((0, O.V9)(n), e.rtcRegion)
    }), T(this, "actions", {
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