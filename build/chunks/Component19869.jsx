/** Chunk was on web.js **/
/** chunk id: 19869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk52647 = require("./52647.js"),
  Chunk822857 = require("./822857.js"),
  Chunk317257 = require("./317257.js"),
  Chunk120786 = require("./120786.jsx"),
  Chunk775451 = require("./775451.jsx"),
  Chunk970815 = require("./970815.jsx"),
  Chunk275388 = require("./275388.jsx"),
  Chunk450272 = require("./450272.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk905164 = require("./905164.js");

function E() {
  let {
    enabled: e
  } = (0, Chunk822857.WX)({
    location: "revenue_storybook"
  });
  return (0, Chunk951288.jsxs)("div", {
    children: [module && (0, Chunk951288.jsx)(O, {}), (0, Chunk951288.jsx)(y, {}), (0, Chunk951288.jsx)(v, {})]
  })
}
let b = 150;

function y() {
  let [e, t] = Chunk647438.useState(b), [n, s] = Chunk647438.useState(b), [l, _] = Chunk647438.useState(500), [E, y] = Chunk647438.useState(Chunk317257.b.DEFAULT), O = () => {
    switch (E) {
      case Chunk317257.b.DEFAULT:
        y(Chunk317257.b.HIGHLIGHTED);
        break;
      case Chunk317257.b.HIGHLIGHTED:
        y(Chunk317257.b.SELECTED);
        break;
      case Chunk317257.b.SELECTED:
        y(Chunk317257.b.DEFAULT)
    }
  };
  return (0, Chunk951288.jsxs)(Chunk450272.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Balance Widget Components"
    }), (0, Chunk951288.jsx)(Chunk450272.E_, {
      label: "Balance Widget Menu",
      children: (0, Chunk951288.jsx)(Chunk775451.V9, {
        ctaText: Chunk388032.intl.string(Chunk388032.t["J+vlIS"]),
        ctaOnClick: Chunk981631.dG4
      })
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
        value: module,
        onChange: e => t(e)
      }), (0, Chunk951288.jsx)(Chunk680018.z, {
        onClick: () => Chunk52647(module),
        text: "Set Balance"
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk905164.interactivePillContainer,
        children: (0, Chunk951288.jsx)(Chunk970815.A4, {
          balance: require,
          balanceWidgetMode: E,
          onClick: () => O()
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        style: {
          marginBottom: "4px"
        },
        children: "Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:"
      }), (0, Chunk951288.jsx)(Chunk481060.FiK, {
        className: Chunk905164.numberInput,
        value: Chunk822857,
        onChange: e => _(e)
      }), (0, Chunk951288.jsx)(Chunk680018.z, {
        onClick: () => {
          Chunk52647(null), setTimeout(() => {
            Chunk52647(module)
          }, Chunk822857)
        },
        text: "Simulate Loading State"
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk905164.interactivePillContainer,
        children: (0, Chunk951288.jsx)(Chunk970815.A4, {
          balance: require,
          balanceWidgetMode: E,
          onClick: () => O()
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

function O() {
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

function v() {
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
    })]
  })
}