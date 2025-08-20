/** Chunk was on web.js **/
/** chunk id: 19869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk703656 = require("./703656.js"),
  Chunk511050 = require("./511050.js"),
  Chunk52647 = require("./52647.js"),
  Chunk822857 = require("./822857.js"),
  Chunk317257 = require("./317257.js"),
  Chunk120786 = require("./120786.jsx"),
  Chunk775451 = require("./775451.jsx"),
  Chunk970815 = require("./970815.jsx"),
  Chunk275388 = require("./275388.jsx"),
  Chunk720463 = require("./720463.jsx"),
  Chunk450272 = require("./450272.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk905164 = require("./905164.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function w() {
  let {
    enabled: e
  } = (0, Chunk822857.WX)({
    location: "revenue_storybook"
  });
  return (0, Chunk951288.jsxs)("div", {
    children: [module && (0, Chunk951288.jsx)(L, {}), (0, Chunk951288.jsx)(x, {}), (0, Chunk951288.jsx)(j, {})]
  })
}
let D = 150;

function x() {
  let {
    openIntroToOrbsClaimedCoachmark: e
  } = (0, Chunk511050.l)({
    location: "VirtualCurrencyComponents"
  }), [t, n] = Chunk647438.useState(D), [_, p] = Chunk647438.useState(D), [b, y] = Chunk647438.useState(500), [S, A] = Chunk647438.useState(Chunk317257.b.DEFAULT), C = () => {
    switch (S) {
      case Chunk317257.b.DEFAULT:
        A(Chunk317257.b.HIGHLIGHTED);
        break;
      case Chunk317257.b.HIGHLIGHTED:
        A(Chunk317257.b.SELECTED);
        break;
      case Chunk317257.b.SELECTED:
        A(Chunk317257.b.DEFAULT)
    }
  }, {
    analyticsLocations: N
  } = (0, Chunk906732.ZP)(Chunk100527.Z.PAYMENT_FLOW_TEST_PAGE);
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Balance Widget Components"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Balance Widget Menu",
      children: (0, Chunk951288.jsx)(Chunk775451.V9, {
        ctaText: Chunk388032.intl.string(Chunk388032.t["J+vlIS"]),
        ctaOnClick: Chunk981631.dG4,
        isCoachmarkEnabled: false
      })
    }), (0, Chunk951288.jsxs)(Chunk450272.E_, {
      label: "Open Balance Widget Coachmark in Shop",
      direction: "vertical",
      children: [(0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          style: {
            marginBottom: "8px"
          },
          children: "Click the button below to open the Balance Widget Earned Orbs Coachmark in the shop page."
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-feedback-info",
          style: {
            marginBottom: "8px"
          },
          children: "You will be redirected to the shop page and the coachmark will appear beneath the Balance Widget Pill in the header bar after 0.5 seconds."
        })]
      }), (0, Chunk951288.jsx)(Chunk693789.zx, {
        onClick: () => {
          (0, Chunk37234.xf)(), (0, Chunk703656.s1)().location.pathname.includes(Chunk981631.Z5c.COLLECTIBLES_SHOP) || (0, Chunk335131.mK)({
            openInLayer: false,
            analyticsLocations: N,
            analyticsSource: Chunk100527.Z.REVENUE_STORYBOOK_TEST_PAGE
          }), module({
            forceOpen: true,
            delayMS: 200
          })
        },
        children: "Open Balance Widget Coachmark"
      })]
    }), (0, Chunk951288.jsxs)(Chunk450272.E_, {
      label: "Balance Widget Pill",
      children: [(0, Chunk951288.jsx)(Chunk970815.A4, {
        balance: 150,
        balanceWidgetMode: Chunk317257.b.DEFAULT
      }), (0, Chunk951288.jsx)(Chunk970815.A4, {
        balance: 150,
        balanceWidgetMode: Chunk317257.b.HIGHLIGHTED
      }), (0, Chunk951288.jsx)(Chunk970815.A4, {
        balance: 150,
        balanceWidgetMode: Chunk317257.b.SELECTED
      }), (0, Chunk951288.jsx)(Chunk970815.A4, {
        balance: 0,
        balanceWidgetMode: Chunk317257.b.DEFAULT,
        showNotificationBadge: true
      }), (0, Chunk951288.jsx)(Chunk970815.A4, {
        balance: null,
        balanceWidgetMode: Chunk317257.b.DEFAULT
      })]
    }), (0, Chunk951288.jsxs)(Chunk450272.E_, {
      label: "Balance Widget Pill Interactive (click to change mode)",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        style: {
          marginBottom: "4px"
        },
        children: "Enter a number and click Set Balance to see the balance widget pill update:"
      }), (0, Chunk951288.jsx)(Chunk481060.FiK, {
        className: Chunk905164.numberInput,
        value: exports,
        onChange: e => n(e)
      }), (0, Chunk951288.jsx)(Chunk693789.zx, {
        onClick: () => Chunk822857(exports),
        children: "Set Balance"
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk905164.interactivePillContainer,
        children: (0, Chunk951288.jsx)(Chunk970815.A4, {
          balance: Chunk52647,
          balanceWidgetMode: S,
          onClick: () => C()
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        style: {
          marginBottom: "4px"
        },
        children: "Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:"
      }), (0, Chunk951288.jsx)(Chunk481060.FiK, {
        className: Chunk905164.numberInput,
        value: Chunk275388,
        onChange: e => y(e)
      }), (0, Chunk951288.jsx)(Chunk693789.zx, {
        onClick: () => {
          Chunk822857(null), setTimeout(() => {
            Chunk822857(exports)
          }, Chunk275388)
        },
        children: "Simulate Loading State"
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk905164.interactivePillContainer,
        children: (0, Chunk951288.jsx)(Chunk970815.A4, {
          balance: Chunk52647,
          balanceWidgetMode: S,
          onClick: () => C()
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Balance Widget Card",
      children: (0, Chunk951288.jsx)(Chunk120786.L, {
        ctaText: Chunk388032.intl.string(Chunk388032.t["H57f4+"]),
        linkText: Chunk388032.intl.string(Chunk388032.t["7f4H7O"]),
        ctaOnClick: Chunk981631.dG4
      })
    })]
  })
}

function L() {
  let [e, t] = Chunk647438.useState("1144308439720394944");
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Orb Checkout Components"
    }), (0, Chunk951288.jsxs)(Chunk450272.E_, {
      label: "Orb Checkout Modal",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: "Enter SKU ID here:"
      }), (0, Chunk951288.jsx)(Chunk481060.oil, {
        placeholder: "SKU ID",
        value: module,
        onChange: e => t(e)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        children: "The Orb Checkout Modal will open with the orb price of the product, if it exists"
      }), (0, Chunk951288.jsx)(Chunk693789.zx, {
        onClick: () => {
          (0, Chunk275388.qA)({
            skuId: module,
            onCheckoutSuccess: e => {
              let {
                skuId: t,
                entitlements: n
              } = e;
              console.log("Orb Checkout Success for SKU: ".concat(t, ". Entitlement(s): "), n, Date.now())
            },
            onCloseCallback: () => {
              console.log("Orb Checkout Closed")
            }
          })
        },
        children: "Open Orb Checkout Integrated with Payment Modal"
      })]
    })]
  })
}

function j() {
  let e = () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          AnnouncementModal: e
        } = await require.e("86653").then(require.bind(require, 993318));
        return t => {
          var {
            onClose: n
          } = t, i = R(t, ["onClose"]);
          return (0, r.jsx)(e, N(A({}, i), {
            onClose: n,
            ctaOnClick: n
          }))
        }
      })
    },
    {
      resetOnboardingAnnouncementModal: t
    } = (0, Chunk52647.Z)();
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Onboarding Components"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Announcement Modal",
      children: (0, Chunk951288.jsx)(Chunk693789.zx, {
        onClick: module,
        children: "Open Announcement Modal"
      })
    }), (0, Chunk951288.jsxs)(Chunk450272.E_, {
      label: "Announcement Modal [Reset Dismissible Content]",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        style: {
          marginBottom: "8px"
        },
        children: "After resetting your Announcement Modal State and exiting from user settings, you'll be able to see the Announcement Modal again."
      }), (0, Chunk951288.jsx)(Chunk693789.zx, {
        onClick: () => exports(),
        children: "Reset Announcement Modal State"
      })]
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Balance Widget Coachmark",
      children: (0, Chunk951288.jsx)(Chunk720463.E, {})
    })]
  })
}