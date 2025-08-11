/** Chunk was on 75708 **/
/** chunk id: 518062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk600164 = require("./600164.js"),
  Chunk122890 = require("./122890.js"),
  Chunk110818 = require("./110818.jsx"),
  Chunk523726 = require("./523726.js");

function u(e) {
  let {
    purchaseState: t,
    currentStep: n,
    onClose: u
  } = e, [m, p] = (0, o.z)({
    purchaseState: t,
    currentStep: n,
    initialScene: c.fe.Scenes.ENTRY,
    purchaseScene: c.fe.Scenes.STARS,
    errorScene: c.fe.Scenes.ERROR,
    successScene: c.fe.Scenes.SUCCESS
  }), g = (0, r.e7)([a.Z], () => a.Z.useReducedMotion);
  return <s.xBx align={l.Z.Align.START} className={d.header} separator={false}>{<c.fe className={d.animation} nextScene={m} onScenePlay={e => p(c.fe.getNextScene(e))} pauseWhileUnfocused={false} pause={g} />}{<div className={d.headerTitle} />}{<s.olH onClick={u} className={d.closeButton} />}</s.xBx>
}