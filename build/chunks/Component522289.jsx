/** Chunk was on web.js **/
/** chunk id: 522289, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk581143 = require("./581143.js");

function f() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk565138.Z.Sizes.SMALLER;
  switch (module) {
    case Chunk565138.Z.Sizes.SMOL:
      return Chunk581143.size16;
    case Chunk565138.Z.Sizes.MINI:
      return Chunk581143.size20;
    case Chunk565138.Z.Sizes.SMALLER:
    default:
      return Chunk581143.size24
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

function p(e) {
  let {
    className: t,
    maxGuilds: n,
    guilds: i,
    onFocus: o,
    onClick: p,
    size: h = u.Z.Sizes.SMALLER,
    hideOverflowCount: m = false,
    disableGuildNameTooltip: g = false
  } = e, E = f(h);

  function b() {
    let e = i.length - n,
      t = e + 1,
      f = e > 0 && !m,
      b = Math.min(i.length, n) - 1,
      y = s()(i).take(n).map((e, t) => {
        let n = e.name,
          i = t === b && !f,
          o = a()(d.avatar, E, i && d.isLast);
        return g ? (0, r.jsx)("div", {
          className: o,
          children: (0, r.jsx)(u.Z, {
            guild: e,
            onClick: p,
            size: h,
            showTooltip: false
          })
        }) : (0, r.jsx)(c.DY3, {
          text: n,
          className: o,
          children: (0, r.jsx)(u.Z, {
            guild: e,
            onClick: p,
            size: h
          })
        }, e.id)
      }).value();
    if (f) {
      let e = _(h);
      y[y.length - 1] = (0, r.jsx)(l.zx, {
        className: a()(d.overflow, E),
        onFocus: o,
        onClick: e => null == p ? true : p(e),
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.NONE,
        children: (0, r.jsx)(c.Text, {
          variant: e,
          children: t > 99 ? ">99" : "+".concat(t)
        })
      })
    }
    return y
  }
  return i.length <= 0 ? null : (0, r.jsx)("div", {
    className: a()(t, d.avatars),
    children: b()
  })
}