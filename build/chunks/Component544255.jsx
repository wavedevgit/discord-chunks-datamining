/** Chunk was on 7869 **/
/** chunk id: 544255, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk931991 = require("./931991.js"),
  Chunk698441 = require("./698441.js"),
  Chunk496092 = require("./496092.js"),
  Chunk722260 = require("./722260.js"),
  Chunk563312 = require("./563312.js"),
  Chunk985018 = require("./985018.jsx");

function g(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    guild: g,
    channel: y
  } = t, f = null != n, {
    canManageGuildEvent: b
  } = (0, u.nr)(null != y ? y : g), [p, A] = (0, r.yK)([o.Ay], () => [o.Ay.isActive(e), o.Ay.getGuildScheduledEvent(e)]), v = (0, c.A)(n, null == A ? true : A.id), E = null != A && b(A), O = (null == A ? true : A.recurrence_rule) != null && !f, m = (0, s.nh)(e, n);
  if (!E || p && !O && !f || f && !f || null == A || null == m) return null;
  let {
    startTime: j
  } = m;
  if (p && f) {
    var h;
    if (null == j) return null;
    let t = new Date(null != (h = null == v ? true : v.scheduled_start_time) ? h : j);
    if (new Date > t) return null
  }
  let D = t => {
    (0, i.qfG)(r => {
      var u, o;
      return (0, l.jsxs)(i.VoidConfirmModal, (u = function(t) {
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
      }({}, r), o = o = {
        header: d.intl.string(d.t.R5bpin),
        confirmText: O || t ? d.intl.string(d.t["8ZsNv5"]) : d.intl.string(d.t.B9sJLX),
        cancelText: d.intl.string(d.t.oEAioF),
        onConfirm: () => f && !t ? a.A.deleteRecurrence(g.id, e, n, v) : a.A.deleteGuildEvent(e, g.id),
        children: [(0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: d.intl.string(d.t.v2GWNQ)
        }), (0, l.jsx)("br", {}), (O || t) && (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: d.intl.format(d.t.ZcpcyO, {})
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(t);
          n.push.apply(n, l)
        }
        return n
      })(Object(o)).forEach(function(t) {
        Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(o, t))
      }), u))
    })
  };
  return (0, l.jsx)(i.Drp, {
    id: d.intl.string(d.t.B9sJLX),
    label: d.intl.string(d.t.B9sJLX),
    action: f ? true : () => D(),
    color: "danger",
    children: f && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.tqClly),
        label: d.intl.string(d.t.tqClly),
        action: () => D(),
        disabled: null == v ? true : v.is_canceled,
        color: "danger"
      }), (0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.wr33rW),
        label: d.intl.string(d.t.wr33rW),
        action: () => D(true),
        color: "danger"
      })]
    })
  })
}