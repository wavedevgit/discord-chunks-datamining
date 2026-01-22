/** Chunk was on 81899 **/
/** chunk id: 349112, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk698441 = require("./698441.js"),
  Chunk722260 = require("./722260.js"),
  Chunk974930 = require("./974930.js"),
  Chunk103355 = require("./103355.jsx"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473190 = require("./473190.js");

function g(e) {
  let {
    recurrenceId: t,
    originalScheduledStartTime: a,
    guildEventId: g,
    onClick: p,
    isActive: j
  } = e, A = (0, i.bG)([f.Ay], () => f.Ay.getGuildScheduledEvent(g)), y = (0, b.A)(t, null == A ? true : A.id), k = (0, i.bG)([u.A], () => u.A.getGuild(null == A ? true : A.guild_id)), C = (0, i.bG)([o.A], () => o.A.getChannel(null == A ? true : A.channel_id));
  if (null == A) return null;
  let {
    is_canceled: N = false
  } = null != y ? y : {}, E = (null == y ? true : y.scheduled_start_time) != null ? new Date(null == y ? true : y.scheduled_start_time) : a, T = (0, _.G3)(A), D = N ? h.XG.CANCELED : h.XG.SCHEDULED;
  T === t && (D = A.status);
  let w = (null == A ? true : A.scheduled_start_time) != null ? (0, _.j)(y, E, new Date(null == A ? true : A.scheduled_start_time)) : null,
    S = e => {
      e.stopPropagation(), null != k && (0, d.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("95950"), n.e("7869")]).then(n.bind(n, 406406));
        return n => (0, l.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({
          guildEventId: A.id,
          recurrenceId: t,
          channel: C,
          guild: k,
          isRecurrenceItem: true
        }, n))
      })
    };
  return (0, l.jsxs)(s.sqX, {
    className: c()(v.kL, {
      [v.aD]: N,
      [v.vk]: null != p,
      [v.vu]: j
    }),
    onClick: e => {
      e.stopPropagation(), N || null == p || p(t)
    },
    onContextMenu: S,
    "aria-label": "",
    children: [(0, l.jsx)(m.L, {
      startTime: E.toISOString(),
      status: null != w ? w : D,
      eventType: A.entity_type,
      guildEventId: A.id,
      recurrenceId: t,
      className: v.q$
    }), N && (0, l.jsx)(s.Text, {
      variant: "text-sm/semibold",
      color: "text-feedback-critical",
      className: v.a6,
      children: x.intl.string(x.t.fyBVRm)
    }), (0, l.jsx)(r.m, {
      text: x.intl.string(x.t["UKOtz+"]),
      position: "top",
      "aria-label": x.intl.string(x.t.bt75uw),
      children: (0, l.jsx)(s.DUT, {
        onClick: S,
        className: v.gb,
        children: (0, l.jsx)(s.jNK, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: v.Kk
        })
      })
    })]
  })
}