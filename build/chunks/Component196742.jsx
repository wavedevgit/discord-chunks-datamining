/** Chunk was on 31981 **/
/** chunk id: 196742, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk311570 = require("./311570.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk410030 = require("./410030.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk1585 = require("./1585.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk1870 = require("./1870.js"),
  Chunk164946 = require("./164946.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk668826 = require("./668826.js"),
  Chunk120421 = require("./120421.js"),
  Chunk477839 = require("./477839.js"),
  Chunk511479 = require("./511479.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960786 = require("./960786.js"),
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
  let S = (0, a.e7)([y.default], () => y.default.getCurrentUser()),
    E = (0, l.ZP)(),
    {
      analyticsLocations: z
    } = (0, d.ZP)(C),
    D = (0, a.e7)([j.Z], () => j.Z.isRedeemingPrize),
    _ = (0, a.e7)([p.Z], () => p.Z.isFetching);
  return (0, c.useEffect)(() => {
    null != S && (async () => {
      await (0, O.YM)(S), (0, u.qg)({
        variantsReturnStyle: o.v.VARIANTS_GROUP
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
      className: v.decorationBackground,
      src: "light" === E ? k : P,
      alt: ""
    }), (0, r.jsxs)(i.hzk, {
      className: v.content,
      children: [(0, r.jsx)("img", {
        className: v.decoration,
        src: w.Z,
        alt: ""
      }), (0, r.jsx)(i.X6q, {
        className: v.header,
        variant: "heading-md/bold",
        children: x.intl.string(m.default.B0jZ3t)
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        children: x.intl.string(m.default.aexiND)
      })]
    }), (0, r.jsx)(i.mzw, {
      children: (0, r.jsxs)(i.hE2, {
        direction: "horizontal-reverse",
        children: [(0, r.jsx)(i.zxk, {
          variant: "primary",
          text: x.intl.string(x.t.BVcYCw),
          onClick: () => {
            Z.onClose(), (0, f.ps)({
              initialSelectedDecorationId: h.MH,
              analyticsLocations: z,
              onClose: () => {
                let e = g.Z.getAllPending(),
                  t = (0, b.ED)(e);
                (0, s.Mn)(t), (0, s.si)()
              }
            })
          },
          loading: D || _
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