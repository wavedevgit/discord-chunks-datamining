/** Chunk was on 46673 **/
/** chunk id: 571139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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
let P = () => {
  var e, t;
  let i = (0, o.bG)([E.A], () => E.A.getGuildId(), []),
    P = (0, o.bG)([u.A], () => u.A.getGuild(i), [i]),
    y = (0, o.bG)([I.A], () => null != i ? I.A.getRequest(i) : null, [i]),
    m = (0, a.zy)(),
    f = (null == (t = (0, a.B6)(m.pathname, O.BVt.CHANNEL(null == P ? true : P.id, N.VV.GUILD_ONBOARDING))) ? true : t.isExact) === true;
  if (null == P || !(0, T.Qd)(P) || f) return null;
  let C = null != (e = null == y ? true : y.applicationStatus) ? e : A.B5.STARTED,
    g = null,
    D = null,
    h = null,
    b = [R.lm, S.lm];
  switch (C) {
    case A.B5.SUBMITTED:
      g = p.intl.string(p.t["5iLvSx"]), D = p.intl.string(p.t.mqtdmQ), h = () => {
        (0, s.A)({
          title: p.intl.string(p.t.aIz1oV),
          subtitle: p.intl.string(p.t["13tjTU"]),
          variant: "primary",
          confirmText: p.intl.string(p.t["cY+Oob"]),
          onConfirm: () => d.A.removeGuildJoinRequest(P.id)
        })
      };
      break;
    case A.B5.REJECTED:
      g = p.intl.string(p.t.lk30cY), D = p.intl.string(p.t["8RrsHr"]), h = () => {
        (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("37548").then(n.bind(n, 856103));
          return t => (0, r.jsx)(e, function(e) {
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
          }({
            guildId: P.id
          }, t))
        })
      }, b.push(R.z3);
      break;
    default:
      g = p.intl.string(p.t.G5YKXP), D = p.intl.string(p.t["r8/DT+"]), h = () => {
        (0, _.Ze)(P.id)
      }
  }
  return (0, r.jsxs)("div", {
    className: l()(...b),
    children: [(0, r.jsx)(c.Text, {
      className: R.wx,
      variant: "text-sm/normal",
      children: g
    }), (0, r.jsx)(c.Button, {
      variant: "overlay-primary",
      size: "sm",
      onClick: h,
      text: D
    })]
  })
}