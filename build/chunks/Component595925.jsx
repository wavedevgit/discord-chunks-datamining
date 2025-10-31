/** Chunk was on 42340 **/
/** chunk id: 595925, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk52647 = require("./52647.js"),
  Chunk825102 = require("./825102.js"),
  Chunk317257 = require("./317257.js"),
  Chunk120786 = require("./120786.jsx"),
  Chunk775451 = require("./775451.jsx"),
  Chunk970815 = require("./970815.jsx"),
  Chunk275388 = require("./275388.jsx"),
  Chunk237012 = require("./237012.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk386521 = require("./386521.js");

function b() {
  let {
    enabled: e
  } = (0, Chunk825102.WX)({
    location: "revenue_storybook"
  });
  return (0, Chunk951288.jsxs)("div", {
    children: [module && (0, Chunk951288.jsx)(j, {}), (0, Chunk951288.jsx)(v, {}), (0, Chunk951288.jsx)(_, {})]
  })
}

function v() {
  let [e, t] = Chunk647438.useState(150), [n, o] = Chunk647438.useState(150), [s, p] = Chunk647438.useState(500), [b, v] = Chunk647438.useState(Chunk317257.b.DEFAULT), j = () => {
    switch (b) {
      case Chunk317257.b.DEFAULT:
        v(Chunk317257.b.HIGHLIGHTED);
        break;
      case Chunk317257.b.HIGHLIGHTED:
        v(Chunk317257.b.SELECTED);
        break;
      case Chunk317257.b.SELECTED:
        v(Chunk317257.b.DEFAULT)
    }
  };
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Balance Widget Components"
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Balance Widget Menu",
      children: (0, Chunk951288.jsx)(Chunk775451.V9, {
        ctaText: Chunk388032.intl.string(Chunk388032.t["J+vlIR"]),
        ctaOnClick: Chunk981631.dG4
      })
    }), (0, Chunk951288.jsxs)(Chunk237012.E_, {
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
    }), (0, Chunk951288.jsxs)(Chunk237012.E_, {
      label: "Balance Widget Pill Interactive (click to change mode)",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        style: {
          marginBottom: "4px"
        },
        children: "Enter a number and click Set Balance to see the balance widget pill update:"
      }), (0, Chunk951288.jsx)(Chunk481060.FiK, {
        className: Chunk386521.numberInput,
        value: module,
        onChange: e => t(e)
      }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
        onClick: () => Chunk52647(module),
        text: "Set Balance"
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk386521.interactivePillContainer,
        children: (0, Chunk951288.jsx)(Chunk970815.A4, {
          balance: require,
          balanceWidgetMode: b,
          onClick: () => j()
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        style: {
          marginBottom: "4px"
        },
        children: "Enter a number (loading time in milliseconds) and click Simulate Loading State to see the balance widget pill update:"
      }), (0, Chunk951288.jsx)(Chunk481060.FiK, {
        className: Chunk386521.numberInput,
        value: Chunk825102,
        onChange: e => p(e)
      }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
        onClick: () => {
          Chunk52647(null), setTimeout(() => {
            Chunk52647(module)
          }, Chunk825102)
        },
        text: "Simulate Loading State"
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk386521.interactivePillContainer,
        children: (0, Chunk951288.jsx)(Chunk970815.A4, {
          balance: require,
          balanceWidgetMode: b,
          onClick: () => j()
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk237012.E_, {
      label: "Balance Widget Card",
      children: (0, Chunk951288.jsx)(Chunk120786.L, {
        ctaText: Chunk388032.intl.string(Chunk388032.t.H57f41),
        linkText: Chunk388032.intl.string(Chunk388032.t["7f4H7D"]),
        ctaOnClick: Chunk981631.dG4
      })
    })]
  })
}

function j() {
  let [e, t] = Chunk647438.useState("1144308439720394944");
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Orb Checkout Components"
    }), (0, Chunk951288.jsxs)(Chunk237012.E_, {
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
      }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
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

function _() {
  let {
    resetOnboardingExperience: e
  } = (0, Chunk52647.Z)();
  return (0, Chunk951288.jsxs)(Chunk237012.$0, {
    children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
      variant: "heading-xl/semibold",
      children: "Onboarding Components"
    }), (0, Chunk951288.jsxs)(Chunk237012.E_, {
      label: "Announcement Modal [Reset Dismissible Content]",
      direction: "vertical",
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-feedback-info",
        style: {
          marginBottom: "8px"
        },
        children: "After resetting your Announcement Modal State and exiting from user settings, you'll be able to see the Announcement Modal again."
      }), (0, Chunk951288.jsx)(Chunk159691.zxk, {
        onClick: () => module(),
        text: "Reset Announcement Modal State"
      })]
    })]
  })
}