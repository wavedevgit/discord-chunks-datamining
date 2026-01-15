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
  Chunk360390 = require("./360390.js"),
  Chunk99940 = require("./99940.js");

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
  let i = (0, s.e7)([d.Z], () => d.Z.getGuildId(), []),
    v = (0, s.e7)([u.Z], () => u.Z.getGuild(i), [i]),
    I = (0, s.e7)([m.Z], () => null != i ? m.Z.getRequest(i) : null, [i]),
    T = (0, o.TH)(),
    C = (null == (e = (0, o.LX)(T.pathname, g.Z5c.CHANNEL(null == v ? true : v.id, E.oC.GUILD_ONBOARDING))) ? true : e.isExact) === true;
  if (null == v || !(0, h.Dc)(v) || C) return null;
  let A = () => {
      (0, p.hk)(v.id)
    },
    N = () => {
      (0, l.Z)({
        title: b.intl.string(b.t.aIz1oV),
        subtitle: b.intl.string(b.t["13tjTU"]),
        variant: "primary",
        confirmText: b.intl.string(b.t["cY+Oob"]),
        onConfirm: () => f.Z.removeGuildJoinRequest(v.id)
      })
    },
    P = () => {
      (0, c.ZDy)(async () => {
        let {
          default: e
        } = await n.e("3378").then(n.bind(n, 76075));
        return t => (0, r.jsx)(e, S({
          guildId: v.id
        }, t))
      })
    },
    w = null != (t = null == I ? true : I.applicationStatus) ? t : _.wB.STARTED,
    R = null,
    D = null,
    x = null,
    L = [y.notice, O.notice];
  switch (w) {
    case _.wB.SUBMITTED:
      R = b.intl.string(b.t["5iLvSx"]), D = b.intl.string(b.t.mqtdmQ), x = N;
      break;
    case _.wB.REJECTED:
      R = b.intl.string(b.t.lk30cY), D = b.intl.string(b.t["8RrsHr"]), x = P, L.push(y.error);
      break;
    default:
      R = b.intl.string(b.t.G5YKXP), D = b.intl.string(b.t["r8/DT+"]), x = A
  }
  return (0, r.jsxs)("div", {
    className: a()(...L),
    children: [(0, r.jsx)(c.Text, {
      className: y.header,
      variant: "text-sm/normal",
      children: R
    }), (0, r.jsx)(c.Button, {
      variant: "overlay-primary",
      size: "sm",
      onClick: x,
      text: D
    })]
  })
}