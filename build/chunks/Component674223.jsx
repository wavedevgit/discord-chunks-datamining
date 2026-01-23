/** Chunk was on 53068 **/
/** chunk id: 674223, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  K_: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734925 = require("./734925.jsx"),
  Chunk687033 = require("./687033.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk871181 = require("./871181.jsx"),
  Chunk683433 = require("./683433.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk371794 = require("./371794.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk402671 = require("./402671.js");
let O = {
  key: Chunk166532.pn.GIFT_CUSTOMIZATION,
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
    useBreadcrumbLabel: () => v.intl.string(v.t["W685+b"])
  }
};

function P(e) {
  let {
    onStepChange: n,
    onBackClick: t,
    showBackButton: a = false,
    disabled: r = false,
    loading: s = false
  } = e, {
    hasPaymentSources: o
  } = (0, j.P5)(), c = o ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(i.Button, {
      onClick: () => n(c),
      disabled: r,
      loading: s,
      text: v.intl.string(v.t.XiOHRX)
    }), a ? (0, l.jsx)(u.A, {
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
  } = (0, b.Pv)(), {
    selectedSkuId: k
  } = (0, j.P5)(), A = (0, a.bG)([d.default], () => d.default.getCurrentUser()), C = (0, a.bG)([p.A], () => null != k ? p.A.get(k) : null, [k]), T = (0, s.A)(), E = (0, a.bG)([f.A], () => null != k ? f.A.getForSKU(k) : null, [k]), I = (null == E ? true : E.headerBackground) != null && (null == C ? true : C.applicationId) != null ? (0, g.YE)(C.applicationId, E.headerBackground, 256) : true, _ = async (e, n) => {};
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(m.dZ, {
      children: (0, l.jsxs)("div", {
        className: x.Du,
        children: [(0, l.jsxs)("div", {
          className: x.mT,
          children: [(null == C ? true : C.name) != null && (0, l.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: C.name
          }), null != I && (0, l.jsx)("img", {
            src: I,
            alt: null != (n = null == C ? true : C.name) ? n : "",
            className: x.LC
          })]
        }), (0, l.jsxs)("div", {
          className: x.Tc,
          children: [(0, l.jsx)(r.A, {
            recipients: T,
            selectedSkuId: k,
            validateSelectedGift: _
          }), (0, l.jsx)(c.A, {
            onTextChange: e => null == v ? true : v(e),
            pendingText: h,
            currentText: h,
            disableThemedBackground: true,
            className: x.iX,
            innerClassName: x.pt
          })]
        })]
      })
    }), (0, l.jsx)(m.UX, {
      children: (0, l.jsx)(i.jlY, {
        "data-migration-pending": true,
        justify: o.A.Justify.BETWEEN,
        align: o.A.Align.CENTER,
        children: (0, l.jsx)(P, {
          onStepChange: t,
          onBackClick: u,
          disabled: null == O || O.id === (null == A ? true : A.id) || h.length > y.Jo
        })
      })
    })]
  })
}