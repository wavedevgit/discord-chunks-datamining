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
  let e = (0, Chunk442837.e7)([Chunk355298.Z], () => Chunk355298.Z.getUserCountryCode()),
    t = false === (0, Chunk442837.e7)([Chunk594174.default], () => {
      var e;
      return null == (e = Chunk594174.default.getCurrentUser()) ? true : module.nsfwAllowed
    });
  return Chunk473749.useEffect(() => {
    null == module && (0, Chunk823162.hi)()
  }, [module]), null != module && !!l.has(module.alpha2) && !!exports
}