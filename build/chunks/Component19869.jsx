/** Chunk was on web.js **/
/** chunk id: 19869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk680018 = require("./680018.jsx"),
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

function S() {
  let {
    enabled: e
  } = (0, Chunk822857.WX)({
    location: "revenue_storybook"
  });
  return (0, Chunk951288.jsxs)("div", {
    children: [module && (0, Chunk951288.jsx)(N, {}), (0, Chunk951288.jsx)(C, {}), (0, Chunk951288.jsx)(R, {})]
  })
}
let A = 150;

function C() {
  let {
    openIntroToOrbsClaimedCoachmark: e
  } = (0, Chunk511050.l)({
    location: "VirtualCurrencyComponents"
  }), [t, n] = Chunk647438.useState(A), [_, p] = Chunk647438.useState(A), [b, y] = Chunk647438.useState(500), [S, C] = Chunk647438.useState(Chunk317257.b.DEFAULT), N = () => {
    switch (S) {
      case Chunk317257.b.DEFAULT:
        C(Chunk317257.b.HIGHLIGHTED);
        break;
      case Chunk317257.b.HIGHLIGHTED:
        C(Chunk317257.b.SELECTED);
        break;
      case Chunk317257.b.SELECTED:
        C(Chunk317257.b.DEFAULT)
    }
  }, {
    analyticsLocations: R
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
      }), (0, Chunk951288.jsx)(Chunk680018.z, {
        onClick: () => {
          (0, Chunk37234.xf)(), (0, Chunk703656.s1)().location.pathname.includes(Chunk981631.Z5c.COLLECTIBLES_SHOP) || (0, Chunk335131.mK)({
            openInLayer: false,
            analyticsLocations: R,
            analyticsSource: Chunk100527.Z.REVENUE_STORYBOOK_TEST_PAGE
          }), module({
            forceOpen: true,
            delayMS: 200
          })
        },
        text: "Open Balance Widget Coachmark"
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
      }), (0, Chunk951288.jsx)(Chunk680018.z, {
        onClick: () => Chunk822857(exports),
        text: "Set Balance"
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk905164.interactivePillContainer,
        children: (0, Chunk951288.jsx)(Chunk970815.A4, {
          balance: Chunk52647,
          balanceWidgetMode: S,
          onClick: () => N()
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
      }), (0, Chunk951288.jsx)(Chunk680018.z, {
        onClick: () => {
          Chunk822857(null), setTimeout(() => {
            Chunk822857(exports)
          }, Chunk275388)
        },
        text: "Simulate Loading State"
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk905164.interactivePillContainer,
        children: (0, Chunk951288.jsx)(Chunk970815.A4, {
          balance: Chunk52647,
          balanceWidgetMode: S,
          onClick: () => N()
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

function N() {
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
      }), (0, Chunk951288.jsx)(Chunk680018.z, {
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
        text: "Open Orb Checkout Integrated with Payment Modal"
      })]
    })]
  })
}

function R() {
  let {
    resetOnboardingExperience: e
  } = (0, Chunk52647.Z)();
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Onboarding Components"
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
      }), (0, Chunk951288.jsx)(Chunk680018.z, {
        onClick: () => module(),
        text: "Reset Announcement Modal State"
      })]
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Balance Widget Coachmark",
      children: (0, Chunk951288.jsx)(Chunk720463.E, {})
    })]
  })
}