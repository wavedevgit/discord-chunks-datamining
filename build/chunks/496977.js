/** Chunk was on web.js **/
/** chunk id: 496977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk835473 = require("./835473.js"),
  Chunk541099 = require("./541099.js"),
  Chunk695676 = require("./695676.js");

function l() {
  let e = (0, i.e7)([o.Z], () => o.Z.initialState(), []),
    t = (0, a.q)(null == e ? true : e.applicationId);
  return r.useMemo(() => {
    if (null == e) return;
    let n = [{
      type: s.gc.HOME
    }];
    return null != e.applicationId && null != t && n.push({
      type: s.gc.APPLICATION,
      application: t
    }), n
  }, [e, t])
}