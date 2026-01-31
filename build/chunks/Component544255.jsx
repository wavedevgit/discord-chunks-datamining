/** Chunk was on 7869 **/
/** chunk id: 544255, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk931991 = require("./931991.js"),
  Chunk698441 = require("./698441.js"),
  Chunk496092 = require("./496092.js"),
  Chunk722260 = require("./722260.js"),
  Chunk563312 = require("./563312.js"),
  Chunk985018 = require("./985018.jsx");

function E(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    guild: E,
    channel: f
  } = t, A = null != n, {
    canManageGuildEvent: y
  } = (0, o.nr)(null != f ? f : E), [p, b] = (0, i.yK)([a.Ay], () => [a.Ay.isActive(e), a.Ay.getGuildScheduledEvent(e)]), v = (0, s.A)(n, null == b ? true : b.id), O = null != b && y(b), h = (null == b ? true : b.recurrence_rule) != null && !A, _ = (0, d.nh)(e, n);
  if (!O || p && !h && !A || A && !A || null == b || null == _) return null;
  let {
    startTime: m
  } = _;
  if (p && A) {
    var T;
    if (null == m) return null;
    let t = new Date(null != (T = null == v ? true : v.scheduled_start_time) ? T : m);
    if (new Date > t) return null
  }
  let j = t => {
    (0, u.qfG)(i => {
      var o, a;
      return (0, l.jsx)(r.ConfirmModal, (o = function(t) {
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
      }({}, i), a = a = {
        title: g.intl.string(g.t.R5bpin),
        subtitle: g.intl.string(g.t.v2GWNQ),
        confirmText: h || t ? g.intl.string(g.t["8ZsNv5"]) : g.intl.string(g.t.B9sJLX),
        cancelText: g.intl.string(g.t.oEAioF),
        onConfirm: () => A && !t ? c.A.deleteRecurrence(E.id, e, n, v) : c.A.deleteGuildEvent(e, E.id),
        children: (h || t) && (0, l.jsx)(u.Text, {
          variant: "text-md/normal",
          children: g.intl.format(g.t.ZcpcyO, {})
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(t);
          n.push.apply(n, l)
        }
        return n
      })(Object(a)).forEach(function(t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(a, t))
      }), o))
    })
  };
  return (0, l.jsx)(u.Drp, {
    id: g.intl.string(g.t.B9sJLX),
    label: g.intl.string(g.t.B9sJLX),
    action: A ? true : () => j(),
    color: "danger",
    children: A && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(u.Drp, {
        id: g.intl.string(g.t.tqClly),
        label: g.intl.string(g.t.tqClly),
        action: () => j(),
        disabled: null == v ? true : v.is_canceled,
        color: "danger"
      }), (0, l.jsx)(u.Drp, {
        id: g.intl.string(g.t.wr33rW),
        label: g.intl.string(g.t.wr33rW),
        action: () => j(true),
        color: "danger"
      })]
    })
  })
}