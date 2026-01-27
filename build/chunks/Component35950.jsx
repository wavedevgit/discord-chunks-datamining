/** Chunk was on 23321 **/
/** chunk id: 35950, original params: e,t,n (module,exports,require) **/
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
      product: n,
      user: i
    } = e, d = (0, o.bG)([x.default], () => x.default.locale), m = (0, p.Tk)(t), g = (0, p.o7)(n), _ = h.Ay.canUseCollectibles(i), y = (0, u.gA)(t), b = (0, u.G0)(n), f = !_ && y, [O, C] = r.useState(null);
    r.useEffect(() => {
      C((null == t ? true : t.expiresAt) != null ? (0, A.Tf)(Date.now(), t.expiresAt) : null)
    }, [null == t ? true : t.expiresAt]);
    let E = null == t || f;
    return (0, l.jsxs)("div", {
      className: s()(v.ip, {
        [v.w6]: E
      }),
      children: [(0, l.jsx)(c.Text, {
        color: "text-strong",
        variant: "text-sm/semibold",
        children: (0, a.isEmpty)(m) ? g : m
      }), E ? (0, l.jsx)(c.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: f ? j.intl.string(j.t.nD78oa) : b && _ ? j.intl.string(j.t.hmyYK8) : b ? j.intl.string(j.t.JY1i0u) : j.intl.string(j.t.fEGjVQ)
      }) : (0, l.jsxs)(l.Fragment, {
        children: [null != O && (0, l.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: j.intl.format(j.t.Io7ozn, {
            days: O.days.toString()
          })
        }), (0, l.jsxs)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: [j.intl.format(j.t.gW9R4B, {
            date: t.purchasedAt.toLocaleDateString(d, {
              month: "long",
              year: "numeric"
            })
          }), null != t.expiresAt && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("br", {}), j.intl.format(j.t.eZSTa5, {
              date: t.expiresAt.toLocaleDateString(d, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            })]
          })]
        }), y && (0, l.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: j.intl.string(j.t.nKdAlO)
        })]
      })]
    })
  },
  f = e => {
    var t, n;
    let {
      user: r,
      guildId: i,
      nameplate: a
    } = e, c = (0, o.cf)([g.A, m.A], () => null == i ? g.A.getAllPending() : m.A.getAllPending()), {
      product: p,
      purchase: x
    } = (0, d.A)(null == a ? true : a.skuId), A = h.Ay.canUseCollectibles(r), f = (0, u.gA)(x), O = null == x || !A && f;
    return (0, l.jsxs)("div", {
      className: s()(v.i1, {
        [v.Zj]: null != a && O
      }),
      children: [(0, l.jsx)("div", {
        className: v.u_,
        role: "img",
        "aria-label": j.intl.string(j.t.SZeUdR),
        children: (0, l.jsxs)("div", {
          className: v.Xp,
          "aria-hidden": true,
          children: [(0, l.jsx)(_._, {
            width: 124,
            opacity: .9
          }), (0, l.jsx)(_._, {
            width: 124,
            opacity: .9
          }), (0, l.jsx)(y.A, (t = function(e) {
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
            nameplate: a,
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
          }), t)), (0, l.jsx)(_._, {
            width: 124,
            opacity: .9
          }), (0, l.jsx)(_._, {
            width: 124,
            opacity: .9
          })]
        })
      }), null != a && (0, l.jsx)(b, {
        purchase: x,
        product: p,
        user: r
      })]
    })
  }