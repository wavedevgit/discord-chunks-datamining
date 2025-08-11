/** Chunk was on 37720 **/
/** chunk id: 357632, original params: t,i,r (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk106351 = require("./106351.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk388032 = require("./388032.js");
let o = t => {
  let {
    channel: i,
    onClose: r,
    onConfirm: o,
    transitionState: c
  } = t, {
    title: d,
    body: h,
    confirm: x
  } = function(t) {
    let i = (0, l.ZP)(t, true);
    return t.type === e.d.GUILD_CATEGORY ? {
      title: s.intl.string(s.t["4VpUw8"]),
      body: s.intl.format(s.t.GuhMa2, {
        channelName: i
      }),
      confirm: s.intl.string(s.t.xOscRk)
    } : {
      title: s.intl.string(s.t["4VpUw8"]),
      body: s.intl.format(s.t["2z/hBg"], {
        channelName: i
      }),
      confirm: s.intl.string(s.t.gGs6TU)
    }
  }(i);
  return <a.Y0X transitionState={c} aria-label={d} parentComponent={"RemoveFromFavoritesModal"}>{<a.xBx separator={false}><a.X6q variant={"heading-lg/semibold"}>{d}</a.X6q></a.xBx>}{<a.hzk><a.Text variant={"text-md/normal"} color={"header-primary"}>{h}</a.Text></a.hzk>}{<a.mzw><a.hE2 direction={"horizontal-reverse"}>{<a.zxk variant={"critical-primary"} text={x} onClick={o} />}{<a.zxk variant={"secondary"} text={s.intl.string(s.t["ETE/oK"])} onClick={r} />}</a.hE2></a.mzw>}</a.Y0X>
}