/** Chunk was on 73628 **/
n.d(t, {
  Z: () => p
}), n(953529);
var r = n(255367);
n(73800);
var A = n(120356),
  a = n.n(A),
  l = n(481060),
  o = n(313201),
  i = n(240657),
  s = n(765400),
  c = n(916001),
  d = n(388032),
  u = n(940792);

function g(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: n,
    className: A,
    children: o
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(u.productThumbnailContainer, A),
    children: [o, !t && (0, r.jsxs)("div", {
      className: u.purchaseToUnlockBadge,
      children: [(0, r.jsx)(l.mBM, {
        size: "xs",
        className: u.lockIcon,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: u.__invalid_unlockText,
        children: d.intl.string(d.t.YmIiSU)
      })]
    }), n && (0, r.jsx)("div", {
      className: u.draftBadge,
      children: (0, r.jsx)(s.v, {})
    })]
  })
}

function f(e) {
  let {
    onShowFullDescription: t,
    variant: n
  } = e, A = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Text, {
      variant: n,
      color: null != t ? "text-link" : "interactive-hover",
      children: d.intl.string(d.t["5fmYjY"])
    }), (0, r.jsx)(l.ZSh, {
      size: "xs",
      color: "currentColor",
      className: u.arrowIcon
    })]
  });
  return null == t ? (0, r.jsx)("div", {
    className: u.showMoreButton,
    children: A
  }) : (0, r.jsx)(l.P3F, {
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
    name: n,
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
    descriptionTextVariant: y = "text-sm/normal",
    isDraft: N = !1
  } = e, I = (0, o.hQ)(), T = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g, {
      showDraftBadge: N,
      hidePurchaseToUnlockBadge: !0,
      children: (0, r.jsx)("img", {
        alt: "",
        src: t,
        className: u.productThumbnail,
        style: {
          height: V
        }
      })
    }), (0, r.jsxs)("div", {
      className: u.productDetails,
      children: [(0, r.jsxs)("div", {
        className: u.productDetailContent,
        children: [(0, r.jsx)(l.X6q, {
          variant: "text-md/medium",
          color: "header-primary",
          className: u.productName,
          id: I,
          children: n
        }), (0, r.jsx)(l.Rny, {
          children: (0, r.jsx)(i.Z, {
            variant: y,
            color: "text-muted",
            lineClamp: O,
            text: A
          })
        }), h && (0, r.jsx)(f, {
          onShowFullDescription: b,
          variant: y
        }), j || null == p || "" === p.name ? null : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(l.LZC, {
            size: 16
          }), (0, r.jsx)(c.Z, {
            role: p
          })]
        })]
      }), q]
    }), (0, r.jsxs)("div", {
      className: u.purchaseDetails,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: u.__invalid_productPrice,
        children: null != s ? s : d.intl.string(d.t["4uLhAg"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: u.__invalid_productType,
        children: v
      }), (0, r.jsx)("div", {
        className: u.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: m
      })]
    })]
  });
  return null == C ? (0, r.jsx)("article", {
    className: a()(u.productCard, x ? u.opaqueBackground : u.solidBackground),
    "aria-labelledby": I,
    children: T
  }) : (0, r.jsx)("div", {
    style: {
      width: U,
      height: P
    },
    children: (0, r.jsx)(l.kL8, {
      tag: "article",
      "aria-label": d.intl.formatToPlainString(d.t["e+TmJS"], {
        productName: n
      }),
      className: a()(u.productCard, x ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
      onClick: C,
      children: T
    })
  })
}