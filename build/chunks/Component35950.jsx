/** Chunk was on 23321 **/
/** chunk id: 35950, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk993408 = require("./993408.js"),
  Chunk821701 = require("./821701.js"),
  Chunk645178 = require("./645178.js"),
  Chunk833336 = require("./833336.js"),
  Chunk773669 = require("./773669.js"),
  Chunk752319 = require("./752319.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk359701 = require("./359701.jsx"),
  Chunk550111 = require("./550111.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk514748 = require("./514748.js");
let b = e => {
    let {
      purchase: t,
      product: l,
      user: i
    } = e, d = (0, o.bG)([x.default], () => x.default.locale), m = (0, p.Tk)(t), g = (0, p.o7)(l), _ = A.Ay.canUseCollectibles(i), v = (0, u.gA)(t), b = (0, u.G0)(l), f = !_ && v, [O, C] = r.useState(null);
    r.useEffect(() => {
      C((null == t ? true : t.expiresAt) != null ? (0, h.Tf)(Date.now(), t.expiresAt) : null)
    }, [null == t ? true : t.expiresAt]);
    let E = null == t || f;
    return (0, n.jsxs)("div", {
      className: s()(j.ip, {
        [j.w6]: E
      }),
      children: [(0, n.jsx)(c.Text, {
        color: "text-strong",
        variant: "text-sm/semibold",
        children: (0, a.isEmpty)(m) ? g : m
      }), E ? (0, n.jsx)(c.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: f ? y.intl.string(y.t.nD78oa) : b && _ ? y.intl.string(y.t.hmyYK8) : b ? y.intl.string(y.t.JY1i0u) : y.intl.string(y.t.fEGjVQ)
      }) : (0, n.jsxs)(n.Fragment, {
        children: [null != O && (0, n.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: y.intl.format(y.t.Io7ozn, {
            days: O.days.toString()
          })
        }), (0, n.jsxs)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: [y.intl.format(y.t.gW9R4B, {
            date: t.purchasedAt.toLocaleDateString(d, {
              month: "long",
              year: "numeric"
            })
          }), null != t.expiresAt && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("br", {}), y.intl.format(y.t.eZSTa5, {
              date: t.expiresAt.toLocaleDateString(d, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            })]
          })]
        }), v && (0, n.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: y.intl.string(y.t.nKdAlO)
        })]
      })]
    })
  },
  f = e => {
    var t, l;
    let {
      user: r,
      guildId: i,
      nameplate: a
    } = e, c = (0, o.cf)([g.A, m.A], () => null == i ? g.A.getAllPending() : m.A.getAllPending()), {
      product: p,
      purchase: x
    } = (0, d.A)(null == a ? true : a.skuId), h = A.Ay.canUseCollectibles(r), f = (0, u.gA)(x), O = null == x || !h && f;
    return (0, n.jsxs)("div", {
      className: s()(j.i1, {
        [j.Zj]: null != a && O
      }),
      children: [(0, n.jsx)("div", {
        className: j.u_,
        role: "img",
        "aria-label": y.intl.string(y.t.SZeUdR),
        children: (0, n.jsxs)("div", {
          className: j.Xp,
          "aria-hidden": true,
          children: [(0, n.jsx)(_._, {
            width: 124,
            opacity: .9
          }), (0, n.jsx)(_._, {
            width: 124,
            opacity: .9
          }), (0, n.jsx)(v.A, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(l);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = l[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, c), l = l = {
            user: r,
            guildId: i,
            nameplate: a,
            isHighlighted: true
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              l.push.apply(l, n)
            }
            return l
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
          }), t)), (0, n.jsx)(_._, {
            width: 124,
            opacity: .9
          }), (0, n.jsx)(_._, {
            width: 124,
            opacity: .9
          })]
        })
      }), null != a && (0, n.jsx)(b, {
        purchase: x,
        product: p,
        user: r
      })]
    })
  }