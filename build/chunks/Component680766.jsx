/** Chunk was on 66548 **/
/** chunk id: 680766, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  W: () => f
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk448814 = require("./448814.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk496600 = require("./496600.jsx"),
  Chunk333200 = require("./333200.jsx"),
  Chunk673221 = require("./673221.jsx"),
  Chunk740353 = require("./740353.js");

function c(e) {
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

function b(e, l) {
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

function p(e, l) {
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
let y = [{
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
  m = [{
    label: "Aardvark",
    value: "aardvark",
    id: "aardvark",
    leading: Chunk793030.VL1,
    trailing: {
      type: "badge",
      badgeType: "new"
    }
  }, {
    label: "Cat",
    value: "cat",
    id: "cat",
    leading: Chunk793030.VL1,
    trailing: "20m"
  }, {
    label: "Dog",
    value: "dog",
    id: "dog",
    leading: Chunk793030.VL1
  }, {
    label: "Kangaroo",
    value: "kangaroo",
    id: "kangaroo",
    leading: {
      type: "image",
      src: Chunk740353
    }
  }, {
    label: "Panda",
    value: "panda",
    id: "panda",
    leading: {
      type: "avatar",
      src: Chunk740353
    }
  }, {
    label: "Snake",
    value: "snake",
    id: "snake",
    leading: Chunk793030.VL1,
    disabled: true
  }],
  f = {
    title: "Select",
    stories: [{
      id: "select",
      name: "Select",
      component: function(e) {
        var {
          selectionMode: l,
          withLeadingAndTrailing: t
        } = e, o = p(e, ["selectionMode", "withLeadingAndTrailing"]);
        let [i, r] = n.useState(null), [s, d] = n.useState([]), y = v(t, o.asyncOptions);
        return "single" === l ? (0, a.jsx)(u.P, b(c({}, o), {
          selectionMode: l,
          options: y,
          onSelectionChange: r,
          value: i
        })) : (0, a.jsx)(u.P, b(c({}, o), {
          selectionMode: l,
          options: y,
          onSelectionChange: d,
          value: s
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
      id: "searchable-select",
      name: "SearchableSelect",
      component: function(e) {
        var {
          selectionMode: l,
          withLeadingAndTrailing: t,
          asyncOptions: o
        } = e, i = p(e, ["selectionMode", "withLeadingAndTrailing", "asyncOptions"]);
        let [r, u] = n.useState(null), [d, y] = n.useState([]), m = v(t, o);
        return "single" === l ? (0, a.jsx)(s.V, b(c({}, i), {
          selectionMode: l,
          onSelectionChange: u,
          value: r,
          options: m
        })) : (0, a.jsx)(s.V, b(c({}, i), {
          selectionMode: l,
          onSelectionChange: y,
          value: d,
          options: m
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
        var {
          selectionMode: l,
          label: t,
          hideLabel: o,
          description: i,
          helperText: s,
          errorMessage: u,
          successMessage: d,
          wrapTags: y,
          withLeadingAndTrailing: m
        } = e, f = p(e, ["selectionMode", "label", "hideLabel", "description", "helperText", "errorMessage", "successMessage", "wrapTags", "withLeadingAndTrailing"]);
        let {
          required: h,
          disabled: x
        } = f, g = v(m, f.asyncOptions), [O, j] = n.useState(null);
        return (0, a.jsxs)(r.uz, b(c({
          selectionMode: l,
          onSelectionChange: j,
          options: g,
          value: O
        }, f), {
          children: [(0, a.jsx)(r.Ct, {
            label: t,
            hideLabel: o,
            required: h,
            disabled: x,
            description: i,
            helperText: s,
            errorMessage: u,
            successMessage: d,
            wrapTags: y
          }), (0, a.jsx)(r.px, {})]
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
          selectionMode: l,
          required: t,
          shouldFocusWrap: i,
          withLeadingAndTrailing: r
        } = e, [s, u] = n.useState(null);
        return (0, a.jsx)(o.w, {
          selectionMode: l,
          required: t,
          shouldFocusWrap: i,
          items: r ? m : y,
          onSelectionChange: u,
          selectedItems: s
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

function v(e, l) {
  let t = n.useRef(null);
  return n.useMemo(() => {
    let a = e ? m : y;
    return l ? e => new Promise(null != t.current ? e => e(t.current) : e => setTimeout(() => (t.current = a, e(a)), 1e3)) : a
  }, [e, l])
}