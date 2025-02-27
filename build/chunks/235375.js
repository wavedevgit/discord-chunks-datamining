/** Chunk was on 69197 **/
"use strict";
r.r(t), r.d(t, {
  baseRules: () => k,
  customRules: () => O
}), r(301563), r(47120);
var n = r(200651),
  o = r(192379),
  i = r(120356),
  a = r.n(i),
  s = r(477660),
  l = r.n(s),
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
  x = {
    section: b.jXE.SETTINGS_CHANGELOG
  },
  y = e => {
    let {
      level: t,
      children: r,
      className: n = null,
      styleSheet: i = {}
    } = e, s = (0, c.xSt)(), l = parseInt(t, 10), d = isNaN(l) ? 1 : l;
    return o.createElement("h".concat(s + d - 1), {
      className: a()(...null == n ? [] : n.split(" ").map(e => i[e]))
    }, r)
  },
  k = null != p.Z ? p.Z.defaultRules : null,
  O = {
    link: {
      parse(e, t, r) {
        var n, o;
        let i;
        let a = e[2],
          s = a.startsWith("https://discordapp.com/nitro") || a.startsWith("https://discord.com/nitro"),
          l = a.startsWith("https://discordapp.com/hypesquad") || a.startsWith("https://discord.com/hypesquad"),
          p = a.startsWith("/shop/fullscreen?source=1") || a.startsWith("/activities");
        return i = s || l ? e => {
          _.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, {
            location: x
          }), s ? u.Z.open(b.oAB.PREMIUM) : l && u.Z.open(b.oAB.HYPESQUAD_ONLINE), r.changeLog.track(b.rMx.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "nitro"
          }), (0, c.Mr3)(h.Xd), e.preventDefault()
        } : p ? e => {
          (0, m.uL)(a), r.changeLog.track(b.rMx.CHANGE_LOG_CTA_CLICKED, g({}, _.default.getCampaignParams(a))), (0, d.Ou)(), (0, c.Mr3)(h.Xd), e.preventDefault()
        } : () => {
          r && "function" == typeof r.onLinkClick && r.onLinkClick(a), r.changeLog.track(b.rMx.CHANGE_LOG_CTA_CLICKED, g({
            target: a,
            cta_type: "inline_link"
          }, _.default.getCampaignParams(a)))
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
      react: (t, r, o) => (0, n.jsx)(y, {
        level: t.level,
        className: t.className,
        styleSheet: e,
        children: r(t.content, o)
      }, o.key)
    }),
    heading: {
      react: (e, t, r) => (0, n.jsx)(y, {
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
      react: null == k ? void 0 : k.blockQuote.react
    },
    paragraph: {
      react: (e, t, r) => (0, n.jsx)("p", {
        children: t(e.content, r)
      }, r.key)
    }
  }