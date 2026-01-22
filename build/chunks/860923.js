/** Chunk was on web.js **/
/** chunk id: 860923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk418126 = require("./418126.js"),
  Chunk998740 = require("./998740.js");
let l = () => {
  let e = (0, i.bG)([o.A], () => o.A.assets);
  return r.useEffect(() => {
    let t = async () => {
      let e = await s.Ay.getAssets();
      null != e && a.h.dispatch({
        type: "HAVEN_GOT_ASSETS",
        assets: e.body
      })
    };
    null == e && t()
  }, [e]), e
}