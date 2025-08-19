/** Chunk was on 11868 **/
/** chunk id: 574650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk843611 = require("./843611.js"),
  Chunk442837 = require("./442837.js"),
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

function R(e) {
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
let A = () => {
  var e, t;
  let i = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []),
    A = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk120356), [Chunk120356]),
    g = (0, Chunk442837.e7)([Chunk937111.Z], () => null != Chunk120356 ? Chunk937111.Z.getRequest(Chunk120356) : null, [Chunk120356]),
    P = (0, Chunk843611.TH)(),
    C = (null == (e = (0, Chunk843611.LX)(P.pathname, Chunk981631.Z5c.CHANNEL(null == A ? true : A.id, Chunk176505.oC.GUILD_ONBOARDING))) ? true : module.isExact) === true;
  if (null == A || !(0, Chunk983736.Dc)(A) || C) return null;
  let D = null != (t = null == g ? true : g.applicationStatus) ? exports : Chunk246364.wB.STARTED,
    y = null,
    h = null,
    b = null,
    U = [Chunk342891.notice, Chunk226910.notice];
  switch (D) {
    case Chunk246364.wB.SUBMITTED:
      y = Chunk388032.intl.string(Chunk388032.t["5iLvS0"]), h = Chunk388032.intl.string(Chunk388032.t.mqtdmZ), b = () => {
        (0, Chunk481060.h7j)(e => {
          var t, n;
          return (0, r.jsx)(s.ConfirmModal, (t = R({
            header: f.intl.string(f.t.aIz1oa),
            confirmText: f.intl.string(f.t["cY+Ooa"]),
            cancelText: f.intl.string(f.t["ETE/oK"]),
            onConfirm: () => _.Z.removeGuildJoinRequest(A.id),
            confirmButtonColor: c.zx.Colors.BRAND
          }, e), n = n = {
            children: (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: f.intl.string(f.t["13tjTU"])
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
      y = Chunk388032.intl.string(Chunk388032.t.lk30cX), h = Chunk388032.intl.string(Chunk388032.t["8RrsHh"]), b = () => {
        (0, Chunk481060.ZDy)(async () => {
          let {
            default: e
          } = await require.e("3378").then(require.bind(require, 76075));
          return t => (0, r.jsx)(e, R({
            guildId: A.id
          }, t))
        })
      }, U.push(Chunk342891.error);
      break;
    default:
      y = Chunk388032.intl.string(Chunk388032.t.G5YKXF), h = Chunk388032.intl.string(Chunk388032.t["r8/DT0"]), b = () => {
        (0, Chunk305325.hk)(A.id)
      }
  }
  return (0, Chunk951288.jsxs)("div", {
    className: l()(...U),
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk342891.header,
      variant: "text-sm/normal",
      children: y
    }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
      variant: "overlay-primary",
      size: "sm",
      onClick: b,
      text: h
    })]
  })
}