/** Chunk was on 8895 **/
/** chunk id: 653079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk884697 = require("./884697.js"),
  Chunk449217 = require("./449217.js"),
  Chunk29121 = require("./29121.js"),
  Chunk778825 = require("./778825.js"),
  Chunk706454 = require("./706454.js"),
  Chunk25990 = require("./25990.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk956748 = require("./956748.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk875292 = require("./875292.js");
let C = e => {
    let {
      purchase: t,
      product: n,
      user: i
    } = e, u = (0, o.e7)([x.default], () => x.default.locale), m = (0, p.ag)(t), g = (0, p.kd)(n), f = v.ZP.canUseCollectibles(i), b = (0, d.qS)(t), C = (0, d.G1)(n), P = !f && b, [E, O] = r.useState(null);
    r.useEffect(() => {
      O((null == t ? true : t.expiresAt) != null ? (0, h.TD)(Date.now(), t.expiresAt) : null)
    }, [null == t ? true : t.expiresAt]);
    let w = null == t || P;
    return (0, l.jsxs)("div", {
      className: a()(y.previewDescriptionContainer, {
        [y.previewDescriptionUpsell]: w
      }),
      children: [(0, l.jsx)(c.Text, {
        color: "text-strong",
        variant: "text-sm/semibold",
        children: (0, s.isEmpty)(m) ? g : m
      }), w ? (0, l.jsx)(c.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: P ? j.intl.string(j.t.nD78oa) : C && f ? j.intl.string(j.t.hmyYK8) : C ? j.intl.string(j.t.JY1i0u) : j.intl.string(j.t.fEGjVQ)
      }) : (0, l.jsxs)(l.Fragment, {
        children: [null != E && (0, l.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: j.intl.format(j.t.Io7ozn, {
            days: E.days.toString()
          })
        }), (0, l.jsxs)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: [j.intl.format(j.t.gW9R4B, {
            date: t.purchasedAt.toLocaleDateString(u, {
              month: "long",
              year: "numeric"
            })
          }), null != t.expiresAt && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("br", {}), j.intl.format(j.t.eZSTa5, {
              date: t.expiresAt.toLocaleDateString(u, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            })]
          })]
        }), b && (0, l.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: j.intl.string(j.t.nKdAlO)
        })]
      })]
    })
  },
  P = e => {
    var t, n;
    let {
      user: r,
      guildId: i,
      nameplate: s
    } = e, c = (0, o.cj)([g.Z, m.Z], () => null == i ? g.Z.getAllPending() : m.Z.getAllPending()), {
      product: p,
      purchase: x
    } = (0, u.Z)(null == s ? true : s.skuId), h = v.ZP.canUseCollectibles(r), P = (0, d.qS)(x), E = null == x || !h && P;
    return (0, l.jsxs)("div", {
      className: a()(y.previewContainer, {
        [y.upsellContainer]: null != s && E
      }),
      children: [(0, l.jsx)("div", {
        className: y.previewBox,
        role: "img",
        "aria-label": j.intl.string(j.t.SZeUdR),
        children: (0, l.jsxs)("div", {
          className: y.previewContents,
          "aria-hidden": true,
          children: [(0, l.jsx)(f.G, {
            width: 124,
            opacity: .9
          }), (0, l.jsx)(f.G, {
            width: 124,
            opacity: .9
          }), (0, l.jsx)(b.Z, (t = function(e) {
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
          }({}, c), n = n = {
            user: r,
            guildId: i,
            nameplate: s,
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
          }), t)), (0, l.jsx)(f.G, {
            width: 124,
            opacity: .9
          }), (0, l.jsx)(f.G, {
            width: 124,
            opacity: .9
          })]
        })
      }), null != s && (0, l.jsx)(C, {
        purchase: x,
        product: p,
        user: r
      })]
    })
  }