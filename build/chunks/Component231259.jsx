/** Chunk was on 470 **/
/** chunk id: 231259, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    canManageGuildEvent: v
  } = (0, o.XJ)(null != f ? f : g), [E, p] = (0, r.Wu)([u.ZP], () => [u.ZP.isActive(e), u.ZP.getGuildScheduledEvent(e)]), Z = (0, a.Z)(n, null == p ? true : p.id), y = null != p && v(p), O = (null == p ? true : p.recurrence_rule) != null && !b, h = (0, s.zI)(e, n);
  if (!y || E && !O && !b || b && !b || null == p || null == h) return null;
  let {
    startTime: P
  } = h;
  if (E && b) {
    var m;
    if (null == P) return null;
    let t = new Date(null != (m = null == Z ? true : Z.scheduled_start_time) ? m : P);
    if (new Date > t) return null
  }
  let j = t => {
    (0, i.h7j)(r => {
      var o, u;
      return (0, l.jsxs)(i.ConfirmModal, (o = function(t) {
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
        header: d.intl.string(d.t.R5bpio),
        confirmText: O || t ? d.intl.string(d.t["8ZsNv7"]) : d.intl.string(d.t.B9sJLS),
        cancelText: d.intl.string(d.t.oEAioK),
        onConfirm: () => b && !t ? c.Z.deleteRecurrence(g.id, e, n, Z) : c.Z.deleteGuildEvent(e, g.id),
        children: [(0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: d.intl.string(d.t.v2GWNT)
        }), (0, l.jsx)("br", {}), (O || t) && (0, l.jsx)(i.Text, {
          variant: "text-md/normal",
          children: d.intl.format(d.t.ZcpcyM, {})
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
    id: d.intl.string(d.t.B9sJLS),
    label: d.intl.string(d.t.B9sJLS),
    action: b ? true : () => j(),
    color: "danger",
    children: b && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.tqCll5),
        label: d.intl.string(d.t.tqCll5),
        action: () => j(),
        disabled: null == Z ? true : Z.is_canceled,
        color: "danger"
      }), (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.wr33ra),
        label: d.intl.string(d.t.wr33ra),
        action: () => j(true),
        color: "danger"
      })]
    })
  })
}