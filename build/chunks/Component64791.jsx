/** Chunk was on web.js **/
/** chunk id: 64791, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
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

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = {
  title: "Tooltips",
  stories: [{
    name: "Tooltip",
    id: "tooltip",
    component: function(e) {
      return (0, r.jsx)(i.ua7, l(a({}, e), {
        children: e => (0, r.jsx)(i.zxk, a({
          variant: "primary",
          text: "Tooltip Trigger"
        }, e))
      }))
    },
    controls: {
      text: {
        label: "Tooltip Text",
        type: "text",
        defaultValue: "Here's some helpful tooltip text!"
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
      allowOverflow: {
        label: "Allow Overflow",
        type: "boolean",
        defaultValue: false
      },
      spacing: {
        label: "Spacing",
        type: "number",
        defaultValue: 8
      },
      color: {
        label: "Color",
        type: "select",
        defaultValue: Chunk481060.FGA.PRIMARY,
        options: Object.keys(Chunk481060.FGA).map(e => ({
          label: e,
          value: i.FGA[e]
        }))
      }
    }
  }]
}