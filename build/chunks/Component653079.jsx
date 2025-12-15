/** Chunk was on 8895 **/
/** chunk id: 653079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk884697 = require("./884697.js"),
  Chunk449217 = require("./449217.js"),
  Chunk29121 = require("./29121.js"),
  Chunk778825 = require("./778825.js"),
  Chunk25990 = require("./25990.js"),
  Chunk74538 = require("./74538.js"),
  Chunk956748 = require("./956748.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk875292 = require("./875292.js");
let f = e => {
  var t, n;
  let {
    user: r,
    guildId: f,
    nameplate: j
  } = e, y = (0, s.cj)([m.Z, p.Z], () => null == f ? m.Z.getAllPending() : p.Z.getAllPending()), {
    product: P,
    purchase: C
  } = (0, d.Z)(null == j ? true : j.skuId), E = (0, u.ag)(C), O = (0, u.kd)(P), w = g.ZP.canUseCollectibles(r), _ = (0, c.qS)(C), N = (0, c.G1)(P), Z = !w && _, I = null == C || Z;
  return (0, l.jsxs)("div", {
    className: i()(b.previewBorder, {
      [b.upsell]: null != j && I
    }),
    children: [(0, l.jsx)("div", {
      className: b.previewBox,
      role: "img",
      "aria-label": v.intl.string(v.t.SZeUdR),
      children: (0, l.jsxs)("div", {
        className: b.previewContents,
        "aria-hidden": true,
        children: [(0, l.jsx)(h.G, {
          width: 124,
          opacity: .9
        }), (0, l.jsx)(h.G, {
          width: 124,
          opacity: .9
        }), (0, l.jsx)(x.Z, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, y), n = n = {
          user: r,
          guildId: f,
          nameplate: j,
          isHighlighted: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)), (0, l.jsx)(h.G, {
          width: 124,
          opacity: .9
        }), (0, l.jsx)(h.G, {
          width: 124,
          opacity: .9
        })]
      })
    }), null != j && (0, l.jsxs)("div", {
      className: b.previewDescription,
      children: [(0, l.jsxs)(o.Text, {
        variant: "text-sm/semibold",
        children: [" ", (0, a.isEmpty)(E) ? O : E]
      }), I && (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: Z ? v.intl.string(v.t.nD78oa) : N && w ? v.intl.string(v.t.hmyYK8) : N ? v.intl.string(v.t.JY1i0u) : v.intl.string(v.t.fEGjVQ)
      })]
    })]
  })
}