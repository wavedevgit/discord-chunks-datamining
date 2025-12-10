/** Chunk was on web.js **/
/** chunk id: 423668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => l
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
        showIcons: p,
        showHints: _,
        showSubtext: m,
        showDisabledItems: h,
        showColoredItems: g,
        dangerItemColor: E
      } = e, [b, y] = i.useState(true), [O, v] = i.useState(false), [S, I] = i.useState("text"), [T, C] = i.useState("cozy"), [A, N] = i.useState(true), P = e => (0, r.jsxs)(o.v2r, {
        navId: "menu-story",
        "aria-label": "Story Menu",
        variant: t,
        hideScroller: n,
        onClose: e,
        onSelect: () => {},
        children: [(0, r.jsx)(o.sNh, {
          id: "edit",
          label: "Edit Message",
          icon: p ? o.vdY : true,
          hint: _ ? "⌘E" : true,
          action: () => {}
        }), (0, r.jsx)(o.sNh, {
          id: "pin",
          label: "Pin Message",
          icon: p ? o.qQX : true,
          subtext: m ? "Pin this message to the channel" : true,
          hint: (0, r.jsx)(o.$jN, {
            type: o.$jN.Type.PULSING_ELLIPSIS
          }),
          action: () => {}
        }), (0, r.jsx)(o.sNh, {
          id: "copy",
          label: "Copy Message Link",
          icon: p ? o.TIy : true,
          action: () => {}
        }), h && (0, r.jsx)(o.sNh, {
          id: "disabled",
          label: "Disabled Item",
          icon: p ? o.ewm : true,
          disabled: true,
          action: () => {}
        }), g && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Clw, {}), (0, r.jsx)(o.sNh, {
            id: "brand-item",
            label: "Brand Item",
            color: "brand",
            icon: p ? o.ewm : true,
            action: () => {}
          }), (0, r.jsx)(o.sNh, {
            id: "premium-item",
            label: "Premium Item",
            color: "premium",
            icon: p ? o.ewm : true,
            action: () => {}
          }), (0, r.jsx)(o.sNh, {
            id: "success-item",
            label: "Success Item",
            color: "success",
            icon: p ? o.ewm : true,
            action: () => {}
          })]
        }), f && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(o.Clw, {}), (0, r.jsxs)(o.sNh, {
            id: "submenu",
            label: "More Options",
            icon: p ? o.ewm : true,
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
              checked: "text" === S,
              action: () => I("text")
            }), (0, r.jsx)(o.k5B, {
              id: "radio-voice",
              group: "channel-type",
              label: "Voice Channel",
              checked: "voice" === S,
              action: () => I("voice")
            })]
          }), (0, r.jsx)(o.Clw, {}), (0, r.jsxs)(o.kSQ, {
            label: "View Mode",
            children: [(0, r.jsx)(o.k5B, {
              id: "radio-cozy",
              group: "view-mode",
              label: "Cozy",
              checked: "cozy" === T,
              action: () => C("cozy")
            }), (0, r.jsx)(o.k5B, {
              id: "radio-compact",
              group: "view-mode",
              label: "Compact",
              checked: "compact" === T,
              action: () => C("compact")
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
          icon: p ? o.XHJ : true,
          action: () => {}
        })]
      }), R = i.useRef(null);
      return (0, r.jsxs)("div", {
        className: s.container,
        children: [!A && (0, r.jsx)(a.zxk, {
          text: "Open Menu",
          onClick: () => N(true)
        }), (0, r.jsx)(o.yRy, {
          renderPopout: e => {
            let {
              closePopout: t
            } = e;
            return P(t)
          },
          position: "bottom",
          align: "center",
          shouldShow: true,
          targetElementRef: R,
          onRequestClose: () => N(false),
          children: () => (0, r.jsx)("div", {
            ref: R,
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