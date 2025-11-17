/** Chunk was on 98878 **/
/** chunk id: 421032, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk709380 = require("./709380.js");

function b(e) {
  let {
    recurrenceId: n,
    originalScheduledStartTime: r,
    guildEventId: b,
    onClick: x,
    isActive: C
  } = e, I = (0, l.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(b)), j = (0, p.Z)(n, null == I ? true : I.id), k = (0, l.e7)([u.Z], () => u.Z.getGuild(null == I ? true : I.guild_id)), y = (0, l.e7)([d.Z], () => d.Z.getChannel(null == I ? true : I.channel_id));
  if (null == I) return null;
  let {
    is_canceled: N = false
  } = null != j ? j : {}, w = (null == j ? true : j.scheduled_start_time) != null ? new Date(null == j ? true : j.scheduled_start_time) : r, Z = (0, f.DK)(I), E = N ? v.p1.CANCELED : v.p1.SCHEDULED;
  Z === n && (E = I.status);
  let P = (null == I ? true : I.scheduled_start_time) != null ? (0, f.lh)(j, w, new Date(null == I ? true : I.scheduled_start_time)) : null,
    S = e => {
      e.stopPropagation(), null != k && (0, s.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("91973"), t.e("470")]).then(t.bind(t, 215269));
        return t => (0, i.jsx)(e, function(e) {
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
        }({
          guildEventId: I.id,
          recurrenceId: n,
          channel: y,
          guild: k,
          isRecurrenceItem: true
        }, t))
      })
    };
  return (0, i.jsxs)(c.kL8, {
    className: a()(h.container, {
      [h.canceled]: N,
      [h.clickable]: null != x,
      [h.active]: C
    }),
    onClick: e => {
      e.stopPropagation(), N || null == x || x(n)
    },
    onContextMenu: S,
    "aria-label": "",
    children: [(0, i.jsx)(m.z, {
      startTime: w.toISOString(),
      status: null != P ? P : E,
      eventType: I.entity_type,
      guildEventId: I.id,
      recurrenceId: n,
      className: h.timeStatus
    }), N && (0, i.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: h.canceledStatus,
      children: g.intl.string(g.t.fyBVRm)
    }), (0, i.jsx)(o.u, {
      text: g.intl.string(g.t["UKOtz+"]),
      position: "top",
      "aria-label": g.intl.string(g.t.bt75uw),
      children: (0, i.jsx)(c.P3F, {
        onClick: S,
        className: h.iconButton,
        children: (0, i.jsx)(c.xhG, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: h.icon
        })
      })
    })]
  })
}