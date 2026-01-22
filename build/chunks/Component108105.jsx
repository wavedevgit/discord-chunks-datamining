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
  i = require.n(Chunk503698),
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
  var t, l, r, s;
  let {
    sku: c,
    guildId: i,
    shouldShowShopLink: o,
    onClose: d,
    trackPDPClick: b
  } = e, f = a.useCallback(() => {
    null != c && (b(U.Jq.BUY_BUTTON), (0, T.a)(c, {
      isGift: false
    }, {
      analyticsLocations: [h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_PURCHASE_BUTTON]
    }))
  }, [c, b]), p = a.useCallback(() => {
    (0, S.X)({
      guildId: i
    })
  }, [i]), m = a.useCallback(() => {
    b(U.Jq.VISIT_SHOP), (0, S.default)({
      guildId: i
    }), d()
  }, [i, d, b]), g = a.useCallback(() => {
    null != c && (b(U.Jq.GIFT_BUTTON), (0, T.a)(c, {
      isGift: true
    }, {
      analyticsLocations: [h.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_GIFT_BUTTON]
    }))
  }, [c, b]);
  if (null == c) return null;
  let C = (0, _.$g)(null != (t = null == (r = c.price) ? true : r.amount) ? t : 0, null != (l = null == (s = c.price) ? true : s.currency) ? l : L.Yr.USD);
  return (0, n.jsxs)("div", {
    className: w.wt,
    children: [(0, n.jsxs)("div", {
      className: w.AX,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-xl/bold",
        color: "text-strong",
        children: c.name
      }), (0, n.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: c.description
      })]
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      color: "text-strong",
      children: C
    }), (0, n.jsxs)("div", {
      className: w.NC,
      children: [(0, n.jsx)(u.Button, {
        variant: "primary",
        onClick: f,
        text: D.intl.string(D.t.boqtTA),
        fullWidth: true
      }), (0, n.jsxs)(u.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [o ? (0, n.jsx)(u.Button, {
          icon: u.U1X,
          variant: "secondary",
          onMouseDown: p,
          onClick: m,
          text: D.intl.string(D.t["2QW9nR"]),
          fullWidth: true
        }) : null, (0, n.jsx)(u.Button, {
          icon: u.okO,
          variant: "secondary",
          onClick: g,
          text: D.intl.string(D.t.QAZA5f),
          fullWidth: true
        })]
      })]
    })]
  })
}

