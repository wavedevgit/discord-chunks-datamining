/** Chunk was on 73628 **/
r.d(t, {
  Z: () => h
}), r(953529);
var n = r(255367);
r(73800);
var i = r(120356),
  a = r.n(i),
  l = r(481060),
  o = r(313201),
  A = r(240657),
  s = r(765400),
  c = r(916001),
  d = r(388032),
  u = r(940792);

function f(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: r,
    className: i,
    children: o
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(u.productThumbnailContainer, i),
    children: [o, !t && (0, n.jsxs)("div", {
      className: u.purchaseToUnlockBadge,
      children: [(0, n.jsx)(l.mBM, {
        size: "xs",
        className: u.lockIcon,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: u.__invalid_unlockText,
        children: d.intl.string(d.t.YmIiSU)
      })]
    }), r && (0, n.jsx)("div", {
      className: u.draftBadge,
      children: (0, n.jsx)(s.v, {})
    })]
  })
}

function g(e) {
  let {
    onShowFullDescription: t,
    variant: r
  } = e, i = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Text, {
      variant: r,
      color: null != t ? "text-link" : "interactive-hover",
      children: d.intl.string(d.t["5fmYjY"])
    }), (0, n.jsx)(l.ZSh, {
      size: "xs",
      color: "currentColor",
      className: u.arrowIcon
    })]
  });
  return null == t ? (0, n.jsx)("div", {
    className: u.showMoreButton,
    children: i
  }) : (0, n.jsx)(l.P3F, {
    className: a()(u.showMoreButton, u.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: i
  })
}

function h(e) {
  let {
    imageUrl: t,
    name: r,
    description: i,
    formattedPrice: s,
    role: h,
    ctaComponent: p,
    shouldShowFullDescriptionButton: m = !0,
    onShowFullDescription: b,
    productType: v,
    onTapCard: C,
    actionMenu: x,
    showOpaqueBackground: q = !1,
    hideRoleTag: j = !1,
    lineClamp: O = 1,
    cardWidth: P = 332,
    cardHeight: y,
    thumbnailHeight: U = 187,
    descriptionTextVariant: V = "text-sm/normal",
    isDraft: N = !1
  } = e, I = (0, o.hQ)(), T = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(f, {
      showDraftBadge: N,
      hidePurchaseToUnlockBadge: !0,
      children: (0, n.jsx)("img", {
        alt: "",
        src: t,
        className: u.productThumbnail,
        style: {
          height: U
        }
      })
    }), (0, n.jsxs)("div", {
      className: u.productDetails,
      children: [(0, n.jsxs)("div", {
        className: u.productDetailContent,
        children: [(0, n.jsx)(l.X6q, {
          variant: "text-md/medium",
          color: "header-primary",
          className: u.productName,
          id: I,
          children: r
        }), (0, n.jsx)(l.Rny, {
          children: (0, n.jsx)(A.Z, {
            variant: V,
            color: "text-muted",
            lineClamp: O,
            text: i
          })
        }), m && (0, n.jsx)(g, {
          onShowFullDescription: b,
          variant: V
        }), j || null == h || "" === h.name ? null : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(l.LZC, {
            size: 16
          }), (0, n.jsx)(c.Z, {
            role: h
          })]
        })]
      }), x]
    }), (0, n.jsxs)("div", {
      className: u.purchaseDetails,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: u.__invalid_productPrice,
        children: null != s ? s : d.intl.string(d.t["4uLhAg"])
      }), (0, n.jsx)(l.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: u.__invalid_productType,
        children: v
      }), (0, n.jsx)("div", {
        className: u.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: p
      })]
    })]
  });
  return null == C ? (0, n.jsx)("article", {
    className: a()(u.productCard, q ? u.opaqueBackground : u.solidBackground),
    "aria-labelledby": I,
    children: T
  }) : (0, n.jsx)("div", {
    style: {
      width: P,
      height: y
    },
    children: (0, n.jsx)(l.kL8, {
      tag: "article",
      "aria-label": d.intl.formatToPlainString(d.t["e+TmJS"], {
        productName: r
      }),
      className: a()(u.productCard, q ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
      onClick: C,
      children: T
    })
  })
}