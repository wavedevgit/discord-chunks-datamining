/** Chunk was on web.js **/
/** chunk id: 574650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
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

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = () => {
  var e, t;
  let i = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId(), []),
    v = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(Chunk120356), [Chunk120356]),
    S = (0, Chunk442837.e7)([Chunk937111.Z], () => null != Chunk120356 ? Chunk937111.Z.getRequest(Chunk120356) : null, [Chunk120356]),
    A = (0, Chunk843611.TH)(),
    C = (null == (e = (0, Chunk843611.LX)(A.pathname, Chunk981631.Z5c.CHANNEL(null == v ? true : v.id, Chunk176505.oC.GUILD_ONBOARDING))) ? true : module.isExact) === true;
  if (null == v || !(0, Chunk983736.Dc)(v) || C) return null;
  let N = () => {
      (0, Chunk305325.hk)(v.id)
    },
    R = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(c.ConfirmModal, T(I({
        header: b.intl.string(b.t.aIz1oV),
        confirmText: b.intl.string(b.t["cY+Oob"]),
        cancelText: b.intl.string(b.t["ETE/oC"]),
        onConfirm: () => f.Z.removeGuildJoinRequest(v.id),
        confirmButtonColor: l.zx.Colors.BRAND
      }, e), {
        children: (0, r.jsx)(c.Text, {
          variant: "text-md/normal",
          children: b.intl.string(b.t["13tjTU"])
        })
      })))
    },
    P = () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await require.e("3378").then(require.bind(require, 76075));
        return t => (0, r.jsx)(e, I({
          guildId: v.id
        }, t))
      })
    },
    w = null != (t = null == S ? true : S.applicationStatus) ? exports : Chunk246364.wB.STARTED,
    D = null,
    L = null,
    x = null,
    M = [Chunk342891.notice, Chunk226910.notice];
  switch (w) {
    case Chunk246364.wB.SUBMITTED:
      D = Chunk388032.intl.string(Chunk388032.t["5iLvSx"]), L = Chunk388032.intl.string(Chunk388032.t.mqtdmQ), x = R;
      break;
    case Chunk246364.wB.REJECTED:
      D = Chunk388032.intl.string(Chunk388032.t.lk30cY), L = Chunk388032.intl.string(Chunk388032.t["8RrsHr"]), x = P, M.push(Chunk342891.error);
      break;
    default:
      D = Chunk388032.intl.string(Chunk388032.t.G5YKXP), L = Chunk388032.intl.string(Chunk388032.t["r8/DT+"]), x = N
  }
  return (0, Chunk951288.jsxs)("div", {
    className: a()(...M),
    children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk342891.header,
      variant: "text-sm/normal",
      children: D
    }), (0, Chunk951288.jsx)(Chunk481060.Button, {
      variant: "overlay-primary",
      size: "sm",
      onClick: x,
      text: L
    })]
  })
}