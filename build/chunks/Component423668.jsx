/** Chunk was on web.js **/
/** chunk id: 423668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk200097 = require("./200097.js");
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
        showIcons: _,
        showHints: p,
        showSubtext: h,
        showDisabledItems: m,
        showColoredItems: g,
        dangerItemColor: E
      } = e, [b, y] = i.useState(true), [O, v] = i.useState(false), [I, T] = i.useState("text"), [S, A] = i.useState("cozy"), [C, N] = i.useState(true), R = e => (0, r.jsxs)(o.v2r, {
        navId: "menu-story",
        "aria-label": "Story Menu",
        variant: t,
        hideScroller: n,
        onClose: e,
        onSelect: () => {},
        children: [(0, r.jsx)(o.sNh, {
          id: "edit",
          label: "Edit Message",
          icon: _ ? o.vdY : true,
          hint: p ? "⌘E" : true,
          action: () => {}
        }), (0, r.jsx)(o.sNh, {
          id: "pin",
          label: "Pin Message",
          icon: _ ? o.qQX : true,
          subtext: h ? "Pin this message to the channel" : true,
          hint: (0, r.jsx)(o.$jN, {
            type: o.$jN.Type.PULSING_ELLIPSIS
          }),
          action: () => {}
        }), (0, r.jsx)(o.sNh, {
          id: "copy",
          label: "Copy Message Link",
          icon: _ ? o.TIy : true,
          action: () => {}
        }), m && (0, r.jsx)(o.sNh, {
          id: "disabled",
          label: "Disabled Item",
          icon: _ ? o.ewm : true,
          disabled: true,
          action: () => {}
        }), g && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Clw, {}), (0, r.jsx)(o.sNh, {
            id: "brand-item",
            label: "Brand Item",
            color: "brand",
            icon: _ ? o.ewm : true,
            action: () => {}
          }), (0, r.jsx)(o.sNh, {
            id: "premium-item",
            label: "Premium Item",
            color: "premium",
            icon: _ ? o.ewm : true,
            action: () => {}
          }), (0, r.jsx)(o.sNh, {
            id: "success-item",
            label: "Success Item",
            color: "success",
            icon: _ ? o.ewm : true,
            action: () => {}
          })]
        }), f && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Clw, {}), (0, r.jsxs)(o.sNh, {
            id: "submenu",
            label: "More Options",
            icon: _ ? o.ewm : true,
            children: [(0, r.jsx)(o.sNh, {
              id: "submenu-1",
              label: "Submenu Item 1",
              action: () => {}
            }), (0, r.jsx)(o.sNh, {
              id: "submenu-2",
              label: "Submenu Item 2",
              action: () => {}
            }), (0, r.jsx)(o.sNh, {
              id: "submenu-3",
              label: "Submenu Item 3",
              action: () => {}
            })]
          })]
        }), c && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Clw, {}), (0, r.jsx)(o.S89, {
            id: "notifications",
            label: "Enable Notifications",
            checked: b,
            action: () => y(!b)
          }), (0, r.jsx)(o.S89, {
            id: "mute",
            label: "Mute Channel",
            checked: O,
            action: () => v(!O)
          })]
        }), d && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Clw, {}), (0, r.jsx)(o.m76, {
            id: "switch-notifications",
            label: "Push Notifications",
            checked: b,
            action: () => y(!b)
          })]
        }), u && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Clw, {}), (0, r.jsxs)(o.kSQ, {
            label: "Channel Type",
            children: [(0, r.jsx)(o.k5B, {
              id: "radio-text",
              group: "channel-type",
              label: "Text Channel",
              checked: "text" === I,
              action: () => T("text")
            }), (0, r.jsx)(o.k5B, {
              id: "radio-voice",
              group: "channel-type",
              label: "Voice Channel",
              checked: "voice" === I,
              action: () => T("voice")
            })]
          }), (0, r.jsx)(o.Clw, {}), (0, r.jsxs)(o.kSQ, {
            label: "View Mode",
            children: [(0, r.jsx)(o.k5B, {
              id: "radio-cozy",
              group: "view-mode",
              label: "Cozy",
              checked: "cozy" === S,
              action: () => A("cozy")
            }), (0, r.jsx)(o.k5B, {
              id: "radio-compact",
              group: "view-mode",
              label: "Compact",
              checked: "compact" === S,
              action: () => A("compact")
            })]
          })]
        }), l && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Clw, {}), (0, r.jsxs)(o.kSQ, {
            label: "Grouped Items",
            children: [(0, r.jsx)(o.sNh, {
              id: "group-1",
              label: "Group Item 1",
              action: () => {}
            }), (0, r.jsx)(o.sNh, {
              id: "group-2",
              label: "Group Item 2",
              action: () => {}
            }), (0, r.jsx)(o.sNh, {
              id: "group-3",
              label: "Group Item 3",
              action: () => {}
            })]
          })]
        }), (0, r.jsx)(o.Clw, {}), (0, r.jsx)(o.sNh, {
          id: "delete",
          label: "Delete Message",
          color: E,
          icon: _ ? o.XHJ : true,
          action: () => {}
        })]
      }), P = i.useRef(null);
      return (0, r.jsxs)("div", {
        className: s.container,
        children: [!C && (0, r.jsx)(a.zxk, {
          text: "Open Menu",
          onClick: () => N(true)
        }), (0, r.jsx)(o.yRy, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return R(t)
          },
          position: "bottom",
          align: "center",
          shouldShow: true,
          targetElementRef: P,
          onRequestClose: () => N(false),
          children: () => (0, r.jsx)("div", {
            ref: P,
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