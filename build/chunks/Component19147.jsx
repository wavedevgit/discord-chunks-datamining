/** Chunk was on web.js **/
/** chunk id: 19147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => y
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk540637 = require("./540637.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk389723 = require("./389723.jsx"),
  Chunk783878 = require("./783878.jsx"),
  Chunk74818 = require("./74818.jsx"),
  Chunk379649 = require("./379649.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let g = [{
    label: "Aardvark",
    value: "aardvark",
    id: "aardvark"
  }, {
    label: "Cat",
    value: "cat",
    id: "cat"
  }, {
    label: "Dog",
    value: "dog",
    id: "dog"
  }, {
    label: "Kangaroo",
    value: "kangaroo",
    id: "kangaroo"
  }, {
    label: "Panda",
    value: "panda",
    id: "panda"
  }, {
    label: "Snake",
    value: "snake",
    id: "snake",
    disabled: true
  }],
  E = [{
    label: "Aardvark",
    value: "aardvark",
    id: "aardvark",
    leading: Chunk158954.N$i,
    trailing: {
      type: "badge",
      badgeType: "new"
    }
  }, {
    label: "Cat",
    value: "cat",
    id: "cat",
    leading: Chunk158954.N$i,
    trailing: "20m"
  }, {
    label: "Dog",
    value: "dog",
    id: "dog",
    leading: Chunk158954.N$i
  }, {
    label: "Kangaroo",
    value: "kangaroo",
    id: "kangaroo",
    leading: {
      type: "image",
      src: Chunk379649
    }
  }, {
    label: "Panda",
    value: "panda",
    id: "panda",
    leading: {
      type: "avatar",
      src: Chunk379649
    }
  }, {
    label: "Snake",
    value: "snake",
    id: "snake",
    leading: Chunk158954.N$i,
    disabled: true
  }],
  y = {
    title: "Select",
    stories: [{
      id: "select",
      name: "Select",
      component: function(e) {
        let {
          selectionMode: t,
          withLeadingAndTrailing: n
        } = e, a = h(e, ["selectionMode", "withLeadingAndTrailing"]), [o, s] = i.useState(true), [l, u] = i.useState([]), d = b(n, a.asyncOptions);
        return "single" === t ? (0, r.jsx)(c.l, _(f({}, a), {
          selectionMode: t,
          options: d,
          onSelectionChange: s,
          value: o
        })) : (0, r.jsx)(c.l, _(f({}, a), {
          selectionMode: t,
          options: d,
          onSelectionChange: u,
          value: l
        }))
      },
      controls: {
        selectionMode: {
          label: "SelectionType",
          type: "select",
          options: [{
            label: "Single",
            value: "single"
          }, {
            label: "Multiple",
            value: "multiple"
          }],
          defaultValue: "single"
        },
        withLeadingAndTrailing: {
          label: "Show leading and trailing content",
          type: "boolean",
          defaultValue: false
        },
        asyncOptions: {
          label: "Async loaded options",
          type: "boolean",
          defaultValue: false
        },
        required: {
          label: "Required",
          type: "boolean",
          defaultValue: false
        },
        disabled: {
          type: "boolean",
          label: "Disabled",
          defaultValue: false
        },
        readOnly: {
          type: "boolean",
          label: "Read Only",
          defaultValue: false
        },
        clearable: {
          type: "boolean",
          label: "Clearable",
          defaultValue: false
        },
        fullWidth: {
          type: "boolean",
          label: "Full width",
          defaultValue: false
        },
        closeOnSelect: {
          type: "boolean",
          label: "Close on select",
          defaultValue: false
        },
        shouldFocusWrap: {
          type: "boolean",
          label: "Should listbox focus wrap",
          defaultValue: false
        },
        wrapTags: {
          type: "boolean",
          label: "Wrap tags",
          defaultValue: false
        },
        maxOptionsVisible: {
          type: "number",
          label: "Max options visible",
          defaultValue: 5
        },
        label: {
          type: "text",
          label: "Label",
          defaultValue: "Sort by"
        },
        hideLabel: {
          type: "boolean",
          label: "Hide Label",
          defaultValue: false
        },
        placeholder: {
          type: "text",
          label: "Placeholder",
          defaultValue: true
        },
        description: {
          type: "text",
          label: "Description",
          defaultValue: "This is an example description"
        },
        errorMessage: {
          type: "text",
          label: "Error Message",
          defaultValue: ""
        },
        successMessage: {
          type: "text",
          label: "Success Message",
          defaultValue: ""
        },
        layout: {
          type: "select",
          label: "Layout",
          defaultValue: "vertical",
          options: [{
            label: "Vertical",
            value: "vertical"
          }, {
            label: "Horizontal",
            value: "horizontal"
          }, {
            label: "Horizontal (Responsive)",
            value: "horizontal-responsive"
          }]
        }
      }
    }, {
      id: "searchable-select",
      name: "SearchableSelect",
      component: function(e) {
        let {
          selectionMode: t,
          withLeadingAndTrailing: n,
          asyncOptions: a
        } = e, o = h(e, ["selectionMode", "withLeadingAndTrailing", "asyncOptions"]), [s, c] = i.useState(true), [u, d] = i.useState([]), p = b(n, a);
        return "single" === t ? (0, r.jsx)(l.Z, _(f({}, o), {
          selectionMode: t,
          onSelectionChange: c,
          value: s,
          options: p
        })) : (0, r.jsx)(l.Z, _(f({}, o), {
          selectionMode: t,
          onSelectionChange: d,
          value: u,
          options: p
        }))
      },
      controls: {
        selectionMode: {
          label: "Selection Mode",
          type: "select",
          options: [{
            label: "Single",
            value: "single"
          }, {
            label: "Multiple",
            value: "multiple"
          }],
          defaultValue: "single"
        },
        withLeadingAndTrailing: {
          label: "Show leading and trailing content",
          type: "boolean",
          defaultValue: false
        },
        asyncOptions: {
          label: "Async loaded options",
          type: "boolean",
          defaultValue: false
        },
        required: {
          label: "Required",
          type: "boolean",
          defaultValue: false
        },
        disabled: {
          type: "boolean",
          label: "Disabled",
          defaultValue: false
        },
        clearable: {
          type: "boolean",
          label: "Clearable",
          defaultValue: false
        },
        closeOnSelect: {
          type: "boolean",
          label: "Close on select",
          defaultValue: false
        },
        shouldFocusWrap: {
          type: "boolean",
          label: "Should listbox focus wrap",
          defaultValue: false
        },
        wrapTags: {
          type: "boolean",
          label: "Wrap tags",
          defaultValue: false
        },
        maxOptionsVisible: {
          type: "number",
          label: "Max options visible",
          defaultValue: 5
        },
        label: {
          type: "text",
          label: "Label",
          defaultValue: "Sort by"
        },
        hideLabel: {
          type: "boolean",
          label: "Hide Label",
          defaultValue: false
        },
        placeholder: {
          type: "text",
          label: "Placeholder",
          defaultValue: true
        },
        description: {
          type: "text",
          label: "Description",
          defaultValue: "This is an example description"
        },
        helperText: {
          type: "text",
          label: "Helper Text",
          defaultValue: "This is an example of helper text, which can be used to provide additional information about the field."
        },
        errorMessage: {
          type: "text",
          label: "Error Message",
          defaultValue: ""
        },
        successMessage: {
          type: "text",
          label: "Success Message",
          defaultValue: ""
        }
      }
    }, {
      id: "combobox",
      name: "ComboBox",
      component: function(e) {
        let {
          selectionMode: t,
          label: n,
          hideLabel: a,
          description: o,
          helperText: l,
          errorMessage: c,
          successMessage: u,
          wrapTags: d,
          withLeadingAndTrailing: p,
          placeholder: m
        } = e, g = h(e, ["selectionMode", "label", "hideLabel", "description", "helperText", "errorMessage", "successMessage", "wrapTags", "withLeadingAndTrailing", "placeholder"]), {
          required: E,
          disabled: y
        } = g, O = b(p, g.asyncOptions), [v, A] = i.useState(null);
        return (0, r.jsxs)(s.iS, _(f({
          selectionMode: t,
          onSelectionChange: A,
          options: O,
          value: v
        }, g), {
          children: [(0, r.jsx)(s.a3, {
            label: n,
            hideLabel: a,
            placeholder: m,
            required: E,
            disabled: y,
            description: o,
            helperText: l,
            errorMessage: c,
            successMessage: u,
            wrapTags: d
          }), (0, r.jsx)(s.X2, {})]
        }))
      },
      controls: {
        selectionMode: {
          label: "Selection Mode",
          type: "select",
          options: [{
            label: "Single",
            value: "single"
          }, {
            label: "Multiple",
            value: "multiple"
          }],
          defaultValue: "single"
        },
        withLeadingAndTrailing: {
          label: "Show leading and trailing content",
          type: "boolean",
          defaultValue: false
        },
        asyncOptions: {
          label: "Async loaded options",
          type: "boolean",
          defaultValue: false
        },
        required: {
          label: "Required",
          type: "boolean",
          defaultValue: false
        },
        disabled: {
          type: "boolean",
          label: "Disabled",
          defaultValue: false
        },
        clearable: {
          type: "boolean",
          label: "Clearable",
          defaultValue: false
        },
        closeOnSelect: {
          type: "boolean",
          label: "Close on select",
          defaultValue: false
        },
        shouldFocusWrap: {
          type: "boolean",
          label: "Should listbox focus wrap",
          defaultValue: false
        },
        wrapTags: {
          type: "boolean",
          label: "Wrap tags",
          defaultValue: false
        },
        label: {
          type: "text",
          label: "Label",
          defaultValue: "Sort by"
        },
        hideLabel: {
          type: "boolean",
          label: "Hide Label",
          defaultValue: false
        },
        placeholder: {
          type: "text",
          label: "Placeholder",
          defaultValue: true
        },
        description: {
          type: "text",
          label: "Description",
          defaultValue: "This is an example description"
        },
        helperText: {
          type: "text",
          label: "Helper Text",
          defaultValue: "This is an example of helper text, which can be used to provide additional information about the field."
        },
        errorMessage: {
          type: "text",
          label: "Error Message",
          defaultValue: ""
        },
        successMessage: {
          type: "text",
          label: "Success Message",
          defaultValue: ""
        }
      }
    }, {
      id: "listbox",
      name: "ListBox",
      component: function(e) {
        let {
          selectionMode: t,
          required: n,
          shouldFocusWrap: o,
          withLeadingAndTrailing: s
        } = e, [l, c] = i.useState(null);
        return (0, r.jsx)(a.q, {
          selectionMode: t,
          required: n,
          shouldFocusWrap: o,
          items: s ? E : g,
          onSelectionChange: c,
          selectedItems: l
        })
      },
      controls: {
        selectionMode: {
          label: "Selection Mode",
          type: "select",
          options: [{
            label: "Single",
            value: "single"
          }, {
            label: "Multiple",
            value: "multiple"
          }],
          defaultValue: "single"
        },
        withLeadingAndTrailing: {
          label: "Show leading and trailing content",
          type: "boolean",
          defaultValue: false
        },
        required: {
          label: "Required",
          type: "boolean",
          defaultValue: false
        },
        shouldFocusWrap: {
          label: "Should focus wrap",
          type: "boolean",
          defaultValue: false
        }
      }
    }]
  };

function b(e, t) {
  let n = i.useRef(null);
  return i.useMemo(() => {
    let r = e ? E : g;
    return t ? e => new Promise(null != n.current ? e => e(n.current) : e => setTimeout(() => (n.current = r, e(r)), 1e3)) : r
  }, [e, t])
}