/** Chunk was on 23321 **/
/** chunk id: 35950, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => _
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
  Chunk764999 = require("./764999.js"),
  Chunk833336 = require("./833336.js"),
  Chunk773669 = require("./773669.js"),
  Chunk752319 = require("./752319.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk359701 = require("./359701.jsx"),
  Chunk550111 = require("./550111.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk514748 = require("./514748.js");
let v = e => {
    let {
      purchase: t,
      product: l,
      user: i
    } = e, d = (0, c.bG)([x.default], () => x.default.locale), p = (0, m.Tk)(t), g = (0, m.o7)(l), h = A.Ay.canUseCollectibles(i), f = (0, u.gA)(t), v = (0, u.G0)(l), _ = !h && f, [O, E] = r.useState(null);
    r.useEffect(() => {
      E((null == t ? true : t.expiresAt) != null ? (0, b.Tf)(Date.now(), t.expiresAt) : null)
    }, [null == t ? true : t.expiresAt]);
    let C = null == t || _;
    return (0, n.jsxs)("div", {
      className: s()(y.ip, {
        [y.w6]: C
      }),
      children: [(0, n.jsx)(o.Text, {
        color: "text-strong",
        variant: "text-sm/semibold",
        children: (0, a.isEmpty)(p) ? g : p
      }), C ? (0, n.jsx)(o.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: _ ? j.intl.string(j.t.nD78oa) : v && h ? j.intl.string(j.t.hmyYK8) : v ? j.intl.string(j.t.JY1i0u) : j.intl.string(j.t.fEGjVQ)
      }) : (0, n.jsxs)(n.Fragment, {
        children: [null != O && (0, n.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: j.intl.format(j.t.Io7ozn, {
            days: O.days.toString()
          })
        }), (0, n.jsxs)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: [j.intl.format(j.t.gW9R4B, {
            date: t.purchasedAt.toLocaleDateString(d, {
              month: "long",
              year: "numeric"
            })
          }), null != t.expiresAt && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("br", {}), j.intl.format(j.t.eZSTa5, {
              date: t.expiresAt.toLocaleDateString(d, {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "long",
                year: "numeric"
              })
            })]
          })]
        }), f && (0, n.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: j.intl.string(j.t.nKdAlO)
        })]
      })]
    })
  },
  _ = e => {
    var t, l;
    let {
      user: r,
      guildId: i,
      nameplate: a
    } = e, o = (0, c.cf)([g.A, p.A], () => null == i ? g.A.getAllPending() : p.A.getAllPending()), {
      product: m,
      purchase: x
    } = (0, d.A)(null == a ? true : a.skuId), b = A.Ay.canUseCollectibles(r), _ = (0, u.gA)(x), O = null == x || !b && _;
    return (0, n.jsxs)("div", {
      className: s()(y.i1, {
        [y.Zj]: null != a && O
      }),
      children: [(0, n.jsx)("div", {
        className: y.u_,
        role: "img",
        "aria-label": j.intl.string(j.t.SZeUdR),
        children: (0, n.jsxs)("div", {
          className: y.Xp,
          "aria-hidden": true,
          children: [(0, n.jsx)(h._, {
            width: 124,
            opacity: .9
          }), (0, n.jsx)(h._, {
            width: 124,
            opacity: .9
          }), (0, n.jsx)(f.A, (t = function(e) {
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
          }({}, o), l = l = {
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
          }), t)), (0, n.jsx)(h._, {
            width: 124,
            opacity: .9
          }), (0, n.jsx)(h._, {
            width: 124,
            opacity: .9
          })]
        })
      }), null != a && (0, n.jsx)(v, {
        purchase: x,
        product: m,
        user: r
      })]
    })
  }