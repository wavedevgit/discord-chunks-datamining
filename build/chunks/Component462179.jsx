/** Chunk was on 4096 **/
/** chunk id: 462179, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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

function w(t) {
  let {
    guild: e,
    channel: w,
    guildScheduledEvent: k,
    isActive: T,
    recurrenceId: N,
    onActionTaken: I
  } = t, {
    scheduled_start_time: G,
    id: H,
    entity_type: L,
    guild_id: V
  } = k, {
    canManageGuildEvent: X
  } = (0, s.XJ)(null != w ? w : e), z = X(k), U = (0, b.ZP)(k), W = (0, j.T)(null == w ? true : w.id, k.id), {
    withinStartWindow: R
  } = (0, Z.ub)(G), A = (0, i.e7)([h.Z], () => null == w || !w.isGuildVocal() || h.Z.can(x.Plq.CONNECT, w), [w]), q = (0, c.J)(V), B = (0, P.Z)(N, H);

  function J(t) {
    t.stopPropagation(), (0, O.Z)(H, N, V)
  }
  async function M(t) {
    t.stopPropagation(), await o.Z.joinGuild(V), p.Z.addConditionalChangeListener(() => null == p.Z.getGuild(V) || (T || J(t), function(t) {
      t.stopPropagation();
      let e = f.ZP.getDefaultChannel(V);
      (0, r.pTH)(), (0, d.XU)(V, null == e ? true : e.id)
    }(t), false))
  }
  return {
    onDeleteClick: z ? function(t) {
      t.stopPropagation(), z && !T && (0, r.h7j)(t => (0, l.jsx)(r.ConfirmModal, S(D({}, t), {
        header: _.intl.string(_.t.R5bpio),
        confirmText: _.intl.string(_.t.oyYWHB),
        cancelText: _.intl.string(_.t["ETE/oK"]),
        onConfirm: () => y.Z.deleteGuildEvent(H, V),
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: _.intl.string(_.t.v2GWNT)
        })
      })))
    } : true,
    onContextMenu: function(t) {
      t.stopPropagation(), null != e && (0, a.jW)(t, async () => {
        let {
          default: t
        } = await Promise.all([n.e("34261"), n.e("27434")]).then(n.bind(n, 215269));
        return n => (0, l.jsx)(t, D({
          guildEventId: H,
          recurrenceId: N,
          channel: w,
          guild: e
        }, n))
      })
    },
    onJoinClick: A || q ? function(t) {
      if (t.stopPropagation(), q) {
        null == I || I(), (0, u.hk)(V);
        return
      }(null == w ? true : w.isGuildStageVoice()) ? ((0, g.Cq)(w), null == I || I()) : (null == w ? true : w.isGuildVoice()) && (y.Z.joinVoiceEvent(w.guild_id, w.id), null == I || I())
    } : true,
    onRsvpClick: J,
    onStartClick: z && R && !(null == B ? true : B.is_canceled) ? function(t) {
      t.stopPropagation(), (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("84722"), n.e("48221")]).then(n.bind(n, 296864));
        return e => (0, l.jsx)(t, S(D({}, e), {
          event: k,
          onSuccess: I
        }))
      })
    } : true,
    onInviteClick: function(t) {
      if (t.stopPropagation(), null != e) {
        if (!U || !W) {
          let t = (0, E.H)({
            guildId: V,
            guildEventId: H
          });
          (0, m.JG)(t), v.default.track(x.rMx.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
            guild_id: V,
            guild_scheduled_event_id: H
          });
          return
        }(0, r.ZDy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("7654"), n.e("49049"), n.e("54441")]).then(n.bind(n, 560114));
          return n => (0, l.jsx)(t, S(D({}, n), {
            guild: e,
            channel: w,
            guildScheduledEvent: k,
            source: x.t4x.GUILD_EVENTS
          }))
        })
      }
    },
    onEndClick: z && L === C.WX.EXTERNAL && T ? function(t) {
      if (t.stopPropagation(), !z) return;
      let e = () => {
        y.Z.endEvent(H, V), (0, r.pTH)()
      };
      (0, r.h7j)(t => (0, l.jsx)(r.ConfirmModal, S(D({}, t), {
        header: _.intl.string(_.t.qaYzPD),
        confirmText: _.intl.string(_.t.mjB9pa),
        cancelText: _.intl.string(_.t["ETE/oK"]),
        onConfirm: e,
        children: (0, l.jsx)(r.Text, {
          variant: "text-md/normal",
          children: _.intl.string(_.t.bnDQ7O)
        })
      })))
    } : true,
    onJoinGuildClick: M
  }
}