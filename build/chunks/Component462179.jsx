/** Chunk was on 56236 **/
/** chunk id: 462179, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => I
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

function N(e) {
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

function w(e, n) {
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

function I(e) {
  let {
    guild: n,
    channel: I,
    guildScheduledEvent: S,
    isActive: T,
    recurrenceId: _,
    onActionTaken: D
  } = e, {
    scheduled_start_time: G,
    id: L,
    entity_type: R,
    guild_id: H
  } = S, {
    canManageGuildEvent: M
  } = (0, u.XJ)(null != I ? I : n), U = M(S), z = (0, b.ZP)(S), A = (0, x.T)(null == I ? true : I.id, S.id), {
    withinStartWindow: J
  } = (0, O.ub)(G), B = (0, r.e7)([h.Z], () => null == I || !I.isGuildVocal() || h.Z.can(E.Plq.CONNECT, I), [I]), X = (0, s.J)(H), W = (0, y.Z)(_, L);

  function V(e) {
    e.stopPropagation(), (0, C.Z)(L, _, H)
  }
  async function q(e) {
    e.stopPropagation(), await c.Z.joinGuild(H), f.Z.addConditionalChangeListener(() => null == f.Z.getGuild(H) || (T || V(e), K(e), false))
  }

  function K(e) {
    e.stopPropagation();
    let n = p.ZP.getDefaultChannel(H);
    (0, l.pTH)(), (0, d.XU)(H, null == n ? true : n.id)
  }
  return {
    onDeleteClick: U ? function(e) {
      e.stopPropagation(), U && !T && (0, l.h7j)(e => (0, i.jsx)(l.ConfirmModal, w(N({}, e), {
        header: k.intl.string(k.t.R5bpio),
        confirmText: k.intl.string(k.t.oyYWHB),
        cancelText: k.intl.string(k.t["ETE/oK"]),
        onConfirm: () => j.Z.deleteGuildEvent(L, H),
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          children: k.intl.string(k.t.v2GWNT)
        })
      })))
    } : true,
    onContextMenu: function(e) {
      e.stopPropagation(), null != n && (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("34261"), t.e("27434")]).then(t.bind(t, 215269));
        return t => (0, i.jsx)(e, N({
          guildEventId: L,
          recurrenceId: _,
          channel: I,
          guild: n
        }, t))
      })
    },
    onJoinClick: B || X ? function(e) {
      if (e.stopPropagation(), X) {
        null == D || D(), (0, a.hk)(H);
        return
      }(null == I ? true : I.isGuildStageVoice()) ? ((0, g.Cq)(I), null == D || D()) : (null == I ? true : I.isGuildVoice()) && (j.Z.joinVoiceEvent(I.guild_id, I.id), null == D || D())
    } : true,
    onRsvpClick: V,
    onStartClick: U && J && !(null == W ? true : W.is_canceled) ? function(e) {
      e.stopPropagation(), (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("84722"), t.e("14531")]).then(t.bind(t, 296864));
        return n => (0, i.jsx)(e, w(N({}, n), {
          event: S,
          onSuccess: D
        }))
      })
    } : true,
    onInviteClick: function(e) {
      if (e.stopPropagation(), null != n) {
        if (!z || !A) {
          let e = (0, Z.H)({
            guildId: H,
            guildEventId: L
          });
          (0, m.JG)(e), v.default.track(E.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: H,
            guild_scheduled_event_id: L
          });
          return
        }(0, l.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("7654"), t.e("49049"), t.e("53020")]).then(t.bind(t, 560114));
          return t => (0, i.jsx)(e, w(N({}, t), {
            guild: n,
            channel: I,
            guildScheduledEvent: S,
            source: E.t4x.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: U && R === P.WX.EXTERNAL && T ? function(e) {
      if (e.stopPropagation(), !U) return;
      let n = () => {
        j.Z.endEvent(L, H), (0, l.pTH)()
      };
      (0, l.h7j)(e => (0, i.jsx)(l.ConfirmModal, w(N({}, e), {
        header: k.intl.string(k.t.qaYzPD),
        confirmText: k.intl.string(k.t.mjB9pa),
        cancelText: k.intl.string(k.t["ETE/oK"]),
        onConfirm: n,
        children: (0, i.jsx)(l.Text, {
          variant: "text-md/normal",
          children: k.intl.string(k.t.bnDQ7O)
        })
      })))
    } : true,
    onJoinGuildClick: q,
    onGoToGuildClick: K
  }
}