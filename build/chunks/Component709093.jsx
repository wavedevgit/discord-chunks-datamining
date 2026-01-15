/** Chunk was on web.js **/
/** chunk id: 709093, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
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
  Chunk282793 = require("./282793.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk267180 = require("./267180.js"),
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

function I(e) {
  let {
    isTier2: t
  } = e, n = t ? b : g, i = t ? y : E;
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
let T = (e, t) => t ? (0, _.sO)() : e ? h.intl.string(h.t.lG6a5x) : h.intl.string(h.t["t9uG/o"]),
  C = function(e) {
    var t, n, i;
    let {
      hideCloseButton: u = false,
      hideCloseOnFullScreen: _,
      onClose: h,
      upgradeToPremiumType: g,
      isEligibleForTrial: E = false,
      showTrialBadge: b = false,
      showDiscountBadge: y = false,
      isPremiumGroupPurchase: C = false
    } = e, A = g === p.PremiumTypes.TIER_2, N = (0, c.Fv)(E), P = (0, d.N)(), w = null == P || null == (t = P.discount) ? true : t.amount, R = A ? v : O, {
      step: D,
      breadcrumbs: x,
      startedPaymentFlowWithPaymentSourcesRef: L,
      isDisplayingWowMomentConfirmation: j
    } = (0, s.JL)();
    if (null == x || 0 === x.length) return null;
    let M = x.flatMap(e => {
      let t = e.useBreadcrumbLabel(E),
        n = e.sectionHeaderText;
      return null != t ? {
        id: e.id,
        label: t,
        sectionHeaderText: n
      } : []
    });
    if (0 === M.length) return null;
    let k = (M = M.filter(e => {
        if (C && e.id === l.h8.PLAN_SELECT) returnfalse;
        let t = e.id !== l.h8.ADD_PAYMENT_STEPS,
          n = e.id === l.h8.ADD_PAYMENT_STEPS && !L.current;
        return !E || E && (t || n)
      })).find(e => e.id === D),
      U = null != (i = null == k || null == (n = k.sectionHeaderText) ? true : n.call(k)) ? i : null == k ? true : k.label,
      G = null != U && null != D,
      Z = N && G && D === l.h8.REVIEW,
      F = A ? "nitro-pink" : "nitro-green",
      B = T(A, C);
    return j ? (0, r.jsx)("div", {
      className: m.container,
      children: (0, r.jsx)(o.$1m, {
        color: F,
        className: m.headerContainer
      })
    }) : (0, r.jsxs)("div", {
      className: m.container,
      children: [(0, r.jsxs)(o.$1m, {
        color: F,
        className: a()(m.headerContainer, {
          [m.containerBottomPadding]: !G
        }),
        children: [(0, r.jsx)(I, {
          isTier2: A
        }), !u && (0, r.jsx)(o.olH, {
          "data-migration-pending": true,
          hideOnFullscreen: _,
          onClick: h,
          className: m.closeButtonPosition
        }), (0, r.jsx)("img", {
          src: R,
          alt: "",
          className: Z ? m.bigWumpus : m.wumpus
        }), (0, r.jsxs)("div", {
          className: m.textContainer,
          children: [C && (0, r.jsx)("div", {
            className: m.betaBadgeContainer,
            children: (0, r.jsx)(o.Cts, {
              type: "beta",
              variant: "expressive"
            })
          }), (0, r.jsx)(o.Text, {
            variant: "display-md",
            color: "text-strong",
            className: m.nitroText,
            children: B
          })]
        })]
      }), (b || y) && (0, r.jsx)(f.Z, {
        discountAmount: w
      }), G && (0, r.jsx)(S, {
        isOneStepCheckout: N,
        headerText: U,
        step: D,
        filteredBreadcrumbs: M
      }), Z && (0, r.jsx)("div", {
        className: m.bodyGradientContainer,
        children: (0, r.jsx)("div", {
          className: m.bodyGradient
        })
      })]
    })
  }