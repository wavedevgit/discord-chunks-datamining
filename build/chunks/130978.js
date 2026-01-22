/** Chunk was on web.js **/
/** chunk id: 130978, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => s,
  w: () => a
});
var Chunk503278 = require("./503278.js"),
  Chunk652215 = require("./652215.js");

function a(e, t) {
  let {
    enabled: n
  } = r.l.useExperiment({
    guildId: null != e ? e : i.dJq,
    location: t
  });
  return n
}

function s(e, t) {
  let {
    enabled: n
  } = r.l.getCurrentConfig({
    guildId: null != e ? e : i.dJq,
    location: t
  });
  return n
}