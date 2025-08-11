/** Chunk was on 75708 **/
/** chunk id: 134795, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk654904 = require("./654904.js"),
  Chunk993413 = require("./993413.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.js"),
  Chunk771066 = require("./771066.js");

function g(e) {
  let {
    showRemoveBannerButton: t,
    errors: n,
    onBannerChange: r,
    guildId: g,
    className: h,
    disabled: f = false,
    showPremiumIcon: b = true,
    isTryItOutFlow: x = false,
    forcedDivider: _,
    withHighlight: j = false
  } = e, {
    newestAnalyticsLocation: E
  } = (0, o.ZP)(), C = j ? l.gtL : a.zx;
  return <d.Z className={h} title={m.intl.string(m.t.Vgdusr)} showPremiumIcon={b} errors={n} disabled={f} forcedDivider={_}><div className={p.buttonsContainer}>{<C className={s()({
          [p.buttonHighlighted]: j
        })} size={a.zx.Sizes.SMALL} onClick={() => (0, c.$r)({
          uploadType: u.pC.BANNER,
          analyticsSource: E,
          guildId: g,
          isTryItOutFlow: x
        })}>{m.intl.string(m.t.N0bC3N)}</C>}{t && <div data-button-hoisted-classname-wrapper={true} className={p.removeButton}><l.zxk variant={"secondary"} size={"sm"} text={null != g ? m.intl.string(m.t.jHlJNT) : m.intl.string(m.t.tT9n7O)} onClick={() => r(null)} /></div>}</div></d.Z>
}