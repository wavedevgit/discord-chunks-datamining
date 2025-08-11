/** Chunk was on web.js **/
/** chunk id: 305347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ft: () => _,
  R$: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk686546 = require("./686546.js"),
  Chunk451478 = require("./451478.js"),
  Chunk768581 = require("./768581.js"),
  Chunk624138 = require("./624138.js"),
  Chunk475779 = require("./475779.js");

function f(e) {
  let {
    guildName: t,
    iconSize: n,
    className: i
  } = e, a = (0, u.Zg)(t);
  return <s.ZP mask={s.ZP.Masks.CLAN_ICON} width={n} height={n} className={i}><div className={o()(d.guildIconImage, d.acronym)}>{a}</div></s.ZP>
}

function _(e) {
  let {
    guildId: t,
    guildName: n,
    guildIcon: i,
    iconSize: f,
    className: _,
    acronymClassName: p,
    animate: h
  } = e, m = (0, a.e7)([l.Z], () => l.Z.isFocused()), g = (0, c.pU)(i) ? i : c.ZP.getGuildIconURL({
    id: t,
    icon: i,
    size: f,
    canAnimate: h && m
  });
  if (null == g) {
    let e = (0, u.Zg)(n);
    return <s.ZP mask={s.ZP.Masks.CLAN_ICON} width={f} height={f} className={_}><div className={o()(d.guildIconImage, d.acronym, p)}>{e}</div></s.ZP>
  }
  return <s.ZP mask={s.ZP.Masks.CLAN_ICON} width={f} height={f} className={_}><img src={g} alt={n} className={d.guildIconImage} /></s.ZP>
}