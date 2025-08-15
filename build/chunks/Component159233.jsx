/** Chunk was on 27434 **/
/** chunk id: 159233, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function f(t, n) {
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
    channel: p,
    recurrenceId: v,
    isRecurrenceItem: h
  } = t, {
    canManageGuildEvent: y
  } = (0, o.XJ)(null != p ? p : b), E = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(n)), O = y(E), j = (0, s.Z)(), m = (0, c.Z)(v, null == E ? true : E.id), _ = (0, u.zI)(n, v);
  if (!O || null == _ || null == E) return null;
  let P = null != E.recurrence_rule && !h,
    Z = t => {
      (null == v || t) && !h ? (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([e.e("36599"), e.e("60962"), e.e("49049"), e.e("82758"), e.e("61"), e.e("30866")]).then(e.bind(e, 779250));
        return e => (0, l.jsx)(t, f(g({}, e), {
          guildScheduledEventId: n,
          guildId: b.id
        }))
      }, j) : null != v && (0, r.ZDy)(async () => {
        let {
          default: t
        } = await e.e("27919").then(e.bind(e, 379038));
        return n => (0, l.jsx)(t, f(g({}, n), {
          guildEvent: E,
          recurrenceId: v
        }))
      }, j)
    };
  return (0, l.jsx)(r.sNh, {
    id: d.intl.string(d.t.Rgy2dX),
    label: d.intl.string(d.t.Rgy2dX),
    action: P ? true : () => Z(true),
    children: P && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(r.sNh, {
        id: d.intl.string(d.t.wmVmXF),
        label: d.intl.string(d.t.wmVmXF),
        action: () => Z(false),
        disabled: (null == m ? true : m.is_canceled) || _.startTime.getTime() < Date.now()
      }), (0, l.jsx)(r.sNh, {
        id: d.intl.string(d.t.BW1Qoq),
        label: d.intl.string(d.t.BW1Qoq),
        action: () => Z(true),
        disabled: new Date(E.scheduled_start_time).getTime() < Date.now()
      })]
    })
  })
}