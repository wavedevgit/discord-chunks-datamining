/** Chunk was on web.js **/
/** chunk id: 763721, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => h
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377089 = require("./377089.js"),
  Chunk231338 = require("./231338.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = [{
    id: "strength",
    label: "Strength",
    icon: Chunk481060.lOy
  }, {
    id: "wisdom",
    label: "Wisdom",
    icon: {
      type: "role",
      color: Chunk481060.TVs.unsafe_rawColors.BRAND_500.css
    }
  }, {
    id: "charisma",
    label: "Charisma"
  }, {
    id: "intelligence",
    label: "Intelligence"
  }, {
    id: "dexterity",
    label: "Dexterity"
  }, {
    id: "constitution",
    label: "Constitution"
  }],
  h = {
    title: "Input Components",
    stories: [{
      name: "TextInput",
      component: function(e) {
        var {
          leading: t,
          trailing: n
        } = e, o = p(e, ["leading", "trailing"]);
        let [c, d] = i.useState(""), _ = (0, s.U)("UserSettingsDesignSystems"), [h, g] = i.useState(m), E = i.useCallback(e => {
          g(h.filter(t => !e.has(t.id)))
        }, [h]);

        function b(e) {
          if (_) switch (e) {
            case "tags":
              return {
                type: "tags", label: "Tags", items: h, onRemove: E
              };
            case "icon":
              return {
                icon: a.lOy, onClick: l.dG, "aria-label": "At"
              };
            case "text":
              return "https://discord.gg/";
            default:
              return
          }
        }

        function y(e) {
          if (_)
            if ("icon" === e) return {
              icon: a.qJs,
              onClick: l.dG,
              "aria-label": "At"
            };
            else return
        }
        return (0, r.jsxs)(a.Kqy, {
          gap: 16,
          children: [(0, r.jsx)(a.oil, f(u({}, o), {
            value: c,
            onChange: d,
            leading: b(t),
            trailing: y(n),
            maxLength: 500
          })), "tags" === t ? (0, r.jsx)(a.Button, {
            text: "Reset Tags",
            size: "sm",
            variant: "secondary",
            onClick: () => g(m)
          }) : null]
        })
      },
      id: "text-input",
      controls: {
        type: {
          label: "Input Type",
          type: "select",
          defaultValue: "text",
          options: [{
            label: "Text",
            value: "text"
          }, {
            label: "Password",
            value: "password"
          }, {
            label: "Email",
            value: "email"
          }, {
            label: "Number",
            value: "number"
          }]
        },
        label: {
          label: "Label",
          type: "text",
          defaultValue: "Example Label"
        },
        hideLabel: {
          label: "Hide Label",
          type: "boolean",
          defaultValue: false
        },
        description: {
          label: "Description",
          type: "text",
          defaultValue: "This is an example description"
        },
        required: {
          label: "Required",
          type: "boolean",
          defaultValue: false
        },
        placeholder: {
          label: "Placeholder",
          type: "text",
          defaultValue: "Enter some text..."
        },
        error: {
          label: "Error Message",
          type: "text",
          defaultValue: true
        },
        helperText: {
          label: "Helper Text",
          type: "text",
          defaultValue: true
        },
        minLength: {
          label: "Min Length",
          type: "number",
          defaultValue: 0
        },
        showCharacterCount: {
          label: "Show Character Count",
          type: "boolean",
          defaultValue: false
        },
        clearable: {
          label: "Clearable",
          type: "boolean",
          defaultValue: false
        },
        disabled: {
          label: "Disabled",
          type: "boolean",
          defaultValue: false
        },
        readOnly: {
          label: "Read Only",
          type: "boolean",
          defaultValue: false
        },
        leading: {
          label: "Leading",
          type: "select",
          defaultValue: "none",
          options: [{
            label: "None",
            value: "none"
          }, {
            label: "Tags",
            value: "tags"
          }, {
            label: "Icon",
            value: "icon"
          }, {
            label: "Text",
            value: "text"
          }]
        },
        trailing: {
          label: "Trailing",
          type: "select",
          defaultValue: "none",
          options: [{
            label: "None",
            value: "none"
          }, {
            label: "Icon",
            value: "icon"
          }]
        }
      }
    }, {
      name: "SearchBar",
      component: function(e) {
        let [t, n] = i.useState("");
        return (0, r.jsx)(a.E1j, f(u({}, e), {
          query: t,
          onChange: n,
          onClear: e.clearable ? () => n("") : true
        }))
      },
      id: "search-bar",
      controls: {
        placeholder: {
          label: "Placeholder",
          type: "text",
          defaultValue: "Search..."
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
        clearable: {
          label: "Clearable",
          type: "boolean",
          defaultValue: false
        },
        disabled: {
          label: "Disabled",
          type: "boolean",
          defaultValue: false
        }
      }
    }, {
      name: "TextArea",
      id: "text-area",
      component: function(e) {
        let [t, n] = i.useState("");
        return (0, r.jsx)(a.Kx8, f(u({}, e), {
          value: t,
          onChange: n
        }))
      },
      controls: {
        label: {
          label: "Label",
          type: "text",
          defaultValue: "Example Label"
        },
        hideLabel: {
          label: "Hide Label",
          type: "boolean",
          defaultValue: false
        },
        required: {
          label: "Required",
          type: "boolean",
          defaultValue: false
        },
        description: {
          label: "Description",
          type: "text",
          defaultValue: "This is an example description"
        },
        helperText: {
          label: "Helper Text",
          type: "text",
          defaultValue: true
        },
        placeholder: {
          label: "Placeholder",
          type: "text",
          defaultValue: "Enter your message..."
        },
        error: {
          label: "Error Message",
          type: "text",
          defaultValue: true
        },
        rows: {
          label: "Rows",
          type: "number",
          defaultValue: 3
        },
        autosize: {
          label: "Autosize",
          type: "boolean",
          defaultValue: false
        },
        maxLength: {
          label: "Max Length",
          type: "number",
          defaultValue: 1e3
        },
        showCharacterCount: {
          label: "Show Character Count",
          type: "boolean",
          defaultValue: false
        },
        disabled: {
          label: "Disabled",
          type: "boolean",
          defaultValue: false
        }
      }
    }, {
      name: "Input Collection",
      id: "input-collection",
      component: function(e) {
        let {
          label: t,
          hideLabel: n,
          description: i,
          required: s,
          error: c,
          disabled: d,
          placeholder: p,
          value: _ = "",
          readOnly: h,
          helperText: g,
          successMessage: E,
          showCharacterCount: b
        } = e, y = {
          label: t,
          hideLabel: n,
          description: i,
          required: s,
          value: _,
          error: c,
          disabled: d,
          placeholder: p,
          readOnly: h,
          helperText: g,
          showCharacterCount: b,
          successMessage: E
        };
        return (0, r.jsxs)(a.Kqy, {
          gap: 24,
          children: [(0, r.jsxs)(o.C3N, {
            label: "Text Input",
            children: [(0, r.jsx)(a.oil, u({}, y)), (0, r.jsx)(a.oil, f(u({}, y), {
              clearable: true
            })), (0, r.jsx)(a.oil, f(u({}, y), {
              leading: {
                icon: a.lOy,
                onClick: l.dG,
                "aria-label": "At"
              }
            })), (0, r.jsx)(a.oil, f(u({}, y), {
              leading: a.lOy
            })), (0, r.jsx)(a.oil, f(u({}, y), {
              leading: "https://discord.gg/"
            })), (0, r.jsx)(a.oil, f(u({}, y), {
              trailing: {
                icon: a.lOy,
                onClick: l.dG,
                "aria-label": "At"
              }
            })), (0, r.jsx)(a.oil, f(u({}, y), {
              trailing: a.lOy
            })), (0, r.jsx)(a.oil, f(u({}, y), {
              leading: {
                type: "tags",
                label: "Tags",
                items: m.slice(0, 3)
              }
            }))]
          }), (0, r.jsx)(o.izJ, {}), (0, r.jsxs)(o.C3N, {
            label: "Search Bar",
            children: [(0, r.jsx)(a.E1j, {
              query: _,
              onChange: l.dG,
              disabled: d,
              placeholder: p
            }), (0, r.jsx)(a.E1j, {
              query: _,
              onChange: l.dG,
              size: "sm",
              disabled: d,
              placeholder: p
            })]
          }), (0, r.jsx)(o.izJ, {}), (0, r.jsx)(o.C3N, {
            label: "Text Area",
            children: (0, r.jsx)(a.Kx8, u({}, y))
          })]
        })
      },
      controls: {
        value: {
          label: "Value",
          type: "text",
          defaultValue: ""
        },
        placeholder: {
          label: "Placeholder",
          type: "text",
          defaultValue: "Enter some text..."
        },
        label: {
          label: "Label",
          type: "text",
          defaultValue: "Example Label"
        },
        hideLabel: {
          label: "Hide Label",
          type: "boolean",
          defaultValue: false
        },
        description: {
          label: "Description",
          type: "text",
          defaultValue: "This is an example description"
        },
        required: {
          label: "Required",
          type: "boolean",
          defaultValue: false
        },
        error: {
          label: "Error Message",
          type: "text",
          defaultValue: true
        },
        successMessage: {
          label: "Success Message",
          type: "text",
          defaultValue: true
        },
        helperText: {
          label: "Helper Text",
          type: "text",
          defaultValue: true
        },
        showCharacterCount: {
          label: "Show Character Count",
          type: "boolean",
          defaultValue: false
        },
        disabled: {
          label: "Disabled",
          type: "boolean",
          defaultValue: false
        },
        readOnly: {
          label: "Read Only",
          type: "boolean",
          defaultValue: false
        }
      }
    }]
  }