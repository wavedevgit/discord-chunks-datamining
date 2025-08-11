/** Chunk was on 93886 **/
/** chunk id: 820400, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592183 = require("./592183.js"),
  Chunk86419 = require("./86419.js"),
  Chunk447448 = require("./447448.js"),
  Chunk148444 = require("./148444.js");

function d() {
  return (0, Chunk447448.k)({
    location: "DevToolsWidgetsPanel",
    autoTrackExposure: false
  }) ? <div className={Chunk148444.container}><Chunk481060.hjN>{<Chunk481060.vwX>{"User Profile Widgets"}</Chunk481060.vwX>}{<Chunk481060.R94>{"Generate and test different widget configurations for user profiles."}</Chunk481060.R94>}{<div className={Chunk148444.buttonGroup}>{<Chunk481060.zxk variant={"primary"} text={"Favorite Game Widget"} onClick={() => (0, Chunk86419.qH)(Chunk296009.l.FAVORITE_GAMES)} />}{<Chunk481060.zxk variant={"primary"} text={"Current Game Widget"} onClick={() => (0, Chunk86419.qH)(Chunk296009.l.CURRENT_GAMES)} />}{<Chunk481060.zxk variant={"primary"} text={"Want to Play Game Widget"} onClick={() => (0, Chunk86419.qH)(Chunk296009.l.WANT_TO_PLAY_GAMES)} />}{<Chunk481060.zxk variant={"primary"} text={"Played Game Widget"} onClick={() => (0, Chunk86419.qH)(Chunk296009.l.PLAYED_GAMES)} />}{<Chunk481060.zxk variant={"active"} text={"Show Empty State"} onClick={() => {
            Chunk592183.Z.setPendingWidgets([])
          }} />}{<Chunk481060.zxk variant={"critical-primary"} text={"Clear Pending Changes"} onClick={() => {
            Chunk592183.Z.clearPendingWidgets()
          }} />}</div>}{<div className={Chunk148444.buttonGroup}>{<Chunk481060.R94>{"Backend integration:"}</Chunk481060.R94>}{<Chunk481060.zxk variant={"active"} text={"Save Widgets State"} onClick={() => (0, Chunk86419.X6)()} />}{<Chunk481060.zxk variant={"critical-primary"} text={"Clear Saved Widgets"} onClick={() => (0, Chunk86419.tk)()} />}</div>}</Chunk481060.hjN></div> : null
}