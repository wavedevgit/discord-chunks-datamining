/** Chunk was on web.js **/
/** chunk id: 302175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk831209 = require("./831209.js"),
  Chunk494497 = require("./494497.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk973772 = require("./973772.js"),
  Chunk441536 = require("./441536.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk765179 = require("./765179.js"),
  Chunk630564 = require("./630564.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
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

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function U(e) {
  let {
    guildId: t,
    powerup: n,
    onClose: o
  } = e, {
    analyticsLocations: u
  } = (0, m.ZP)(), d = (0, I.g1)(t, "GuildPowerupMarketingPowerupCard"), y = n.skuId === c.A$, O = (0, A.ZP)(t, n).type !== C.A3.INACTIVE, v = (0, S.Z)(t), [x, j] = i.useState(false), [U, G] = i.useState(false), B = U, Z = i.useCallback(() => {
    let e = b.Z.getGuild(t);
    null != e && (0, g.u)({
      analyticsLocation: {
        page: R.ZY5.GUILD_POWERUPS_MARKETING,
        section: R.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: u,
      guild: e
    })
  }, [t, u]), F = i.useCallback(() => {
    o(), (0, N.Z)(t, h.Z.GUILD_POWERUPS_MARKETING, n.skuId)
  }, [t, n.skuId, o]), V = {
    tension: 400,
    friction: 30
  }, H = (0, _.q_F)({
    transform: B ? "translateX(-50%) translateY(16px) scale(1)" : "translateX(-50%) translateY(24px) scale(1.40)",
    borderRadius: "0px",
    transformOrigin: "center 0%",
    config: V
  }), Y = (0, _.q_F)({
    y: B ? false : 0,
    config: V
  }), W = (0, _.q_F)({
    opacity: +!!B,
    transform: B ? "translateY(0)" : "translateY(20px)",
    config: V
  }), K = i.useCallback(e => {
    e && j(true)
  }, []), z = (0, p.O)(K), q = (0, T.Z)(n, U);
  return (0, r.jsxs)("div", {
    className: a()(L.topPerksCard, L.animatedTopPerksCard, D.powerupCard, {
      [L.animate]: x
    }),
    onMouseEnter: () => G(true),
    onMouseLeave: () => G(false),
    children: [(0, r.jsx)("div", {
      className: L.intObserver,
      ref: z
    }), (0, r.jsx)("div", {
      className: L.topPerksCardImageWrapper,
      children: (0, r.jsx)(s.animated.img, {
        className: a()(L.topPerksCardImage, D.image),
        src: q,
        alt: "",
        style: H
      })
    }), (0, r.jsxs)(s.animated.div, {
      style: k(M({}, Y), {
        transform: Y.y.to(e => "translateY(".concat(e, "px)"))
      }),
      className: a()(L.contentContainer, D.contentContainer),
      children: [(0, r.jsx)(E.xm, {
        heading: n.title,
        description: n.description,
        label: w.intl.formatToPlainString(P.default.QOacIS, {
          quantity: n.cost
        }),
        isEnabled: O
      }), (0, r.jsxs)(s.animated.div, {
        style: W,
        className: L.buttonsContainer,
        children: [(0, r.jsx)(f.zx, {
          grow: true,
          onClick: Z,
          color: f.zx.Colors.BRAND,
          className: L.button,
          children: w.intl.string(w.t["oPAx7+"])
        }), v && (0, r.jsx)(f.zx, {
          grow: true,
          onClick: F,
          color: f.zx.Colors.PRIMARY,
          className: L.button,
          children: w.intl.string(w.t.GoCQxc)
        })]
      })]
    }), !d && !y && (0, r.jsx)(_.IGR, {
      className: L.topPerksCardNew,
      text: w.intl.string(w.t.y2b7CA)
    }), y && (0, r.jsx)(_.IGR, {
      className: L.topPerksCardNew,
      text: w.intl.string(w.t.oW0eUV),
      color: l.Z.BG_BRAND
    }), x && (0, r.jsx)("div", {
      className: L.shineLine
    })]
  })
}
let G = Chunk73800.forwardRef((e, t) => {
  var n, o;
  let {
    guild: a,
    onClose: s
  } = e;
  i.useEffect(() => {
    v.Z.shouldFetchCatalogForGuild(a.id) && (0, O.Sn)(a.id), v.Z.shouldFetchPowerupsForGuild(a.id) && (0, O.Fm)(a.id)
  }, [a.id]);
  let l = (0, d.e7)([v.Z], () => v.Z.getStateForGuild(a.id)),
    c = (null != (o = null == l || null == (n = l.powerupCatalog) ? true : n[C.Us.PERK]) ? o : []).slice(0, 3);
  return 0 === c.length ? null : (0, r.jsxs)("div", {
    ref: t,
    className: D.container,
    children: [(0, r.jsx)(u.X6, {
      variant: "heading-xxl/extrabold",
      children: w.intl.string(P.default.wjI18f)
    }), (0, r.jsx)(u.xv, {
      variant: "text-lg/medium",
      children: w.intl.format(P.default.S562fn, {
        helpDeskArticle: y.Z.getArticleURL(R.BhN.GUILD_BOOSTING_FAQ)
      })
    }), (0, r.jsx)("div", {
      className: D.powerupsContainer,
      children: c.map(e => (0, r.jsx)(U, {
        guildId: a.id,
        powerup: e,
        onClose: s
      }, "guild-powerup-marketing-".concat(e.skuId)))
    })]
  })
});
G.displayName = "GuildPowerupsMarketingPowerupCards";
let B = G