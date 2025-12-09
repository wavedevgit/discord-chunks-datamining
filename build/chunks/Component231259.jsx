/** Chunk was on 470 **/
/** chunk id: 231259, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk357156 = require("./357156.js"),
  Chunk924301 = require("./924301.js"),
  Chunk482241 = require("./482241.js"),
  Chunk894017 = require("./894017.js"),
  Chunk79874 = require("./79874.js"),
  Chunk388032 = require("./388032.jsx");

function g(t) {
  let {
    guildEventId: e,
    recurrenceId: n,
    guild: g,
    channel: f
  } = t, b = null != n, {
    canManageGuildEvent: p
  } = (0, o.XJ)(null != f ? f : g), [v, E] = (0, r.Wu)([u.ZP], () => [u.ZP.isActive(e), u.ZP.getGuildScheduledEvent(e)]), y = (0, a.Z)(n, null == E ? true : E.id), O = null != E && p(E), P = (null == E ? true : E.recurrence_rule) != null && !b, Z = (0, s.zI)(e, n);
  if (!O || v && !P && !b || b && !b || null == E || null == Z) return null;
  let {
    startTime: h
  } = Z;
  if (v && b) {
    var j;
    if (null == h) return null;
    let t = new Date(null != (j = null == y ? true : y.scheduled_start_time) ? j : h);
    if (new Date > t) return null
  }
  let m = t => {
    (0, i.h7j)(r => {
      var o, u;
      return (0, l.jsxs)(i.VoidConfirmModal, (o = function(t) {
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
      }({}, r), u = u = {
        header: d.intl.string(d.t.R5bpin),
        confirmText: P || t ? d.intl.string(d.t["8ZsNv5"]) : d.intl.string(d.t.B9sJLX),
        cancelText: d.intl.string(d.t.oEAioF),
        onConfirm: () => b && !t ? c.Z.deleteRecurrence(g.id, e, n, y) : c.Z.deleteGuildEvent(e, g.id),
        children: [(0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: d.intl.string(d.t.v2GWNQ)
        }), (0, l.jsx)("br", {}), (P || t) && (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: d.intl.format(d.t.ZcpcyO, {})
        })]
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(t);
          n.push.apply(n, l)
        }
        return n
      })(Object(u)).forEach(function(t) {
        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(u, t))
      }), o))
    })
  };
  return (0, l.jsx)(i.sNh, {
    id: d.intl.string(d.t.B9sJLX),
    label: d.intl.string(d.t.B9sJLX),
    action: b ? true : () => m(),
    color: "danger",
    children: b && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.tqClly),
        label: d.intl.string(d.t.tqClly),
        action: () => m(),
        disabled: null == y ? true : y.is_canceled,
        color: "danger"
      }), (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.wr33rW),
        label: d.intl.string(d.t.wr33rW),
        action: () => m(true),
        color: "danger"
      })]
    })
  })
}