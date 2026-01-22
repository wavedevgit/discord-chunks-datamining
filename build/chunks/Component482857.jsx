/** Chunk was on 26589 **/
/** chunk id: 482857, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => G
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

function D(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), l.forEach(function(e) {
      var l;
      l = n[e], e in t ? Object.defineProperty(t, e, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = l
    })
  }
  return t
}

function k(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      n.push.apply(n, l)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function G(t) {
  let {
    guild: e,
    channel: G,
    guildScheduledEvent: N,
    isActive: S,
    recurrenceId: I,
    onActionTaken: T
  } = t, {
    scheduled_start_time: L,
    id: V,
    entity_type: X,
    guild_id: R
  } = N, {
    canManageGuildEvent: q
  } = (0, d.nr)(null != G ? G : e), z = q(N), H = (0, b.Ay)(N), K = (0, C.e)(null == G ? true : G.id, N.id), {
    withinStartWindow: M
  } = (0, _.CC)(L), U = (0, i.bG)([h.A], () => null == G || !G.isGuildVocal() || h.A.can(x.xBc.CONNECT, G), [G]), B = (0, c.H)(R), Y = (0, E.A)(I, V);

  function Z(t) {
    t.stopPropagation(), (0, O.A)(V, I, R)
  }
  async function W(t) {
    t.stopPropagation(), await s.A.joinGuild(R), f.A.addConditionalChangeListener(() => {
      let e;
      return null == f.A.getGuild(R) || (S || Z(t), t.stopPropagation(), e = p.Ay.getDefaultChannel(R), (0, u.s7G)(), (0, g.uh)(R, null == e ? true : e.id), false)
    })
  }
  return {
    onDeleteClick: z ? function(t) {
      t.stopPropagation(), z && !S && (0, r.A)({
        title: w.intl.string(w.t.R5bpin),
        subtitle: w.intl.string(w.t.v2GWNQ),
        confirmText: w.intl.string(w.t.oyYWHE),
        onConfirm: () => A.A.deleteGuildEvent(V, R)
      })
    } : true,
    onContextMenu: function(t) {
      t.stopPropagation(), null != e && (0, a.L3)(t, async () => {
        let {
          default: t
        } = await Promise.all([n.e("95950"), n.e("7869")]).then(n.bind(n, 406406));
        return n => (0, l.jsx)(t, D({
          guildEventId: V,
          recurrenceId: I,
          channel: G,
          guild: e
        }, n))
      })
    },
    onJoinClick: U || B ? function(t) {
      if (t.stopPropagation(), B) {
        null == T || T(), (0, o.Ze)(R);
        return
      }(null == G ? true : G.isGuildStageVoice()) ? ((0, v.av)(G), null == T || T()) : (null == G ? true : G.isGuildVoice()) && (A.A.joinVoiceEvent(G.guild_id, G.id), null == T || T())
    } : true,
    onRsvpClick: Z,
    onStartClick: z && M && !(null == Y ? true : Y.is_canceled) ? function(t) {
      t.stopPropagation(), (0, u.mMO)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("77223"), n.e("5784")]).then(n.bind(n, 199226));
        return e => (0, l.jsx)(t, k(D({}, e), {
          event: N,
          onSuccess: T
        }))
      })
    } : true,
    onInviteClick: function(t) {
      if (t.stopPropagation(), null != e) {
        if (!(0, j.y)(H, K, G)) {
          let t = (0, j.d)({
            guildId: R,
            guildEventId: V
          });
          (0, m.C)(t), y.default.track(x.HAw.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: R,
            guild_scheduled_event_id: V
          });
          return
        }(0, u.mMO)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("43600"), n.e("28136"), n.e("41278")]).then(n.bind(n, 234355));
          return n => (0, l.jsx)(t, k(D({}, n), {
            guild: e,
            channel: G,
            guildScheduledEvent: N,
            source: x.PE1.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: z && X === P.Ps.EXTERNAL && S ? function(t) {
      t.stopPropagation(), z && (0, r.A)({
        title: w.intl.string(w.t.qaYzPA),
        subtitle: w.intl.string(w.t.bnDQ7E),
        confirmText: w.intl.string(w.t.mjB9pd),
        onConfirm: () => {
          A.A.endEvent(V, R), (0, u.s7G)()
        }
      })
    } : true,
    onJoinGuildClick: W
  }
}