function Y(e) {
  let {
    sku: t,
    applicationId: l,
    storefront: r,
    onSelectedCarouselItemChange: s,
    isMuted: c,
    trackPDPClick: i
  } = e, [o, u] = a.useState([]), [d, b] = a.useState([]), h = a.useCallback(e => {
    var t;
    let l = d.findIndex(t => t === e);
    null == s || s(null != (t = o[l]) ? t : null)
  }, [s, o, d]);
  return (a.useEffect(() => {
    var e, n, a;
    let [s, c] = function(e, t, l) {
      let n = [],
        a = [];
      if (null == e || 0 === e.length) return [n, a];
      for (let r of e) {
        let e = null != r.assetId ? l[r.assetId] : null;
        null != e && (n.push(r), e.mime_type.startsWith("video/") ? a.push({
          type: "video",
          src: (0, A.YE)(t, e, O.B, "mp4"),
          videoThumbnailSrc: (0, A.YE)(t, e, O.B, "webp"),
          thumbnailSrc: null != r.thumbnailAssetId ? (0, A.YE)(t, r.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != r.backgroundAssetId ? (0, A.YE)(t, r.backgroundAssetId, O.B, v.pV) : true
        }) : a.push({
          type: "image",
          src: (0, A.YE)(t, e, O.B, "webp"),
          thumbnailSrc: null != r.thumbnailAssetId ? (0, A.YE)(t, r.thumbnailAssetId, 112, "webp") : true,
          backgroundSrc: null != r.backgroundAssetId ? (0, A.YE)(t, r.backgroundAssetId, O.B, v.pV) : true
        }))
      }
      return [n, a]
    }(null != (e = null == t || null == (a = t.tenantMetadata) || null == (n = a.socialLayer) ? true : n.carouselItems) ? e : [], l, r.assets);
    u(s), b(c)
  }, [t, r.assets, l]), 0 === d.length) ? null : (0, n.jsx)(O.A, {
    className: w.Dk,
    items: d,
    onItemChange: h,
    isMuted: c,
    onTrackClick: i
  })
}

function B(e) {
  let {
    selectedCarouselItem: t,
    applicationId: l
  } = e;
  if (null == t) return null;
  let a = null != t.labelIconAssetId ? (0, A.YE)(l, t.labelIconAssetId) : null;
  return (0, n.jsxs)("div", {
    className: w.HI,
    children: [null != a && (0, n.jsx)("img", {
      className: w.IX,
      src: a,
      alt: t.label
    }, a), (0, n.jsx)(u.Text, {
      variant: "text-xs/medium",
      color: "text-strong",
      children: t.label
    })]
  })
}

function H(e) {
  let {
    onClick: t,
    children: l,
    ariaLabel: a
  } = e;
  return (0, n.jsx)(u.DUT, {
    onClick: t,
    className: w.jU,
    "aria-label": a,
    role: "button",
    children: l
  })
}

function X(e) {
  var t;
  let {
    transitionState: l,
    returnRef: r,
    skuId: c,
    applicationId: h,
    guildId: _,
    isStorefront: v,
    analyticsLocations: S,
    analyticsContext: T,
    onClose: O
  } = e, {
    analyticsLocations: L
  } = (0, f.Ay)(null != S ? S : []), X = (0, o.bG)([I.A], () => I.A.getStorefrontData(_), [_]), q = (0, o.bG)([j.A], () => j.A.isFetchingForSKU(c)), F = (0, u.Mwr)((0, b.Ay)()), [G, J] = a.useState(true), V = (0, o.bG)([x.A], () => x.A.get(c)), [z, W] = a.useState(null), $ = function(e, t) {
    let l = (null == t ? true : t.labelIconAssetId) != null ? (0, A.YE)(e, null == t ? true : t.labelIconAssetId) : null,
      [n, r] = (0, p.rh)(l, "#000000"),
      c = a.useMemo(() => {
        let e = s()(n).darken(1);
        return "radial-gradient(181.07% 122.33% at -20.89% -23.8%, ".concat(e.alpha(.25).hex(), " 0%, transparent 100%)")
      }, [n]);
    return null != l && "#000000" !== n ? c : true
  }(h, z);
  (0, C.pE)(), (0, d.Ay)(() => {
    k.default.track(R.HAw.OPEN_MODAL, {
      location_stack: L,
      type: P.Nh,
      sku_id: c,
      application_id: h
    })
  });
  let K = a.useCallback(e => {
    k.default.track(R.HAw.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, {
      slayer_storefront_session_id: null == T ? true : T.sessionId,
      sku_id: c,
      guild_id: null == T ? true : T.guildId,
      cta_type: e,
      location_stack: L
    })
  }, [T, c, L]);
  a.useEffect(() => {
    null == _ || null == c || j.A.isFetchingForSKU(c) || (0, E.qf)(_, c)
  }, [_, c]);
  let Q = a.useCallback(() => {
      null != V && (K(U.Jq.FORWARD_BUTTON), (0, N.d)({
        sku: V,
        guildId: _,
        source: "social-layer-storefront-pdp",
        analyticsLocations: L,
        analyticsContext: T
      }))
    }, [V, _, K, L, T]),
    Z = a.useCallback(() => {
      K(U.Jq.WISHLIST_BUTTON)
    }, [K]),
    ee = a.useCallback(() => {
      J(!G), K(U.Jq.MUTE_BUTTON)
    }, [G, K]);
  if (null == (null == V || null == (t = V.tenantMetadata) ? true : t.socialLayer) || (null == X ? true : X.storefront) == null) return q ? (0, n.jsx)(u.y$y, {}) : null;
  let et = null != X.storefront.logoAssetId ? (0, A.YE)(X.storefront.applicationId, X.storefront.logoAssetId, 75) : null,
    el = null != X.storefront.lightThemeLogoAssetId ? (0, A.YE)(X.storefront.applicationId, X.storefront.lightThemeLogoAssetId, 75) : null,
    en = null;
  return en = F ? null != et ? et : el : null != el ? el : et, (0, n.jsx)(u.EOs, {
    transitionState: l,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: w.CR,
    size: u.rIJ.DYNAMIC,
    returnRef: r,
    children: (0, n.jsxs)(u.$mQ, {
      className: w.jE,
      children: [(0, n.jsxs)("div", {
        className: w.op,
        style: {
          background: $
        },
        children: [(0, n.jsx)("div", {
          className: w.r$,
          children: null != en ? (0, n.jsx)("img", {
            className: w.wm,
            src: en,
            alt: ""
          }) : null
        }), (0, n.jsx)(B, {
          applicationId: h,
          selectedCarouselItem: z
        }), (0, n.jsx)(M, {
          sku: V,
          guildId: _,
          shouldShowShopLink: !v,
          onClose: O,
          trackPDPClick: K
        })]
      }), (0, n.jsxs)("div", {
        className: w.Cf,
        children: [(0, n.jsx)(Y, {
          sku: V,
          applicationId: h,
          storefront: X.storefront,
          onSelectedCarouselItemChange: W,
          isMuted: G,
          trackPDPClick: K
        }), (0, n.jsxs)("div", {
          className: w.V7,
          children: [null != V && (0, n.jsx)(m._, {
            skuId: V.id,
            isCardHovered: true,
            className: i()(w.jU, w.ij),
            nuxGraphic: (0, y.N)(V),
            onClick: Z
          }), (0, n.jsx)(H, {
            onClick: Q,
            ariaLabel: D.intl.string(D.t.Ej3B3Y),
            children: (0, n.jsx)(g.A, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, n.jsx)(H, {
            onClick: ee,
            ariaLabel: G ? D.intl.string(D.t.YqAjXy) : D.intl.string(D.t.w4m945),
            children: G ? (0, n.jsx)(u._RO, {
              size: "refresh_sm",
              color: "currentColor"
            }) : (0, n.jsx)(u.HKD, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, n.jsx)(H, {
            onClick: O,
            ariaLabel: D.intl.string(D.t.cpT0Cq),
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