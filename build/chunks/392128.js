/** Chunk was on 96811 **/
/** chunk id: 392128, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  e: () => i
}), require("./896048.js");
var Chunk544420 = require("./544420.js"),
  Chunk15285 = require("./15285.js"),
  Chunk403362 = require("./403362.js");
async function i() {
  let e = l.Ay.getRunningGames();
  return (await Promise.all(e.map(async e => {
    let t;
    if (null == e.name) return null;
    try {
      t = await n.A.identifyGame(e.pid, e.name)
    } catch (e) {
      return null
    }
    let r = e.windowHandle,
      l = e.name,
      s = t.icon;
    return null != r && null != l && null != s ? {
      id: "window:".concat(r),
      name: l,
      url: "data:image/bmp;base64,".concat(s)
    } : null
  }))).filter(s.Vq)
}