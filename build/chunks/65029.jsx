/** Chunk was on web.js **/
/** chunk id: 65029, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk28531 = require("./28531.jsx"),
  Chunk819758 = require("./819758.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.js"),
  Chunk669486 = require("./669486.js");
let f = e => {
    let {
      emojiSubCategory: t
    } = e;
    return <div className={o()(d.badgeLabel, t === c.t0.TOP_GUILD_EMOJI ? d.topGuildEmojiBadge : d.newlyAddedBadge)}>{t === c.t0.TOP_GUILD_EMOJI ? <s.Z foreground={d.newlyAddedBadgeIcon} /> : <l.Z foreground={d.newlyAddedBadgeIcon} />}{<a.Text variant={"text-sm/semibold"} color={"always-white"}>{t === c.t0.TOP_GUILD_EMOJI ? u.intl.string(u.t.TR2B4e) : u.intl.string(u.t["1aZ4V1"])}</a.Text>}</div>
  },
  _ = e => {
    let {
      className: t,
      graphicPrimary: n,
      graphicSecondary: i,
      titlePrimary: s,
      titleSecondary: l,
      isFavorite: _ = false,
      emojiSubCategory: p = c.t0.NONE
    } = e;
    return <div className={o()(d.inspector, t)}>{<div className={d.graphicPrimary} aria-hidden={true}>{n}</div>}{<div className={d.textWrapper}>{<a.Text className={d.titlePrimary} variant={"text-md/semibold"}>{_ ? <a.r7p size={"custom"} color={"currentColor"} aria-label={_ ? u.intl.formatToPlainString(u.t["+fdUkZ"], {
              names: s
            }) : true} width={15} height={15} className={d.favorite} /> : null}{s}</a.Text>}{null != l && <a.Text className={d.titleSecondary} variant={"text-xs/normal"}>{l}</a.Text>}</div>}{p === c.t0.NONE ? null != i && <div className={d.graphicSecondary} aria-hidden={true}>{i}</div> : <f emojiSubCategory={p} />}</div>
  }