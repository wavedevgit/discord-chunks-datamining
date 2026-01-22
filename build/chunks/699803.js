/** Chunk was on web.js **/
/** chunk id: 699803, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk429913 = require("./429913.js"),
  Chunk989837 = require("./989837.js"),
  Chunk485878 = require("./485878.js");

function l() {
  let e = (0, i.bG)([s.A], () => s.A.initialState(), []),
    t = (0, a.h)(null == e ? true : e.applicationId);
  return r.useMemo(() => {
    if (null == e) return;
    let n = [{
      type: o.Wy.HOME
    }];
    return null != e.applicationId && null != t && n.push({
      type: o.Wy.APPLICATION,
      application: t
    }), n
  }, [e, t])
}