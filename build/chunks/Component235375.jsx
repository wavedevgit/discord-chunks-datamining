/** Chunk was on web.js **/
/** chunk id: 235375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  baseRules: () => C,
  customRules: () => N
}), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  l = require.n(Chunk159635),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk454585 = require("./454585.js"),
  Chunk703656 = require("./703656.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk596401 = require("./596401.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = l().defaultRules.link,
  I = {
    section: Chunk981631.jXE.SETTINGS_CHANGELOG
  };

function T() {
  Chunk626135.default.track(Chunk981631.rMx.PREMIUM_PROMOTION_OPENED, {
    location: I
  })
}

function S(e, t) {
  return null == t ? [] : t.split(" ").map(t => e[t])
}
let A = e => {
    let {
      level: t,
      children: n,
      className: r = null,
      styleSheet: a = {}
    } = e, s = (0, c.xSt)(), l = parseInt(t, 10), u = s + (isNaN(l) ? 1 : l) - 1;
    return i.createElement("h".concat(u), {
      className: o()(...S(a, r))
    }, n)
  },
  C = null != Chunk454585.Z ? Chunk454585.Z.defaultRules : null,
  N = {
    link: {
      parse(e, t, n) {
        let r, i = e[2],
          a = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
          o = i.startsWith("/activities");
        return r = a ? e => {
          T(), (0, p.openUserSettings)(_.n.NITRO_PANEL, {
            section: m.oAB.PREMIUM
          }), n.changeLog.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "nitro"
          }), (0, c.Mr3)(g.Xd), e.preventDefault()
        } : o ? e => {
          (0, f.uL)(i), n.changeLog.track(m.rMx.CHANGE_LOG_CTA_CLICKED, b({}, h.default.getCampaignParams(i))), (0, u.Ou)(), (0, c.Mr3)(g.Xd), e.preventDefault()
        } : () => {
          n && "function" == typeof n.onLinkClick && n.onLinkClick(i), n.changeLog.track(m.rMx.CHANGE_LOG_CTA_CLICKED, b({
            target: i,
            cta_type: "inline_link"
          }, h.default.getCampaignParams(i)))
        }, O(b({}, v.parse(e, t, n)), {
          callToAction: r
        })
      },
      react: (e, t, n) => (0, r.jsx)(c.Anchor, {
        href: l().sanitizeUrl(e.target),
        title: e.title,
        onClick: e.callToAction,
        target: "_blank",
        className: e.callToAction ? "cta" : true,
        children: t(e.content, n)
      }, n.key)
    },
    lheading: e => ({
      react: (t, n, i) => (0, r.jsx)(A, {
        level: t.level,
        className: t.className,
        styleSheet: e,
        children: n(t.content, i)
      }, i.key)
    }),
    heading: {
      react: (e, t, n) => (0, r.jsx)(A, {
        level: e.level,
        children: t(e.content, n)
      }, n.key)
    },
    image: {
      react(e, t, i) {
        let a = n(595173)("./".concat(e.target));
        return (0, r.jsx)("img", {
          alt: e.alt,
          src: a
        }, i.key)
      }
    },
    blockQuote: {
      react: null == C ? true : C.blockQuote.react
    },
    paragraph: {
      react: (e, t, n) => (0, r.jsx)("p", {
        children: t(e.content, n)
      }, n.key)
    }
  }