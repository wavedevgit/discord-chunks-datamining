/** Chunk was on 61670 **/
/** chunk id: 382263, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  PT: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk225657 = require("./225657.jsx"),
  Chunk334636 = require("./334636.js"),
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
  Chunk614277 = require("./614277.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk323261 = require("./323261.js");
let O = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, i.jsx)(k, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        i = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), i.forEach(function(n) {
        var i;
        i = t[n], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = i
      })
    }
    return e
  }({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+b"])
  }
};

function C(e) {
  let {
    onStepChange: n,
    onBackClick: t,
    showBackButton: l = false,
    disabled: r = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, b.JL)(), c = o ? h.h8.REVIEW : h.h8.ADD_PAYMENT_STEPS;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.Button, {
      onClick: () => n(c),
      disabled: r,
      loading: s,
      text: v.intl.string(v.t.XiOHRX)
    }), l ? (0, i.jsx)(u.Z, {
      onClick: t
    }) : null]
  })
}

function k(e) {
  var n;
  let {
    handleStepChange: t,
    handleClose: u
  } = e, {
    customGiftMessage: h = "",
    setCustomGiftMessage: O,
    giftRecipient: k
  } = (0, m.wD)(), {
    selectedSkuId: P
  } = (0, b.JL)(), I = (0, l.e7)([d.default], () => d.default.getCurrentUser()), T = (0, l.e7)([f.Z], () => null != P ? f.Z.get(P) : null, [P]), E = (0, s.Z)({}), M = (0, l.e7)([g.Z], () => null != P ? g.Z.getForSKU(P) : null, [P]), Z = (null == M ? true : M.headerBackground) != null && (null == T ? true : T.applicationId) != null ? (0, p._W)(T.applicationId, M.headerBackground, 256) : true, _ = async (e, n) => {};
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(y.C3, {
      children: (0, i.jsxs)("div", {
        className: x.stepBody,
        children: [(0, i.jsxs)("div", {
          className: x.bodyColumnLeft,
          children: [(null == T ? true : T.name) != null && (0, i.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: T.name
          }), null != Z && (0, i.jsx)("img", {
            src: Z,
            alt: null != (n = null == T ? true : T.name) ? n : "",
            className: x.skuImage
          })]
        }), (0, i.jsxs)("div", {
          className: x.bodyColumnRight,
          children: [(0, i.jsx)(r.Z, {
            recipients: E,
            selectedSkuId: P,
            validateSelectedGift: _
          }), (0, i.jsx)(c.Z, {
            sectionTitle: v.intl.string(v.t.B3miE8),
            onTextChange: e => null == O ? true : O(e),
            pendingText: h,
            currentText: h,
            disableThemedBackground: true,
            className: x.customGiftMessageWrapper,
            innerClassName: x.customGiftMessage
          })]
        })]
      })
    }), (0, i.jsx)(y.O3, {
      children: (0, i.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: o.Z.Justify.BETWEEN,
        align: o.Z.Align.CENTER,
        children: (0, i.jsx)(C, {
          onStepChange: t,
          onBackClick: u,
          disabled: null == k || k.id === (null == I ? true : I.id) || h.length > j.$n
        })
      })
    })]
  })
}