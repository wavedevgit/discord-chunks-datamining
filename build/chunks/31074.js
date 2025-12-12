/** Chunk was on web.js **/
/** chunk id: 31074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk553795 = require("./553795.js");

function s(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getAccounts().some(t => t.type === e)),
    n = r.useCallback(() => {
      if (null == e) return null;
      (0, o.Z)({
        platformType: e,
        location: "Member List Content Popout"
      })
    }, [e]);
  if (null != e) return t ? true : n
}