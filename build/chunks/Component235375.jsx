/** Chunk was on 31978 **/
/** chunk id: 235375, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  baseRules: () => j,
  customRules: () => P
}), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  s = require.n(Chunk159635),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk230711 = require("./230711.js"),
  Chunk454585 = require("./454585.js"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk596401 = require("./596401.js");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let y = s().defaultRules.link,
  O = {
    section: Chunk981631.jXE.SETTINGS_CHANGELOG
  },
  v = e => {
    let {
      level: t,
      children: n,
      className: r = null,
      styleSheet: o = {}
    } = e, a = (0, c.xSt)(), s = parseInt(t, 10), u = isNaN(s) ? 1 : s;
    return l.createElement("h".concat(a + u - 1), {
      className: i()(...null == r ? [] : r.split(" ").map(e => o[e]))
    }, n)
  },
  j = null != Chunk454585.Z ? Chunk454585.Z.defaultRules : null,
  P = {
    link: {
      parse(e, t, n) {
        var r, l;
        let o, i = e[2],
          a = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
          s = i.startsWith("https://discordapp.com/hypesquad") || i.startsWith("https://discord.com/hypesquad"),
          p = i.startsWith("/shop/fullscreen?source=1") || i.startsWith("/activities");
        return o = a || s ? e => {
          g.default.track(f.rMx.PREMIUM_PROMOTION_OPENED, {
            location: O
          }), a ? d.Z.open(f.oAB.PREMIUM) : s && d.Z.open(f.oAB.HYPESQUAD_ONLINE), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "nitro"
          }), (0, c.Mr3)(b.Xd), e.preventDefault()
        } : p ? e => {
          (0, m.uL)(i), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, h({}, g.default.getCampaignParams(i))), (0, u.Ou)(), (0, c.Mr3)(b.Xd), e.preventDefault()
        } : () => {
          n && "function" == typeof n.onLinkClick && n.onLinkClick(i), n.changeLog.track(f.rMx.CHANGE_LOG_CTA_CLICKED, h({
            target: i,
            cta_type: "inline_link"
          }, g.default.getCampaignParams(i)))
        }, r = h({}, y.parse(e, t, n)), l = l = {
          callToAction: o
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
        }), r
      },
      react: (e, t, n) => (0, r.jsx)(c.eee, {
        href: s().sanitizeUrl(e.target),
        title: e.title,
        onClick: e.callToAction,
        target: "_blank",
        className: e.callToAction ? "cta" : true,
        children: t(e.content, n)
      }, n.key)
    },
    lheading: e => ({
      react: (t, n, l) => (0, r.jsx)(v, {
        level: t.level,
        className: t.className,
        styleSheet: e,
        children: n(t.content, l)
      }, l.key)
    }),
    heading: {
      react: (e, t, n) => (0, r.jsx)(v, {
        level: e.level,
        children: t(e.content, n)
      }, n.key)
    },
    image: {
      react(e, t, l) {
        let o = n(595173)("./".concat(e.target));
        return (0, r.jsx)("img", {
          alt: e.alt,
          src: o
        }, l.key)
      }
    },
    blockQuote: {
      react: null == j ? true : j.blockQuote.react
    },
    paragraph: {
      react: (e, t, n) => (0, r.jsx)("p", {
        children: t(e.content, n)
      }, n.key)
    }
  }