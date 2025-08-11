/** Chunk was on 31981 **/
/** chunk id: 196742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk410030 = require("./410030.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk1585 = require("./1585.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk1870 = require("./1870.js"),
  Chunk228624 = require("./228624.js"),
  Chunk164946 = require("./164946.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk668826 = require("./668826.js"),
  Chunk120421 = require("./120421.js"),
  Chunk477839 = require("./477839.js"),
  Chunk603571 = require("./603571.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk918991 = require("./918991.js"),
  Chunk688401 = require("./688401.js"),
  Chunk609051 = require("./609051.js"),
  Chunk171346 = require("./171346.js");

function C(e) {
  var t, n, {
      analyticsLocations: C
    } = e,
    Z = function(e, t) {
      if (null == e) return {};
      var n, r, c = function(e, t) {
        if (null == e) return {};
        var n, r, c = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (c[n] = e[n]);
        return c
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n])
      }
      return c
    }(e, ["analyticsLocations"]);
  let z = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
    E = (0, s.ZP)(),
    {
      analyticsLocations: D
    } = (0, l.ZP)(C),
    S = (0, o.e7)([j.Z], () => j.Z.isRedeemingPrize),
    M = (0, o.e7)([u.Z], () => u.Z.isFetching),
    _ = (0, p.hv)("ClickerGameRedeemPrizeModal");
  return (0, c.useEffect)(() => {
    null != z && (async () => {
      await (0, O.YM)(z), (0, f.qg)({
        variantsReturnStyle: _,
        location: "ClickerGameRedeemPrizeModal"
      })
    })()
  }, []), (0, r.jsxs)(i.Y0X, (t = function(e) {
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
  }({}, Z), n = n = {
    parentComponent: "ClickerGameRedeemPrizeModal",
    children: [(0, r.jsx)("img", {
      className: P.decorationBackground,
      src: "light" === E ? k : v,
      alt: ""
    }), (0, r.jsxs)(i.hzk, {
      className: P.content,
      children: [(0, r.jsx)("img", {
        className: P.decoration,
        src: w.Z,
        alt: ""
      }), (0, r.jsx)(i.X6q, {
        className: P.header,
        variant: "heading-md/bold",
        children: x.intl.string(h.default.B0jZ3t)
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        children: x.intl.string(h.default.aexiND)
      })]
    }), (0, r.jsx)(i.mzw, {
      children: (0, r.jsxs)(i.hE2, {
        direction: "horizontal-reverse",
        children: [(0, r.jsx)(i.zxk, {
          variant: "primary",
          text: x.intl.string(x.t.BVcYCw),
          onClick: () => {
            Z.onClose(), (0, d.ps)({
              initialSelectedDecorationId: m.MH,
              analyticsLocations: D,
              onClose: () => {
                let e = g.Z.getAllPending(),
                  t = (0, b.ED)(e);
                (0, a.Mn)(t), (0, a.si)()
              }
            })
          },
          loading: S || M
        }), (0, r.jsx)(i.zxk, {
          variant: "secondary",
          text: x.intl.string(x.t["ETE/oK"]),
          onClick: Z.onClose
        })]
      })
    })]
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
}