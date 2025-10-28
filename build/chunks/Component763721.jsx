/** Chunk was on 66548 **/
/** chunk id: 763721, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  z: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377089 = require("./377089.js"),
  Chunk231338 = require("./231338.js");

function u(e) {
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

function d(e, l) {
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
let c = [{
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
  b = {
    title: "Input Components",
    stories: [{
      name: "TextInput",
      component: function(e) {
        var {
          leading: l,
          trailing: t
        } = e, o = function(e, l) {
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
        }(e, ["leading", "trailing"]);
        let [b, p] = n.useState(""), y = (0, r.U)("UserSettingsDesignSystems"), [m, f] = n.useState(c), v = n.useCallback(e => {
          f(m.filter(l => !e.has(l.id)))
        }, [m]);
        return (0, a.jsxs)(i.Kqy, {
          gap: 16,
          children: [(0, a.jsx)(i.oil, d(u({}, o), {
            value: b,
            onChange: p,
            leading: function(e) {
              if (y) switch (e) {
                case "tags":
                  return {
                    type: "tags", label: "Tags", items: m, onRemove: v
                  };
                case "icon":
                  return {
                    icon: i.lOy, onClick: s.dG, "aria-label": "At"
                  };
                case "text":
                  return "https://discord.gg/";
                default:
                  return
              }
            }(l),
            trailing: function(e) {
              if (y)
                if ("icon" === e) return {
                  icon: i.qJs,
                  onClick: s.dG,
                  "aria-label": "At"
                };
                else return
            }(t),
            maxLength: 500
          })), "tags" === l ? (0, a.jsx)(i.Button, {
            text: "Reset Tags",
            size: "sm",
            variant: "secondary",
            onClick: () => f(c)
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
        let [l, t] = n.useState("");
        return (0, a.jsx)(i.E1j, d(u({}, e), {
          query: l,
          onChange: t,
          onClear: e.clearable ? () => t("") : true
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
        let [l, t] = n.useState("");
        return (0, a.jsx)(i.Kx8, d(u({}, e), {
          value: l,
          onChange: t
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
          label: l,
          hideLabel: t,
          description: n,
          required: r,
          error: b,
          disabled: p,
          placeholder: y,
          value: m = "",
          readOnly: f,
          helperText: v,
          successMessage: h,
          showCharacterCount: x
        } = e, g = {
          label: l,
          hideLabel: t,
          description: n,
          required: r,
          value: m,
          error: b,
          disabled: p,
          placeholder: y,
          readOnly: f,
          helperText: v,
          showCharacterCount: x,
          successMessage: h
        };
        return (0, a.jsxs)(i.Kqy, {
          gap: 24,
          children: [(0, a.jsxs)(o.C3N, {
            label: "Text Input",
            children: [(0, a.jsx)(i.oil, u({}, g)), (0, a.jsx)(i.oil, d(u({}, g), {
              clearable: true
            })), (0, a.jsx)(i.oil, d(u({}, g), {
              leading: {
                icon: i.lOy,
                onClick: s.dG,
                "aria-label": "At"
              }
            })), (0, a.jsx)(i.oil, d(u({}, g), {
              leading: i.lOy
            })), (0, a.jsx)(i.oil, d(u({}, g), {
              leading: "https://discord.gg/"
            })), (0, a.jsx)(i.oil, d(u({}, g), {
              trailing: {
                icon: i.lOy,
                onClick: s.dG,
                "aria-label": "At"
              }
            })), (0, a.jsx)(i.oil, d(u({}, g), {
              trailing: i.lOy
            })), (0, a.jsx)(i.oil, d(u({}, g), {
              leading: {
                type: "tags",
                label: "Tags",
                items: c.slice(0, 3)
              }
            }))]
          }), (0, a.jsx)(o.izJ, {}), (0, a.jsxs)(o.C3N, {
            label: "Search Bar",
            children: [(0, a.jsx)(i.E1j, {
              query: m,
              onChange: s.dG,
              disabled: p,
              placeholder: y
            }), (0, a.jsx)(i.E1j, {
              query: m,
              onChange: s.dG,
              size: "sm",
              disabled: p,
              placeholder: y
            })]
          }), (0, a.jsx)(o.izJ, {}), (0, a.jsx)(o.C3N, {
            label: "Text Area",
            children: (0, a.jsx)(i.Kx8, u({}, g))
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