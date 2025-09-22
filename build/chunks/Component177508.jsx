/** Chunk was on web.js **/
/** chunk id: 177508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => es
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk971809 = require("./971809.js"),
  Chunk164617 = require("./164617.js"),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk667202 = require("./667202.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk213734 = require("./213734.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk907862 = require("./907862.js"),
  Chunk466590 = require("./466590.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk514361 = require("./514361.js"),
  Chunk705262 = require("./705262.jsx"),
  Chunk377089 = require("./377089.js"),
  Chunk581612 = require("./581612.js"),
  Chunk580747 = require("./580747.js"),
  Chunk594174 = require("./594174.js"),
  Chunk526156 = require("./526156.jsx"),
  Chunk799071 = require("./799071.jsx"),
  Chunk554042 = require("./554042.jsx"),
  Chunk706705 = require("./706705.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk726927 = require("./726927.js"),
  Chunk177475 = require("./177475.js"),
  Chunk518797 = require("./518797.js"),
  Chunk691739 = require("./691739.js"),
  Chunk453707 = require("./453707.js"),
  Chunk315416 = require("./315416.js"),
  Chunk715720 = require("./715720.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function q(e, t) {
  if (null == e) return {};
  var n, r, i = X(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function X(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function Q() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.root,
    children: [(0, Chunk951288.jsx)(J, {}), (0, Chunk951288.jsx)(ec, {}), (0, Chunk951288.jsx)(eg, {}), (0, Chunk951288.jsx)(eE, {}), (0, Chunk951288.jsx)(em, {}), (0, Chunk951288.jsx)(ep, {}), (0, Chunk951288.jsx)(eh, {}), (0, Chunk951288.jsx)(e_, {}), (0, Chunk951288.jsx)(ef, {}), (0, Chunk951288.jsx)(eC, {}), (0, Chunk951288.jsx)(eN, {}), (0, Chunk951288.jsx)($, {}), (0, Chunk951288.jsx)(eP, {})]
  })
}

function J() {
  let e = (0, Chunk580747.Z)("highlight_mana_components");
  return (0, Chunk951288.jsx)(Chunk481060.hjN, {
    title: "Design System Controls",
    children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: e => (0, N.Z)("highlight_mana_components", e),
        note: "Highlights all mana components marked with data-mana-component",
        hideBorder: true,
        children: "Highlight Mana Components"
      })
    })
  })
}

function $() {
  let e = Object.keys(Chunk481060.DM8);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Notice"
    }), (0, Chunk951288.jsx)(Chunk481060.Kqy, {
      gap: 16,
      children: module.map(e => (0, r.jsx)(I.qXd, {
        color: I.DM8[e],
        children: (0, r.jsxs)("code", {
          children: ["NoticeColors.", e]
        })
      }, e))
    })]
  })
}
let ee = ["neutral", "blue_new", "blurple", "green_new", "red_new", "teal_new", "yellow_new", "orange_new", "pink", "purple"],
  et = ["background-surface-highest", "background-surface-higher", "background-surface-high", "background-base-low", "background-base-lower", "background-base-lowest"],
  en = ["background-gradient-lowest", "background-gradient-lower", "background-gradient-low", "background-gradient-high", "background-gradient-higher", "background-gradient-highest"],
  er = ["", "background-mod-subtle", "background-mod-normal", "background-mod-strong"],
  ei = ["critical", "warning", "positive", "info"],
  ea = ["text-default", "text-primary", "text-secondary", "text-tertiary", "text-feedback-critical", "text-feedback-warning", "text-feedback-positive", "text-feedback-info", "premium-nitro-pink-text"];

function eo() {
  let e = null !== (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      className: Chunk726927.heading,
      children: "Background Colors"
    }), et.map(e => (0, r.jsxs)("div", {
      className: U.palette,
      style: {
        backgroundColor: "var(--".concat(e, ")"),
        padding: 24
      },
      children: [(0, r.jsx)(I.Text, {
        variant: "text-md/medium",
        children: e
      }), (0, r.jsx)("div", {
        style: {
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        },
        children: er.map(e => (0, r.jsxs)("div", {
          className: U.color,
          style: {
            padding: 16,
            background: "var(--".concat(e, ")")
          },
          children: [(0, r.jsx)(I.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            children: e
          }), (0, r.jsx)("hr", {
            className: U.sectionDivider
          }), ea.map(e => (0, r.jsx)(I.Text, {
            variant: "text-xs/medium",
            style: {
              color: "var(--".concat(e, ")")
            },
            children: e
          }, e))]
        }, e))
      }), (0, r.jsx)("hr", {
        className: U.sectionDivider
      }), (0, r.jsx)("div", {
        style: {
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        },
        children: ei.map(e => {
          let t = "var(--text-feedback-".concat(e, ")");
          return (0, r.jsxs)("div", {
            className: U.color,
            style: {
              padding: 16,
              background: "var(--background-feedback-".concat(e, ")")
            },
            children: [(0, r.jsx)(I.Text, {
              variant: "text-xs/semibold",
              color: "header-secondary"
            }), (0, r.jsxs)(I.Kqy, {
              children: [(0, r.jsxs)(I.Text, {
                variant: "text-xs/semibold",
                style: {
                  color: t
                },
                children: ["background-feedback-", e]
              }), (0, r.jsx)(I.Text, {
                variant: "text-xs/normal",
                style: {
                  color: t
                },
                children: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sem semper venenatis a quisque suspendisse urna litora."
              })]
            })]
          }, e)
        })
      })]
    }, e)), module && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        className: Chunk726927.heading,
        children: "Gradient Background Colors"
      }), (0, Chunk951288.jsx)("div", {
        className: "custom-theme-background",
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          transform: "translateZ(0)"
        },
        children: en.map(e => (0, r.jsx)("div", {
          className: U.palette,
          style: {
            background: "var(--".concat(e, ")"),
            height: 400
          },
          children: (0, r.jsx)(I.Text, {
            variant: "text-xs/medium",
            children: e
          })
        }, e))
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      className: Chunk726927.heading,
      children: "Scales"
    }), ee.map(e => (0, r.jsxs)("div", {
      className: U.palette,
      children: [(0, r.jsx)(I.Text, {
        variant: "text-lg/semibold",
        children: e
      }), (0, r.jsx)("div", {
        className: U.colors,
        children: Array.from({
          length: 100
        }, (t, n) => (0, r.jsx)("div", {
          className: U.color,
          style: {
            background: "var(--".concat(e.replace("_", "-"), "-").concat(n + 1, ")")
          },
          children: (0, r.jsx)(I.f6W, {
            theme: n < 50 ? "light" : "dark",
            children: t => (0, r.jsxs)(I.Text, {
              className: t,
              variant: "text-xs/medium",
              children: [e, ".", n + 1]
            })
          })
        }, n))
      })]
    }, e))]
  })
}

function es() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk526156.Z, {
      parentSetting: Chunk726985.s6.DESIGN_SYSTEMS,
      settingsSection: Chunk981631.oAB.DESIGN_SYSTEMS,
      tabs: [{
        title: "Components",
        component: () => (0, Chunk951288.jsx)(Q, {}),
        setting: Chunk726985.s6.DESIGN_SYSTEMS_COMPONENTS
      }, {
        title: "Colors",
        component: () => (0, Chunk951288.jsx)(eo, {}),
        setting: Chunk726985.s6.DESIGN_SYSTEMS_COLORS
      }, {
        title: "Animations",
        component: () => (0, Chunk951288.jsx)(Chunk706705.Z, {}),
        setting: Chunk726985.s6.ANIMATION_TESTING
      }, {
        title: "Text Playground",
        component: () => (0, Chunk951288.jsx)(Chunk554042.Z, {}),
        setting: Chunk726985.s6.TEXT_PLAYGROUND
      }, {
        title: "Text Componnts",
        component: () => (0, Chunk951288.jsx)(Chunk799071.Z, {}),
        setting: Chunk726985.s6.TEXT_COMPONENTS
      }]
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk726927.themes,
      children: (0, Chunk951288.jsx)(Chunk705262.ZP, {
        type: Chunk705262.yH.SETTINGS,
        children: (0, Chunk951288.jsx)(Chunk705262.ZP.Basic, {
          className: Chunk726927.themeSelectionGroup
        })
      })
    })]
  })
}

function el(e) {
  var {
    component: t,
    showLoadingAnimation: n
  } = e, a = q(e, ["component", "showLoadingAnimation"]);
  let [o, s] = i.useState(false), l = i.useRef(false);
  return i.useEffect(() => (o && n && (l.current = setTimeout(() => {
    s(false)
  }, 3e3)), () => {
    l.current >= 0 && clearTimeout(l.current)
  }), [o, n]), (0, r.jsx)(t, z(W({}, a), {
    loading: n ? o : true,
    onClick: () => s(!o)
  }))
}

function ec() {
  let [e, t] = Chunk647438.useState("md"), [n, a] = Chunk647438.useState("start"), [o, l] = Chunk647438.useState(true), c = ["primary", "secondary", "critical-primary", "critical-secondary", "active", "overlay-primary", "overlay-secondary"], u = [...Chunk164617, "expressive"].map(t => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(el, {
      component: O.zxk,
      variant: t,
      text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
      size: e,
      icon: "none" !== n ? I.gw7 : true,
      iconPosition: n,
      showLoadingAnimation: o
    }, t + e), (0, r.jsx)(el, {
      component: O.zxk,
      variant: t,
      text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
      size: e,
      icon: "none" !== n ? I.gw7 : true,
      iconPosition: n,
      showLoadingAnimation: o,
      disabled: true
    }, t + e + "disabled")]
  })), d = [...Chunk164617, "icon-only"].map(t => (0, r.jsx)(el, {
    component: O.hU,
    variant: t,
    icon: I.gw7,
    size: e,
    "aria-label": "".concat(t, " ").concat(e),
    showLoadingAnimation: o
  }, t + e)), f = ["primary", "secondary", "always-white", "critical"].map(e => (0, r.jsx)(i.Fragment, {
    children: (0, r.jsx)(O.Avr, {
      variant: e,
      text: "Text button"
    })
  }, e));
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Buttons"
    }), (0, Chunk951288.jsxs)(ed, {
      title: "Button Options",
      children: [(0, Chunk951288.jsx)(Chunk755721.Gu, {
        label: "Button size",
        onChange: e => {
          let {
            value: n
          } = e;
          return t(n)
        },
        options: [{
          value: "sm",
          name: "Small"
        }, {
          value: "md",
          name: "Medium"
        }],
        value: module
      }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
        label: "Icon position",
        onChange: e => {
          let {
            value: t
          } = e;
          return a(t)
        },
        options: [{
          value: "none",
          name: "None"
        }, {
          value: "start",
          name: "Start"
        }, {
          value: "end",
          name: "End"
        }],
        value: require
      }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
        label: "Loading animation",
        onChange: e => {
          let {
            value: t
          } = e;
          return l("on" === t)
        },
        options: [{
          value: "off",
          name: "Off"
        }, {
          value: "on",
          name: "On"
        }],
        value: o ? "on" : "off"
      })]
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 16
      },
      children: [Chunk667202, Chunk442837, Chunk257465]
    }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 16,
      padding: {
        top: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Button Groups"
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-lg/medium",
        children: "Horizontal"
      }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        direction: "horizontal",
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          children: [(0, Chunk951288.jsxs)(Chunk159691.hE2, {
            size: module,
            children: [(0, Chunk951288.jsx)(el, {
              component: Chunk159691.zxk,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: o
            }), (0, Chunk951288.jsx)(el, {
              component: Chunk159691.zxk,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: o
            })]
          }), (0, Chunk951288.jsxs)(Chunk159691.hE2, {
            size: module,
            children: [(0, Chunk951288.jsx)(el, {
              component: Chunk159691.zxk,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: o
            }), (0, Chunk951288.jsx)(el, {
              component: Chunk159691.hU,
              variant: "secondary",
              icon: Chunk481060.gw7,
              "aria-label": "Clyde",
              showLoadingAnimation: o
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.Kqy, {
          gap: 16,
          children: (0, Chunk951288.jsxs)(Chunk159691.hE2, {
            size: module,
            fullWidth: true,
            children: [(0, Chunk951288.jsx)(el, {
              component: Chunk159691.zxk,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: o
            }), (0, Chunk951288.jsx)(el, {
              component: Chunk159691.zxk,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: o
            })]
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-lg/medium",
        children: "Vertical"
      }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        direction: "horizontal",
        children: [(0, Chunk951288.jsx)(Chunk481060.Kqy, {
          gap: 16,
          children: (0, Chunk951288.jsxs)(Chunk159691.hE2, {
            direction: "vertical",
            size: module,
            children: [(0, Chunk951288.jsx)(el, {
              component: Chunk159691.zxk,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: o
            }), (0, Chunk951288.jsx)(el, {
              component: Chunk159691.zxk,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: o
            })]
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Kqy, {
          gap: 16,
          children: (0, Chunk951288.jsxs)(Chunk159691.hE2, {
            fullWidth: true,
            direction: "vertical",
            size: module,
            children: [(0, Chunk951288.jsx)(el, {
              component: Chunk159691.zxk,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: o
            }), (0, Chunk951288.jsx)(el, {
              component: Chunk159691.zxk,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: o
            })]
          })
        })]
      }), (0, Chunk951288.jsx)(eu, {
        buttonSize: module
      })]
    })]
  })
}

function eu(e) {
  let {
    buttonSize: t
  } = e, [n, a] = i.useState(false);
  return (0, r.jsxs)(I.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(I.X6q, {
      variant: "heading-xl/semibold",
      children: "PlayButton"
    }), (0, r.jsx)(I.Kqy, {
      direction: "horizontal",
      gap: 16,
      children: ["dark", "mid", "light"].map(e => (0, r.jsx)("div", {
        className: U.video,
        "data-luminance": e,
        children: (0, r.jsx)(O.JM1, {
          size: t,
          playing: n,
          onClick: () => a(!n)
        })
      }, e))
    })]
  })
}

function ed(e) {
  let {
    children: t,
    title: n
  } = e, [a, s] = i.useState(false);
  return (0, r.jsxs)(I.Kqy, {
    direction: "vertical",
    gap: 0,
    padding: 16,
    className: U.floatingControls,
    children: [(0, r.jsxs)(I.Kqy, {
      direction: "horizontal",
      gap: 16,
      align: "center",
      justify: "space-between",
      children: [(0, r.jsx)(I.X6q, {
        variant: "heading-lg/semibold",
        children: n
      }), (0, r.jsx)(O.Qdh, {
        icon: a ? I.hic : I.sXD,
        onClick: () => s(!a),
        pressed: a,
        "aria-label": "Show controls"
      })]
    }), (0, r.jsx)(I.Kqy, {
      gap: 16,
      className: o()(U.floatingControlsContent, {
        [U.floatingControlsContentHidden]: !a
      }),
      children: t
    })]
  })
}

function ef() {
  let [e, t] = Chunk647438.useState("1");
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "TabBar"
    }), (0, Chunk951288.jsxs)(Chunk481060.njP, {
      type: "top",
      look: "brand",
      selectedItem: module,
      onItemSelect: e => t(e),
      className: Chunk726927.tabBar,
      children: [(0, Chunk951288.jsx)(Chunk481060.njP.Item, {
        id: "1",
        children: "Tab 1"
      }), (0, Chunk951288.jsx)(Chunk481060.njP.Item, {
        id: "2",
        children: "Tab 2"
      }), (0, Chunk951288.jsx)(Chunk481060.njP.Item, {
        id: "3",
        children: "Tab 3"
      })]
    }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
      variant: "text-md/medium",
      children: ["Selected tab: ", module]
    })]
  })
}

function e_() {
  let [e, t] = Chunk647438.useState(1), [n, a] = Chunk647438.useState(false), [o, s] = Chunk647438.useState(5), [l, c] = Chunk647438.useState(false), u = Chunk647438.useRef(null);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Context Menus"
    }), (0, Chunk951288.jsx)("span", {
      children: (0, Chunk951288.jsx)(Chunk481060.yRy, {
        targetElementRef: Chunk442837,
        shouldShow: Chunk971809,
        renderPopout: () => (0, Chunk951288.jsxs)(Chunk481060.v2r, {
          navId: "demo",
          "aria-label": "Demo Actions",
          onClose: () => null,
          onSelect: () => null,
          children: [(0, Chunk951288.jsxs)(Chunk481060.kSQ, {
            label: "Basic items",
            children: [(0, Chunk951288.jsx)(Chunk481060.sNh, {
              id: "first",
              label: "An option"
            }), (0, Chunk951288.jsx)(Chunk481060.sNh, {
              id: "second",
              label: "An option with an icon",
              icon: Chunk481060.kBi
            }), (0, Chunk951288.jsxs)(Chunk481060.sNh, {
              id: "item-with-submenu",
              label: "Item with submenu",
              children: [(0, Chunk951288.jsx)(Chunk481060.sNh, {
                id: "subitem-1",
                label: "Subitem 1"
              }), (0, Chunk951288.jsx)(Chunk481060.sNh, {
                id: "subitem-2",
                label: "Subitem 2"
              }), (0, Chunk951288.jsx)(Chunk481060.sNh, {
                id: "subitem-3",
                label: "Subitem 3"
              })]
            })]
          }), (0, Chunk951288.jsxs)(Chunk481060.kSQ, {
            label: "Inputs",
            children: [(0, Chunk951288.jsx)(Chunk481060.S89, {
              id: "checkable",
              label: "Checkbox",
              checked: require,
              action: () => Chunk120356(!require)
            }), (0, Chunk951288.jsx)(Chunk481060.k5B, {
              id: "radio-one",
              group: "a-group",
              label: "Radio 1",
              action: () => exports(1),
              checked: 1 === module
            }), (0, Chunk951288.jsx)(Chunk481060.k5B, {
              id: "radio-two",
              group: "a-group",
              label: "Radio 2",
              action: () => exports(2),
              checked: 2 === module
            }), (0, Chunk951288.jsx)(Chunk481060.k5B, {
              id: "radio-three",
              group: "a-group",
              label: "Radio 3",
              action: () => exports(3),
              checked: 3 === module
            }), (0, Chunk951288.jsx)(Chunk481060.II_, {
              id: "slider",
              label: "Slider",
              control: (e, t) => (0, r.jsx)(I._wy, {
                ref: t,
                value: o,
                minValue: 0,
                maxValue: 100,
                onChange: e => s(e),
                "aria-label": "Slider"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.Clw, {}), (0, Chunk951288.jsx)(Chunk481060.sNh, {
            id: "danger",
            label: "A destructive option",
            color: "danger",
            icon: Chunk481060.XHJ
          })]
        }),
        children: () => (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Toggle context menu",
          buttonRef: Chunk442837,
          onClick: () => Chunk164617(!Chunk971809)
        })
      })
    })]
  })
}

function ep() {
  let [e, t] = Chunk647438.useState(Chunk481060.FGA.PRIMARY), n = Chunk647438.useMemo(() => Object.entries(Chunk481060.FGA).map(e => {
    let [t, n] = e;
    return {
      label: t,
      value: n
    }
  }), []);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Tooltips"
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      children: "Legacy Tooltips"
    }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "Color",
      children: (0, Chunk951288.jsx)(Chunk481060.q4e, {
        value: module,
        onChange: exports,
        options: require
      })
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: [(0, Chunk951288.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's top aligned tooltip text!",
        position: "top",
        children: e => (0, r.jsx)(I.zxk, W({
          variant: "primary",
          text: "Tooltip on the top"
        }, e))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's right aligned tooltip text!",
        position: "left",
        children: e => (0, r.jsx)(I.zxk, W({
          variant: "primary",
          text: "Tooltip on the left"
        }, e))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's bottom aligned tooltip text!",
        position: "bottom",
        children: e => (0, r.jsx)(I.zxk, W({
          variant: "primary",
          text: "Tooltip on the bottom"
        }, e))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's right aligned tooltip text!",
        position: "right",
        children: e => (0, r.jsx)(I.zxk, W({
          variant: "primary",
          text: "Tooltip on the right"
        }, e))
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      style: {
        marginTop: 32
      },
      children: "New Mana Tooltips"
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: [(0, Chunk951288.jsx)(Chunk681715.u, {
        text: "New Mana Tooltip with animations!",
        position: "top",
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Mana Tooltip (Top)"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Left positioned animated tooltip",
        position: "left",
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Mana Tooltip (Left)"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Bottom positioned animated tooltip",
        position: "bottom",
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Mana Tooltip (Bottom)"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Right positioned animated tooltip",
        position: "right",
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Mana Tooltip (Right)"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod non proident amo.",
        position: "right",
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Three lines"
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      style: {
        marginTop: 32
      },
      children: "Tooltip Caret API Examples"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      style: {
        marginTop: 16,
        marginBottom: 8
      },
      children: "Vertical Positions"
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Top with start",
        position: "top",
        caretConfig: {
          align: "start"
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Top - Start"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Top with center",
        position: "top",
        caretConfig: {
          align: "center"
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Top - Center"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Top with end",
        position: "top",
        caretConfig: {
          align: "end"
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Top - End"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Bottom with start",
        position: "bottom",
        caretConfig: {
          align: "start"
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Bottom - Start"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Bottom with center",
        position: "bottom",
        caretConfig: {
          align: "center"
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Bottom - Center"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Bottom with end",
        position: "bottom",
        caretConfig: {
          align: "end"
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Bottom - End"
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      style: {
        marginBottom: 8
      },
      children: "Horizontal Positions"
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Left with center",
        position: "left",
        caretConfig: {
          align: "center"
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left - Center"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Right with center",
        position: "right",
        caretConfig: {
          align: "center"
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Right - Center"
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      style: {
        marginBottom: 8
      },
      children: "Custom Offset"
    }), (0, Chunk951288.jsx)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Bottom with custom",
        position: "bottom",
        caretConfig: {
          align: "custom",
          customOffset: 30
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Custom Offset"
        })
      })
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      style: {
        marginTop: 32
      },
      children: "Tooltip Delays"
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: [(0, Chunk951288.jsx)(Chunk681715.u, {
        text: "No delay (immediate)",
        delay: 0,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "No Delay"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Short delay (500ms)",
        delay: 500,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Short Delay"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: "Long delay (1000ms)",
        delay: 1e3,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Long Delay"
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      style: {
        marginTop: 32
      },
      children: "Rich Tooltips"
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: [(0, Chunk951288.jsx)(Chunk681715.i_, {
        title: "Title goes here",
        body: "Body copy goes in this section. Meow.",
        position: "top",
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Rich Tooltip (No Graphic)"
        })
      }), (0, Chunk951288.jsx)(Chunk681715.i_, {
        title: "With Graphic Asset",
        body: "This tooltip includes a graphic element on the left side",
        asset: (0, Chunk951288.jsx)("img", {
          src: Chunk518797.Z,
          alt: "Graphic slot 48px"
        }),
        position: "top",
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "With Asset"
        })
      })]
    })]
  })
}

function eh() {
  let [e, t] = Chunk647438.useState(false), [n, a] = Chunk647438.useState(false), [o, s] = Chunk647438.useState(false), [l, c] = Chunk647438.useState(false), [u, d] = Chunk647438.useState(false), [f, _] = Chunk647438.useState(false), [p, h] = Chunk647438.useState(false), [m, g] = Chunk647438.useState(false), [y, O] = Chunk647438.useState(false), [v, T] = Chunk647438.useState(false), [S, A] = Chunk647438.useState(false), [C, N] = Chunk647438.useState(false), [R, P] = Chunk647438.useState(false), [w, D] = Chunk647438.useState(false), [x, L] = Chunk647438.useState(false), [j, M] = Chunk647438.useState(false), [k, G] = Chunk647438.useState(false), [B, Z] = Chunk647438.useState(false), [Y, W] = Chunk647438.useState(false), [K, z] = Chunk647438.useState(false), [q, X] = Chunk647438.useState(false), Q = Chunk647438.useRef(null), J = Chunk647438.useRef(null), $ = Chunk647438.useRef(null), ee = Chunk647438.useRef(null), et = Chunk647438.useRef(null), en = Chunk647438.useRef(null), er = Chunk647438.useRef(null), ei = Chunk647438.useRef(null), ea = Chunk647438.useRef(null), eo = Chunk647438.useRef(null), es = Chunk647438.useRef(null), el = Chunk647438.useRef(null), ec = Chunk647438.useRef(null), eu = Chunk647438.useRef(null), ed = Chunk647438.useRef(null), ef = Chunk647438.useRef(null), e_ = Chunk647438.useRef(null), ep = Chunk647438.useRef(null), eh = Chunk647438.useRef(null), em = Chunk647438.useRef(null), eg = Chunk647438.useRef(null), eE = Chunk647438.useCallback(() => {
    exports(false), Chunk120356(false), Chunk392711(false), Chunk164617(false), Chunk257465(false), Chunk82659(false), Chunk103866(false), Chunk37148(false), Chunk159691(false), Chunk240872(false), Chunk705262(false), Chunk581612(false), Chunk594174(false), Chunk799071(false), Chunk706705(false), Chunk981631(false), Chunk177475(false), Chunk691739(false), W(false), z(false), X(false)
  }, []);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Popovers"
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: Q,
      shouldShow: module,
      onRequestClose: eE,
      caretConfig: {
        align: "center"
      },
      title: "Header",
      body: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Only with Nitro"],
      size: "sm",
      graphic: {
        type: "image",
        src: Chunk315416.Z
      },
      badge: "new",
      actions: [{
        text: "Button",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: J,
      shouldShow: require,
      onRequestClose: eE,
      caretConfig: {
        align: "center"
      },
      title: "Header",
      body: "Body",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      badge: "new",
      actions: [{
        text: "Button",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: $,
      shouldShow: o,
      onRequestClose: eE,
      caretConfig: {
        align: "center"
      },
      title: "Header",
      body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
      actions: [{
        text: "Button",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: ee,
      shouldShow: Chunk971809,
      onRequestClose: eE,
      caretConfig: {
        align: "center"
      },
      title: "Ipsum Dolor",
      body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      badge: "new",
      actions: [{
        text: "Button",
        onClick: eE
      }],
      textLink: {
        text: "Learn More",
        link: "https://discord.com",
        external: true
      }
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: et,
      shouldShow: Chunk442837,
      onRequestClose: eE,
      caretConfig: {
        align: "center"
      },
      title: "Header",
      body: "Body",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      badge: "new",
      actions: [{
        text: "Primary",
        onClick: eE,
        variant: "primary"
      }, {
        text: "Secondary",
        onClick: eE,
        variant: "secondary"
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: en,
      shouldShow: Chunk667202,
      onRequestClose: eE,
      caretConfig: {
        align: "center"
      },
      title: "No Actions",
      body: "This popover has no action buttons, just content to display.",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      badge: "new"
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: er,
      shouldShow: Chunk369585,
      onRequestClose: eE,
      caretConfig: {
        align: "end"
      },
      title: "Custom Caret API",
      body: "Using CaretConfig with END placement",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      badge: "new",
      actions: [{
        text: "Got it",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: ei,
      shouldShow: Chunk213734,
      onRequestClose: eE,
      caretConfig: {
        align: "start"
      },
      title: "Left Side Caret",
      body: "Caret positioned on the left side at start",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      badge: "early_access",
      actions: [{
        text: "Close",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: ea,
      shouldShow: Chunk681715,
      onRequestClose: eE,
      caretConfig: {
        align: "custom",
        customOffset: 50
      },
      title: "Custom Offset",
      body: "Caret positioned 50px from center with custom offset",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      badge: "beta",
      actions: [{
        text: "Amazing!",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: eo,
      shouldShow: Chunk755721,
      onRequestClose: eE,
      position: "right",
      caretConfig: {
        align: "center"
      },
      title: "Left Center Positioning",
      body: "Popover appears to the right with caret centered on the left side",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      badge: "new",
      actions: [{
        text: "Perfect!",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: es,
      shouldShow: Chunk514361,
      onRequestClose: eE,
      position: "bottom",
      caretConfig: {
        align: "center"
      },
      title: "Purple Gradient",
      body: "This popover has a beautiful purple gradient background",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      gradientColor: "purple",
      badge: "new",
      actions: [{
        text: "Looks Great!",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: el,
      shouldShow: Chunk377089,
      onRequestClose: eE,
      position: "left",
      caretConfig: {
        align: "center"
      },
      title: "Blue Gradient",
      body: "This popover showcases the blue gradient option",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      gradientColor: "blue",
      badge: "beta",
      actions: [{
        text: "Nice!",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: ec,
      shouldShow: Chunk580747,
      onRequestClose: eE,
      caretConfig: {
        align: "center"
      },
      title: "Nitro Pink Gradient",
      body: "Experience the premium nitro-pink gradient effect",
      graphic: {
        type: "image",
        src: Chunk453707.Z
      },
      gradientColor: "nitro-pink",
      textLink: {
        text: "Learn about Nitro",
        link: "https://discord.com/nitro",
        external: true
      },
      actions: [{
        text: "Get Nitro",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: eu,
      shouldShow: Chunk526156,
      onRequestClose: eE,
      caretConfig: {
        align: "center"
      },
      title: "Voice Filters",
      body: "Experience enhanced voice quality with our latest filtering technology. Perfect for gaming and streaming.",
      graphic: {
        type: "image",
        src: Chunk715720.Z
      },
      badge: "new",
      gradientColor: "purple",
      actions: [{
        text: "Try it now",
        onClick: eE
      }]
    }), (0, Chunk951288.jsx)(Chunk907862.Mb, {
      targetElementRef: ed,
      shouldShow: Chunk554042,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "With Video Asset",
      body: "Click the video to view it in the media viewer!",
      assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
      badge: "new",
      action: {
        text: "Learn More",
        onClick: eE
      }
    }), (0, Chunk951288.jsx)(Chunk907862.Mb, {
      targetElementRef: ef,
      shouldShow: Chunk726985,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "With different preview",
      body: "Click the video to view it in the media viewer!",
      previewUrl: "https://cdn.discordapp.com/assets/server_products/storefront/default-header.mov",
      assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
      badge: "new",
      action: {
        text: "Learn More",
        onClick: eE
      }
    }), (0, Chunk951288.jsx)(Chunk907862.Mb, {
      targetElementRef: e_,
      shouldShow: Chunk231338,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Vith Image",
      body: "Click the video to view it in the media viewer!",
      assetUrl: "https://placehold.co/232x131.png",
      badge: "new",
      action: {
        text: "Learn More",
        onClick: eE
      }
    }), (0, Chunk951288.jsx)(Chunk466590.e, {
      targetElementRef: ep,
      shouldShow: Chunk518797,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      steps: [{
        title: "Welcome to Quests!",
        body: "Journey to Quest Home in Discover to start earning Orbs.",
        graphic: {
          type: "image",
          src: Chunk453707.Z
        },
        badge: "new",
        action: {
          text: "Next"
        },
        gradientColor: "blue"
      }, {
        title: "Earn Rewards",
        body: "Complete quests to earn Orbs and unlock exclusive rewards.",
        graphic: {
          type: "image",
          src: Chunk715720.Z
        },
        action: {
          text: "Next"
        },
        gradientColor: "blue"
      }, {
        title: "Quest Complete!",
        body: "You're all set to start your quest adventure. Good luck!",
        graphic: {
          type: "image",
          src: Chunk453707.Z
        },
        action: {
          text: "Get Started"
        },
        gradientColor: "blue",
        textLink: {
          text: "Learn More",
          link: "https://discord.com/quests",
          external: true
        }
      }],
      onStepChange: e => {}
    }), (0, Chunk951288.jsx)(Chunk907862.J2, {
      targetElementRef: eh,
      shouldShow: Y,
      onRequestClose: eE,
      caretConfig: {
        align: "center"
      },
      title: "Experience Voice Filters",
      body: "Enhanced voice quality with our latest filtering technology. Try the expressive button!",
      graphic: {
        type: "image",
        src: Chunk715720.Z
      },
      badge: "new",
      gradientColor: "nitro-pink",
      actions: [{
        text: "Subscribe to Nitro",
        onClick: eE,
        variant: "expressive"
      }]
    }), (0, Chunk951288.jsx)(Chunk466590.e, {
      targetElementRef: em,
      shouldShow: K,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      steps: [{
        title: "Discover Features",
        body: "Explore amazing new capabilities in Discord.",
        graphic: {
          type: "image",
          src: Chunk453707.Z
        },
        badge: "new",
        action: {
          text: "Continue"
        },
        gradientColor: "purple"
      }, {
        title: "Unlock Potential",
        body: "Learn how to make the most of your Discord experience.",
        graphic: {
          type: "image",
          src: Chunk715720.Z
        },
        action: {
          text: "Almost There"
        },
        gradientColor: "blue"
      }, {
        title: "Ready to Go!",
        body: "You're all set! Notice the expressive button animation.",
        graphic: {
          type: "image",
          src: Chunk453707.Z
        },
        action: {
          text: "Get Started",
          variant: "expressive"
        },
        gradientColor: "nitro-pink",
        textLink: {
          text: "Learn More",
          link: "https://discord.com",
          external: true
        }
      }],
      onStepChange: e => {}
    }), (0, Chunk951288.jsx)(Chunk907862.Mb, {
      targetElementRef: eg,
      shouldShow: q,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Expressive Video Experience",
      body: "Watch this video with our expressive button design!",
      assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
      badge: "new",
      action: {
        text: "Experience More",
        onClick: eE,
        variant: "expressive"
      }
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Size Examples"
      }), (0, Chunk951288.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Small Content",
          buttonRef: Q,
          onClick: () => {
            eE(), exports(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Medium Content",
          buttonRef: J,
          onClick: () => {
            eE(), Chunk120356(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          buttonRef: $,
          onClick: () => {
            eE(), Chunk392711(true)
          },
          text: "No Asset"
        })]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Actions Examples"
      }), (0, Chunk951288.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "External Link",
          buttonRef: ee,
          onClick: () => {
            eE(), Chunk164617(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Two Actions",
          buttonRef: et,
          onClick: () => {
            eE(), Chunk257465(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          buttonRef: en,
          onClick: () => {
            eE(), Chunk82659(true)
          },
          text: "No Actions"
        })]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Caret API Examples"
      }), (0, Chunk951288.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Custom Caret API",
          buttonRef: er,
          onClick: () => {
            eE(), Chunk103866(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left Side Caret",
          buttonRef: ei,
          onClick: () => {
            eE(), Chunk37148(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Custom Offset",
          buttonRef: ea,
          onClick: () => {
            eE(), Chunk159691(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left Center",
          buttonRef: eo,
          onClick: () => {
            eE(), Chunk240872(true)
          }
        })]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Gradient Examples"
      }), (0, Chunk951288.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Purple Gradient",
          buttonRef: es,
          onClick: () => {
            eE(), Chunk705262(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Blue Gradient",
          buttonRef: el,
          onClick: () => {
            eE(), Chunk581612(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Nitro Pink Gradient",
          buttonRef: ec,
          onClick: () => {
            eE(), Chunk594174(true)
          }
        })]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "With Asset"
      }), (0, Chunk951288.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Voice Filters",
          buttonRef: eu,
          onClick: () => {
            eE(), Chunk799071(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Video Media Viewer",
          buttonRef: ed,
          onClick: () => {
            eE(), Chunk706705(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Video with Different Preview",
          buttonRef: ef,
          onClick: () => {
            eE(), Chunk981631(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "With image",
          buttonRef: e_,
          onClick: () => {
            eE(), Chunk177475(true)
          }
        })]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Multi-Step"
      }), (0, Chunk951288.jsx)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Multi-Step",
          buttonRef: ep,
          onClick: () => {
            eE(), Chunk691739(true)
          }
        })
      })]
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Expressive"
      }), (0, Chunk951288.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Expressive Popover",
          buttonRef: eh,
          onClick: () => {
            eE(), W(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Expressive Multi-Step",
          buttonRef: em,
          onClick: () => {
            eE(), z(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Expressive Video",
          buttonRef: eg,
          onClick: () => {
            eE(), X(true)
          }
        })]
      })]
    })]
  })
}

function em() {
  let [e, t] = Chunk647438.useState(false), [n, a] = Chunk647438.useState(false), [o, s] = Chunk647438.useState("auto");
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Checkboxes"
      }), (0, Chunk951288.jsx)(Chunk481060.XZJ, {
        checked: module,
        onChange: e => t(e),
        label: "Checkbox input"
      }), (0, Chunk951288.jsx)(Chunk481060.XZJ, {
        checked: module,
        onChange: e => t(e),
        disabled: true,
        label: "Disabled checkbox"
      }), (0, Chunk951288.jsx)(Chunk755721.$q, {
        value: module,
        onChange: (e, n) => t(n),
        readOnly: true,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Read-only checkbox"
        })
      }), (0, Chunk951288.jsx)(Chunk755721.$q, {
        value: module,
        onChange: (e, n) => t(n),
        type: Chunk755721.M0.ROW,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Checkbox row"
        })
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Switches"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        hideBorder: true,
        value: require,
        onChange: e => a(e),
        children: "FormSwitch with a label"
      }), (0, Chunk951288.jsx)(Chunk481060.j7V, {
        disabled: true,
        hideBorder: true,
        value: require,
        onChange: e => a(e),
        children: "FormSwitch with a label"
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Radio Buttons"
      }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
        children: (0, Chunk951288.jsx)(Chunk755721.Gu, {
          onChange: e => {
            let {
              value: t
            } = e;
            return s(t)
          },
          options: [{
            value: "auto",
            name: "Auto"
          }, {
            value: "720p",
            name: "720p"
          }, {
            value: "1080p",
            name: "1080p"
          }],
          value: o
        })
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Slider"
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk726927.slider,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Standard slider"
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50,
          defaultValue: 50,
          markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk726927.slider,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Sticky markers"
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50,
          markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          stickToMarkers: true
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk726927.slider,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Non-uniform markers"
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50,
          markers: [0, 20, 50, 100],
          equidistant: false
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk726927.slider,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Non-uniform equidistant markers"
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50,
          markers: [0, 20, 50, 100],
          equidistant: true
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk726927.slider,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "No markers"
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk726927.slider,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Mini slider"
        }), (0, Chunk951288.jsx)(Chunk481060.iRW, {
          mini: true,
          minValue: 0,
          maxValue: 100,
          initialValue: 50
        })]
      })]
    })]
  })
}

function eg() {
  let [e, t] = Chunk647438.useState(null), [n, a] = Chunk647438.useState(null), [o, s] = Chunk647438.useState([]), [c, u] = Chunk647438.useState([]), [d, f] = Chunk647438.useState([]);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "SearchableSelect"
    }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
      placeholder: "Single select",
      value: module,
      onChange: e => t(e),
      options: Chunk971809.G
    }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
      placeholder: "Single select (clearable)",
      clearable: true,
      value: require,
      onChange: e => a(e),
      options: Chunk971809.G
    }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
      placeholder: "Multi select",
      multi: true,
      value: o,
      onChange: e => s(e),
      options: Chunk971809.G
    }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
      placeholder: "Multi select (clearable)",
      multi: true,
      clearable: true,
      value: Chunk257465,
      onChange: e => f(e),
      options: Chunk971809.G
    }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
      placeholder: "Multi select (custom pills)",
      multi: true,
      value: Chunk164617,
      onChange: e => u(e),
      options: Chunk971809.G,
      hidePills: true,
      customPillContainerClassName: Chunk726927.customPillContainer,
      renderCustomPill: e => (0, r.jsx)("div", {
        style: {
          padding: 8,
          border: "1px solid var(--bg-brand)",
          borderRadius: 8
        },
        children: (0, r.jsx)(I.Text, {
          variant: "text-md/bold",
          children: e.label
        })
      })
    })]
  })
}

function eE() {
  let [e, t] = Chunk647438.useState(""), [n, a] = Chunk647438.useState(""), [o, s] = Chunk647438.useState(""), l = (0, Chunk377089.U)("UserSettingsDesignSystems");
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "TextInput"
    }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "Search",
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [(0, Chunk951288.jsx)(Chunk481060.E1j, {
          placeholder: "Search...",
          onChange: e => s(e),
          query: o,
          onClear: () => Chunk392711("")
        }), (0, Chunk951288.jsx)(Chunk481060.E1j, {
          size: "sm",
          placeholder: "Search...",
          onChange: e => s(e),
          query: o,
          onClear: () => Chunk392711("")
        })]
      })
    }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "Disabled",
      disabled: true,
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        placeholder: "Disabled",
        disabled: true
      })
    }), (0, Chunk951288.jsx)(Chunk481060.oil, {
      label: "Error",
      required: true,
      error: "This must have a value"
    }), (0, Chunk951288.jsx)(Chunk481060.oil, {
      label: "Error",
      defaultValue: "Not a valid value",
      error: "This has an error."
    }), (0, Chunk951288.jsx)(Chunk481060.oil, {
      label: "minLength",
      minLength: 6,
      value: module,
      onChange: exports,
      placeholder: "Enter at least 6 characters"
    }), (0, Chunk951288.jsx)(Chunk481060.oil, {
      label: "Read only",
      value: "Read-only, not-editable field",
      editable: false
    }), (0, Chunk951288.jsx)(Chunk481060.oil, {
      label: "Input with a label",
      placeholder: "Real placeholder",
      value: module,
      onChange: exports
    }), Chunk971809 && (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "Leading and Trailing",
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk951288.jsx)(Chunk481060.Wn, {
          messageType: Chunk481060.QYI.WARNING,
          children: "Leading and trailing accessories are not yet supported in the public API."
        }), (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            leading: Chunk481060.qJs,
            placeholder: "Create Channel",
            value: module,
            onChange: exports
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            trailing: Chunk481060.lOy,
            placeholder: "Send Message",
            value: module,
            onChange: exports
          })]
        })]
      })
    }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "Text area",
      children: (0, Chunk951288.jsx)(Chunk481060.Kx8, {
        placeholder: "Text area placeholder",
        showCharacterCount: true,
        value: require,
        onChange: Chunk120356
      })
    })]
  })
}

function eb(e) {
  let {
    transitionState: t
  } = e, [n, a] = i.useState(false), [o, s] = i.useState(I.CgR.SMALL), [l, c] = i.useState(false), u = n ? U.modalOutlines : "";
  return (0, r.jsxs)(I.Y0X, {
    transitionState: t,
    size: o,
    parentComponent: "UserSettingsDesignSystem",
    children: [(0, r.jsx)(I.xBx, {
      className: u,
      children: (0, r.jsx)(I.X6q, {
        variant: "heading-xl/semibold",
        children: "Modal"
      })
    }), (0, r.jsx)(I.hzk, {
      className: u,
      children: (0, r.jsxs)(I.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(I.xJW, {
          title: "Modal Size",
          children: (0, r.jsx)(I.q4e, {
            value: o,
            onChange: s,
            options: Object.entries(I.CgR).map(e => {
              let [t, n] = e;
              return {
                label: t,
                value: n
              }
            })
          })
        }), (0, r.jsx)(I.hjN, {
          title: "Options",
          children: (0, r.jsxs)(I.Kqy, {
            gap: 16,
            children: [(0, r.jsx)(v.$q, {
              value: n,
              onChange: (e, t) => a(t),
              children: (0, r.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show Section Outlines"
              })
            }), (0, r.jsx)(v.$q, {
              value: l,
              onChange: (e, t) => c(t),
              children: (0, r.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show secondary action in footer"
              })
            })]
          })
        })]
      })
    }), (0, r.jsx)(I.mzw, {
      className: u,
      children: (0, r.jsxs)(I.Kqy, {
        direction: "horizontal",
        justify: "end",
        gap: 8,
        children: [l && (0, r.jsx)(I.zxk, {
          variant: "secondary",
          text: "Secondary Action"
        }), (0, r.jsx)(I.zxk, {
          variant: "primary",
          text: "Close"
        })]
      })
    })]
  })
}

function ey(e) {
  let {
    transitionState: t,
    onClose: n,
    modalCount: a = 1
  } = e, [o, s] = i.useState("replace"), l = () => {
    let e = a + 1;
    (0, I.h7j)(t => (0, r.jsx)(ey, z(W({}, t), {
      modalCount: e
    })), {
      stackingBehavior: o
    })
  }, c = a < 3;
  return (0, r.jsxs)(I.Y0X, {
    transitionState: t,
    size: 1 === a ? I.CgR.LARGE : 2 === a ? I.CgR.MEDIUM : I.CgR.SMALL,
    parentComponent: "UserSettingsDesignSystem",
    children: [(0, r.jsx)(I.xBx, {
      children: (0, r.jsx)(I.X6q, {
        variant: "heading-xl/semibold",
        children: "Modal Stacking Demo"
      })
    }), (0, r.jsx)(I.hzk, {
      children: (0, r.jsxs)(I.Kqy, {
        gap: 16,
        children: [(0, r.jsxs)(I.Text, {
          variant: "text-md/medium",
          children: ["This is modal level ", a, "."]
        }), c && (0, r.jsx)(I.xJW, {
          title: "Stacking Behavior",
          children: (0, r.jsx)(I.q4e, {
            value: o,
            onChange: s,
            options: [{
              label: "Replace (default)",
              value: "replace"
            }, {
              label: "Stack",
              value: "stack"
            }, {
              label: "Replace All",
              value: "replaceAll"
            }]
          })
        }), (0, r.jsxs)(I.Kqy, {
          gap: 8,
          children: [(0, r.jsxs)(I.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, r.jsx)("strong", {
              children: "Replace One:"
            }), " The modal directly below is hidden (default behavior)"]
          }), (0, r.jsxs)(I.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, r.jsx)("strong", {
              children: "Replace All:"
            }), " All modals below are hidden"]
          }), (0, r.jsxs)(I.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, r.jsx)("strong", {
              children: "Stack:"
            }), " The modal directly below remains visible"]
          })]
        })]
      })
    }), (0, r.jsx)(I.mzw, {
      children: (0, r.jsxs)(I.Kqy, {
        direction: "horizontal",
        justify: "end",
        gap: 8,
        children: [(0, r.jsx)(I.zxk, {
          variant: "secondary",
          text: "Close",
          onClick: n
        }), c && (0, r.jsx)(I.zxk, {
          variant: "primary",
          text: "Open Next Modal",
          onClick: l
        })]
      })
    })]
  })
}

function eO(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;

  function i(e) {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: U.modalOutlines,
      style: {
        padding: "24px"
      },
      children: t
    })
  }
  return (0, r.jsxs)(d.I, {
    transitionState: t,
    onClose: n,
    children: [(0, r.jsx)("div", {
      className: U.modalOutlines,
      children: (0, r.jsx)(g.x, {
        title: "Demo Modal",
        subtitle: "The ModalHeader can have leading and trailing items on either side of the text",
        leading: (0, r.jsx)(i, {}),
        trailing: (0, r.jsx)(i, {})
      })
    }), (0, r.jsx)("div", {
      className: U.modalOutlines,
      children: (0, r.jsx)(h.f, {
        controls: (0, r.jsx)(i, {
          children: "This ModalBody renders any controls here"
        }),
        children: (0, r.jsx)(i, {
          children: "This is the main ModalBody. This area scrolls if there is enough content"
        })
      })
    }), (0, r.jsx)("div", {
      className: U.modalOutlines,
      children: (0, r.jsx)(m.m, {
        children: (0, r.jsx)(i, {
          children: "This is the ModalFooter"
        })
      })
    }), (0, r.jsx)("div", {
      className: U.modalOutlines,
      children: (0, r.jsx)(p.G, {
        leading: (0, r.jsx)(i, {
          children: "ModalActionBar leading"
        }),
        actions: [{
          variant: "secondary",
          text: "Cancel",
          onClick: n
        }, {
          variant: "primary",
          text: "Submit",
          onClick: n
        }]
      })
    })]
  })
}

function ev(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [a, o] = i.useState("md"), [s, l] = i.useState("Demo Modal"), [c, u] = i.useState("Header body copy"), [f, _] = i.useState(false), [E, b] = i.useState(false), [y, O] = i.useState(false), [T, S] = i.useState(false), [A, C] = i.useState(false);
  return (0, r.jsxs)(d.I, {
    transitionState: t,
    onClose: n,
    size: a,
    children: [(0, r.jsx)(g.x, {
      title: s,
      subtitle: c,
      alignCenter: f
    }), (0, r.jsx)(h.f, {
      controls: E ? (0, r.jsx)(I.E1j, {
        placeholder: "Search",
        onChange: () => null,
        query: ""
      }) : true,
      children: (0, r.jsxs)(I.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(I.xJW, {
          title: "Modal Size",
          children: (0, r.jsx)(I.q4e, {
            value: a,
            onChange: o,
            options: [{
              label: "Small",
              value: "sm"
            }, {
              label: "Medium",
              value: "md"
            }, {
              label: "Large",
              value: "lg"
            }, {
              label: "XLarge",
              value: "xl"
            }]
          })
        }), (0, r.jsx)(I.oil, {
          label: "Header Title",
          onChange: l,
          defaultValue: s
        }), (0, r.jsx)(I.oil, {
          label: "Header body",
          onChange: u,
          defaultValue: c
        }), (0, r.jsx)(I.xJW, {
          title: "Optional Content",
          children: (0, r.jsxs)(I.Kqy, {
            gap: 12,
            children: [(0, r.jsx)(v.$q, {
              value: f,
              onChange: (e, t) => _(t),
              children: (0, r.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Header Align Center"
              })
            }), (0, r.jsx)(v.$q, {
              value: E,
              onChange: (e, t) => b(t),
              children: (0, r.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show Search Input"
              })
            }), (0, r.jsx)(v.$q, {
              value: y,
              onChange: (e, t) => O(t),
              children: (0, r.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show Preview Content"
              })
            }), (0, r.jsx)(v.$q, {
              value: T,
              onChange: (e, t) => S(t),
              children: (0, r.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show Action Bar Leading Input"
              })
            }), (0, r.jsx)(v.$q, {
              value: A,
              onChange: (e, t) => C(t),
              children: (0, r.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Full Width Actions"
              })
            })]
          })
        })]
      })
    }), y && (0, r.jsxs)(m.m, {
      children: [(0, r.jsx)(I.X6q, {
        variant: "heading-lg/semibold",
        children: "Celebration Station"
      }), (0, r.jsx)(I.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: "32 Members ● 19 Online"
      })]
    }), (0, r.jsx)(p.G, {
      leading: T ? (0, r.jsx)(p.B, {
        value: false,
        onChange: (e, t) => {},
        text: "Don't show again"
      }) : true,
      actionsFullWidth: A,
      actions: [{
        variant: "secondary",
        text: "Cancel",
        onClick: n
      }, {
        variant: "primary",
        text: "Submit",
        onClick: n
      }]
    })]
  })
}

function eI(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;

  function a(e) {
    let {
      text: t
    } = e, [n, a] = i.useState(false);
    return (0, r.jsx)("div", {
      style: {
        padding: "8px 0"
      },
      children: (0, r.jsx)(v.$q, {
        value: n,
        onChange: (e, t) => a(t),
        children: (0, r.jsx)(I.Text, {
          variant: "text-md/medium",
          children: t
        })
      })
    })
  }
  return (0, r.jsxs)(_.Modal, {
    transitionState: t,
    onClose: n,
    size: "md",
    title: "Invite to server",
    input: (0, r.jsx)(I.E1j, {
      placeholder: "Search",
      onChange: () => null,
      query: ""
    }),
    preview: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(I.X6q, {
        variant: "heading-lg/semibold",
        children: "Celebration Station"
      }), (0, r.jsx)(I.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: "32 Members ● 19 Online"
      })]
    }),
    actions: [{
      variant: "secondary",
      text: "Cancel",
      onClick: n
    }, {
      variant: "primary",
      text: "Send Invite",
      icon: I.kBi,
      iconPosition: "end",
      onClick: n
    }],
    children: [(0, r.jsx)(a, {
      text: "John Doe"
    }), (0, r.jsx)(a, {
      text: "Mark"
    }), (0, r.jsx)(a, {
      text: "KawaiiHermit"
    }), (0, r.jsx)(a, {
      text: "YurBruhGio"
    }), (0, r.jsx)(a, {
      text: "John Doe"
    }), (0, r.jsx)(a, {
      text: "Mark"
    }), (0, r.jsx)(a, {
      text: "KawaiiHermit"
    }), (0, r.jsx)(a, {
      text: "YurBruhGio"
    }), (0, r.jsx)(a, {
      text: "John Doe"
    }), (0, r.jsx)(a, {
      text: "Mark"
    }), (0, r.jsx)(a, {
      text: "KawaiiHermit"
    }), (0, r.jsx)(a, {
      text: "YurBruhGio"
    }), (0, r.jsx)(a, {
      text: "John Doe"
    }), (0, r.jsx)(a, {
      text: "Mark"
    }), (0, r.jsx)(a, {
      text: "KawaiiHermit"
    }), (0, r.jsx)(a, {
      text: "YurBruhGio"
    })]
  })
}

function eT(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;
  return (0, r.jsx)(_.Modal, {
    transitionState: t,
    onClose: n,
    title: "Alert Modal",
    subtitle: "This is an alert",
    actions: [{
      variant: "secondary",
      text: "Cancel",
      onClick: n
    }, {
      variant: "critical-primary",
      text: "Confirm",
      onClick: n
    }]
  })
}

function eS(e) {
  let {
    transitionState: t,
    onClose: a
  } = e, [o, s] = i.useState(0), [l, u] = i.useState(false), d = [{
    label: "Image",
    value: 0
  }, {
    label: "Lottie",
    value: 1
  }, {
    label: "Rive",
    value: 2
  }, {
    label: "Looping Video",
    value: 3
  }, {
    label: "Dynamic Content",
    value: 4
  }], _ = i.useMemo(() => 0 === o ? {
    type: "image",
    src: G
  } : 1 === o ? {
    type: "lottie",
    lottie: () => n.e("94792").then(n.t.bind(n, 972951, 19)),
    aspectRatio: "6/4"
  } : 2 === o ? {
    type: "rive",
    rive: c.PerfTestRive
  } : 3 === o ? {
    type: "video",
    src: Z.Z,
    fallbackImageSrc: G,
    loop: true,
    loopAt: 2.5
  } : 4 === o ? {
    type: "dynamic",
    component: I.AX$.DEMO,
    props: {
      text: "Dynamic Content"
    }
  } : true, [o]);
  return (0, r.jsxs)(f.I, {
    transitionState: t,
    onClose: a,
    gradientColor: "nitro-pink",
    graphic: _,
    badge: l ? "beta" : true,
    title: "Expressive Modal",
    subtitle: "This is an expressive modal with a header image",
    actions: [{
      variant: "secondary",
      text: "Cancel",
      onClick: a
    }, {
      variant: "primary",
      text: "Submit",
      onClick: a
    }],
    children: [(0, r.jsx)(I.xJW, {
      title: "Graphic Type",
      children: (0, r.jsx)(I.q4e, {
        value: o,
        onChange: s,
        options: d
      })
    }), (0, r.jsx)(I.xJW, {
      style: {
        paddingTop: "16px"
      },
      children: (0, r.jsx)(v.$q, {
        value: l,
        onChange: (e, t) => u(t),
        children: (0, r.jsx)(I.Text, {
          variant: "text-md/medium",
          children: "Show beta badge"
        })
      })
    })]
  })
}

function eA(e) {
  let {
    transitionState: t,
    onClose: n,
    modalCount: a = 1
  } = e, [o, s] = i.useState("replace"), l = () => {
    let e = a + 1;
    (0, I.h7j)(t => (0, r.jsx)(eA, z(W({}, t), {
      modalCount: e
    })), {
      stackingBehavior: o
    })
  }, c = a < 3;
  return (0, r.jsx)(_.Modal, {
    transitionState: t,
    onClose: n,
    size: 1 === a ? "md" : "sm",
    title: "Mana Modal Stacking Demo",
    subtitle: "This is modal level ".concat(a, "."),
    actions: [{
      variant: "secondary",
      text: "Close",
      onClick: n
    }, ...c ? [{
      variant: "primary",
      text: "Open Next Modal",
      onClick: l
    }] : []],
    children: (0, r.jsxs)(I.Kqy, {
      gap: 16,
      children: [c && (0, r.jsx)(I.xJW, {
        title: "Stacking Behavior",
        children: (0, r.jsx)(I.q4e, {
          value: o,
          onChange: s,
          options: [{
            label: "Replace (default)",
            value: "replace"
          }, {
            label: "Stack",
            value: "stack"
          }, {
            label: "Replace All",
            value: "replaceAll"
          }]
        })
      }), (0, r.jsxs)(I.Kqy, {
        gap: 8,
        children: [(0, r.jsxs)(I.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, r.jsx)("strong", {
            children: "Replace One:"
          }), " The modal directly below is hidden (default behavior)"]
        }), (0, r.jsxs)(I.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, r.jsx)("strong", {
            children: "Replace All:"
          }), " All modals below are hidden"]
        }), (0, r.jsxs)(I.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, r.jsx)("strong", {
            children: "Stack:"
          }), " The modal directly below remains visible"]
        })]
      })]
    })
  })
}

function eC() {
  let e = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eb, W({}, e)))
    },
    t = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(ey, W({}, e)))
    },
    n = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eO, W({}, e)))
    },
    i = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(ev, W({}, e)))
    },
    a = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eI, W({}, e)))
    },
    o = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eT, W({}, e)))
    },
    s = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eS, W({}, e)))
    },
    l = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eA, W({}, e)))
    },
    c = () => {
      Chunk240872.Z.show({
        title: "Alert",
        body: "This is an alert",
        confirmText: "Confirm Text",
        cancelText: "Cancel Text"
      })
    };
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Modals (Void)"
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open modal",
        onClick: module
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Show Alert",
        onClick: Chunk164617
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open modal stacking demo",
        onClick: exports
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Modals (Mana)"
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open modal section visualizer",
        onClick: require
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open demo modal",
        onClick: Chunk647438
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open sample invite modal",
        onClick: Chunk120356
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open sample alert modal",
        onClick: o
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open expressive modal",
        onClick: Chunk392711
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open Mana modal stacking demo",
        onClick: Chunk971809
      })]
    })]
  })
}

function eN() {
  let e = ["SIZE_16", "SIZE_20", "SIZE_24", "SIZE_32", "SIZE_40", "SIZE_44", "SIZE_48", "SIZE_80", "SIZE_96", "SIZE_120"];
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "User Avatars"
    }), (0, Chunk951288.jsx)("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      },
      children: module.map(e => (0, r.jsx)(eR, {
        size: e
      }, e))
    })]
  })
}

function eR(e) {
  let {
    size: t
  } = e, {
    user: n
  } = (0, u.cj)([P.default], () => ({
    user: P.default.getCurrentUser()
  })), i = Number(t.split("_")[1]);
  return (0, r.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 8
    },
    children: [(0, r.jsxs)(I.X6q, {
      variant: "heading-sm/semibold",
      style: {
        textAlign: "center"
      },
      children: [i, "px"]
    }), (0, r.jsx)(I.qEK, {
      src: null == n ? true : n.getAvatarURL(true, i),
      size: t,
      "aria-label": null == n ? true : n.username,
      status: k.Sk.ONLINE
    }), (0, r.jsx)(I.qEK, {
      src: null == n ? true : n.getAvatarURL(true, i),
      size: t,
      "aria-label": null == n ? true : n.username,
      status: k.Sk.ONLINE,
      isTyping: true
    }), (0, r.jsx)(I.qEK, {
      src: null == n ? true : n.getAvatarURL(true, i),
      size: t,
      "aria-label": null == n ? true : n.username,
      status: k.Sk.ONLINE,
      isMobile: true
    }), (0, r.jsx)(I.qEK, {
      src: null == n ? true : n.getAvatarURL(true, i),
      size: t,
      "aria-label": null == n ? true : n.username,
      isSpeaking: true
    })]
  })
}

function eP() {
  let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return (0, Chunk951288.jsx)(Chunk481060.f6W, {
    theme: Chunk231338.BR.DARKER,
    disableAdaptiveTheme: true,
    children: t => (0, r.jsxs)("div", {
      className: o()(t, U.section),
      children: [(0, r.jsx)(I.zxk, {
        variant: "secondary",
        text: "Button",
        fullWidth: true
      }), (0, r.jsx)(I.f6W, {
        theme: k.BR.LIGHT,
        children: t => (0, r.jsxs)("div", {
          className: o()(t, U.section),
          children: [(0, r.jsx)(I.zxk, {
            variant: "secondary",
            text: "Button",
            fullWidth: true
          }), (0, r.jsx)(I.f6W, {
            theme: k.BR.DARKER,
            children: e => (0, r.jsx)("div", {
              className: o()(e, U.section),
              children: (0, r.jsx)(I.zxk, {
                variant: "secondary",
                text: "Button",
                fullWidth: true
              })
            })
          }), (0, r.jsx)(I.f6W, {
            gradient: e,
            children: e => (0, r.jsx)("div", {
              className: o()(e, U.section),
              children: (0, r.jsx)(I.zxk, {
                variant: "secondary",
                text: "Button",
                fullWidth: true
              })
            })
          })]
        })
      })]
    })
  })
}