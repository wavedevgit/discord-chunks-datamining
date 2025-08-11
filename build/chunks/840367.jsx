/** Chunk was on 11776 **/
/** chunk id: 840367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk624238 = require("./624238.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314897 = require("./314897.js"),
  Chunk881410 = require("./881410.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk196880 = require("./196880.js");
let f = {
  [Chunk296009.l.FAVORITE_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.sUQar6),
  [Chunk296009.l.CURRENT_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.SqNnur),
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.bWSQwc),
  [Chunk296009.l.PLAYED_GAMES]: () => Chunk388032.intl.string(Chunk388032.t.scOKER)
};

function m(e) {
  let {
    userId: t,
    widgetType: n,
    headingId: m,
    reachedMaxGamesLimit: p
  } = e, g = (0, o.e7)([c.default], () => c.default.getId() === t), b = f[n](), j = g ? n === i.l.FAVORITE_GAMES ? d.intl.string(d.t.wiXdER) : d.intl.format(d.t["zR1+09"], {
    numGames: l.k[n]
  }) : true;
  return <div className={u.headerRow}>{<div className={u.title}>{<a.X6q variant={"heading-sm/medium"} color={"text-default"} id={m}>{b}</a.X6q>}{null != j && <a.Text variant={"text-xs/normal"} color={"text-secondary"}>{j}</a.Text>}</div>}{g && <div className={u.actions}>{<s.Z disabled={p} widgetType={n} />}{<a.hU icon={a.xhG} variant={"secondary"} aria-label={d.intl.string(d.t.xpSHSk)} onClick={() => {}} size={"sm"} />}</div>}</div>
}