/** Chunk was on web.js **/
/** chunk id: 796780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => K
}), require("./228524.js"), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk172218 = require("./172218.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk987144 = require("./987144.jsx"),
  Chunk12711 = require("./12711.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk975571 = require("./975571.js"),
  Chunk942975 = require("./942975.js"),
  Chunk645619 = require("./645619.js"),
  Chunk990208 = require("./990208.js"),
  Chunk363487 = require("./363487.js"),
  Chunk263215 = require("./263215.js"),
  Chunk998418 = require("./998418.js"),
  Chunk828162 = require("./828162.js"),
  Chunk800007 = require("./800007.js"),
  Chunk88001 = require("./88001.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk213378 = require("./213378.js"),
  Chunk329431 = require("./329431.js");

function j(e, t, n) {
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
      j(e, t, n[t])
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

function F(e) {
  let {
    guildId: t,
    activeStatus: n,
    title: a,
    description: c,
    cost: y,
    costDecorator: b,
    imageUrl: O,
    skuId: v,
    isNew: I,
    onClose: S,
    onHover: C
  } = e, {
    analyticsLocations: j
  } = (0, _.Ay)(), U = n !== w.b_.INACTIVE, F = (0, A.A)(t), V = (0, u.bG)([E.default], () => E.default.getCurrentUser()), [B, H] = i.useState(false), [Y, W] = i.useState(false), K = Y, z = i.useCallback(() => {
    let e = g.A.getGuild(t);
    null != e && (0, h.g)({
      analyticsLocation: {
        page: R.liQ.GUILD_POWERUPS_MARKETING,
        section: R.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: j,
      guild: e
    })
  }, [t, j]), q = i.useCallback(() => {
    S(), (0, T.A)(t, p.A.GUILD_POWERUPS_MARKETING, v)
  }, [t, v, S]), Z = {
    tension: 400,
    friction: 30
  }, Q = (0, f.zhh)({
    transform: K ? "translateX(-50%) translateY(16px) scale(1)" : "translateX(-50%) translateY(24px) scale(1.40)",
    borderRadius: "0px",
    transformOrigin: "center 0%",
    config: Z
  }), X = (0, f.zhh)({
    y: K ? false : 0,
    config: Z
  }), J = (0, f.zhh)({
    opacity: +!!K,
    transform: K ? "translateY(0)" : "translateY(20px)",
    config: Z
  }), $ = i.useCallback(e => {
    e && H(true)
  }, []), ee = (0, l.K)($);
  return (0, r.jsxs)("div", {
    className: o()(M.p3, M.sc, x.zL, {
      [M.i0]: B
    }),
    onMouseEnter: () => {
      W(true), null == C || C(true)
    },
    onMouseLeave: () => {
      W(false), null == C || C(false)
    },
    children: [(0, r.jsx)("div", {
      className: M.sL,
      ref: ee
    }), (0, r.jsx)("div", {
      className: M.BL,
      children: (0, r.jsx)(s.animated.img, {
        className: o()(M.e_, x.Sl),
        src: O,
        alt: "",
        style: Q
      })
    }), (0, r.jsxs)(s.animated.div, {
      style: G(k({}, X), {
        transform: X.y.to(e => "translateY(".concat(e, "px)"))
      }),
      className: o()(M.hQ, x.hQ),
      children: [(0, r.jsx)(m.xp, {
        heading: a,
        description: c,
        label: L.intl.formatToPlainString(D.default.QOacIS, {
          quantity: y,
          decorator: null != b ? b : ""
        }),
        isEnabled: U
      }), (0, r.jsxs)(s.animated.div, {
        style: J,
        className: M.NC,
        children: [(0, r.jsx)(d.m, {
          text: L.intl.formatToPlainString(P.default["5xN/C1"], {
            premiumGroupProductName: (0, N.DP)()
          }),
          shouldShow: (null == V ? true : V.isPremiumGroupMember()) === true,
          children: (0, r.jsx)("div", {
            className: M.x6,
            children: (0, r.jsx)(f.Button, {
              variant: "primary",
              text: L.intl.string(L.t.oPAx73),
              onClick: z,
              disabled: null == V ? true : V.isPremiumGroupMember(),
              fullWidth: true
            })
          })
        }), F && (0, r.jsx)("div", {
          className: M.x6,
          children: (0, r.jsx)(f.Button, {
            variant: "secondary",
            text: L.intl.string(L.t.GoCQxU),
            onClick: q,
            fullWidth: true
          })
        })]
      })]
    }), I && (0, r.jsx)(f.LpS, {
      className: M.zG,
      text: L.intl.string(L.t.y2b7CA)
    }), B && (0, r.jsx)("div", {
      className: M.Q4
    })]
  })
}

function V(e) {
  let {
    guildId: t,
    powerup: n,
    costDecorator: a,
    isNew: o,
    onClose: s
  } = e, [l, c] = i.useState(false), u = (0, S.Ay)(t, n).type, d = (0, v.A)(n, l);
  return (0, r.jsx)(F, {
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
  H = new Set([Chunk800007.W5]),
  Y = new Map([
    [Chunk800007.W5, "+"]
  ]),
  W = Chunk64700.forwardRef((e, t) => {
    let {
      guild: n,
      onClose: a
    } = e;
    i.useEffect(() => {
      O.A.shouldFetchCatalogForGuild(n.id) && (0, b.AK)(n.id), O.A.shouldFetchPowerupsForGuild(n.id) && (0, b.Xd)(n.id)
    }, [n.id]);
    let o = (0, I.A)(n.id),
      s = Array.from(null != o ? o : []).reverse().slice(0, B);
    return 0 === s.length ? null : (0, r.jsxs)("div", {
      ref: t,
      className: x.kL,
      children: [(0, r.jsx)(c.DZT, {
        variant: "heading-xxl/extrabold",
        children: L.intl.string(D.default.wjI18Q)
      }), (0, r.jsx)(c.EYj, {
        variant: "text-lg/medium",
        children: L.intl.format(D.default.OdCzjA, {
          helpDeskArticle: y.A.getArticleURL(R.MVz.GUILD_BOOSTING_FAQ)
        })
      }), (0, r.jsx)("div", {
        className: x.DO,
        children: s.map(e => (0, r.jsx)(V, {
          guildId: n.id,
          powerup: e,
          costDecorator: Y.get(e.skuId),
          isNew: H.has(e.skuId),
          onClose: a
        }, "guild-powerup-marketing-".concat(e.skuId)))
      })]
    })
  });
W.displayName = "GuildPowerupsMarketingPowerupCards";
let K = W