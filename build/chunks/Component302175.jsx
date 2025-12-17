/** Chunk was on web.js **/
/** chunk id: 302175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => W
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk236726 = require("./236726.js"),
  Chunk907331 = require("./907331.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk245004 = require("./245004.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk713081 = require("./713081.js"),
  Chunk905128 = require("./905128.js"),
  Chunk156732 = require("./156732.js"),
  Chunk639777 = require("./639777.js"),
  Chunk70300 = require("./70300.js"),
  Chunk973772 = require("./973772.js"),
  Chunk441536 = require("./441536.js"),
  Chunk619733 = require("./619733.js"),
  Chunk282793 = require("./282793.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887143 = require("./887143.js"),
  Chunk918820 = require("./918820.js");

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

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let {
    guildId: t,
    activeStatus: n,
    title: a,
    description: c,
    cost: b,
    costDecorator: y,
    imageUrl: O,
    skuId: v,
    isNew: I,
    onClose: T,
    onHover: A
  } = e, {
    analyticsLocations: M
  } = (0, _.ZP)(), U = n !== P.A3.INACTIVE, Z = (0, S.Z)(t), F = (0, u.e7)([E.default], () => E.default.getCurrentUser()), [B, V] = i.useState(false), [H, Y] = i.useState(false), W = H, K = i.useCallback(() => {
    let e = g.Z.getGuild(t);
    null != e && (0, m.u)({
      analyticsLocation: {
        page: R.ZY5.GUILD_POWERUPS_MARKETING,
        section: R.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: M,
      guild: e
    })
  }, [t, M]), z = i.useCallback(() => {
    T(), (0, C.Z)(t, p.Z.GUILD_POWERUPS_MARKETING, v)
  }, [t, v, T]), q = {
    tension: 400,
    friction: 30
  }, Q = (0, f.q_F)({
    transform: W ? "translateX(-50%) translateY(16px) scale(1)" : "translateX(-50%) translateY(24px) scale(1.40)",
    borderRadius: "0px",
    transformOrigin: "center 0%",
    config: q
  }), X = (0, f.q_F)({
    y: W ? false : 0,
    config: q
  }), J = (0, f.q_F)({
    opacity: +!!W,
    transform: W ? "translateY(0)" : "translateY(20px)",
    config: q
  }), $ = i.useCallback(e => {
    e && V(true)
  }, []), ee = (0, l.O)($);
  return (0, r.jsxs)("div", {
    className: o()(j.topPerksCard, j.animatedTopPerksCard, L.powerupCard, {
      [j.animate]: B
    }),
    onMouseEnter: () => {
      Y(true), null == A || A(true)
    },
    onMouseLeave: () => {
      Y(false), null == A || A(false)
    },
    children: [(0, r.jsx)("div", {
      className: j.intObserver,
      ref: ee
    }), (0, r.jsx)("div", {
      className: j.topPerksCardImageWrapper,
      children: (0, r.jsx)(s.animated.img, {
        className: o()(j.topPerksCardImage, L.image),
        src: O,
        alt: "",
        style: Q
      })
    }), (0, r.jsxs)(s.animated.div, {
      style: G(k({}, X), {
        transform: X.y.to(e => "translateY(".concat(e, "px)"))
      }),
      className: o()(j.contentContainer, L.contentContainer),
      children: [(0, r.jsx)(h.xm, {
        heading: a,
        description: c,
        label: x.intl.formatToPlainString(D.default.QOacIS, {
          quantity: b,
          decorator: null != y ? y : ""
        }),
        isEnabled: U
      }), (0, r.jsxs)(s.animated.div, {
        style: J,
        className: j.buttonsContainer,
        children: [(0, r.jsx)(d.u, {
          text: x.intl.formatToPlainString(w.default["5xN/C1"], {
            premiumGroupProductName: (0, N.sO)()
          }),
          shouldShow: (null == F ? true : F.isPremiumGroupMember()) === true,
          children: (0, r.jsx)("div", {
            className: j.button,
            children: (0, r.jsx)(f.Button, {
              variant: "primary",
              text: x.intl.string(x.t.oPAx73),
              onClick: K,
              disabled: null == F ? true : F.isPremiumGroupMember(),
              fullWidth: true
            })
          })
        }), Z && (0, r.jsx)("div", {
          className: j.button,
          children: (0, r.jsx)(f.Button, {
            variant: "secondary",
            text: x.intl.string(x.t.GoCQxU),
            onClick: z,
            fullWidth: true
          })
        })]
      })]
    }), I && (0, r.jsx)(f.IGR, {
      className: j.topPerksCardNew,
      text: x.intl.string(x.t.y2b7CA)
    }), B && (0, r.jsx)("div", {
      className: j.shineLine
    })]
  })
}

function F(e) {
  let {
    guildId: t,
    powerup: n,
    costDecorator: a,
    isNew: o,
    onClose: s
  } = e, [l, c] = i.useState(false), u = (0, T.ZP)(t, n).type, d = (0, v.Z)(n, l);
  return (0, r.jsx)(Z, {
    guildId: t,
    activeStatus: u,
    title: n.title,
    description: n.description,
    cost: n.cost,
    imageUrl: d,
    skuId: n.skuId,
    costDecorator: a,
    isNew: o,
    onClose: s,
    onHover: e => c(e)
  })
}
let B = 3,
  V = new Set([Chunk619733.fj]),
  H = new Map([
    [Chunk619733.fj, "+"]
  ]),
  Y = Chunk473749.forwardRef((e, t) => {
    let {
      guild: n,
      onClose: a
    } = e;
    i.useEffect(() => {
      O.Z.shouldFetchCatalogForGuild(n.id) && (0, y.Sn)(n.id), O.Z.shouldFetchPowerupsForGuild(n.id) && (0, y.BN)(n.id)
    }, [n.id]);
    let o = (0, I.Z)(n.id),
      s = (null != o ? o : []).slice(0, B);
    return 0 === s.length ? null : (0, r.jsxs)("div", {
      ref: t,
      className: L.container,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-xxl/extrabold",
        children: x.intl.string(D.default.wjI18Q)
      }), (0, r.jsx)(c.xvT, {
        variant: "text-lg/medium",
        children: x.intl.format(D.default.S562fn, {
          helpDeskArticle: b.Z.getArticleURL(R.BhN.GUILD_BOOSTING_FAQ)
        })
      }), (0, r.jsx)("div", {
        className: L.powerupsContainer,
        children: s.map(e => (0, r.jsx)(F, {
          guildId: n.id,
          powerup: e,
          costDecorator: H.get(e.skuId),
          isNew: V.has(e.skuId),
          onClose: a
        }, "guild-powerup-marketing-".concat(e.skuId)))
      })]
    })
  });
Y.displayName = "GuildPowerupsMarketingPowerupCards";
let W = Y