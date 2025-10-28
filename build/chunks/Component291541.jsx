/** Chunk was on 66548 **/
/** chunk id: 291541, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  y: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk907862 = require("./907862.js"),
  Chunk453707 = require("./453707.js"),
  Chunk241539 = require("./241539.js"),
  Chunk715720 = require("./715720.js");

function d(e) {
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

function c(e, l) {
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

function b(e, l) {
  if (null == e) return {};
  var t, a, n = function(e, l) {
    if (null == e) return {};
    var t, a, n = {},
      o = Object.keys(e);
    for (a = 0; a < o.length; a++) t = o[a], l.indexOf(t) >= 0 || (n[t] = e[t]);
    return n
  }(e, l);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++) t = o[a], !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
  }
  return n
}
let p = {
  title: "Popover",
  stories: [{
    name: "Popover",
    id: "popover",
    docs: "https://design.discord.tools/components/web/popover",
    component: function(e) {
      var {
        showAsset: l,
        showActions: t,
        showTextLink: u,
        caretAlign: p,
        size: y
      } = e, m = b(e, ["showAsset", "showActions", "showTextLink", "caretAlign", "size"]);
      let [f, v] = n.useState(false), h = n.useRef(null);
      return (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.J2, c(d({}, m), {
          size: y,
          targetElementRef: h,
          shouldShow: f,
          onRequestClose: () => v(false),
          graphic: l ? {
            type: "image",
            src: "sm" === y ? s.Z : r.Z
          } : true,
          caretConfig: {
            align: p
          },
          actions: t ? [{
            text: "Close",
            onClick: () => v(false)
          }] : true,
          textLink: u ? {
            text: "Learn More",
            link: "https://discord.com",
            external: true
          } : true
        })), (0, a.jsx)(o.Button, {
          variant: "primary",
          text: "Toggle Popover",
          buttonRef: h,
          onClick: () => v(!f)
        })]
      })
    },
    controls: {
      title: {
        label: "Title",
        type: "text",
        defaultValue: "Sample Popover"
      },
      body: {
        label: "Body Text",
        type: "text",
        defaultValue: "This is a sample popover with customizable properties."
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
      badge: {
        label: "Badge",
        type: "select",
        defaultValue: "new",
        options: [{
          label: "None",
          value: true
        }, {
          label: "New",
          value: "new"
        }, {
          label: "Beta",
          value: "beta"
        }, {
          label: "Early Access",
          value: "early_access"
        }]
      },
      gradientColor: {
        label: "Gradient Color",
        type: "select",
        defaultValue: true,
        options: [{
          label: "None",
          value: true
        }, {
          label: "Purple",
          value: "purple"
        }, {
          label: "Blue",
          value: "blue"
        }, {
          label: "Nitro Pink",
          value: "nitro-pink"
        }]
      },
      caretAlign: {
        label: "Caret Align",
        type: "select",
        defaultValue: "center",
        options: [{
          label: "Center",
          value: "center"
        }, {
          label: "Start",
          value: "start"
        }, {
          label: "End",
          value: "end"
        }]
      },
      showAsset: {
        label: "Show Asset",
        type: "boolean",
        defaultValue: true
      },
      showActions: {
        label: "Show Actions",
        type: "boolean",
        defaultValue: true
      },
      showTextLink: {
        label: "Show Text Link",
        type: "boolean",
        defaultValue: false
      }
    }
  }, {
    name: "VideoPopover",
    id: "video-popover",
    docs: "https://design.discord.tools/components/web/popover",
    component: function(e) {
      var {
        showActions: l
      } = e, t = b(e, ["showActions"]);
      let [r, s] = n.useState(false), u = n.useRef(null);
      return (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Mb, c(d({}, t), {
          targetElementRef: u,
          shouldShow: r,
          onRequestClose: () => s(false),
          title: "Video Popover Demo",
          body: "Click the video to view it in the media viewer!",
          assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
          badge: "new",
          action: l ? {
            text: "Learn More",
            onClick: () => s(false)
          } : true
        })), (0, a.jsx)(o.Button, {
          variant: "primary",
          text: "Show Video Popover",
          buttonRef: u,
          onClick: () => s(!r)
        })]
      })
    },
    controls: {
      showActions: {
        label: "Show Actions",
        type: "boolean",
        defaultValue: true
      }
    }
  }, {
    name: "MultiStepPopover",
    id: "multi-step-popover",
    docs: "https://design.discord.tools/components/web/popover",
    component: function(e) {
      let {
        showExpressive: l
      } = e, [t, s] = n.useState(false), d = n.useRef(null), c = [{
        title: "Welcome to the Feature!",
        body: "This is the first step of our multi-step introduction.",
        asset: (0, a.jsx)("img", {
          src: r.Z,
          alt: "Step 1"
        }),
        badge: "new",
        action: {
          text: "Next"
        },
        gradientColor: "blue"
      }, {
        title: "Learn the Benefits",
        body: "Here are the amazing benefits you can enjoy with this feature.",
        asset: (0, a.jsx)("img", {
          src: u.Z,
          alt: "Step 2"
        }),
        action: {
          text: "Continue"
        },
        gradientColor: "purple"
      }, {
        title: "Get Started!",
        body: "You're all set to begin using this awesome feature.",
        asset: (0, a.jsx)("img", {
          src: r.Z,
          alt: "Step 3"
        }),
        action: {
          text: "Get Started",
          variant: l ? "expressive" : true
        },
        gradientColor: "nitro-pink",
        textLink: {
          text: "Learn More",
          link: "https://discord.com",
          external: true
        }
      }];
      return (0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.e4, {
          targetElementRef: d,
          shouldShow: t,
          onRequestClose: () => s(false),
          steps: c,
          caretConfig: {
            position: "top",
            align: "center"
          },
          onStepChange: () => {}
        }), (0, a.jsx)(o.Button, {
          variant: "primary",
          text: "Show Multi-Step",
          buttonRef: d,
          onClick: () => s(!t)
        })]
      })
    },
    controls: {
      showExpressive: {
        label: "Show Expressive Button",
        type: "boolean",
        defaultValue: false
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
      }
    }
  }]
}