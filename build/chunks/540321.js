/** Chunk was on web.js **/
/** chunk id: 540321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk740078 = require("./740078.js");

function i(e) {
  var t = new Map,
    n = new Set,
    r = [];

  function i(e) {
    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
      if (!n.has(e)) {
        var r = t.get(e);
        r && i(r)
      }
    }), r.push(e)
  }
  return e.forEach(function(e) {
    t.set(e.name, e)
  }), e.forEach(function(e) {
    n.has(e.name) || i(e)
  }), r
}

function o(e) {
  var t = i(e);
  return r.xs.reduce(function(e, n) {
    return e.concat(t.filter(function(e) {
      return e.phase === n
    }))
  }, [])
}