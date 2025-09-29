/** Chunk was on 51725 **/
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
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function v(e) {
  let {
    recurrenceId: n,
    originalScheduledStartTime: i,
    guildEventId: v,
    onClick: x,
    isActive: C
  } = e, j = (0, l.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(v)), k = (0, _.Z)(n, null == j ? true : j.id), I = (0, l.e7)([d.Z], () => d.Z.getGuild(null == j ? true : j.guild_id)), w = (0, l.e7)([s.Z], () => s.Z.getChannel(null == j ? true : j.channel_id));
  if (null == j) return null;
  let {
    is_canceled: y = false
  } = null != k ? k : {}, P = (null == k ? true : k.scheduled_start_time) != null ? new Date(null == k ? true : k.scheduled_start_time) : i, N = (0, p.DK)(j), O = y ? g.p1.CANCELED : g.p1.SCHEDULED;
  N === n && (O = j.status);
  let E = (null == j ? true : j.scheduled_start_time) != null ? (0, p.lh)(k, P, new Date(null == j ? true : j.scheduled_start_time)) : null,
    S = e => {
      e.stopPropagation(), null != I && (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("91973"), t.e("470")]).then(t.bind(t, 215269));
        return t => (0, r.jsx)(e, m({
          guildEventId: j.id,
          recurrenceId: n,
          channel: w,
          guild: I,
          isRecurrenceItem: true
        }, t))
      })
    };
  return (0, r.jsxs)(o.kL8, {
    className: a()(h.container, {
      [h.canceled]: y,
      [h.clickable]: null != x,
      [h.active]: C
    }),
    onClick: e => {
      e.stopPropagation(), y || null == x || x(n)
    },
    onContextMenu: S,
    "aria-label": "",
    children: [(0, r.jsx)(b.z, {
      startTime: P.toISOString(),
      status: null != E ? E : O,
      eventType: j.entity_type,
      guildEventId: j.id,
      recurrenceId: n,
      className: h.timeStatus
    }), y && (0, r.jsx)(o.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: h.canceledStatus,
      children: f.intl.string(f.t.fyBVRk)
    }), (0, r.jsx)(o.ua7, {
      text: f.intl.string(f.t.UKOtz8),
      position: "top",
      "aria-label": f.intl.string(f.t.bt75u7),
      children: e => {
        var n, t;
        return (0, r.jsx)(o.P3F, (n = m({}, e), t = t = {
          onClick: S,
          className: h.iconButton,
          children: (0, r.jsx)(o.xhG, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: h.icon
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        })(Object(t)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
        }), n))
      }
    })]
  })
}