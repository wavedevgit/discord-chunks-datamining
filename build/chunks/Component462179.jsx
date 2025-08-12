/** Chunk was on 96492 **/
/** chunk id: 462179, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function I(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function O(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}

function S(e) {
  let {
    guild: n,
    channel: S,
    guildScheduledEvent: T,
    isActive: w,
    recurrenceId: k,
    onActionTaken: R
  } = e, {
    scheduled_start_time: L,
    id: D,
    entity_type: G,
    guild_id: B
  } = T, {
    canManageGuildEvent: M
  } = (0, u.XJ)(null != S ? S : n), A = M(T), U = (0, j.ZP)(T), F = (0, b.T)(null == S ? true : S.id, T.id), {
    withinStartWindow: V
  } = (0, Z.ub)(L), X = (0, i.e7)([_.Z], () => null == S || !S.isGuildVocal() || _.Z.can(N.Plq.CONNECT, S), [S]), z = (0, a.J)(B), H = (0, p.Z)(k, D);

  function W(e) {
    e.stopPropagation(), (0, P.Z)(D, k, B)
  }
  async function q(e) {
    e.stopPropagation(), await c.Z.joinGuild(B), h.Z.addConditionalChangeListener(() => null == h.Z.getGuild(B) || (w || W(e), J(e), false))
  }

  function J(e) {
    e.stopPropagation();
    let n = g.ZP.getDefaultChannel(B);
    (0, r.pTH)(), (0, d.XU)(B, null == n ? true : n.id)
  }
  return {
    onDeleteClick: A ? function(e) {
      e.stopPropagation(), A && !w && (0, r.h7j)(e => (0, l.jsx)(r.ConfirmModal, O(I({}, e), {
        header: E.intl.string(E.t.R5bpio),
        confirmText: E.intl.string(E.t.oyYWHB),
        cancelText: E.intl.string(E.t["ETE/oK"]),
        onConfirm: () => x.Z.deleteGuildEvent(D, B),
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: E.intl.string(E.t.v2GWNT)
        })
      })))
    } : true,
    onContextMenu: function(e) {
      e.stopPropagation(), null != n && (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("34261"), t.e("27434")]).then(t.bind(t, 215269));
        return t => (0, l.jsx)(e, I({
          guildEventId: D,
          recurrenceId: k,
          channel: S,
          guild: n
        }, t))
      })
    },
    onJoinClick: X || z ? function(e) {
      if (e.stopPropagation(), z) {
        null == R || R(), (0, s.hk)(B);
        return
      }(null == S ? true : S.isGuildStageVoice()) ? ((0, f.Cq)(S), null == R || R()) : (null == S ? true : S.isGuildVoice()) && (x.Z.joinVoiceEvent(S.guild_id, S.id), null == R || R())
    } : true,
    onRsvpClick: W,
    onStartClick: A && V && !(null == H ? true : H.is_canceled) ? function(e) {
      e.stopPropagation(), (0, r.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("84722"), t.e("23725")]).then(t.bind(t, 296864));
        return n => (0, l.jsx)(e, O(I({}, n), {
          event: T,
          onSuccess: R
        }))
      })
    } : true,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != n) {
        if (!U || !F) {
          let e = (0, y.H)({
            guildId: B,
            guildEventId: D
          });
          (0, m.JG)(e), v.default.track(N.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: B,
            guild_scheduled_event_id: D
          });
          return
        }(0, r.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("7654"), t.e("49049"), t.e("36264")]).then(t.bind(t, 560114));
          return t => (0, l.jsx)(e, O(I({}, t), {
            guild: n,
            channel: S,
            guildScheduledEvent: T,
            source: N.t4x.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: A && G === C.WX.EXTERNAL && w ? function(e) {
      if (e.stopPropagation(), !A) return;
      let n = () => {
        x.Z.endEvent(D, B), (0, r.pTH)()
      };
      (0, r.h7j)(e => (0, l.jsx)(r.ConfirmModal, O(I({}, e), {
        header: E.intl.string(E.t.qaYzPD),
        confirmText: E.intl.string(E.t.mjB9pa),
        cancelText: E.intl.string(E.t["ETE/oK"]),
        onConfirm: n,
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: E.intl.string(E.t.bnDQ7O)
        })
      })))
    } : true,
    onJoinGuildClick: q,
    onGoToGuildClick: J
  }
}