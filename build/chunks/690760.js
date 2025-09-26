/** Chunk was on 74477 **/
/** chunk id: 690760, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  s: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk835473 = require("./835473.js"),
  Chunk350327 = require("./350327.js");

function a(e) {
  let t = (0, l.SM)().data,
    r = n.useMemo(() => {
      let r = new Set;
      for (let t of e) r.add(t.applicationId);
      if (null != t)
        for (let e of t) r.add(e);
      return [...r]
    }, [t, e]);
  return (0, i.Z)(r)
}