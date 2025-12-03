/** Chunk was on 84802 **/
/** chunk id: 250317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
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
  Chunk602733 = require("./602733.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk164670 = require("./164670.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk882508 = require("./882508.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk939716 = require("./939716.jsx"),
  Chunk181268 = require("./181268.js"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk424215 = require("./424215.js");

function Z(e) {
  var t, n, r, o;
  let {
    sku: i,
    guildId: s,
    shouldShowShopLink: c,
    onClose: d,
    trackPDPClick: m
  } = e, g = a.useCallback(() => {
    null != i && (m(E.o4.BUY_BUTTON), (0, T.P)(i, {
      isGift: false
    }, {
      analyticsLocations: [p.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON]
    }))
  }, [i, m]), _ = a.useCallback(() => {
    (0, y.eagerNavigateToSocialLayerStorefront)({
      guildId: s
    })
  }, [s]), C = a.useCallback(() => {
    m(E.o4.VISIT_SHOP), (0, y.default)({
      guildId: s
    }), d()
  }, [s, d, m]), h = a.useCallback(() => {
    null != i && (m(E.o4.GIFT_BUTTON), (0, T.P)(i, {
      isGift: true
    }, {
      analyticsLocations: [p.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON]
    }))
  }, [i, m]);
  if (null == i) return null;
  let f = (0, v.T4)(null != (r = null == (t = i.price) ? true : t.amount) ? r : 0, null != (o = null == (n = i.price) ? true : n.currency) ? o : R.pK.USD);
  return (0, l.jsxs)("div", {
    className: B.detailsContainer,
    children: [(0, l.jsxs)("div", {
      className: B.titleDescriptionContainer,
      children: [(0, l.jsx)(u.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: i.name
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: i.description
      })]
    }), (0, l.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: f
    }), (0, l.jsxs)("div", {
      className: B.buttonsContainer,
      children: [(0, l.jsx)(u.Button, {
        variant: "primary",
        onClick: g,
        text: A.intl.string(A.t.boqtTA),
        fullWidth: true
      }), (0, l.jsxs)(u.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [c ? (0, l.jsx)(u.Button, {
          icon: u.EOn,
          variant: "secondary",
          onMouseDown: _,
          onClick: C,
          text: A.intl.string(A.t["2QW9nR"]),
          fullWidth: true
        }) : null, (0, l.jsx)(u.Button, {
          icon: u.OgN,
          variant: "secondary",
          onClick: h,
          text: A.intl.string(A.t.QAZA5f),
          fullWidth: true
        })]
      })]
    })]
  })
}

function W(e) {
  let {
    sku: t,
    applicationId: n,
    storefront: r,
    onSelectedCarouselItemChange: o,
    isMuted: i,
    trackPDPClick: s
  } = e, [c, u] = a.useState([]), [d, m] = a.useState([]), p = a.useCallback(e => {
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
          src: (0, k._W)(t, e, O.Q, "mp4"),
          videoThumbnailSrc: (0, k._W)(t, e, O.Q, "webp"),
          thumbnailSrc: null != r.thumbnailAssetId ? (0, k._W)(t, r.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != r.backgroundAssetId ? (0, k._W)(t, r.backgroundAssetId, O.Q, P._Z) : true
        }) : a.push({
          type: "image",
          src: (0, k._W)(t, e, O.Q, "webp"),
          thumbnailSrc: null != r.thumbnailAssetId ? (0, k._W)(t, r.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != r.backgroundAssetId ? (0, k._W)(t, r.backgroundAssetId, O.Q, P._Z) : true
        }))
      }
      return [l, a]
    }(null != (a = null == t || null == (l = t.tenantMetadata) || null == (e = l.socialLayer) ? true : e.carouselItems) ? a : [], n, r.assets);
    u(o), m(i)
  }, [t, r.assets, n]), 0 === d.length) ? null : (0, l.jsx)(O.Z, {
    className: B.carousel,
    items: d,
    onItemChange: p,
    isMuted: i,
    onTrackClick: s
  })
}

function D(e) {
  let {
    selectedCarouselItem: t,
    applicationId: n
  } = e;
  if (null == t) return null;
  let a = null != t.labelIconAssetId ? (0, k._W)(n, t.labelIconAssetId) : null;
  return (0, l.jsxs)("div", {
    className: B.labelIconContainer,
    children: [null != a && (0, l.jsx)("img", {
      className: B.labelIcon,
      src: a,
      alt: t.label
    }, a), (0, l.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: t.label
    })]
  })
}

function U(e) {
  let {
    onClick: t,
    children: n,
    ariaLabel: a
  } = e;
  return (0, l.jsx)(u.P3F, {
    onClick: t,
    className: B.modalHeaderButton,
    "aria-label": a,
    role: "button",
    children: n
  })
}

function M(e) {
  var t;
  let {
    transitionState: n,
    returnRef: r,
    skuId: i,
    applicationId: p,
    guildId: v,
    isStorefront: y,
    analyticsLocations: T,
    analyticsContext: O,
    onClose: R
  } = e, {
    analyticsLocations: M
  } = (0, g.ZP)(null != T ? T : []), H = (0, c.e7)([j.Z], () => j.Z.getStorefrontData(v), [v]), F = (0, c.e7)([b.Z], () => b.Z.isFetchingForSKU(i)), z = (0, u.wjy)((0, m.ZP)()), [Q, Y] = a.useState(true), G = (0, c.e7)([f.Z], () => f.Z.get(i)), [V, K] = a.useState(null), X = function(e, t) {
    let n = (null == t ? true : t.labelIconAssetId) != null ? (0, k._W)(e, null == t ? true : t.labelIconAssetId) : null,
      [l, r] = (0, _.Cf)(n, "#000000"),
      i = a.useMemo(() => {
        let e = o()(l).darken(1);
        return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(e.alpha(.25).hex(), " 0%, transparent 100%)")
      }, [l]);
    return null != n && "#000000" !== l ? i : true
  }(p, V);
  (0, h.p2)(), (0, d.ZP)(() => {
    I.default.track(L.rMx.OPEN_MODAL, {
      location_stack: M,
      type: w.n8,
      sku_id: i,
      application_id: p
    })
  });
  let q = a.useCallback(e => {
    I.default.track(L.rMx.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == O ? true : O.sessionId,
      sku_id: i,
      guild_id: null == O ? true : O.guildId,
      cta_type: e,
      location_stack: M
    })
  }, [O, i, M]);
  a.useEffect(() => {
    null == v || null == i || b.Z.isFetchingForSKU(i) || (0, S.y)(v, i)
  }, [v, i]);
  let J = a.useCallback(() => {
      null != G && (q(E.o4.COPY_LINK_BUTTON), (0, x.JG)((0, P.wQ)(v, G), () => (0, u.showToast)((0, u.createToast)(A.intl.string(A.t["L/PwZf"]), u.ToastType.SUCCESS))))
    }, [v, G, q]),
    $ = a.useCallback(() => {
      q(E.o4.WISHLIST_BUTTON)
    }, [q]),
    ee = a.useCallback(() => {
      Y(!Q), q(E.o4.MUTE_BUTTON)
    }, [Q, q]);
  if (null == (null == G || null == (t = G.tenantMetadata) ? true : t.socialLayer) || (null == H ? true : H.storefront) == null) return F ? (0, l.jsx)(u.$jN, {}) : null;
  let et = null != H.storefront.logoAssetId ? (0, k._W)(H.storefront.applicationId, H.storefront.logoAssetId, 75) : null,
    en = null != H.storefront.lightThemeLogoAssetId ? (0, k._W)(H.storefront.applicationId, H.storefront.lightThemeLogoAssetId, 75) : null,
    el = null;
  return el = z ? null != et ? et : en : null != en ? en : et, (0, l.jsx)(u.Y0X, {
    transitionState: n,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: B.modalRoot,
    size: u.CgR.DYNAMIC,
    returnRef: r,
    children: (0, l.jsxs)(u.hzk, {
      className: B.modalContent,
      children: [(0, l.jsxs)("div", {
        className: B.infoContainer,
        style: {
          background: X
        },
        children: [(0, l.jsx)("div", {
          className: B.logoContainer,
          children: null != el ? (0, l.jsx)("img", {
            className: B.logo,
            src: el,
            alt: ""
          }) : null
        }), (0, l.jsx)(D, {
          applicationId: p,
          selectedCarouselItem: V
        }), (0, l.jsx)(Z, {
          sku: G,
          guildId: v,
          shouldShowShopLink: !y,
          onClose: R,
          trackPDPClick: q
        })]
      }), (0, l.jsxs)("div", {
        className: B.carouselContainer,
        children: [(0, l.jsx)(W, {
          sku: G,
          applicationId: p,
          storefront: H.storefront,
          onSelectedCarouselItemChange: K,
          isMuted: Q,
          trackPDPClick: q
        }), (0, l.jsxs)("div", {
          className: B.modalHeaderButtonsContainer,
          children: [null != G && (0, l.jsx)(C.s, {
            skuId: G.id,
            isCardHovered: true,
            className: s()(B.modalHeaderButton, B.wishlistButton),
            nuxGraphic: (0, N.c)(G),
            onClick: $
          }), (0, l.jsx)(U, {
            onClick: J,
            ariaLabel: A.intl.string(A.t.Ej3B3Y),
            children: (0, l.jsx)(u.xPt, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, l.jsx)(U, {
            onClick: ee,
            ariaLabel: Q ? A.intl.string(A.t.YqAjXy) : A.intl.string(A.t.w4m945),
            children: Q ? (0, l.jsx)(u.OyP, {
              size: "refresh_sm",
              color: "currentColor"
            }) : (0, l.jsx)(u.gj8, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, l.jsx)(U, {
            onClick: R,
            ariaLabel: A.intl.string(A.t.cpT0Cq),
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