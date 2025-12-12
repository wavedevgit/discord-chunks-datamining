/** Chunk was on web.js **/
/** chunk id: 302175, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk907331 = require("./907331.js"),
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
  Chunk156732 = require("./156732.js"),
  Chunk639777 = require("./639777.js"),
  Chunk70300 = require("./70300.js"),
  Chunk973772 = require("./973772.js"),
  Chunk441536 = require("./441536.js"),
  Chunk619733 = require("./619733.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk265397 = require("./265397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk765179 = require("./765179.js"),
  Chunk630564 = require("./630564.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    guildId: t,
    activeStatus: n,
    title: o,
    description: c,
    cost: h,
    costDecorator: g,
    imageUrl: E,
    skuId: b,
    isNew: O,
    onClose: v,
    onHover: I
  } = e, {
    analyticsLocations: w
  } = (0, f.ZP)(), x = n !== T.A3.INACTIVE, j = (0, y.Z)(t), [M, k] = i.useState(false), [U, G] = i.useState(false), Z = U, F = i.useCallback(() => {
    let e = m.Z.getGuild(t);
    null != e && (0, p.u)({
      analyticsLocation: {
        page: C.ZY5.GUILD_POWERUPS_MARKETING,
        section: C.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: w,
      guild: e
    })
  }, [t, w]), B = i.useCallback(() => {
    v(), (0, S.Z)(t, d.Z.GUILD_POWERUPS_MARKETING, b)
  }, [t, b, v]), V = {
    tension: 400,
    friction: 30
  }, H = (0, u.q_F)({
    transform: Z ? "translateX(-50%) translateY(16px) scale(1)" : "translateX(-50%) translateY(24px) scale(1.40)",
    borderRadius: "0px",
    transformOrigin: "center 0%",
    config: V
  }), Y = (0, u.q_F)({
    y: Z ? false : 0,
    config: V
  }), W = (0, u.q_F)({
    opacity: +!!Z,
    transform: Z ? "translateY(0)" : "translateY(20px)",
    config: V
  }), K = i.useCallback(e => {
    e && k(true)
  }, []), z = (0, l.O)(K);
  return (0, r.jsxs)("div", {
    className: a()(R.topPerksCard, R.animatedTopPerksCard, P.powerupCard, {
      [R.animate]: M
    }),
    onMouseEnter: () => {
      G(true), null == I || I(true)
    },
    onMouseLeave: () => {
      G(false), null == I || I(false)
    },
    children: [(0, r.jsx)("div", {
      className: R.intObserver,
      ref: z
    }), (0, r.jsx)("div", {
      className: R.topPerksCardImageWrapper,
      children: (0, r.jsx)(s.animated.img, {
        className: a()(R.topPerksCardImage, P.image),
        src: E,
        alt: "",
        style: H
      })
    }), (0, r.jsxs)(s.animated.div, {
      style: L(D({}, Y), {
        transform: Y.y.to(e => "translateY(".concat(e, "px)"))
      }),
      className: a()(R.contentContainer, P.contentContainer),
      children: [(0, r.jsx)(_.xm, {
        heading: o,
        description: c,
        label: N.intl.formatToPlainString(A.default.QOacIS, {
          quantity: h,
          decorator: null != g ? g : ""
        }),
        isEnabled: x
      }), (0, r.jsxs)(s.animated.div, {
        style: W,
        className: R.buttonsContainer,
        children: [(0, r.jsx)("div", {
          className: R.button,
          children: (0, r.jsx)(u.Button, {
            variant: "primary",
            text: N.intl.string(N.t.oPAx73),
            onClick: F,
            fullWidth: true
          })
        }), j && (0, r.jsx)("div", {
          className: R.button,
          children: (0, r.jsx)(u.Button, {
            variant: "secondary",
            text: N.intl.string(N.t.GoCQxU),
            onClick: B,
            fullWidth: true
          })
        })]
      })]
    }), O && (0, r.jsx)(u.IGR, {
      className: R.topPerksCardNew,
      text: N.intl.string(N.t.y2b7CA)
    }), M && (0, r.jsx)("div", {
      className: R.shineLine
    })]
  })
}

function M(e) {
  let {
    guildId: t,
    powerup: n,
    costDecorator: o,
    isNew: a,
    onClose: s
  } = e, [l, c] = i.useState(false), u = (0, v.ZP)(t, n).type, d = (0, b.Z)(n, l);
  return (0, r.jsx)(j, {
    guildId: t,
    activeStatus: u,
    title: n.title,
    description: n.description,
    cost: n.cost,
    imageUrl: d,
    skuId: n.skuId,
    costDecorator: o,
    isNew: a,
    onClose: s,
    onHover: e => c(e)
  })
}
let k = 3,
  U = new Set([Chunk619733.fj]),
  G = new Map([
    [Chunk619733.fj, "+"]
  ]),
  Z = Chunk473749.forwardRef((e, t) => {
    let {
      guild: n,
      onClose: o
    } = e;
    i.useEffect(() => {
      E.Z.shouldFetchCatalogForGuild(n.id) && (0, g.Sn)(n.id), E.Z.shouldFetchPowerupsForGuild(n.id) && (0, g.BN)(n.id)
    }, [n.id]);
    let a = (0, O.Z)(n.id),
      s = (null != a ? a : []).slice(0, k);
    return 0 === s.length ? null : (0, r.jsxs)("div", {
      ref: t,
      className: P.container,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-xxl/extrabold",
        children: N.intl.string(A.default.wjI18Q)
      }), (0, r.jsx)(c.xvT, {
        variant: "text-lg/medium",
        children: N.intl.format(A.default.S562fn, {
          helpDeskArticle: h.Z.getArticleURL(C.BhN.GUILD_BOOSTING_FAQ)
        })
      }), (0, r.jsx)("div", {
        className: P.powerupsContainer,
        children: s.map(e => (0, r.jsx)(M, {
          guildId: n.id,
          powerup: e,
          costDecorator: G.get(e.skuId),
          isNew: U.has(e.skuId),
          onClose: o
        }, "guild-powerup-marketing-".concat(e.skuId)))
      })]
    })
  });
Z.displayName = "GuildPowerupsMarketingPowerupCards";
let F = Z