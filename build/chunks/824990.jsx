/** Chunk was on 22988 **/
/** chunk id: 824990, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk8426 = require("./8426.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773100 = require("./773100.js");
let d = function(e) {
  var t;
  let {
    channel: n,
    end: d
  } = e, u = i.useCallback(() => {
    (0, s.r2)({
      channelId: n.id,
      title: n.name,
      description: "",
      emoji: null,
      icon: null
    })
  }, [n]), m = null != (t = (0, a.KS)(n)) ? t : l.VL1;
  return <r.Fragment>{<div className={c.suggestedChannel}>{<m className={c.suggestedChannelIcon} />}{<l.Text className={c.suggestedChannelText} variant={"text-sm/normal"}>{n.name}</l.Text>}{<l.zxk size={"sm"} variant={"primary"} onClick={u} text={o.intl.string(o.t.OYkgVl)} />}</div>}{d && <div className={c.suggestedSeparator} />}</r.Fragment>
}