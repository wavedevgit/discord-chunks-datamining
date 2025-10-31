/** Chunk was on 84802 **/
/** chunk id: 250317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk572004 = require("./572004.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk164670 = require("./164670.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk242723 = require("./242723.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk939716 = require("./939716.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk424215 = require("./424215.js");

function P(e) {
  var t, n, r, l;
  let {
    sku: s,
    guildId: c,
    shouldShowShopLink: u,
    onClose: m
  } = e;
  if (null == s) return null;
  let p = (0, d.T4)(null != (r = null == (t = s.price) ? true : t.amount) ? r : 0, null != (l = null == (n = s.price) ? true : n.currency) ? l : x.pK.USD);
  return (0, a.jsxs)("div", {
    className: I.detailsContainer,
    children: [(0, a.jsxs)("div", {
      className: I.titleDescriptionContainer,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        lineClamp: 2,
        children: s.name
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: s.description
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: p
    }), (0, a.jsxs)("div", {
      className: I.buttonsContainer,
      children: [(0, a.jsx)(i.Button, {
        variant: "primary",
        onClick: () => {
          (0, b.P)(s, {
            isGift: false
          })
        },
        text: v.intl.string(v.t.boqtTA),
        fullWidth: true
      }), (0, a.jsxs)(i.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [u ? (0, a.jsx)(i.Button, {
          icon: i.EOn,
          variant: "secondary",
          onClick: () => {
            (0, o.uL)(f.Z5c.CHANNELS_GAME_SHOP(c)), m()
          },
          text: v.intl.string(v.t["2QW9nR"]),
          fullWidth: true
        }) : null, (0, a.jsx)(i.Button, {
          icon: i.OgN,
          variant: "secondary",
          onClick: () => {
            (0, b.P)(s, {
              isGift: true
            })
          },
          text: v.intl.string(v.t.QAZA5f),
          fullWidth: true
        })]
      })]
    })]
  })
}

function j(e) {
  var t, n, r;
  let {
    sku: l,
    applicationId: i,
    storefront: o
  } = e;
  if (null == l) return null;
  let s = null == (n = l.tenantMetadata) || null == (t = n.socialLayer) ? true : t.carouselItems;
  if (null == s || 0 === s.length) return null;
  let c = (r = o.assets, null == s || 0 === s.length ? [] : s.map(e => {
    let t = null != e.assetId ? r[e.assetId] : null;
    return null == t ? null : t.mime_type.startsWith("video/") ? {
      type: "video",
      src: (0, m._W)(i, t, _.Q, "mp4"),
      videoThumbnailSrc: (0, m._W)(i, t, _.Q, "webp"),
      thumbnailSrc: null != e.thumbnailAssetId ? (0, m._W)(i, e.thumbnailAssetId, _.Q, "webp") : true,
      backgroundSrc: null != e.backgroundAssetId ? (0, m._W)(i, e.backgroundAssetId, _.Q, "webp") : true
    } : {
      type: "image",
      src: (0, m._W)(i, t, _.Q, "webp"),
      thumbnailSrc: null != e.thumbnailAssetId ? (0, m._W)(i, e.thumbnailAssetId, _.Q, "webp") : true,
      backgroundSrc: null != e.backgroundAssetId ? (0, m._W)(i, e.backgroundAssetId, _.Q, "webp") : true
    }
  }).filter(e => null != e));
  return 0 === c.length ? null : (0, a.jsx)(_.Z, {
    className: I.carousel,
    items: c
  })
}

function k(e) {
  let {
    socialLayerTenantMetadata: t,
    selectedCarouselItemIndex: n,
    applicationId: r
  } = e;
  if (null == t || t.carouselItems.length <= n) return null;
  let l = t.carouselItems[n];
  if (null == l) return null;
  let o = null != l.labelIconAssetId ? (0, m._W)(r, l.labelIconAssetId) : null;
  return (0, a.jsxs)("div", {
    className: I.labelIconContainer,
    children: [null != o && (0, a.jsx)("img", {
      className: I.labelIcon,
      src: o,
      alt: l.label
    }), (0, a.jsx)(i.Text, {
      variant: "text-xs/medium",
      color: "text-primary",
      children: l.label
    })]
  })
}

function S(e) {
  let {
    onClick: t,
    children: n,
    ariaLabel: r
  } = e;
  return (0, a.jsx)(i.P3F, {
    onClick: t,
    className: I.modalHeaderButton,
    "aria-label": r,
    role: "button",
    children: n
  })
}

function y(e) {
  var t, n;
  let {
    transitionState: o,
    returnRef: d,
    skuId: m,
    applicationId: b,
    guildId: _,
    isStorefront: f,
    onClose: x
  } = e, y = (0, l.e7)([h.Z], () => h.Z.getStorefrontData(_), [_]), N = (0, l.e7)([c.Z], () => c.Z.isFetchingForSKU(m)), w = (0, l.e7)([s.Z], () => s.Z.get(m)), [O, E] = r.useState(0);
  (0, C.p)(), r.useEffect(() => {
    null == _ || null == m || c.Z.isFetchingForSKU(m) || (0, g.y)(_, m)
  }, [_, m]);
  let R = r.useCallback(() => {
    null != w && (0, u.JG)((0, p.wQ)(_, w), () => (0, i.showToast)((0, i.createToast)(v.intl.string(v.t["L/PwZf"]), i.ToastType.SUCCESS)))
  }, [_, w]);
  return null == (null == w || null == (t = w.tenantMetadata) ? true : t.socialLayer) || (null == y ? true : y.storefront) == null ? N ? (0, a.jsx)(i.$jN, {}) : null : (0, a.jsx)(i.Y0X, {
    transitionState: o,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: I.modalRoot,
    size: i.CgR.DYNAMIC,
    returnRef: d,
    children: (0, a.jsxs)(i.hzk, {
      className: I.modalContent,
      children: [(0, a.jsxs)("div", {
        className: I.infoContainer,
        children: [(0, a.jsx)(k, {
          applicationId: b,
          socialLayerTenantMetadata: null == w || null == (n = w.tenantMetadata) ? true : n.socialLayer,
          selectedCarouselItemIndex: O
        }), (0, a.jsx)(P, {
          sku: w,
          guildId: _,
          shouldShowShopLink: !f,
          onClose: x
        })]
      }), (0, a.jsxs)("div", {
        className: I.carouselContainer,
        children: [(0, a.jsx)(j, {
          sku: w,
          applicationId: b,
          storefront: y.storefront
        }), (0, a.jsxs)("div", {
          className: I.modalHeaderButtonsContainer,
          children: [(0, a.jsx)(S, {
            onClick: R,
            ariaLabel: v.intl.string(v.t.Ej3B3Y),
            children: (0, a.jsx)(i.xPt, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), (0, a.jsx)(S, {
            onClick: x,
            ariaLabel: v.intl.string(v.t.cpT0Cq),
            children: (0, a.jsx)(i.Uz9, {
              size: "refresh_sm",
              color: "currentColor"
            })
          })]
        })]
      })]
    })
  })
}