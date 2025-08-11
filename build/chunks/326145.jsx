/** Chunk was on 1272 **/
/** chunk id: 326145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk877604 = require("./877604.js"),
  Chunk998730 = require("./998730.js"),
  Chunk546247 = require("./546247.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk302221 = require("./302221.js"),
  Chunk745752 = require("./745752.js"),
  Chunk17181 = require("./17181.js"),
  Chunk388032 = require("./388032.js"),
  Chunk150718 = require("./150718.js"),
  Chunk113728 = require("./113728.js");

function y(e) {
  let {
    guildId: t,
    channelId: n
  } = e, {
    ref: l,
    width: y,
    height: v
  } = (0, c.ZP)(), I = i.useCallback(() => {
    null != t && null != n && ((0, m.I1)(t), (0, b.default)({
      guildId: t,
      returnChannelId: n
    }))
  }, [t, n]), C = (0, o.e7)([f.Z], () => f.Z.getGuild(t)), S = i.useMemo(() => null == C ? null : h.ZP.getGuildSplashURL({
    id: C.id,
    splash: C.splash
  }), [C]), N = (0, d.N)(S);
  return <div className={a()(O.outerWrapping, E.main, {
      [E.fullBorderWithGradient]: null == S
    })} ref={l}>{null != S ? <u.Z className={E.artwork} src={S} width={y} height={v} imageClassName={E.cover} /> : <p.Z />}{null != N && null != S && <div className={E.gradient} style={{
        background: "linear-gradient(180deg, ".concat((0, g.aD)(N, .16), " 0%, ").concat((0, g.aD)(N, 1), " 100%)")
      }} />}{null != S && <div className={E.gradient} />}{<div className={a()(O.explainerContainer, O.transparentBackground)}>{<div className={O.header}>{<s.X6q variant={"heading-xxl/normal"} color={"always-white"}>{_.intl.string(_.t.CCmhpK)}</s.X6q>}{<s.Text variant={"text-lg/normal"} color={"always-white"}>{_.intl.string(_.t.gRAHcX)}</s.Text>}</div>}{<s.zxk variant={"overlay-primary"} size={"md"} text={_.intl.string(_.t.VVFjAA)} onClick={I} />}</div>}</div>
}