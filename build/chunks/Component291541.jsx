/** Chunk was on web.js **/
/** chunk id: 291541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk907862 = require("./907862.js"),
  Chunk453707 = require("./453707.js"),
  Chunk315416 = require("./315416.js"),
  Chunk715720 = require("./715720.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = {
  title: "Popover",
  stories: [{
    name: "Popover",
    id: "popover",
    docs: "https://design.discord.tools/components/web/popover",
    component: function(e) {
      var {
        showAsset: t,
        showActions: n,
        showTextLink: c,
        caretAlign: u,
        alignmentStrategy: f,
        align: m,
        size: h,
        position: g
      } = e, E = _(e, ["showAsset", "showActions", "showTextLink", "caretAlign", "alignmentStrategy", "align", "size", "position"]);
      let [b, y] = i.useState(false), O = i.useRef(null);
      return (0, r.jsxs)("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px"
        },
        children: [(0, r.jsx)(a.J2, p(d({}, E), {
          position: g,
          size: h,
          align: m,
          alignmentStrategy: f,
          targetElementRef: O,
          shouldShow: b,
          onRequestClose: () => y(false),
          graphic: t ? {
            type: "image",
            src: "sm" === h ? l.Z : s.Z
          } : true,
          caretConfig: {
            align: u
          },
          actions: n ? [{
            text: "Close",
            onClick: () => y(false)
          }] : true,
          textLink: c ? {
            text: "Learn More",
            link: "https://discord.com",
            external: true
          } : true
        }), g), (0, r.jsx)(o.Button, {
          variant: "primary",
          text: "Toggle Popover",
          buttonRef: O,
          onClick: () => y(!b)
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
      position: {
        label: "Position",
        type: "select",
        defaultValue: "top",
        options: [{
          label: "Top",
          value: "top"
        }, {
          label: "Bottom",
          value: "bottom"
        }, {
          label: "Left",
          value: "left"
        }, {
          label: "Right",
          value: "right"
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
      alignmentStrategy: {
        label: "Alignment Strategy",
        type: "select",
        defaultValue: "trigger-center",
        options: [{
          label: "Trigger Center (caret points at trigger)",
          value: "trigger-center"
        }, {
          label: "Edge (popover edge aligns with trigger)",
          value: "edge"
        }]
      },
      align: {
        label: 'Align (only applies with "edge" strategy)',
        type: "select",
        defaultValue: true,
        options: [{
          label: "None",
          value: true
        }, {
          label: "Top",
          value: "top"
        }, {
          label: "Center",
          value: "center"
        }, {
          label: "Bottom",
          value: "bottom"
        }, {
          label: "Left",
          value: "left"
        }, {
          label: "Right",
          value: "right"
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
        showActions: t
      } = e, n = _(e, ["showActions"]);
      let [s, l] = i.useState(false), c = i.useRef(null);
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Mb, p(d({}, n), {
          targetElementRef: c,
          shouldShow: s,
          onRequestClose: () => l(false),
          title: "Video Popover Demo",
          body: "Click the video to view it in the media viewer!",
          assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
          badge: "new",
          action: t ? {
            text: "Learn More",
            onClick: () => l(false)
          } : true
        }), n.position), (0, r.jsx)(o.Button, {
          variant: "primary",
          text: "Show Video Popover",
          buttonRef: c,
          onClick: () => l(!s)
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
      var {
        showExpressive: t
      } = e, n = _(e, ["showExpressive"]);
      let [l, u] = i.useState(false), f = i.useRef(null), m = [{
        title: "Welcome to the Feature!",
        body: "This is the first step of our multi-step introduction.",
        asset: (0, r.jsx)("img", {
          src: s.Z,
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
        asset: (0, r.jsx)("img", {
          src: c.Z,
          alt: "Step 2"
        }),
        action: {
          text: "Continue"
        },
        gradientColor: "purple"
      }, {
        title: "Get Started!",
        body: "You're all set to begin using this awesome feature.",
        asset: (0, r.jsx)("img", {
          src: s.Z,
          alt: "Step 3"
        }),
        action: {
          text: "Get Started",
          variant: t ? "expressive" : true
        },
        gradientColor: "nitro-pink",
        textLink: {
          text: "Learn More",
          link: "https://discord.com",
          external: true
        }
      }];
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.e4, p(d({}, n), {
          targetElementRef: f,
          shouldShow: l,
          onRequestClose: () => u(false),
          steps: m,
          caretConfig: {
            align: "center"
          },
          onStepChange: () => {}
        }), n.position), (0, r.jsx)(o.Button, {
          variant: "primary",
          text: "Show Multi-Step",
          buttonRef: f,
          onClick: () => u(!l)
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