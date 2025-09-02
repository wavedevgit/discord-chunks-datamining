/** Chunk was on web.js **/
/** chunk id: 302175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk261616 = require("./261616.js"),
  Chunk831209 = require("./831209.js"),
  Chunk494497 = require("./494497.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
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
  Chunk989308 = require("./989308.js"),
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

function j(e) {
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

function U(e) {
  let {
    guildId: t,
    powerup: n,
    onClose: a
  } = e, {
    analyticsLocations: u
  } = (0, h.ZP)(), b = (0, v.g1)(t, "GuildPowerupMarketingPowerupCard"), y = n.skuId === c.A$, O = (0, A.ZP)(t, n).type !== N.A3.INACTIVE, T = (0, S.Z)(t), [L, M] = i.useState(false), [U, G] = i.useState(false), B = U, Z = i.useCallback(() => {
    let e = E.Z.getGuild(t);
    null != e && (0, m.u)({
      analyticsLocation: {
        page: R.ZY5.GUILD_POWERUPS_MARKETING,
        section: R.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: u,
      guild: e
    })
  }, [t, u]), F = i.useCallback(() => {
    a(), (0, C.Z)(t, p.Z.GUILD_POWERUPS_MARKETING, n.skuId)
  }, [t, n.skuId, a]), V = {
    tension: 400,
    friction: 30
  }, H = (0, f.q_F)({
    transform: B ? "translateX(-50%) translateY(16px) scale(1)" : "translateX(-50%) translateY(24px) scale(1.40)",
    borderRadius: "0px",
    transformOrigin: "center 0%",
    config: V
  }), Y = (0, f.q_F)({
    y: B ? false : 0,
    config: V
  }), W = (0, f.q_F)({
    opacity: +!!B,
    transform: B ? "translateY(0)" : "translateY(20px)",
    config: V
  }), K = i.useCallback(e => {
    e && M(true)
  }, []), z = (0, _.O)(K), q = (0, I.Z)(n, U);
  return (0, r.jsxs)("div", {
    className: o()(x.topPerksCard, x.animatedTopPerksCard, D.powerupCard, {
      [x.animate]: L
    }),
    onMouseEnter: () => G(true),
    onMouseLeave: () => G(false),
    children: [(0, r.jsx)("div", {
      className: x.intObserver,
      ref: z
    }), (0, r.jsx)("div", {
      className: x.topPerksCardImageWrapper,
      children: (0, r.jsx)(s.animated.img, {
        className: o()(x.topPerksCardImage, D.image),
        src: q,
        alt: "",
        style: H
      })
    }), (0, r.jsxs)(s.animated.div, {
      style: k(j({}, Y), {
        transform: Y.y.to(e => "translateY(".concat(e, "px)"))
      }),
      className: o()(x.contentContainer, D.contentContainer),
      children: [(0, r.jsx)(g.xm, {
        heading: n.title,
        description: n.description,
        label: w.intl.formatToPlainString(P.default.QOacIS, {
          quantity: n.cost
        }),
        isEnabled: O
      }), (0, r.jsxs)(s.animated.div, {
        style: W,
        className: x.buttonsContainer,
        children: [(0, r.jsx)(d.zx, {
          grow: true,
          onClick: Z,
          color: d.zx.Colors.BRAND,
          className: x.button,
          children: w.intl.string(w.t["oPAx7+"])
        }), T && (0, r.jsx)(d.zx, {
          grow: true,
          onClick: F,
          color: d.zx.Colors.PRIMARY,
          className: x.button,
          children: w.intl.string(w.t.GoCQxc)
        })]
      })]
    }), !b && !y && (0, r.jsx)(f.IGR, {
      className: x.topPerksCardNew,
      text: w.intl.string(w.t.y2b7CA)
    }), y && (0, r.jsx)(f.IGR, {
      className: x.topPerksCardNew,
      text: w.intl.string(w.t.oW0eUV),
      color: l.Z.BG_BRAND
    }), L && (0, r.jsx)("div", {
      className: x.shineLine
    })]
  })
}
let G = 3,
  B = Chunk647438.forwardRef((e, t) => {
    let {
      guild: n,
      onClose: a
    } = e;
    i.useEffect(() => {
      O.Z.shouldFetchCatalogForGuild(n.id) && (0, y.Sn)(n.id), O.Z.shouldFetchPowerupsForGuild(n.id) && (0, y.Fm)(n.id)
    }, [n.id]);
    let o = (0, T.Z)(n.id),
      s = (null != o ? o : []).slice(0, G);
    return 0 === s.length ? null : (0, r.jsxs)("div", {
      ref: t,
      className: D.container,
      children: [(0, r.jsx)(u.X6, {
        variant: "heading-xxl/extrabold",
        children: w.intl.string(P.default.wjI18f)
      }), (0, r.jsx)(u.xv, {
        variant: "text-lg/medium",
        children: w.intl.format(P.default.S562fn, {
          helpDeskArticle: b.Z.getArticleURL(R.BhN.GUILD_BOOSTING_FAQ)
        })
      }), (0, r.jsx)("div", {
        className: D.powerupsContainer,
        children: s.map(e => (0, r.jsx)(U, {
          guildId: n.id,
          powerup: e,
          onClose: a
        }, "guild-powerup-marketing-".concat(e.skuId)))
      })]
    })
  });
B.displayName = "GuildPowerupsMarketingPowerupCards";
let Z = B