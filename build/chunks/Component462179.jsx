/** Chunk was on 4096 **/
/** chunk id: 462179, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk854698 = require("./854698.js"),
  Chunk118998 = require("./118998.js"),
  Chunk139712 = require("./139712.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function T(t) {
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

function w(t) {
  let {
    guild: e,
    channel: w,
    guildScheduledEvent: S,
    isActive: D,
    recurrenceId: N,
    onActionTaken: I
  } = t, {
    scheduled_start_time: G,
    id: H,
    entity_type: L,
    guild_id: W
  } = S, {
    canManageGuildEvent: V
  } = (0, s.XJ)(null != w ? w : e), z = V(S), A = (0, y.ZP)(S), X = (0, E.T)(null == w ? true : w.id, S.id), {
    withinStartWindow: U
  } = (0, C.ub)(G), R = (0, i.e7)([p.Z], () => null == w || !w.isGuildVocal() || p.Z.can(_.Plq.CONNECT, w), [w]), q = (0, c.J)(W), J = (0, b.Z)(N, H);

  function M(t) {
    t.stopPropagation(), (0, j.Z)(H, N, W)
  }
  async function Y(t) {
    t.stopPropagation(), await a.Z.joinGuild(W), h.Z.addConditionalChangeListener(() => null == h.Z.getGuild(W) || (D || M(t), function(t) {
      t.stopPropagation();
      let e = f.ZP.getDefaultChannel(W);
      (0, r.pTH)(), (0, d.XU)(W, null == e ? true : e.id)
    }(t), false))
  }
  return {
    onDeleteClick: z ? function(t) {
      t.stopPropagation(), z && !D && (0, r.h7j)(t => (0, l.jsx)(r.ConfirmModal, k(T({}, t), {
        header: O.intl.string(O.t.R5bpin),
        confirmText: O.intl.string(O.t.oyYWHE),
        cancelText: O.intl.string(O.t["ETE/oC"]),
        onConfirm: () => Z.Z.deleteGuildEvent(H, W),
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
        return n => (0, l.jsx)(t, T({
          guildEventId: H,
          recurrenceId: N,
          channel: w,
          guild: e
        }, n))
      })
    },
    onJoinClick: R || q ? function(t) {
      if (t.stopPropagation(), q) {
        null == I || I(), (0, o.hk)(W);
        return
      }(null == w ? true : w.isGuildStageVoice()) ? ((0, g.Cq)(w), null == I || I()) : (null == w ? true : w.isGuildVoice()) && (Z.Z.joinVoiceEvent(w.guild_id, w.id), null == I || I())
    } : true,
    onRsvpClick: M,
    onStartClick: z && U && !(null == J ? true : J.is_canceled) ? function(t) {
      t.stopPropagation(), (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("84722"), n.e("14531")]).then(n.bind(n, 296864));
        return e => (0, l.jsx)(t, k(T({}, e), {
          event: S,
          onSuccess: I
        }))
      })
    } : true,
    onInviteClick: function(t) {
      if (t.stopPropagation(), null != e) {
        if (!(0, P.T)(A, X, w)) {
          let t = (0, P.H)({
            guildId: W,
            guildEventId: H
          });
          (0, m.JG)(t), v.default.track(_.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: W,
            guild_scheduled_event_id: H
          });
          return
        }(0, r.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("49049"), n.e("7654"), n.e("27267")]).then(n.bind(n, 560114));
          return n => (0, l.jsx)(t, k(T({}, n), {
            guild: e,
            channel: w,
            guildScheduledEvent: S,
            source: _.t4x.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: z && L === x.WX.EXTERNAL && D ? function(t) {
      if (t.stopPropagation(), !z) return;
      let e = () => {
        Z.Z.endEvent(H, W), (0, r.pTH)()
      };
      (0, r.h7j)(t => (0, l.jsx)(r.ConfirmModal, k(T({}, t), {
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
    onJoinGuildClick: Y
  }
}