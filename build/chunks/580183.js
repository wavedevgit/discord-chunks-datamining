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
  let t = s.Xr.useSetting(),
    n = s.UP.useSetting(),
    c = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
    u = (0, o.s)("use_derived_dm_spam_filter_setting");
  return t !== i.Xr.DEFAULT_UNSET ? t : (null == c ? true : c.nsfwAllowed) === false && u ? i.Xr.FRIENDS_AND_NON_FRIENDS : null != (e = l.O7.get(n)) ? e : i.Xr.NON_FRIENDS
}