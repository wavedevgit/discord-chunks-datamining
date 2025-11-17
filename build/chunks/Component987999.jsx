/** Chunk was on 6368 **/
/** chunk id: 987999, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk693546 = require("./693546.js"),
  Chunk246364 = require("./246364.js"),
  Chunk937111 = require("./937111.js"),
  Chunk703656 = require("./703656.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(t) {
  let {
    guild: e,
    onSelect: n
  } = t, O = e.id, g = (0, c.Z)({
    id: e.id,
    label: f.intl.string(f.t["94lLD7"])
  }), j = (0, i.e7)([u.Z], () => u.Z.getRequest(O)), y = () => {
    a.Z.removeGuildJoinRequest(O), d.Z.getGuildId() === O && (0, p.uL)(b.Z5c.ME)
  };
  return (0, r.jsxs)(o.v2r, {
    navId: "join-request-guild-context",
    onClose: l.Zy,
    "aria-label": f.intl.string(f.t.HpQykc),
    onSelect: n,
    children: [(null == j ? true : j.applicationStatus) === s.wB.REJECTED && (0, r.jsx)(o.sNh, {
      id: "reapply",
      label: f.intl.string(f.t.rpFCLs),
      action: () => {
        a.Z.resetGuildJoinRequest(O).then(() => {
          (0, p.uL)(b.Z5c.GUILD_MEMBER_VERIFICATION(O))
        })
      },
      color: "default"
    }), (0, r.jsx)(o.sNh, {
      id: "withdraw",
      label: (null == j ? true : j.applicationStatus) === s.wB.STARTED ? f.intl.string(f.t.OQFlFD) : f.intl.string(f.t.mqtdmQ),
      action: () => {
        (0, o.h7j)(t => {
          var n, i;
          return (0, r.jsx)(o.ConfirmModal, (n = function(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
              }))), r.forEach(function(e) {
                var r;
                r = n[e], e in t ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : t[e] = r
              })
            }
            return t
          }({
            header: f.intl.string(f.t.y0CVes),
            confirmText: f.intl.string(f.t.p89ACt),
            cancelText: f.intl.string(f.t.oEAioF),
            onConfirm: y
          }, t), i = i = {
            children: (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: (null == j ? true : j.applicationStatus) === s.wB.STARTED ? f.intl.string(f.t.fJwWVt) : f.intl.format(f.t["9ZezpN"], {
                name: e.name
              })
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(t);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t))
          }), n))
        })
      },
      color: "danger"
    }), (0, r.jsx)(o.kSQ, {
      children: g
    })]
  })
}