/** Chunk was on 23706 **/
/** chunk id: 558876, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
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
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), r.push.apply(r, n)
  }
  return r
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p(Object(r), true).forEach(function(t) {
      (0, a.Z)(e, t, r[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    })
  }
  return e
}
var g = function(e) {
  var t = e.getItemString,
    r = e.keyPath,
    a = e.labelRenderer,
    i = e.styling,
    c = e.value,
    p = e.valueRenderer,
    g = e.isCustomNode,
    v = (0, o.Z)(e, h),
    m = g(c) ? "Custom" : (0, u.Z)(c),
    w = {
      getItemString: t,
      key: r[0],
      keyPath: r,
      labelRenderer: a,
      nodeType: m,
      styling: i,
      value: c,
      valueRenderer: p
    },
    O = y(y(y({}, v), w), {}, {
      data: c,
      isCustomNode: g
    });
  switch (m) {
    case "Object":
    case "Error":
    case "WeakMap":
    case "WeakSet":
      return s.createElement(l.Z, O);
    case "Array":
      return s.createElement(f.Z, O);
    case "Iterable":
    case "Map":
    case "Set":
      return s.createElement(b.Z, O);
    case "String":
      return s.createElement(d.Z, (0, n.Z)({}, w, {
        valueGetter: function(e) {
          return '"'.concat(e, '"')
        }
      }));
    case "Number":
    case "Custom":
      return s.createElement(d.Z, w);
    case "Boolean":
      return s.createElement(d.Z, (0, n.Z)({}, w, {
        valueGetter: function(e) {
          return e ? "true" : "false"
        }
      }));
    case "Date":
      return s.createElement(d.Z, (0, n.Z)({}, w, {
        valueGetter: function(e) {
          return e.toISOString()
        }
      }));
    case "Null":
      return s.createElement(d.Z, (0, n.Z)({}, w, {
        valueGetter: function() {
          return "null"
        }
      }));
    case "Undefined":
      return s.createElement(d.Z, (0, n.Z)({}, w, {
        valueGetter: function() {
          return "undefined"
        }
      }));
    case "Function":
    case "Symbol":
      return s.createElement(d.Z, (0, n.Z)({}, w, {
        valueGetter: function(e) {
          return e.toString()
        }
      }));
    default:
      return s.createElement(d.Z, (0, n.Z)({}, w, {
        valueGetter: function() {
          return "<".concat(m, ">")
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
let v = g