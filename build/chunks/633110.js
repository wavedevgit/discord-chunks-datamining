/** Chunk was on 91584 **/
/** chunk id: 633110, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk102801 = require("./102801.js"),
  Chunk65183 = require("./65183.js"),
  o = Chunk65183.List,
  a = Chunk65183.Repeat,
  u = Chunk65183.Record,
  s = function() {
    returntrue
  },
  c = u({
    start: null,
    end: null
  }),
  l = u({
    start: null,
    end: null,
    decoratorKey: null,
    leaves: null
  });

function f(t, e) {
  return t === e
}
module.exports = {
  generate: function(t, e, r) {
    var i = e.getLength();
    if (!i) return o.of(new l({
      start: 0,
      end: 0,
      decoratorKey: null,
      leaves: o.of(new c({
        start: 0,
        end: 0
      }))
    }));
    var u = [],
      p = r ? r.getDecorations(e, t) : o(a(null, i)),
      h = e.getCharacterList();
    return n(p, f, s, function(t, e) {
      var r, i, a;
      u.push(new l({
        start: t,
        end: e,
        decoratorKey: p.get(t),
        leaves: (r = h.slice(t, e).toList(), i = t, a = [], n(r.map(function(t) {
          return t.getStyle()
        }).toList(), f, s, function(t, e) {
          a.push(new c({
            start: t + i,
            end: e + i
          }))
        }), o(a))
      }))
    }), o(u)
  }
}