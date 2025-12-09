/** Chunk was on web.js **/
/** chunk id: 574650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk248514 = require("./248514.jsx"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}
let I = () => {
  var e, t;
  let i = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []),
    v = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk120356), [Chunk120356]),
    I = (0, Chunk442837.e7)([Chunk937111.Z], () => null != Chunk120356 ? Chunk937111.Z.getRequest(Chunk120356) : null, [Chunk120356]),
    T = (0, Chunk828700.TH)(),
    A = (null == (e = (0, Chunk828700.LX)(T.pathname, Chunk981631.Z5c.CHANNEL(null == v ? true : v.id, Chunk176505.oC.GUILD_ONBOARDING))) ? true : module.isExact) === true;
  if (null == v || !(0, Chunk983736.Dc)(v) || A) return null;
  let C = () => {
      (0, Chunk305325.hk)(v.id)
    },
    N = () => {
      (0, Chunk248514.Z)({
        title: Chunk388032.intl.string(Chunk388032.t.aIz1oV),
        subtitle: Chunk388032.intl.string(Chunk388032.t["13tjTU"]),
        variant: "primary",
        confirmText: Chunk388032.intl.string(Chunk388032.t["cY+Oob"]),
        onConfirm: () => Chunk693546.Z.removeGuildJoinRequest(v.id)
      })
    },
    P = () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await require.e("3378").then(require.bind(require, 76075));
        return t => (0, r.jsx)(e, S({
          guildId: v.id
        }, t))
      })
    },
    R = null != (t = null == I ? true : I.applicationStatus) ? exports : Chunk246364.wB.STARTED,
    D = null,
    w = null,
    x = null,
    L = [Chunk342891.notice, Chunk226910.notice];
  switch (R) {
    case Chunk246364.wB.SUBMITTED:
      D = Chunk388032.intl.string(Chunk388032.t["5iLvSx"]), w = Chunk388032.intl.string(Chunk388032.t.mqtdmQ), x = N;
      break;
    case Chunk246364.wB.REJECTED:
      D = Chunk388032.intl.string(Chunk388032.t.lk30cY), w = Chunk388032.intl.string(Chunk388032.t["8RrsHr"]), x = P, L.push(Chunk342891.error);
      break;
    default:
      D = Chunk388032.intl.string(Chunk388032.t.G5YKXP), w = Chunk388032.intl.string(Chunk388032.t["r8/DT+"]), x = C
  }
  return (0, Chunk54381.jsxs)("div", {
    className: a()(...L),
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk342891.header,
      variant: "text-sm/normal",
      children: D
    }), (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "overlay-primary",
      size: "sm",
      onClick: x,
      text: w
    })]
  })
}