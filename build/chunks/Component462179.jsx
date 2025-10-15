/** Chunk was on 4096 **/
/** chunk id: 462179, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
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
  Chunk954313 = require("./954313.js"),
  Chunk118998 = require("./118998.js"),
  Chunk139712 = require("./139712.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function S(t) {
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

function w(t, e) {
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
    isActive: k,
    recurrenceId: N,
    onActionTaken: I
  } = t, {
    scheduled_start_time: G,
    id: H,
    entity_type: L,
    guild_id: V
  } = T, {
    canManageGuildEvent: z
  } = (0, s.XJ)(null != D ? D : e), A = z(T), W = (0, E.ZP)(T), X = (0, b.T)(null == D ? true : D.id, T.id), {
    withinStartWindow: R
  } = (0, C.ub)(G), U = (0, i.e7)([p.Z], () => null == D || !D.isGuildVocal() || p.Z.can(_.Plq.CONNECT, D), [D]), J = (0, c.J)(V), M = (0, Z.Z)(N, H);

  function Y(t) {
    t.stopPropagation(), (0, j.Z)(H, N, V)
  }
  async function q(t) {
    t.stopPropagation(), await a.Z.joinGuild(V), h.Z.addConditionalChangeListener(() => null == h.Z.getGuild(V) || (k || Y(t), function(t) {
      t.stopPropagation();
      let e = f.ZP.getDefaultChannel(V);
      (0, r.pTH)(), (0, d.XU)(V, null == e ? true : e.id)
    }(t), false))
  }
  return {
    onDeleteClick: A ? function(t) {
      t.stopPropagation(), A && !k && (0, r.h7j)(t => (0, l.jsx)(r.ConfirmModal, w(S({}, t), {
        header: O.intl.string(O.t.R5bpin),
        confirmText: O.intl.string(O.t.oyYWHE),
        cancelText: O.intl.string(O.t["ETE/oC"]),
        onConfirm: () => y.Z.deleteGuildEvent(H, V),
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: O.intl.string(O.t.v2GWNQ)
        })
      })))
    } : true,
    onContextMenu: function(t) {
      t.stopPropagation(), null != e && (0, u.jW)(t, async () => {
        let {
          default: t
        } = await Promise.all([n.e("91973"), n.e("470")]).then(n.bind(n, 215269));
        return n => (0, l.jsx)(t, S({
          guildEventId: H,
          recurrenceId: N,
          channel: D,
          guild: e
        }, n))
      })
    },
    onJoinClick: U || J ? function(t) {
      if (t.stopPropagation(), J) {
        null == I || I(), (0, o.hk)(V);
        return
      }(null == D ? true : D.isGuildStageVoice()) ? ((0, g.Cq)(D), null == I || I()) : (null == D ? true : D.isGuildVoice()) && (y.Z.joinVoiceEvent(D.guild_id, D.id), null == I || I())
    } : true,
    onRsvpClick: Y,
    onStartClick: A && R && !(null == M ? true : M.is_canceled) ? function(t) {
      t.stopPropagation(), (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("84722"), n.e("14531")]).then(n.bind(n, 296864));
        return e => (0, l.jsx)(t, w(S({}, e), {
          event: T,
          onSuccess: I
        }))
      })
    } : true,
    onInviteClick: function(t) {
      if (t.stopPropagation(), null != e) {
        if (!W || !X) {
          let t = (0, P.H)({
            guildId: V,
            guildEventId: H
          });
          (0, m.JG)(t), v.default.track(_.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: V,
            guild_scheduled_event_id: H
          });
          return
        }(0, r.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("74318"), n.e("49049"), n.e("7654"), n.e("98953")]).then(n.bind(n, 560114));
          return n => (0, l.jsx)(t, w(S({}, n), {
            guild: e,
            channel: D,
            guildScheduledEvent: T,
            source: _.InstantInviteSources.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: A && L === x.WX.EXTERNAL && k ? function(t) {
      if (t.stopPropagation(), !A) return;
      let e = () => {
        y.Z.endEvent(H, V), (0, r.pTH)()
      };
      (0, r.h7j)(t => (0, l.jsx)(r.ConfirmModal, w(S({}, t), {
        header: O.intl.string(O.t.qaYzPA),
        confirmText: O.intl.string(O.t.mjB9pd),
        cancelText: O.intl.string(O.t["ETE/oC"]),
        onConfirm: e,
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: O.intl.string(O.t.bnDQ7E)
        })
      })))
    } : true,
    onJoinGuildClick: q
  }
}