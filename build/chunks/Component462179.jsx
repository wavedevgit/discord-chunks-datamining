/** Chunk was on 4096 **/
/** chunk id: 462179, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => S
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
  for (var n = 1; n < arguments.length; n++) {
    var e = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = e[n], n in t ? Object.defineProperty(t, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[n] = l
    })
  }
  return t
}

function w(t, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      e.push.apply(e, l)
    }
    return e
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t
}

function S(t) {
  let {
    guild: n,
    channel: S,
    guildScheduledEvent: k,
    isActive: D,
    recurrenceId: N,
    onActionTaken: I
  } = t, {
    scheduled_start_time: G,
    id: H,
    entity_type: L,
    guild_id: W
  } = k, {
    canManageGuildEvent: V
  } = (0, s.XJ)(null != S ? S : n), z = V(k), A = (0, y.ZP)(k), X = (0, b.T)(null == S ? true : S.id, k.id), {
    withinStartWindow: U
  } = (0, C.ub)(G), R = (0, i.e7)([p.Z], () => null == S || !S.isGuildVocal() || p.Z.can(_.Plq.CONNECT, S), [S]), q = (0, c.J)(W), J = (0, E.Z)(N, H);

  function M(t) {
    t.stopPropagation(), (0, j.Z)(H, N, W)
  }
  async function Y(t) {
    t.stopPropagation(), await a.Z.joinGuild(W), h.Z.addConditionalChangeListener(() => null == h.Z.getGuild(W) || (D || M(t), function(t) {
      t.stopPropagation();
      let n = f.ZP.getDefaultChannel(W);
      (0, r.pTH)(), (0, d.XU)(W, null == n ? true : n.id)
    }(t), false))
  }
  return {
    onDeleteClick: z ? function(t) {
      t.stopPropagation(), z && !D && (0, r.h7j)(t => (0, l.jsx)(r.ConfirmModal, w(T({}, t), {
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
      t.stopPropagation(), null != n && (0, u.jW)(t, async () => {
        let {
          default: t
        } = await Promise.all([e.e("91973"), e.e("470")]).then(e.bind(e, 215269));
        return e => (0, l.jsx)(t, T({
          guildEventId: H,
          recurrenceId: N,
          channel: S,
          guild: n
        }, e))
      })
    },
    onJoinClick: R || q ? function(t) {
      if (t.stopPropagation(), q) {
        null == I || I(), (0, o.hk)(W);
        return
      }(null == S ? true : S.isGuildStageVoice()) ? ((0, g.Cq)(S), null == I || I()) : (null == S ? true : S.isGuildVoice()) && (Z.Z.joinVoiceEvent(S.guild_id, S.id), null == I || I())
    } : true,
    onRsvpClick: M,
    onStartClick: z && U && !(null == J ? true : J.is_canceled) ? function(t) {
      t.stopPropagation(), (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([e.e("84722"), e.e("48221")]).then(e.bind(e, 296864));
        return n => (0, l.jsx)(t, w(T({}, n), {
          event: k,
          onSuccess: I
        }))
      })
    } : true,
    onInviteClick: function(t) {
      if (t.stopPropagation(), null != n) {
        if (!(0, P.T)(A, X, S)) {
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
          } = await Promise.all([e.e("49049"), e.e("7654"), e.e("72651")]).then(e.bind(e, 560114));
          return e => (0, l.jsx)(t, w(T({}, e), {
            guild: n,
            channel: S,
            guildScheduledEvent: k,
            source: _.t4x.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: z && L === x.WX.EXTERNAL && D ? function(t) {
      if (t.stopPropagation(), !z) return;
      let n = () => {
        Z.Z.endEvent(H, W), (0, r.pTH)()
      };
      (0, r.h7j)(t => (0, l.jsx)(r.ConfirmModal, w(T({}, t), {
        header: O.intl.string(O.t.qaYzPA),
        confirmText: O.intl.string(O.t.mjB9pd),
        cancelText: O.intl.string(O.t["ETE/oC"]),
        onConfirm: n,
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: O.intl.string(O.t.bnDQ7E)
        })
      })))
    } : true,
    onJoinGuildClick: Y
  }
}