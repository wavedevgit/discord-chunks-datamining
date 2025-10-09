/** Chunk was on 98878 **/
/** chunk id: 421032, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk954313 = require("./954313.js"),
  Chunk390966 = require("./390966.jsx"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk709380 = require("./709380.js");

function v(e) {
  let {
    recurrenceId: n,
    originalScheduledStartTime: a,
    guildEventId: v,
    onClick: x,
    isActive: C
  } = e, I = (0, l.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(v)), j = (0, p.Z)(n, null == I ? true : I.id), k = (0, l.e7)([u.Z], () => u.Z.getGuild(null == I ? true : I.guild_id)), w = (0, l.e7)([d.Z], () => d.Z.getChannel(null == I ? true : I.channel_id));
  if (null == I) return null;
  let {
    is_canceled: y = false
  } = null != j ? j : {}, N = (null == j ? true : j.scheduled_start_time) != null ? new Date(null == j ? true : j.scheduled_start_time) : a, S = (0, g.DK)(I), P = y ? b.p1.CANCELED : b.p1.SCHEDULED;
  S === n && (P = I.status);
  let E = (null == I ? true : I.scheduled_start_time) != null ? (0, g.lh)(j, N, new Date(null == I ? true : I.scheduled_start_time)) : null,
    Z = e => {
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
          channel: w,
          guild: k,
          isRecurrenceItem: true
        }, t))
      })
    };
  return (0, i.jsxs)(c.kL8, {
    className: r()(f.container, {
      [f.canceled]: y,
      [f.clickable]: null != x,
      [f.active]: C
    }),
    onClick: e => {
      e.stopPropagation(), y || null == x || x(n)
    },
    onContextMenu: Z,
    "aria-label": "",
    children: [(0, i.jsx)(m.z, {
      startTime: N.toISOString(),
      status: null != E ? E : P,
      eventType: I.entity_type,
      guildEventId: I.id,
      recurrenceId: n,
      className: f.timeStatus
    }), y && (0, i.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: f.canceledStatus,
      children: h.intl.string(h.t.fyBVRk)
    }), (0, i.jsx)(o.u, {
      text: h.intl.string(h.t.UKOtz8),
      position: "top",
      "aria-label": h.intl.string(h.t.bt75u7),
      children: (0, i.jsx)(c.P3F, {
        onClick: Z,
        className: f.iconButton,
        children: (0, i.jsx)(c.xhG, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: f.icon
        })
      })
    })]
  })
}