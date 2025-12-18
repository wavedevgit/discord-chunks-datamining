/** Chunk was on 40184 **/
/** chunk id: 195045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk785925 = require("./785925.js"),
  Chunk805422 = require("./805422.js");
let s = () => {
  let e = (0, Chunk442837.e7)([Chunk805422.Z], () => Chunk805422.Z.assets);
  return Chunk473749.useEffect(() => {
    let t = async () => {
      let e = await Chunk785925.ZP.getAssets();
      null != module && Chunk570140.Z.dispatch({
        type: "HAVEN_GOT_ASSETS",
        assets: module.body
      })
    };
    null == module && exports()
  }, [module]), module
}