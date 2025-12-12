/** Chunk was on 44183 **/
/** chunk id: 830461, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => s
}), require("./388685.js");
var Chunk224706 = require("./224706.js"),
  Chunk594190 = require("./594190.js"),
  Chunk823379 = require("./823379.js");
async function s() {
  let e = Chunk594190.ZP.getRunningGames();
  return (await Promise.all(module.map(async e => {
    let t;
    if (null == e.name) return null;
    try {
      t = await r.Z.identifyGame(e.pid, e.name)
    } catch (e) {
      return null
    }
    let n = e.windowHandle,
      i = e.name,
      l = t.icon;
    return null != n && null != i && null != l ? {
      id: "window:".concat(n),
      name: i,
      url: "data:image/bmp;base64,".concat(l)
    } : null
  }))).filter(Chunk823379.lm)
}