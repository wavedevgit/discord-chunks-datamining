/** Chunk was on web.js **/
/** chunk id: 131522, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk257469 = require("./257469.js"),
  Chunk65183 = require("./65183.js"),
  o = Chunk65183.List,
  a = Chunk65183.Repeat,
  s = Chunk65183.Record,
  l = function() {
    returntrue
  },
  c = s({
    start: null,
    end: null
  }),
  u = s({
    start: null,
    end: null,
    decoratorKey: null,
    leaves: null
  });

function d(e, t) {
  var n = [];
  return r(e.map(function(e) {
    return e.getStyle()
  }).toList(), f, l, function(e, r) {
    n.push(new c({
      start: e + t,
      end: r + t
    }))
  }), o(n)
}

function f(e, t) {
  return e === t
}
module.exports = {
  generate: function(e, t, n) {
    var i = t.getLength();
    if (!i) return o.of(new u({
      start: 0,
      end: 0,
      decoratorKey: null,
      leaves: o.of(new c({
        start: 0,
        end: 0
      }))
    }));
    var s = [],
      p = n ? n.getDecorations(t, e) : o(a(null, i)),
      _ = t.getCharacterList();
    return r(p, f, l, function(e, t) {
      s.push(new u({
        start: e,
        end: t,
        decoratorKey: p.get(e),
        leaves: d(_.slice(e, t).toList(), e)
      }))
    }), o(s)
  }
}