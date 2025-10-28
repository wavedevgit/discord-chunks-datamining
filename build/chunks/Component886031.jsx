/** Chunk was on 66548 **/
/** chunk id: 886031, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  B: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js");

function i(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(l) {
      var a;
      a = t[l], l in e ? Object.defineProperty(e, l, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[l] = a
    })
  }
  return e
}

function r(e, l) {
  return l = null != l ? l : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : (function(e, l) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      t.push.apply(t, a)
    }
    return t
  })(Object(l)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
  }), e
}
let s = {
    name: "Button",
    id: "button",
    component: Chunk793030.zxk,
    docs: "https://design.discord.tools/components/web/buttons/button",
    controls: {
      text: {
        label: "Text",
        type: "text",
        defaultValue: "Click me"
      },
      variant: {
        label: "Variant",
        type: "select",
        defaultValue: "primary",
        options: [{
          label: "Primary",
          value: "primary"
        }, {
          label: "Secondary",
          value: "secondary"
        }, {
          label: "Critical Primary",
          value: "critical-primary"
        }, {
          label: "Critical Secondary",
          value: "critical-secondary"
        }, {
          label: "Active",
          value: "active"
        }, {
          label: "Overlay Primary",
          value: "overlay-primary"
        }, {
          label: "Overlay Secondary",
          value: "overlay-secondary"
        }, {
          label: "Expressive",
          value: "expressive"
        }]
      },
      size: {
        label: "Size",
        type: "select",
        defaultValue: "md",
        options: [{
          label: "Small",
          value: "sm"
        }, {
          label: "Medium",
          value: "md"
        }]
      },
      disabled: {
        label: "Disabled",
        type: "boolean",
        defaultValue: false
      },
      loading: {
        label: "Loading",
        type: "boolean",
        defaultValue: false
      },
      fullWidth: {
        label: "Full Width",
        type: "boolean",
        defaultValue: false
      },
      minWidth: {
        label: "Min width",
        type: "text",
        defaultValue: ""
      }
    }
  },
  u = {
    title: "Buttons",
    stories: [s, {
      name: "IconButton",
      id: "icon-button",
      docs: "https://design.discord.tools/components/web/buttons/icon-button",
      component: function(e) {
        return (0, a.jsx)(n.hU, r(i({}, e), {
          icon: o.gw7,
          "aria-label": "Clyde"
        }))
      },
      controls: {
        variant: {
          label: "Variant",
          type: "select",
          defaultValue: "primary",
          options: [{
            label: "Primary",
            value: "primary"
          }, {
            label: "Secondary",
            value: "secondary"
          }, {
            label: "Critical Primary",
            value: "critical-primary"
          }, {
            label: "Critical Secondary",
            value: "critical-secondary"
          }, {
            label: "Active",
            value: "active"
          }, {
            label: "Overlay Primary",
            value: "overlay-primary"
          }, {
            label: "Overlay Secondary",
            value: "overlay-secondary"
          }, {
            label: "Icon Only",
            value: "icon-only"
          }]
        },
        size: {
          label: "Size",
          type: "select",
          defaultValue: "md",
          options: [{
            label: "Small",
            value: "sm"
          }, {
            label: "Medium",
            value: "md"
          }]
        },
        disabled: {
          label: "Disabled",
          type: "boolean",
          defaultValue: false
        },
        loading: {
          label: "Loading",
          type: "boolean",
          defaultValue: false
        }
      }
    }, {
      name: "TextButton",
      id: "text-button",
      docs: "https://design.discord.tools/components/web/buttons/text-button",
      component: Chunk793030.Avr,
      controls: {
        text: {
          label: "Text",
          type: "text",
          defaultValue: "Link Button"
        },
        variant: {
          label: "Variant",
          type: "select",
          defaultValue: "primary",
          options: [{
            label: "Primary",
            value: "primary"
          }, {
            label: "Secondary",
            value: "secondary"
          }, {
            label: "Always White",
            value: "always-white"
          }, {
            label: "Critical",
            value: "critical"
          }]
        },
        disabled: {
          label: "Disabled",
          type: "boolean",
          defaultValue: false
        }
      }
    }, {
      name: "ButtonGroup",
      id: "button-group",
      docs: "https://design.discord.tools/components/web/buttons/button-group",
      component: function(e) {
        return (0, a.jsxs)(n.hE2, r(i({}, e), {
          children: [(0, a.jsx)(n.zxk, {
            variant: "secondary",
            text: "Cancel"
          }), (0, a.jsx)(n.zxk, {
            variant: "primary",
            text: "Submit"
          })]
        }))
      },
      controls: {
        size: {
          label: "Size",
          type: "select",
          defaultValue: "md",
          options: [{
            label: "Small",
            value: "sm"
          }, {
            label: "Medium",
            value: "md"
          }]
        },
        direction: {
          label: "Direction",
          type: "select",
          defaultValue: "horizontal",
          options: [{
            label: "Horizontal",
            value: "horizontal"
          }, {
            label: "Vertical",
            value: "vertical"
          }]
        },
        fullWidth: {
          label: "Full Width",
          type: "boolean",
          defaultValue: false
        }
      }
    }]
  }