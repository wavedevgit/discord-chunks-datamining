/** Chunk was on web.js **/
/** chunk id: 434200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk962173 = require("./962173.js");

function o(e) {
  let t = (0, i.bG)([s.A], () => s.A.getAccounts().some(t => t.type === e)),
    n = r.useCallback(() => {
      if (null == e) return null;
      (0, a.A)({
        platformType: e,
        location: "Member List Content Popout"
      })
    }, [e]);
  if (null != e) return t ? true : n
}