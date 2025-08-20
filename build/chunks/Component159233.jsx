/** Chunk was on 27434 **/
/** chunk id: 159233, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk924301 = require("./924301.js"),
  Chunk894017 = require("./894017.js"),
  Chunk79874 = require("./79874.js"),
  Chunk576749 = require("./576749.js"),
  Chunk388032 = require("./388032.jsx");

function g(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = e[n], n in t ? Object.defineProperty(t, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[n] = l
    })
  }
  return t
}

function v(t, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(t, n) {
    var e = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(t);
      e.push.apply(e, l)
    }
    return e
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t
}

function b(t) {
  let {
    guildEventId: n,
    guild: b,
    channel: f,
    recurrenceId: p,
    isRecurrenceItem: j
  } = t, {
    canManageGuildEvent: h
  } = (0, o.XJ)(null != f ? f : b), y = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(n)), Z = h(y), m = (0, u.Z)(), O = (0, c.Z)(p, null == y ? true : y.id), P = (0, s.zI)(n, p);
  if (!Z || null == P || null == y) return null;
  let w = null != y.recurrence_rule && !j,
    x = t => {
      (null == p || t) && !j ? (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([e.e("36599"), e.e("60962"), e.e("49049"), e.e("82758"), e.e("61"), e.e("55705")]).then(e.bind(e, 779250));
        return e => (0, l.jsx)(t, v(g({}, e), {
          guildScheduledEventId: n,
          guildId: b.id
        }))
      }, m) : null != p && (0, r.ZDy)(async () => {
        let {
          default: t
        } = await e.e("27919").then(e.bind(e, 379038));
        return n => (0, l.jsx)(t, v(g({}, n), {
          guildEvent: y,
          recurrenceId: p
        }))
      }, m)
    };
  return (0, l.jsx)(r.sNh, {
    id: d.intl.string(d.t.Rgy2dX),
    label: d.intl.string(d.t.Rgy2dX),
    action: w ? true : () => x(true),
    children: w && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.sNh, {
        id: d.intl.string(d.t.wmVmXF),
        label: d.intl.string(d.t.wmVmXF),
        action: () => x(false),
        disabled: (null == O ? true : O.is_canceled) || P.startTime.getTime() < Date.now()
      }), (0, l.jsx)(r.sNh, {
        id: d.intl.string(d.t.BW1Qoq),
        label: d.intl.string(d.t.BW1Qoq),
        action: () => x(true),
        disabled: new Date(y.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}