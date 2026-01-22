/** Chunk was on web.js **/
/** chunk id: 581781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk145497 = require("./145497.jsx"),
  Chunk534400 = require("./534400.jsx"),
  Chunk743981 = require("./743981.js"),
  Chunk996373 = require("./996373.js");

function f(e) {
  let {
    className: t,
    guildTag: n,
    guildBadge: a,
    guildId: f,
    guildName: p,
    guildIcon: _,
    guildIconSize: h
  } = e, m = i.useRef(null), [g, E] = i.useState(false);
  return i.useEffect(() => {
    let e = m.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && E(e.offsetWidth < e.scrollWidth)
  }, []), (0, r.jsxs)("div", {
    className: s()(d.kL, t),
    children: [(0, r.jsxs)("div", {
      className: d.v2,
      children: [(0, r.jsx)(l.j, {
        guildId: f,
        guildName: p,
        guildIcon: _,
        iconSize: h,
        className: d.rr,
        animate: false
      }), (0, r.jsx)("div", {
        className: d.zH,
        children: (0, r.jsx)(o.m, {
          __unsupportedReactNodeAsText: p,
          shouldShow: g,
          children: (0, r.jsx)("span", {
            ref: m,
            className: d.J5,
            children: p
          })
        })
      })]
    }), (0, r.jsx)("div", {
      className: d.I8,
      children: (0, r.jsx)(c.o9, {
        guildId: f,
        className: d.Tc,
        guildTag: n,
        guildBadge: a,
        badgeSize: u.Sl.SIZE_16,
        textColor: "interactive-text-default",
        textVariant: "text-sm/semibold",
        badgeClassName: d.qS
      })
    })]
  })
}