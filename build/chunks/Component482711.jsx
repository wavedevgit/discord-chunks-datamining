/** Chunk was on 92917 **/
/** chunk id: 482711, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y,
  i: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk492749 = require("./492749.js"),
  Chunk580630 = require("./580630.js"),
  Chunk571654 = require("./571654.js"),
  Chunk415295 = require("./415295.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk304203 = require("./304203.js");

function h(e) {
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

function _(e, t) {
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
    showDeleteProduct: a,
    showReportProduct: o,
    onEditProduct: c,
    onUnpublishProduct: u,
    onDeleteProduct: d,
    onCopyLink: p,
    onTestDownload: m,
    onReportProduct: h,
    closePopout: _,
    onSelect: b
  } = e;
  return (0, r.jsx)("div", {
    className: g.li,
    children: (0, r.jsxs)(s.W1t, {
      "data-menu-migrated": true,
      navId: "guild-product-context",
      onClose: _,
      "aria-label": f.intl.string(f.t.Z146dM),
      onSelect: b,
      children: [(0, r.jsxs)(s.rXV, {
        children: [t && (0, r.jsx)(s.Drp, {
          id: "guild-product-edit",
          label: f.intl.string(f.t.EEfce4),
          icon: s.R2l,
          leadingAccessory: {
            type: "icon",
            icon: s.R2l
          },
          action: c
        }), i && (0, r.jsx)(s.Drp, {
          id: "guild-product-copy-link",
          label: f.intl.string(f.t.XR26uj),
          icon: s.qYV,
          leadingAccessory: {
            type: "icon",
            icon: s.qYV
          },
          action: p
        }), l && (0, r.jsx)(s.Drp, {
          id: "guild-product-test-download",
          label: f.intl.string(f.t.aXoI6U),
          icon: s.s3U,
          leadingAccessory: {
            type: "icon",
            icon: s.s3U
          },
          action: m
        })]
      }), (0, r.jsxs)(s.rXV, {
        children: [n && (0, r.jsx)(s.Drp, {
          id: "guild-product-unpublish",
          label: f.intl.string(f.t.QrkMlN),
          action: u
        }), a && (0, r.jsx)(s.Drp, {
          id: "guild-product-delete",
          label: f.intl.string(f.t.zWjqvB),
          color: "danger",
          action: d
        })]
      }), (0, r.jsx)(s.rXV, {
        children: o && (0, r.jsx)(s.Drp, {
          id: "guild-product-report",
          label: f.intl.string(f.t["6yUzvG"]),
          color: "danger",
          action: h
        })
      })]
    })
  })
}

function A(e) {
  let {
    product: t,
    guildId: n,
    showEditProduct: l,
    showUnpublishProduct: a,
    showTestDownload: o,
    showCopyLink: c,
    showDeleteProduct: u,
    showReportProduct: d,
    onEditProduct: p,
    onUnpublishProduct: m,
    onDeleteProduct: A,
    onCopyProductLink: y,
    onTestDownload: v,
    onReportProduct: x
  } = e, O = i.useRef(null);
  return (0, r.jsx)("div", {
    onClick: e => {
      e.stopPropagation()
    },
    children: (0, r.jsx)(s.YNO, {
      targetElementRef: O,
      position: "right",
      align: "top",
      spacing: false,
      animation: s.YNO.Animation.FADE,
      renderPopout: e => (0, r.jsx)(b, _(h({}, e), {
        guildId: n,
        productId: t.id,
        showEditProduct: l,
        showUnpublishProduct: a,
        showCopyLink: c,
        showTestDownload: o,
        showReportProduct: d,
        showDeleteProduct: u,
        onEditProduct: p,
        onUnpublishProduct: m,
        onDeleteProduct: A,
        onCopyLink: y,
        onTestDownload: v,
        onReportProduct: x
      })),
      children: (e, n) => {
        let {
          isShown: i
        } = n;
        return (0, r.jsx)(s.DUT, _(h({}, e), {
          innerRef: O,
          "aria-label": f.intl.formatToPlainString(f.t.RtqjeB, {
            productName: t.name
          }),
          "aria-haspopup": "listbox",
          "aria-expanded": i,
          className: g.hC,
          children: (0, r.jsx)(s.FHP, {
            size: "md",
            color: "currentColor",
            className: g.Su,
            "aria-hidden": true
          })
        }))
      }
    })
  })
}

function y(e) {
  let {
    product: t,
    guildId: n,
    onEditProduct: i,
    onUnpublishProduct: l,
    onDeleteProduct: y,
    onCopyProductLink: v,
    onTestDownload: x,
    disabled: O = false
  } = e, E = (0, c.R)(t, 600), j = null !== t.price_tier ? (0, u.$g)(t.price_tier, m.Yr.USD) : true, C = (0, d.z)(t);
  return (0, r.jsxs)(s.sqX, {
    tag: "article",
    className: a()(g.gc, g.Um, {
      [g.r9]: O
    }),
    onClick: O ? true : i,
    onContextMenu: function(e) {
      (0, o.L3)(e, () => Promise.resolve(e => (0, r.jsx)(b, _(h({}, e), {
        closePopout: o.Z_,
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
        onDeleteProduct: y,
        onCopyLink: v,
        onTestDownload: x,
        onReportProduct: () => {}
      }))))
    },
    "aria-label": f.intl.formatToPlainString(f.t["X/yAKs"], {
      productName: t.name
    }),
    children: [(0, r.jsx)("img", {
      alt: "",
      src: E,
      className: g.K_
    }), (0, r.jsxs)("div", {
      className: g.aG,
      children: [(0, r.jsxs)("div", {
        className: g.jb,
        children: [(0, r.jsx)(s.Heading, {
          variant: "text-md/semibold",
          color: "text-strong",
          className: g.tZ,
          children: t.name
        }), (0, r.jsx)(s.hKd, {
          size: 8
        }), (0, r.jsxs)("div", {
          className: g.MS,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: j
          }), null != C ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: g.zk
            }), (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "text-default",
              children: C
            })]
          }) : null]
        }), (0, r.jsx)(s.hKd, {
          size: 16
        }), t.published ? (0, r.jsx)(p.S, {}) : (0, r.jsx)(p.$, {})]
      }), !O && (0, r.jsx)(A, {
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
        onDeleteProduct: y,
        onCopyProductLink: v,
        onTestDownload: x,
        onReportProduct: () => {}
      })]
    })]
  })
}