/** Chunk was on 46746 **/
/** chunk id: 28798, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk475595 = require("./475595.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.js"),
  Chunk554431 = require("./554431.js");
let f = function(e) {
  let {
    quest: t
  } = e, n = (0, i.e7)([o.Z], () => o.Z.getState().theme), f = (0, l.wj)(n) ? c.BR.DARK : c.BR.LIGHT;
  return <div className={u.wrapper}><div className={u.content}>{<img src={(0, a.fh)(t, a.eC.GAME_TILE, f).url} alt={""} className={u.gameTile} />}{<div className={u.copy}>{<s.X6q color={"always-white"} variant={"text-sm/medium"}>{d.intl.format(d.t["5nMfBQ"], {
            gameTitle: t.config.messages.gameTitle
          })}</s.X6q>}{<s.Text className={u.subheading} color={"always-white"} variant={"text-xs/medium"}>{d.intl.string(d.t.mjbPtb)}</s.Text>}</div>}</div></div>
}