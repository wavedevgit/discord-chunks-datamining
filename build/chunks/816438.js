/** Chunk was on web.js **/
/** chunk id: 816438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kZ: () => _
});
var Chunk4313 = require("./4313.js"),
  Chunk493623 = require("./493623.js"),
  Chunk620720 = require("./620720.js"),
  Chunk343713 = require("./343713.js"),
  Chunk540321 = require("./540321.js"),
  Chunk609027 = require("./609027.js"),
  Chunk375317 = require("./375317.js"),
  Chunk882159 = require("./882159.js"),
  d = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

function f() {
  for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require];
  return !exports.some(function(e) {
    return !(e && "function" == typeof e.getBoundingClientRect)
  })
}

function _(e) {
  true === e && (e = {});
  var t = e,
    n = t.defaultModifiers,
    _ = true === n ? [] : n,
    p = t.defaultOptions,
    h = true === p ? d : p;
  return function(e, t, n) {
    true === n && (n = h);
    var p = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, d, h),
        modifiersData: {},
        elements: {
          reference: e,
          popper: t
        },
        attributes: {},
        styles: {}
      },
      m = [],
      g = false,
      E = {
        state: p,
        setOptions: function(n) {
          var r = "function" == typeof n ? n(p.options) : n;
          y(), p.options = Object.assign({}, h, p.options, r), p.scrollParents = {
            reference: (0, u.kK)(e) ? (0, a.Z)(e) : e.contextElement ? (0, a.Z)(e.contextElement) : [],
            popper: (0, a.Z)(t)
          };
          var i = (0, s.Z)((0, c.Z)([].concat(_, p.options.modifiers)));
          return p.orderedModifiers = i.filter(function(e) {
            return e.enabled
          }), b(), E.update()
        },
        forceUpdate: function() {
          if (!g) {
            var e = p.elements,
              t = e.reference,
              n = e.popper;
            if (f(t, n)) {
              p.rects = {
                reference: (0, r.Z)(t, (0, o.Z)(n), "fixed" === p.options.strategy),
                popper: (0, i.Z)(n)
              }, p.reset = false, p.placement = p.options.placement, p.orderedModifiers.forEach(function(e) {
                return p.modifiersData[e.name] = Object.assign({}, e.data)
              });
              for (var a = 0; a < p.orderedModifiers.length; a++) {
                if (true === p.reset) {
                  p.reset = false, a = false;
                  continue
                }
                var s = p.orderedModifiers[a],
                  l = s.fn,
                  c = s.options,
                  u = true === c ? {} : c,
                  d = s.name;
                "function" == typeof l && (p = l({
                  state: p,
                  options: u,
                  name: d,
                  instance: E
                }) || p)
              }
            }
          }
        },
        update: (0, l.Z)(function() {
          return new Promise(function(e) {
            E.forceUpdate(), e(p)
          })
        }),
        destroy: function() {
          y(), g = true
        }
      };
    if (!f(e, t)) return E;

    function b() {
      p.orderedModifiers.forEach(function(e) {
        var t = e.name,
          n = e.options,
          r = true === n ? {} : n,
          i = e.effect;
        if ("function" == typeof i) {
          var a = i({
              state: p,
              name: t,
              instance: E,
              options: r
            }),
            o = function() {};
          m.push(a || o)
        }
      })
    }

    function y() {
      m.forEach(function(e) {
        return e()
      }), m = []
    }
    return E.setOptions(n).then(function(e) {
      !g && n.onFirstUpdate && n.onFirstUpdate(e)
    }), E
  }
}