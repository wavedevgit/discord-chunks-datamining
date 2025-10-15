/** Chunk was on 61670 **/
/** chunk id: 382263, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  PT: () => x
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
  Chunk614277 = require("./614277.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk323261 = require("./323261.js");
let x = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, l.jsx)(C, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = t[n], n in e ? Object.defineProperty(e, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = l
      })
    }
    return e
  }({}, e)),
  options: {
    isLargeModal: true,
    useBreadcrumbLabel: () => Chunk388032.intl.string(Chunk388032.t["W685+b"])
  }
};

function O(e) {
  let {
    onStepChange: n,
    onBackClick: t,
    showBackButton: i = false,
    disabled: r = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, m.JL)(), u = o ? b.h8.REVIEW : b.h8.ADD_PAYMENT_STEPS;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.Button, {
      onClick: () => n(u),
      disabled: r,
      loading: s,
      text: j.intl.string(j.t.XiOHRX)
    }), i ? (0, l.jsx)(c.Z, {
      onClick: t
    }) : null]
  })
}

function C(e) {
  var n;
  let {
    handleStepChange: t,
    handleClose: c
  } = e, {
    customGiftMessage: b = "",
    setCustomGiftMessage: x,
    giftRecipient: C
  } = (0, p.wD)(), {
    selectedSkuId: k
  } = (0, m.JL)(), P = (0, i.e7)([u.default], () => u.default.getCurrentUser()), I = (0, i.e7)([d.Z], () => null != k ? d.Z.get(k) : null, [k]), T = (0, i.e7)([f.Z], () => null != k ? f.Z.getForSKU(k) : null, [k]), E = (null == T ? true : T.headerBackground) != null && (null == I ? true : I.applicationId) != null ? (0, g._W)(I.applicationId, T.headerBackground, 256) : true, M = async (e, n) => {};
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(h.C3, {
      children: (0, l.jsxs)("div", {
        className: v.stepBody,
        children: [(0, l.jsxs)("div", {
          className: v.bodyColumnLeft,
          children: [(null == I ? true : I.name) != null && (0, l.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            color: "header-primary",
            children: I.name
          }), null != E && (0, l.jsx)("img", {
            src: E,
            alt: null != (n = null == I ? true : I.name) ? n : "",
            className: v.skuImage
          })]
        }), (0, l.jsxs)("div", {
          className: v.bodyColumnRight,
          children: [(0, l.jsx)(r.Z, {
            selectedSkuId: k,
            validateSelectedGift: M
          }), (0, l.jsx)(o.Z, {
            sectionTitle: j.intl.string(j.t.B3miE8),
            onTextChange: e => null == x ? true : x(e),
            pendingText: b,
            currentText: b,
            disableThemedBackground: true,
            className: v.customGiftMessageWrapper,
            innerClassName: v.customGiftMessage
          })]
        })]
      })
    }), (0, l.jsx)(h.O3, {
      children: (0, l.jsx)(a.mzw, {
        "data-migration-pending": true,
        justify: s.Z.Justify.BETWEEN,
        align: s.Z.Align.CENTER,
        children: (0, l.jsx)(O, {
          onStepChange: t,
          onBackClick: c,
          disabled: null == C || C.id === (null == P ? true : P.id) || b.length > y.$n
        })
      })
    })]
  })
}