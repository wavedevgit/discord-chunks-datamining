/** Chunk was on 47841 **/
/** chunk id: 192701, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => a
});
var Chunk417597 = require("./417597.js"),
  Chunk555337 = require("./555337.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function a() {
  let e = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
    t = (0, r.bG)([i.A], () => i.A.getProps().mfaLevel);
  return {
    isUserMFAEnabled: (null == e ? true : e.mfaEnabled) === true,
    isModerationMFAEnabled: t === s.EkJ.ELEVATED
  }
}