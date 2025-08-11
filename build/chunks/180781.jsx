/** Chunk was on 77942 **/
/** chunk id: 180781, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk48217 = require("./48217.jsx"),
  Chunk26323 = require("./26323.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk981631 = require("./981631.js"),
  Chunk30513 = require("./30513.js"),
  Chunk388032 = require("./388032.js"),
  Chunk273233 = require("./273233.js");

function b(t) {
  let {
    analyticsSection: e,
    analyticsPage: n,
    isGIF: b,
    banner: g
  } = t, v = (0, r.e7)([_.Z], () => _.Z.getGuildId()), C = (0, r.e7)([u.Z], () => u.Z.getGuild(v)), {
    analyticsLocations: x
  } = (0, l.ZP)();
  return null == C || C.features.has(d.oNc.ANIMATED_BANNER) || !b && C.features.has(d.oNc.BANNER) ? null : <div className={p.container}>{<a.$Eu color={a.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK} className={p.guildBoostingIcon} />}{<a.Text color={"header-primary"} variant={"text-sm/semibold"}>{m.intl.string(m.t["56M7xc"])}</a.Text>}{<i.zx look={i.zx.Looks.LINK} color={i.zx.Colors.LINK} className={p.subscribeButton} onClick={() => {
        if (null == C) return;
        let t = {
          section: e,
          page: n,
          object: d.qAy.UPSELL_HEADER
        };
        null != g ? (0, c.c)({
          analyticsLocations: x,
          analyticsLocation: t,
          guild: C,
          isGIF: b,
          banner: g
        }) : (0, s.Z)({
          analyticsLocations: x,
          analyticsSourceLocation: t,
          guild: C,
          perks: b ? (0, f.zC)() : (0, f.XO)()
        })
      }}>{m.intl.string(m.t.WUHdZW)}</i.zx>}</div>
}