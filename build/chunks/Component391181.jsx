/** Chunk was on 26434 **/
/** chunk id: 391181, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C,
  m: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk166081 = require("./166081.js"),
  Chunk937615 = require("./937615.js"),
  Chunk942833 = require("./942833.js"),
  Chunk48691 = require("./48691.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk692316 = require("./692316.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    showEditProduct: t,
    showUnpublishProduct: n,
    showCopyLink: i,
    showTestDownload: l,
    showDeleteProduct: o,
    showReportProduct: s,
    onEditProduct: c,
    onUnpublishProduct: u,
    onDeleteProduct: d,
    onCopyLink: p,
    onTestDownload: m,
    onReportProduct: _,
    closePopout: h,
    onSelect: b
  } = e;
  return (0, r.jsx)("div", {
    className: g.menuContainer,
    children: (0, r.jsxs)(a.v2r, {
      navId: "guild-product-context",
      onClose: h,
      "aria-label": f.intl.string(f.t.Z146dH),
      onSelect: b,
      children: [(0, r.jsxs)(a.kSQ, {
        children: [t && (0, r.jsx)(a.sNh, {
          id: "guild-product-edit",
          label: f.intl.string(f.t.EEfce3),
          action: c
        }), i && (0, r.jsx)(a.sNh, {
          id: "guild-product-copy-link",
          label: f.intl.string(f.t.XR26ur),
          icon: a.xPt,
          action: p
        }), l && (0, r.jsx)(a.sNh, {
          id: "guild-product-test-download",
          label: f.intl.string(f.t.aXoI6e),
          icon: a._8t,
          action: m
        })]
      }), (0, r.jsxs)(a.kSQ, {
        children: [n && (0, r.jsx)(a.sNh, {
          id: "guild-product-unpublish",
          label: f.intl.string(f.t.QrkMlJ),
          action: u
        }), o && (0, r.jsx)(a.sNh, {
          id: "guild-product-delete",
          label: f.intl.string(f.t.zWjqvL),
          color: "danger",
          action: d
        })]
      }), (0, r.jsx)(a.kSQ, {
        children: s && (0, r.jsx)(a.sNh, {
          id: "guild-product-report",
          label: f.intl.string(f.t["6yUzvL"]),
          color: "danger",
          action: _
        })
      })]
    })
  })
}

function E(e) {
  let {
    product: t,
    guildId: n,
    showEditProduct: l,
    showUnpublishProduct: o,
    showTestDownload: s,
    showCopyLink: c,
    showDeleteProduct: u,
    showReportProduct: d,
    onEditProduct: p,
    onUnpublishProduct: m,
    onDeleteProduct: E,
    onCopyProductLink: C,
    onTestDownload: v,
    onReportProduct: O
  } = e, y = i.useRef(null);
  return (0, r.jsx)("div", {
    onClick: e => {
      e.stopPropagation()
    },
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: y,
      position: "right",
      align: "top",
      spacing: false,
      animation: a.yRy.Animation.FADE,
      renderPopout: e => (0, r.jsx)(b, h(_({}, e), {
        guildId: n,
        productId: t.id,
        showEditProduct: l,
        showUnpublishProduct: o,
        showCopyLink: c,
        showTestDownload: s,
        showReportProduct: d,
        showDeleteProduct: u,
        onEditProduct: p,
        onUnpublishProduct: m,
        onDeleteProduct: E,
        onCopyLink: C,
        onTestDownload: v,
        onReportProduct: O
      })),
      children: (e, n) => {
        let {
          isShown: i
        } = n;
        return (0, r.jsx)(a.P3F, h(_({}, e), {
          innerRef: y,
          "aria-label": f.intl.formatToPlainString(f.t.RtqjeH, {
            productName: t.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": i,
          className: g.productActionMenuButton,
          children: (0, r.jsx)(a.Huf, {
            size: "md",
            color: "currentColor",
            className: g.productActionMenuIcon,
            "aria-hidden": true
          })
        }))
      }
    })
  })
}

function C(e) {
  let {
    product: t,
    guildId: n,
    onEditProduct: i,
    onUnpublishProduct: l,
    onDeleteProduct: C,
    onCopyProductLink: v,
    onTestDownload: O,
    disabled: y = false
  } = e, x = (0, c.U)(t, 600), j = null !== t.price_tier ? (0, u.T4)(t.price_tier, m.pK.USD) : true, I = (0, d.C)(t);
  return (0, r.jsxs)(a.kL8, {
    tag: "article",
    className: o()(g.productCardClickable, g.productCard, {
      [g.disabled]: y
    }),
    onClick: y ? true : i,
    onContextMenu: function(e) {
      (0, s.jW)(e, () => Promise.resolve(e => (0, r.jsx)(b, h(_({}, e), {
        closePopout: s.Zy,
        guildId: n,
        productId: t.id,
        showEditProduct: true,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: true,
        showReportProduct: false,
        onEditProduct: i,
        onUnpublishProduct: l,
        onDeleteProduct: C,
        onCopyLink: v,
        onTestDownload: O,
        onReportProduct: () => {}
      }))))
    },
    "aria-label": f.intl.formatToPlainString(f.t["X/yAKi"], {
      productName: t.name
    }),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: x,
      className: g.productThumbnail
    }), (0, r.jsxs)("div", {
      className: g.productInfo,
      children: [(0, r.jsxs)("div", {
        className: g.productInfoContent,
        children: [(0, r.jsx)(a.X6q, {
          variant: "text-md/semibold",
          color: "header-primary",
          className: g.productName,
          children: t.name
        }), (0, r.jsx)(a.LZC, {
          size: 8
        }), (0, r.jsxs)("div", {
          className: g.productDetails,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "header-secondary",
            children: j
          }), null != I ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: g.dotSeparator
            }), (0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: I
            })]
          }) : null]
        }), (0, r.jsx)(a.LZC, {
          size: 16
        }), t.published ? (0, r.jsx)(p.t, {}) : (0, r.jsx)(p.b, {})]
      }), !y && (0, r.jsx)(E, {
        product: t,
        guildId: n,
        showEditProduct: true,
        showUnpublishProduct: t.published,
        showCopyLink: t.published,
        showTestDownload: null != t.attachments,
        showDeleteProduct: true,
        showReportProduct: false,
        onEditProduct: i,
        onUnpublishProduct: l,
        onDeleteProduct: C,
        onCopyProductLink: v,
        onTestDownload: O,
        onReportProduct: () => {}
      })]
    })]
  })
}