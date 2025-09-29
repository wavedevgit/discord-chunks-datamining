/** Chunk was on web.js **/
/** chunk id: 709093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk491881 = require("./491881.js"),
  Chunk236078 = require("./236078.js"),
  Chunk278345 = require("./278345.js"),
  Chunk895601 = require("./895601.js"),
  Chunk381126 = require("./381126.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");

function T(e) {
  let {
    isOneStepCheckout: t,
    headerText: n,
    step: i,
    filteredBreadcrumbs: a
  } = e;
  if (t) return (0, r.jsx)("div", {
    className: g.oneStepCheckoutTextWrapper,
    children: (0, r.jsx)(o.X6q, {
      variant: "heading-md/bold",
      children: n
    })
  });
  let s = a.length > 1;
  return (0, r.jsxs)("div", {
    className: g.headerTextWrapper,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-lg/semibold",
      children: n
    }), s && (0, r.jsx)(d.Z, {
      activeId: i,
      breadcrumbs: a
    })]
  })
}

function S(e) {
  let {
    isTier2: t
  } = e, n = t ? y : E, i = t ? O : b;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: g.bigCloud
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: g.mediumCloud
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: g.smallCloud
    })]
  })
}
let A = function(e) {
  var t, n, i;
  let {
    hideCloseButton: d = false,
    hideCloseOnFullScreen: E,
    onClose: b,
    upgradeToPremiumType: y,
    isEligibleForTrial: O = false,
    showTrialBadge: A = false,
    showDiscountBadge: C = false
  } = e, N = (0, o.apv)((0, s.ZP)()), R = y === m.p9.TIER_2, P = (0, u.Fv)(O), w = (0, p.Ng)(), D = null == w || null == (t = w.discount) ? true : t.amount, x = R ? I : v, L = R ? _.Z : f.Z, {
    step: j,
    breadcrumbs: M,
    startedPaymentFlowWithPaymentSourcesRef: k,
    isDisplayingWowMomentConfirmation: U
  } = (0, l.JL)();
  if (null == M || 0 === M.length) return null;
  let G = M.flatMap(e => {
    let t = e.useBreadcrumbLabel(O),
      n = e.sectionHeaderText;
    return null != t ? {
      id: e.id,
      label: t,
      sectionHeaderText: n
    } : []
  });
  if (0 === G.length) return null;
  let B = (G = G.filter(e => {
      let t = e.id !== c.h8.ADD_PAYMENT_STEPS,
        n = e.id === c.h8.ADD_PAYMENT_STEPS && !k.current;
      return !O || O && (t || n)
    })).find(e => e.id === j),
    Z = null != (i = null == B || null == (n = B.sectionHeaderText) ? true : n.call(B)) ? i : null == B ? true : B.label,
    F = null != Z && null != j,
    V = P && F && j === c.h8.REVIEW,
    H = R ? "nitro-pink" : "nitro-green";
  return U ? (0, r.jsx)("div", {
    className: g.container,
    children: (0, r.jsx)(o.$1m, {
      color: H,
      className: g.headerContainer
    })
  }) : (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsxs)(o.$1m, {
      color: H,
      className: a()(g.headerContainer, {
        [g.containerBottomPadding]: !F
      }),
      children: [(0, r.jsx)(S, {
        isTier2: R
      }), !d && (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        hideOnFullscreen: E,
        onClick: b,
        className: g.closeButtonPosition
      }), (0, r.jsx)("img", {
        src: x,
        alt: "",
        className: V ? g.bigWumpus : g.wumpus
      }), (0, r.jsx)("div", {
        className: g.textContainer,
        children: (0, r.jsx)(L, {
          color: N ? "black" : "white",
          className: g.wordmark
        })
      })]
    }), (A || C) && (0, r.jsx)(h.Z, {
      discountAmount: D
    }), F && (0, r.jsx)(T, {
      isOneStepCheckout: P,
      headerText: Z,
      step: j,
      filteredBreadcrumbs: G
    }), V && (0, r.jsx)("div", {
      className: g.bodyGradientContainer,
      children: (0, r.jsx)("div", {
        className: g.bodyGradient
      })
    })]
  })
}