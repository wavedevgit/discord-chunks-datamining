/** Chunk was on 9753 **/
/** chunk id: 500770, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk308234 = require("./308234.jsx"),
  Chunk724609 = require("./724609.jsx"),
  Chunk411342 = require("./411342.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk721960 = require("./721960.js");

function m(e) {
  let {
    hidePurchaseToUnlockBadge: t,
    showDraftBadge: n,
    className: i,
    children: s
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(p.v0, i),
    children: [s, !t && (0, r.jsxs)("div", {
      className: p.su,
      children: [(0, r.jsx)(a.XAi, {
        size: "xs",
        className: p.hz,
        color: "currentColor",
        "aria-hidden": true
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "always-white",
        className: p.__invalid_unlockText,
        children: d.intl.string(d.t.YmIiSe)
      })]
    }), n && (0, r.jsx)("div", {
      className: p.vW,
      children: (0, r.jsx)(c.k, {})
    })]
  })
}

function f(e) {
  let {
    onShowFullDescription: t,
    variant: n
  } = e, i = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Text, {
      variant: n,
      color: null != t ? "text-link" : "interactive-text-hover",
      children: d.intl.string(d.t["5fmYjW"])
    }), (0, r.jsx)(a.EdP, {
      size: "xs",
      color: "currentColor",
      className: p.D6
    })]
  });
  return null == t ? (0, r.jsx)("div", {
    className: p.dO,
    children: i
  }) : (0, r.jsx)(a.DUT, {
    className: l()(p.dO, p.hY),
    onClick: e => {
      e.stopPropagation(), null != t && t()
    },
    children: i
  })
}

function g(e) {
  let {
    imageUrl: t,
    name: n,
    description: i,
    formattedPrice: c,
    role: g,
    ctaComponent: _,
    shouldShowFullDescriptionButton: h = true,
    onShowFullDescription: b,
    productType: y,
    onTapCard: A,
    actionMenu: v,
    showOpaqueBackground: O = false,
    hideRoleTag: x = false,
    lineClamp: E = 1,
    cardWidth: j = 332,
    cardHeight: C,
    thumbnailHeight: I = 187,
    descriptionTextVariant: S = "text-sm/normal",
    isDraft: T = false
  } = e, N = (0, s.Ld)(), P = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m, {
      showDraftBadge: T,
      hidePurchaseToUnlockBadge: true,
      children: (0, r.jsx)("img", {
        alt: "",
        src: t,
        className: p.K_,
        style: {
          height: I
        }
      })
    }), (0, r.jsxs)("div", {
      className: p.MS,
      children: [(0, r.jsxs)("div", {
        className: p.Ag,
        children: [(0, r.jsx)(a.Heading, {
          variant: "text-md/medium",
          color: "text-strong",
          className: p.tZ,
          id: N,
          children: n
        }), (0, r.jsx)(a.M1G, {
          children: (0, r.jsx)(o.A, {
            variant: S,
            color: "text-muted",
            lineClamp: E,
            text: i
          })
        }), h && (0, r.jsx)(f, {
          onShowFullDescription: b,
          variant: S
        }), x || null == g || "" === g.name ? null : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.hKd, {
            size: 16
          }), (0, r.jsx)(u.A, {
            role: g
          })]
        })]
      }), v]
    }), (0, r.jsxs)("div", {
      className: p.kP,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "interactive-text-active",
        className: p.__invalid_productPrice,
        children: null != c ? c : d.intl.string(d.t["4uLhAp"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-xxs/normal",
        color: "text-default",
        className: p.__invalid_productType,
        children: y
      }), (0, r.jsx)("div", {
        className: p.QW,
        onClick: e => {
          e.stopPropagation()
        },
        children: _
      })]
    })]
  });
  return null == A ? (0, r.jsx)("article", {
    className: l()(p.Um, O ? p.sG : p.Wi),
    "aria-labelledby": N,
    children: P
  }) : (0, r.jsx)("div", {
    style: {
      width: j,
      height: C
    },
    children: (0, r.jsx)(a.sqX, {
      tag: "article",
      "aria-label": d.intl.formatToPlainString(d.t["e+TmJa"], {
        productName: n
      }),
      className: l()(p.Um, O ? p.sG : p.Wi, p.GA),
      onClick: A,
      children: P
    })
  })
}