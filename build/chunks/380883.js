/** Chunk was on 92777 **/
/** chunk id: 380883, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk1139 = require("./1139.js"),
  Chunk416886 = require("./416886.js"),
  Chunk106526 = require("./106526.js"),
  Chunk64700 = require("./64700.js"),
  Chunk223108 = require("./223108.js"),
  c = require.n(Chunk223108),
  Chunk189776 = require("./189776.js"),
  Chunk531228 = require("./531228.js"),
  Chunk609822 = require("./609822.js"),
  Chunk790777 = require("./790777.js"),
  Chunk1514 = require("./1514.js"),
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

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? p(Object(r), true).forEach(function(t) {
      (0, n.A)(e, t, r[t])
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
    v = (0, s.A)(e, h),
    m = g(c) ? "Custom" : (0, l.A)(c),
    A = {
      getItemString: t,
      key: r[0],
      keyPath: r,
      labelRenderer: n,
      nodeType: m,
      styling: i,
      value: c,
      valueRenderer: p
    },
    w = y(y(y({}, v), A), {}, {
      data: c,
      isCustomNode: g
    });
  switch (m) {
    case "Object":
    case "Error":
    case "WeakMap":
    case "WeakSet":
      return o.createElement(u.A, w);
    case "Array":
      return o.createElement(b.A, w);
    case "Iterable":
    case "Map":
    case "Set":
      return o.createElement(f.A, w);
    case "String":
      return o.createElement(d.A, (0, a.A)({}, A, {
        valueGetter: function(e) {
          return '"'.concat(e, '"')
        }
      }));
    case "Number":
    case "Custom":
      return o.createElement(d.A, A);
    case "Boolean":
      return o.createElement(d.A, (0, a.A)({}, A, {
        valueGetter: function(e) {
          return e ? "true" : "false"
        }
      }));
    case "Date":
      return o.createElement(d.A, (0, a.A)({}, A, {
        valueGetter: function(e) {
          return e.toISOString()
        }
      }));
    case "Null":
      return o.createElement(d.A, (0, a.A)({}, A, {
        valueGetter: function() {
          return "null"
        }
      }));
    case "Undefined":
      return o.createElement(d.A, (0, a.A)({}, A, {
        valueGetter: function() {
          return "undefined"
        }
      }));
    case "Function":
    case "Symbol":
      return o.createElement(d.A, (0, a.A)({}, A, {
        valueGetter: function(e) {
          return e.toString()
        }
      }));
    default:
      return o.createElement(d.A, (0, a.A)({}, A, {
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