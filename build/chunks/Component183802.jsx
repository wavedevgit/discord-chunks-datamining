/** Chunk was on web.js **/
/** chunk id: 183802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Q,
  s: () => X
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  s = require.n(Chunk310784),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  u = require.n(Chunk989349),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk654107 = require("./654107.js"),
  Chunk139146 = require("./139146.jsx"),
  Chunk713517 = require("./713517.js"),
  Chunk427209 = require("./427209.jsx"),
  Chunk544028 = require("./544028.js"),
  Chunk67480 = require("./67480.js"),
  Chunk954571 = require("./954571.js"),
  Chunk580630 = require("./580630.js"),
  Chunk871123 = require("./871123.js"),
  Chunk439303 = require("./439303.jsx"),
  Chunk832163 = require("./832163.js"),
  Chunk35826 = require("./35826.js"),
  Chunk310962 = require("./310962.js"),
  Chunk44724 = require("./44724.js"),
  Chunk486318 = require("./486318.js"),
  Chunk345938 = require("./345938.jsx"),
  Chunk533406 = require("./533406.jsx"),
  Chunk366523 = require("./366523.jsx"),
  Chunk300182 = require("./300182.jsx"),
  Chunk620999 = require("./620999.jsx"),
  Chunk696028 = require("./696028.js"),
  Chunk914887 = require("./914887.js"),
  Chunk995393 = require("./995393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk610084 = require("./610084.js");
let W = 80,
  K = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  z = 30,
  q = 3;
var X = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function Z(e) {
  let {
    guildId: t,
    sku: n,
    isCardHovered: a,
    trackCardClick: s,
    variant: o,
    analyticsLocations: c,
    analyticsContext: u
  } = e, f = i.useCallback(e => {
    e.stopPropagation(), null != n && null != t && (s(V.bB.FORWARD_BUTTON), (0, x.d)({
      sku: n,
      guildId: t,
      analyticsContext: u,
      analyticsLocations: c,
      source: "social-layer-storefront-embed"
    }))
  }, [n, t, s, u, c]), p = i.useCallback(() => {
    s(V.bB.WISHLIST_BUTTON)
  }, [s]), _ = i.useMemo(() => l()(Y.o, {
    [Y.H5]: a
  }), [a]);
  return (0, r.jsxs)("div", {
    className: Y.zu,
    children: [2 === o && (0, r.jsx)(d.DUT, {
      className: l()(_, Y.gy),
      onClick: f,
      children: (0, r.jsx)(O.A, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }), (0, r.jsx)(b._, {
      skuId: n.id,
      isCardHovered: a,
      nuxGraphic: (0, D.N)(n),
      onClick: p,
      className: l()(_, Y.ij)
    })]
  })
}

function Q(e) {
  var t, n, a, o, c, b, O, D, x, X;
  let {
    positionInSection: Q,
    applicationId: $,
    skuId: J,
    variant: ee = 0,
    guildId: et,
    onClick: en,
    className: er,
    analyticsLocations: ei
  } = e, ea = i.useRef(null), es = (0, f.bG)([v.A], () => v.A.get(J)), eo = (0, f.bG)([A.A], () => (0, d.Mwr)(A.A.theme)), el = (0, f.bG)([h.A], () => h.A.useReducedMotion), {
    isHoveringOrFocusing: ec
  } = (0, y.A)(ea), eu = (0, C.jM)(), {
    analyticsLocations: ed
  } = (0, g.Ay)(null != ei ? ei : []), ef = i.useRef({
    positionInSection: Q,
    analyticsLocations: ed
  }), [ep, e_] = i.useState(false), eh = (0, w.A)(J, ep), em = i.useCallback(e => {
    e_(e)
  }, []), eg = i.useMemo(() => l()(Y.Nr, {
    [Y.ax]: 0 === ee,
    [Y.GW]: 1 === ee,
    [Y.jz]: 2 === ee
  }), [ee]), {
    handleCardHover: eE,
    handleCardUnhover: eb
  } = (0, U.Z)(J, eu, Q, ed), {
    handleCardVisibilityChange: ey
  } = (0, G.a)(J, eu, Q, ed);
  i.useEffect(() => {
    ey(ep)
  }, [ep]);
  let eO = i.useCallback(e => {
      let {
        analyticsLocations: t,
        positionInSection: n
      } = ef.current, {
        sessionId: r,
        guildId: i,
        pageIndex: a,
        pageTitle: s,
        pageSection: o,
        pageSectionTitle: l,
        isUserGuildMember: c,
        pageHasLeaderboard: u
      } = eu;
      S.default.track(F.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
        slayer_storefront_session_id: r,
        sku_id: J,
        guild_id: i,
        page_index: a,
        page_title: s,
        page_section: o,
        page_section_title: l,
        position_in_section: n,
        is_user_guild_member: c,
        page_has_leaderboard: u,
        cta_type: e,
        location_stack: t
      })
    }, [J, eu]),
    {
      primaryIconAsset: eA,
      primaryIconLabel: ev
    } = i.useMemo(() => (0, T.Cv)(es, $), [es, $]),
    eS = (0, f.bG)([N.A], () => {
      var e, t;
      return null != et && null != (e = null == (t = N.A.getStorefrontState(et)) ? true : t.activePage) ? e : 0
    }),
    eI = i.useMemo(() => {
      var e, t;
      if ((null == es || null == (t = es.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
      let n = u()(),
        r = Math.max(u()(es.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
      return r <= q ? H.intl.format(H.t.PWw4Vp, {
        days: r
      }) : null
    }, [null == es || null == (b = es.tenantMetadata) || null == (c = b.socialLayer) ? true : c.expiresAt]),
    eT = (0, T.xf)(es),
    [eC, eN] = (0, E.rh)(null == eT ? true : eT.toString(), "#000000"),
    eR = i.useMemo(() => {
      let e = s()(eC).darken(1.5).alpha(.9).hex(),
        t = s()(eC).alpha(0).hex(),
        [n, r] = K[ee];
      return (0 !== n || 0 !== r) && eh ? "linear-gradient(to top, ".concat(e, " ").concat(z + n, "%, ").concat(t, " ").concat(z + r, "%)") : "none"
    }, [eC, ee, eh]),
    ew = i.useCallback(() => {
      (0, P.X)({
        guildId: et
      })
    }, [et]),
    eP = i.useCallback(e => {
      (eO(V.bB.CARD), null != en) ? en(e): null != et && (0, R.A)({
        guildId: et,
        pageIndex: eS,
        skuId: J,
        slug: null == es ? true : es.slug
      })
    }, [eO, et, J, en, eS, null == es ? true : es.slug]);
  if (null == es) return null;
  let eD = (0, T.fq)(es);
  return (0, r.jsx)(p.L, {
    innerRef: ea,
    onChange: em,
    threshold: 0,
    children: (0, r.jsx)(d.vN3, {
      children: (0, r.jsxs)(_.sqX, {
        onClick: eP,
        onMouseDown: ew,
        onMouseEnter: eE,
        onMouseLeave: eb,
        className: l()(eg, {
          [Y.Zl]: !el && 2 !== ee,
          [Y.BN]: eo,
          [eo ? Y.Mn : Y.YF]: ec,
          [Y.Rc]: !eh
        }, er),
        ref: ea,
        "aria-label": es.name,
        children: [null != eI && (0, r.jsx)(_.LpS, {
          text: eI,
          disableColor: true,
          className: Y.qS
        }), (0, r.jsx)(Z, {
          guildId: et,
          sku: es,
          isCardHovered: ec,
          variant: ee,
          trackCardClick: eO,
          analyticsLocations: ed,
          analyticsContext: eu
        }), null != eD ? eh ? (0, r.jsx)(j.A, {
          containerClassName: Y.Vl,
          foregroundImageClassName: Y.wP,
          cardImage: eD,
          altText: es.name,
          shape: "custom",
          backgroundImageClassName: Y.GC,
          cardBackgroundImage: eT
        }) : (0, r.jsx)(k.t, {}) : (0, r.jsx)("div", {
          className: Y.t7,
          children: (0, r.jsx)(d.qyI, {
            color: "white",
            size: "custom",
            height: W,
            width: W,
            className: Y.Cw
          })
        }), 2 !== ee ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: Y.iZ,
            style: {
              background: eR
            }
          }), (0, r.jsxs)("div", {
            className: Y.zH,
            children: [(0, r.jsx)("div", {
              className: Y.gn,
              children: eh ? (0, r.jsx)(_.Text, {
                color: "always-white",
                variant: "text-md/medium",
                lineClamp: 1,
                children: es.name
              }) : (0, r.jsx)(k.r, {})
            }), (0, r.jsx)("div", {
              className: Y.iQ,
              children: eh ? (0, r.jsxs)(r.Fragment, {
                children: [null != eA && (0, r.jsx)("img", {
                  src: eA.toString(),
                  alt: ev,
                  className: Y.ye
                }), (0, r.jsx)(_.Text, {
                  variant: "text-md/bold",
                  color: "always-white",
                  lineClamp: 1,
                  children: (0, I.$g)(null != (t = null == (O = es.price) ? true : O.amount) ? t : 0, null != (n = null == (D = es.price) ? true : D.currency) ? n : B.Yr.USD)
                })]
              }) : (0, r.jsx)(k.r, {})
            })]
          }), (0, r.jsx)("div", {
            className: Y.li,
            children: (0, r.jsxs)(d.e2v, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(d.$nd, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation(), eO(V.bB.BUY_BUTTON), (0, L.a)(es, {
                    isGift: false
                  }, {
                    analyticsLocations: [m.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON]
                  })
                },
                text: H.intl.format(H.t.Xp5WTn, {
                  price: (0, I.$g)(null != (a = null == (x = es.price) ? true : x.amount) ? a : 0, null != (o = null == (X = es.price) ? true : X.currency) ? o : B.Yr.USD)
                }),
                fullWidth: true
              }), (0, r.jsx)(M.A, {
                onGift: e => {
                  e.stopPropagation(), eO(V.bB.GIFT_BUTTON), (0, L.a)(es, {
                    isGift: true
                  }, {
                    analyticsLocations: [m.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON]
                  })
                }
              })]
            })
          })]
        }) : null]
      })
    })
  })
}