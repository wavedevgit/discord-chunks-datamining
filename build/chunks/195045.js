/** Chunk was on web.js **/
/** chunk id: 195045, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk785925 = require("./785925.js"),
  Chunk805422 = require("./805422.js");
let l = () => {
  let e = (0, i.e7)([s.Z], () => s.Z.assets);
  return r.useEffect(() => {
    let t = async () => {
      let e = await o.ZP.getAssets();
      null != e && a.Z.dispatch({
        type: "HAVEN_GOT_ASSETS",
        assets: e.body
      })
    };
    null == e && t()
  }, [e]), e
}