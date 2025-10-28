/** Chunk was on 66548 **/
/** chunk id: 555253, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  a: () => i
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js");
let i = {
  title: "VoidSwitch",
  stories: [{
    id: "switch",
    name: "Switch",
    component: function(e) {
      var l, t;
      let [i, r] = n.useState(false);
      return (0, a.jsx)(o.T2P, (l = function(e) {
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
      }({}, e), t = t = {
        onChange: r,
        checked: i
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
    },
    controls: {
      disabled: {
        type: "boolean",
        label: "Disabled",
        defaultValue: false
      },
      label: {
        type: "text",
        label: "Label",
        defaultValue: "Switch Label"
      },
      description: {
        type: "text",
        label: "Description",
        defaultValue: "This is the description for the switch"
      },
      required: {
        type: "boolean",
        label: "Required",
        defaultValue: false
      }
    }
  }]
}