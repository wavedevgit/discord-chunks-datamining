/** Chunk was on 66548 **/
/** chunk id: 581167, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  i: () => i
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk337132 = require("./337132.js");
let i = {
  title: "Forms",
  stories: [{
    name: "FieldSet",
    id: "fieldset",
    component: function(e) {
      let {
        label: l
      } = e;
      return (0, a.jsx)("div", {
        children: (0, a.jsxs)(n.C3N, {
          label: "" === l ? true : l,
          children: [(0, a.jsx)(n.oil, {
            label: "First Name"
          }), (0, a.jsx)(n.oil, {
            label: "Last Name"
          }), (0, a.jsx)(n.oil, {
            label: "Address"
          })]
        })
      })
    },
    controls: {
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Billing Address"
      }
    }
  }, {
    name: "Field",
    id: "formcontrol",
    component: function(e) {
      var l, t, {
          description: i
        } = e,
        r = function(e, l) {
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
        }(e, ["description"]);
      return (0, a.jsx)("div", {
        children: (0, a.jsx)(n.gNt, (l = function(e) {
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
        }({}, r), t = t = {
          description: "" === i ? true : i,
          icon: r.showIcon ? n.mBM : true,
          children: (0, a.jsx)("div", {
            className: o.placeholder,
            children: (0, a.jsx)(n.Text, {
              color: "text-secondary",
              variant: "text-md/medium",
              children: "Field"
            })
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(t)) : (function(e, l) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t.push.apply(t, a)
          }
          return t
        })(Object(t)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(t, e))
        }), l))
      })
    },
    controls: {
      label: {
        type: "text",
        label: "Label",
        defaultValue: "First Name"
      },
      description: {
        type: "text",
        label: "Description",
        defaultValue: "This is the first name of the user"
      },
      helperText: {
        type: "text",
        label: "Helper Text",
        defaultValue: "This is the helper text for the form control"
      },
      required: {
        type: "boolean",
        label: "Required",
        defaultValue: false
      },
      errorMessage: {
        type: "text",
        label: "Error Message",
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
        }]
      },
      badge: {
        type: "select",
        label: "Badge",
        defaultValue: true,
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
        }, {
          label: "Free Trial",
          value: "free_trial"
        }]
      },
      showIcon: {
        type: "boolean",
        label: "Show Icon",
        defaultValue: false
      }
    }
  }]
}