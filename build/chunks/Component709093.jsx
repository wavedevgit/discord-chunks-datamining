/** Chunk was on web.js **/
/** chunk id: 709093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk304789 = require("./304789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk493572 = require("./493572.jsx"),
  Chunk756896 = require("./756896.jsx"),
  Chunk589072 = require("./589072.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk573702 = require("./573702.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk88784 = require("./88784.js"),
  Chunk236078 = require("./236078.js"),
  Chunk278345 = require("./278345.js"),
  Chunk895601 = require("./895601.js"),
  Chunk381126 = require("./381126.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");

function S(e) {
  let {
    isOneStepCheckout: t,
    headerText: n,
    step: i,
    filteredBreadcrumbs: o
  } = e;
  if (t) return (0, r.jsx)("div", {
    className: E.oneStepCheckoutTextWrapper,
    children: (0, r.jsx)(s.X6q, {
      variant: "heading-md/bold",
      children: n
    })
  });
  let a = o.length > 1;
  return (0, r.jsxs)("div", {
    className: E.headerTextWrapper,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-lg/semibold",
      children: n
    }), a && (0, r.jsx)(f.Z, {
      activeId: i,
      breadcrumbs: o
    })]
  })
}

function A(e) {
  let {
    isTier2: t
  } = e, n = t ? O : b, i = t ? v : y;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: E.bigCloud
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: E.mediumCloud
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: E.smallCloud
    })]
  })
}
let N = function(e) {
  var t, n, i;
  let {
    hideCloseButton: f = false,
    hideCloseOnFullScreen: b,
    onClose: y,
    upgradeToPremiumType: O,
    isEligibleForTrial: v = false,
    showTrialBadge: N = false,
    showDiscountBadge: C = false
  } = e, R = (0, s.apv)((0, l.ZP)()), P = O === g.p9.TIER_2, w = (0, d.Fv)(v), D = (0, h.Ng)(), L = null == D || null == (t = D.discount) ? true : t.amount, x = P ? T : I, M = P ? p.Z : _.Z, {
    step: j,
    breadcrumbs: k,
    startedPaymentFlowWithPaymentSourcesRef: U,
    isDisplayingWowMomentConfirmation: G
  } = (0, c.JL)();
  if (null == k || 0 === k.length) return null;
  let B = k.flatMap(e => {
    let t = e.useBreadcrumbLabel(v),
      n = e.sectionHeaderText;
    return null != t ? {
      id: e.id,
      label: t,
      sectionHeaderText: n
    } : []
  });
  if (0 === B.length) return null;
  let Z = (B = B.filter(e => {
      let t = e.id !== u.h8.ADD_PAYMENT_STEPS,
        n = e.id === u.h8.ADD_PAYMENT_STEPS && !U.current;
      return !v || v && (t || n)
    })).find(e => e.id === j),
    F = null != (i = null == Z || null == (n = Z.sectionHeaderText) ? true : n.call(Z)) ? i : null == Z ? true : Z.label,
    V = null != F && null != j,
    H = w && V && j === u.h8.REVIEW,
    Y = P ? "nitro-pink" : "nitro-green";
  return G ? (0, r.jsx)("div", {
    className: E.container,
    children: (0, r.jsx)(a.$, {
      color: Y,
      className: E.headerContainer
    })
  }) : (0, r.jsxs)("div", {
    className: E.container,
    children: [(0, r.jsxs)(a.$, {
      color: Y,
      className: o()(E.headerContainer, {
        [E.containerBottomPadding]: !V
      }),
      children: [(0, r.jsx)(A, {
        isTier2: P
      }), !f && (0, r.jsx)(s.olH, {
        "data-migration-pending": true,
        hideOnFullscreen: b,
        onClick: y,
        className: E.closeButtonPosition
      }), (0, r.jsx)("img", {
        src: x,
        alt: "",
        className: H ? E.bigWumpus : E.wumpus
      }), (0, r.jsx)("div", {
        className: E.textContainer,
        children: (0, r.jsx)(M, {
          color: R ? "black" : "white",
          className: E.wordmark
        })
      })]
    }), (N || C) && (0, r.jsx)(m.Z, {
      discountAmount: L
    }), V && (0, r.jsx)(S, {
      isOneStepCheckout: w,
      headerText: F,
      step: j,
      filteredBreadcrumbs: B
    }), H && (0, r.jsx)("div", {
      className: E.bodyGradientContainer,
      children: (0, r.jsx)("div", {
        className: E.bodyGradient
      })
    })]
  })
}