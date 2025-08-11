/** Chunk was on web.js **/
/** chunk id: 258558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./539854.js"), require("./415506.js"), ! function(e) {
  var t = Date.now ? Date.now() : +new Date,
    n = e.performance || {},
    r = [],
    i = {},
    o = function(e, t) {
      for (var n = 0, i = r.length, o = []; n < i; n++) r[n][e] == t && o.push(r[n]);
      return o
    },
    a = function(e, t) {
      for (var n, i = r.length; i--;)(n = r[i]).entryType == e && (true === t || n.name == t) && r.splice(i, 1)
    };
  n.now || (n.now = n.webkitNow || n.mozNow || n.msNow || function() {
    return (Date.now ? Date.now() : +new Date) - t
  }), n.mark || (n.mark = n.webkitMark || function(e) {
    var t = {
      name: e,
      entryType: "mark",
      startTime: n.now(),
      duration: 0
    };
    r.push(t), i[e] = t
  }), n.measure || (n.measure = n.webkitMeasure || function(e, t, o) {
    var a, s;
    if (true !== o && true === i[o]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + o + "' does not exist.");
    if (true !== t && true === i[t]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
    a = i[t] ? i[t].startTime : 0, s = i[o] ? i[o].startTime : n.now(), r.push({
      name: e,
      entryType: "measure",
      startTime: a,
      duration: s - a
    })
  }), n.getEntriesByType || (n.getEntriesByType = n.webkitGetEntriesByType || function(e) {
    return o("entryType", e)
  }), n.getEntriesByName || (n.getEntriesByName = n.webkitGetEntriesByName || function(e) {
    return o("name", e)
  }), n.clearMarks || (n.clearMarks = n.webkitClearMarks || function(e) {
    a("mark", e)
  }), n.clearMeasures || (n.clearMeasures = n.webkitClearMeasures || function(e) {
    a("measure", e)
  }), e.performance = n, "function" == typeof define && (define.amd || define.ajs) && define("performance", [], function() {
    return n
  })
}(require.g)