/** Chunk was on 20501 **/
/** chunk id: 177508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => er
}), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.jsx"),
  Chunk514361 = require("./514361.js"),
  Chunk705262 = require("./705262.jsx"),
  Chunk377089 = require("./377089.js"),
  Chunk581612 = require("./581612.js"),
  Chunk580747 = require("./580747.js"),
  Chunk526156 = require("./526156.jsx"),
  Chunk799071 = require("./799071.jsx"),
  Chunk554042 = require("./554042.jsx"),
  Chunk706705 = require("./706705.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk884032 = require("./884032.js"),
  Chunk177475 = require("./177475.js"),
  Chunk691739 = require("./691739.js"),
  Chunk453707 = require("./453707.js"),
  Chunk315416 = require("./315416.js"),
  Chunk715720 = require("./715720.js");

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk884032.root,
    children: [(0, Chunk255367.jsx)(q, {}), (0, Chunk255367.jsx)(ea, {}), (0, Chunk255367.jsx)(eg, {}), (0, Chunk255367.jsx)(eh, {}), (0, Chunk255367.jsx)(ep, {}), (0, Chunk255367.jsx)(eu, {}), (0, Chunk255367.jsx)(em, {}), (0, Chunk255367.jsx)(ed, {}), (0, Chunk255367.jsx)(ec, {}), (0, Chunk255367.jsx)(ev, {}), (0, Chunk255367.jsx)(X, {}), (0, Chunk255367.jsx)(eS, {})]
  })
}

function q() {
  let e = (0, Chunk580747.Z)("highlight_mana_components");
  return (0, Chunk255367.jsx)(Chunk481060.hjN, {
    title: "Design System Controls",
    children: (0, Chunk255367.jsx)(Chunk481060.xJW, {
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: e => (0, P.Z)("highlight_mana_components", e),
        note: "Highlights all mana components marked with data-mana-component",
        hideBorder: true,
        children: "Highlight Mana Components"
      })
    })
  })
}

function X() {
  let e = Object.keys(Chunk481060.DM8);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk884032.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Notice"
    }), (0, Chunk255367.jsx)(Chunk481060.Kqy, {
      gap: 16,
      children: module.map(e => (0, i.jsx)(T.qXd, {
        color: T.DM8[e],
        children: (0, i.jsxs)("code", {
          children: ["NoticeColors.", e]
        })
      }, e))
    })]
  })
}
let J = ["neutral", "blue_new", "blurple", "green_new", "red_new", "teal_new", "yellow_new", "orange_new", "pink", "purple"],
  Q = ["background-surface-highest", "background-surface-higher", "background-surface-high", "background-base-low", "background-base-lower", "background-base-lowest"],
  $ = ["background-gradient-lowest", "background-gradient-lower", "background-gradient-low", "background-gradient-high", "background-gradient-higher", "background-gradient-highest"],
  ee = ["", "background-mod-subtle", "background-mod-normal", "background-mod-strong"],
  et = ["critical", "warning", "positive", "info"],
  en = ["text-default", "text-primary", "text-secondary", "text-tertiary", "text-feedback-critical", "text-feedback-warning", "text-feedback-positive", "text-feedback-info", "premium-nitro-pink-text"];

function ei() {
  let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return (0, Chunk255367.jsxs)("div", {
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      className: Chunk884032.heading,
      children: "Background Colors"
    }), Q.map(e => (0, i.jsxs)("div", {
      className: U.palette,
      style: {
        backgroundColor: "var(--".concat(e, ")"),
        padding: 24
      },
      children: [(0, i.jsx)(T.Text, {
        variant: "text-md/medium",
        children: e
      }), (0, i.jsx)("div", {
        style: {
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        },
        children: ee.map(e => (0, i.jsxs)("div", {
          className: U.color,
          style: {
            padding: 16,
            background: "var(--".concat(e, ")")
          },
          children: [(0, i.jsx)(T.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            children: e
          }), (0, i.jsx)("hr", {
            className: U.sectionDivider
          }), en.map(e => (0, i.jsx)(T.Text, {
            variant: "text-xs/medium",
            style: {
              color: "var(--".concat(e, ")")
            },
            children: e
          }, e))]
        }, e))
      }), (0, i.jsx)("hr", {
        className: U.sectionDivider
      }), (0, i.jsx)("div", {
        style: {
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        },
        children: et.map(e => {
          let t = "var(--text-feedback-".concat(e, ")");
          return (0, i.jsxs)("div", {
            className: U.color,
            style: {
              padding: 16,
              background: "var(--background-feedback-".concat(e, ")")
            },
            children: [(0, i.jsx)(T.Text, {
              variant: "text-xs/semibold",
              color: "header-secondary"
            }), (0, i.jsxs)(T.Kqy, {
              children: [(0, i.jsxs)(T.Text, {
                variant: "text-xs/semibold",
                style: {
                  color: t
                },
                children: ["background-feedback-", e]
              }), (0, i.jsx)(T.Text, {
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
    }, e)), null !== module && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        className: Chunk884032.heading,
        children: "Gradient Background Colors"
      }), (0, Chunk255367.jsx)("div", {
        className: "custom-theme-background",
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          transform: "translateZ(0)"
        },
        children: $.map(e => (0, i.jsx)("div", {
          className: U.palette,
          style: {
            background: "var(--".concat(e, ")"),
            height: 400
          },
          children: (0, i.jsx)(T.Text, {
            variant: "text-xs/medium",
            children: e
          })
        }, e))
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      className: Chunk884032.heading,
      children: "Scales"
    }), J.map(e => (0, i.jsxs)("div", {
      className: U.palette,
      children: [(0, i.jsx)(T.Text, {
        variant: "text-lg/semibold",
        children: e
      }), (0, i.jsx)("div", {
        className: U.colors,
        children: Array.from({
          length: 100
        }, (t, n) => (0, i.jsx)("div", {
          className: U.color,
          style: {
            background: "var(--".concat(e.replace("_", "-"), "-").concat(n + 1, ")")
          },
          children: (0, i.jsx)(T.f6W, {
            theme: n < 50 ? "light" : "dark",
            children: t => (0, i.jsxs)(T.Text, {
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

function er() {
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)(Chunk526156.Z, {
      parentSetting: Chunk726985.s6.DESIGN_SYSTEMS,
      settingsSection: Chunk981631.oAB.DESIGN_SYSTEMS,
      tabs: [{
        title: "Components",
        component: () => (0, Chunk255367.jsx)(K, {}),
        setting: Chunk726985.s6.DESIGN_SYSTEMS_COMPONENTS
      }, {
        title: "Colors",
        component: () => (0, Chunk255367.jsx)(ei, {}),
        setting: Chunk726985.s6.DESIGN_SYSTEMS_COLORS
      }, {
        title: "Animations",
        component: () => (0, Chunk255367.jsx)(Chunk706705.Z, {}),
        setting: Chunk726985.s6.ANIMATION_TESTING
      }, {
        title: "Text Playground",
        component: () => (0, Chunk255367.jsx)(Chunk554042.Z, {}),
        setting: Chunk726985.s6.TEXT_PLAYGROUND
      }, {
        title: "Text Componnts",
        component: () => (0, Chunk255367.jsx)(Chunk799071.Z, {}),
        setting: Chunk726985.s6.TEXT_COMPONENTS
      }]
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk884032.themes,
      children: (0, Chunk255367.jsx)(Chunk705262.ZP, {
        type: Chunk705262.yH.SETTINGS,
        children: (0, Chunk255367.jsx)(Chunk705262.ZP.Basic, {
          className: Chunk884032.themeSelectionGroup
        })
      })
    })]
  })
}

function es(e) {
  var {
    component: t,
    showLoadingAnimation: n
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["component", "showLoadingAnimation"]);
  let [a, l] = r.useState(false), o = r.useRef(false);
  return r.useEffect(() => (a && n && (o.current = setTimeout(() => {
    l(false)
  }, 3e3)), () => {
    o.current >= 0 && clearTimeout(o.current)
  }), [a, n]), (0, i.jsx)(t, Y(W({}, s), {
    loading: n ? a : true,
    onClick: () => l(!a)
  }))
}

function ea() {
  let [e, t] = Chunk73800.useState("md"), [n, s] = Chunk73800.useState("start"), [a, o] = Chunk73800.useState(true), c = ["primary", "secondary", "critical-primary", "critical-secondary", "active", "overlay-primary", "overlay-secondary"], d = [...Chunk442837, "expressive"].map(t => (0, i.jsx)(es, {
    component: u.z,
    variant: t,
    text: "".concat((0, l.capitalize)(t), " ").concat(e.toUpperCase()),
    size: e,
    icon: "none" !== n ? T.gw7 : true,
    iconPosition: n,
    showLoadingAnimation: a
  }, t + e)), g = [...Chunk442837, "icon-only"].map(t => (0, i.jsx)(es, {
    component: p.h,
    variant: t,
    icon: T.gw7,
    size: e,
    "aria-label": "".concat(t, " ").concat(e),
    showLoadingAnimation: a
  }, t + e)), f = ["primary", "secondary", "always-white", "critical"].map(e => (0, i.jsx)(r.Fragment, {
    children: (0, i.jsx)(h.A, {
      variant: e,
      text: "Text button"
    })
  }, e));
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk884032.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Buttons"
    }), (0, Chunk255367.jsxs)(eo, {
      title: "Button Options",
      children: [(0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: "Button size",
        children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
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
      }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: "Icon position",
        children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
          onChange: e => {
            let {
              value: t
            } = e;
            return s(t)
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
      }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
        title: "Loading animation",
        children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
          onChange: e => {
            let {
              value: t
            } = e;
            return o("on" === t)
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
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 16
      },
      children: [Chunk279570, Chunk836459, Chunk780842]
    }), (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
      gap: 16,
      padding: {
        top: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Button Groups"
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-lg/medium",
        children: "Horizontal"
      }), (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        direction: "horizontal",
        children: [(0, Chunk255367.jsxs)(Chunk481060.Kqy, {
          gap: 16,
          children: [(0, Chunk255367.jsxs)(Chunk374415.h, {
            size: module,
            children: [(0, Chunk255367.jsx)(es, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(es, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            })]
          }), (0, Chunk255367.jsxs)(Chunk374415.h, {
            size: module,
            children: [(0, Chunk255367.jsx)(es, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(es, {
              component: Chunk861066.h,
              variant: "secondary",
              icon: Chunk481060.gw7,
              "aria-label": "Clyde",
              showLoadingAnimation: a
            })]
          })]
        }), (0, Chunk255367.jsx)(Chunk481060.Kqy, {
          gap: 16,
          children: (0, Chunk255367.jsxs)(Chunk374415.h, {
            size: module,
            fullWidth: true,
            children: [(0, Chunk255367.jsx)(es, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(es, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            })]
          })
        })]
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-lg/medium",
        children: "Vertical"
      }), (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        direction: "horizontal",
        children: [(0, Chunk255367.jsx)(Chunk481060.Kqy, {
          gap: 16,
          children: (0, Chunk255367.jsxs)(Chunk374415.h, {
            direction: "vertical",
            size: module,
            children: [(0, Chunk255367.jsx)(es, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(es, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            })]
          })
        }), (0, Chunk255367.jsx)(Chunk481060.Kqy, {
          gap: 16,
          children: (0, Chunk255367.jsxs)(Chunk374415.h, {
            fullWidth: true,
            direction: "vertical",
            size: module,
            children: [(0, Chunk255367.jsx)(es, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(es, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            })]
          })
        })]
      }), (0, Chunk255367.jsx)(el, {
        buttonSize: module
      })]
    })]
  })
}

function el(e) {
  let {
    buttonSize: t
  } = e, [n, s] = r.useState(false);
  return (0, i.jsxs)(T.Kqy, {
    gap: 16,
    children: [(0, i.jsx)(T.X6q, {
      variant: "heading-xl/semibold",
      children: "PlayButton"
    }), (0, i.jsx)(T.Kqy, {
      direction: "horizontal",
      gap: 16,
      children: ["dark", "mid", "light"].map(e => (0, i.jsx)("div", {
        className: U.video,
        "data-luminance": e,
        children: (0, i.jsx)(g.J, {
          size: t,
          playing: n,
          onClick: () => s(!n)
        })
      }, e))
    })]
  })
}

function eo(e) {
  let {
    children: t,
    title: n
  } = e, [s, l] = r.useState(false);
  return (0, i.jsxs)(T.Kqy, {
    direction: "vertical",
    gap: 0,
    padding: 16,
    className: U.floatingControls,
    children: [(0, i.jsxs)(T.Kqy, {
      direction: "horizontal",
      gap: 16,
      align: "center",
      justify: "space-between",
      children: [(0, i.jsx)(T.X6q, {
        variant: "heading-lg/semibold",
        children: n
      }), (0, i.jsx)(f.Q, {
        icon: s ? T.hic : T.sXD,
        onClick: () => l(!s),
        pressed: s,
        "aria-label": "Show controls"
      })]
    }), (0, i.jsx)(T.Kqy, {
      gap: 16,
      className: a()(U.floatingControlsContent, {
        [U.floatingControlsContentHidden]: !s
      }),
      children: t
    })]
  })
}

function ec() {
  let [e, t] = Chunk73800.useState("1");
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk884032.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "TabBar"
    }), (0, Chunk255367.jsxs)(Chunk481060.njP, {
      type: "top",
      look: "brand",
      selectedItem: module,
      onItemSelect: e => t(e),
      className: Chunk884032.tabBar,
      children: [(0, Chunk255367.jsx)(Chunk481060.njP.Item, {
        id: "1",
        children: "Tab 1"
      }), (0, Chunk255367.jsx)(Chunk481060.njP.Item, {
        id: "2",
        children: "Tab 2"
      }), (0, Chunk255367.jsx)(Chunk481060.njP.Item, {
        id: "3",
        children: "Tab 3"
      })]
    }), (0, Chunk255367.jsxs)(Chunk481060.Text, {
      variant: "text-md/medium",
      children: ["Selected tab: ", module]
    })]
  })
}

function ed() {
  let [e, t] = Chunk73800.useState(1), [n, s] = Chunk73800.useState(false), [a, l] = Chunk73800.useState(5), [o, c] = Chunk73800.useState(false), d = Chunk73800.useRef(null);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk884032.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Context Menus"
    }), (0, Chunk255367.jsx)("span", {
      children: (0, Chunk255367.jsx)(Chunk481060.yRy, {
        targetElementRef: Chunk836459,
        shouldShow: Chunk971809,
        renderPopout: () => (0, Chunk255367.jsxs)(Chunk481060.v2r, {
          navId: "demo",
          "aria-label": "Demo Actions",
          onClose: () => null,
          onSelect: () => null,
          children: [(0, Chunk255367.jsxs)(Chunk481060.kSQ, {
            label: "Basic items",
            children: [(0, Chunk255367.jsx)(Chunk481060.sNh, {
              id: "first",
              label: "An option"
            }), (0, Chunk255367.jsx)(Chunk481060.sNh, {
              id: "second",
              label: "An option with an icon",
              icon: Chunk481060.kBi
            }), (0, Chunk255367.jsxs)(Chunk481060.sNh, {
              id: "item-with-submenu",
              label: "Item with submenu",
              children: [(0, Chunk255367.jsx)(Chunk481060.sNh, {
                id: "subitem-1",
                label: "Subitem 1"
              }), (0, Chunk255367.jsx)(Chunk481060.sNh, {
                id: "subitem-2",
                label: "Subitem 2"
              }), (0, Chunk255367.jsx)(Chunk481060.sNh, {
                id: "subitem-3",
                label: "Subitem 3"
              })]
            })]
          }), (0, Chunk255367.jsxs)(Chunk481060.kSQ, {
            label: "Inputs",
            children: [(0, Chunk255367.jsx)(Chunk481060.S89, {
              id: "checkable",
              label: "Checkbox",
              checked: require,
              action: () => Chunk120356(!require)
            }), (0, Chunk255367.jsx)(Chunk481060.k5B, {
              id: "radio-one",
              group: "a-group",
              label: "Radio 1",
              action: () => exports(1),
              checked: 1 === module
            }), (0, Chunk255367.jsx)(Chunk481060.k5B, {
              id: "radio-two",
              group: "a-group",
              label: "Radio 2",
              action: () => exports(2),
              checked: 2 === module
            }), (0, Chunk255367.jsx)(Chunk481060.k5B, {
              id: "radio-three",
              group: "a-group",
              label: "Radio 3",
              action: () => exports(3),
              checked: 3 === module
            }), (0, Chunk255367.jsx)(Chunk481060.II_, {
              id: "slider",
              label: "Slider",
              control: (e, t) => (0, i.jsx)(T._wy, {
                ref: t,
                value: a,
                minValue: 0,
                maxValue: 100,
                onChange: e => l(e),
                "aria-label": "Slider"
              })
            })]
          }), (0, Chunk255367.jsx)(Chunk481060.Clw, {}), (0, Chunk255367.jsx)(Chunk481060.sNh, {
            id: "danger",
            label: "A destructive option",
            color: "danger",
            icon: Chunk481060.XHJ
          })]
        }),
        children: () => (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Toggle context menu",
          buttonRef: Chunk836459,
          onClick: () => Chunk442837(!Chunk971809)
        })
      })
    })]
  })
}

function eu() {
  let [e, t] = Chunk73800.useState(Chunk481060.FGA.PRIMARY), n = Chunk73800.useMemo(() => Object.entries(Chunk481060.FGA).map(e => {
    let [t, n] = e;
    return {
      label: t,
      value: n
    }
  }), []);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk884032.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Tooltips"
    }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Color",
      children: (0, Chunk255367.jsx)(Chunk481060.q4e, {
        value: module,
        onChange: exports,
        options: require
      })
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: [(0, Chunk255367.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's top aligned tooltip text!",
        position: "top",
        children: e => (0, i.jsx)(T.zxk, W({
          variant: "primary",
          text: "Tooltip on the top"
        }, e))
      }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's right aligned tooltip text!",
        position: "left",
        children: e => (0, i.jsx)(T.zxk, W({
          variant: "primary",
          text: "Tooltip on the left"
        }, e))
      }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's bottom aligned tooltip text!",
        position: "bottom",
        children: e => (0, i.jsx)(T.zxk, W({
          variant: "primary",
          text: "Tooltip on the bottom"
        }, e))
      }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's right aligned tooltip text!",
        position: "right",
        children: e => (0, i.jsx)(T.zxk, W({
          variant: "primary",
          text: "Tooltip on the right"
        }, e))
      })]
    }), (0, Chunk255367.jsx)("div", {})]
  })
}

function em() {
  let [e, t] = Chunk73800.useState(false), [n, s] = Chunk73800.useState(false), [a, l] = Chunk73800.useState(false), [o, c] = Chunk73800.useState(false), [d, u] = Chunk73800.useState(false), [m, p] = Chunk73800.useState(false), [g, h] = Chunk73800.useState(false), [f, b] = Chunk73800.useState(false), [x, _] = Chunk73800.useState(false), [j, E] = Chunk73800.useState(false), [C, O] = Chunk73800.useState(false), [I, N] = Chunk73800.useState(false), [y, A] = Chunk73800.useState(false), [P, R] = Chunk73800.useState(false), [D, Z] = Chunk73800.useState(false), [w, k] = Chunk73800.useState(false), [L, M] = Chunk73800.useState(false), [B, V] = Chunk73800.useState(false), [G, W] = Chunk73800.useState(false), Y = Chunk73800.useRef(null), K = Chunk73800.useRef(null), q = Chunk73800.useRef(null), X = Chunk73800.useRef(null), J = Chunk73800.useRef(null), Q = Chunk73800.useRef(null), $ = Chunk73800.useRef(null), ee = Chunk73800.useRef(null), et = Chunk73800.useRef(null), en = Chunk73800.useRef(null), ei = Chunk73800.useRef(null), er = Chunk73800.useRef(null), es = Chunk73800.useRef(null), ea = Chunk73800.useRef(null), el = Chunk73800.useRef(null), eo = Chunk73800.useRef(null), ec = Chunk73800.useRef(null), ed = Chunk73800.useRef(null), eu = Chunk73800.useRef(null), em = Chunk73800.useCallback(() => {
    exports(false), Chunk120356(false), Chunk392711(false), Chunk442837(false), Chunk680018(false), Chunk861066(false), Chunk179538(false), Chunk257465(false), Chunk82659(false), Chunk103866(false), Chunk37148(false), Chunk514361(false), Chunk377089(false), Chunk580747(false), Chunk799071(false), Chunk706705(false), Chunk981631(false), Chunk177475(false), W(false)
  }, []);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk884032.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Popovers"
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: Y,
      shouldShow: module,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Header",
      body: "Body",
      size: "sm",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk315416.Z,
        alt: "Small placeholder"
      }),
      badge: "new",
      actions: [{
        text: "Button",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: K,
      shouldShow: require,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Header",
      body: "Body",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      badge: "new",
      actions: [{
        text: "Button",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: q,
      shouldShow: a,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Header",
      body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
      actions: [{
        text: "Button",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: X,
      shouldShow: Chunk971809,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Ipsum Dolor",
      body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      badge: "new",
      actions: [{
        text: "Button",
        onClick: em
      }],
      textLink: {
        text: "Learn More",
        link: "https://discord.com",
        external: true
      }
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: J,
      shouldShow: Chunk836459,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Header",
      body: "Body",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      badge: "new",
      actions: [{
        text: "Primary",
        onClick: em,
        variant: "primary"
      }, {
        text: "Secondary",
        onClick: em,
        variant: "secondary"
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: Q,
      shouldShow: Chunk374415,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "No Actions",
      body: "This popover has no action buttons, just content to display.",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      badge: "new"
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: $,
      shouldShow: Chunk780842,
      onRequestClose: em,
      caretConfig: {
        position: "top",
        align: "end"
      },
      title: "Custom Caret API",
      body: "Using CaretConfig with END placement",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      badge: "new",
      actions: [{
        text: "Got it",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: ee,
      shouldShow: Chunk279570,
      onRequestClose: em,
      caretConfig: {
        position: "left",
        align: "start"
      },
      title: "Left Side Caret",
      body: "Caret positioned on the left side at start",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      badge: "early_access",
      actions: [{
        text: "Close",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: et,
      shouldShow: Chunk667202,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "custom",
        customOffset: 50
      },
      title: "Custom Offset",
      body: "Caret positioned 50px from center with custom offset",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      badge: "beta",
      actions: [{
        text: "Amazing!",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: en,
      shouldShow: Chunk369585,
      onRequestClose: em,
      position: "right",
      caretConfig: {
        position: "left",
        align: "center"
      },
      title: "Left Center Positioning",
      body: "Popover appears to the right with caret centered on the left side",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      badge: "new",
      actions: [{
        text: "Perfect!",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: ei,
      shouldShow: Chunk213734,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Purple Gradient",
      body: "This popover has a beautiful purple gradient background",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      gradientColor: "purple",
      badge: "new",
      actions: [{
        text: "Looks Great!",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: er,
      shouldShow: Chunk240872,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Blue Gradient",
      body: "This popover showcases the blue gradient option",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      gradientColor: "blue",
      badge: "beta",
      actions: [{
        text: "Nice!",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: es,
      shouldShow: Chunk705262,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Nitro Pink Gradient",
      body: "Experience the premium nitro-pink gradient effect",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      }),
      gradientColor: "nitro-pink",
      textLink: {
        text: "Learn about Nitro",
        link: "https://discord.com/nitro",
        external: true
      },
      actions: [{
        text: "Get Nitro",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: ea,
      shouldShow: Chunk581612,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Voice Filters",
      body: "Experience enhanced voice quality with our latest filtering technology. Perfect for gaming and streaming.",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk715720.Z,
        alt: "Voice Filters"
      }),
      badge: "new",
      gradientColor: "purple",
      actions: [{
        text: "Try it now",
        onClick: em
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.Mb, {
      targetElementRef: el,
      shouldShow: Chunk526156,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "With Video Asset",
      body: "Click the video to view it in the media viewer!",
      assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
      badge: "new",
      gradientColor: "blue",
      action: {
        text: "Learn More",
        onClick: em
      }
    }), (0, Chunk255367.jsx)(Chunk466590.e, {
      targetElementRef: eo,
      shouldShow: Chunk554042,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      steps: [{
        title: "Welcome to Quests!",
        body: "Journey to Quest Home in Discover to start earning Orbs.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk453707.Z,
          alt: "Medium placeholder"
        }),
        badge: "new",
        action: {
          text: "Next"
        },
        gradientColor: "blue"
      }, {
        title: "Earn Rewards",
        body: "Complete quests to earn Orbs and unlock exclusive rewards.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk715720.Z,
          alt: "Quest Rewards"
        }),
        action: {
          text: "Next"
        },
        gradientColor: "blue"
      }, {
        title: "Quest Complete!",
        body: "You're all set to start your quest adventure. Good luck!",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk453707.Z,
          alt: "Medium placeholder"
        }),
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
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: ec,
      shouldShow: Chunk726985,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Experience Voice Filters",
      body: "Enhanced voice quality with our latest filtering technology. Try the expressive button!",
      asset: (0, Chunk255367.jsx)("img", {
        src: Chunk715720.Z,
        alt: "Voice Filters"
      }),
      badge: "new",
      gradientColor: "nitro-pink",
      actions: [{
        text: "Subscribe to Nitro",
        onClick: em,
        variant: "expressive"
      }]
    }), (0, Chunk255367.jsx)(Chunk466590.e, {
      targetElementRef: ed,
      shouldShow: Chunk231338,
      onRequestClose: em,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      steps: [{
        title: "Discover Features",
        body: "Explore amazing new capabilities in Discord.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk453707.Z,
          alt: "Medium placeholder"
        }),
        badge: "new",
        action: {
          text: "Continue"
        },
        gradientColor: "purple"
      }, {
        title: "Unlock Potential",
        body: "Learn how to make the most of your Discord experience.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk715720.Z,
          alt: "Features"
        }),
        action: {
          text: "Almost There"
        },
        gradientColor: "blue"
      }, {
        title: "Ready to Go!",
        body: "You're all set! Notice the expressive button animation.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk453707.Z,
          alt: "Medium placeholder"
        }),
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
    }), (0, Chunk255367.jsx)(Chunk907862.Mb, {
      targetElementRef: eu,
      shouldShow: Chunk691739,
      onRequestClose: em,
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
        onClick: em,
        variant: "expressive"
      }
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Size Examples"
      }), (0, Chunk255367.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Small Content",
          buttonRef: Y,
          onClick: () => {
            em(), exports(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Medium Content",
          buttonRef: K,
          onClick: () => {
            em(), Chunk120356(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          buttonRef: q,
          onClick: () => {
            em(), Chunk392711(true)
          },
          text: "No Asset"
        })]
      })]
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Actions Examples"
      }), (0, Chunk255367.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "External Link",
          buttonRef: X,
          onClick: () => {
            em(), Chunk442837(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Two Actions",
          buttonRef: J,
          onClick: () => {
            em(), Chunk680018(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          buttonRef: Q,
          onClick: () => {
            em(), Chunk861066(true)
          },
          text: "No Actions"
        })]
      })]
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Caret API Examples"
      }), (0, Chunk255367.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Custom Caret API",
          buttonRef: $,
          onClick: () => {
            em(), Chunk179538(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left Side Caret",
          buttonRef: ee,
          onClick: () => {
            em(), Chunk257465(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Custom Offset",
          buttonRef: et,
          onClick: () => {
            em(), Chunk82659(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left Center",
          buttonRef: en,
          onClick: () => {
            em(), Chunk103866(true)
          }
        })]
      })]
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Gradient Examples"
      }), (0, Chunk255367.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Purple Gradient",
          buttonRef: ei,
          onClick: () => {
            em(), Chunk37148(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Blue Gradient",
          buttonRef: er,
          onClick: () => {
            em(), Chunk514361(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Nitro Pink Gradient",
          buttonRef: es,
          onClick: () => {
            em(), Chunk377089(true)
          }
        })]
      })]
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "With Asset"
      }), (0, Chunk255367.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Voice Filters",
          buttonRef: ea,
          onClick: () => {
            em(), Chunk580747(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Video Media Viewer",
          buttonRef: el,
          onClick: () => {
            em(), Chunk799071(true)
          }
        })]
      })]
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Multi-Step"
      }), (0, Chunk255367.jsx)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Multi-Step",
          buttonRef: eo,
          onClick: () => {
            em(), Chunk706705(true)
          }
        })
      })]
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        marginTop: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        children: "Expressive"
      }), (0, Chunk255367.jsxs)("div", {
        style: {
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        },
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Expressive Popover",
          buttonRef: ec,
          onClick: () => {
            em(), Chunk981631(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Expressive Multi-Step",
          buttonRef: ed,
          onClick: () => {
            em(), Chunk177475(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Expressive Video",
          buttonRef: eu,
          onClick: () => {
            em(), W(true)
          }
        })]
      })]
    })]
  })
}

function ep() {
  let [e, t] = Chunk73800.useState(false), [n, s] = Chunk73800.useState(false), [a, l] = Chunk73800.useState("auto");
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk884032.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Checkboxes"
      }), (0, Chunk255367.jsx)(Chunk481060.XZJ, {
        value: module,
        onChange: (e, n) => t(n),
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Checkbox input"
        })
      }), (0, Chunk255367.jsx)(Chunk481060.XZJ, {
        value: module,
        onChange: (e, n) => t(n),
        disabled: true,
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Disabled checkbox"
        })
      }), (0, Chunk255367.jsx)(Chunk481060.XZJ, {
        value: module,
        onChange: (e, n) => t(n),
        readOnly: true,
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Read-only checkbox"
        })
      }), (0, Chunk255367.jsx)(Chunk481060.XZJ, {
        value: module,
        onChange: (e, n) => t(n),
        type: Chunk481060.XZJ.Types.ROW,
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Checkbox row"
        })
      })]
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk884032.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Switches"
      }), (0, Chunk255367.jsx)(Chunk481060.j7V, {
        hideBorder: true,
        value: require,
        onChange: e => s(e),
        children: "FormSwitch with a label"
      })]
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk884032.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Radio Buttons"
      }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
        children: (0, Chunk255367.jsx)(Chunk481060.FXm, {
          onChange: e => {
            let {
              value: t
            } = e;
            return l(t)
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
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk884032.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Slider"
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk884032.slider,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Standard slider"
        }), (0, Chunk255367.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50,
          defaultValue: 50,
          markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk884032.slider,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Sticky markers"
        }), (0, Chunk255367.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50,
          markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          stickToMarkers: true
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk884032.slider,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Non-uniform markers"
        }), (0, Chunk255367.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50,
          markers: [0, 20, 50, 100],
          equidistant: false
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk884032.slider,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Non-uniform equidistant markers"
        }), (0, Chunk255367.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50,
          markers: [0, 20, 50, 100],
          equidistant: true
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk884032.slider,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "No markers"
        }), (0, Chunk255367.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk884032.slider,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "Mini slider"
        }), (0, Chunk255367.jsx)(Chunk481060.iRW, {
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
  let [e, t] = Chunk73800.useState(null), [n, s] = Chunk73800.useState(null), [a, l] = Chunk73800.useState([]), [c, d] = Chunk73800.useState([]), [u, m] = Chunk73800.useState([]);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk884032.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "SearchableSelect"
    }), (0, Chunk255367.jsx)(Chunk481060.VcW, {
      placeholder: "Single select",
      value: module,
      onChange: e => t(e),
      options: Chunk971809.G
    }), (0, Chunk255367.jsx)(Chunk481060.VcW, {
      placeholder: "Single select (clearable)",
      clearable: true,
      value: require,
      onChange: e => s(e),
      options: Chunk971809.G
    }), (0, Chunk255367.jsx)(Chunk481060.VcW, {
      placeholder: "Multi select",
      multi: true,
      value: a,
      onChange: e => l(e),
      options: Chunk971809.G
    }), (0, Chunk255367.jsx)(Chunk481060.VcW, {
      placeholder: "Multi select (clearable)",
      multi: true,
      clearable: true,
      value: Chunk680018,
      onChange: e => m(e),
      options: Chunk971809.G
    }), (0, Chunk255367.jsx)(Chunk481060.VcW, {
      placeholder: "Multi select (custom pills)",
      multi: true,
      value: Chunk442837,
      onChange: e => d(e),
      options: Chunk971809.G,
      hidePills: true,
      customPillContainerClassName: Chunk884032.customPillContainer,
      renderCustomPill: e => (0, i.jsx)("div", {
        style: {
          padding: 8,
          border: "1px solid var(--bg-brand)",
          borderRadius: 8
        },
        children: (0, i.jsx)(T.Text, {
          variant: "text-md/bold",
          children: e.label
        })
      })
    })]
  })
}

function eh() {
  let [e, t] = Chunk73800.useState(""), [n, s] = Chunk73800.useState(""), [a, l] = Chunk73800.useState(""), o = (0, Chunk377089.U)("UserSettingsDesignSystems");
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk884032.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "TextInput"
    }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Search",
      children: (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [(0, Chunk255367.jsx)(Chunk481060.E1j, {
          placeholder: "Search...",
          onChange: e => l(e),
          query: a,
          onClear: () => Chunk392711("")
        }), (0, Chunk255367.jsx)(Chunk481060.E1j, {
          size: "sm",
          placeholder: "Search...",
          onChange: e => l(e),
          query: a,
          onClear: () => Chunk392711("")
        })]
      })
    }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Disabled",
      disabled: true,
      children: (0, Chunk255367.jsx)(Chunk481060.oil, {
        placeholder: "Disabled",
        disabled: true
      })
    }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Error",
      children: (0, Chunk255367.jsx)(Chunk481060.oil, {
        required: true,
        error: "This must have a value"
      })
    }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Error",
      children: (0, Chunk255367.jsx)(Chunk481060.oil, {
        defaultValue: "Not a valid value",
        error: "This has an error."
      })
    }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "minLength",
      children: (0, Chunk255367.jsx)(Chunk481060.oil, {
        minLength: 6,
        value: module,
        onChange: exports,
        placeholder: "Enter at least 6 characters"
      })
    }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Read only",
      children: (0, Chunk255367.jsx)(Chunk481060.oil, {
        value: "Read-only, not-editable field",
        editable: false
      })
    }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Input with a label",
      children: (0, Chunk255367.jsx)(Chunk481060.oil, {
        placeholder: "Real placeholder",
        value: module,
        onChange: exports
      })
    }), Chunk971809 && (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Leading and Trailing",
      children: (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
        gap: 16,
        children: [(0, Chunk255367.jsx)(Chunk481060.Wn, {
          messageType: Chunk481060.QYI.WARNING,
          children: "Leading and trailing accessories are not yet supported in the public API."
        }), (0, Chunk255367.jsxs)(Chunk481060.Kqy, {
          children: [(0, Chunk255367.jsx)(Chunk481060.oil, {
            leading: Chunk481060.qJs,
            placeholder: "Create Channel",
            value: module,
            onChange: exports
          }), (0, Chunk255367.jsx)(Chunk481060.oil, {
            trailing: Chunk481060.lOy,
            placeholder: "Send Message",
            value: module,
            onChange: exports
          })]
        })]
      })
    }), (0, Chunk255367.jsx)(Chunk481060.xJW, {
      title: "Text area",
      children: (0, Chunk255367.jsx)(Chunk481060.Kx8, {
        placeholder: "Text area placeholder",
        showCharacterCount: true,
        value: require,
        onChange: Chunk120356
      })
    })]
  })
}

function ef(e) {
  let {
    transitionState: t
  } = e, [n, s] = r.useState(false), [a, l] = r.useState(T.CgR.SMALL), [o, c] = r.useState(false), d = n ? U.modalOutlines : "";
  return (0, i.jsxs)(T.Y0X, {
    transitionState: t,
    size: a,
    parentComponent: "UserSettingsDesignSystem",
    children: [(0, i.jsx)(T.xBx, {
      className: d,
      children: (0, i.jsx)(T.X6q, {
        variant: "heading-xl/semibold",
        children: "Modal"
      })
    }), (0, i.jsx)(T.hzk, {
      className: d,
      children: (0, i.jsxs)(T.Kqy, {
        gap: 16,
        children: [(0, i.jsx)(T.xJW, {
          title: "Modal Size",
          children: (0, i.jsx)(T.q4e, {
            value: a,
            onChange: l,
            options: Object.entries(T.CgR).map(e => {
              let [t, n] = e;
              return {
                label: t,
                value: n
              }
            })
          })
        }), (0, i.jsx)(T.hjN, {
          title: "Options",
          children: (0, i.jsxs)(T.Kqy, {
            gap: 16,
            children: [(0, i.jsx)(T.XZJ, {
              value: n,
              onChange: (e, t) => s(t),
              children: (0, i.jsx)(T.Text, {
                variant: "text-md/medium",
                children: "Show Section Outlines"
              })
            }), (0, i.jsx)(T.XZJ, {
              value: o,
              onChange: (e, t) => c(t),
              children: (0, i.jsx)(T.Text, {
                variant: "text-md/medium",
                children: "Show secondary action in footer"
              })
            })]
          })
        })]
      })
    }), (0, i.jsx)(T.mzw, {
      className: d,
      children: (0, i.jsxs)(T.Kqy, {
        direction: "horizontal",
        justify: "end",
        gap: 8,
        children: [o && (0, i.jsx)(T.zxk, {
          variant: "secondary",
          text: "Secondary Action"
        }), (0, i.jsx)(T.zxk, {
          variant: "primary",
          text: "Close"
        })]
      })
    })]
  })
}

function eb(e) {
  let {
    transitionState: t,
    onClose: n,
    modalCount: s = 1
  } = e, [a, l] = r.useState("replace"), o = s < 3;
  return (0, i.jsxs)(T.Y0X, {
    transitionState: t,
    size: 1 === s ? T.CgR.LARGE : 2 === s ? T.CgR.MEDIUM : T.CgR.SMALL,
    parentComponent: "UserSettingsDesignSystem",
    children: [(0, i.jsx)(T.xBx, {
      children: (0, i.jsx)(T.X6q, {
        variant: "heading-xl/semibold",
        children: "Modal Stacking Demo"
      })
    }), (0, i.jsx)(T.hzk, {
      children: (0, i.jsxs)(T.Kqy, {
        gap: 16,
        children: [(0, i.jsxs)(T.Text, {
          variant: "text-md/medium",
          children: ["This is modal level ", s, "."]
        }), o && (0, i.jsx)(T.xJW, {
          title: "Stacking Behavior",
          children: (0, i.jsx)(T.q4e, {
            value: a,
            onChange: l,
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
        }), (0, i.jsxs)(T.Kqy, {
          gap: 8,
          children: [(0, i.jsxs)(T.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, i.jsx)("strong", {
              children: "Replace One:"
            }), " The modal directly below is hidden (default behavior)"]
          }), (0, i.jsxs)(T.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, i.jsx)("strong", {
              children: "Replace All:"
            }), " All modals below are hidden"]
          }), (0, i.jsxs)(T.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, i.jsx)("strong", {
              children: "Stack:"
            }), " The modal directly below remains visible"]
          })]
        })]
      })
    }), (0, i.jsx)(T.mzw, {
      children: (0, i.jsxs)(T.Kqy, {
        direction: "horizontal",
        justify: "end",
        gap: 8,
        children: [(0, i.jsx)(T.zxk, {
          variant: "secondary",
          text: "Close",
          onClick: n
        }), o && (0, i.jsx)(T.zxk, {
          variant: "primary",
          text: "Open Next Modal",
          onClick: () => {
            let e = s + 1;
            (0, T.h7j)(t => (0, i.jsx)(eb, Y(W({}, t), {
              modalCount: e
            })), {
              stackingBehavior: a
            })
          }
        })]
      })
    })]
  })
}

function ex(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;

  function r(e) {
    let {
      children: t
    } = e;
    return (0, i.jsx)("div", {
      className: U.modalOutlines,
      style: {
        padding: "24px"
      },
      children: t
    })
  }
  return (0, i.jsxs)(b.I, {
    transitionState: t,
    onClose: n,
    children: [(0, i.jsx)("div", {
      className: U.modalOutlines,
      children: (0, i.jsx)(O.x, {
        title: "Demo Modal",
        subtitle: "The ModalHeader can have leading and trailing items on either side of the text",
        leading: (0, i.jsx)(r, {}),
        trailing: (0, i.jsx)(r, {})
      })
    }), (0, i.jsx)("div", {
      className: U.modalOutlines,
      children: (0, i.jsx)(E.f, {
        controls: (0, i.jsx)(r, {
          children: "This ModalBody renders any controls here"
        }),
        children: (0, i.jsx)(r, {
          children: "This is the main ModalBody. This area scrolls if there is enough content"
        })
      })
    }), (0, i.jsx)("div", {
      className: U.modalOutlines,
      children: (0, i.jsx)(C.m, {
        children: (0, i.jsx)(r, {
          children: "This is the ModalFooter"
        })
      })
    }), (0, i.jsx)("div", {
      className: U.modalOutlines,
      children: (0, i.jsx)(j.G, {
        leading: (0, i.jsx)(r, {
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

function e_(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [s, a] = r.useState("md"), [l, o] = r.useState("Demo Modal"), [c, d] = r.useState("Header body copy"), [u, m] = r.useState(false), [p, g] = r.useState(false), [h, f] = r.useState(false), [x, _] = r.useState(false), [v, S] = r.useState(false);
  return (0, i.jsxs)(b.I, {
    transitionState: t,
    onClose: n,
    size: s,
    children: [(0, i.jsx)(O.x, {
      title: l,
      subtitle: c,
      alignCenter: u
    }), (0, i.jsx)(E.f, {
      controls: p ? (0, i.jsx)(T.E1j, {
        placeholder: "Search",
        onChange: () => null,
        query: ""
      }) : true,
      children: (0, i.jsxs)(T.Kqy, {
        gap: 16,
        children: [(0, i.jsx)(T.xJW, {
          title: "Modal Size",
          children: (0, i.jsx)(T.q4e, {
            value: s,
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
        }), (0, i.jsx)(T.xJW, {
          title: "Header Title",
          children: (0, i.jsx)(T.oil, {
            onChange: o,
            defaultValue: l
          })
        }), (0, i.jsx)(T.xJW, {
          title: "Header body",
          children: (0, i.jsx)(T.oil, {
            onChange: d,
            defaultValue: c
          })
        }), (0, i.jsx)(T.xJW, {
          title: "Optional Content",
          children: (0, i.jsxs)(T.Kqy, {
            gap: 12,
            children: [(0, i.jsx)(T.XZJ, {
              value: u,
              onChange: (e, t) => m(t),
              children: (0, i.jsx)(T.Text, {
                variant: "text-md/medium",
                children: "Header Align Center"
              })
            }), (0, i.jsx)(T.XZJ, {
              value: p,
              onChange: (e, t) => g(t),
              children: (0, i.jsx)(T.Text, {
                variant: "text-md/medium",
                children: "Show Search Input"
              })
            }), (0, i.jsx)(T.XZJ, {
              value: h,
              onChange: (e, t) => f(t),
              children: (0, i.jsx)(T.Text, {
                variant: "text-md/medium",
                children: "Show Preview Content"
              })
            }), (0, i.jsx)(T.XZJ, {
              value: x,
              onChange: (e, t) => _(t),
              children: (0, i.jsx)(T.Text, {
                variant: "text-md/medium",
                children: "Show Action Bar Leading Input"
              })
            }), (0, i.jsx)(T.XZJ, {
              value: v,
              onChange: (e, t) => S(t),
              children: (0, i.jsx)(T.Text, {
                variant: "text-md/medium",
                children: "Full Width Actions"
              })
            })]
          })
        })]
      })
    }), h && (0, i.jsxs)(C.m, {
      children: [(0, i.jsx)(T.X6q, {
        variant: "heading-lg/semibold",
        children: "Celebration Station"
      }), (0, i.jsx)(T.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: "32 Members ● 19 Online"
      })]
    }), (0, i.jsx)(j.G, {
      leading: x ? (0, i.jsx)(j.B, {
        value: false,
        onChange: () => {}
      }) : true,
      actionsFullWidth: v,
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

function ej(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;

  function s(e) {
    let {
      text: t
    } = e, [n, s] = r.useState(false);
    return (0, i.jsx)("div", {
      style: {
        padding: "8px 0"
      },
      children: (0, i.jsx)(T.XZJ, {
        value: n,
        onChange: (e, t) => s(t),
        children: (0, i.jsx)(T.Text, {
          variant: "text-md/medium",
          children: t
        })
      })
    })
  }
  return (0, i.jsxs)(_.Modal, {
    transitionState: t,
    onClose: n,
    size: "md",
    title: "Invite to server",
    input: (0, i.jsx)(T.E1j, {
      placeholder: "Search",
      onChange: () => null,
      query: ""
    }),
    preview: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(T.X6q, {
        variant: "heading-lg/semibold",
        children: "Celebration Station"
      }), (0, i.jsx)(T.Text, {
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
      icon: T.kBi,
      iconPosition: "end",
      onClick: n
    }],
    children: [(0, i.jsx)(s, {
      text: "John Doe"
    }), (0, i.jsx)(s, {
      text: "Mark"
    }), (0, i.jsx)(s, {
      text: "KawaiiHermit"
    }), (0, i.jsx)(s, {
      text: "YurBruhGio"
    }), (0, i.jsx)(s, {
      text: "John Doe"
    }), (0, i.jsx)(s, {
      text: "Mark"
    }), (0, i.jsx)(s, {
      text: "KawaiiHermit"
    }), (0, i.jsx)(s, {
      text: "YurBruhGio"
    }), (0, i.jsx)(s, {
      text: "John Doe"
    }), (0, i.jsx)(s, {
      text: "Mark"
    }), (0, i.jsx)(s, {
      text: "KawaiiHermit"
    }), (0, i.jsx)(s, {
      text: "YurBruhGio"
    }), (0, i.jsx)(s, {
      text: "John Doe"
    }), (0, i.jsx)(s, {
      text: "Mark"
    }), (0, i.jsx)(s, {
      text: "KawaiiHermit"
    }), (0, i.jsx)(s, {
      text: "YurBruhGio"
    })]
  })
}

function eE(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;
  return (0, i.jsx)(_.Modal, {
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

function eC(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, [a, l] = r.useState(0), [o, c] = r.useState(false), u = r.useMemo(() => 0 === a ? {
    type: "image",
    src: V
  } : 1 === a ? {
    type: "lottie",
    lottie: () => n.e("94792").then(n.t.bind(n, 972951, 19)),
    aspectRatio: "6/4"
  } : 2 === a ? {
    type: "rive",
    rive: d.PerfTestRive
  } : 3 === a ? {
    type: "video",
    src: G.Z,
    fallbackImageSrc: V,
    loop: true,
    loopAt: 2.5
  } : 4 === a ? {
    type: "dynamic",
    component: T.AX$.DEMO,
    props: {
      text: "Dynamic Content"
    }
  } : true, [a]);
  return (0, i.jsxs)(x.I, {
    transitionState: t,
    onClose: s,
    gradientColor: "nitro-pink",
    graphic: u,
    badge: o ? "beta" : true,
    title: "Expressive Modal",
    subtitle: "This is an expressive modal with a header image",
    actions: [{
      variant: "secondary",
      text: "Cancel",
      onClick: s
    }, {
      variant: "primary",
      text: "Submit",
      onClick: s
    }],
    children: [(0, i.jsx)(T.xJW, {
      title: "Graphic Type",
      children: (0, i.jsx)(T.q4e, {
        value: a,
        onChange: l,
        options: [{
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
        }]
      })
    }), (0, i.jsx)(T.xJW, {
      style: {
        paddingTop: "16px"
      },
      children: (0, i.jsx)(T.XZJ, {
        value: o,
        onChange: (e, t) => c(t),
        children: (0, i.jsx)(T.Text, {
          variant: "text-md/medium",
          children: "Show beta badge"
        })
      })
    })]
  })
}

function eO(e) {
  let {
    transitionState: t,
    onClose: n,
    modalCount: s = 1
  } = e, [a, l] = r.useState("replace"), o = s < 3;
  return (0, i.jsx)(_.Modal, {
    transitionState: t,
    onClose: n,
    size: 1 === s ? "md" : "sm",
    title: "Mana Modal Stacking Demo",
    subtitle: "This is modal level ".concat(s, "."),
    actions: [{
      variant: "secondary",
      text: "Close",
      onClick: n
    }, ...o ? [{
      variant: "primary",
      text: "Open Next Modal",
      onClick: () => {
        let e = s + 1;
        (0, T.h7j)(t => (0, i.jsx)(eO, Y(W({}, t), {
          modalCount: e
        })), {
          stackingBehavior: a
        })
      }
    }] : []],
    children: (0, i.jsxs)(T.Kqy, {
      gap: 16,
      children: [o && (0, i.jsx)(T.xJW, {
        title: "Stacking Behavior",
        children: (0, i.jsx)(T.q4e, {
          value: a,
          onChange: l,
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
      }), (0, i.jsxs)(T.Kqy, {
        gap: 8,
        children: [(0, i.jsxs)(T.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, i.jsx)("strong", {
            children: "Replace One:"
          }), " The modal directly below is hidden (default behavior)"]
        }), (0, i.jsxs)(T.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, i.jsx)("strong", {
            children: "Replace All:"
          }), " All modals below are hidden"]
        }), (0, i.jsxs)(T.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, i.jsx)("strong", {
            children: "Stack:"
          }), " The modal directly below remains visible"]
        })]
      })]
    })
  })
}

function ev() {
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk884032.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Modals (Void)"
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(ef, W({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Show Alert",
        onClick: () => {
          Chunk240872.Z.show({
            title: "Alert",
            body: "This is an alert",
            confirmText: "Confirm Text",
            cancelText: "Cancel Text"
          })
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open modal stacking demo",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eb, W({}, e)))
        }
      })]
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk884032.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Modals (Mana)"
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open modal section visualizer",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(ex, W({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open demo modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(e_, W({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open sample invite modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(ej, W({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open sample alert modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eE, W({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open expressive modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eC, W({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open Mana modal stacking demo",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eO, W({}, e)))
        }
      })]
    })]
  })
}

function eS() {
  let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return (0, Chunk255367.jsx)(Chunk481060.f6W, {
    theme: Chunk231338.BR.DARKER,
    disableAdaptiveTheme: true,
    children: t => (0, i.jsxs)("div", {
      className: a()(t, U.section),
      children: [(0, i.jsx)(T.zxk, {
        variant: "secondary",
        text: "Button",
        fullWidth: true
      }), (0, i.jsx)(T.f6W, {
        theme: B.BR.LIGHT,
        children: t => (0, i.jsxs)("div", {
          className: a()(t, U.section),
          children: [(0, i.jsx)(T.zxk, {
            variant: "secondary",
            text: "Button",
            fullWidth: true
          }), (0, i.jsx)(T.f6W, {
            theme: B.BR.DARKER,
            children: e => (0, i.jsx)("div", {
              className: a()(e, U.section),
              children: (0, i.jsx)(T.zxk, {
                variant: "secondary",
                text: "Button",
                fullWidth: true
              })
            })
          }), (0, i.jsx)(T.f6W, {
            gradient: e,
            children: e => (0, i.jsx)("div", {
              className: a()(e, U.section),
              children: (0, i.jsx)(T.zxk, {
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