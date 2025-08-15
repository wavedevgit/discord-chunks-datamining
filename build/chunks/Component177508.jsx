/** Chunk was on 7384 **/
/** chunk id: 177508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => el
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

function q(e) {
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

function X(e, t) {
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

function J() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726927.root,
    children: [(0, Chunk255367.jsx)(Q, {}), (0, Chunk255367.jsx)(ec, {}), (0, Chunk255367.jsx)(eb, {}), (0, Chunk255367.jsx)(ex, {}), (0, Chunk255367.jsx)(ef, {}), (0, Chunk255367.jsx)(eg, {}), (0, Chunk255367.jsx)(eh, {}), (0, Chunk255367.jsx)(ep, {}), (0, Chunk255367.jsx)(em, {}), (0, Chunk255367.jsx)(eI, {}), (0, Chunk255367.jsx)(eN, {}), (0, Chunk255367.jsx)($, {}), (0, Chunk255367.jsx)(eA, {})]
  })
}

function Q() {
  let e = (0, Chunk580747.Z)("highlight_mana_components");
  return (0, Chunk255367.jsx)(Chunk481060.hjN, {
    title: "Design System Controls",
    children: (0, Chunk255367.jsx)(Chunk481060.xJW, {
      children: (0, Chunk255367.jsx)(Chunk481060.j7V, {
        value: module,
        onChange: e => (0, R.Z)("highlight_mana_components", e),
        note: "Highlights all mana components marked with data-mana-component",
        hideBorder: true,
        children: "Highlight Mana Components"
      })
    })
  })
}

function $() {
  let e = Object.keys(Chunk481060.DM8);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Notice"
    }), (0, Chunk255367.jsx)(Chunk481060.Kqy, {
      gap: 16,
      children: module.map(e => (0, i.jsx)(I.qXd, {
        color: I.DM8[e],
        children: (0, i.jsxs)("code", {
          children: ["NoticeColors.", e]
        })
      }, e))
    })]
  })
}
let ee = ["neutral", "blue_new", "blurple", "green_new", "red_new", "teal_new", "yellow_new", "orange_new", "pink", "purple"],
  et = ["background-surface-highest", "background-surface-higher", "background-surface-high", "background-base-low", "background-base-lower", "background-base-lowest"],
  en = ["background-gradient-lowest", "background-gradient-lower", "background-gradient-low", "background-gradient-high", "background-gradient-higher", "background-gradient-highest"],
  ei = ["", "background-mod-subtle", "background-mod-normal", "background-mod-strong"],
  er = ["critical", "warning", "positive", "info"],
  es = ["text-default", "text-primary", "text-secondary", "text-tertiary", "text-feedback-critical", "text-feedback-warning", "text-feedback-positive", "text-feedback-info", "premium-nitro-pink-text"];

function ea() {
  let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return (0, Chunk255367.jsxs)("div", {
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      className: Chunk726927.heading,
      children: "Background Colors"
    }), et.map(e => (0, i.jsxs)("div", {
      className: G.palette,
      style: {
        backgroundColor: "var(--".concat(e, ")"),
        padding: 24
      },
      children: [(0, i.jsx)(I.Text, {
        variant: "text-md/medium",
        children: e
      }), (0, i.jsx)("div", {
        style: {
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        },
        children: ei.map(e => (0, i.jsxs)("div", {
          className: G.color,
          style: {
            padding: 16,
            background: "var(--".concat(e, ")")
          },
          children: [(0, i.jsx)(I.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            children: e
          }), (0, i.jsx)("hr", {
            className: G.sectionDivider
          }), es.map(e => (0, i.jsx)(I.Text, {
            variant: "text-xs/medium",
            style: {
              color: "var(--".concat(e, ")")
            },
            children: e
          }, e))]
        }, e))
      }), (0, i.jsx)("hr", {
        className: G.sectionDivider
      }), (0, i.jsx)("div", {
        style: {
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        },
        children: er.map(e => {
          let t = "var(--text-feedback-".concat(e, ")");
          return (0, i.jsxs)("div", {
            className: G.color,
            style: {
              padding: 16,
              background: "var(--background-feedback-".concat(e, ")")
            },
            children: [(0, i.jsx)(I.Text, {
              variant: "text-xs/semibold",
              color: "header-secondary"
            }), (0, i.jsxs)(I.Kqy, {
              children: [(0, i.jsxs)(I.Text, {
                variant: "text-xs/semibold",
                style: {
                  color: t
                },
                children: ["background-feedback-", e]
              }), (0, i.jsx)(I.Text, {
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
        className: Chunk726927.heading,
        children: "Gradient Background Colors"
      }), (0, Chunk255367.jsx)("div", {
        className: "custom-theme-background",
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          transform: "translateZ(0)"
        },
        children: en.map(e => (0, i.jsx)("div", {
          className: G.palette,
          style: {
            background: "var(--".concat(e, ")"),
            height: 400
          },
          children: (0, i.jsx)(I.Text, {
            variant: "text-xs/medium",
            children: e
          })
        }, e))
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      className: Chunk726927.heading,
      children: "Scales"
    }), ee.map(e => (0, i.jsxs)("div", {
      className: G.palette,
      children: [(0, i.jsx)(I.Text, {
        variant: "text-lg/semibold",
        children: e
      }), (0, i.jsx)("div", {
        className: G.colors,
        children: Array.from({
          length: 100
        }, (t, n) => (0, i.jsx)("div", {
          className: G.color,
          style: {
            background: "var(--".concat(e.replace("_", "-"), "-").concat(n + 1, ")")
          },
          children: (0, i.jsx)(I.f6W, {
            theme: n < 50 ? "light" : "dark",
            children: t => (0, i.jsxs)(I.Text, {
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

function el() {
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)(Chunk526156.Z, {
      parentSetting: Chunk726985.s6.DESIGN_SYSTEMS,
      settingsSection: Chunk981631.oAB.DESIGN_SYSTEMS,
      tabs: [{
        title: "Components",
        component: () => (0, Chunk255367.jsx)(J, {}),
        setting: Chunk726985.s6.DESIGN_SYSTEMS_COMPONENTS
      }, {
        title: "Colors",
        component: () => (0, Chunk255367.jsx)(ea, {}),
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
      className: Chunk726927.themes,
      children: (0, Chunk255367.jsx)(Chunk705262.ZP, {
        type: Chunk705262.yH.SETTINGS,
        children: (0, Chunk255367.jsx)(Chunk705262.ZP.Basic, {
          className: Chunk726927.themeSelectionGroup
        })
      })
    })]
  })
}

function eo(e) {
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
  }), [a, n]), (0, i.jsx)(t, X(q({}, s), {
    loading: n ? a : true,
    onClick: () => l(!a)
  }))
}

function ec() {
  let [e, t] = Chunk73800.useState("md"), [n, s] = Chunk73800.useState("start"), [a, o] = Chunk73800.useState(true), c = ["primary", "secondary", "critical-primary", "critical-secondary", "active", "overlay-primary", "overlay-secondary"], d = [...Chunk442837, "expressive"].map(t => (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(eo, {
      component: u.z,
      variant: t,
      text: "".concat((0, l.capitalize)(t), " ").concat(e.toUpperCase()),
      size: e,
      icon: "none" !== n ? I.gw7 : true,
      iconPosition: n,
      showLoadingAnimation: a
    }, t + e), (0, i.jsx)(eo, {
      component: u.z,
      variant: t,
      text: "".concat((0, l.capitalize)(t), " ").concat(e.toUpperCase()),
      size: e,
      icon: "none" !== n ? I.gw7 : true,
      iconPosition: n,
      showLoadingAnimation: a,
      disabled: true
    }, t + e + "disabled")]
  })), g = [...Chunk442837, "icon-only"].map(t => (0, i.jsx)(eo, {
    component: p.h,
    variant: t,
    icon: I.gw7,
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
    className: Chunk726927.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Buttons"
    }), (0, Chunk255367.jsxs)(eu, {
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
            children: [(0, Chunk255367.jsx)(eo, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(eo, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            })]
          }), (0, Chunk255367.jsxs)(Chunk374415.h, {
            size: module,
            children: [(0, Chunk255367.jsx)(eo, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(eo, {
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
            children: [(0, Chunk255367.jsx)(eo, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(eo, {
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
            children: [(0, Chunk255367.jsx)(eo, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(eo, {
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
            children: [(0, Chunk255367.jsx)(eo, {
              component: Chunk680018.z,
              variant: "secondary",
              text: "Cancel",
              showLoadingAnimation: a
            }), (0, Chunk255367.jsx)(eo, {
              component: Chunk680018.z,
              variant: "primary",
              text: "Submit",
              showLoadingAnimation: a
            })]
          })
        })]
      }), (0, Chunk255367.jsx)(ed, {
        buttonSize: module
      })]
    })]
  })
}

function ed(e) {
  let {
    buttonSize: t
  } = e, [n, s] = r.useState(false);
  return (0, i.jsxs)(I.Kqy, {
    gap: 16,
    children: [(0, i.jsx)(I.X6q, {
      variant: "heading-xl/semibold",
      children: "PlayButton"
    }), (0, i.jsx)(I.Kqy, {
      direction: "horizontal",
      gap: 16,
      children: ["dark", "mid", "light"].map(e => (0, i.jsx)("div", {
        className: G.video,
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

function eu(e) {
  let {
    children: t,
    title: n
  } = e, [s, l] = r.useState(false);
  return (0, i.jsxs)(I.Kqy, {
    direction: "vertical",
    gap: 0,
    padding: 16,
    className: G.floatingControls,
    children: [(0, i.jsxs)(I.Kqy, {
      direction: "horizontal",
      gap: 16,
      align: "center",
      justify: "space-between",
      children: [(0, i.jsx)(I.X6q, {
        variant: "heading-lg/semibold",
        children: n
      }), (0, i.jsx)(f.Q, {
        icon: s ? I.hic : I.sXD,
        onClick: () => l(!s),
        pressed: s,
        "aria-label": "Show controls"
      })]
    }), (0, i.jsx)(I.Kqy, {
      gap: 16,
      className: a()(G.floatingControlsContent, {
        [G.floatingControlsContentHidden]: !s
      }),
      children: t
    })]
  })
}

function em() {
  let [e, t] = Chunk73800.useState("1");
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "TabBar"
    }), (0, Chunk255367.jsxs)(Chunk481060.njP, {
      type: "top",
      look: "brand",
      selectedItem: module,
      onItemSelect: e => t(e),
      className: Chunk726927.tabBar,
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

function ep() {
  let [e, t] = Chunk73800.useState(1), [n, s] = Chunk73800.useState(false), [a, l] = Chunk73800.useState(5), [o, c] = Chunk73800.useState(false), d = Chunk73800.useRef(null);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726927.section,
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
              control: (e, t) => (0, i.jsx)(I._wy, {
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

function eg() {
  let [e, t] = Chunk73800.useState(Chunk481060.FGA.PRIMARY), n = Chunk73800.useMemo(() => Object.entries(Chunk481060.FGA).map(e => {
    let [t, n] = e;
    return {
      label: t,
      value: n
    }
  }), []);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Tooltips"
    }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      children: "Legacy Tooltips"
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
        children: e => (0, i.jsx)(I.zxk, q({
          variant: "primary",
          text: "Tooltip on the top"
        }, e))
      }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's right aligned tooltip text!",
        position: "left",
        children: e => (0, i.jsx)(I.zxk, q({
          variant: "primary",
          text: "Tooltip on the left"
        }, e))
      }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's bottom aligned tooltip text!",
        position: "bottom",
        children: e => (0, i.jsx)(I.zxk, q({
          variant: "primary",
          text: "Tooltip on the bottom"
        }, e))
      }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
        color: module,
        text: "Here's right aligned tooltip text!",
        position: "right",
        children: e => (0, i.jsx)(I.zxk, q({
          variant: "primary",
          text: "Tooltip on the right"
        }, e))
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      style: {
        marginTop: 32
      },
      children: "New Mana Tooltips"
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: [(0, Chunk255367.jsx)(Chunk681715.u, {
        text: "New Mana Tooltip with animations!",
        position: "top",
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Mana Tooltip (Top)"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Left positioned animated tooltip",
        position: "left",
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Mana Tooltip (Left)"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Bottom positioned animated tooltip",
        position: "bottom",
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Mana Tooltip (Bottom)"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Right positioned animated tooltip",
        position: "right",
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Mana Tooltip (Right)"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod non proident amo.",
        position: "right",
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Three lines"
        })
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      style: {
        marginTop: 32
      },
      children: "Tooltip Caret API Examples"
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      style: {
        marginTop: 16,
        marginBottom: 8
      },
      children: "Vertical Positions"
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Top with start",
        position: "top",
        caretConfig: {
          align: "start"
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Top - Start"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Top with center",
        position: "top",
        caretConfig: {
          align: "center"
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Top - Center"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Top with end",
        position: "top",
        caretConfig: {
          align: "end"
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Top - End"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Bottom with start",
        position: "bottom",
        caretConfig: {
          align: "start"
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Bottom - Start"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Bottom with center",
        position: "bottom",
        caretConfig: {
          align: "center"
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Bottom - Center"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Bottom with end",
        position: "bottom",
        caretConfig: {
          align: "end"
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Bottom - End"
        })
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      style: {
        marginBottom: 8
      },
      children: "Horizontal Positions"
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 16
      },
      children: [(0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Left with center",
        position: "left",
        caretConfig: {
          align: "center"
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left - Center"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Right with center",
        position: "right",
        caretConfig: {
          align: "center"
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Right - Center"
        })
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      style: {
        marginBottom: 8
      },
      children: "Custom Offset"
    }), (0, Chunk255367.jsx)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Bottom with custom",
        position: "bottom",
        caretConfig: {
          align: "custom",
          customOffset: 30
        },
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Custom Offset"
        })
      })
    }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      style: {
        marginTop: 32
      },
      children: "Tooltip Delays"
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: [(0, Chunk255367.jsx)(Chunk681715.u, {
        text: "No delay (immediate)",
        delay: 0,
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "No Delay"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Short delay (500ms)",
        delay: 500,
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Short Delay"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.u, {
        text: "Long delay (1000ms)",
        delay: 1e3,
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Long Delay"
        })
      })]
    }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-lg/semibold",
      style: {
        marginTop: 32
      },
      children: "Rich Tooltips"
    }), (0, Chunk255367.jsxs)("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      },
      children: [(0, Chunk255367.jsx)(Chunk681715.i_, {
        title: "Title goes here",
        body: "Body copy goes in this section. Meow.",
        position: "top",
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Rich Tooltip (No Graphic)"
        })
      }), (0, Chunk255367.jsx)(Chunk681715.i_, {
        title: "With Graphic Asset",
        body: "This tooltip includes a graphic element on the left side",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk518797.Z,
          alt: "Graphic slot 48px"
        }),
        position: "top",
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "With Asset"
        })
      })]
    })]
  })
}

function eh() {
  let [e, t] = Chunk73800.useState(false), [n, s] = Chunk73800.useState(false), [a, l] = Chunk73800.useState(false), [o, c] = Chunk73800.useState(false), [d, u] = Chunk73800.useState(false), [m, p] = Chunk73800.useState(false), [g, h] = Chunk73800.useState(false), [f, b] = Chunk73800.useState(false), [x, _] = Chunk73800.useState(false), [j, E] = Chunk73800.useState(false), [C, O] = Chunk73800.useState(false), [T, N] = Chunk73800.useState(false), [y, A] = Chunk73800.useState(false), [P, R] = Chunk73800.useState(false), [D, Z] = Chunk73800.useState(false), [w, k] = Chunk73800.useState(false), [L, B] = Chunk73800.useState(false), [M, U] = Chunk73800.useState(false), [V, F] = Chunk73800.useState(false), [H, z] = Chunk73800.useState(false), q = Chunk73800.useRef(null), X = Chunk73800.useRef(null), J = Chunk73800.useRef(null), Q = Chunk73800.useRef(null), $ = Chunk73800.useRef(null), ee = Chunk73800.useRef(null), et = Chunk73800.useRef(null), en = Chunk73800.useRef(null), ei = Chunk73800.useRef(null), er = Chunk73800.useRef(null), es = Chunk73800.useRef(null), ea = Chunk73800.useRef(null), el = Chunk73800.useRef(null), eo = Chunk73800.useRef(null), ec = Chunk73800.useRef(null), ed = Chunk73800.useRef(null), eu = Chunk73800.useRef(null), em = Chunk73800.useRef(null), ep = Chunk73800.useRef(null), eg = Chunk73800.useRef(null), eh = Chunk73800.useCallback(() => {
    exports(false), Chunk120356(false), Chunk392711(false), Chunk442837(false), Chunk680018(false), Chunk861066(false), Chunk179538(false), Chunk257465(false), Chunk82659(false), Chunk103866(false), Chunk37148(false), Chunk240872(false), Chunk705262(false), Chunk581612(false), Chunk594174(false), Chunk799071(false), Chunk706705(false), Chunk981631(false), Chunk177475(false), Chunk691739(false)
  }, []);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "Popovers"
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: q,
      shouldShow: module,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: X,
      shouldShow: require,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: J,
      shouldShow: a,
      onRequestClose: eh,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "Header",
      body: "Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.",
      actions: [{
        text: "Button",
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: Q,
      shouldShow: Chunk971809,
      onRequestClose: eh,
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
        onClick: eh
      }],
      textLink: {
        text: "Learn More",
        link: "https://discord.com",
        external: true
      }
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: $,
      shouldShow: Chunk836459,
      onRequestClose: eh,
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
        onClick: eh,
        variant: "primary"
      }, {
        text: "Secondary",
        onClick: eh,
        variant: "secondary"
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: ee,
      shouldShow: Chunk374415,
      onRequestClose: eh,
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
      targetElementRef: et,
      shouldShow: Chunk780842,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: en,
      shouldShow: Chunk279570,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: ei,
      shouldShow: Chunk667202,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: er,
      shouldShow: Chunk369585,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: es,
      shouldShow: Chunk213734,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: ea,
      shouldShow: Chunk681715,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: el,
      shouldShow: Chunk514361,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.J2, {
      targetElementRef: eo,
      shouldShow: Chunk377089,
      onRequestClose: eh,
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
        onClick: eh
      }]
    }), (0, Chunk255367.jsx)(Chunk907862.Mb, {
      targetElementRef: ec,
      shouldShow: Chunk580747,
      onRequestClose: eh,
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
        onClick: eh
      }
    }), (0, Chunk255367.jsx)(Chunk907862.Mb, {
      targetElementRef: ed,
      shouldShow: Chunk526156,
      onRequestClose: eh,
      caretConfig: {
        position: "bottom",
        align: "center"
      },
      title: "With different preview",
      body: "Click the video to view it in the media viewer!",
      previewUrl: "https://cdn.discordapp.com/assets/server_products/storefront/default-header.mov",
      assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
      badge: "new",
      gradientColor: "blue",
      action: {
        text: "Learn More",
        onClick: eh
      }
    }), (0, Chunk255367.jsx)(Chunk466590.e, {
      targetElementRef: eu,
      shouldShow: Chunk554042,
      onRequestClose: eh,
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
      targetElementRef: em,
      shouldShow: Chunk726985,
      onRequestClose: eh,
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
        onClick: eh,
        variant: "expressive"
      }]
    }), (0, Chunk255367.jsx)(Chunk466590.e, {
      targetElementRef: ep,
      shouldShow: Chunk231338,
      onRequestClose: eh,
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
      targetElementRef: eg,
      shouldShow: Chunk518797,
      onRequestClose: eh,
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
        onClick: eh,
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
          buttonRef: q,
          onClick: () => {
            eh(), exports(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Medium Content",
          buttonRef: X,
          onClick: () => {
            eh(), Chunk120356(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          buttonRef: J,
          onClick: () => {
            eh(), Chunk392711(true)
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
          buttonRef: Q,
          onClick: () => {
            eh(), Chunk442837(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Two Actions",
          buttonRef: $,
          onClick: () => {
            eh(), Chunk680018(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          buttonRef: ee,
          onClick: () => {
            eh(), Chunk861066(true)
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
          buttonRef: et,
          onClick: () => {
            eh(), Chunk179538(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left Side Caret",
          buttonRef: en,
          onClick: () => {
            eh(), Chunk257465(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Custom Offset",
          buttonRef: ei,
          onClick: () => {
            eh(), Chunk82659(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Left Center",
          buttonRef: er,
          onClick: () => {
            eh(), Chunk103866(true)
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
          buttonRef: es,
          onClick: () => {
            eh(), Chunk37148(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Blue Gradient",
          buttonRef: ea,
          onClick: () => {
            eh(), Chunk240872(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Nitro Pink Gradient",
          buttonRef: el,
          onClick: () => {
            eh(), Chunk705262(true)
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
          buttonRef: eo,
          onClick: () => {
            eh(), Chunk581612(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Video Media Viewer",
          buttonRef: ec,
          onClick: () => {
            eh(), Chunk594174(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Video with Different Preview",
          buttonRef: ed,
          onClick: () => {
            eh(), Chunk799071(true)
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
          buttonRef: eu,
          onClick: () => {
            eh(), Chunk706705(true)
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
          buttonRef: em,
          onClick: () => {
            eh(), Chunk981631(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Expressive Multi-Step",
          buttonRef: ep,
          onClick: () => {
            eh(), Chunk177475(true)
          }
        }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Expressive Video",
          buttonRef: eg,
          onClick: () => {
            eh(), Chunk691739(true)
          }
        })]
      })]
    })]
  })
}

function ef() {
  let [e, t] = Chunk73800.useState(false), [n, s] = Chunk73800.useState(false), [a, l] = Chunk73800.useState("auto");
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk726927.section,
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
      className: Chunk726927.section,
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
      className: Chunk726927.section,
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
      className: Chunk726927.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Slider"
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk726927.slider,
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
        className: Chunk726927.slider,
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
        className: Chunk726927.slider,
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
        className: Chunk726927.slider,
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
        className: Chunk726927.slider,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          children: "No markers"
        }), (0, Chunk255367.jsx)(Chunk481060.iRW, {
          minValue: 0,
          maxValue: 100,
          initialValue: 50
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk726927.slider,
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

function eb() {
  let [e, t] = Chunk73800.useState(null), [n, s] = Chunk73800.useState(null), [a, l] = Chunk73800.useState([]), [c, d] = Chunk73800.useState([]), [u, m] = Chunk73800.useState([]);
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726927.section,
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
      customPillContainerClassName: Chunk726927.customPillContainer,
      renderCustomPill: e => (0, i.jsx)("div", {
        style: {
          padding: 8,
          border: "1px solid var(--bg-brand)",
          borderRadius: 8
        },
        children: (0, i.jsx)(I.Text, {
          variant: "text-md/bold",
          children: e.label
        })
      })
    })]
  })
}

function ex() {
  let [e, t] = Chunk73800.useState(""), [n, s] = Chunk73800.useState(""), [a, l] = Chunk73800.useState(""), o = (0, Chunk377089.U)("UserSettingsDesignSystems");
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726927.section,
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

function e_(e) {
  let {
    transitionState: t
  } = e, [n, s] = r.useState(false), [a, l] = r.useState(I.CgR.SMALL), [o, c] = r.useState(false), d = n ? G.modalOutlines : "";
  return (0, i.jsxs)(I.Y0X, {
    transitionState: t,
    size: a,
    parentComponent: "UserSettingsDesignSystem",
    children: [(0, i.jsx)(I.xBx, {
      className: d,
      children: (0, i.jsx)(I.X6q, {
        variant: "heading-xl/semibold",
        children: "Modal"
      })
    }), (0, i.jsx)(I.hzk, {
      className: d,
      children: (0, i.jsxs)(I.Kqy, {
        gap: 16,
        children: [(0, i.jsx)(I.xJW, {
          title: "Modal Size",
          children: (0, i.jsx)(I.q4e, {
            value: a,
            onChange: l,
            options: Object.entries(I.CgR).map(e => {
              let [t, n] = e;
              return {
                label: t,
                value: n
              }
            })
          })
        }), (0, i.jsx)(I.hjN, {
          title: "Options",
          children: (0, i.jsxs)(I.Kqy, {
            gap: 16,
            children: [(0, i.jsx)(I.XZJ, {
              value: n,
              onChange: (e, t) => s(t),
              children: (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show Section Outlines"
              })
            }), (0, i.jsx)(I.XZJ, {
              value: o,
              onChange: (e, t) => c(t),
              children: (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show secondary action in footer"
              })
            })]
          })
        })]
      })
    }), (0, i.jsx)(I.mzw, {
      className: d,
      children: (0, i.jsxs)(I.Kqy, {
        direction: "horizontal",
        justify: "end",
        gap: 8,
        children: [o && (0, i.jsx)(I.zxk, {
          variant: "secondary",
          text: "Secondary Action"
        }), (0, i.jsx)(I.zxk, {
          variant: "primary",
          text: "Close"
        })]
      })
    })]
  })
}

function ej(e) {
  let {
    transitionState: t,
    onClose: n,
    modalCount: s = 1
  } = e, [a, l] = r.useState("replace"), o = s < 3;
  return (0, i.jsxs)(I.Y0X, {
    transitionState: t,
    size: 1 === s ? I.CgR.LARGE : 2 === s ? I.CgR.MEDIUM : I.CgR.SMALL,
    parentComponent: "UserSettingsDesignSystem",
    children: [(0, i.jsx)(I.xBx, {
      children: (0, i.jsx)(I.X6q, {
        variant: "heading-xl/semibold",
        children: "Modal Stacking Demo"
      })
    }), (0, i.jsx)(I.hzk, {
      children: (0, i.jsxs)(I.Kqy, {
        gap: 16,
        children: [(0, i.jsxs)(I.Text, {
          variant: "text-md/medium",
          children: ["This is modal level ", s, "."]
        }), o && (0, i.jsx)(I.xJW, {
          title: "Stacking Behavior",
          children: (0, i.jsx)(I.q4e, {
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
        }), (0, i.jsxs)(I.Kqy, {
          gap: 8,
          children: [(0, i.jsxs)(I.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, i.jsx)("strong", {
              children: "Replace One:"
            }), " The modal directly below is hidden (default behavior)"]
          }), (0, i.jsxs)(I.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, i.jsx)("strong", {
              children: "Replace All:"
            }), " All modals below are hidden"]
          }), (0, i.jsxs)(I.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: [(0, i.jsx)("strong", {
              children: "Stack:"
            }), " The modal directly below remains visible"]
          })]
        })]
      })
    }), (0, i.jsx)(I.mzw, {
      children: (0, i.jsxs)(I.Kqy, {
        direction: "horizontal",
        justify: "end",
        gap: 8,
        children: [(0, i.jsx)(I.zxk, {
          variant: "secondary",
          text: "Close",
          onClick: n
        }), o && (0, i.jsx)(I.zxk, {
          variant: "primary",
          text: "Open Next Modal",
          onClick: () => {
            let e = s + 1;
            (0, I.h7j)(t => (0, i.jsx)(ej, X(q({}, t), {
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

function eE(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;

  function r(e) {
    let {
      children: t
    } = e;
    return (0, i.jsx)("div", {
      className: G.modalOutlines,
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
      className: G.modalOutlines,
      children: (0, i.jsx)(O.x, {
        title: "Demo Modal",
        subtitle: "The ModalHeader can have leading and trailing items on either side of the text",
        leading: (0, i.jsx)(r, {}),
        trailing: (0, i.jsx)(r, {})
      })
    }), (0, i.jsx)("div", {
      className: G.modalOutlines,
      children: (0, i.jsx)(E.f, {
        controls: (0, i.jsx)(r, {
          children: "This ModalBody renders any controls here"
        }),
        children: (0, i.jsx)(r, {
          children: "This is the main ModalBody. This area scrolls if there is enough content"
        })
      })
    }), (0, i.jsx)("div", {
      className: G.modalOutlines,
      children: (0, i.jsx)(C.m, {
        children: (0, i.jsx)(r, {
          children: "This is the ModalFooter"
        })
      })
    }), (0, i.jsx)("div", {
      className: G.modalOutlines,
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

function eC(e) {
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
      controls: p ? (0, i.jsx)(I.E1j, {
        placeholder: "Search",
        onChange: () => null,
        query: ""
      }) : true,
      children: (0, i.jsxs)(I.Kqy, {
        gap: 16,
        children: [(0, i.jsx)(I.xJW, {
          title: "Modal Size",
          children: (0, i.jsx)(I.q4e, {
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
        }), (0, i.jsx)(I.xJW, {
          title: "Header Title",
          children: (0, i.jsx)(I.oil, {
            onChange: o,
            defaultValue: l
          })
        }), (0, i.jsx)(I.xJW, {
          title: "Header body",
          children: (0, i.jsx)(I.oil, {
            onChange: d,
            defaultValue: c
          })
        }), (0, i.jsx)(I.xJW, {
          title: "Optional Content",
          children: (0, i.jsxs)(I.Kqy, {
            gap: 12,
            children: [(0, i.jsx)(I.XZJ, {
              value: u,
              onChange: (e, t) => m(t),
              children: (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Header Align Center"
              })
            }), (0, i.jsx)(I.XZJ, {
              value: p,
              onChange: (e, t) => g(t),
              children: (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show Search Input"
              })
            }), (0, i.jsx)(I.XZJ, {
              value: h,
              onChange: (e, t) => f(t),
              children: (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show Preview Content"
              })
            }), (0, i.jsx)(I.XZJ, {
              value: x,
              onChange: (e, t) => _(t),
              children: (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Show Action Bar Leading Input"
              })
            }), (0, i.jsx)(I.XZJ, {
              value: v,
              onChange: (e, t) => S(t),
              children: (0, i.jsx)(I.Text, {
                variant: "text-md/medium",
                children: "Full Width Actions"
              })
            })]
          })
        })]
      })
    }), h && (0, i.jsxs)(C.m, {
      children: [(0, i.jsx)(I.X6q, {
        variant: "heading-lg/semibold",
        children: "Celebration Station"
      }), (0, i.jsx)(I.Text, {
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

function eO(e) {
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
      children: (0, i.jsx)(I.XZJ, {
        value: n,
        onChange: (e, t) => s(t),
        children: (0, i.jsx)(I.Text, {
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
    input: (0, i.jsx)(I.E1j, {
      placeholder: "Search",
      onChange: () => null,
      query: ""
    }),
    preview: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(I.X6q, {
        variant: "heading-lg/semibold",
        children: "Celebration Station"
      }), (0, i.jsx)(I.Text, {
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

function ev(e) {
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

function eS(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, [a, l] = r.useState(0), [o, c] = r.useState(false), u = r.useMemo(() => 0 === a ? {
    type: "image",
    src: F
  } : 1 === a ? {
    type: "lottie",
    lottie: () => n.e("94792").then(n.t.bind(n, 972951, 19)),
    aspectRatio: "6/4"
  } : 2 === a ? {
    type: "rive",
    rive: d.PerfTestRive
  } : 3 === a ? {
    type: "video",
    src: z.Z,
    fallbackImageSrc: F,
    loop: true,
    loopAt: 2.5
  } : 4 === a ? {
    type: "dynamic",
    component: I.AX$.DEMO,
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
    children: [(0, i.jsx)(I.xJW, {
      title: "Graphic Type",
      children: (0, i.jsx)(I.q4e, {
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
    }), (0, i.jsx)(I.xJW, {
      style: {
        paddingTop: "16px"
      },
      children: (0, i.jsx)(I.XZJ, {
        value: o,
        onChange: (e, t) => c(t),
        children: (0, i.jsx)(I.Text, {
          variant: "text-md/medium",
          children: "Show beta badge"
        })
      })
    })]
  })
}

function eT(e) {
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
        (0, I.h7j)(t => (0, i.jsx)(eT, X(q({}, t), {
          modalCount: e
        })), {
          stackingBehavior: a
        })
      }
    }] : []],
    children: (0, i.jsxs)(I.Kqy, {
      gap: 16,
      children: [o && (0, i.jsx)(I.xJW, {
        title: "Stacking Behavior",
        children: (0, i.jsx)(I.q4e, {
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
      }), (0, i.jsxs)(I.Kqy, {
        gap: 8,
        children: [(0, i.jsxs)(I.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, i.jsx)("strong", {
            children: "Replace One:"
          }), " The modal directly below is hidden (default behavior)"]
        }), (0, i.jsxs)(I.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          children: [(0, i.jsx)("strong", {
            children: "Replace All:"
          }), " All modals below are hidden"]
        }), (0, i.jsxs)(I.Text, {
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

function eI() {
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Modals (Void)"
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(e_, q({}, e)))
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
          (0, Chunk481060.h7j)(e => (0, i.jsx)(ej, q({}, e)))
        }
      })]
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk726927.section,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Modals (Mana)"
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open modal section visualizer",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eE, q({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open demo modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eC, q({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open sample invite modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eO, q({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open sample alert modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(ev, q({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open expressive modal",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eS, q({}, e)))
        }
      }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Open Mana modal stacking demo",
        onClick: () => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eT, q({}, e)))
        }
      })]
    })]
  })
}

function eN() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk726927.section,
    children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
      variant: "heading-xl/semibold",
      children: "User Avatars"
    }), (0, Chunk255367.jsx)("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      },
      children: ["SIZE_16", "SIZE_20", "SIZE_24", "SIZE_32", "SIZE_40", "SIZE_44", "SIZE_48", "SIZE_80", "SIZE_96", "SIZE_120"].map(e => (0, i.jsx)(ey, {
        size: e
      }, e))
    })]
  })
}

function ey(e) {
  let {
    size: t
  } = e, {
    user: n
  } = (0, c.cj)([Z.default], () => ({
    user: Z.default.getCurrentUser()
  })), r = Number(t.split("_")[1]);
  return (0, i.jsxs)("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 8
    },
    children: [(0, i.jsxs)(I.X6q, {
      variant: "heading-sm/semibold",
      style: {
        textAlign: "center"
      },
      children: [r, "px"]
    }), (0, i.jsx)(I.qEK, {
      src: null == n ? true : n.getAvatarURL(true, r),
      size: t,
      "aria-label": null == n ? true : n.username,
      status: V.Sk.ONLINE
    }), (0, i.jsx)(I.qEK, {
      src: null == n ? true : n.getAvatarURL(true, r),
      size: t,
      "aria-label": null == n ? true : n.username,
      status: V.Sk.ONLINE,
      isTyping: true
    }), (0, i.jsx)(I.qEK, {
      src: null == n ? true : n.getAvatarURL(true, r),
      size: t,
      "aria-label": null == n ? true : n.username,
      status: V.Sk.ONLINE,
      isMobile: true
    }), (0, i.jsx)(I.qEK, {
      src: null == n ? true : n.getAvatarURL(true, r),
      size: t,
      "aria-label": null == n ? true : n.username,
      isSpeaking: true
    })]
  })
}

function eA() {
  let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return (0, Chunk255367.jsx)(Chunk481060.f6W, {
    theme: Chunk231338.BR.DARKER,
    disableAdaptiveTheme: true,
    children: t => (0, i.jsxs)("div", {
      className: a()(t, G.section),
      children: [(0, i.jsx)(I.zxk, {
        variant: "secondary",
        text: "Button",
        fullWidth: true
      }), (0, i.jsx)(I.f6W, {
        theme: V.BR.LIGHT,
        children: t => (0, i.jsxs)("div", {
          className: a()(t, G.section),
          children: [(0, i.jsx)(I.zxk, {
            variant: "secondary",
            text: "Button",
            fullWidth: true
          }), (0, i.jsx)(I.f6W, {
            theme: V.BR.DARKER,
            children: e => (0, i.jsx)("div", {
              className: a()(e, G.section),
              children: (0, i.jsx)(I.zxk, {
                variant: "secondary",
                text: "Button",
                fullWidth: true
              })
            })
          }), (0, i.jsx)(I.f6W, {
            gradient: e,
            children: e => (0, i.jsx)("div", {
              className: a()(e, G.section),
              children: (0, i.jsx)(I.zxk, {
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