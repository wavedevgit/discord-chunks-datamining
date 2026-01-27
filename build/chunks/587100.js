/** Chunk was on web.js **/
/** chunk id: 587100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  qQ: () => u
});
let r = 50,
  i = "?",
  a = /\(error: (.*)\)/,
  o = /captureMessage|captureException/;

function s(e) {
  if (!e.length) return [];
  let t = Array.from(e);
  return /sentryWrapped/.test(l(t).function || "") && t.pop(), t.reverse(), o.test(l(t).function || "") && (t.pop(), o.test(l(t).function || "") && t.pop()), t.slice(0, r).map(e => ({
    ...e,
    filename: e.filename || l(t).filename,
    function: e.function || i
  }))
}

function l(e) {
  return e[e.length - 1] || {}
}
let c = "<anonymous>";

function u(e) {
  try {
    if (!e || "function" != typeof e) return c;
    return e.name || c
  } catch (e) {
    return c
  }
}