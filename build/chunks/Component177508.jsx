/** Chunk was on web.js **/
/** chunk id: 177508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ed
}), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk971809 = require("./971809.js"),
  Chunk442837 = require("./442837.js"),
  Chunk836459 = require("./836459.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk374415 = require("./374415.jsx"),
  Chunk861066 = require("./861066.jsx"),
  Chunk780842 = require("./780842.jsx"),
  Chunk179538 = require("./179538.jsx"),
  Chunk279570 = require("./279570.jsx"),
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

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function Q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function $(e, t) {
  if (null == e) return {};
  var n, r, i = ee(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function ee(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function et() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.root,
    children: [(0, Chunk951288.jsx)(en, {}), (0, Chunk951288.jsx)(e_, {}), (0, Chunk951288.jsx)(eO, {}), (0, Chunk951288.jsx)(ev, {}), (0, Chunk951288.jsx)(ey, {}), (0, Chunk951288.jsx)(eE, {}), (0, Chunk951288.jsx)(eb, {}), (0, Chunk951288.jsx)(eg, {}), (0, Chunk951288.jsx)(em, {}), (0, Chunk951288.jsx)(ew, {}), (0, Chunk951288.jsx)(eD, {}), (0, Chunk951288.jsx)(er, {}), (0, Chunk951288.jsx)(eL, {})]
  })
}

function en() {
  let e = (0, Chunk580747.Z)("highlight_mana_components");
  return (0, Chunk951288.jsx)(Chunk481060.hjN, {
    title: "Design System Controls",
    children: (0, Chunk951288.jsx)(Chunk481060.xJW, {
      children: (0, Chunk951288.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: e => (0, D.Z)("highlight_mana_components", e),
        note: "Highlights all mana components marked with data-mana-component",
        hideBorder: true,
        children: "Highlight Mana Components"
      })
    })
  })
}

function er() {
  let e = Object.keys(Chunk481060.DM8);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Notice"
    }), (0, Chunk951288.jsx)(Chunk481060.Kqy, {
      gap: 16,
      children: module.map(e => (0, r.jsx)(C.qXd, {
        color: C.DM8[e],
        children: (0, r.jsxs)("code", {
          children: ["NoticeColors.", e]
        })
      }, e))
    })]
  })
}
let ei = ["neutral", "blue_new", "blurple", "green_new", "red_new", "teal_new", "yellow_new", "orange_new", "pink", "purple"],
  eo = ["background-surface-highest", "background-surface-higher", "background-surface-high", "background-base-low", "background-base-lower", "background-base-lowest"],
  ea = ["background-gradient-lowest", "background-gradient-lower", "background-gradient-low", "background-gradient-high", "background-gradient-higher", "background-gradient-highest"],
  es = ["", "background-mod-subtle", "background-mod-normal", "background-mod-strong"],
  el = ["critical", "warning", "positive", "info"],
  ec = ["text-default", "text-primary", "text-secondary", "text-tertiary", "text-feedback-critical", "text-feedback-warning", "text-feedback-positive", "text-feedback-info", "premium-nitro-pink-text"];

function eu() {
  let e = null !== (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      className: Chunk726927.heading,
      children: "Background Colors"
    }), eo.map(e => (0, r.jsxs)("div", {
      className: F.palette,
      style: {
        backgroundColor: "var(--".concat(e, ")"),
        padding: 24
      },
      children: [(0, r.jsx)(C.Text, {
        variant: "text-md/medium",
        children: e
      }), (0, r.jsx)("div", {
        style: {
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        },
        children: es.map(e => (0, r.jsxs)("div", {
          className: F.color,
          style: {
            padding: 16,
            background: "var(--".concat(e, ")")
          },
          children: [(0, r.jsx)(C.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            children: e
          }), (0, r.jsx)("hr", {
            className: F.sectionDivider
          }), ec.map(e => (0, r.jsx)(C.Text, {
            variant: "text-xs/medium",
            style: {
              color: "var(--".concat(e, ")")
            },
            children: e
          }, e))]
        }, e))
      }), (0, r.jsx)("hr", {
        className: F.sectionDivider
      }), (0, r.jsx)("div", {
        style: {
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        },
        children: el.map(e => {
          let t = "var(--text-feedback-".concat(e, ")");
          return (0, r.jsxs)("div", {
            className: F.color,
            style: {
              padding: 16,
              background: "var(--background-feedback-".concat(e, ")")
            },
            children: [(0, r.jsx)(C.Text, {
              variant: "text-xs/semibold",
              color: "header-secondary"
            }), (0, r.jsxs)(C.Kqy, {
              children: [(0, r.jsxs)(C.Text, {
                variant: "text-xs/semibold",
                style: {
                  color: t
                },
                children: ["background-feedback-", e]
              }), (0, r.jsx)(C.Text, {
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
        children: ea.map(e => (0, r.jsx)("div", {
          className: F.palette,
          style: {
            background: "var(--".concat(e, ")"),
            height: 400
          },
          children: (0, r.jsx)(C.Text, {
            variant: "text-xs/medium",
            children: e
          })
        }, e))
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      className: Chunk726927.heading,
      children: "Scales"
    }), ei.map(e => (0, r.jsxs)("div", {
      className: F.palette,
      children: [(0, r.jsx)(C.Text, {
        variant: "text-lg/semibold",
        children: e
      }), (0, r.jsx)("div", {
        className: F.colors,
        children: Array.from({
          length: 100
        }, (t, n) => (0, r.jsx)("div", {
          className: F.color,
          style: {
            background: "var(--".concat(e.replace("_", "-"), "-").concat(n + 1, ")")
          },
          children: (0, r.jsx)(C.f6W, {
            theme: n < 50 ? "light" : "dark",
            children: t => (0, r.jsxs)(C.Text, {
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

function ed() {
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)(Chunk526156.Z, {
      parentSetting: Chunk726985.s6.DESIGN_SYSTEMS,
      settingsSection: Chunk981631.oAB.DESIGN_SYSTEMS,
      tabs: [{
        title: "Components",
        component: () => (0, Chunk951288.jsx)(et, {}),
        setting: Chunk726985.s6.DESIGN_SYSTEMS_COMPONENTS
      }, {
        title: "Colors",
        component: () => (0, Chunk951288.jsx)(eu, {}),
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

function ef(e) {
  var {
    component: t,
    showLoadingAnimation: n
  } = e, o = $(e, ["component", "showLoadingAnimation"]);
  let [a, s] = i.useState(false), l = i.useRef(false);
  return i.useEffect(() => (a && n && (l.current = setTimeout(() => {
    s(false)
  }, 3e3)), () => {
    l.current >= 0 && clearTimeout(l.current)
  }), [a, n]), (0, r.jsx)(t, J(X({}, o), {
    loading: n ? a : true,
    onClick: () => s(!a)
  }))
}

function e_() {
  let [e, t] = Chunk647438.useState("md"), [n, o] = Chunk647438.useState("start"), [a, l] = Chunk647438.useState(true), c = ["primary", "secondary", "critical-primary", "critical-secondary", "active", "overlay-primary", "overlay-secondary"], u = [...Chunk442837, "expressive"].map(t => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(ef, {
      component: d.z,
      variant: t,
      text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
      size: e,
      icon: "none" !== n ? C.gw7 : true,
      iconPosition: n,
      showLoadingAnimation: a
    }, t + e), (0, r.jsx)(ef, {
      component: d.z,
      variant: t,
      text: "".concat((0, s.capitalize)(t), " ").concat(e.toUpperCase()),
      size: e,
      icon: "none" !== n ? C.gw7 : true,
      iconPosition: n,
      showLoadingAnimation: a,
      disabled: true
    }, t + e + "disabled")]
  })), p = [...Chunk442837, "icon-only"].map(t => (0, r.jsx)(ef, {
    component: _.h,
    variant: t,
    icon: C.gw7,
    size: e,
    "aria-label": "".concat(t, " ").concat(e),
    showLoadingAnimation: a
  }, t + e)), m = ["primary", "secondary", "always-white", "critical"].map(e => (0, r.jsx)(i.Fragment, {
    children: (0, r.jsx)(h.A, {
      variant: e,
      text: "Text button"
    })
  }, e));
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Buttons"
    }), (0, Chunk951288.jsxs)(eh, {
      title: "Button Options",
      children: [(0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: "Button size",
        children: (0, Chunk951288.jsx)(Chunk481060.FXm, {
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
        })
      }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: "Icon position",
        children: (0, Chunk951288.jsx)(Chunk481060.FXm, {
          onChange: e => {
            let {
              value: t
            } = e;
            return o(t)
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
        })
      }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: "Loading animation",
        children: (0, Chunk951288.jsx)(Chunk481060.FXm, {
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
          value: a ? "on" : "off"
        })
      })]
    }), (0, Chunk951288.jsxs)("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 16
      },
      children: [Chunk279570, Chunk836459, Chunk780842]
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
          children: [(0, Chunk951288.jsxs)(Chunk374415.h, {
            size: module,
            children: [(0, Chunk951288.jsx)(ef, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk951288.jsx)(ef, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            })]
          }), (0, Chunk951288.jsxs)(Chunk374415.h, {
            size: module,
            children: [(0, Chunk951288.jsx)(ef, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            }), (0, Chunk951288.jsx)(ef, {
              component: Chunk861066.h,
              variant: "secondary",
              icon: Chunk481060.gw7,
              "aria-label": "Clyde",
              showLoadingAnimation: a
            })]
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.Kqy, {
          gap: 16,
          children: (0, Chunk951288.jsxs)(Chunk374415.h, {
            size: module,
            fullWidth: true,
            children: [(0, Chunk951288.jsx)(ef, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk951288.jsx)(ef, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
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
          children: (0, Chunk951288.jsxs)(Chunk374415.h, {
            direction: "vertical",
            size: module,
            children: [(0, Chunk951288.jsx)(ef, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk951288.jsx)(ef, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            })]
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Kqy, {
          gap: 16,
          children: (0, Chunk951288.jsxs)(Chunk374415.h, {
            fullWidth: true,
            direction: "vertical",
            size: module,
            children: [(0, Chunk951288.jsx)(ef, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk951288.jsx)(ef, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            })]
          })
        })]
      }), (0, Chunk951288.jsx)(ep, {
        buttonSize: module
      })]
    })]
  })
}

function ep(e) {
  let {
    buttonSize: t
  } = e, [n, o] = i.useState(false);
  return (0, r.jsxs)(C.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(C.X6q, {
      variant: "heading-xl/semibold",
      children: "PlayButton"
    }), (0, r.jsx)(C.Kqy, {
      direction: "horizontal",
      gap: 16,
      children: ["dark", "mid", "light"].map(e => (0, r.jsx)("div", {
        className: F.video,
        "data-luminance": e,
        children: (0, r.jsx)(p.J, {
          size: t,
          playing: n,
          onClick: () => o(!n)
        })
      }, e))
    })]
  })
}

function eh(e) {
  let {
    children: t,
    title: n
  } = e, [o, s] = i.useState(false);
  return (0, r.jsxs)(C.Kqy, {
    direction: "vertical",
    gap: 0,
    padding: 16,
    className: F.floatingControls,
    children: [(0, r.jsxs)(C.Kqy, {
      direction: "horizontal",
      gap: 16,
      align: "center",
      justify: "space-between",
      children: [(0, r.jsx)(C.X6q, {
        variant: "heading-lg/semibold",
        children: n
      }), (0, r.jsx)(m.Q, {
        icon: o ? C.hic : C.sXD,
        onClick: () => s(!o),
        pressed: o,
        "aria-label": "Show controls"
      })]
    }), (0, r.jsx)(C.Kqy, {
      gap: 16,
      className: a()(F.floatingControlsContent, {
        [F.floatingControlsContentHidden]: !o
      }),
      children: t
    })]
  })
}

function em() {
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

function eg() {
  let [e, t] = Chunk647438.useState(1), [n, o] = Chunk647438.useState(false), [a, s] = Chunk647438.useState(5), [l, c] = Chunk647438.useState(false), u = Chunk647438.useRef(null);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Context Menus"
    }), (0, Chunk951288.jsx)("span", {
      children: (0, Chunk951288.jsx)(Chunk481060.yRy, {
        targetElementRef: Chunk836459,
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
              control: (e, t) => (0, r.jsx)(C._wy, {
                ref: t,
                value: a,
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
          buttonRef: Chunk836459,
          onClick: () => Chunk442837(!Chunk971809)
        })
      })
    })]
  })
}

function eE() {
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
        children: e => (0, r.jsx)(C.zxk, X({
          variant: "primary",
          text: "Tooltip on the top"
        }, e))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's right aligned tooltip text!",
        position: "left",
        children: e => (0, r.jsx)(C.zxk, X({
          variant: "primary",
          text: "Tooltip on the left"
        }, e))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's bottom aligned tooltip text!",
        position: "bottom",
        children: e => (0, r.jsx)(C.zxk, X({
          variant: "primary",
          text: "Tooltip on the bottom"
        }, e))
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's right aligned tooltip text!",
        position: "right",
        children: e => (0, r.jsx)(C.zxk, X({
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

function eb() {
  let [e, t] = Chunk647438.useState(false), [n, o] = Chunk647438.useState(false), [a, s] = Chunk647438.useState(false), [l, c] = Chunk647438.useState(false), [u, d] = Chunk647438.useState(false), [f, _] = Chunk647438.useState(false), [p, h] = Chunk647438.useState(false), [m, g] = Chunk647438.useState(false), [E, b] = Chunk647438.useState(false), [y, O] = Chunk647438.useState(false), [v, I] = Chunk647438.useState(false), [A, N] = Chunk647438.useState(false), [R, P] = Chunk647438.useState(false), [w, D] = Chunk647438.useState(false), [x, L] = Chunk647438.useState(false), [j, M] = Chunk647438.useState(false), [k, U] = Chunk647438.useState(false), [G, B] = Chunk647438.useState(false), [Z, V] = Chunk647438.useState(false), [H, Y] = Chunk647438.useState(false), [q, X] = Chunk647438.useState(false), Q = Chunk647438.useRef(null), J = Chunk647438.useRef(null), $ = Chunk647438.useRef(null), ee = Chunk647438.useRef(null), et = Chunk647438.useRef(null), en = Chunk647438.useRef(null), er = Chunk647438.useRef(null), ei = Chunk647438.useRef(null), eo = Chunk647438.useRef(null), ea = Chunk647438.useRef(null), es = Chunk647438.useRef(null), el = Chunk647438.useRef(null), ec = Chunk647438.useRef(null), eu = Chunk647438.useRef(null), ed = Chunk647438.useRef(null), ef = Chunk647438.useRef(null), e_ = Chunk647438.useRef(null), ep = Chunk647438.useRef(null), eh = Chunk647438.useRef(null), em = Chunk647438.useRef(null), eg = Chunk647438.useRef(null), eE = Chunk647438.useCallback(() => {
    exports(false), Chunk120356(false), Chunk392711(false), Chunk442837(false), Chunk680018(false), Chunk861066(false), Chunk179538(false), Chunk257465(false), Chunk82659(false), Chunk103866(false), Chunk37148(false), Chunk240872(false), Chunk705262(false), Chunk581612(false), Chunk594174(false), Chunk799071(false), Chunk706705(false), Chunk981631(false), Chunk177475(false), Chunk691739(false), X(false)
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
        position: "bottom",
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
        position: "bottom",
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
      shouldShow: a,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
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
        position: "bottom",
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
      shouldShow: Chunk836459,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
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
      shouldShow: Chunk374415,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
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
      shouldShow: Chunk780842,
      onRequestClose: eE,
      caretConfig: {
        position: "top",
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
      shouldShow: Chunk279570,
      onRequestClose: eE,
      caretConfig: {
        position: "left",
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
      targetElementRef: eo,
      shouldShow: Chunk667202,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
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
      targetElementRef: ea,
      shouldShow: Chunk369585,
      onRequestClose: eE,
      position: "right",
      caretConfig: {
        position: "left",
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
      shouldShow: Chunk213734,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
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
      shouldShow: Chunk681715,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
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
      shouldShow: Chunk514361,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
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
      shouldShow: Chunk377089,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
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
      shouldShow: Chunk580747,
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
      shouldShow: Chunk526156,
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
      shouldShow: Chunk554042,
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
      shouldShow: Chunk726985,
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
      shouldShow: Chunk231338,
      onRequestClose: eE,
      caretConfig: {
        position: "bottom",
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
      shouldShow: Chunk518797,
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
            eE(), Chunk442837(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Two Actions",
          buttonRef: et,
          onClick: () => {
            eE(), Chunk680018(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          buttonRef: en,
          onClick: () => {
            eE(), Chunk861066(true)
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
            eE(), Chunk179538(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left Side Caret",
          buttonRef: ei,
          onClick: () => {
            eE(), Chunk257465(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Custom Offset",
          buttonRef: eo,
          onClick: () => {
            eE(), Chunk82659(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left Center",
          buttonRef: ea,
          onClick: () => {
            eE(), Chunk103866(true)
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
            eE(), Chunk37148(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Blue Gradient",
          buttonRef: el,
          onClick: () => {
            eE(), Chunk240872(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Nitro Pink Gradient",
          buttonRef: ec,
          onClick: () => {
            eE(), Chunk705262(true)
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
            eE(), Chunk581612(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Video Media Viewer",
          buttonRef: ed,
          onClick: () => {
            eE(), Chunk594174(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Video with Different Preview",
          buttonRef: ef,
          onClick: () => {
            eE(), Chunk799071(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "With image",
          buttonRef: e_,
          onClick: () => {
            eE(), Chunk706705(true)
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
            eE(), Chunk981631(true)
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
            eE(), Chunk177475(true)
          }
        }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Expressive Multi-Step",
          buttonRef: em,
          onClick: () => {
            eE(), Chunk691739(true)
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

function ey() {
  let [e, t] = Chunk647438.useState(false), [n, o] = Chunk647438.useState(false), [a, s] = Chunk647438.useState("auto");
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Checkboxes"
      }), (0, Chunk951288.jsx)(Chunk481060.XZJ, {
        value: module,
        onChange: (e, n) => t(n),
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Checkbox input"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.XZJ, {
        value: module,
        onChange: (e, n) => t(n),
        disabled: true,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Disabled checkbox"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.XZJ, {
        value: module,
        onChange: (e, n) => t(n),
        readOnly: true,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Read-only checkbox"
        })
      }), (0, Chunk951288.jsx)(Chunk481060.XZJ, {
        value: module,
        onChange: (e, n) => t(n),
        type: Chunk481060.XZJ.Types.ROW,
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
        onChange: e => o(e),
        children: "FormSwitch with a label"
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Radio Buttons"
      }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
        children: (0, Chunk951288.jsx)(Chunk481060.FXm, {
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
          value: a
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

function eO() {
  let [e, t] = Chunk647438.useState(null), [n, o] = Chunk647438.useState(null), [a, s] = Chunk647438.useState([]), [c, u] = Chunk647438.useState([]), [d, f] = Chunk647438.useState([]);
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
      onChange: e => o(e),
      options: Chunk971809.G
    }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
      placeholder: "Multi select",
      multi: true,
      value: a,
      onChange: e => s(e),
      options: Chunk971809.G
    }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
      placeholder: "Multi select (clearable)",
      multi: true,
      clearable: true,
      value: Chunk680018,
      onChange: e => f(e),
      options: Chunk971809.G
    }), (0, Chunk951288.jsx)(Chunk481060.VcW, {
      placeholder: "Multi select (custom pills)",
      multi: true,
      value: Chunk442837,
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
        children: (0, r.jsx)(C.Text, {
          variant: "text-md/bold",
          children: e.label
        })
      })
    })]
  })
}

function ev() {
  let [e, t] = Chunk647438.useState(""), [n, o] = Chunk647438.useState(""), [a, s] = Chunk647438.useState(""), l = (0, Chunk377089.U)("UserSettingsDesignSystems");
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
          query: a,
          onClear: () => Chunk392711("")
        }), (0, Chunk951288.jsx)(Chunk481060.E1j, {
          size: "sm",
          placeholder: "Search...",
          onChange: e => s(e),
          query: a,
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
    }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "Error",
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        required: true,
        error: "This must have a value"
      })
    }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "Error",
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        defaultValue: "Not a valid value",
        error: "This has an error."
      })
    }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "minLength",
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        minLength: 6,
        value: module,
        onChange: exports,
        placeholder: "Enter at least 6 characters"
      })
    }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "Read only",
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        value: "Read-only, not-editable field",
        editable: false
      })
    }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
      title: "Input with a label",
      children: (0, Chunk951288.jsx)(Chunk481060.oil, {
        placeholder: "Real placeholder",
        value: module,
        onChange: exports
      })
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

function eI(e) {
  let {
    transitionState: t
  } = e, [n, o] = i.useState(false), [a, s] = i.useState(C.CgR.SMALL), [l, c] = i.useState(false), u = n ? F.modalOutlines : "";
  return (0, r.jsxs)(C.Y0X, {
    transitionState: t,
    size: a,
    parentComponent: "UserSettingsDesignSystem",
    children: [(0, r.jsx)(C.xBx, {
      className: u,
      children: (0, r.jsx)(C.X6q, {
        variant: "heading-xl/semibold",
        children: "Modal"
      })
    }), (0, r.jsx)(C.hzk, {
      className: u,
      children: (0, r.jsxs)(C.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(C.xJW, {
          title: "Modal Size",
          children: (0, r.jsx)(C.q4e, {
            value: a,
            onChange: s,
            options: Object.entries(C.CgR).map(e => {
              let [t, n] = e;
              return {
                label: t,
                value: n
              }
            })
          })
        }), (0, r.jsx)(C.hjN, {
          title: "Options",
          children: (0, r.jsxs)(C.Kqy, {
            gap: 16,
            children: [(0, r.jsx)(C.XZJ, {
              value: n,
              onChange: (e, t) => o(t),
              children: (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                children: "Show Section Outlines"
              })
            }), (0, r.jsx)(C.XZJ, {
              value: l,
              onChange: (e, t) => c(t),
              children: (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                children: "Show secondary action in footer"
              })
            })]
          })
        })]
      })
    }), (0, r.jsx)(C.mzw, {
      className: u,
      children: (0, r.jsxs)(C.Kqy, {
        direction: "horizontal",
        justify: "end",
        gap: 8,
        children: [l && (0, r.jsx)(C.zxk, {
          variant: "secondary",
          text: "Secondary Action"
        }), (0, r.jsx)(C.zxk, {
          variant: "primary",
          text: "Close"
        })]
      })
    })]
  })
}

function eT(e) {
  let {
    transitionState: t,
    onClose: n,
    modalCount: o = 1
  } = e, [a, s] = i.useState("replace"), l = () => {
    let e = o + 1;
    (0, C.h7j)(t => (0, r.jsx)(eT, J(X({}, t), {
      modalCount: e
    })), {
      stackingBehavior: a
    })
  }, c = o < 3;
  return (0, r.jsxs)(C.Y0X, {
    transitionState: t,
    size: 1 === o ? C.CgR.LARGE : 2 === o ? C.CgR.MEDIUM : C.CgR.SMALL,
    parentComponent: "UserSettingsDesignSystem",
    children: [(0, r.jsx)(C.xBx, {
      children: (0, r.jsx)(C.X6q, {
        variant: "heading-xl/semibold",
        children: "Modal Stacking Demo"
      })
    }), (0, r.jsx)(C.hzk, {
      children: (0, r.jsxs)(C.Kqy, {
        gap: 16,
        children: [(0, r.jsxs)(C.Text, {
          variant: "text-md/medium",
          children: ["This is modal level ", o, "."]
        }), c && (0, r.jsx)(C.xJW, {
          title: "Stacking Behavior",
          children: (0, r.jsx)(C.q4e, {
            value: a,
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
        }), (0, r.jsxs)(C.Kqy, {
          gap: 8,
          children: [(0, r.jsxs)(C.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, r.jsx)("strong", {
              children: "Replace One:"
            }), " The modal directly below is hidden (default behavior)"]
          }), (0, r.jsxs)(C.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, r.jsx)("strong", {
              children: "Replace All:"
            }), " All modals below are hidden"]
          }), (0, r.jsxs)(C.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, r.jsx)("strong", {
              children: "Stack:"
            }), " The modal directly below remains visible"]
          })]
        })]
      })
    }), (0, r.jsx)(C.mzw, {
      children: (0, r.jsxs)(C.Kqy, {
        direction: "horizontal",
        justify: "end",
        gap: 8,
        children: [(0, r.jsx)(C.zxk, {
          variant: "secondary",
          text: "Close",
          onClick: n
        }), c && (0, r.jsx)(C.zxk, {
          variant: "primary",
          text: "Open Next Modal",
          onClick: l
        })]
      })
    })]
  })
}

function eS(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;

  function i(e) {
    let {
      children: t
    } = e;
    return (0, r.jsx)("div", {
      className: F.modalOutlines,
      style: {
        padding: "24px"
      },
      children: t
    })
  }
  return (0, r.jsxs)(g.I, {
    transitionState: t,
    onClose: n,
    children: [(0, r.jsx)("div", {
      className: F.modalOutlines,
      children: (0, r.jsx)(I.x, {
        title: "Demo Modal",
        subtitle: "The ModalHeader can have leading and trailing items on either side of the text",
        leading: (0, r.jsx)(i, {}),
        trailing: (0, r.jsx)(i, {})
      })
    }), (0, r.jsx)("div", {
      className: F.modalOutlines,
      children: (0, r.jsx)(O.f, {
        controls: (0, r.jsx)(i, {
          children: "This ModalBody renders any controls here"
        }),
        children: (0, r.jsx)(i, {
          children: "This is the main ModalBody. This area scrolls if there is enough content"
        })
      })
    }), (0, r.jsx)("div", {
      className: F.modalOutlines,
      children: (0, r.jsx)(v.m, {
        children: (0, r.jsx)(i, {
          children: "This is the ModalFooter"
        })
      })
    }), (0, r.jsx)("div", {
      className: F.modalOutlines,
      children: (0, r.jsx)(y.G, {
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

function eA(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [o, a] = i.useState("md"), [s, l] = i.useState("Demo Modal"), [c, u] = i.useState("Header body copy"), [d, f] = i.useState(false), [_, p] = i.useState(false), [h, m] = i.useState(false), [E, b] = i.useState(false), [T, S] = i.useState(false);
  return (0, r.jsxs)(g.I, {
    transitionState: t,
    onClose: n,
    size: o,
    children: [(0, r.jsx)(I.x, {
      title: s,
      subtitle: c,
      alignCenter: d
    }), (0, r.jsx)(O.f, {
      controls: _ ? (0, r.jsx)(C.E1j, {
        placeholder: "Search",
        onChange: () => null,
        query: ""
      }) : true,
      children: (0, r.jsxs)(C.Kqy, {
        gap: 16,
        children: [(0, r.jsx)(C.xJW, {
          title: "Modal Size",
          children: (0, r.jsx)(C.q4e, {
            value: o,
            onChange: a,
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
        }), (0, r.jsx)(C.xJW, {
          title: "Header Title",
          children: (0, r.jsx)(C.oil, {
            onChange: l,
            defaultValue: s
          })
        }), (0, r.jsx)(C.xJW, {
          title: "Header body",
          children: (0, r.jsx)(C.oil, {
            onChange: u,
            defaultValue: c
          })
        }), (0, r.jsx)(C.xJW, {
          title: "Optional Content",
          children: (0, r.jsxs)(C.Kqy, {
            gap: 12,
            children: [(0, r.jsx)(C.XZJ, {
              value: d,
              onChange: (e, t) => f(t),
              children: (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                children: "Header Align Center"
              })
            }), (0, r.jsx)(C.XZJ, {
              value: _,
              onChange: (e, t) => p(t),
              children: (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                children: "Show Search Input"
              })
            }), (0, r.jsx)(C.XZJ, {
              value: h,
              onChange: (e, t) => m(t),
              children: (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                children: "Show Preview Content"
              })
            }), (0, r.jsx)(C.XZJ, {
              value: E,
              onChange: (e, t) => b(t),
              children: (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                children: "Show Action Bar Leading Input"
              })
            }), (0, r.jsx)(C.XZJ, {
              value: T,
              onChange: (e, t) => S(t),
              children: (0, r.jsx)(C.Text, {
                variant: "text-md/medium",
                children: "Full Width Actions"
              })
            })]
          })
        })]
      })
    }), h && (0, r.jsxs)(v.m, {
      children: [(0, r.jsx)(C.X6q, {
        variant: "heading-lg/semibold",
        children: "Celebration Station"
      }), (0, r.jsx)(C.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: "32 Members ● 19 Online"
      })]
    }), (0, r.jsx)(y.G, {
      leading: E ? (0, r.jsx)(y.B, {
        value: false,
        onChange: () => {}
      }) : true,
      actionsFullWidth: T,
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

function eC(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;

  function o(e) {
    let {
      text: t
    } = e, [n, o] = i.useState(false);
    return (0, r.jsx)("div", {
      style: {
        padding: "8px 0"
      },
      children: (0, r.jsx)(C.XZJ, {
        value: n,
        onChange: (e, t) => o(t),
        children: (0, r.jsx)(C.Text, {
          variant: "text-md/medium",
          children: t
        })
      })
    })
  }
  return (0, r.jsxs)(b.Modal, {
    transitionState: t,
    onClose: n,
    size: "md",
    title: "Invite to server",
    input: (0, r.jsx)(C.E1j, {
      placeholder: "Search",
      onChange: () => null,
      query: ""
    }),
    preview: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(C.X6q, {
        variant: "heading-lg/semibold",
        children: "Celebration Station"
      }), (0, r.jsx)(C.Text, {
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
      icon: C.kBi,
      iconPosition: "end",
      onClick: n
    }],
    children: [(0, r.jsx)(o, {
      text: "John Doe"
    }), (0, r.jsx)(o, {
      text: "Mark"
    }), (0, r.jsx)(o, {
      text: "KawaiiHermit"
    }), (0, r.jsx)(o, {
      text: "YurBruhGio"
    }), (0, r.jsx)(o, {
      text: "John Doe"
    }), (0, r.jsx)(o, {
      text: "Mark"
    }), (0, r.jsx)(o, {
      text: "KawaiiHermit"
    }), (0, r.jsx)(o, {
      text: "YurBruhGio"
    }), (0, r.jsx)(o, {
      text: "John Doe"
    }), (0, r.jsx)(o, {
      text: "Mark"
    }), (0, r.jsx)(o, {
      text: "KawaiiHermit"
    }), (0, r.jsx)(o, {
      text: "YurBruhGio"
    }), (0, r.jsx)(o, {
      text: "John Doe"
    }), (0, r.jsx)(o, {
      text: "Mark"
    }), (0, r.jsx)(o, {
      text: "KawaiiHermit"
    }), (0, r.jsx)(o, {
      text: "YurBruhGio"
    })]
  })
}

function eN(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;
  return (0, r.jsx)(b.Modal, {
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

function eR(e) {
  let {
    transitionState: t,
    onClose: o
  } = e, [a, s] = i.useState(0), [l, c] = i.useState(false), d = [{
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
  }], f = i.useMemo(() => 0 === a ? {
    type: "image",
    src: V
  } : 1 === a ? {
    type: "lottie",
    lottie: () => n.e("94792").then(n.t.bind(n, 972951, 19)),
    aspectRatio: "6/4"
  } : 2 === a ? {
    type: "rive",
    rive: u.PerfTestRive
  } : 3 === a ? {
    type: "video",
    src: Y.Z,
    fallbackImageSrc: V,
    loop: true,
    loopAt: 2.5
  } : 4 === a ? {
    type: "dynamic",
    component: C.AX$.DEMO,
    props: {
      text: "Dynamic Content"
    }
  } : true, [a]);
  return (0, r.jsxs)(E.I, {
    transitionState: t,
    onClose: o,
    gradientColor: "nitro-pink",
    graphic: f,
    badge: l ? "beta" : true,
    title: "Expressive Modal",
    subtitle: "This is an expressive modal with a header image",
    actions: [{
      variant: "secondary",
      text: "Cancel",
      onClick: o
    }, {
      variant: "primary",
      text: "Submit",
      onClick: o
    }],
    children: [(0, r.jsx)(C.xJW, {
      title: "Graphic Type",
      children: (0, r.jsx)(C.q4e, {
        value: a,
        onChange: s,
        options: d
      })
    }), (0, r.jsx)(C.xJW, {
      style: {
        paddingTop: "16px"
      },
      children: (0, r.jsx)(C.XZJ, {
        value: l,
        onChange: (e, t) => c(t),
        children: (0, r.jsx)(C.Text, {
          variant: "text-md/medium",
          children: "Show beta badge"
        })
      })
    })]
  })
}

function eP(e) {
  let {
    transitionState: t,
    onClose: n,
    modalCount: o = 1
  } = e, [a, s] = i.useState("replace"), l = () => {
    let e = o + 1;
    (0, C.h7j)(t => (0, r.jsx)(eP, J(X({}, t), {
      modalCount: e
    })), {
      stackingBehavior: a
    })
  }, c = o < 3;
  return (0, r.jsx)(b.Modal, {
    transitionState: t,
    onClose: n,
    size: 1 === o ? "md" : "sm",
    title: "Mana Modal Stacking Demo",
    subtitle: "This is modal level ".concat(o, "."),
    actions: [{
      variant: "secondary",
      text: "Close",
      onClick: n
    }, ...c ? [{
      variant: "primary",
      text: "Open Next Modal",
      onClick: l
    }] : []],
    children: (0, r.jsxs)(C.Kqy, {
      gap: 16,
      children: [c && (0, r.jsx)(C.xJW, {
        title: "Stacking Behavior",
        children: (0, r.jsx)(C.q4e, {
          value: a,
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
      }), (0, r.jsxs)(C.Kqy, {
        gap: 8,
        children: [(0, r.jsxs)(C.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, r.jsx)("strong", {
            children: "Replace One:"
          }), " The modal directly below is hidden (default behavior)"]
        }), (0, r.jsxs)(C.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, r.jsx)("strong", {
            children: "Replace All:"
          }), " All modals below are hidden"]
        }), (0, r.jsxs)(C.Text, {
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

function ew() {
  let e = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eI, X({}, e)))
    },
    t = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eT, X({}, e)))
    },
    n = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eS, X({}, e)))
    },
    i = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eA, X({}, e)))
    },
    o = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eC, X({}, e)))
    },
    a = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eN, X({}, e)))
    },
    s = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eR, X({}, e)))
    },
    l = () => {
      (0, Chunk481060.h7j)(e => (0, r.jsx)(eP, X({}, e)))
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
        onClick: Chunk442837
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
        onClick: a
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

function eD() {
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
      children: module.map(e => (0, r.jsx)(ex, {
        size: e
      }, e))
    })]
  })
}

function ex(e) {
  let {
    size: t
  } = e, {
    user: n
  } = (0, c.cj)([L.default], () => ({
    user: L.default.getCurrentUser()
  })), i = Number(t.split("_")[1]);
  return (0, r.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 8
    },
    children: [(0, r.jsxs)(C.X6q, {
      variant: "heading-sm/semibold",
      style: {
        textAlign: "center"
      },
      children: [i, "px"]
    }), (0, r.jsx)(C.qEK, {
      src: null == n ? true : n.getAvatarURL(true, i),
      size: t,
      "aria-label": null == n ? true : n.username,
      status: Z.Sk.ONLINE
    }), (0, r.jsx)(C.qEK, {
      src: null == n ? true : n.getAvatarURL(true, i),
      size: t,
      "aria-label": null == n ? true : n.username,
      status: Z.Sk.ONLINE,
      isTyping: true
    }), (0, r.jsx)(C.qEK, {
      src: null == n ? true : n.getAvatarURL(true, i),
      size: t,
      "aria-label": null == n ? true : n.username,
      status: Z.Sk.ONLINE,
      isMobile: true
    }), (0, r.jsx)(C.qEK, {
      src: null == n ? true : n.getAvatarURL(true, i),
      size: t,
      "aria-label": null == n ? true : n.username,
      isSpeaking: true
    })]
  })
}

function eL() {
  let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return (0, Chunk951288.jsx)(Chunk481060.f6W, {
    theme: Chunk231338.BR.DARKER,
    disableAdaptiveTheme: true,
    children: t => (0, r.jsxs)("div", {
      className: a()(t, F.section),
      children: [(0, r.jsx)(C.zxk, {
        variant: "secondary",
        text: "Button",
        fullWidth: true
      }), (0, r.jsx)(C.f6W, {
        theme: Z.BR.LIGHT,
        children: t => (0, r.jsxs)("div", {
          className: a()(t, F.section),
          children: [(0, r.jsx)(C.zxk, {
            variant: "secondary",
            text: "Button",
            fullWidth: true
          }), (0, r.jsx)(C.f6W, {
            theme: Z.BR.DARKER,
            children: e => (0, r.jsx)("div", {
              className: a()(e, F.section),
              children: (0, r.jsx)(C.zxk, {
                variant: "secondary",
                text: "Button",
                fullWidth: true
              })
            })
          }), (0, r.jsx)(C.f6W, {
            gradient: e,
            children: e => (0, r.jsx)("div", {
              className: a()(e, F.section),
              children: (0, r.jsx)(C.zxk, {
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