/** Chunk was on 4096 **/
/** chunk id: 462179, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk357156 = require("./357156.js"),
  Chunk703656 = require("./703656.js"),
  Chunk922482 = require("./922482.js"),
  Chunk430104 = require("./430104.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk658041 = require("./658041.js"),
  Chunk482241 = require("./482241.js"),
  Chunk951539 = require("./951539.js"),
  Chunk894017 = require("./894017.js"),
  Chunk274311 = require("./274311.js"),
  Chunk854698 = require("./854698.js"),
  Chunk118998 = require("./118998.js"),
  Chunk139712 = require("./139712.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

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

function T(t, e) {
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

function N(t) {
  let {
    guild: e,
    channel: N,
    guildScheduledEvent: I,
    isActive: G,
    recurrenceId: H,
    onActionTaken: L
  } = t, {
    scheduled_start_time: W,
    id: V,
    entity_type: z,
    guild_id: A
  } = I, {
    canManageGuildEvent: X
  } = (0, d.XJ)(null != N ? N : e), U = X(I), R = (0, E.ZP)(I), q = (0, _.T)(null == N ? true : N.id, I.id), {
    withinStartWindow: J
  } = (0, j.ub)(W), Y = (0, i.e7)([m.Z], () => null == N || !N.isGuildVocal() || m.Z.can(S.Plq.CONNECT, N), [N]), B = (0, s.J)(A), M = (0, C.Z)(H, V);

  function K(t) {
    t.stopPropagation(), (0, O.Z)(V, H, A)
  }
  async function Q(t) {
    t.stopPropagation(), await o.Z.joinGuild(A), v.Z.addConditionalChangeListener(() => null == v.Z.getGuild(A) || (G || K(t), function(t) {
      t.stopPropagation();
      let e = h.ZP.getDefaultChannel(A);
      (0, u.pTH)(), (0, g.XU)(A, null == e ? true : e.id)
    }(t), false))
  }
  return {
    onDeleteClick: U ? function(t) {
      t.stopPropagation(), U && !G && (0, r.Z)({
        title: k.intl.string(k.t.R5bpin),
        subtitle: k.intl.string(k.t.v2GWNQ),
        confirmText: k.intl.string(k.t.oyYWHE),
        onConfirm: () => P.Z.deleteGuildEvent(V, A)
      })
    } : true,
    onContextMenu: function(t) {
      t.stopPropagation(), null != e && (0, a.jW)(t, async () => {
        let {
          default: t
        } = await Promise.all([n.e("91973"), n.e("470")]).then(n.bind(n, 215269));
        return n => (0, l.jsx)(t, D({
          guildEventId: V,
          recurrenceId: H,
          channel: N,
          guild: e
        }, n))
      })
    },
    onJoinClick: Y || B ? function(t) {
      if (t.stopPropagation(), B) {
        null == L || L(), (0, c.hk)(A);
        return
      }(null == N ? true : N.isGuildStageVoice()) ? ((0, f.Cq)(N), null == L || L()) : (null == N ? true : N.isGuildVoice()) && (P.Z.joinVoiceEvent(N.guild_id, N.id), null == L || L())
    } : true,
    onRsvpClick: K,
    onStartClick: U && J && !(null == M ? true : M.is_canceled) ? function(t) {
      t.stopPropagation();
      let e = () => {
        (0, u.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("84722"), n.e("65413")]).then(n.bind(n, 296864));
          return e => (0, l.jsx)(t, T(D({}, e), {
            event: I,
            onSuccess: L
          }))
        })
      };
      (0, p.u1)() && (0, b.s)(I) ? (0, u.ZDy)(async () => {
        let {
          AgeVerificationRequiredSpeedbumpModal: t
        } = await n.e("26513").then(n.bind(n, 31362));
        return n => (0, l.jsx)(t, T(D({}, n), {
          onStart: () => e()
        }))
      }) : e()
    } : true,
    onInviteClick: function(t) {
      if (t.stopPropagation(), null != e) {
        if (!(0, x.T)(R, q, N)) {
          let t = (0, x.H)({
            guildId: A,
            guildEventId: V
          });
          (0, y.JG)(t), Z.default.track(S.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: A,
            guild_scheduled_event_id: V
          });
          return
        }(0, u.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("49049"), n.e("7654"), n.e("40283")]).then(n.bind(n, 560114));
          return n => (0, l.jsx)(t, T(D({}, n), {
            guild: e,
            channel: N,
            guildScheduledEvent: I,
            source: S.t4x.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: U && z === w.WX.EXTERNAL && G ? function(t) {
      t.stopPropagation(), U && (0, r.Z)({
        title: k.intl.string(k.t.qaYzPA),
        subtitle: k.intl.string(k.t.bnDQ7E),
        confirmText: k.intl.string(k.t.mjB9pd),
        onConfirm: () => {
          P.Z.endEvent(V, A), (0, u.pTH)()
        }
      })
    } : true,
    onJoinGuildClick: Q
  }
}