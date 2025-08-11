/** Chunk was on 22988 **/
/** chunk id: 372444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk678558 = require("./678558.js"),
  Chunk388032 = require("./388032.js"),
  Chunk669116 = require("./669116.js");
let g = e => {
  let {
    guild: t,
    analyticsLocation: n,
    className: i,
    buttonProps: l = {
      color: a.Tt.BRAND_INVERTED,
      text: u.intl.string(u.t.oqweNz)
    }
  } = e, {
    color: s,
    text: o
  } = l, c = t.premiumTier + 1;
  return <d.Z color={s} analyticsLocation={n} guild={t} buttonText={o} targetBoostedGuildTier={c} className={i} />
};

function p(e) {
  let {
    header: t,
    text: i,
    analyticsLocation: a,
    guild: d,
    className: u,
    textColor: p,
    headerColor: h,
    buttonProps: f
  } = e, {
    analyticsLocations: b
  } = (0, c.ZP)(o.Z.GUILD_BOOSTING_UPSELL_BANNER);
  return <c.Gt value={b}><div className={l()(m.banner, u)}>{<img className={m.__invalid_headerGraphic} alt={""} src={n(322393)} />}{<div className={m.content}>{<s.Text variant={"text-lg/semibold"} color={null != h ? h : "always-white"} className={m.header}>{t}</s.Text>}{<s.Text variant={"text-sm/normal"} color={null != p ? p : "always-white"}>{i}</s.Text>}</div>}{<div className={m.ctaContainer}><g guild={d} analyticsLocation={a} className={m.button} buttonProps={f} /></div>}</div></c.Gt>
}