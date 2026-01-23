/** Chunk was on 77986 **/
/** chunk id: 482857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk202384 = require("./202384.js"),
  Chunk51758 = require("./51758.js"),
  Chunk931991 = require("./931991.js"),
  Chunk976860 = require("./976860.js"),
  Chunk323443 = require("./323443.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk496092 = require("./496092.js"),
  Chunk485394 = require("./485394.js"),
  Chunk722260 = require("./722260.js"),
  Chunk530209 = require("./530209.js"),
  Chunk974930 = require("./974930.js"),
  Chunk625142 = require("./625142.js"),
  Chunk666394 = require("./666394.jsx"),
  Chunk988794 = require("./988794.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  let {
    guild: t,
    channel: P,
    guildScheduledEvent: w,
    isActive: T,
    recurrenceId: D,
    onActionTaken: L
  } = e, {
    scheduled_start_time: G,
    id: R,
    entity_type: U,
    guild_id: V
  } = w, {
    canManageGuildEvent: M
  } = (0, d.nr)(null != P ? P : t), K = M(w), H = (0, m.Ay)(w), F = (0, b.e)(null == P ? true : P.id, w.id), {
    withinStartWindow: B
  } = (0, A.CC)(G), z = (0, r.bG)([v.A], () => null == P || !P.isGuildVocal() || v.A.can(E.xBc.CONNECT, P), [P]), Q = (0, a.H)(V), X = (0, y.A)(D, R);

  function Y(e) {
    e.stopPropagation(), (0, N.A)(R, D, V)
  }
  async function Z(e) {
    e.stopPropagation(), await o.A.joinGuild(V), h.A.addConditionalChangeListener(() => {
      let t;
      return null == h.A.getGuild(V) || (T || Y(e), e.stopPropagation(), t = f.Ay.getDefaultChannel(V), (0, s.s7G)(), (0, _.uh)(V, null == t ? true : t.id), false)
    })
  }
  return {
    onDeleteClick: K ? function(e) {
      e.stopPropagation(), K && !T && (0, i.A)({
        title: k.intl.string(k.t.R5bpin),
        subtitle: k.intl.string(k.t.v2GWNQ),
        confirmText: k.intl.string(k.t.oyYWHE),
        onConfirm: () => p.A.deleteGuildEvent(R, V)
      })
    } : true,
    onContextMenu: function(e) {
      e.stopPropagation(), null != t && (0, c.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("95950"), n.e("7869")]).then(n.bind(n, 406406));
        return n => (0, l.jsx)(e, I({
          guildEventId: R,
          recurrenceId: D,
          channel: P,
          guild: t
        }, n))
      })
    },
    onJoinClick: z || Q ? function(e) {
      if (e.stopPropagation(), Q) {
        null == L || L(), (0, u.Ze)(V);
        return
      }(null == P ? true : P.isGuildStageVoice()) ? ((0, g.av)(P), null == L || L()) : (null == P ? true : P.isGuildVoice()) && (p.A.joinVoiceEvent(P.guild_id, P.id), null == L || L())
    } : true,
    onRsvpClick: Y,
    onStartClick: K && B && !(null == X ? true : X.is_canceled) ? function(e) {
      e.stopPropagation(), (0, s.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("77223"), n.e("5784")]).then(n.bind(n, 199226));
        return t => (0, l.jsx)(e, S(I({}, t), {
          event: w,
          onSuccess: L
        }))
      })
    } : true,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != t) {
        if (!(0, O.y)(H, F, P)) {
          let e = (0, O.d)({
            guildId: V,
            guildEventId: R
          });
          (0, x.C)(e), j.default.track(E.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: V,
            guild_scheduled_event_id: R
          });
          return
        }(0, s.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("43600"), n.e("28136"), n.e("41278")]).then(n.bind(n, 234355));
          return n => (0, l.jsx)(e, S(I({}, n), {
            guild: t,
            channel: P,
            guildScheduledEvent: w,
            source: E.PE1.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: K && U === C.Ps.EXTERNAL && T ? function(e) {
      e.stopPropagation(), K && (0, i.A)({
        title: k.intl.string(k.t.qaYzPA),
        subtitle: k.intl.string(k.t.bnDQ7E),
        confirmText: k.intl.string(k.t.mjB9pd),
        onConfirm: () => {
          p.A.endEvent(R, V), (0, s.s7G)()
        }
      })
    } : true,
    onJoinGuildClick: Z
  }
}