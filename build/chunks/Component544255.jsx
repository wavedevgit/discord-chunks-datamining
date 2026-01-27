/** Chunk was on 7869 **/
/** chunk id: 544255, original params: e,t,n (module,exports,require) **/
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

function g(e) {
  let {
    guildEventId: t,
    recurrenceId: n,
    guild: g,
    channel: E
  } = e, f = null != n, {
    canManageGuildEvent: A
  } = (0, o.nr)(null != E ? E : g), [y, p] = (0, r.yK)([u.Ay], () => [u.Ay.isActive(t), u.Ay.getGuildScheduledEvent(t)]), b = (0, c.A)(n, null == p ? true : p.id), v = null != p && A(p), O = (null == p ? true : p.recurrence_rule) != null && !f, h = (0, s.nh)(t, n);
  if (!v || y && !O && !f || f && !f || null == p || null == h) return null;
  let {
    startTime: _
  } = h;
  if (y && f) {
    var m;
    if (null == _) return null;
    let e = new Date(null != (m = null == b ? true : b.scheduled_start_time) ? m : _);
    if (new Date > e) return null
  }
  let T = e => {
    (0, i.qfG)(r => {
      var o, u;
      return (0, l.jsxs)(i.VoidConfirmModal, (o = function(e) {
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
      }({}, r), u = u = {
        header: d.intl.string(d.t.R5bpin),
        confirmText: O || e ? d.intl.string(d.t["8ZsNv5"]) : d.intl.string(d.t.B9sJLX),
        cancelText: d.intl.string(d.t.oEAioF),
        onConfirm: () => f && !e ? a.A.deleteRecurrence(g.id, t, n, b) : a.A.deleteGuildEvent(t, g.id),
        children: [(0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: d.intl.string(d.t.v2GWNQ)
        }), (0, l.jsx)("br", {}), (O || e) && (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: d.intl.format(d.t.ZcpcyO, {})
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(u)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(u, e))
      }), o))
    })
  };
  return (0, l.jsx)(i.Drp, {
    id: d.intl.string(d.t.B9sJLX),
    label: d.intl.string(d.t.B9sJLX),
    action: f ? true : () => T(),
    color: "danger",
    children: f && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.tqClly),
        label: d.intl.string(d.t.tqClly),
        action: () => T(),
        disabled: null == b ? true : b.is_canceled,
        color: "danger"
      }), (0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.wr33rW),
        label: d.intl.string(d.t.wr33rW),
        action: () => T(true),
        color: "danger"
      })]
    })
  })
}