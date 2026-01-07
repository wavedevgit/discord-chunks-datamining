/** Chunk was on web.js **/
/** chunk id: 816438, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  kZ: () => p
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
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(e) {
    return !(e && "function" == typeof e.getBoundingClientRect)
  })
}

function p(e) {
  true === e && (e = {});
  var t = e,
    n = t.defaultModifiers,
    p = true === n ? [] : n,
    _ = t.defaultOptions,
    m = true === _ ? d : _;
  return function(e, t, n) {
    true === n && (n = m);
    var _ = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, d, m),
        modifiersData: {},
        elements: {
          reference: e,
          popper: t
        },
        attributes: {},
        styles: {}
      },
      h = [],
      g = false,
      E = {
        state: _,
        setOptions: function(n) {
          var r = "function" == typeof n ? n(_.options) : n;
          y(), _.options = Object.assign({}, m, _.options, r), _.scrollParents = {
            reference: (0, u.kK)(e) ? (0, a.Z)(e) : e.contextElement ? (0, a.Z)(e.contextElement) : [],
            popper: (0, a.Z)(t)
          };
          var i = (0, s.Z)((0, c.Z)([].concat(p, _.options.modifiers)));
          return _.orderedModifiers = i.filter(function(e) {
            return e.enabled
          }), b(), E.update()
        },
        forceUpdate: function() {
          if (!g) {
            var e = _.elements,
              t = e.reference,
              n = e.popper;
            if (f(t, n)) {
              _.rects = {
                reference: (0, r.Z)(t, (0, o.Z)(n), "fixed" === _.options.strategy),
                popper: (0, i.Z)(n)
              }, _.reset = false, _.placement = _.options.placement, _.orderedModifiers.forEach(function(e) {
                return _.modifiersData[e.name] = Object.assign({}, e.data)
              });
              for (var a = 0; a < _.orderedModifiers.length; a++) {
                if (true === _.reset) {
                  _.reset = false, a = false;
                  continue
                }
                var s = _.orderedModifiers[a],
                  l = s.fn,
                  c = s.options,
                  u = true === c ? {} : c,
                  d = s.name;
                "function" == typeof l && (_ = l({
                  state: _,
                  options: u,
                  name: d,
                  instance: E
                }) || _)
              }
            }
          }
        },
        update: (0, l.Z)(function() {
          return new Promise(function(e) {
            E.forceUpdate(), e(_)
          })
        }),
        destroy: function() {
          y(), g = true
        }
      };
    if (!f(e, t)) return E;

    function b() {
      _.orderedModifiers.forEach(function(e) {
        var t = e.name,
          n = e.options,
          r = true === n ? {} : n,
          i = e.effect;
        if ("function" == typeof i) {
          var a = i({
              state: _,
              name: t,
              instance: E,
              options: r
            }),
            o = function() {};
          h.push(a || o)
        }
      })
    }

    function y() {
      h.forEach(function(e) {
        return e()
      }), h = []
    }
    return E.setOptions(n).then(function(e) {
      !g && n.onFirstUpdate && n.onFirstUpdate(e)
    }), E
  }
}