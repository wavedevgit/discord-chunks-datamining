/** Chunk was on 51354 **/
/** chunk id: 349112, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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

function j(t) {
  let {
    recurrenceId: e,
    originalScheduledStartTime: i,
    guildEventId: j,
    onClick: A,
    isActive: y
  } = t, E = (0, s.bG)([h.Ay], () => h.Ay.getGuildScheduledEvent(j)), b = (0, v.A)(e, null == E ? true : E.id), _ = (0, s.bG)([d.A], () => d.A.getGuild(null == E ? true : E.guild_id)), C = (0, s.bG)([o.A], () => o.A.getChannel(null == E ? true : E.channel_id));
  if (null == E) return null;
  let {
    is_canceled: T = false
  } = null != b ? b : {}, k = (null == b ? true : b.scheduled_start_time) != null ? new Date(null == b ? true : b.scheduled_start_time) : i, O = (0, m.G3)(E), D = T ? f.XG.CANCELED : f.XG.SCHEDULED;
  O === e && (D = E.status);
  let N = (null == E ? true : E.scheduled_start_time) != null ? (0, m.j)(b, k, new Date(null == E ? true : E.scheduled_start_time)) : null,
    G = t => {
      t.stopPropagation(), null != _ && (0, c.L3)(t, async () => {
        let {
          default: t
        } = await Promise.all([n.e("95950"), n.e("3795"), n.e("7869")]).then(n.bind(n, 406406));
        return n => (0, l.jsx)(t, function(t) {
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
        }({
          guildEventId: E.id,
          recurrenceId: e,
          channel: C,
          guild: _,
          isRecurrenceItem: true
        }, n))
      })
    };
  return (0, l.jsxs)(u.sqX, {
    className: r()(p.kL, {
      [p.aD]: T,
      [p.vk]: null != A,
      [p.vu]: y
    }),
    onClick: t => {
      t.stopPropagation(), T || null == A || A(e)
    },
    onContextMenu: G,
    "aria-label": "",
    children: [(0, l.jsx)(g.L, {
      startTime: k.toISOString(),
      status: null != N ? N : D,
      eventType: E.entity_type,
      guildEventId: E.id,
      recurrenceId: e,
      className: p.q$
    }), T && (0, l.jsx)(u.Text, {
      variant: "text-sm/semibold",
      color: "text-feedback-critical",
      className: p.a6,
      children: x.intl.string(x.t.fyBVRm)
    }), (0, l.jsx)(a.m, {
      text: x.intl.string(x.t["UKOtz+"]),
      position: "top",
      "aria-label": x.intl.string(x.t.bt75uw),
      children: (0, l.jsx)(u.DUT, {
        onClick: G,
        className: p.gb,
        children: (0, l.jsx)(u.jNK, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: p.Kk
        })
      })
    })]
  })
}