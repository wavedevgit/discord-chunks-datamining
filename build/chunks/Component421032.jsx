/** Chunk was on 28099 **/
/** chunk id: 421032, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
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
  Chunk862379 = require("./862379.js");

function m(e) {
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

function v(e) {
  let {
    recurrenceId: n,
    originalScheduledStartTime: r,
    guildEventId: v,
    onClick: x,
    isActive: C
  } = e, j = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(v)), I = (0, _.Z)(n, null == j ? true : j.id), y = (0, l.e7)([d.Z], () => d.Z.getGuild(null == j ? true : j.guild_id)), w = (0, l.e7)([s.Z], () => s.Z.getChannel(null == j ? true : j.channel_id));
  if (null == j) return null;
  let {
    is_canceled: P = false
  } = null != I ? I : {}, k = (null == I ? true : I.scheduled_start_time) != null ? new Date(null == I ? true : I.scheduled_start_time) : r, Z = (0, b.DK)(j), E = P ? h.p1.CANCELED : h.p1.SCHEDULED;
  Z === n && (E = j.status);
  let N = (null == j ? true : j.scheduled_start_time) != null ? (0, b.lh)(I, k, new Date(null == j ? true : j.scheduled_start_time)) : null,
    S = e => {
      e.stopPropagation(), null != y && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("34261"), t.e("27434")]).then(t.bind(t, 215269));
        return t => (0, i.jsx)(e, m({
          guildEventId: j.id,
          recurrenceId: n,
          channel: w,
          guild: y,
          isRecurrenceItem: true
        }, t))
      })
    };
  return (0, i.jsxs)(o.kL8, {
    className: a()(g.container, {
      [g.canceled]: P,
      [g.clickable]: null != x,
      [g.active]: C
    }),
    onClick: e => {
      e.stopPropagation(), P || null == x || x(n)
    },
    onContextMenu: S,
    "aria-label": "",
    children: [(0, i.jsx)(p.z, {
      startTime: k.toISOString(),
      status: null != N ? N : E,
      eventType: j.entity_type,
      guildEventId: j.id,
      recurrenceId: n,
      className: g.timeStatus
    }), P && (0, i.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: g.canceledStatus,
      children: f.intl.string(f.t.fyBVRk)
    }), (0, i.jsx)(o.ua7, {
      text: f.intl.string(f.t.UKOtz8),
      position: "top",
      "aria-label": f.intl.string(f.t.bt75u7),
      children: e => {
        var n, t;
        return (0, i.jsx)(o.P3F, (n = m({}, e), t = t = {
          onClick: S,
          className: g.iconButton,
          children: (0, i.jsx)(o.xhG, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: g.icon
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t.push.apply(t, i)
          }
          return t
        })(Object(t)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
        }), n))
      }
    })]
  })
}