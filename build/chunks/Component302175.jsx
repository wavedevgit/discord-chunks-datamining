/** Chunk was on web.js **/
/** chunk id: 302175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk831209 = require("./831209.js"),
  Chunk907331 = require("./907331.js"),
  Chunk494497 = require("./494497.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk245004 = require("./245004.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk158638 = require("./158638.js"),
  Chunk156732 = require("./156732.js"),
  Chunk639777 = require("./639777.js"),
  Chunk70300 = require("./70300.js"),
  Chunk973772 = require("./973772.js"),
  Chunk441536 = require("./441536.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk592441 = require("./592441.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk765179 = require("./765179.js"),
  Chunk630564 = require("./630564.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    guildId: t,
    powerup: n,
    onClose: a
  } = e, {
    analyticsLocations: d
  } = (0, p.ZP)(), E = (0, O.g1)(t, "GuildPowerupMarketingPowerupCard"), b = n.skuId === u.A$, y = (0, S.ZP)(t, n).type !== C.A3.INACTIVE, T = (0, I.Z)(t), [L, M] = i.useState(false), [j, U] = i.useState(false), G = j, B = i.useCallback(() => {
    let e = g.Z.getGuild(t);
    null != e && (0, h.u)({
      analyticsLocation: {
        page: N.ZY5.GUILD_POWERUPS_MARKETING,
        section: N.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: d,
      guild: e
    })
  }, [t, d]), Z = i.useCallback(() => {
    a(), (0, A.Z)(t, _.Z.GUILD_POWERUPS_MARKETING, n.skuId)
  }, [t, n.skuId, a]), F = {
    tension: 400,
    friction: 30
  }, V = (0, f.q_F)({
    transform: G ? "translateX(-50%) translateY(16px) scale(1)" : "translateX(-50%) translateY(24px) scale(1.40)",
    borderRadius: "0px",
    transformOrigin: "center 0%",
    config: F
  }), H = (0, f.q_F)({
    y: G ? false : 0,
    config: F
  }), Y = (0, f.q_F)({
    opacity: +!!G,
    transform: G ? "translateY(0)" : "translateY(20px)",
    config: F
  }), W = i.useCallback(e => {
    e && M(true)
  }, []), K = (0, c.O)(W), z = (0, v.Z)(n, j);
  return (0, r.jsxs)("div", {
    className: o()(D.topPerksCard, D.animatedTopPerksCard, w.powerupCard, {
      [D.animate]: L
    }),
    onMouseEnter: () => U(true),
    onMouseLeave: () => U(false),
    children: [(0, r.jsx)("div", {
      className: D.intObserver,
      ref: K
    }), (0, r.jsx)("div", {
      className: D.topPerksCardImageWrapper,
      children: (0, r.jsx)(s.animated.img, {
        className: o()(D.topPerksCardImage, w.image),
        src: z,
        alt: "",
        style: V
      })
    }), (0, r.jsxs)(s.animated.div, {
      style: k(x({}, H), {
        transform: H.y.to(e => "translateY(".concat(e, "px)"))
      }),
      className: o()(D.contentContainer, w.contentContainer),
      children: [(0, r.jsx)(m.xm, {
        heading: n.title,
        description: n.description,
        label: P.intl.formatToPlainString(R.default.QOacIS, {
          quantity: n.cost
        }),
        isEnabled: y
      }), (0, r.jsxs)(s.animated.div, {
        style: Y,
        className: D.buttonsContainer,
        children: [(0, r.jsx)("div", {
          className: D.button,
          children: (0, r.jsx)(f.Button, {
            variant: "primary",
            text: P.intl.string(P.t.oPAx73),
            onClick: B,
            fullWidth: true
          })
        }), T && (0, r.jsx)("div", {
          className: D.button,
          children: (0, r.jsx)(f.Button, {
            variant: "secondary",
            text: P.intl.string(P.t.GoCQxU),
            onClick: Z,
            fullWidth: true
          })
        })]
      })]
    }), !E && !b && (0, r.jsx)(f.IGR, {
      className: D.topPerksCardNew,
      text: P.intl.string(P.t.y2b7CA)
    }), b && (0, r.jsx)(f.IGR, {
      className: D.topPerksCardNew,
      text: P.intl.string(P.t.oW0eUd),
      color: l.Z.BG_BRAND
    }), L && (0, r.jsx)("div", {
      className: D.shineLine
    })]
  })
}
let U = 3,
  G = Chunk647438.forwardRef((e, t) => {
    let {
      guild: n,
      onClose: a
    } = e;
    i.useEffect(() => {
      y.Z.shouldFetchCatalogForGuild(n.id) && (0, b.Sn)(n.id), y.Z.shouldFetchPowerupsForGuild(n.id) && (0, b.BN)(n.id)
    }, [n.id]);
    let o = (0, T.Z)(n.id),
      s = (null != o ? o : []).slice(0, U);
    return 0 === s.length ? null : (0, r.jsxs)("div", {
      ref: t,
      className: w.container,
      children: [(0, r.jsx)(d.X6q, {
        variant: "heading-xxl/extrabold",
        children: P.intl.string(R.default.wjI18Q)
      }), (0, r.jsx)(d.xvT, {
        variant: "text-lg/medium",
        children: P.intl.format(R.default.S562fn, {
          helpDeskArticle: E.Z.getArticleURL(N.BhN.GUILD_BOOSTING_FAQ)
        })
      }), (0, r.jsx)("div", {
        className: w.powerupsContainer,
        children: s.map(e => (0, r.jsx)(j, {
          guildId: n.id,
          powerup: e,
          onClose: a
        }, "guild-powerup-marketing-".concat(e.skuId)))
      })]
    })
  });
G.displayName = "GuildPowerupsMarketingPowerupCards";
let B = G