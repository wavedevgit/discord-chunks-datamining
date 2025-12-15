/** Chunk was on 97476 **/
/** chunk id: 421032, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk591170 = require("./591170.js");

function x(e) {
  let {
    recurrenceId: n,
    originalScheduledStartTime: i,
    guildEventId: x,
    onClick: _,
    isActive: C
  } = e, I = (0, l.e7)([b.ZP], () => b.ZP.getGuildScheduledEvent(x)), k = (0, f.Z)(n, null == I ? true : I.id), Z = (0, l.e7)([u.Z], () => u.Z.getGuild(null == I ? true : I.guild_id)), j = (0, l.e7)([s.Z], () => s.Z.getChannel(null == I ? true : I.channel_id));
  if (null == I) return null;
  let {
    is_canceled: N = false
  } = null != k ? k : {}, E = (null == k ? true : k.scheduled_start_time) != null ? new Date(null == k ? true : k.scheduled_start_time) : i, w = (0, h.DK)(I), y = N ? v.p1.CANCELED : v.p1.SCHEDULED;
  w === n && (y = I.status);
  let S = (null == I ? true : I.scheduled_start_time) != null ? (0, h.lh)(k, E, new Date(null == I ? true : I.scheduled_start_time)) : null,
    P = e => {
      e.stopPropagation(), null != Z && (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("91973"), t.e("470")]).then(t.bind(t, 215269));
        return t => (0, a.jsx)(e, function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              a = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), a.forEach(function(n) {
              var a;
              a = t[n], n in e ? Object.defineProperty(e, n, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = a
            })
          }
          return e
        }({
          guildEventId: I.id,
          recurrenceId: n,
          channel: j,
          guild: Z,
          isRecurrenceItem: true
        }, t))
      })
    };
  return (0, a.jsxs)(o.kL8, {
    className: r()(g.container, {
      [g.canceled]: N,
      [g.clickable]: null != _,
      [g.active]: C
    }),
    onClick: e => {
      e.stopPropagation(), N || null == _ || _(n)
    },
    onContextMenu: P,
    "aria-label": "",
    children: [(0, a.jsx)(p.z, {
      startTime: E.toISOString(),
      status: null != S ? S : y,
      eventType: I.entity_type,
      guildEventId: I.id,
      recurrenceId: n,
      className: g.timeStatus
    }), N && (0, a.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-feedback-critical",
      className: g.canceledStatus,
      children: m.intl.string(m.t.fyBVRm)
    }), (0, a.jsx)(c.u, {
      text: m.intl.string(m.t["UKOtz+"]),
      position: "top",
      "aria-label": m.intl.string(m.t.bt75uw),
      children: (0, a.jsx)(o.P3F, {
        onClick: P,
        className: g.iconButton,
        children: (0, a.jsx)(o.xhG, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: g.icon
        })
      })
    })]
  })
}