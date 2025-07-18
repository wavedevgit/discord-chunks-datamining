/** Chunk was on 87048 **/
"use strict";
n.r(t), n.d(t, {
  baseRules: () => x,
  customRules: () => k
}), n(35282), n(388685);
var r = n(255367),
  o = n(73800),
  i = n(120356),
  a = n.n(i),
  l = n(159635),
  s = n.n(l),
  c = n(481060),
  d = n(37234),
  u = n(230711),
  p = n(454585),
  m = n(703656),
  b = n(626135),
  _ = n(981631),
  g = n(596401);

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let f = s().defaultRules.link,
  y = {
    section: _.jXE.SETTINGS_CHANGELOG
  },
  O = e => {
    let {
      level: t,
      children: n,
      className: r = null,
      styleSheet: i = {}
    } = e, l = (0, c.xSt)(), s = parseInt(t, 10), d = isNaN(s) ? 1 : s;
    return o.createElement("h".concat(l + d - 1), {
      className: a()(...null == r ? [] : r.split(" ").map(e => i[e]))
    }, n)
  },
  x = null != p.Z ? p.Z.defaultRules : null,
  k = {
    link: {
      parse(e, t, n) {
        var r, o;
        let i, a = e[2],
          l = a.startsWith("https://discordapp.com/nitro") || a.startsWith("https://discord.com/nitro"),
          s = a.startsWith("https://discordapp.com/hypesquad") || a.startsWith("https://discord.com/hypesquad"),
          p = a.startsWith("/shop/fullscreen?source=1") || a.startsWith("/activities");
        return i = l || s ? e => {
          b.default.track(_.rMx.PREMIUM_PROMOTION_OPENED, {
            location: y
          }), l ? u.Z.open(_.oAB.PREMIUM) : s && u.Z.open(_.oAB.HYPESQUAD_ONLINE), n.changeLog.track(_.rMx.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "nitro"
          }), (0, c.Mr3)(g.Xd), e.preventDefault()
        } : p ? e => {
          (0, m.uL)(a), n.changeLog.track(_.rMx.CHANGE_LOG_CTA_CLICKED, h({}, b.default.getCampaignParams(a))), (0, d.Ou)(), (0, c.Mr3)(g.Xd), e.preventDefault()
        } : () => {
          n && "function" == typeof n.onLinkClick && n.onLinkClick(a), n.changeLog.track(_.rMx.CHANGE_LOG_CTA_CLICKED, h({
            target: a,
            cta_type: "inline_link"
          }, b.default.getCampaignParams(a)))
        }, r = h({}, f.parse(e, t, n)), o = o = {
          callToAction: i
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
        }), r
      },
      react: (e, t, n) => (0, r.jsx)(c.eee, {
        href: s().sanitizeUrl(e.target),
        title: e.title,
        onClick: e.callToAction,
        target: "_blank",
        className: e.callToAction ? "cta" : void 0,
        children: t(e.content, n)
      }, n.key)
    },
    lheading: e => ({
      react: (t, n, o) => (0, r.jsx)(O, {
        level: t.level,
        className: t.className,
        styleSheet: e,
        children: n(t.content, o)
      }, o.key)
    }),
    heading: {
      react: (e, t, n) => (0, r.jsx)(O, {
        level: e.level,
        children: t(e.content, n)
      }, n.key)
    },
    image: {
      react(e, t, o) {
        let i = n(595173)("./".concat(e.target));
        return (0, r.jsx)("img", {
          alt: e.alt,
          src: i
        }, o.key)
      }
    },
    blockQuote: {
      react: null == x ? void 0 : x.blockQuote.react
    },
    paragraph: {
      react: (e, t, n) => (0, r.jsx)("p", {
        children: t(e.content, n)
      }, n.key)
    }
  }