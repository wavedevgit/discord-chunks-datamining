/** Chunk was on 98878 **/
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
  Chunk709380 = require("./709380.js");

function f(e) {
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
  } = e, j = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(v)), I = (0, _.Z)(n, null == j ? true : j.id), k = (0, l.e7)([d.Z], () => d.Z.getGuild(null == j ? true : j.guild_id)), w = (0, l.e7)([s.Z], () => s.Z.getChannel(null == j ? true : j.channel_id));
  if (null == j) return null;
  let {
    is_canceled: y = false
  } = null != I ? I : {}, P = (null == I ? true : I.scheduled_start_time) != null ? new Date(null == I ? true : I.scheduled_start_time) : r, N = (0, p.DK)(j), S = y ? g.p1.CANCELED : g.p1.SCHEDULED;
  N === n && (S = j.status);
  let E = (null == j ? true : j.scheduled_start_time) != null ? (0, p.lh)(I, P, new Date(null == j ? true : j.scheduled_start_time)) : null,
    O = e => {
      e.stopPropagation(), null != k && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("91973"), t.e("470")]).then(t.bind(t, 215269));
        return t => (0, i.jsx)(e, f({
          guildEventId: j.id,
          recurrenceId: n,
          channel: w,
          guild: k,
          isRecurrenceItem: true
        }, t))
      })
    };
  return (0, i.jsxs)(o.kL8, {
    className: a()(m.container, {
      [m.canceled]: y,
      [m.clickable]: null != x,
      [m.active]: C
    }),
    onClick: e => {
      e.stopPropagation(), y || null == x || x(n)
    },
    onContextMenu: O,
    "aria-label": "",
    children: [(0, i.jsx)(b.z, {
      startTime: P.toISOString(),
      status: null != E ? E : S,
      eventType: j.entity_type,
      guildEventId: j.id,
      recurrenceId: n,
      className: m.timeStatus
    }), y && (0, i.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: m.canceledStatus,
      children: h.intl.string(h.t.fyBVRk)
    }), (0, i.jsx)(o.ua7, {
      text: h.intl.string(h.t.UKOtz8),
      position: "top",
      "aria-label": h.intl.string(h.t.bt75u7),
      children: e => {
        var n, t;
        return (0, i.jsx)(o.P3F, (n = f({}, e), t = t = {
          onClick: O,
          className: m.iconButton,
          children: (0, i.jsx)(o.xhG, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: m.icon
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