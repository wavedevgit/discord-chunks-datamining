/** Chunk was on 2827 **/
/** chunk id: 581781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  let {
    className: t,
    guildTag: n,
    guildBadge: l,
    guildId: _,
    guildName: p,
    guildIcon: m,
    guildIconSize: g
  } = e, A = i.useRef(null), [f, b] = i.useState(false);
  return i.useEffect(() => {
    let e = A.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && b(e.offsetWidth < e.scrollWidth)
  }, []), (0, r.jsxs)("div", {
    className: s()(u.kL, t),
    children: [(0, r.jsxs)("div", {
      className: u.v2,
      children: [(0, r.jsx)(o.j, {
        guildId: _,
        guildName: p,
        guildIcon: m,
        iconSize: g,
        className: u.rr,
        animate: false
      }), (0, r.jsx)("div", {
        className: u.zH,
        children: (0, r.jsx)(a.m, {
          __unsupportedReactNodeAsText: p,
          shouldShow: f,
          children: (0, r.jsx)("span", {
            ref: A,
            className: u.J5,
            children: p
          })
        })
      })]
    }), (0, r.jsx)("div", {
      className: u.I8,
      children: (0, r.jsx)(c.o9, {
        guildId: _,
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