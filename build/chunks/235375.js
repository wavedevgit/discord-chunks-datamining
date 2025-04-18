/** Chunk was on 35726 **/
"use strict";
r.r(t), r.d(t, {
  baseRules: () => x,
  customRules: () => k
}), r(35282), r(388685);
var n = r(200651),
  o = r(192379),
  i = r(120356),
  s = r.n(i),
  a = r(477660),
  l = r.n(a),
  c = r(481060),
  d = r(37234),
  u = r(230711),
  p = r(454585),
  m = r(703656),
  _ = r(626135),
  b = r(981631),
  h = r(596401);

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}
let f = l().defaultRules.link,
  y = {
    section: b.jXE.SETTINGS_CHANGELOG
  },
  O = e => {
    let {
      level: t,
      children: r,
      className: n = null,
      styleSheet: i = {}
    } = e, a = (0, c.xSt)(), l = parseInt(t, 10), d = isNaN(l) ? 1 : l;
    return o.createElement("h".concat(a + d - 1), {
      className: s()(...null == n ? [] : n.split(" ").map(e => i[e]))
    }, r)
  },
  x = null != p.Z ? p.Z.defaultRules : null,
  k = {
    link: {
      parse(e, t, r) {
        var n, o;
        let i, s = e[2],
          a = s.startsWith("https://discordapp.com/nitro") || s.startsWith("https://discord.com/nitro"),
          l = s.startsWith("https://discordapp.com/hypesquad") || s.startsWith("https://discord.com/hypesquad"),
          p = s.startsWith("/shop/fullscreen?source=1") || s.startsWith("/activities");
        return i = a || l ? e => {
          _.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, {
            location: y
          }), a ? u.Z.open(b.oAB.PREMIUM) : l && u.Z.open(b.oAB.HYPESQUAD_ONLINE), r.changeLog.track(b.rMx.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "nitro"
          }), (0, c.Mr3)(h.Xd), e.preventDefault()
        } : p ? e => {
          (0, m.uL)(s), r.changeLog.track(b.rMx.CHANGE_LOG_CTA_CLICKED, g({}, _.default.getCampaignParams(s))), (0, d.Ou)(), (0, c.Mr3)(h.Xd), e.preventDefault()
        } : () => {
          r && "function" == typeof r.onLinkClick && r.onLinkClick(s), r.changeLog.track(b.rMx.CHANGE_LOG_CTA_CLICKED, g({
            target: s,
            cta_type: "inline_link"
          }, _.default.getCampaignParams(s)))
        }, n = g({}, f.parse(e, t, r)), o = o = {
          callToAction: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n
      },
      react: (e, t, r) => (0, n.jsx)(c.eee, {
        href: l().sanitizeUrl(e.target),
        title: e.title,
        onClick: e.callToAction,
        target: "_blank",
        className: e.callToAction ? "cta" : void 0,
        children: t(e.content, r)
      }, r.key)
    },
    lheading: e => ({
      react: (t, r, o) => (0, n.jsx)(O, {
        level: t.level,
        className: t.className,
        styleSheet: e,
        children: r(t.content, o)
      }, o.key)
    }),
    heading: {
      react: (e, t, r) => (0, n.jsx)(O, {
        level: e.level,
        children: t(e.content, r)
      }, r.key)
    },
    image: {
      react(e, t, o) {
        let i = r(595173)("./".concat(e.target));
        return (0, n.jsx)("img", {
          alt: e.alt,
          src: i
        }, o.key)
      }
    },
    blockQuote: {
      react: null == x ? void 0 : x.blockQuote.react
    },
    paragraph: {
      react: (e, t, r) => (0, n.jsx)("p", {
        children: t(e.content, r)
      }, r.key)
    }
  }