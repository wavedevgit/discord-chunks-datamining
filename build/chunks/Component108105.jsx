/** Chunk was on 85426 **/
/** chunk id: 108105, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => X
}), require("./896048.js"), require("./321073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  s = require.n(Chunk310784),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function B(e) {
  var t, l, a, s;
  let {
    sku: i,
    guildId: o,
    shouldShowShopLink: c,
    onClose: d,
    trackPDPClick: m
  } = e, h = r.useCallback(() => {
    null != i && (m(P.Jq.BUY_BUTTON), (0, T.a)(i, {
      isGift: false
    }, {
      analyticsLocations: [_.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON]
    }))
  }, [i, m]), p = r.useCallback(() => {
    (0, S.X)({
      guildId: o
    })
  }, [o]), f = r.useCallback(() => {
    m(P.Jq.VISIT_SHOP), (0, S.default)({
      guildId: o
    }), d()
  }, [o, d, m]), g = r.useCallback(() => {
    null != i && (m(P.Jq.GIFT_BUTTON), (0, T.a)(i, {
      isGift: true
    }, {
      analyticsLocations: [_.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON]
    }))
  }, [i, m]);
  if (null == i) return null;
  let b = (0, k.$g)(null != (t = null == (a = i.price) ? true : a.amount) ? t : 0, null != (l = null == (s = i.price) ? true : s.currency) ? l : w.Yr.USD);
  return (0, n.jsxs)("div", {
    className: D.wt,
    children: [(0, n.jsxs)("div", {
      className: D.AX,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-xl/bold",
        color: "text-strong",
        children: i.name
      }), (0, n.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: i.description
      })]
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: b
    }), (0, n.jsxs)("div", {
      className: D.NC,
      children: [(0, n.jsx)(u.Button, {
        variant: "primary",
        onClick: h,
        text: L.intl.string(L.t.boqtTA),
        fullWidth: true
      }), (0, n.jsxs)(u.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [c ? (0, n.jsx)(u.Button, {
          icon: u.U1X,
          variant: "secondary",
          onMouseDown: p,
          onClick: f,
          text: L.intl.string(L.t["2QW9nR"]),
          fullWidth: true
        }) : null, (0, n.jsx)(u.Button, {
          icon: u.okO,
          variant: "secondary",
          onClick: g,
          text: L.intl.string(L.t.QAZA5f),
          fullWidth: true
        })]
      })]
    })]
  })
}

function M(e) {
  let {
    sku: t,
    applicationId: l,
    storefront: a,
    onSelectedCarouselItemChange: s,
    isMuted: i,
    trackPDPClick: o
  } = e, [c, u] = r.useState([]), [d, m] = r.useState([]), _ = r.useCallback(e => {
    var t;
    let l = d.findIndex(t => t === e);
    null == s || s(null != (t = c[l]) ? t : null)
  }, [s, c, d]);
  return (r.useEffect(() => {
    var e, n, r;
    let [s, i] = function(e, t, l) {
      let n = [],
        r = [];
      if (null == e || 0 === e.length) return [n, r];
      for (let a of e) {
        let e = null != a.assetId ? l[a.assetId] : null;
        null != e && (n.push(a), e.mime_type.startsWith("video/") ? r.push({
          type: "video",
          src: (0, v.YE)(t, e, O.B, "mp4"),
          videoThumbnailSrc: (0, v.YE)(t, e, O.B, "webp"),
          thumbnailSrc: null != a.thumbnailAssetId ? (0, v.YE)(t, a.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != a.backgroundAssetId ? (0, v.YE)(t, a.backgroundAssetId, O.B, A.pV) : true
        }) : r.push({
          type: "image",
          src: (0, v.YE)(t, e, O.B, "webp"),
          thumbnailSrc: null != a.thumbnailAssetId ? (0, v.YE)(t, a.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != a.backgroundAssetId ? (0, v.YE)(t, a.backgroundAssetId, O.B, A.pV) : true
        }))
      }
      return [n, r]
    }(null != (e = null == t || null == (r = t.tenantMetadata) || null == (n = r.socialLayer) ? true : n.carouselItems) ? e : [], l, a.assets);
    u(s), m(i)
  }, [t, a.assets, l]), 0 === d.length) ? null : (0, n.jsx)(O.A, {
    className: D.Dk,
    items: d,
    onItemChange: _,
    isMuted: i,
    onTrackClick: o
  })
}

function H(e) {
  let {
    selectedCarouselItem: t,
    applicationId: l
  } = e;
  if (null == t) return null;
  let r = null != t.labelIconAssetId ? (0, v.YE)(l, t.labelIconAssetId) : null;
  return (0, n.jsxs)("div", {
    className: D.HI,
    children: [null != r && (0, n.jsx)("img", {
      className: D.IX,
      src: r,
      alt: t.label
    }, r), (0, n.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: t.label
    })]
  })
}

function Y(e) {
  let {
    onClick: t,
    children: l,
    ariaLabel: r
  } = e;
  return (0, n.jsx)(u.DUT, {
    onClick: t,
    className: D.jU,
    "aria-label": r,
    role: "button",
    children: l
  })
}

function X(e) {
  var t;
  let {
    transitionState: l,
    returnRef: a,
    skuId: i,
    applicationId: _,
    guildId: k,
    isStorefront: A,
    analyticsLocations: S,
    analyticsContext: T,
    onClose: O
  } = e, {
    analyticsLocations: w
  } = (0, h.Ay)(null != S ? S : []), X = (0, c.bG)([E.A], () => E.A.getStorefrontData(k), [k]), q = (0, c.bG)([x.A], () => x.A.isFetchingForSKU(i)), F = (0, u.Mwr)((0, m.Ay)()), [G, J] = r.useState(true), V = (0, c.bG)([C.A], () => C.A.get(i)), [z, W] = r.useState(null), $ = function(e, t) {
    let l = (null == t ? true : t.labelIconAssetId) != null ? (0, v.YE)(e, null == t ? true : t.labelIconAssetId) : null,
      [n, a] = (0, p.rh)(l, "#000000"),
      i = r.useMemo(() => {
        let e = s()(n).darken(1);
        return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(e.alpha(.25).hex(), " 0%, transparent 100%)")
      }, [n]);
    return null != l && "#000000" !== n ? i : true
  }(_, z);
  (0, b.pE)(), (0, d.Ay)(() => {
    j.default.track(R.HAw.OPEN_MODAL, {
      location_stack: w,
      type: U.Nh,
      sku_id: i,
      application_id: _
    })
  });
  let K = r.useCallback(e => {
    j.default.track(R.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == T ? true : T.sessionId,
      sku_id: i,
      guild_id: null == T ? true : T.guildId,
      cta_type: e,
      location_stack: w
    })
  }, [T, i, w]);
  r.useEffect(() => {
    null == k || null == i || x.A.isFetchingForSKU(i) || (0, I.qf)(k, i)
  }, [k, i]);
  let Q = r.useCallback(() => {
      null != V && (K(P.Jq.FORWARD_BUTTON), (0, N.d)({
        sku: V,
        guildId: k,
        source: "social-layer-storefront-pdp",
        analyticsLocations: w,
        analyticsContext: T
      }))
    }, [V, k, K, w, T]),
    Z = r.useCallback(() => {
      K(P.Jq.WISHLIST_BUTTON)
    }, [K]),
    ee = r.useCallback(() => {
      J(!G), K(P.Jq.MUTE_BUTTON)
    }, [G, K]);
  if (null == (null == V || null == (t = V.tenantMetadata) ? true : t.socialLayer) || (null == X ? true : X.storefront) == null) return q ? (0, n.jsx)(u.y$y, {}) : null;
  let et = null != X.storefront.logoAssetId ? (0, v.YE)(X.storefront.applicationId, X.storefront.logoAssetId, 75) : null,
    el = null != X.storefront.lightThemeLogoAssetId ? (0, v.YE)(X.storefront.applicationId, X.storefront.lightThemeLogoAssetId, 75) : null,
    en = null;
  return en = F ? null != et ? et : el : null != el ? el : et, (0, n.jsx)(u.EOs, {
    transitionState: l,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: D.CR,
    size: u.rIJ.DYNAMIC,
    returnRef: a,
    children: (0, n.jsxs)(u.$mQ, {
      className: D.jE,
      children: [(0, n.jsxs)("div", {
        className: D.op,
        style: {
          background: $
        },
        children: [(0, n.jsx)("div", {
          className: D.r$,
          children: null != en ? (0, n.jsx)("img", {
            className: D.wm,
            src: en,
            alt: ""
          }) : null
        }), (0, n.jsx)(H, {
          applicationId: _,
          selectedCarouselItem: z
        }), (0, n.jsx)(B, {
          sku: V,
          guildId: k,
          shouldShowShopLink: !A,
          onClose: O,
          trackPDPClick: K
        })]
      }), (0, n.jsxs)("div", {
        className: D.Cf,
        children: [(0, n.jsx)(M, {
          sku: V,
          applicationId: _,
          storefront: X.storefront,
          onSelectedCarouselItemChange: W,
          isMuted: G,
          trackPDPClick: K
        }), (0, n.jsxs)("div", {
          className: D.V7,
          children: [null != V && (0, n.jsx)(f._, {
            skuId: V.id,
            isCardHovered: true,
            className: o()(D.jU, D.ij),
            nuxGraphic: (0, y.N)(V),
            onClick: Z
          }), (0, n.jsx)(Y, {
            onClick: Q,
            ariaLabel: L.intl.string(L.t.Ej3B3Y),
            children: (0, n.jsx)(g.A, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, n.jsx)(Y, {
            onClick: ee,
            ariaLabel: G ? L.intl.string(L.t.YqAjXy) : L.intl.string(L.t.w4m945),
            children: G ? (0, n.jsx)(u._RO, {
              size: "refresh_sm",
              color: "currentColor"
            }) : (0, n.jsx)(u.HKD, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, n.jsx)(Y, {
            onClick: O,
            ariaLabel: L.intl.string(L.t.cpT0Cq),
            children: (0, n.jsx)(u.d$L, {
              size: "refresh_sm",
              color: "currentColor"
            })
          })]
        })]
      })]
    })
  })
}