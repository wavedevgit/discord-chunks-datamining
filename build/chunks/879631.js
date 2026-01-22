/** Chunk was on 78888 **/
/** chunk id: 879631, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $: () => s
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : r.intl.string(r.t.Yl1D84),
    l = i().duration(e, "seconds");
  return l.days() > 0 ? r.intl.formatToPlainString(t ? r.t.GBLpQ8 : r.t["k2UNz+"], {
    days: l.days()
  }) : l.hours() > 0 ? r.intl.formatToPlainString(t ? r.t.rhY1Rs : r.t.xCjYxK, {
    hours: l.hours()
  }) : l.minutes() > 0 ? r.intl.formatToPlainString(t ? r.t["XIGt+W"] : r.t.iXLF9W, {
    minutes: l.minutes()
  }) : e > 0 ? r.intl.formatToPlainString(t ? r.t.pyvjRp : r.t.geSp4K, {
    seconds: l.seconds()
  }) : t ? r.intl.string(r.t.Yl1D84) : n
}