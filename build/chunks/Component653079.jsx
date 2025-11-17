/** Chunk was on 8895 **/
/** chunk id: 653079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk763740 = require("./763740.js");
let _ = e => {
  var t, n;
  let {
    user: r,
    guildId: _,
    nameplate: j
  } = e, y = (0, s.cj)([p.Z, d.Z], () => null == _ ? p.Z.getAllPending() : d.Z.getAllPending()), {
    product: P,
    purchase: b
  } = (0, c.Z)(null == j ? true : j.skuId), f = (0, u.kd)(P), C = m.ZP.canUseCollectibles(r), E = (0, o.qS)(b), O = (0, o.G1)(P), w = !C && E, N = null == b || w;
  return (0, l.jsxs)("div", {
    className: i()(v.previewBorder, {
      [v.upsell]: null != j && N
    }),
    children: [(0, l.jsx)("div", {
      className: v.previewBox,
      role: "img",
      "aria-label": x.intl.string(x.t.SZeUdR),
      children: (0, l.jsxs)("div", {
        className: v.previewContents,
        "aria-hidden": true,
        children: [(0, l.jsx)(h.G, {
          width: 124,
          opacity: .9
        }), (0, l.jsx)(h.G, {
          width: 124,
          opacity: .9
        }), (0, l.jsx)(g.Z, (t = function(e) {
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
          guildId: _,
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
      className: v.previewDescription,
      children: [(0, l.jsx)(a.Text, {
        variant: "text-sm/semibold",
        children: f
      }), N && (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: w ? x.intl.string(x.t.nD78oa) : O && C ? x.intl.string(x.t.hmyYK8) : O ? x.intl.string(x.t.JY1i0u) : x.intl.string(x.t.fEGjVQ)
      })]
    })]
  })
}