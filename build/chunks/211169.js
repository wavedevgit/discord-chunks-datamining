/** Chunk was on web.js **/
/** chunk id: 211169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => o
});
var Chunk551253 = require("./551253.js"),
  Chunk297130 = require("./297130.js"),
  Chunk222367 = require("./222367.js");

function o(e, t, n, o, s, l) {
  var c = {},
    u = e.accept;

  function d(e, t) {
    n.forEach(function(n) {
      n.between(e, t, true).forEach(function(e) {
        c[Number(e)] = true
      })
    })
  }
  s.forEach(function(e) {
    c[Number(new r.x(e, l).rezonedDate())] = true
  }), e.accept = function(e) {
    var t = Number(e);
    return isNaN(t) ? u.call(this, e) : !!c[t] || (d(new Date(t - 1), new Date(t + 1)), !!c[t]) || (c[t] = true, u.call(this, e))
  }, "between" === e.method && (d(e.args.after, e.args.before), e.accept = function(e) {
    var t = Number(e);
    return !!c[t] || (c[t] = true, u.call(this, e))
  });
  for (var f = 0; f < o.length; f++) {
    var p = new r.x(o[f], l).rezonedDate();
    if (!e.accept(new Date(p.getTime()))) break
  }
  t.forEach(function(t) {
    (0, i.t)(e, t.options)
  });
  var _ = e._result;
  switch ((0, a.di)(_), e.method) {
    case "all":
    case "between":
      return _;
    case "before":
      return _.length && _[_.length - 1] || null;
    default:
      return _.length && _[0] || null
  }
}