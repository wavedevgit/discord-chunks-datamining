/** Chunk was on web.js **/
/** chunk id: 886031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = {
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
  d = {
    title: "Buttons",
    stories: [u, {
      name: "IconButton",
      id: "icon-button",
      docs: "https://design.discord.tools/components/web/buttons/icon-button",
      component: function(e) {
        return (0, r.jsx)(i.hU, c(s({}, e), {
          icon: a.gw7,
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
        return (0, r.jsxs)(i.hE2, c(s({}, e), {
          children: [(0, r.jsx)(i.zxk, {
            variant: "secondary",
            text: "Cancel"
          }), (0, r.jsx)(i.zxk, {
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