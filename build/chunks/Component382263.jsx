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
  Chunk321412 = require("./321412.js");
let O = {
  key: Chunk409813.h8.GIFT_CUSTOMIZATION,
  renderStep: e => (0, l.jsx)(k, function(e) {
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

function C(e) {
  let {
    onStepChange: n,
    onBackClick: t,
    showBackButton: a = false,
    disabled: r = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, b.JL)(), c = o ? h.h8.REVIEW : h.h8.ADD_PAYMENT_STEPS;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(i.Button, {
      onClick: () => n(c),
      disabled: r,
      loading: s,
      text: v.intl.string(v.t.XiOHRX)
    }), a ? (0, l.jsx)(u.Z, {
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
    setCustomGiftMessage: v,
    giftRecipient: O
  } = (0, m.wD)(), {
    selectedSkuId: k
  } = (0, b.JL)(), P = (0, a.e7)([d.default], () => d.default.getCurrentUser()), I = (0, a.e7)([f.Z], () => null != k ? f.Z.get(k) : null, [k]), T = (0, s.Z)({}), E = (0, a.e7)([g.Z], () => null != k ? g.Z.getForSKU(k) : null, [k]), M = (null == E ? true : E.headerBackground) != null && (null == I ? true : I.applicationId) != null ? (0, p._W)(I.applicationId, E.headerBackground, 256) : true, Z = async (e, n) => {};
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(y.C3, {
      children: (0, l.jsxs)("div", {
        className: x.stepBody,
        children: [(0, l.jsxs)("div", {
          className: x.bodyColumnLeft,
          children: [(null == I ? true : I.name) != null && (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: I.name
          }), null != M && (0, l.jsx)("img", {
            src: M,
            alt: null != (n = null == I ? true : I.name) ? n : "",
            className: x.skuImage
          })]
        }), (0, l.jsxs)("div", {
          className: x.bodyColumnRight,
          children: [(0, l.jsx)(r.Z, {
            recipients: T,
            selectedSkuId: k,
            validateSelectedGift: Z
          }), (0, l.jsx)(c.Z, {
            onTextChange: e => null == v ? true : v(e),
            pendingText: h,
            currentText: h,
            disableThemedBackground: true,
            className: x.customGiftMessageWrapper,
            innerClassName: x.customGiftMessage
          })]
        })]
      })
    }), (0, l.jsx)(y.O3, {
      children: (0, l.jsx)(i.mzw, {
        "data-migration-pending": true,
        justify: o.Z.Justify.BETWEEN,
        align: o.Z.Align.CENTER,
        children: (0, l.jsx)(C, {
          onStepChange: t,
          onBackClick: u,
          disabled: null == O || O.id === (null == P ? true : P.id) || h.length > j.$n
        })
      })
    })]
  })
}