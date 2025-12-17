/** Chunk was on 84802 **/
/** chunk id: 250317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => H
}), require("./388685.js"), require("./539854.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  o = require.n(Chunk688619),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk220082 = require("./220082.js"),
  Chunk143941 = require("./143941.jsx"),
  Chunk245216 = require("./245216.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk164670 = require("./164670.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk882508 = require("./882508.js"),
  Chunk813687 = require("./813687.jsx"),
  Chunk594914 = require("./594914.jsx"),
  Chunk939716 = require("./939716.jsx"),
  Chunk181268 = require("./181268.js"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226421 = require("./226421.js");

function W(e) {
  var t, n, r, o;
  let {
    sku: i,
    guildId: s,
    shouldShowShopLink: c,
    onClose: d,
    trackPDPClick: m
  } = e, b = a.useCallback(() => {
    null != i && (m(R.o4.BUY_BUTTON), (0, T.P)(i, {
      isGift: false
    }, {
      analyticsLocations: [f.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON]
    }))
  }, [i, m]), p = a.useCallback(() => {
    (0, y.eagerNavigateToSocialLayerStorefront)({
      guildId: s
    })
  }, [s]), g = a.useCallback(() => {
    m(R.o4.VISIT_SHOP), (0, y.default)({
      guildId: s
    }), d()
  }, [s, d, m]), C = a.useCallback(() => {
    null != i && (m(R.o4.GIFT_BUTTON), (0, T.P)(i, {
      isGift: true
    }, {
      analyticsLocations: [f.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON]
    }))
  }, [i, m]);
  if (null == i) return null;
  let h = (0, v.T4)(null != (r = null == (t = i.price) ? true : t.amount) ? r : 0, null != (o = null == (n = i.price) ? true : n.currency) ? o : A.pK.USD);
  return (0, l.jsxs)("div", {
    className: Z.detailsContainer,
    children: [(0, l.jsxs)("div", {
      className: Z.titleDescriptionContainer,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-xl/bold",
        color: "text-strong",
        children: i.name
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: i.description
      })]
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: h
    }), (0, l.jsxs)("div", {
      className: Z.buttonsContainer,
      children: [(0, l.jsx)(u.Button, {
        variant: "primary",
        onClick: b,
        text: B.intl.string(B.t.boqtTA),
        fullWidth: true
      }), (0, l.jsxs)(u.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [c ? (0, l.jsx)(u.Button, {
          icon: u.EOn,
          variant: "secondary",
          onMouseDown: p,
          onClick: g,
          text: B.intl.string(B.t["2QW9nR"]),
          fullWidth: true
        }) : null, (0, l.jsx)(u.Button, {
          icon: u.OgN,
          variant: "secondary",
          onClick: C,
          text: B.intl.string(B.t.QAZA5f),
          fullWidth: true
        })]
      })]
    })]
  })
}

function D(e) {
  let {
    sku: t,
    applicationId: n,
    storefront: r,
    onSelectedCarouselItemChange: o,
    isMuted: i,
    trackPDPClick: s
  } = e, [c, u] = a.useState([]), [d, m] = a.useState([]), f = a.useCallback(e => {
    var t;
    let n = d.findIndex(t => t === e);
    null == o || o(null != (t = c[n]) ? t : null)
  }, [o, c, d]);
  return (a.useEffect(() => {
    var e, l, a;
    let [o, i] = function(e, t, n) {
      let l = [],
        a = [];
      if (null == e || 0 === e.length) return [l, a];
      for (let r of e) {
        let e = null != r.assetId ? n[r.assetId] : null;
        null != e && (l.push(r), e.mime_type.startsWith("video/") ? a.push({
          type: "video",
          src: (0, k._W)(t, e, E.Q, "mp4"),
          videoThumbnailSrc: (0, k._W)(t, e, E.Q, "webp"),
          thumbnailSrc: null != r.thumbnailAssetId ? (0, k._W)(t, r.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != r.backgroundAssetId ? (0, k._W)(t, r.backgroundAssetId, E.Q, P._Z) : true
        }) : a.push({
          type: "image",
          src: (0, k._W)(t, e, E.Q, "webp"),
          thumbnailSrc: null != r.thumbnailAssetId ? (0, k._W)(t, r.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != r.backgroundAssetId ? (0, k._W)(t, r.backgroundAssetId, E.Q, P._Z) : true
        }))
      }
      return [l, a]
    }(null != (a = null == t || null == (l = t.tenantMetadata) || null == (e = l.socialLayer) ? true : e.carouselItems) ? a : [], n, r.assets);
    u(o), m(i)
  }, [t, r.assets, n]), 0 === d.length) ? null : (0, l.jsx)(E.Z, {
    className: Z.carousel,
    items: d,
    onItemChange: f,
    isMuted: i,
    onTrackClick: s
  })
}

function U(e) {
  let {
    selectedCarouselItem: t,
    applicationId: n
  } = e;
  if (null == t) return null;
  let a = null != t.labelIconAssetId ? (0, k._W)(n, t.labelIconAssetId) : null;
  return (0, l.jsxs)("div", {
    className: Z.labelIconContainer,
    children: [null != a && (0, l.jsx)("img", {
      className: Z.labelIcon,
      src: a,
      alt: t.label
    }, a), (0, l.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: t.label
    })]
  })
}

function M(e) {
  let {
    onClick: t,
    children: n,
    ariaLabel: a
  } = e;
  return (0, l.jsx)(u.P3F, {
    onClick: t,
    className: Z.modalHeaderButton,
    "aria-label": a,
    role: "button",
    children: n
  })
}

function H(e) {
  var t;
  let {
    transitionState: n,
    returnRef: r,
    skuId: i,
    applicationId: f,
    guildId: v,
    isStorefront: P,
    analyticsLocations: y,
    analyticsContext: T,
    onClose: E
  } = e, {
    analyticsLocations: A
  } = (0, b.ZP)(null != y ? y : []), H = (0, c.e7)([S.Z], () => S.Z.getStorefrontData(v), [v]), F = (0, c.e7)([I.Z], () => I.Z.isFetchingForSKU(i)), z = (0, u.wjy)((0, m.ZP)()), [Q, Y] = a.useState(true), G = (0, c.e7)([_.Z], () => _.Z.get(i)), [V, X] = a.useState(null), K = function(e, t) {
    let n = (null == t ? true : t.labelIconAssetId) != null ? (0, k._W)(e, null == t ? true : t.labelIconAssetId) : null,
      [l, r] = (0, p.Cf)(n, "#000000"),
      i = a.useMemo(() => {
        let e = o()(l).darken(1);
        return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(e.alpha(.25).hex(), " 0%, transparent 100%)")
      }, [l]);
    return null != n && "#000000" !== l ? i : true
  }(f, V);
  (0, h.p2)(), (0, d.ZP)(() => {
    x.default.track(L.rMx.OPEN_MODAL, {
      location_stack: A,
      type: w.n8,
      sku_id: i,
      application_id: f
    })
  });
  let q = a.useCallback(e => {
    x.default.track(L.rMx.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == T ? true : T.sessionId,
      sku_id: i,
      guild_id: null == T ? true : T.guildId,
      cta_type: e,
      location_stack: A
    })
  }, [T, i, A]);
  a.useEffect(() => {
    null == v || null == i || I.Z.isFetchingForSKU(i) || (0, j.y)(v, i)
  }, [v, i]);
  let $ = a.useCallback(() => {
      null != G && (q(R.o4.FORWARD_BUTTON), (0, O.b)({
        sku: G,
        guildId: v,
        source: "social-layer-storefront-pdp",
        analyticsLocations: A,
        analyticsContext: T
      }))
    }, [G, v, q, A, T]),
    J = a.useCallback(() => {
      q(R.o4.WISHLIST_BUTTON)
    }, [q]),
    ee = a.useCallback(() => {
      Y(!Q), q(R.o4.MUTE_BUTTON)
    }, [Q, q]);
  if (null == (null == G || null == (t = G.tenantMetadata) ? true : t.socialLayer) || (null == H ? true : H.storefront) == null) return F ? (0, l.jsx)(u.$jN, {}) : null;
  let et = null != H.storefront.logoAssetId ? (0, k._W)(H.storefront.applicationId, H.storefront.logoAssetId, 75) : null,
    en = null != H.storefront.lightThemeLogoAssetId ? (0, k._W)(H.storefront.applicationId, H.storefront.lightThemeLogoAssetId, 75) : null,
    el = null;
  return el = z ? null != et ? et : en : null != en ? en : et, (0, l.jsx)(u.Y0X, {
    transitionState: n,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: Z.modalRoot,
    size: u.CgR.DYNAMIC,
    returnRef: r,
    children: (0, l.jsxs)(u.hzk, {
      className: Z.modalContent,
      children: [(0, l.jsxs)("div", {
        className: Z.infoContainer,
        style: {
          background: K
        },
        children: [(0, l.jsx)("div", {
          className: Z.logoContainer,
          children: null != el ? (0, l.jsx)("img", {
            className: Z.logo,
            src: el,
            alt: ""
          }) : null
        }), (0, l.jsx)(U, {
          applicationId: f,
          selectedCarouselItem: V
        }), (0, l.jsx)(W, {
          sku: G,
          guildId: v,
          shouldShowShopLink: !P,
          onClose: E,
          trackPDPClick: q
        })]
      }), (0, l.jsxs)("div", {
        className: Z.carouselContainer,
        children: [(0, l.jsx)(D, {
          sku: G,
          applicationId: f,
          storefront: H.storefront,
          onSelectedCarouselItemChange: X,
          isMuted: Q,
          trackPDPClick: q
        }), (0, l.jsxs)("div", {
          className: Z.modalHeaderButtonsContainer,
          children: [null != G && (0, l.jsx)(g.s, {
            skuId: G.id,
            isCardHovered: true,
            className: s()(Z.modalHeaderButton, Z.wishlistButton),
            nuxGraphic: (0, N.c)(G),
            onClick: J
          }), (0, l.jsx)(M, {
            onClick: $,
            ariaLabel: B.intl.string(B.t.Ej3B3Y),
            children: (0, l.jsx)(C.Z, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, l.jsx)(M, {
            onClick: ee,
            ariaLabel: Q ? B.intl.string(B.t.YqAjXy) : B.intl.string(B.t.w4m945),
            children: Q ? (0, l.jsx)(u.OyP, {
              size: "refresh_sm",
              color: "currentColor"
            }) : (0, l.jsx)(u.gj8, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, l.jsx)(M, {
            onClick: E,
            ariaLabel: B.intl.string(B.t.cpT0Cq),
            children: (0, l.jsx)(u.Uz9, {
              size: "refresh_sm",
              color: "currentColor"
            })
          })]
        })]
      })]
    })
  })
}