/** Chunk was on web.js **/
/** chunk id: 305347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ft: () => p,
  R$: () => _,
  ZP: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk768581 = require("./768581.js"),
  Chunk624138 = require("./624138.js"),
  Chunk272714 = require("./272714.js");

function _(e) {
  let {
    guildName: t,
    iconSize: n,
    className: i
  } = e, a = (0, d.Zg)(t);
  return (0, r.jsx)(l.ZP, {
    mask: l.ZP.Masks.CLAN_ICON,
    width: n,
    height: n,
    className: i,
    children: (0, r.jsx)("div", {
      className: o()(f.guildIconImage, f.acronym),
      children: a
    })
  })
}

function p(e) {
  let {
    guildId: t,
    guildName: n,
    guildIcon: i,
    iconSize: a,
    className: _,
    acronymClassName: p,
    animate: h
  } = e, m = (0, s.e7)([c.Z], () => c.Z.isFocused()), g = (0, u.pU)(i) ? i : u.ZP.getGuildIconURL({
    id: t,
    icon: i,
    size: a,
    canAnimate: h && m
  });
  if (null == g) {
    let e = (0, d.Zg)(n);
    return (0, r.jsx)(l.ZP, {
      mask: l.ZP.Masks.CLAN_ICON,
      width: a,
      height: a,
      className: _,
      children: (0, r.jsx)("div", {
        className: o()(f.guildIconImage, f.acronym, p),
        children: e
      })
    })
  }
  return (0, r.jsx)(l.ZP, {
    mask: l.ZP.Masks.CLAN_ICON,
    width: a,
    height: a,
    className: _,
    children: (0, r.jsx)("img", {
      src: g,
      alt: n,
      className: f.guildIconImage
    })
  })
}
let h = Chunk473749.memo(function(e) {
  let {
    guild: t,
    iconSize: n,
    className: i,
    animate: a
  } = e;
  return (0, r.jsx)(p, {
    guildName: t.name,
    guildId: t.id,
    guildIcon: t.icon,
    iconSize: n,
    className: i,
    animate: a
  })
})