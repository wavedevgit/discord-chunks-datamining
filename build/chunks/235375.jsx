/** Chunk was on web.js **/
/** chunk id: 235375, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  baseRules: () => A,
  customRules: () => N
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  l = require.n(Chunk159635),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk230711 = require("./230711.js"),
  Chunk454585 = require("./454585.js"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk596401 = require("./596401.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = l().defaultRules.link,
  v = {
    section: Chunk981631.jXE.SETTINGS_CHANGELOG
  };

function I() {
  Chunk626135.default.track(Chunk981631.rMx.PREMIUM_PROMOTION_OPENED, {
    location: v
  })
}

function T(e, t) {
  return null == t ? [] : t.split(" ").map(t => e[t])
}
let S = e => {
    let {
      level: t,
      children: n,
      className: r = null,
      styleSheet: o = {}
    } = e, s = (0, c.xSt)(), l = parseInt(t, 10), u = s + (isNaN(l) ? 1 : l) - 1;
    return i.createElement("h".concat(u), {
      className: a()(...T(o, r))
    }, n)
  },
  A = null != Chunk454585.Z ? Chunk454585.Z.defaultRules : null,
  N = {
    link: {
      parse(e, t, n) {
        let r, i = e[2],
          o = i.startsWith("https://discordapp.com/nitro") || i.startsWith("https://discord.com/nitro"),
          a = i.startsWith("https://discordapp.com/hypesquad") || i.startsWith("https://discord.com/hypesquad"),
          s = i.startsWith("/shop/fullscreen?source=1") || i.startsWith("/activities");
        return r = o || a ? e => {
          I(), o ? d.Z.open(h.oAB.PREMIUM) : a && d.Z.open(h.oAB.HYPESQUAD_ONLINE), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
            cta_type: "nitro"
          }), (0, c.Mr3)(m.Xd), e.preventDefault()
        } : s ? e => {
          (0, _.uL)(i), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, E({}, p.default.getCampaignParams(i))), (0, u.Ou)(), (0, c.Mr3)(m.Xd), e.preventDefault()
        } : () => {
          n && "function" == typeof n.onLinkClick && n.onLinkClick(i), n.changeLog.track(h.rMx.CHANGE_LOG_CTA_CLICKED, E({
            target: i,
            cta_type: "inline_link"
          }, p.default.getCampaignParams(i)))
        }, y(E({}, O.parse(e, t, n)), {
          callToAction: r
        })
      },
      react: (e, t, n) => <c.eee href={l().sanitizeUrl(e.target)} title={e.title} onClick={e.callToAction} target={"_blank"} className={e.callToAction ? "cta" : true}>{t(e.content, n)}</c.eee>
    },
    lheading: e => ({
      react: (t, n, i) => <S level={t.level} className={t.className} styleSheet={e}>{n(t.content, i)}</S>
    }),
    heading: {
      react: (e, t, n) => <S level={e.level}>{t(e.content, n)}</S>
    },
    image: {
      react(e, t, i) {
        let o = n(595173)("./".concat(e.target));
        return <img alt={e.alt} src={o} />
      }
    },
    blockQuote: {
      react: null == A ? true : A.blockQuote.react
    },
    paragraph: {
      react: (e, t, n) => <p>{t(e.content, n)}</p>
    }
  }