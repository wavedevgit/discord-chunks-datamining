/** Chunk was on web.js **/
/** chunk id: 623488, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk240657 = require("./240657.jsx"),
  Chunk765400 = require("./765400.jsx"),
  Chunk916001 = require("./916001.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk833398 = require("./833398.js");

function _(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: n,
    className: i,
    children: s
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(f.productThumbnailContainer, i),
    children: [s, !t && (0, r.jsxs)("div", {
      className: f.purchaseToUnlockBadge,
      children: [(0, r.jsx)(o.mBM, {
        size: "xs",
        className: f.lockIcon,
        color: "currentColor",
        "aria-hidden": true
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: f.__invalid_unlockText,
        children: d.intl.string(d.t.YmIiSe)
      })]
    }), n && (0, r.jsx)("div", {
      className: f.draftBadge,
      children: (0, r.jsx)(c.v, {})
    })]
  })
}

function p(e) {
  let {
    onShowFullDescription: t,
    variant: n
  } = e, i = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Text, {
      variant: n,
      color: null != t ? "text-link" : "interactive-hover",
      children: d.intl.string(d.t["5fmYjW"])
    }), (0, r.jsx)(o.ZSh, {
      size: "xs",
      color: "currentColor",
      className: f.arrowIcon
    })]
  }), s = e => {
    e.stopPropagation(), null != t && t()
  };
  return null == t ? (0, r.jsx)("div", {
    className: f.showMoreButton,
    children: i
  }) : (0, r.jsx)(o.P3F, {
    className: a()(f.showMoreButton, f.hasAction),
    onClick: s,
    children: i
  })
}

function h(e) {
  let {
    imageUrl: t,
    name: n,
    description: i,
    formattedPrice: c,
    role: h,
    ctaComponent: m,
    shouldShowFullDescriptionButton: g = true,
    onShowFullDescription: E,
    productType: b,
    onTapCard: y,
    actionMenu: O,
    showOpaqueBackground: v = false,
    hideRoleTag: I = false,
    lineClamp: T = 1,
    cardWidth: S = 332,
    cardHeight: A,
    thumbnailHeight: C = 187,
    descriptionTextVariant: N = "text-sm/normal",
    isDraft: R = false
  } = e, P = (0, s.hQ)(), D = e => {
    e.stopPropagation()
  }, w = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_, {
      showDraftBadge: R,
      hidePurchaseToUnlockBadge: true,
      children: (0, r.jsx)("img", {
        alt: "",
        src: t,
        className: f.productThumbnail,
        style: {
          height: C
        }
      })
    }), (0, r.jsxs)("div", {
      className: f.productDetails,
      children: [(0, r.jsxs)("div", {
        className: f.productDetailContent,
        children: [(0, r.jsx)(o.Heading, {
          variant: "text-md/medium",
          color: "header-primary",
          className: f.productName,
          id: P,
          children: n
        }), (0, r.jsx)(o.Rny, {
          children: (0, r.jsx)(l.Z, {
            variant: N,
            color: "text-muted",
            lineClamp: T,
            text: i
          })
        }), g && (0, r.jsx)(p, {
          onShowFullDescription: E,
          variant: N
        }), I || null == h || "" === h.name ? null : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.LZC, {
            size: 16
          }), (0, r.jsx)(u.Z, {
            role: h
          })]
        })]
      }), O]
    }), (0, r.jsxs)("div", {
      className: f.purchaseDetails,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: f.__invalid_productPrice,
        children: null != c ? c : d.intl.string(d.t["4uLhAp"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-xxs/normal",
        color: "text-default",
        className: f.__invalid_productType,
        children: b
      }), (0, r.jsx)("div", {
        className: f.productActionButton,
        onClick: D,
        children: m
      })]
    })]
  });
  return null == y ? (0, r.jsx)("article", {
    className: a()(f.productCard, v ? f.opaqueBackground : f.solidBackground),
    "aria-labelledby": P,
    children: w
  }) : (0, r.jsx)("div", {
    style: {
      width: S,
      height: A
    },
    children: (0, r.jsx)(o.kL8, {
      tag: "article",
      "aria-label": d.intl.formatToPlainString(d.t["e+TmJa"], {
        productName: n
      }),
      className: a()(f.productCard, v ? f.opaqueBackground : f.solidBackground, f.cardClickableContainer),
      onClick: y,
      children: w
    })
  })
}