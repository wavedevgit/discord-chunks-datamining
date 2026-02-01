/** Chunk was on 9753 **/
/** chunk id: 183802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => J,
  s: () => Y
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  s = require.n(Chunk310784),
  Chunk503698 = require("./503698.js"),
  c = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  d = require.n(Chunk989349),
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
let K = [
  [0, 30],
  [0, 30],
  [0, 20],
  [0, 0]
];
var Y = ((r = {})[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", r[r.EMBEDDED = 2] = "EMBEDDED", r);

function q(e) {
  let {
    guildId: t,
    sku: n,
    isCardHovered: r,
    trackCardClick: a,
    variant: s,
    analyticsLocations: o,
    analyticsContext: u
  } = e, d = l.useCallback(e => {
    e.stopPropagation(), null != n && null != t && (a(F.bB.FORWARD_BUTTON), (0, D.d)({
      sku: n,
      guildId: t,
      analyticsContext: u,
      analyticsLocations: o,
      source: "social-layer-storefront-embed"
    }))
  }, [n, t, a, u, o]), m = l.useCallback(() => {
    a(F.bB.WISHLIST_BUTTON)
  }, [a]), f = l.useMemo(() => c()(W.o, {
    [W.H5]: r
  }), [r]);
  return (0, i.jsxs)("div", {
    className: W.zu,
    children: [2 === s && (0, i.jsx)(p.DUT, {
      className: c()(f, W.gy),
      onClick: d,
      children: (0, i.jsx)(O.A, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }), (0, i.jsx)(A._, {
      skuId: n.id,
      isCardHovered: r,
      nuxGraphic: (0, R.N)(n),
      onClick: m,
      className: c()(f, W.ij)
    })]
  })
}

function J(e) {
  var t, n, r, a, o, u, A, O, R, D;
  let {
    positionInSection: Y,
    applicationId: J,
    skuId: Q,
    variant: X = 0,
    guildId: Z,
    onClick: $,
    className: ee,
    analyticsLocations: et
  } = e, en = l.useRef(null), er = (0, m.bG)([E.A], () => E.A.get(Q)), ei = (0, m.bG)([x.A], () => (0, p.Mwr)(x.A.theme)), el = (0, m.bG)([_.A], () => _.A.useReducedMotion), {
    isHoveringOrFocusing: ea
  } = (0, v.A)(en), es = (0, S.jM)(), {
    analyticsLocations: eo
  } = (0, b.Ay)(null != et ? et : []), ec = l.useRef({
    positionInSection: Y,
    analyticsLocations: eo
  }), [eu, ed] = l.useState(false), ep = (0, m.bG)([T.A], () => null != Q ? T.A.getNormalizedSKUEligibility(Q) : true, [Q]), em = (0, P.A)(Q, eu), ef = l.useCallback(e => {
    ed(e)
  }, []), eg = l.useMemo(() => c()(W.Nr, {
    [W.ax]: 0 === X,
    [W.GW]: 1 === X,
    [W.jz]: 2 === X
  }), [X]), {
    handleCardHover: e_,
    handleCardUnhover: eh
  } = (0, G.Z)(Q, es, Y, eo), {
    handleCardVisibilityChange: eb
  } = (0, B.a)(Q, es, Y, eo);
  l.useEffect(() => {
    eb(eu)
  }, [eu]);
  let ey = l.useCallback(e => {
      let {
        analyticsLocations: t,
        positionInSection: n
      } = ec.current, {
        sessionId: r,
        guildId: i,
        pageIndex: l,
        pageTitle: a,
        pageSection: s,
        pageSectionTitle: o,
        isUserGuildMember: c,
        pageHasLeaderboard: u
      } = es;
      j.default.track(H.HAw.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
        slayer_storefront_session_id: r,
        sku_id: Q,
        guild_id: i,
        page_index: l,
        page_title: a,
        page_section: s,
        page_section_title: o,
        position_in_section: n,
        is_user_guild_member: c,
        page_has_leaderboard: u,
        cta_type: e,
        location_stack: t
      })
    }, [Q, es]),
    {
      primaryIconAsset: eA,
      primaryIconLabel: ev
    } = l.useMemo(() => (0, I.Cv)(er, J), [er, J]),
    eO = (0, m.bG)([T.A], () => {
      var e, t;
      return null != Z && null != (e = null == (t = T.A.getStorefrontState(Z)) ? true : t.activePage) ? e : 0
    }),
    ex = l.useMemo(() => {
      var e, t;
      if ((null == er || null == (t = er.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
      let n = d()(),
        r = Math.max(d()(er.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
      return r <= 3 ? z.intl.format(z.t.PWw4Vp, {
        days: r
      }) : null
    }, [null == er || null == (u = er.tenantMetadata) || null == (o = u.socialLayer) ? true : o.expiresAt]),
    eE = (0, I.xf)(er),
    [ej, eC] = (0, y.rh)(null == eE ? true : eE.toString(), "#000000"),
    eI = l.useMemo(() => {
      let e = s()(ej).darken(1.5).alpha(.9).hex(),
        t = s()(ej).alpha(0).hex(),
        [n, r] = K[X];
      return (0 !== n || 0 !== r) && em ? "linear-gradient(to top, ".concat(e, " ").concat(30 + n, "%, ").concat(t, " ").concat(30 + r, "%)") : "none"
    }, [ej, X, em]),
    eS = l.useCallback(() => {
      (0, w.X)({
        guildId: Z
      })
    }, [Z]),
    eT = l.useCallback(e => {
      (ey(F.bB.CARD), null != $) ? $(e): null != Z && (0, N.A)({
        guildId: Z,
        pageIndex: eO,
        skuId: Q,
        slug: null == er ? true : er.slug
      })
    }, [ey, Z, Q, $, eO, null == er ? true : er.slug]);
  if (null == er) return null;
  let eN = (0, I.fq)(er);
  return (0, i.jsx)(f.L, {
    innerRef: en,
    onChange: ef,
    threshold: 0,
    children: (0, i.jsx)(p.vN3, {
      children: (0, i.jsxs)(g.sqX, {
        onClick: eT,
        onMouseDown: eS,
        onMouseEnter: e_,
        onMouseLeave: eh,
        className: c()(eg, {
          [W.Zl]: !el && 2 !== X,
          [W.BN]: ei,
          [ei ? W.Mn : W.YF]: ea,
          [W.Rc]: !em
        }, ee),
        ref: en,
        "aria-label": er.name,
        children: [null != ex && (0, i.jsx)(g.LpS, {
          text: ex,
          disableColor: true,
          className: W.qS
        }), (0, i.jsx)(q, {
          guildId: Z,
          sku: er,
          isCardHovered: ea,
          variant: X,
          trackCardClick: ey,
          analyticsLocations: eo,
          analyticsContext: es
        }), null != eN ? em ? (0, i.jsx)(M.A, {
          containerClassName: W.Vl,
          foregroundImageClassName: W.wP,
          cardImage: eN,
          altText: er.name,
          shape: "custom",
          backgroundImageClassName: W.GC,
          cardBackgroundImage: eE
        }) : (0, i.jsx)(U.t, {}) : (0, i.jsx)("div", {
          className: W.t7,
          children: (0, i.jsx)(p.qyI, {
            color: "white",
            size: "custom",
            height: 80,
            width: 80,
            className: W.Cw
          })
        }), 2 !== X ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("div", {
            className: W.iZ,
            style: {
              background: eI
            }
          }), (0, i.jsxs)("div", {
            className: W.zH,
            children: [(0, i.jsx)("div", {
              className: W.gn,
              children: em ? (0, i.jsx)(g.Text, {
                color: "always-white",
                variant: "text-md/medium",
                lineClamp: 1,
                children: er.name
              }) : (0, i.jsx)(U.r, {})
            }), (0, i.jsx)("div", {
              className: W.iQ,
              children: em ? (0, i.jsxs)(i.Fragment, {
                children: [null != eA && (0, i.jsx)("img", {
                  src: eA.toString(),
                  alt: ev,
                  className: W.ye
                }), (0, i.jsx)(g.Text, {
                  variant: "text-md/bold",
                  color: "always-white",
                  lineClamp: 1,
                  children: (0, C.$g)(null != (t = null == (A = er.price) ? true : A.amount) ? t : 0, null != (n = null == (O = er.price) ? true : O.currency) ? n : V.Yr.USD)
                })]
              }) : (0, i.jsx)(U.r, {})
            })]
          }), (0, i.jsx)("div", {
            className: W.li,
            children: (0, i.jsxs)(p.e2v, {
              wrap: false,
              fullWidth: true,
              children: [(0, i.jsx)(p.$nd, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation(), ey(F.bB.BUY_BUTTON), (0, L.a)(er, {
                    isGift: false
                  }, {
                    analyticsLocations: [h.A.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON],
                    guildId: Z
                  })
                },
                text: ep ? z.intl.format(z.t.Xp5WTn, {
                  price: (0, C.$g)(null != (r = null == (R = er.price) ? true : R.amount) ? r : 0, null != (a = null == (D = er.price) ? true : D.currency) ? a : V.Yr.USD)
                }) : z.intl.string(z.t.cg0M2H),
                fullWidth: true,
                disabled: !ep
              }), (0, i.jsx)(k.A, {
                onGift: e => {
                  e.stopPropagation(), ey(F.bB.GIFT_BUTTON), (0, L.a)(er, {
                    isGift: true
                  }, {
                    analyticsLocations: [h.A.SLAYER_STOREFRONT_CARD_GIFT_BUTTON]
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