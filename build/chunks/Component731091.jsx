/** Chunk was on 67564 **/
/** chunk id: 731091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk932883 = require("./932883.jsx"),
  Chunk599486 = require("./599486.js"),
  Chunk394953 = require("./394953.js"),
  Chunk628325 = require("./628325.js"),
  Chunk849077 = require("./849077.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk576539 = require("./576539.js");

function m(e) {
  let {
    className: t
  } = e, n = (0, c.op)(), l = (0, d.i3)(), {
    selectedFilter: m,
    setSelectedFilter: b
  } = (0, u.A)(), A = (0, p.S)(e => e.setInboxReadState);
  if (!l) return null;
  let y = m === h.Io.ALL ? f.intl.string(f.t["2pAkDA"]) : f.intl.string(f.t.HcoRu0);
  return (0, r.jsx)(a.m, {
    position: "bottom",
    text: y,
    children: (0, r.jsx)(o.DUT, {
      className: i()(t, g.a, {
        [g.S]: m === h.Io.BOOKMARKS
      }),
      "aria-label": y,
      onClick: () => {
        let e = m === h.Io.ALL ? h.Io.BOOKMARKS : h.Io.ALL;
        b(e), e === h.Io.ALL && A(false), (0, c.Ut)({
          section: e,
          enabled: true,
          viewId: n
        })
      },
      children: m === h.Io.BOOKMARKS ? (0, r.jsx)(o.cFy, {
        size: "xs",
        color: s.A.colors.ICON_DEFAULT.css
      }) : (0, r.jsx)(o.c$8, {
        size: "xs",
        color: s.A.colors.ICON_MUTED.css
      })
    })
  })
}