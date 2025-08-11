/** Chunk was on 93886 **/
/** chunk id: 272193, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk441623 = require("./441623.js"),
  Chunk246992 = require("./246992.js"),
  Chunk455459 = require("./455459.js"),
  Chunk616257 = require("./616257.js");

function m() {
  let e = (0, Chunk442837.e7)([Chunk441623.Z], () => Chunk441623.Z.getDevToolTotalFriendAnniversaries()),
    t = e => {
      s.Z.dispatch({
        type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT",
        total: e
      })
    };
  return <Chunk481060.zJl className={Chunk616257.panel}><div className={Chunk455459.panelInner}>{<Chunk481060.Text className={Chunk455459.panelHeader} variant={"text-lg/bold"}>{"Friend Anniversary"}</Chunk481060.Text>}{<div className={Chunk455459.panelRow}>{<Chunk481060.Text variant={"text-md/normal"}>{"Reset gift message cooldown"}</Chunk481060.Text>}{<Chunk481060.zxk variant={"primary"} size={"sm"} text={"Reset"} onClick={() => {
            Chunk570140.Z.dispatch({
              type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET"
            })
          }} />}</div>}{<div className={Chunk455459.panelRow}>{<Chunk481060.Text variant={"text-md/normal"}>{"Reset badge cooldown"}</Chunk481060.Text>}{<Chunk481060.zxk variant={"primary"} size={"sm"} text={"Reset"} onClick={() => {
            Chunk570140.Z.dispatch({
              type: "DEV_TOOLS_FRIENDS_TAB_BADGE_COOLDOWN_RESET"
            })
          }} />}</div>}{<div className={Chunk455459.panelRow}>{<Chunk481060.Text variant={"text-md/normal"}>{"Clear last seen friend anniversaries in All Friends"}</Chunk481060.Text>}{<Chunk481060.zxk variant={"primary"} size={"sm"} text={"Clear"} onClick={() => {
            Chunk570140.Z.dispatch({
              type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET"
            })
          }} />}</div>}{<div className={Chunk455459.panelRow}>{<Chunk481060.Text variant={"text-md/normal"}>{"Select number of friend anniversaries to generate"}</Chunk481060.Text>}{<Chunk481060.q4e className={Chunk455459.anniversaryCountSelect} options={[{
            label: "None",
            value: null
          }, {
            label: "1",
            value: 1
          }, {
            label: "2",
            value: 2
          }, {
            label: "3",
            value: 3
          }, {
            label: "4",
            value: 4
          }, {
            label: "5",
            value: 5
          }, {
            label: "10",
            value: 10
          }, {
            label: "25",
            value: 25
          }]} value={module} onChange={e => {
            t(e)
          }} popoutLayerContext={Chunk246992.O$} />}{<Chunk755721.zx look={Chunk755721.zx.Looks.LINK} className={Chunk455459.anniversaryCountResetButton} onClick={() => {
            exports(null)
          }}>{"Reset to None"}</Chunk755721.zx>}</div>}</div></Chunk481060.zJl>
}