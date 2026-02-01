/** Chunk was on 52199 **/
/** chunk id: 948331, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  g: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk404374 = require("./404374.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk927578 = require("./927578.js"),
  Chunk226017 = require("./226017.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk316163 = require("./316163.js"),
  Chunk7410 = require("./7410.js"),
  Chunk936037 = require("./936037.js");

function y() {
  return (0, f.A)() ? (0, n.jsx)("div", {
    className: E.do,
    children: (0, n.jsxs)("div", {
      className: E.U6,
      children: [(0, n.jsx)("img", {
        src: _,
        className: E.Sl,
        alt: ""
      }), (0, n.jsx)(o.Heading, {
        className: E.wx,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: S.intl.string(S.t.erEf2g)
      }), (0, n.jsx)(a.EYj, {
        variant: "text-md/medium",
        color: "text-muted",
        children: S.intl.string(S.t.NaRCXT)
      })]
    })
  }) : (0, n.jsxs)("div", {
    className: E.do,
    children: [(0, n.jsxs)("div", {
      className: E.U6,
      children: [(0, n.jsx)("img", {
        src: A,
        className: E.Sl,
        alt: ""
      }), (0, n.jsx)(o.Heading, {
        className: E.wx,
        variant: "heading-xl/semibold",
        color: "text-default",
        children: S.intl.string(S.t.w4DRbZ)
      }), (0, n.jsx)(a.EYj, {
        variant: "text-md/medium",
        color: "text-muted",
        children: S.intl.string(S.t.F6u3E3)
      })]
    }), (0, n.jsx)(m, {})]
  })
}

function m() {
  let e = (0, h.Dd)(g.PremiumTypes.TIER_2),
    t = l.useCallback(() => (0, o.mMO)(async () => {
      let {
        default: e
      } = await r.e("22540").then(r.bind(r, 530951));
      return t => (0, n.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        source: c.A.FOR_LATER_POPOUT
      }, t))
    }), []),
    f = S.intl.format(S.t.qXh3fo, {
      nitroTierName: e,
      onClick: t
    });
  return (0, n.jsxs)("div", {
    className: E.Zj,
    children: [(0, n.jsx)(s.NitroWheelIcon, {
      size: "md",
      color: u.k0.PREMIUM_TIER_2
    }), (0, n.jsx)(a.EYj, {
      variant: "text-xs/medium",
      color: "text-strong",
      className: E.tD,
      children: f
    }), (0, n.jsx)(d.A, {
      className: E.Oy,
      size: i.lO.TINY,
      shinyButtonClassName: E.Oy,
      subscriptionTier: g.pe.TIER_2,
      premiumModalAnalyticsLocation: {
        section: p.JJy.FOR_LATER_POPOUT_UPSELL
      }
    })]
  })
}