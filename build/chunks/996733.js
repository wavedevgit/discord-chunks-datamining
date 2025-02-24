/** Chunk was on 40580 (29804edbfa36af1f.js) **/
"use strict";
r.d(t, {
  QH: () => i,
  Z7: () => o,
  yN: () => s
}), r(566702);
let n = (0, r(972959).H)(() => ({
  query: "",
  isActive: !1,
  selected: null
}));

function s(e) {
  n.setState({
    query: e
  })
}

function i(e) {
  n.setState({
    isActive: e
  })
}

function o() {
  return n.useField("query")
}