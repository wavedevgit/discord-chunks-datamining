/** Chunk was on 93886 **/
/** chunk id: 56706, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk750180 = require("./750180.js"),
  Chunk358820 = require("./358820.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk616257 = require("./616257.js"),
  Chunk493733 = require("./493733.js");

function x() {
  let [e, t] = Chunk73800.useState(30), a = () => {
    Chunk570140.Z.dispatch({
      type: "VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME",
      timeInSeconds: module
    })
  }, x = Chunk73800.useCallback(() => {
    Chunk570140.Z.dispatch({
      type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
      state: Chunk750180.O.LOADING
    })
  }, []);
  return <Chunk481060.zJl className={Chunk616257.panel}><div className={Chunk493733.panelInner}>{<Chunk481060.Text className={Chunk493733.panelHeader} variant={"text-lg/bold"}>{"Voice Filters"}</Chunk481060.Text>}{<div className={Chunk493733.panelRow}>{<Chunk481060.Text variant={"text-md/normal"}>{"Set number of seconds remaining in countdown"}</Chunk481060.Text>}{<Chunk481060.oil defaultValue={30} onChange={e => {
            t(parseInt(e))
          }} />}{<Chunk481060.zxk variant={"primary"} size={"sm"} text={"Set"} onClick={() => require()} />}</div>}{<div className={Chunk493733.panelRow}>{<Chunk481060.Text variant={"text-md/normal"}>{"Reset to API values"}</Chunk481060.Text>}{<Chunk481060.zxk variant={"primary"} size={"sm"} text={"Reset"} onClick={() => {
            (0, Chunk358820.wV)()
          }} />}</div>}{<div className={Chunk493733.panelRow}>{<Chunk481060.Text variant={"text-md/normal"}>{"Pretend the native module is loading so when you close your app it'll look as if it crashed on load"}</Chunk481060.Text>}{<Chunk481060.zxk variant={"primary"} size={"sm"} text={"Pretend"} onClick={x} />}</div>}{<div className={Chunk493733.panelRow}><Chunk481060.zxk variant={"primary"} size={"sm"} text={"Open voice filters panel"} onClick={() => {
            Chunk585483.S.dispatch(Chunk981631.CkL.OPEN_VOICE_FILTER_POPOUT)
          }} /></div>}</div></Chunk481060.zJl>
}