/** Chunk was on 23032 **/
/** chunk id: 558876, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk44837 = require("./44837.js"),
  Chunk565294 = require("./565294.js"),
  Chunk381537 = require("./381537.js"),
  Chunk473749 = require("./473749.js"),
  Chunk639519 = require("./639519.js"),
  c = require.n(Chunk639519),
  Chunk625358 = require("./625358.js"),
  Chunk913731 = require("./913731.js"),
  Chunk931147 = require("./931147.js"),
  Chunk783316 = require("./783316.js"),
  Chunk423353 = require("./423353.js"),
  h = ["getItemString", "keyPath", "labelRenderer", "styling", "value", "valueRenderer", "isCustomNode"];

function p(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), r.push.apply(r, a)
  }
  return r
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p(Object(r), true).forEach(function(t) {
      (0, n.Z)(e, t, r[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    })
  }
  return e
}
var g = function(e) {
  var t = e.getItemString,
    r = e.keyPath,
    n = e.labelRenderer,
    i = e.styling,
    c = e.value,
    p = e.valueRenderer,
    g = e.isCustomNode,
    y = (0, o.Z)(e, h),
    v = g(c) ? "Custom" : (0, u.Z)(c),
    Z = {
      getItemString: t,
      key: r[0],
      keyPath: r,
      labelRenderer: n,
      nodeType: v,
      styling: i,
      value: c,
      valueRenderer: p
    },
    w = m(m(m({}, y), Z), {}, {
      data: c,
      isCustomNode: g
    });
  switch (v) {
    case "Object":
    case "Error":
    case "WeakMap":
    case "WeakSet":
      return s.createElement(l.Z, w);
    case "Array":
      return s.createElement(f.Z, w);
    case "Iterable":
    case "Map":
    case "Set":
      return s.createElement(b.Z, w);
    case "String":
      return s.createElement(d.Z, (0, a.Z)({}, Z, {
        valueGetter: function(e) {
          return '"'.concat(e, '"')
        }
      }));
    case "Number":
    case "Custom":
      return s.createElement(d.Z, Z);
    case "Boolean":
      return s.createElement(d.Z, (0, a.Z)({}, Z, {
        valueGetter: function(e) {
          return e ? "true" : "false"
        }
      }));
    case "Date":
      return s.createElement(d.Z, (0, a.Z)({}, Z, {
        valueGetter: function(e) {
          return e.toISOString()
        }
      }));
    case "Null":
      return s.createElement(d.Z, (0, a.Z)({}, Z, {
        valueGetter: function() {
          return "null"
        }
      }));
    case "Undefined":
      return s.createElement(d.Z, (0, a.Z)({}, Z, {
        valueGetter: function() {
          return "undefined"
        }
      }));
    case "Function":
    case "Symbol":
      return s.createElement(d.Z, (0, a.Z)({}, Z, {
        valueGetter: function(e) {
          return e.toString()
        }
      }));
    default:
      return s.createElement(d.Z, (0, a.Z)({}, Z, {
        valueGetter: function() {
          return "<".concat(v, ">")
        }
      }))
  }
};
g.propTypes = {
  getItemString: c().func.isRequired,
  keyPath: c().arrayOf(c().oneOfType([c().string, c().number]).isRequired).isRequired,
  labelRenderer: c().func.isRequired,
  styling: c().func.isRequired,
  value: c().any,
  valueRenderer: c().func.isRequired,
  isCustomNode: c().func.isRequired
};
let y = g