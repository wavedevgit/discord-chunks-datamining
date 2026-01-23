/** Chunk was on web.js **/
/** chunk id: 28003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk800471 = require("./800471.js"),
  Chunk109913 = require("./109913.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk179775 = require("./179775.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk763979 = require("./763979.js"),
  Chunk944496 = require("./944496.js"),
  Chunk51148 = require("./51148.js"),
  Chunk232266 = require("./232266.js"),
  Chunk243002 = require("./243002.js"),
  Chunk303930 = require("./303930.js"),
  Chunk241988 = require("./241988.js");

function A(e) {
  let {
    isOneStepCheckout: t,
    headerText: n,
    step: i,
    filteredBreadcrumbs: a
  } = e;
  if (t) return (0, r.jsx)("div", {
    className: m.r9,
    children: (0, r.jsx)(s.Heading, {
      variant: "heading-md/bold",
      children: n
    })
  });
  let o = a.length > 1;
  return (0, r.jsxs)("div", {
    className: m.go,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-lg/semibold",
      children: n
    }), o && (0, r.jsx)(u.A, {
      activeId: i,
      breadcrumbs: a
    })]
  })
}

function I(e) {
  let {
    isTier2: t
  } = e, n = t ? y : g, i = t ? b : E;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: n,
      alt: "",
      className: m.mR
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: m.dz
    }), (0, r.jsx)("img", {
      src: i,
      alt: "",
      className: m.lM
    })]
  })
}
let S = (e, t) => t ? (0, _.DP)() : e ? h.intl.string(h.t.lG6a5x) : h.intl.string(h.t["t9uG/o"]),
  T = function(e) {
    var t, n, i;
    let {
      hideCloseButton: u = false,
      hideCloseOnFullScreen: _,
      onClose: h,
      upgradeToPremiumType: g,
      isEligibleForTrial: E = false,
      showTrialBadge: y = false,
      showDiscountBadge: b = false,
      isPremiumGroupPurchase: T = false
    } = e, C = g === p.PremiumTypes.TIER_2, N = (0, c.lp)(E), w = (0, d.O)(), R = null == w || null == (n = w.discount) ? true : n.amount, P = C ? v : O, {
      step: D,
      breadcrumbs: x,
      startedPaymentFlowWithPaymentSourcesRef: L,
      isDisplayingWowMomentConfirmation: j
    } = (0, o.P5)();
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
        if (T && e.id === l.pn.PLAN_SELECT) returnfalse;
        let t = e.id !== l.pn.ADD_PAYMENT_STEPS,
          n = e.id === l.pn.ADD_PAYMENT_STEPS && !L.current;
        return !E || E && (t || n)
      })).find(e => e.id === D),
      U = null != (t = null == k || null == (i = k.sectionHeaderText) ? true : i.call(k)) ? t : null == k ? true : k.label,
      G = null != U && null != D,
      V = N && G && D === l.pn.REVIEW,
      F = C ? "nitro-pink" : "nitro-green",
      B = S(C, T);
    return j ? (0, r.jsx)("div", {
      className: m.kL,
      children: (0, r.jsx)(s.hLv, {
        color: F,
        className: m.N1
      })
    }) : (0, r.jsxs)("div", {
      className: m.kL,
      children: [(0, r.jsxs)(s.hLv, {
        color: F,
        className: a()(m.N1, {
          [m.s1]: !G
        }),
        children: [(0, r.jsx)(I, {
          isTier2: C
        }), !u && (0, r.jsx)(s.s_y, {
          "data-migration-pending": true,
          hideOnFullscreen: _,
          onClick: h,
          className: m.Ep
        }), (0, r.jsx)("img", {
          src: P,
          alt: "",
          className: V ? m.i_ : m.kX
        }), (0, r.jsxs)("div", {
          className: m.FS,
          children: [T && (0, r.jsx)("div", {
            className: m.$N,
            children: (0, r.jsx)(s.Exy, {
              type: "beta",
              variant: "expressive"
            })
          }), (0, r.jsx)(s.Text, {
            variant: "display-md",
            color: "text-strong",
            className: m.cf,
            children: B
          })]
        })]
      }), (y || b) && (0, r.jsx)(f.A, {
        discountAmount: R
      }), G && (0, r.jsx)(A, {
        isOneStepCheckout: N,
        headerText: U,
        step: D,
        filteredBreadcrumbs: M
      }), V && (0, r.jsx)("div", {
        className: m.uo,
        children: (0, r.jsx)("div", {
          className: m.dQ
        })
      })]
    })
  }