/** Chunk was on web.js **/
/** chunk id: 11645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => g
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk444550 = require("./444550.jsx"),
  Chunk843282 = require("./843282.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = p(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let _ = [{
    value: "red",
    label: "Red"
  }, {
    value: "green",
    label: "Green"
  }, {
    value: "blue",
    label: "Blue"
  }, {
    value: "yellow",
    label: "Yellow"
  }, {
    value: "purple",
    label: "Purple"
  }, {
    value: "orange",
    label: "Orange"
  }, {
    value: "pink",
    label: "Pink"
  }, {
    value: "brown",
    label: "Brown"
  }],
  h = {
    id: "select",
    name: "Select",
    component: function(e) {
      let {
        label: t,
        description: n,
        isDisabled: a,
        isProcessing: s,
        placeholder: l,
        maxVisibleItems: c,
        clearable: u,
        closeOnSelect: d,
        popoutPosition: f,
        variant: p
      } = e, [h, m] = i.useState("blue");
      return (0, r.jsx)(o.Te, {
        variant: p,
        label: t,
        description: n,
        value: h,
        onChange: m,
        options: _,
        placeholder: l,
        isDisabled: a,
        isProcessing: s,
        maxVisibleItems: c,
        clearable: u,
        closeOnSelect: d,
        popoutPosition: f
      })
    },
    controls: {
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Color"
      },
      description: {
        type: "text",
        label: "Description",
        defaultValue: "Choose a color"
      },
      placeholder: {
        type: "text",
        label: "Placeholder",
        defaultValue: "Choose a color"
      },
      variant: {
        type: "select",
        label: "Variant",
        defaultValue: "filled",
        options: [{
          label: "Filled",
          value: "filled"
        }, {
          label: "Text Only",
          value: "text-only"
        }]
      },
      isDisabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      isProcessing: {
        type: "boolean",
        label: "Processing",
        defaultValue: false
      },
      clearable: {
        type: "boolean",
        label: "Clearable",
        defaultValue: true
      },
      closeOnSelect: {
        type: "boolean",
        label: "Close On Select",
        defaultValue: true
      },
      maxVisibleItems: {
        type: "number",
        label: "Max Visible Items",
        defaultValue: 5
      },
      popoutPosition: {
        type: "select",
        label: "Popout Position",
        defaultValue: "bottom",
        options: [{
          label: "Bottom",
          value: "bottom"
        }, {
          label: "Top",
          value: "top"
        }, {
          label: "Center",
          value: "center"
        }, {
          label: "Left",
          value: "left"
        }, {
          label: "Right",
          value: "right"
        }, {
          label: "Window Center",
          value: "window_center"
        }]
      }
    }
  },
  m = {
    id: "searchable-select",
    name: "Searchable Select",
    component: function(e) {
      let {
        placeholder: t,
        isDisabled: n,
        isProcessing: o,
        clearable: l,
        closeOnSelect: u,
        clearQueryOnSelect: p,
        filter: h
      } = e, m = f(e, ["placeholder", "isDisabled", "isProcessing", "clearable", "closeOnSelect", "clearQueryOnSelect", "filter"]), [g, E] = i.useState("blue"), [y, b] = i.useState(["blue"]);
      return (0, r.jsxs)(a.BJc, {
        gap: 24,
        children: [(0, r.jsx)(s.p, d(c({}, m), {
          value: g,
          onChange: E,
          options: _,
          placeholder: t,
          isDisabled: n,
          isProcessing: o,
          clearable: l,
          clearQueryOnSelect: p,
          filter: h
        })), (0, r.jsx)(s.p, d(c({}, m), {
          multi: true,
          value: y,
          onChange: b,
          options: _,
          placeholder: t,
          isDisabled: n,
          isProcessing: o,
          clearable: l,
          closeOnSelect: u,
          clearQueryOnSelect: p,
          filter: h
        }))]
      })
    },
    controls: d(c({}, h.controls), {
      placeholder: {
        type: "text",
        label: "Placeholder",
        defaultValue: "Search for a color"
      },
      isDisabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      isProcessing: {
        type: "boolean",
        label: "Processing",
        defaultValue: false
      },
      clearable: {
        type: "boolean",
        label: "Clearable",
        defaultValue: true
      },
      closeOnSelect: {
        type: "boolean",
        label: "Close On Select",
        defaultValue: true
      },
      clearQueryOnSelect: {
        type: "boolean",
        label: "Clear Query On Select",
        defaultValue: false
      },
      filter: {
        type: "boolean",
        label: "Filter",
        defaultValue: true
      }
    })
  },
  g = {
    title: "Select",
    stories: [h, m]
  }