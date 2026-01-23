/** Chunk was on web.js **/
/** chunk id: 571139, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk624458 = require("./624458.js"),
  Chunk202384 = require("./202384.js"),
  Chunk513461 = require("./513461.js"),
  Chunk709977 = require("./709977.js"),
  Chunk212455 = require("./212455.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk121615 = require("./121615.js"),
  Chunk1624 = require("./1624.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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
  let i = (0, o.bG)([d.A], () => d.A.getGuildId(), []),
    v = (0, o.bG)([u.A], () => u.A.getGuild(i), [i]),
    I = (0, o.bG)([m.A], () => null != i ? m.A.getRequest(i) : null, [i]),
    S = (0, s.zy)(),
    T = (null == (t = (0, s.B6)(S.pathname, g.BVt.CHANNEL(null == v ? true : v.id, E.VV.GUILD_ONBOARDING))) ? true : t.isExact) === true;
  if (null == v || !(0, h.Qd)(v) || T) return null;
  let C = () => {
      (0, p.Ze)(v.id)
    },
    N = () => {
      (0, l.A)({
        title: y.intl.string(y.t.aIz1oV),
        subtitle: y.intl.string(y.t["13tjTU"]),
        variant: "primary",
        confirmText: y.intl.string(y.t["cY+Oob"]),
        onConfirm: () => f.A.removeGuildJoinRequest(v.id)
      })
    },
    w = () => {
      (0, c.mMO)(async () => {
        let {
          default: e
        } = await n.e("37548").then(n.bind(n, 856103));
        return t => (0, r.jsx)(e, A({
          guildId: v.id
        }, t))
      })
    },
    R = null != (e = null == I ? true : I.applicationStatus) ? e : _.B5.STARTED,
    P = null,
    D = null,
    x = null,
    L = [b.lm, O.lm];
  switch (R) {
    case _.B5.SUBMITTED:
      P = y.intl.string(y.t["5iLvSx"]), D = y.intl.string(y.t.mqtdmQ), x = N;
      break;
    case _.B5.REJECTED:
      P = y.intl.string(y.t.lk30cY), D = y.intl.string(y.t["8RrsHr"]), x = w, L.push(b.z3);
      break;
    default:
      P = y.intl.string(y.t.G5YKXP), D = y.intl.string(y.t["r8/DT+"]), x = C
  }
  return (0, r.jsxs)("div", {
    className: a()(...L),
    children: [(0, r.jsx)(c.Text, {
      className: b.wx,
      variant: "text-sm/normal",
      children: P
    }), (0, r.jsx)(c.Button, {
      variant: "overlay-primary",
      size: "sm",
      onClick: x,
      text: D
    })]
  })
}