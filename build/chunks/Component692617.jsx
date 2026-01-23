/** Chunk was on web.js **/
/** chunk id: 692617, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk232358 = require("./232358.js");

function p() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : d.A.Sizes.SMALLER;
  switch (e) {
    case d.A.Sizes.SMOL:
      return f.nc;
    case d.A.Sizes.MINI:
      return f.qV;
    case d.A.Sizes.SMALLER:
    default:
      return f.q1
  }
}

function _() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : d.A.Sizes.SMALLER;
  switch (e) {
    case d.A.Sizes.SMOL:
    case d.A.Sizes.MINI:
      return "text-xxs/semibold";
    case d.A.Sizes.SMALLER:
    default:
      return "text-xs/medium"
  }
}

function h(e) {
  let {
    className: t,
    maxGuilds: n,
    guilds: i,
    onFocus: s,
    onClick: h,
    size: m = d.A.Sizes.SMALLER,
    hideOverflowCount: g = false,
    disableGuildNameTooltip: E = false
  } = e, y = p(m);

  function b() {
    let e = i.length - n,
      t = e + 1,
      p = e > 0 && !g,
      b = Math.min(i.length, n) - 1,
      O = o()(i).take(n).map((e, t) => {
        let n = e.name,
          i = t === b && !p,
          s = a()(f.my, y, i && f.NE);
        return E ? (0, r.jsx)("div", {
          className: s,
          children: (0, r.jsx)(d.A, {
            guild: e,
            onClick: h,
            size: m,
            showTooltip: false
          })
        }) : (0, r.jsx)(l.m, {
          asContainer: true,
          text: n,
          children: (0, r.jsx)(d.A, {
            guild: e,
            onClick: h,
            size: m
          })
        }, e.id)
      }).value();
    if (p) {
      let e = _(m);
      O[O.length - 1] = (0, r.jsx)(c.$n, {
        className: a()(f.ju, y),
        onFocus: s,
        onClick: e => null == h ? true : h(e),
        look: c.$n.Looks.BLANK,
        size: c.$n.Sizes.NONE,
        children: (0, r.jsx)(u.Text, {
          variant: e,
          children: t > 99 ? ">99" : "+".concat(t)
        })
      })
    }
    return O
  }
  return i.length <= 0 ? null : (0, r.jsx)("div", {
    className: a()(t, f.HD),
    children: b()
  })
}