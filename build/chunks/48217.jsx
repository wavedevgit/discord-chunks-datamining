/** Chunk was on 72891 **/
/** chunk id: 48217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk269128 = require("./269128.js"),
  Chunk358555 = require("./358555.js"),
  Chunk267642 = require("./267642.js"),
  Chunk26323 = require("./26323.jsx"),
  Chunk30513 = require("./30513.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk309818 = require("./309818.js");

function _(e) {
  let {
    guild: t,
    banner: n
  } = e;
  return <div className={f.guildBanner} style={{
      backgroundImage: "url(".concat(n)
    }}><div className={f.guildHeader}>{<r.Z guild={t} isBannerVisible={true} />}{<a.X6q className={f.guildName} variant={"heading-md/semibold"}>{t.name}</a.X6q>}{<o.Z className={f.dropdown} open={false} />}</div></div>
}

function g(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    guild: a,
    isGIF: o,
    banner: r
  } = e, f = o ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
  null != f && (0, c.Z)({
    analyticsLocations: t,
    analyticsSourceLocation: n,
    guild: a,
    headerProps: {
      title: u.intl.string(u.t["rv2H+/"]),
      subtitle: function(e, t) {
        let n = (0, l.nW)(e);
        return t ? u.intl.formatToPlainString(u.t["TR/Uys"], {
          targetLevelOrPlan: n
        }) : u.intl.formatToPlainString(u.t.B253V1, {
          targetLevelOrPlan: n
        })
      }(f, o),
      image: <_ guild={a} banner={r} />
    },
    perkIntro: u.intl.string(u.t.ZuItcH),
    perks: o ? (0, s.zC)() : (0, s.XO)()
  })
}