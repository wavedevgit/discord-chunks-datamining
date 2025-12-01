/** Chunk was on web.js **/
/** chunk id: 302175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
  Chunk907331 = require("./907331.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk245004 = require("./245004.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk755458 = require("./755458.js"),
  Chunk60482 = require("./60482.js"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk156732 = require("./156732.js"),
  Chunk639777 = require("./639777.js"),
  Chunk70300 = require("./70300.js"),
  Chunk973772 = require("./973772.js"),
  Chunk441536 = require("./441536.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk613275 = require("./613275.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk765179 = require("./765179.js"),
  Chunk630564 = require("./630564.js"),
  Chunk611087 = require("./611087.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  let {
    guildId: t,
    activeStatus: n,
    title: a,
    description: c,
    cost: u,
    costDecorator: g,
    imageUrl: E,
    skuId: b,
    isNew: y,
    onClose: O,
    onHover: v
  } = e, {
    analyticsLocations: T
  } = (0, _.ZP)(), S = n !== C.A3.INACTIVE, R = (0, I.Z)(t), [x, M] = i.useState(false), [j, G] = i.useState(false), B = j, Z = i.useCallback(() => {
    let e = m.Z.getGuild(t);
    null != e && (0, p.u)({
      analyticsLocation: {
        page: N.ZY5.GUILD_POWERUPS_MARKETING,
        section: N.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: T,
      guild: e
    })
  }, [t, T]), F = i.useCallback(() => {
    O(), (0, A.Z)(t, f.Z.GUILD_POWERUPS_MARKETING, b)
  }, [t, b, O]), V = {
    tension: 400,
    friction: 30
  }, H = (0, d.q_F)({
    transform: B ? "translateX(-50%) translateY(16px) scale(1)" : "translateX(-50%) translateY(24px) scale(1.40)",
    borderRadius: "0px",
    transformOrigin: "center 0%",
    config: V
  }), W = (0, d.q_F)({
    y: B ? false : 0,
    config: V
  }), Y = (0, d.q_F)({
    opacity: +!!B,
    transform: B ? "translateY(0)" : "translateY(20px)",
    config: V
  }), K = i.useCallback(e => {
    e && M(true)
  }, []), z = (0, l.O)(K);
  return (0, r.jsxs)("div", {
    className: o()(L.topPerksCard, L.animatedTopPerksCard, w.powerupCard, {
      [L.animate]: x
    }),
    onMouseEnter: () => {
      G(true), null == v || v(true)
    },
    onMouseLeave: () => {
      G(false), null == v || v(false)
    },
    children: [(0, r.jsx)("div", {
      className: L.intObserver,
      ref: z
    }), (0, r.jsx)("div", {
      className: L.topPerksCardImageWrapper,
      children: (0, r.jsx)(s.animated.img, {
        className: o()(L.topPerksCardImage, w.image),
        src: E,
        alt: "",
        style: H
      })
    }), (0, r.jsxs)(s.animated.div, {
      style: U(k({}, W), {
        transform: W.y.to(e => "translateY(".concat(e, "px)"))
      }),
      className: o()(L.contentContainer, w.contentContainer),
      children: [(0, r.jsx)(h.xm, {
        heading: a,
        description: c,
        label: D.intl.formatToPlainString(P.default.QOacIS, {
          quantity: u,
          decorator: null != g ? g : ""
        }),
        isEnabled: S
      }), (0, r.jsxs)(s.animated.div, {
        style: Y,
        className: L.buttonsContainer,
        children: [(0, r.jsx)("div", {
          className: L.button,
          children: (0, r.jsx)(d.Button, {
            variant: "primary",
            text: D.intl.string(D.t.oPAx73),
            onClick: Z,
            fullWidth: true
          })
        }), R && (0, r.jsx)("div", {
          className: L.button,
          children: (0, r.jsx)(d.Button, {
            variant: "secondary",
            text: D.intl.string(D.t.GoCQxU),
            onClick: F,
            fullWidth: true
          })
        })]
      })]
    }), y && (0, r.jsx)(d.IGR, {
      className: L.topPerksCardNew,
      text: D.intl.string(D.t.y2b7CA)
    }), x && (0, r.jsx)("div", {
      className: L.shineLine
    })]
  })
}

function B(e) {
  let {
    guildId: t,
    powerup: n,
    onClose: a
  } = e, [o, s] = i.useState(false), l = (0, S.ZP)(t, n).type, c = (0, v.Z)(n, o);
  return (0, r.jsx)(G, {
    guildId: t,
    activeStatus: l,
    title: n.title,
    description: n.description,
    cost: n.cost,
    imageUrl: c,
    skuId: n.skuId,
    onClose: a,
    onHover: e => s(e)
  })
}
let Z = 3,
  F = Chunk473749.forwardRef((e, t) => {
    let {
      guild: n,
      onClose: a
    } = e;
    i.useEffect(() => {
      O.Z.shouldFetchCatalogForGuild(n.id) && (0, y.Sn)(n.id), O.Z.shouldFetchPowerupsForGuild(n.id) && (0, y.BN)(n.id)
    }, [n.id]);
    let o = (0, E.BU)(n.id, "GuildPowerupsMarketingPowerupCards"),
      s = (0, u.e7)([b.Z], () => b.Z.getLowestGameCostForGuild(n.id)),
      l = (0, T.Z)(n.id),
      d = (null != l ? l : []).slice(0, Z);
    return 0 === d.length ? null : (0, r.jsxs)("div", {
      ref: t,
      className: w.container,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-xxl/extrabold",
        children: D.intl.string(P.default.wjI18Q)
      }), (0, r.jsx)(c.xvT, {
        variant: "text-lg/medium",
        children: D.intl.format(P.default.S562fn, {
          helpDeskArticle: g.Z.getArticleURL(N.BhN.GUILD_BOOSTING_FAQ)
        })
      }), (0, r.jsxs)("div", {
        className: w.powerupsContainer,
        children: [d.map(e => (0, r.jsx)(B, {
          guildId: n.id,
          powerup: e,
          onClose: a
        }, "guild-powerup-marketing-".concat(e.skuId))), o && d.length < Z && null != s && (0, r.jsx)(G, {
          guildId: n.id,
          activeStatus: C.A3.INACTIVE,
          title: D.intl.string(R.default["B3OfL/"]),
          description: D.intl.string(R.default.EGkJAG),
          cost: s,
          costDecorator: "+",
          imageUrl: x.Z,
          onClose: a,
          isNew: true
        })]
      })]
    })
  });
F.displayName = "GuildPowerupsMarketingPowerupCards";
let V = F