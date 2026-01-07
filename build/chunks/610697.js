/** Chunk was on web.js **/
/** chunk id: 610697, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823162 = require("./823162.js"),
  Chunk355298 = require("./355298.js");
let l = new Set(["GB"]);

function c() {
  let e = (0, i.e7)([s.Z], () => s.Z.getUserCountryCode()),
    t = false === (0, i.e7)([a.default], () => {
      var e;
      return null == (e = a.default.getCurrentUser()) ? true : e.nsfwAllowed
    });
  return r.useEffect(() => {
    null == e && (0, o.hi)()
  }, [e]), null != e && !!l.has(e.alpha2) && !!t
}