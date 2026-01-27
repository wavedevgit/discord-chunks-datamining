/** Chunk was on web.js **/
/** chunk id: 491026, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NS: () => s,
  YZ: () => a,
  p9: () => o
});
var Chunk130978 = require("./130978.js"),
  Chunk818337 = require("./818337.js");

function a(e, t) {
  let {
    enabled: n
  } = i.E.useExperiment({
    location: t
  }), a = (0, r.w)(e, t);
  return n && a
}

function o(e, t) {
  let {
    enabled: n
  } = i.E.getCurrentConfig({
    location: t
  }), a = (0, r.$)(e, t);
  return n && a
}

function s(e) {
  let {
    enabled: t
  } = i.l.useExperiment({
    location: e
  });
  return t
}