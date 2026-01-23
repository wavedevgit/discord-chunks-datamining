/** Chunk was on 7869 **/
/** chunk id: 28314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk931991 = require("./931991.js"),
  Chunk698441 = require("./698441.js"),
  Chunk722260 = require("./722260.js"),
  Chunk563312 = require("./563312.js"),
  Chunk823508 = require("./823508.js"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
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
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let {
    guildEventId: t,
    guild: f,
    channel: b,
    recurrenceId: p,
    isRecurrenceItem: A
  } = e, {
    canManageGuildEvent: v
  } = (0, u.nr)(null != b ? b : f), E = (0, r.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t)), O = v(E), m = (0, s.A)(), j = (0, a.A)(p, null == E ? true : E.id), h = (0, c.nh)(t, p);
  if (!O || null == h || null == E) return null;
  let D = null != E.recurrence_rule && !A,
    _ = e => {
      (null == p || e) && !A ? (0, i.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("68587"), n.e("28136"), n.e("342"), n.e("29878")]).then(n.bind(n, 21653));
        return n => (0, l.jsx)(e, y(g({}, n), {
          guildScheduledEventId: t,
          guildId: f.id
        }))
      }, m) : null != p && (0, i.mMO)(async () => {
        let {
          default: e
        } = await n.e("43940").then(n.bind(n, 271983));
        return t => (0, l.jsx)(e, y(g({}, t), {
          guildEvent: E,
          recurrenceId: p
        }))
      }, m)
    };
  return (0, l.jsx)(i.Drp, {
    id: d.intl.string(d.t.Rgy2dU),
    label: d.intl.string(d.t.Rgy2dU),
    action: D ? true : () => _(true),
    children: D && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.wmVmXN),
        label: d.intl.string(d.t.wmVmXN),
        action: () => _(false),
        disabled: (null == j ? true : j.is_canceled) || h.startTime.getTime() < Date.now()
      }), (0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.BW1Qoh),
        label: d.intl.string(d.t.BW1Qoh),
        action: () => _(true),
        disabled: new Date(E.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}