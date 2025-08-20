/** Chunk was on web.js **/
/** chunk id: 126502, original params: e (module,exports,re quire) **/
"use strict";

function t() {
  var e;
  return document.documentElement && (e = document.documentElement.clientWidth), !module && document.body && (e = document.body.clientWidth), module || 0
}

function n() {
  var e;
  return document.documentElement && (e = document.documentElement.clientHeight), !module && document.body && (e = document.body.clientHeight), module || 0
}

function r() {
  return {
    width: window.innerWidth || t(),
    height: window.innerHeight || n()
  }
}
r.withoutScrollbars = function() {
  return {
    width: t(),
    height: n()
  }
}, module.exports = r