/** Chunk was on 91584 **/
/** chunk id: 126502, original params: t (module,exports,require) **/
"use strict";

function e() {
  var t;
  return document.documentElement && (t = document.documentElement.clientWidth), !module && document.body && (t = document.body.clientWidth), module || 0
}

function r() {
  var t;
  return document.documentElement && (t = document.documentElement.clientHeight), !module && document.body && (t = document.body.clientHeight), module || 0
}

function n() {
  return {
    width: window.innerWidth || e(),
    height: window.innerHeight || r()
  }
}
n.withoutScrollbars = function() {
  return {
    width: e(),
    height: r()
  }
}, module.exports = n