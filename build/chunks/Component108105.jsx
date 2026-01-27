/** Chunk was on 67851 **/
/** chunk id: 108105, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => G
}), require("./896048.js"), require("./321073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  o = require.n(Chunk310784),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk654107 = require("./654107.js"),
  Chunk139146 = require("./139146.jsx"),
  Chunk427209 = require("./427209.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk954571 = require("./954571.js"),
  Chunk580630 = require("./580630.js"),
  Chunk371794 = require("./371794.js"),
  Chunk871123 = require("./871123.js"),
  Chunk733391 = require("./733391.js"),
  Chunk832163 = require("./832163.js"),
  Chunk44724 = require("./44724.js"),
  Chunk486318 = require("./486318.js"),
  Chunk345938 = require("./345938.jsx"),
  Chunk533406 = require("./533406.jsx"),
  Chunk953590 = require("./953590.jsx"),
  Chunk995393 = require("./995393.js"),
  Chunk188275 = require("./188275.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk88465 = require("./88465.js");

function M(e) {
  var t, n, a, o;
  let {
    sku: i,
    guildId: s,
    shouldShowShopLink: c,
    onClose: u,
    trackPDPClick: _
  } = e, b = l.useCallback(() => {
    null != i && (_(N.Jq.BUY_BUTTON), (0, P.a)(i, {
      isGift: false
    }, {
      analyticsLocations: [m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON]
    }))
  }, [i, _]), p = l.useCallback(() => {
    (0, S.X)({
      guildId: s
    })
  }, [s]), h = l.useCallback(() => {
    _(N.Jq.VISIT_SHOP), (0, S.default)({
      guildId: s
    }), u()
  }, [s, u, _]), f = l.useCallback(() => {
    null != i && (_(N.Jq.GIFT_BUTTON), (0, P.a)(i, {
      isGift: true
    }, {
      analyticsLocations: [m.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON]
    }))
  }, [i, _]);
  if (null == i) return null;
  let g = (0, v.$g)(null != (t = null == (a = i.price) ? true : a.amount) ? t : 0, null != (n = null == (o = i.price) ? true : o.currency) ? n : U.Yr.USD);
  return (0, r.jsxs)("div", {
    className: L.wt,
    children: [(0, r.jsxs)("div", {
      className: L.AX,
      children: [(0, r.jsx)(d.Heading, {
        variant: "heading-xl/bold",
        color: "text-strong",
        children: i.name
      }), (0, r.jsx)(d.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: i.description
      })]
    }), (0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: g
    }), (0, r.jsxs)("div", {
      className: L.NC,
      children: [(0, r.jsx)(d.Button, {
        variant: "primary",
        onClick: b,
        text: D.intl.string(D.t.boqtTA),
        fullWidth: true
      }), (0, r.jsxs)(d.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [c ? (0, r.jsx)(d.Button, {
          icon: d.U1X,
          variant: "secondary",
          onMouseDown: p,
          onClick: h,
          text: D.intl.string(D.t["2QW9nR"]),
          fullWidth: true
        }) : null, (0, r.jsx)(d.Button, {
          icon: d.okO,
          variant: "secondary",
          onClick: f,
          text: D.intl.string(D.t.QAZA5f),
          fullWidth: true
        })]
      })]
    })]
  })
}

function B(e) {
  let {
    sku: t,
    applicationId: n,
    storefront: a,
    onSelectedCarouselItemChange: o,
    isMuted: i,
    trackPDPClick: s
  } = e, [c, d] = l.useState([]), [u, _] = l.useState([]), m = l.useCallback(e => {
    var t;
    let n = u.findIndex(t => t === e);
    null == o || o(null != (t = c[n]) ? t : null)
  }, [o, c, u]);
  return (l.useEffect(() => {
    var e, r, l;
    let [o, i] = function(e, t, n) {
      let r = [],
        l = [];
      if (null == e || 0 === e.length) return [r, l];
      for (let a of e) {
        let e = null != a.assetId ? n[a.assetId] : null;
        null != e && (r.push(a), e.mime_type.startsWith("video/") ? l.push({
          type: "video",
          src: (0, C.YE)(t, e, k.B, "mp4"),
          videoThumbnailSrc: (0, C.YE)(t, e, k.B, "webp"),
          thumbnailSrc: null != a.thumbnailAssetId ? (0, C.YE)(t, a.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != a.backgroundAssetId ? (0, C.YE)(t, a.backgroundAssetId, k.B, x.pV) : true
        }) : l.push({
          type: "image",
          src: (0, C.YE)(t, e, k.B, "webp"),
          thumbnailSrc: null != a.thumbnailAssetId ? (0, C.YE)(t, a.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != a.backgroundAssetId ? (0, C.YE)(t, a.backgroundAssetId, k.B, x.pV) : true
        }))
      }
      return [r, l]
    }(null != (e = null == t || null == (l = t.tenantMetadata) || null == (r = l.socialLayer) ? true : r.carouselItems) ? e : [], n, a.assets);
    d(o), _(i)
  }, [t, a.assets, n]), 0 === u.length) ? null : (0, r.jsx)(k.A, {
    className: L.Dk,
    items: u,
    onItemChange: m,
    isMuted: i,
    onTrackClick: s
  })
}

function F(e) {
  let {
    selectedCarouselItem: t,
    applicationId: n
  } = e;
  if (null == t) return null;
  let l = null != t.labelIconAssetId ? (0, C.YE)(n, t.labelIconAssetId) : null;
  return (0, r.jsxs)("div", {
    className: L.HI,
    children: [null != l && (0, r.jsx)("img", {
      className: L.IX,
      src: l,
      alt: t.label
    }, l), (0, r.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: t.label
    })]
  })
}

function H(e) {
  let {
    onClick: t,
    children: n,
    ariaLabel: l
  } = e;
  return (0, r.jsx)(d.DUT, {
    onClick: t,
    className: L.jU,
    "aria-label": l,
    role: "button",
    children: n
  })
}

function G(e) {
  var t;
  let {
    transitionState: n,
    returnRef: a,
    skuId: i,
    applicationId: m,
    guildId: v,
    isStorefront: x,
    analyticsLocations: S,
    analyticsContext: P,
    onClose: k
  } = e, {
    analyticsLocations: U
  } = (0, b.Ay)(null != S ? S : []), G = (0, c.bG)([E.A], () => E.A.getStorefrontData(v), [v]), W = (0, c.bG)([y.A], () => y.A.isFetchingForSKU(i)), Y = (0, d.Mwr)((0, _.Ay)()), [q, V] = l.useState(true), X = (0, c.bG)([O.A], () => O.A.get(i)), [z, J] = l.useState(null), $ = function(e, t) {
    let n = (null == t ? true : t.labelIconAssetId) != null ? (0, C.YE)(e, null == t ? true : t.labelIconAssetId) : null,
      [r, a] = (0, p.rh)(n, "#000000"),
      i = l.useMemo(() => {
        let e = o()(r).darken(1);
        return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(e.alpha(.25).hex(), " 0%, transparent 100%)")
      }, [r]);
    return null != n && "#000000" !== r ? i : true
  }(m, z);
  (0, g.pE)(), (0, u.Ay)(() => {
    j.default.track(R.HAw.OPEN_MODAL, {
      location_stack: U,
      type: w.Nh,
      sku_id: i,
      application_id: m
    })
  });
  let K = l.useCallback(e => {
    j.default.track(R.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == P ? true : P.sessionId,
      sku_id: i,
      guild_id: null == P ? true : P.guildId,
      cta_type: e,
      location_stack: U
    })
  }, [P, i, U]);
  l.useEffect(() => {
    null == v || null == i || y.A.isFetchingForSKU(i) || (0, A.qf)(v, i)
  }, [v, i]);
  let Q = l.useCallback(() => {
      null != X && (K(N.Jq.FORWARD_BUTTON), (0, I.d)({
        sku: X,
        guildId: v,
        source: "social-layer-storefront-pdp",
        analyticsLocations: U,
        analyticsContext: P
      }))
    }, [X, v, K, U, P]),
    Z = l.useCallback(() => {
      K(N.Jq.WISHLIST_BUTTON)
    }, [K]),
    ee = l.useCallback(() => {
      V(!q), K(N.Jq.MUTE_BUTTON)
    }, [q, K]);
  if (null == (null == X || null == (t = X.tenantMetadata) ? true : t.socialLayer) || (null == G ? true : G.storefront) == null) return W ? (0, r.jsx)(d.y$y, {}) : null;
  let et = null != G.storefront.logoAssetId ? (0, C.YE)(G.storefront.applicationId, G.storefront.logoAssetId, 75) : null,
    en = null != G.storefront.lightThemeLogoAssetId ? (0, C.YE)(G.storefront.applicationId, G.storefront.lightThemeLogoAssetId, 75) : null,
    er = null;
  return er = Y ? null != et ? et : en : null != en ? en : et, (0, r.jsx)(d.EOs, {
    transitionState: n,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: L.CR,
    size: d.rIJ.DYNAMIC,
    returnRef: a,
    children: (0, r.jsxs)(d.$mQ, {
      className: L.jE,
      children: [(0, r.jsxs)("div", {
        className: L.op,
        style: {
          background: $
        },
        children: [(0, r.jsx)("div", {
          className: L.r$,
          children: null != er ? (0, r.jsx)("img", {
            className: L.wm,
            src: er,
            alt: ""
          }) : null
        }), (0, r.jsx)(F, {
          applicationId: m,
          selectedCarouselItem: z
        }), (0, r.jsx)(M, {
          sku: X,
          guildId: v,
          shouldShowShopLink: !x,
          onClose: k,
          trackPDPClick: K
        })]
      }), (0, r.jsxs)("div", {
        className: L.Cf,
        children: [(0, r.jsx)(B, {
          sku: X,
          applicationId: m,
          storefront: G.storefront,
          onSelectedCarouselItemChange: J,
          isMuted: q,
          trackPDPClick: K
        }), (0, r.jsxs)("div", {
          className: L.V7,
          children: [null != X && (0, r.jsx)(h._, {
            skuId: X.id,
            isCardHovered: true,
            className: s()(L.jU, L.ij),
            nuxGraphic: (0, T.N)(X),
            onClick: Z
          }), (0, r.jsx)(H, {
            onClick: Q,
            ariaLabel: D.intl.string(D.t.Ej3B3Y),
            children: (0, r.jsx)(f.A, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, r.jsx)(H, {
            onClick: ee,
            ariaLabel: q ? D.intl.string(D.t.YqAjXy) : D.intl.string(D.t.w4m945),
            children: q ? (0, r.jsx)(d._RO, {
              size: "refresh_sm",
              color: "currentColor"
            }) : (0, r.jsx)(d.HKD, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, r.jsx)(H, {
            onClick: k,
            ariaLabel: D.intl.string(D.t.cpT0Cq),
            children: (0, r.jsx)(d.d$L, {
              size: "refresh_sm",
              color: "currentColor"
            })
          })]
        })]
      })]
    })
  })
}