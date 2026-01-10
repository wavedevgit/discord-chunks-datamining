/** Chunk was on 76246 **/
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
  } = e, j = (0, l.e7)([b.ZP], () => b.ZP.getGuildScheduledEvent(x)), k = (0, f.Z)(n, null == j ? true : j.id), I = (0, l.e7)([u.Z], () => u.Z.getGuild(null == j ? true : j.guild_id)), N = (0, l.e7)([d.Z], () => d.Z.getChannel(null == j ? true : j.channel_id));
  if (null == j) return null;
  let {
    is_canceled: Z = false
  } = null != k ? k : {}, y = (null == k ? true : k.scheduled_start_time) != null ? new Date(null == k ? true : k.scheduled_start_time) : i, w = (0, p.DK)(j), E = Z ? m.p1.CANCELED : m.p1.SCHEDULED;
  w === n && (E = j.status);
  let S = (null == j ? true : j.scheduled_start_time) != null ? (0, p.lh)(k, y, new Date(null == j ? true : j.scheduled_start_time)) : null,
    P = e => {
      e.stopPropagation(), null != I && (0, s.jW)(e, async () => {
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
          guildEventId: j.id,
          recurrenceId: n,
          channel: N,
          guild: I,
          isRecurrenceItem: true
        }, t))
      })
    };
  return (0, a.jsxs)(c.kL8, {
    className: r()(v.container, {
      [v.canceled]: Z,
      [v.clickable]: null != _,
      [v.active]: C
    }),
    onClick: e => {
      e.stopPropagation(), Z || null == _ || _(n)
    },
    onContextMenu: P,
    "aria-label": "",
    children: [(0, a.jsx)(h.z, {
      startTime: y.toISOString(),
      status: null != S ? S : E,
      eventType: j.entity_type,
      guildEventId: j.id,
      recurrenceId: n,
      className: v.timeStatus
    }), Z && (0, a.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "text-feedback-critical",
      className: v.canceledStatus,
      children: g.intl.string(g.t.fyBVRm)
    }), (0, a.jsx)(o.u, {
      text: g.intl.string(g.t["UKOtz+"]),
      position: "top",
      "aria-label": g.intl.string(g.t.bt75uw),
      children: (0, a.jsx)(c.P3F, {
        onClick: P,
        className: v.iconButton,
        children: (0, a.jsx)(c.xhG, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: v.icon
        })
      })
    })]
  })
}