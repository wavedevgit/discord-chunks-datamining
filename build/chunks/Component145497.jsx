/** Chunk was on web.js **/
/** chunk id: 145497, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => h,
  B$: () => p,
  j: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk486020 = require("./486020.js"),
  Chunk240248 = require("./240248.js"),
  Chunk265225 = require("./265225.js");

function p(e) {
  let {
    guildName: t,
    iconSize: n,
    className: i
  } = e, a = (0, d.oN)(t);
  return (0, r.jsx)(l.Ay, {
    mask: l.Ay.Masks.CLAN_ICON,
    width: n,
    height: n,
    className: i,
    children: (0, r.jsx)("div", {
      className: s()(f.O, f.q),
      children: a
    })
  })
}

function _(e) {
  let {
    guildId: t,
    guildName: n,
    guildIcon: i,
    iconSize: a,
    className: p,
    acronymClassName: _,
    animate: h
  } = e, m = (0, o.bG)([c.A], () => c.A.isFocused()), g = (0, u.V0)(i) ? i : u.Ay.getGuildIconURL({
    id: t,
    icon: i,
    size: a,
    canAnimate: h && m
  });
  if (null == g) {
    let e = (0, d.oN)(n);
    return (0, r.jsx)(l.Ay, {
      mask: l.Ay.Masks.CLAN_ICON,
      width: a,
      height: a,
      className: p,
      children: (0, r.jsx)("div", {
        className: s()(f.O, f.q, _),
        children: e
      })
    })
  }
  return (0, r.jsx)(l.Ay, {
    mask: l.Ay.Masks.CLAN_ICON,
    width: a,
    height: a,
    className: p,
    children: (0, r.jsx)("img", {
      src: g,
      alt: n,
      className: f.O
    })
  })
}
let h = Chunk64700.memo(function(e) {
  let {
    guild: t,
    iconSize: n,
    className: i,
    animate: a
  } = e;
  return (0, r.jsx)(_, {
    guildName: t.name,
    guildId: t.id,
    guildIcon: t.icon,
    iconSize: n,
    className: i,
    animate: a
  })
})