/** Chunk was on 73628 **/
r.d(t, {
  Z: () => p
}), r(953529);
var n = r(255367);
r(73800);
var A = r(120356),
  a = r.n(A),
  l = r(481060),
  o = r(313201),
  i = r(240657),
  s = r(765400),
  c = r(916001),
  d = r(388032),
  u = r(243668);

function g(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: r,
    className: A,
    children: o
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(u.productThumbnailContainer, A),
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

function f(e) {
  let {
    onShowFullDescription: t,
    variant: r
  } = e, A = (0, n.jsxs)(n.Fragment, {
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
    children: A
  }) : (0, n.jsx)(l.P3F, {
    className: a()(u.showMoreButton, u.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: A
  })
}

function p(e) {
  let {
    imageUrl: t,
    name: r,
    description: A,
    formattedPrice: s,
    role: p,
    ctaComponent: m,
    shouldShowFullDescriptionButton: h = !0,
    onShowFullDescription: b,
    productType: v,
    onTapCard: C,
    actionMenu: q,
    showOpaqueBackground: x = !1,
    hideRoleTag: j = !1,
    lineClamp: O = 1,
    cardWidth: U = 332,
    cardHeight: P,
    thumbnailHeight: V = 187,
    descriptionTextVariant: N = "text-sm/normal",
    isDraft: y = !1
  } = e, I = (0, o.hQ)(), T = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(g, {
      showDraftBadge: y,
      hidePurchaseToUnlockBadge: !0,
      children: (0, n.jsx)("img", {
        alt: "",
        src: t,
        className: u.productThumbnail,
        style: {
          height: V
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
          children: (0, n.jsx)(i.Z, {
            variant: N,
            color: "text-muted",
            lineClamp: O,
            text: A
          })
        }), h && (0, n.jsx)(f, {
          onShowFullDescription: b,
          variant: N
        }), j || null == p || "" === p.name ? null : (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(l.LZC, {
            size: 16
          }), (0, n.jsx)(c.Z, {
            role: p
          })]
        })]
      }), q]
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
        children: m
      })]
    })]
  });
  return null == C ? (0, n.jsx)("article", {
    className: a()(u.productCard, x ? u.opaqueBackground : u.solidBackground),
    "aria-labelledby": I,
    children: T
  }) : (0, n.jsx)("div", {
    style: {
      width: U,
      height: P
    },
    children: (0, n.jsx)(l.kL8, {
      tag: "article",
      "aria-label": d.intl.formatToPlainString(d.t["e+TmJS"], {
        productName: r
      }),
      className: a()(u.productCard, x ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
      onClick: C,
      children: T
    })
  })
}