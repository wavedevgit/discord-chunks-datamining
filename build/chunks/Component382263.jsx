/** Chunk was on 61670 **/
/** chunk id: 382263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PT: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk225657 = require("./225657.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk927699 = require("./927699.jsx"),
  Chunk311821 = require("./311821.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk73346 = require("./73346.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk27034 = require("./27034.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk323261 = require("./323261.js");
let v = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, i.jsx)(O, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+f"])
  }
};

function C(e) {
  let {
    onStepChange: t,
    onBackClick: n,
    showBackButton: l = false,
    disabled: r = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, p.JL)(), u = o ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.zxk, {
      onClick: () => t(u),
      disabled: r,
      loading: s,
      text: x.intl.string(x.t.XiOHRU)
    }), l ? (0, i.jsx)(c.Z, {
      onClick: n
    }) : null]
  })
}

function O(e) {
  var t;
  let {
    handleStepChange: n,
    handleClose: c
  } = e, {
    customGiftMessage: m = "",
    setCustomGiftMessage: v,
    giftRecipient: O
  } = (0, h.wD)(), {
    selectedSkuId: I
  } = (0, p.JL)(), T = (0, l.e7)([u.default], () => u.default.getCurrentUser()), _ = (0, l.e7)([d.Z], () => null != I ? d.Z.get(I) : null, [I]), E = (0, l.e7)([f.Z], () => null != I ? f.Z.getForSKU(I) : null, [I]), P = (null == E ? true : E.headerBackground) != null && (null == _ ? true : _.applicationId) != null ? (0, g._W)(_.applicationId, E.headerBackground, 256) : true, k = async (e, t) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(b.C3, {
      children: (0, i.jsxs)("div", {
        className: y.stepBody,
        children: [(0, i.jsxs)("div", {
          className: y.bodyColumnLeft,
          children: [(null == _ ? true : _.name) != null && (0, i.jsx)(a.X6q, {
            variant: "heading-lg/semibold",
            color: "header-primary",
            children: _.name
          }), null != P && (0, i.jsx)("img", {
            src: P,
            alt: null != (t = null == _ ? true : _.name) ? t : "",
            className: y.skuImage
          })]
        }), (0, i.jsxs)("div", {
          className: y.bodyColumnRight,
          children: [(0, i.jsx)(r.Z, {
            selectedSkuId: I,
            validateSelectedGift: k
          }), (0, i.jsx)(o.Z, {
            sectionTitle: x.intl.string(x.t.B3miEx),
            onTextChange: e => null == v ? true : v(e),
            pendingText: m,
            currentText: m,
            disableThemedBackground: true,
            className: y.customGiftMessageWrapper,
            innerClassName: y.customGiftMessage
          })]
        })]
      })
    }), (0, i.jsx)(b.O3, {
      children: (0, i.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: s.Z.Justify.BETWEEN,
        align: s.Z.Align.CENTER,
        children: (0, i.jsx)(C, {
          onStepChange: n,
          onBackClick: c,
          disabled: null == O || O.id === (null == T ? true : T.id) || m.length > j.$n
        })
      })
    })]
  })
}