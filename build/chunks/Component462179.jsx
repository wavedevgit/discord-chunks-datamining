/** Chunk was on 4096 **/
/** chunk id: 462179, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
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
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
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

function w(t) {
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

function S(t, e) {
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

function D(t) {
  let {
    guild: e,
    channel: D,
    guildScheduledEvent: T,
    isActive: N,
    recurrenceId: I,
    onActionTaken: G
  } = t, {
    scheduled_start_time: H,
    id: L,
    entity_type: W,
    guild_id: V
  } = T, {
    canManageGuildEvent: z
  } = (0, d.XJ)(null != D ? D : e), A = z(T), X = (0, y.ZP)(T), U = (0, E.T)(null == D ? true : D.id, T.id), {
    withinStartWindow: R
  } = (0, C.ub)(H), q = (0, i.e7)([v.Z], () => null == D || !D.isGuildVocal() || v.Z.can(O.Plq.CONNECT, D), [D]), J = (0, s.J)(V), Y = (0, P.Z)(I, L);

  function B(t) {
    t.stopPropagation(), (0, j.Z)(L, I, V)
  }
  async function M(t) {
    t.stopPropagation(), await o.Z.joinGuild(V), h.Z.addConditionalChangeListener(() => null == h.Z.getGuild(V) || (N || B(t), function(t) {
      t.stopPropagation();
      let e = p.ZP.getDefaultChannel(V);
      (0, u.pTH)(), (0, g.XU)(V, null == e ? true : e.id)
    }(t), false))
  }
  return {
    onDeleteClick: A ? function(t) {
      t.stopPropagation(), A && !N && (0, r.Z)({
        title: k.intl.string(k.t.R5bpin),
        subtitle: k.intl.string(k.t.v2GWNQ),
        confirmText: k.intl.string(k.t.oyYWHE),
        onConfirm: () => b.Z.deleteGuildEvent(L, V)
      })
    } : true,
    onContextMenu: function(t) {
      t.stopPropagation(), null != e && (0, a.jW)(t, async () => {
        let {
          default: t
        } = await Promise.all([n.e("91973"), n.e("470")]).then(n.bind(n, 215269));
        return n => (0, l.jsx)(t, w({
          guildEventId: L,
          recurrenceId: I,
          channel: D,
          guild: e
        }, n))
      })
    },
    onJoinClick: q || J ? function(t) {
      if (t.stopPropagation(), J) {
        null == G || G(), (0, c.hk)(V);
        return
      }(null == D ? true : D.isGuildStageVoice()) ? ((0, f.Cq)(D), null == G || G()) : (null == D ? true : D.isGuildVoice()) && (b.Z.joinVoiceEvent(D.guild_id, D.id), null == G || G())
    } : true,
    onRsvpClick: B,
    onStartClick: A && R && !(null == Y ? true : Y.is_canceled) ? function(t) {
      t.stopPropagation(), (0, u.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("84722"), n.e("65413")]).then(n.bind(n, 296864));
        return e => (0, l.jsx)(t, S(w({}, e), {
          event: T,
          onSuccess: G
        }))
      })
    } : true,
    onInviteClick: function(t) {
      if (t.stopPropagation(), null != e) {
        if (!(0, _.T)(X, U, D)) {
          let t = (0, _.H)({
            guildId: V,
            guildEventId: L
          });
          (0, Z.JG)(t), m.default.track(O.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: V,
            guild_scheduled_event_id: L
          });
          return
        }(0, u.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("7654"), n.e("49049"), n.e("40283")]).then(n.bind(n, 560114));
          return n => (0, l.jsx)(t, S(w({}, n), {
            guild: e,
            channel: D,
            guildScheduledEvent: T,
            source: O.t4x.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: A && W === x.WX.EXTERNAL && N ? function(t) {
      t.stopPropagation(), A && (0, r.Z)({
        title: k.intl.string(k.t.qaYzPA),
        subtitle: k.intl.string(k.t.bnDQ7E),
        confirmText: k.intl.string(k.t.mjB9pd),
        onConfirm: () => {
          b.Z.endEvent(L, V), (0, u.pTH)()
        }
      })
    } : true,
    onJoinGuildClick: M
  }
}