/** Chunk was on 67544 **/
/** chunk id: 456029, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk359013 = require("./359013.js"),
  Chunk120421 = require("./120421.js"),
  Chunk284539 = require("./284539.js"),
  Chunk67411 = require("./67411.js"),
  Chunk26141 = require("./26141.jsx"),
  Chunk3072 = require("./3072.js"),
  Chunk81829 = require("./81829.jsx"),
  Chunk892689 = require("./892689.js"),
  Chunk477839 = require("./477839.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk81050 = require("./81050.js"),
  Chunk255785 = require("./255785.js"),
  Chunk938998 = require("./938998.js");

function j(e) {
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
let Chunk748549 = require("./748549.js"),
  P = [Chunk477839.FK.WEED];

function _(e) {
  var t, n;
  let {
    height: _,
    width: C,
    isPaused: Z
  } = e, [w, E] = (0, s.useState)({}), S = (0, s.useRef)(null), I = (0, a.e7)([l.Z], () => l.Z.hasPurchasedUpgrade(b.yN.WEEDS, b.uv.WEED_KILLER)), k = c.Mq[b.yN.WEEDS], [M, R] = (0, u.Z)(b.yN.WEEDS), A = null != (t = M.count) ? t : 0;
  (0, d.Z)(P, A);
  let T = (0, p.eR)(N),
    L = e => {
      var t;
      null == (t = S.current) || t.removeDrop(e), T(), R({
        count: A + 1
      })
    },
    B = e => {
      delete w[e], E(j({}, w))
    };
  return I ? null : <g.Z ref={S} isPaused={Z} itemId={b.yN.WEEDS} chance={.2} points={null != (n = k.points) ? n : 0} height={_} width={C} dropPadding={60} onPointsAdded={() => {
      var e, t, n;
      E((t = j({}, w), n = n = {
        [(0, o.Z)()]: null != (e = k.points) ? e : 0
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
    }}>{e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(m.Z, {
        renderedPoints: w,
        onRemovePoint: B
      }), (0, r.jsx)(i.P3F, {
        onClick: () => L(e),
        className: x.clickable,
        children: (0, r.jsx)(f.Z, {
          sources: [v, O],
          className: x.weed,
          "aria-label": h.intl.string(y.default.QBujOj),
          isPaused: Z,
          interval: 1e3
        })
      })]
    })}</g.Z>
}