/** Chunk was on web.js **/
/** chunk id: 352981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o,
  y: () => a
});
var Chunk482833 = require("./482833.js"),
  Chunk981631 = require("./981631.js");

function a(e, t) {
  let {
    enabled: n
  } = r.c.useExperiment({
    guildId: null != e ? e : i.lds,
    location: t
  });
  return n
}

function o(e, t) {
  let {
    enabled: n
  } = r.c.getCurrentConfig({
    guildId: null != e ? e : i.lds,
    location: t
  });
  return n
}