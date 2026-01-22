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
  renderStep: e => (0, l.jsx)(A, function(e) {
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
    useBreadcrumbLabel: () => x.intl.string(x.t["W685+b"])
  }
};

function P(e) {
  let {
    onStepChange: n,
    onBackClick: t,
    showBackButton: i = false,
    disabled: a = false,
    loading: c = false
  } = e, {
    hasPaymentSources: s
  } = (0, j.P5)(), o = s ? h.pn.REVIEW : h.pn.ADD_PAYMENT_STEPS;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.Button, {
      onClick: () => n(o),
      disabled: a,
      loading: c,
      text: x.intl.string(x.t.XiOHRX)
    }), i ? (0, l.jsx)(d.A, {
      onClick: t
    }) : null]
  })
}

function A(e) {
  var n;
  let {
    handleStepChange: t,
    handleClose: d
  } = e, {
    customGiftMessage: h = "",
    setCustomGiftMessage: x,
    giftRecipient: O
  } = (0, g.Pv)(), {
    selectedSkuId: A
  } = (0, j.P5)(), k = (0, i.bG)([u.default], () => u.default.getCurrentUser()), T = (0, i.bG)([p.A], () => null != A ? p.A.get(A) : null, [A]), C = (0, c.A)(), E = (0, i.bG)([f.A], () => null != A ? f.A.getForSKU(A) : null, [A]), I = (null == E ? true : E.headerBackground) != null && (null == T ? true : T.applicationId) != null ? (0, b.YE)(T.applicationId, E.headerBackground, 256) : true, _ = async (e, n) => {};
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(v.dZ, {
      children: (0, l.jsxs)("div", {
        className: y.Du,
        children: [(0, l.jsxs)("div", {
          className: y.mT,
          children: [(null == T ? true : T.name) != null && (0, l.jsx)(r.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: T.name
          }), null != I && (0, l.jsx)("img", {
            src: I,
            alt: null != (n = null == T ? true : T.name) ? n : "",
            className: y.LC
          })]
        }), (0, l.jsxs)("div", {
          className: y.Tc,
          children: [(0, l.jsx)(a.A, {
            recipients: C,
            selectedSkuId: A,
            validateSelectedGift: _
          }), (0, l.jsx)(o.A, {
            onTextChange: e => null == x ? true : x(e),
            pendingText: h,
            currentText: h,
            disableThemedBackground: true,
            className: y.iX,
            innerClassName: y.pt
          })]
        })]
      })
    }), (0, l.jsx)(v.UX, {
      children: (0, l.jsx)(r.jlY, {
        "data-migration-pending": true,
        justify: s.A.Justify.BETWEEN,
        align: s.A.Align.CENTER,
        children: (0, l.jsx)(P, {
          onStepChange: t,
          onBackClick: d,
          disabled: null == O || O.id === (null == k ? true : k.id) || h.length > m.Jo
        })
      })
    })]
  })
}