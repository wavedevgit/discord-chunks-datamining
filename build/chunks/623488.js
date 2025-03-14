/** Chunk was on 76030 **/
n.d(t, {
  Z: () => h
}), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  l = n(313201),
  s = n(240657),
  c = n(765400),
  d = n(916001),
  u = n(388032),
  p = n(901119);

function m(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: n,
    className: i,
    children: l
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(p.productThumbnailContainer, i),
    children: [l, !t && (0, r.jsxs)("div", {
      className: p.purchaseToUnlockBadge,
      children: [(0, r.jsx)(o.mBM, {
        size: "xs",
        className: p.lockIcon,
        color: "currentColor",
        "aria-hidden": !0
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: p.__invalid_unlockText,
        children: u.NW.string(u.t.YmIiSU)
      })]
    }), n && (0, r.jsx)("div", {
      className: p.draftBadge,
      children: (0, r.jsx)(c.v, {})
    })]
  })
}

function f(e) {
  let {
    onShowFullDescription: t,
    variant: n
  } = e, i = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Text, {
      variant: n,
      color: null != t ? "text-link" : "interactive-hover",
      children: u.NW.string(u.t["5fmYjY"])
    }), (0, r.jsx)(o.ZSh, {
      size: "xs",
      color: "currentColor",
      className: p.arrowIcon
    })]
  });
  return null == t ? (0, r.jsx)("div", {
    className: p.showMoreButton,
    children: i
  }) : (0, r.jsx)(o.P3F, {
    className: a()(p.showMoreButton, p.hasAction),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
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
    ctaComponent: g,
    shouldShowFullDescriptionButton: _ = !0,
    onShowFullDescription: b,
    productType: v,
    onTapCard: y,
    actionMenu: x,
    showOpaqueBackground: E = !1,
    hideRoleTag: O = !1,
    lineClamp: j = 1,
    cardWidth: N = 332,
    cardHeight: C,
    thumbnailHeight: I = 187,
    descriptionTextVariant: S = "text-sm/normal",
    isDraft: T = !1
  } = e, P = (0, l.hQ)(), A = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m, {
      showDraftBadge: T,
      hidePurchaseToUnlockBadge: !0,
      children: (0, r.jsx)("img", {
        alt: "",
        src: t,
        className: p.productThumbnail,
        style: {
          height: I
        }
      })
    }), (0, r.jsxs)("div", {
      className: p.productDetails,
      children: [(0, r.jsxs)("div", {
        className: p.productDetailContent,
        children: [(0, r.jsx)(o.X6q, {
          variant: "text-md/medium",
          color: "header-primary",
          className: p.productName,
          id: P,
          children: n
        }), (0, r.jsx)(o.Rny, {
          children: (0, r.jsx)(s.Z, {
            variant: S,
            color: "text-muted",
            lineClamp: j,
            text: i
          })
        }), _ && (0, r.jsx)(f, {
          onShowFullDescription: b,
          variant: S
        }), O || null == h || "" === h.name ? null : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.LZC, {
            size: 16
          }), (0, r.jsx)(d.Z, {
            role: h
          })]
        })]
      }), x]
    }), (0, r.jsxs)("div", {
      className: p.purchaseDetails,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "interactive-active",
        className: p.__invalid_productPrice,
        children: null != c ? c : u.NW.string(u.t["4uLhAg"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-xxs/normal",
        color: "text-normal",
        className: p.__invalid_productType,
        children: v
      }), (0, r.jsx)("div", {
        className: p.productActionButton,
        onClick: e => {
          e.stopPropagation()
        },
        children: g
      })]
    })]
  });
  return null == y ? (0, r.jsx)("article", {
    className: a()(p.productCard, E ? p.opaqueBackground : p.solidBackground),
    "aria-labelledby": P,
    children: A
  }) : (0, r.jsx)("div", {
    style: {
      width: N,
      height: C
    },
    children: (0, r.jsx)(o.kL8, {
      tag: "article",
      "aria-label": u.NW.formatToPlainString(u.t["e+TmJS"], {
        productName: n
      }),
      className: a()(p.productCard, E ? p.opaqueBackground : p.solidBackground, p.cardClickableContainer),
      onClick: y,
      children: A
    })
  })
}