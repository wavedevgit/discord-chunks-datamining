/** Chunk was on 5606 **/
/** chunk id: 581781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    className: t,
    guildTag: n,
    guildBadge: l,
    guildId: p,
    guildName: _,
    guildIcon: m,
    guildIconSize: g
  } = e, f = i.useRef(null), [b, h] = i.useState(false);
  return i.useEffect(() => {
    let e = f.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && h(e.offsetWidth < e.scrollWidth)
  }, []), (0, r.jsxs)("div", {
    className: s()(u.kL, t),
    children: [(0, r.jsxs)("div", {
      className: u.v2,
      children: [(0, r.jsx)(o.j, {
        guildId: p,
        guildName: _,
        guildIcon: m,
        iconSize: g,
        className: u.rr,
        animate: false
      }), (0, r.jsx)("div", {
        className: u.zH,
        children: (0, r.jsx)(a.m, {
          __unsupportedReactNodeAsText: _,
          shouldShow: b,
          children: (0, r.jsx)("span", {
            ref: f,
            className: u.J5,
            children: _
          })
        })
      })]
    }), (0, r.jsx)("div", {
      className: u.I8,
      children: (0, r.jsx)(c.o9, {
        guildId: p,
        className: u.Tc,
        guildTag: n,
        guildBadge: l,
        badgeSize: d.Sl.SIZE_16,
        textColor: "interactive-text-default",
        textVariant: "text-sm/semibold",
        badgeClassName: u.qS
      })
    })]
  })
}