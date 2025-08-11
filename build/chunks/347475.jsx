/** Chunk was on 75708 **/
/** chunk id: 347475, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk646476 = require("./646476.js"),
  Chunk736519 = require("./736519.js"),
  Chunk388032 = require("./388032.js"),
  Chunk944680 = require("./944680.js"),
  Chunk568147 = require("./568147.js"),
  Chunk332796 = require("./332796.js");
let h = e => {
  let {
    className: t,
    location: n,
    analyticsLocation: r
  } = e, {
    analyticsLocations: h
  } = (0, o.ZP)(n), f = (0, c.rK)(), {
    enabled: b
  } = c.RO.useExperiment({
    location: "GiftNitro"
  }, {
    autoTrackExposure: f
  }), x = b && f;
  return <o.Gt value={h}><div className={s()(m.container, t)}>{<div className={m.textContainer}>{<l.X6q variant={"heading-lg/extrabold"} className={m.heading}>{x ? u.intl.string(u.t.LB3bJC) : u.intl.string(u.t.Ve9Ge3)}</l.X6q>}{<l.Text variant={"text-sm/medium"}>{x ? u.intl.string(u.t.u49cn5) : u.intl.string(u.t.yQ06u7)}</l.Text>}{<d.Z className={m.giftCardButton} textOptions={{
            textOverride: u.intl.string(u.t.Ve9Ge3),
            textClassName: m.giftButtonCTA
          }} color={a.zx.Colors.CUSTOM} premiumModalAnalyticsLocation={r} />}</div>}{<img src={x ? g : p} className={m.bannerImage} alt={"gift nitro banner"} />}</div></o.Gt>
}