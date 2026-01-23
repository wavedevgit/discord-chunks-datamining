/** Chunk was on web.js **/
/** chunk id: 286121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => l
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk728690 = require("./728690.js");
let l = {
  title: "Menu",
  stories: [{
    name: "Menu",
    id: "menu",
    component: function(e) {
      let {
        variant: t,
        hideScroller: n,
        showGroups: l,
        showCheckboxItems: c,
        showRadioItems: u,
        showSwitchItems: d,
        showSubmenus: f,
        showIcons: p,
        showHints: _,
        showSubtext: h,
        showDisabledItems: m,
        showColoredItems: g,
        dangerItemColor: E
      } = e, [y, b] = i.useState(true), [O, v] = i.useState(false), [A, I] = i.useState("text"), [S, T] = i.useState("cozy"), [C, N] = i.useState(true), R = e => (0, r.jsxs)(s.W1t, {
        navId: "menu-story",
        "aria-label": "Story Menu",
        variant: t,
        hideScroller: n,
        onClose: e,
        onSelect: () => {},
        children: [(0, r.jsx)(s.Drp, {
          id: "edit",
          label: "Edit Message",
          icon: p ? s.R2l : true,
          hint: _ ? "⌘E" : true,
          action: () => {}
        }), (0, r.jsx)(s.Drp, {
          id: "pin",
          label: "Pin Message",
          icon: p ? s.tsw : true,
          subtext: h ? "Pin this message to the channel" : true,
          hint: (0, r.jsx)(s.y$y, {
            type: s.y$y.Type.PULSING_ELLIPSIS
          }),
          action: () => {}
        }), (0, r.jsx)(s.Drp, {
          id: "copy",
          label: "Copy Message Link",
          icon: p ? s.TdU : true,
          action: () => {}
        }), m && (0, r.jsx)(s.Drp, {
          id: "disabled",
          label: "Disabled Item",
          icon: p ? s.Zes : true,
          disabled: true,
          action: () => {}
        }), g && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.bXX, {}), (0, r.jsx)(s.Drp, {
            id: "brand-item",
            label: "Brand Item",
            color: "brand",
            icon: p ? s.Zes : true,
            action: () => {}
          }), (0, r.jsx)(s.Drp, {
            id: "premium-item",
            label: "Premium Item",
            color: "premium",
            icon: p ? s.Zes : true,
            action: () => {}
          }), (0, r.jsx)(s.Drp, {
            id: "success-item",
            label: "Success Item",
            color: "success",
            icon: p ? s.Zes : true,
            action: () => {}
          })]
        }), f && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.bXX, {}), (0, r.jsxs)(s.Drp, {
            id: "submenu",
            label: "More Options",
            icon: p ? s.Zes : true,
            children: [(0, r.jsx)(s.Drp, {
              id: "submenu-1",
              label: "Submenu Item 1",
              action: () => {}
            }), (0, r.jsx)(s.Drp, {
              id: "submenu-2",
              label: "Submenu Item 2",
              action: () => {}
            }), (0, r.jsx)(s.Drp, {
              id: "submenu-3",
              label: "Submenu Item 3",
              action: () => {}
            })]
          })]
        }), c && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.bXX, {}), (0, r.jsx)(s.sLh, {
            id: "notifications",
            label: "Enable Notifications Enable Notifications Enable Notifications",
            checked: y,
            action: () => b(!y)
          }), (0, r.jsx)(s.sLh, {
            id: "mute",
            label: "Mute Channel",
            checked: O,
            action: () => v(!O)
          })]
        }), d && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.bXX, {}), (0, r.jsx)(s.fPC, {
            id: "switch-notifications",
            label: "Push Notifications",
            checked: y,
            action: () => b(!y)
          })]
        }), u && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.bXX, {}), (0, r.jsxs)(s.rXV, {
            label: "Channel Type",
            children: [(0, r.jsx)(s.iDA, {
              id: "radio-text",
              group: "channel-type",
              label: "Text Channel Text Channel Text Channel Text Channel Text Channel Text Channel ",
              checked: "text" === A,
              action: () => I("text")
            }), (0, r.jsx)(s.iDA, {
              id: "radio-voice",
              group: "channel-type",
              label: "Voice Channel",
              checked: "voice" === A,
              action: () => I("voice")
            })]
          }), (0, r.jsx)(s.bXX, {}), (0, r.jsxs)(s.rXV, {
            label: "View Mode",
            children: [(0, r.jsx)(s.iDA, {
              id: "radio-cozy",
              group: "view-mode",
              label: "Cozy",
              checked: "cozy" === S,
              action: () => T("cozy")
            }), (0, r.jsx)(s.iDA, {
              id: "radio-compact",
              group: "view-mode",
              label: "Compact",
              checked: "compact" === S,
              action: () => T("compact")
            })]
          })]
        }), l && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.bXX, {}), (0, r.jsxs)(s.rXV, {
            label: "Grouped Items",
            children: [(0, r.jsx)(s.Drp, {
              id: "group-1",
              label: "Group Item 1",
              action: () => {}
            }), (0, r.jsx)(s.Drp, {
              id: "group-2",
              label: "Group Item 2",
              action: () => {}
            }), (0, r.jsx)(s.Drp, {
              id: "group-3",
              label: "Group Item 3",
              action: () => {}
            })]
          })]
        }), (0, r.jsx)(s.bXX, {}), (0, r.jsx)(s.Drp, {
          id: "delete",
          label: "Delete Message",
          color: E,
          icon: p ? s.ucK : true,
          action: () => {}
        })]
      }), w = i.useRef(null);
      return (0, r.jsxs)("div", {
        className: o.k,
        children: [!C && (0, r.jsx)(a.$nd, {
          text: "Open Menu",
          onClick: () => N(true)
        }), (0, r.jsx)(s.YNO, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return R(t)
          },
          position: "bottom",
          align: "center",
          shouldShow: true,
          targetElementRef: w,
          onRequestClose: () => N(false),
          children: () => (0, r.jsx)("div", {
            ref: w,
            style: {
              width: 1,
              height: 1,
              opacity: 0,
              pointerEvents: "none"
            }
          })
        })]
      })
    },
    controls: {
      variant: {
        type: "select",
        label: "Variant",
        defaultValue: "flexible",
        options: [{
          label: "Fixed",
          value: "fixed"
        }, {
          label: "Flexible",
          value: "flexible"
        }]
      },
      hideScroller: {
        type: "boolean",
        label: "Hide Scroller",
        defaultValue: false
      },
      showGroups: {
        type: "boolean",
        label: "Show Groups",
        defaultValue: true
      },
      showCheckboxItems: {
        type: "boolean",
        label: "Show Checkbox Items",
        defaultValue: true
      },
      showRadioItems: {
        type: "boolean",
        label: "Show Radio Items",
        defaultValue: true
      },
      showSwitchItems: {
        type: "boolean",
        label: "Show Switch Items",
        defaultValue: true
      },
      showSubmenus: {
        type: "boolean",
        label: "Show Submenus",
        defaultValue: true
      },
      showIcons: {
        type: "boolean",
        label: "Show Icons",
        defaultValue: true
      },
      showHints: {
        type: "boolean",
        label: "Show Hints",
        defaultValue: true
      },
      showSubtext: {
        type: "boolean",
        label: "Show Subtext",
        defaultValue: false
      },
      showDisabledItems: {
        type: "boolean",
        label: "Show Disabled Items",
        defaultValue: true
      },
      showColoredItems: {
        type: "boolean",
        label: "Show Colored Items",
        defaultValue: true
      },
      dangerItemColor: {
        type: "select",
        label: "Danger Item Color",
        defaultValue: "danger",
        options: [{
          label: "Default",
          value: "default"
        }, {
          label: "Brand",
          value: "brand"
        }, {
          label: "Danger",
          value: "danger"
        }, {
          label: "Premium",
          value: "premium"
        }, {
          label: "Premium Gradient",
          value: "premium-gradient"
        }, {
          label: "Success",
          value: "success"
        }]
      }
    }
  }]
}