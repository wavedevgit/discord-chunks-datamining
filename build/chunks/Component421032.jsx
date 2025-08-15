/** Chunk was on 22347 **/
/** chunk id: 421032, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk924301 = require("./924301.js"),
  Chunk894017 = require("./894017.js"),
  Chunk854698 = require("./854698.js"),
  Chunk390966 = require("./390966.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk709380 = require("./709380.js");

function b(t) {
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

function j(t) {
  let {
    recurrenceId: e,
    originalScheduledStartTime: i,
    guildEventId: j,
    onClick: x,
    isActive: y
  } = t, C = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(j)), O = (0, h.Z)(e, null == C ? true : C.id), P = (0, s.e7)([o.Z], () => o.Z.getGuild(null == C ? true : C.guild_id)), E = (0, s.e7)([c.Z], () => c.Z.getChannel(null == C ? true : C.channel_id));
  if (null == C) return null;
  let {
    is_canceled: Z = false
  } = null != O ? O : {}, k = (null == O ? true : O.scheduled_start_time) != null ? new Date(null == O ? true : O.scheduled_start_time) : i, D = (0, g.DK)(C), _ = Z ? p.p1.CANCELED : p.p1.SCHEDULED;
  D === e && (_ = C.status);
  let S = (null == C ? true : C.scheduled_start_time) != null ? (0, g.lh)(O, k, new Date(null == C ? true : C.scheduled_start_time)) : null,
    w = t => {
      t.stopPropagation(), null != P && (0, u.jW)(t, async () => {
        let {
          default: t
        } = await Promise.all([n.e("34261"), n.e("70274"), n.e("42743"), n.e("27434"), n.e("62318")]).then(n.bind(n, 215269));
        return n => (0, l.jsx)(t, b({
          guildEventId: C.id,
          recurrenceId: e,
          channel: E,
          guild: P,
          isRecurrenceItem: true
        }, n))
      })
    };
  return (0, l.jsxs)(a.kL8, {
    className: r()(f.container, {
      [f.canceled]: Z,
      [f.clickable]: null != x,
      [f.active]: y
    }),
    onClick: t => {
      t.stopPropagation(), Z || null == x || x(e)
    },
    onContextMenu: w,
    "aria-label": "",
    children: [(0, l.jsx)(m.z, {
      startTime: k.toISOString(),
      status: null != S ? S : _,
      eventType: C.entity_type,
      guildEventId: C.id,
      recurrenceId: e,
      className: f.timeStatus
    }), Z && (0, l.jsx)(a.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: f.canceledStatus,
      children: v.intl.string(v.t.fyBVRk)
    }), (0, l.jsx)(a.ua7, {
      text: v.intl.string(v.t.UKOtz8),
      position: "top",
      "aria-label": v.intl.string(v.t.bt75u7),
      children: t => {
        var e, n;
        return (0, l.jsx)(a.P3F, (e = b({}, t), n = n = {
          onClick: w,
          className: f.iconButton,
          children: (0, l.jsx)(a.xhG, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: f.icon
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(t);
            n.push.apply(n, l)
          }
          return n
        })(Object(n)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }), e))
      }
    })]
  })
}