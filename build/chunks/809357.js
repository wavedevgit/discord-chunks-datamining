/** Chunk was on web.js **/
/** chunk id: 809357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  o: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk522474 = require("./522474.js"),
  Chunk658785 = require("./658785.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let {
    location: t,
    options: n
  } = e, r = l(), {
    showKeybindIndicators: i
  } = o.Z.useExperiment({
    location: t
  }, n);
  return i && r
}

function l() {
  return !(0, Chunk442837.e7)([Chunk522474.Z], () => Chunk522474.Z.getWindowVisible(Chunk981631.KJ3.ACTIVITY_POPOUT))
}