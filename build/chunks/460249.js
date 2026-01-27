/** Chunk was on 38939 **/
/** chunk id: 460249, original params: t (module,exports,require) **/
"use strict";

function e() {
  var t;
  return document.documentElement && (t = document.documentElement.clientWidth), !t && document.body && (t = document.body.clientWidth), t || 0
}

function r() {
  var t;
  return document.documentElement && (t = document.documentElement.clientHeight), !t && document.body && (t = document.body.clientHeight), t || 0
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