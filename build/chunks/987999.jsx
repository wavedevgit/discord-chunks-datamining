/** Chunk was on 6368 **/
/** chunk id: 987999, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function g(t) {
  let {
    guild: e,
    onSelect: n
  } = t, g = e.id, O = (0, c.Z)({
    id: e.id,
    label: f.intl.string(f.t["94lLDw"])
  }), j = (0, i.e7)([u.Z], () => u.Z.getRequest(g)), y = () => {
    a.Z.removeGuildJoinRequest(g), d.Z.getGuildId() === g && (0, p.uL)(b.Z5c.ME)
  };
  return <o.v2r navId={"join-request-guild-context"} onClose={l.Zy} aria-label={f.intl.string(f.t.HpQykZ)} onSelect={n}>{(null == j ? true : j.applicationStatus) === s.wB.REJECTED && <o.sNh id={"reapply"} label={f.intl.string(f.t.rpFCLi)} action={() => {
        a.Z.resetGuildJoinRequest(g).then(() => {
          (0, p.uL)(b.Z5c.GUILD_MEMBER_VERIFICATION(g))
        })
      }} color={"default"} />}{<o.sNh id={"withdraw"} label={(null == j ? true : j.applicationStatus) === s.wB.STARTED ? f.intl.string(f.t.OQFlFB) : f.intl.string(f.t.mqtdmZ)} action={() => {
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
            header: f.intl.string(f.t.y0CVen),
            confirmText: f.intl.string(f.t.p89ACg),
            cancelText: f.intl.string(f.t.oEAioK),
            onConfirm: y
          }, t), i = i = {
            children: (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: (null == j ? true : j.applicationStatus) === s.wB.STARTED ? f.intl.string(f.t.fJwWVl) : f.intl.format(f.t["9ZezpK"], {
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
      }} color={"danger"} />}{<o.kSQ>{O}</o.kSQ>}</o.v2r>
}