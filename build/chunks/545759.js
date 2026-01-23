/** Chunk was on web.js **/
/** chunk id: 545759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => p
});
var Chunk790525 = require("./790525.js"),
  Chunk726402 = require("./726402.js"),
  Chunk389704 = require("./389704.js"),
  Chunk821085 = require("./821085.js"),
  Chunk8885 = require("./8885.js"),
  Chunk519948 = require("./519948.js"),
  Chunk182569 = require("./182569.js"),
  Chunk444746 = require("./444746.js"),
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
    h = true === _ ? d : _;
  return function(e, t, n) {
    true === n && (n = h);
    var _ = {
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
        state: _,
        setOptions: function(n) {
          var r = "function" == typeof n ? n(_.options) : n;
          b(), _.options = Object.assign({}, h, _.options, r), _.scrollParents = {
            reference: (0, u.vq)(e) ? (0, a.A)(e) : e.contextElement ? (0, a.A)(e.contextElement) : [],
            popper: (0, a.A)(t)
          };
          var i = (0, o.A)((0, c.A)([].concat(p, _.options.modifiers)));
          return _.orderedModifiers = i.filter(function(e) {
            return e.enabled
          }), y(), E.update()
        },
        forceUpdate: function() {
          if (!g) {
            var e = _.elements,
              t = e.reference,
              n = e.popper;
            if (f(t, n)) {
              _.rects = {
                reference: (0, r.A)(t, (0, s.A)(n), "fixed" === _.options.strategy),
                popper: (0, i.A)(n)
              }, _.reset = false, _.placement = _.options.placement, _.orderedModifiers.forEach(function(e) {
                return _.modifiersData[e.name] = Object.assign({}, e.data)
              });
              for (var a = 0; a < _.orderedModifiers.length; a++) {
                if (true === _.reset) {
                  _.reset = false, a = false;
                  continue
                }
                var o = _.orderedModifiers[a],
                  l = o.fn,
                  c = o.options,
                  u = true === c ? {} : c,
                  d = o.name;
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
        update: (0, l.A)(function() {
          return new Promise(function(e) {
            E.forceUpdate(), e(_)
          })
        }),
        destroy: function() {
          b(), g = true
        }
      };
    if (!f(e, t)) return E;

    function y() {
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
            s = function() {};
          m.push(a || s)
        }
      })
    }

    function b() {
      m.forEach(function(e) {
        return e()
      }), m = []
    }
    return E.setOptions(n).then(function(e) {
      !g && n.onFirstUpdate && n.onFirstUpdate(e)
    }), E
  }
}