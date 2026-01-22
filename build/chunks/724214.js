/** Chunk was on web.js **/
/** chunk id: 724214, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./321073.js"), require("./65821.js"), ! function(e) {
  var t = Date.now ? Date.now() : +new Date,
    n = e.performance || {},
    r = [],
    i = {},
    a = function(e, t) {
      for (var n = 0, i = r.length, a = []; n < i; n++) r[n][e] == t && a.push(r[n]);
      return a
    },
    s = function(e, t) {
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
  }), n.measure || (n.measure = n.webkitMeasure || function(e, t, a) {
    var s, o;
    if (true !== a && true === i[a]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + a + "' does not exist.");
    if (true !== t && true === i[t]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
    s = i[t] ? i[t].startTime : 0, o = i[a] ? i[a].startTime : n.now(), r.push({
      name: e,
      entryType: "measure",
      startTime: s,
      duration: o - s
    })
  }), n.getEntriesByType || (n.getEntriesByType = n.webkitGetEntriesByType || function(e) {
    return a("entryType", e)
  }), n.getEntriesByName || (n.getEntriesByName = n.webkitGetEntriesByName || function(e) {
    return a("name", e)
  }), n.clearMarks || (n.clearMarks = n.webkitClearMarks || function(e) {
    s("mark", e)
  }), n.clearMeasures || (n.clearMeasures = n.webkitClearMeasures || function(e) {
    s("measure", e)
  }), e.performance = n, "function" == typeof define && (define.amd || define.ajs) && define("performance", [], function() {
    return n
  })
}(require.g)