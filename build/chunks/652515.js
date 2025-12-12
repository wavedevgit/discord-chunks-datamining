/** Chunk was on web.js **/
/** chunk id: 652515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C4: () => a,
  RF: () => o,
  yV: () => s
});
var Chunk352981 = require("./352981.js"),
  Chunk732845 = require("./732845.js");

function o(e, t) {
  let {
    enabled: n
  } = i.x.useExperiment({
    location: t
  }), o = (0, r.y)(e, t);
  return n && o
}

function a(e, t) {
  let {
    enabled: n
  } = i.x.getCurrentConfig({
    location: t
  }), o = (0, r.p)(e, t);
  return n && o
}

function s(e) {
  let {
    enabled: t
  } = i.a.useExperiment({
    location: e
  });
  return t
}