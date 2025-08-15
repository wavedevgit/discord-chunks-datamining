/** Chunk was on 31253 **/
/** chunk id: 574650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356);
if (12633 == require.j) var Chunk843611 = require("./843611.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk693546 = require("./693546.js"),
  Chunk305325 = require("./305325.js"),
  Chunk246364 = require("./246364.js"),
  Chunk983736 = require("./983736.js"),
  Chunk937111 = require("./937111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk342891 = require("./342891.js"),
  Chunk226910 = require("./226910.js");

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let C = 12633 == require.j ? () => {
  var e, t;
  let i = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []),
    C = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk120356), [Chunk120356]),
    m = (0, Chunk442837.e7)([Chunk937111.Z], () => null != Chunk120356 ? Chunk937111.Z.getRequest(Chunk120356) : null, [Chunk120356]),
    g = (0, Chunk843611.TH)(),
    P = (null == (e = (0, Chunk843611.LX)(g.pathname, Chunk981631.Z5c.CHANNEL(null == C ? true : C.id, Chunk176505.oC.GUILD_ONBOARDING))) ? true : module.isExact) === true;
  if (null == C || !(0, Chunk983736.Dc)(C) || P) return null;
  let D = null != (t = null == m ? true : m.applicationStatus) ? exports : Chunk246364.wB.STARTED,
    b = null,
    y = null,
    h = null,
    U = [Chunk342891.notice, Chunk226910.notice];
  switch (D) {
    case Chunk246364.wB.SUBMITTED:
      b = Chunk388032.intl.string(Chunk388032.t["5iLvS0"]), y = Chunk388032.intl.string(Chunk388032.t.mqtdmZ), h = () => {
        (0, Chunk481060.h7j)(e => {
          var t, n;
          return (0, r.jsx)(s.ConfirmModal, (t = A({
            header: p.intl.string(p.t.aIz1oa),
            confirmText: p.intl.string(p.t["cY+Ooa"]),
            cancelText: p.intl.string(p.t["ETE/oK"]),
            onConfirm: () => d.Z.removeGuildJoinRequest(C.id),
            confirmButtonColor: c.zx.Colors.BRAND
          }, e), n = n = {
            children: (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: p.intl.string(p.t["13tjTU"])
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        })
      };
      break;
    case Chunk246364.wB.REJECTED:
      b = Chunk388032.intl.string(Chunk388032.t.lk30cX), y = Chunk388032.intl.string(Chunk388032.t["8RrsHh"]), h = () => {
        (0, Chunk481060.ZDy)(async () => {
          let {
            default: e
          } = await require.e("3378").then(require.bind(require, 76075));
          return t => (0, r.jsx)(e, A({
            guildId: C.id
          }, t))
        })
      }, U.push(Chunk342891.error);
      break;
    default:
      b = Chunk388032.intl.string(Chunk388032.t.G5YKXF), y = Chunk388032.intl.string(Chunk388032.t["r8/DT0"]), h = () => {
        (0, Chunk305325.hk)(C.id)
      }
  }
  return (0, Chunk951288.jsxs)("div", {
    className: l()(...U),
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk342891.header,
      variant: "text-sm/normal",
      children: b
    }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
      variant: "overlay-primary",
      size: "sm",
      onClick: h,
      text: y
    })]
  })
} : null