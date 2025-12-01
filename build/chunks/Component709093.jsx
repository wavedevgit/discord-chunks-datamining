/** Chunk was on web.js **/
/** chunk id: 709093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./361932.js"), require("./187205.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk493572 = require("./493572.jsx"),
  Chunk622909 = require("./622909.js"),
  Chunk573702 = require("./573702.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk108626 = require("./108626.js"),
  Chunk236078 = require("./236078.js"),
  Chunk278345 = require("./278345.js"),
  Chunk895601 = require("./895601.js"),
  Chunk381126 = require("./381126.js"),
  Chunk997892 = require("./997892.js"),
  Chunk234286 = require("./234286.js");

function v(e) {
  let {
    isOneStepCheckout: t,
    headerText: n,
    step: i,
    filteredBreadcrumbs: a
  } = e;
  if (t) return (0, r.jsx)("div", {
    className: m.oneStepCheckoutTextWrapper,
    children: (0, r.jsx)(o.Heading, {
      variant: "heading-md/bold",
      children: n
    })
  });
  let s = a.length > 1;
  return (0, r.jsxs)("div", {
    className: m.headerTextWrapper,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-lg/semibold",
      children: n
    }), s && (0, r.jsx)(u.Z, {
      activeId: i,
      breadcrumbs: a
    })]
  })
}

function S(e) {
  let {
    isTier2: t
  } = e, n = t ? E : h, i = t ? b : g;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: m.bigCloud
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: m.mediumCloud
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: m.smallCloud
    })]
  })
}
let I = function(e) {
  var t, n, i;
  let {
    hideCloseButton: u = false,
    hideCloseOnFullScreen: h,
    onClose: g,
    upgradeToPremiumType: E,
    isEligibleForTrial: b = false,
    showTrialBadge: I = false,
    showDiscountBadge: T = false
  } = e, A = E === p.PremiumTypes.TIER_2, C = (0, c.Fv)(b), N = (0, d.N)(), P = null == N || null == (t = N.discount) ? true : t.amount, R = A ? O : y, {
    step: w,
    breadcrumbs: D,
    startedPaymentFlowWithPaymentSourcesRef: x,
    isDisplayingWowMomentConfirmation: L
  } = (0, s.JL)();
  if (null == D || 0 === D.length) return null;
  let j = D.flatMap(e => {
    let t = e.useBreadcrumbLabel(b),
      n = e.sectionHeaderText;
    return null != t ? {
      id: e.id,
      label: t,
      sectionHeaderText: n
    } : []
  });
  if (0 === j.length) return null;
  let M = (j = j.filter(e => {
      let t = e.id !== l.h8.ADD_PAYMENT_STEPS,
        n = e.id === l.h8.ADD_PAYMENT_STEPS && !x.current;
      return !b || b && (t || n)
    })).find(e => e.id === w),
    k = null != (i = null == M || null == (n = M.sectionHeaderText) ? true : n.call(M)) ? i : null == M ? true : M.label,
    U = null != k && null != w,
    G = C && U && w === l.h8.REVIEW,
    Z = A ? "nitro-pink" : "nitro-green",
    B = A ? _.intl.string(_.t.lG6a5x) : _.intl.string(_.t["t9uG/o"]);
  return L ? (0, r.jsx)("div", {
    className: m.container,
    children: (0, r.jsx)(o.$1m, {
      color: Z,
      className: m.headerContainer
    })
  }) : (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsxs)(o.$1m, {
      color: Z,
      className: a()(m.headerContainer, {
        [m.containerBottomPadding]: !U
      }),
      children: [(0, r.jsx)(S, {
        isTier2: A
      }), !u && (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        hideOnFullscreen: h,
        onClick: g,
        className: m.closeButtonPosition
      }), (0, r.jsx)("img", {
        src: R,
        alt: "",
        className: G ? m.bigWumpus : m.wumpus
      }), (0, r.jsx)("div", {
        className: m.textContainer,
        children: (0, r.jsx)(o.Text, {
          variant: "display-md",
          color: "header-primary",
          className: m.nitroText,
          children: B
        })
      })]
    }), (I || T) && (0, r.jsx)(f.Z, {
      discountAmount: P
    }), U && (0, r.jsx)(v, {
      isOneStepCheckout: C,
      headerText: k,
      step: w,
      filteredBreadcrumbs: j
    }), G && (0, r.jsx)("div", {
      className: m.bodyGradientContainer,
      children: (0, r.jsx)("div", {
        className: m.bodyGradient
      })
    })]
  })
}