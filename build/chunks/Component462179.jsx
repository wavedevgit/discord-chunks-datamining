/** Chunk was on 98464 **/
/** chunk id: 462179, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function D(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function j(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      t.push.apply(t, i)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function O(e) {
  let {
    guild: n,
    channel: O,
    guildScheduledEvent: U,
    isActive: N,
    recurrenceId: G,
    onActionTaken: Z
  } = e, {
    scheduled_start_time: P,
    id: R,
    entity_type: z,
    guild_id: A
  } = U, {
    canManageGuildEvent: B
  } = (0, c.XJ)(null != O ? O : n), w = B(U), k = (0, h.ZP)(U), H = (0, b.T)(null == O ? true : O.id, U.id), {
    withinStartWindow: M
  } = (0, C.ub)(P), X = (0, l.e7)([m.Z], () => null == O || !O.isGuildVocal() || m.Z.can(L.Plq.CONNECT, O), [O]), V = (0, s.J)(A), F = (0, E.Z)(G, R);

  function Y(e) {
    e.stopPropagation(), (0, y.Z)(R, G, A)
  }
  async function W(e) {
    e.stopPropagation(), await a.Z.joinGuild(A), p.Z.addConditionalChangeListener(() => null == p.Z.getGuild(A) || (N || Y(e), q(e), false))
  }

  function q(e) {
    e.stopPropagation();
    let n = g.ZP.getDefaultChannel(A);
    (0, r.pTH)(), (0, u.XU)(A, null == n ? true : n.id)
  }
  return {
    onDeleteClick: w ? function(e) {
      e.stopPropagation(), w && !N && (0, r.h7j)(e => (0, i.jsx)(r.ConfirmModal, j(D({}, e), {
        header: S.intl.string(S.t.R5bpio),
        confirmText: S.intl.string(S.t.oyYWHB),
        cancelText: S.intl.string(S.t["ETE/oK"]),
        onConfirm: () => v.Z.deleteGuildEvent(R, A),
        children: (0, i.jsx)(r.Text, {
          variant: "text-md/normal",
          children: S.intl.string(S.t.v2GWNT)
        })
      })))
    } : true,
    onContextMenu: function(e) {
      e.stopPropagation(), null != n && (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("34261"), t.e("70274"), t.e("42743"), t.e("27434")]).then(t.bind(t, 215269));
        return t => (0, i.jsx)(e, D({
          guildEventId: R,
          recurrenceId: G,
          channel: O,
          guild: n
        }, t))
      })
    },
    onJoinClick: X || V ? function(e) {
      if (e.stopPropagation(), V) {
        null == Z || Z(), (0, o.hk)(A);
        return
      }(null == O ? true : O.isGuildStageVoice()) ? ((0, _.Cq)(O), null == Z || Z()) : (null == O ? true : O.isGuildVoice()) && (v.Z.joinVoiceEvent(O.guild_id, O.id), null == Z || Z())
    } : true,
    onRsvpClick: Y,
    onStartClick: w && M && !(null == F ? true : F.is_canceled) ? function(e) {
      e.stopPropagation(), (0, r.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("70274"), t.e("84722"), t.e("29129")]).then(t.bind(t, 296864));
        return n => (0, i.jsx)(e, j(D({}, n), {
          event: U,
          onSuccess: Z
        }))
      })
    } : true,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != n) {
        if (!k || !H) {
          let e = (0, T.H)({
            guildId: A,
            guildEventId: R
          });
          (0, I.JG)(e), f.default.track(L.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: A,
            guild_scheduled_event_id: R
          });
          return
        }(0, r.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("7654"), t.e("49049"), t.e("24262")]).then(t.bind(t, 560114));
          return t => (0, i.jsx)(e, j(D({}, t), {
            guild: n,
            channel: O,
            guildScheduledEvent: U,
            source: L.t4x.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: w && z === x.WX.EXTERNAL && N ? function(e) {
      if (e.stopPropagation(), !w) return;
      let n = () => {
        v.Z.endEvent(R, A), (0, r.pTH)()
      };
      (0, r.h7j)(e => (0, i.jsx)(r.ConfirmModal, j(D({}, e), {
        header: S.intl.string(S.t.qaYzPD),
        confirmText: S.intl.string(S.t.mjB9pa),
        cancelText: S.intl.string(S.t["ETE/oK"]),
        onConfirm: n,
        children: (0, i.jsx)(r.Text, {
          variant: "text-md/normal",
          children: S.intl.string(S.t.bnDQ7O)
        })
      })))
    } : true,
    onJoinGuildClick: W,
    onGoToGuildClick: q
  }
}