/** Chunk was on web.js **/
/** chunk id: 709093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk614223 = require("./614223.js"),
  Chunk493572 = require("./493572.jsx"),
  Chunk104494 = require("./104494.js"),
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
    className: h.oneStepCheckoutTextWrapper,
    children: (0, r.jsx)(o.Heading, {
      variant: "heading-md/bold",
      children: n
    })
  });
  let s = a.length > 1;
  return (0, r.jsxs)("div", {
    className: h.headerTextWrapper,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-lg/semibold",
      children: n
    }), s && (0, r.jsx)(u.Z, {
      activeId: i,
      breadcrumbs: a
    })]
  })
}

function I(e) {
  let {
    isTier2: t
  } = e, n = t ? E : m, i = t ? b : g;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: h.bigCloud
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: h.mediumCloud
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: h.smallCloud
    })]
  })
}
let S = function(e) {
  var t, n, i;
  let {
    hideCloseButton: u = false,
    hideCloseOnFullScreen: m,
    onClose: g,
    upgradeToPremiumType: E,
    isEligibleForTrial: b = false,
    showTrialBadge: S = false,
    showDiscountBadge: T = false
  } = e, A = E === _.PremiumTypes.TIER_2, C = (0, c.Fv)(b), N = (0, d.Ng)(), R = null == N || null == (t = N.discount) ? true : t.amount, P = A ? O : y, {
    step: w,
    breadcrumbs: D,
    startedPaymentFlowWithPaymentSourcesRef: L,
    isDisplayingWowMomentConfirmation: x
  } = (0, s.JL)();
  if (null == D || 0 === D.length) return null;
  let M = D.flatMap(e => {
    let t = e.useBreadcrumbLabel(b),
      n = e.sectionHeaderText;
    return null != t ? {
      id: e.id,
      label: t,
      sectionHeaderText: n
    } : []
  });
  if (0 === M.length) return null;
  let k = (M = M.filter(e => {
      let t = e.id !== l.h8.ADD_PAYMENT_STEPS,
        n = e.id === l.h8.ADD_PAYMENT_STEPS && !L.current;
      return !b || b && (t || n)
    })).find(e => e.id === w),
    j = null != (i = null == k || null == (n = k.sectionHeaderText) ? true : n.call(k)) ? i : null == k ? true : k.label,
    U = null != j && null != w,
    G = C && U && w === l.h8.REVIEW,
    B = A ? "nitro-pink" : "nitro-green",
    Z = A ? p.intl.string(p.t.lG6a5x) : p.intl.string(p.t["t9uG/o"]);
  return x ? (0, r.jsx)("div", {
    className: h.container,
    children: (0, r.jsx)(o.$1m, {
      color: B,
      className: h.headerContainer
    })
  }) : (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsxs)(o.$1m, {
      color: B,
      className: a()(h.headerContainer, {
        [h.containerBottomPadding]: !U
      }),
      children: [(0, r.jsx)(I, {
        isTier2: A
      }), !u && (0, r.jsx)(o.olH, {
        "data-migration-pending": true,
        hideOnFullscreen: m,
        onClick: g,
        className: h.closeButtonPosition
      }), (0, r.jsx)("img", {
        src: P,
        alt: "",
        className: G ? h.bigWumpus : h.wumpus
      }), (0, r.jsx)("div", {
        className: h.textContainer,
        children: (0, r.jsx)(o.Text, {
          variant: "display-md",
          color: "header-primary",
          className: h.nitroText,
          children: Z
        })
      })]
    }), (S || T) && (0, r.jsx)(f.Z, {
      discountAmount: R
    }), U && (0, r.jsx)(v, {
      isOneStepCheckout: C,
      headerText: j,
      step: w,
      filteredBreadcrumbs: M
    }), G && (0, r.jsx)("div", {
      className: h.bodyGradientContainer,
      children: (0, r.jsx)("div", {
        className: h.bodyGradient
      })
    })]
  })
}