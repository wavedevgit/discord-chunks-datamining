/** Chunk was on web.js **/
/** chunk id: 139117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk120230 = require("./120230.js");

function p() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk565138.Z.Sizes.SMALLER;
  switch (module) {
    case Chunk565138.Z.Sizes.SMOL:
      return Chunk120230.size16;
    case Chunk565138.Z.Sizes.MINI:
      return Chunk120230.size20;
    case Chunk565138.Z.Sizes.SMALLER:
    default:
      return Chunk120230.size24
  }
}

function _() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk565138.Z.Sizes.SMALLER;
  switch (module) {
    case Chunk565138.Z.Sizes.SMOL:
    case Chunk565138.Z.Sizes.MINI:
      return "text-xxs/semibold";
    case Chunk565138.Z.Sizes.SMALLER:
    default:
      return "text-xs/medium"
  }
}

function m(e) {
  let {
    className: t,
    maxGuilds: n,
    guilds: i,
    onFocus: o,
    onClick: m,
    size: h = d.Z.Sizes.SMALLER,
    hideOverflowCount: g = false,
    disableGuildNameTooltip: E = false
  } = e, b = p(h);

  function y() {
    let e = i.length - n,
      t = e + 1,
      p = e > 0 && !g,
      y = Math.min(i.length, n) - 1,
      O = s()(i).take(n).map((e, t) => {
        let n = e.name,
          i = t === y && !p,
          o = a()(f.avatar, b, i && f.isLast);
        return E ? (0, r.jsx)("div", {
          className: o,
          children: (0, r.jsx)(d.Z, {
            guild: e,
            onClick: m,
            size: h,
            showTooltip: false
          })
        }) : (0, r.jsx)(l.u, {
          asContainer: true,
          text: n,
          children: (0, r.jsx)(d.Z, {
            guild: e,
            onClick: m,
            size: h
          })
        }, e.id)
      }).value();
    if (p) {
      let e = _(h);
      O[O.length - 1] = (0, r.jsx)(c.zx, {
        className: a()(f.overflow, b),
        onFocus: o,
        onClick: e => null == m ? true : m(e),
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.NONE,
        children: (0, r.jsx)(u.Text, {
          variant: e,
          children: t > 99 ? ">99" : "+".concat(t)
        })
      })
    }
    return O
  }
  return i.length <= 0 ? null : (0, r.jsx)("div", {
    className: a()(t, f.avatars),
    children: y()
  })
}