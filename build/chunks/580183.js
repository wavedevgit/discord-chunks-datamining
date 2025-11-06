/** Chunk was on web.js **/
/** chunk id: 580183, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk594174 = require("./594174.js"),
  Chunk312870 = require("./312870.js"),
  Chunk695346 = require("./695346.js"),
  Chunk973005 = require("./973005.js");

function c() {
  var e;
  let t = Chunk695346.Xr.useSetting(),
    n = Chunk695346.UP.useSetting(),
    c = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    u = (0, Chunk312870.s)("use_derived_dm_spam_filter_setting");
  return exports !== Chunk524437.Xr.DEFAULT_UNSET ? exports : (null == c ? true : c.nsfwAllowed) === false && u ? Chunk524437.Xr.FRIENDS_AND_NON_FRIENDS : null != (e = Chunk973005.O7.get(require)) ? module : Chunk524437.Xr.NON_FRIENDS
}