/** Chunk was on web.js **/
/** chunk id: 278115, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => V
}), require("./228524.js"), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk172218 = require("./172218.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk942975 = require("./942975.js"),
  Chunk645619 = require("./645619.js"),
  Chunk363487 = require("./363487.js"),
  Chunk263215 = require("./263215.js"),
  Chunk998418 = require("./998418.js"),
  Chunk828162 = require("./828162.js"),
  Chunk71393 = require("./71393.js"),
  Chunk975571 = require("./975571.js"),
  Chunk987144 = require("./987144.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk800007 = require("./800007.js"),
  Chunk568065 = require("./568065.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk294726 = require("./294726.js"),
  Chunk333354 = require("./333354.js"),
  Chunk826823 = require("./826823.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  let {
    guildId: t,
    activeStatus: n,
    title: a,
    description: _,
    cost: h,
    costDecorator: g,
    staticImageUrl: E,
    animatedImageUrl: O,
    powerup: I,
    isNew: N,
    onClose: R
  } = e, {
    analyticsLocations: D
  } = (0, p.Ay)(), L = n !== S.b_.INACTIVE, j = (0, m.A)(t), M = (0, c.bG)([d.A], () => d.A.useReducedMotion), [k, U] = i.useState(false), [G, V] = i.useState(false), F = G, B = G && null != O && "" !== O && !M ? O : E, H = i.useCallback(() => {
    let e = b.A.getGuild(t);
    null != e && (0, v.g)({
      analyticsLocation: {
        page: A.liQ.GUILD_POWERUPS_MARKETING,
        section: A.JJy.GUILD_POWERUPS_MARKETING_PERKS_SECTION
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: D,
      guild: e
    })
  }, [t, D]), Y = i.useCallback(() => {
    R(), (0, y.A)(t, f.A.GUILD_POWERUPS_MARKETING, I.skuId)
  }, [t, I.skuId, R]), W = {
    tension: 400,
    friction: 30
  }, K = (0, u.zhh)({
    scale: F ? .85 : 1,
    y: F ? false : 0,
    config: W
  }), z = (0, u.zhh)({
    y: F ? false : 0,
    config: W
  }), q = (0, u.zhh)({
    opacity: +!!F,
    transform: F ? "translateY(0)" : "translateY(16px)",
    config: W
  }), Z = i.useCallback(e => {
    e && U(true)
  }, []), X = (0, l.K)(Z);
  return (0, r.jsxs)("div", {
    className: s()(w.Nr, {
      [w.fM]: k
    }),
    onMouseEnter: () => V(true),
    onMouseLeave: () => V(false),
    children: [(0, r.jsx)("div", {
      className: w.sL,
      ref: X
    }), (0, r.jsx)("div", {
      className: w.kQ,
      children: (0, r.jsx)(o.animated.img, {
        className: w.bm,
        src: B,
        alt: "",
        style: {
          transform: (0, o.to)([K.scale, K.y], (e, t) => "scale(".concat(e, ") translateY(").concat(t, "px)"))
        }
      })
    }), (0, r.jsxs)(o.animated.div, {
      style: x(P({}, z), {
        transform: z.y.to(e => "translateY(".concat(e, "px)"))
      }),
      className: w.Qs,
      children: [(0, r.jsxs)("div", {
        className: w.P_,
        children: [(0, r.jsx)(u.Heading, {
          className: w.DD,
          variant: "heading-lg/semibold",
          children: a
        }), (0, r.jsx)(u.Text, {
          className: w.h_,
          variant: "text-md/medium",
          children: _
        })]
      }), (0, r.jsxs)("div", {
        className: w.jp,
        children: [(0, r.jsxs)("div", {
          className: w.qS,
          children: [(0, r.jsx)(u._Jp, {
            size: "xs",
            color: u.LU0.unsafe_rawColors.ILLO_PINK_40
          }), (0, r.jsx)(u.Text, {
            className: w.Vv,
            variant: "text-sm/semibold",
            children: T.intl.formatToPlainString(null != g ? C.default["G/aTXi"] : C.default.r9pa9K, {
              boostCount: h
            })
          })]
        }), L && (0, r.jsxs)("div", {
          className: s()(w.qS, w.nt),
          children: [(0, r.jsx)(u.yr3, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(u.Text, {
            className: w.nt,
            variant: "text-sm/semibold",
            children: T.intl.string(T.t.pCMkDb)
          })]
        })]
      })]
    }), (0, r.jsxs)(o.animated.div, {
      style: q,
      className: w.NC,
      children: [(0, r.jsx)("div", {
        className: w.x6,
        children: (0, r.jsx)(u.Button, {
          variant: "primary",
          text: T.intl.string(T.t.oPAx73),
          onClick: H,
          fullWidth: true
        })
      }), j && (0, r.jsx)("div", {
        className: w.x6,
        children: (0, r.jsx)(u.Button, {
          variant: "secondary",
          text: T.intl.string(T.t.GoCQxU),
          onClick: Y,
          fullWidth: true
        })
      })]
    }), N && (0, r.jsx)(u.LpS, {
      className: w.Ad,
      text: T.intl.string(T.t.y2b7CA)
    })]
  })
}

function j(e) {
  let {
    guildId: t,
    powerup: n,
    costDecorator: i,
    isNew: a,
    onClose: s
  } = e, o = (0, E.Ay)(t, n).type;
  return (0, r.jsx)(L, {
    guildId: t,
    activeStatus: o,
    title: n.title,
    description: n.description,
    cost: n.cost,
    staticImageUrl: n.staticImageUrl,
    animatedImageUrl: n.animatedImageUrl,
    powerup: n,
    costDecorator: i,
    isNew: a,
    onClose: s
  })
}
let M = 3,
  k = new Set([Chunk800007.W5]),
  U = new Map([
    [Chunk800007.W5, "+"]
  ]),
  G = Chunk64700.forwardRef((e, t) => {
    let {
      guild: n,
      onClose: a
    } = e;
    i.useEffect(() => {
      h.A.shouldFetchCatalogForGuild(n.id) && (0, _.AK)(n.id), h.A.shouldFetchPowerupsForGuild(n.id) && (0, _.Xd)(n.id)
    }, [n.id]);
    let s = (0, g.A)(n.id),
      o = Array.from(null != s ? s : []).reverse().slice(0, M);
    return 0 === o.length ? null : (0, r.jsxs)("div", {
      ref: t,
      className: w.iE,
      children: [(0, r.jsxs)("div", {
        className: w.ND,
        children: [(0, r.jsx)(u.Heading, {
          className: w.R_,
          variant: "heading-xxl/semibold",
          children: T.intl.string(N.default.wjI18Q)
        }), (0, r.jsx)(u.Text, {
          className: w.fV,
          variant: "text-md/medium",
          children: T.intl.format(N.default.S562fn, {
            helpDeskArticle: O.A.getArticleURL(A.MVz.GUILD_BOOSTING_FAQ)
          })
        })]
      }), (0, r.jsx)("div", {
        className: w.vY,
        children: o.map(e => (0, r.jsx)(j, {
          guildId: n.id,
          powerup: e,
          costDecorator: U.get(e.skuId),
          isNew: k.has(e.skuId),
          onClose: a
        }, "perk-card-".concat(e.skuId)))
      })]
    })
  });
G.displayName = "GuildBoostingMarketingPerkCards";
let V = G