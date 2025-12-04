/** Chunk was on 86915 **/
/** chunk id: 129724, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.intl.string(r.t.Yl1D84),
    i = l().duration(e, "seconds");
  return i.days() > 0 ? r.intl.formatToPlainString(t ? r.t.GBLpQ8 : r.t["k2UNz+"], {
    days: i.days()
  }) : i.hours() > 0 ? r.intl.formatToPlainString(t ? r.t.rhY1Rs : r.t.xCjYxK, {
    hours: i.hours()
  }) : i.minutes() > 0 ? r.intl.formatToPlainString(t ? r.t["XIGt+W"] : r.t.iXLF9W, {
    minutes: i.minutes()
  }) : e > 0 ? r.intl.formatToPlainString(t ? r.t.pyvjRp : r.t.geSp4K, {
    seconds: i.seconds()
  }) : t ? r.intl.string(r.t.Yl1D84) : n
}