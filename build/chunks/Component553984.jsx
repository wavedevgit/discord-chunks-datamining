/** Chunk was on 81985 **/
/** chunk id: 553984, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk804932 = require("./804932.jsx"),
  Chunk725739 = require("./725739.js"),
  Chunk370774 = require("./370774.js"),
  Chunk334426 = require("./334426.js"),
  Chunk982183 = require("./982183.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk627758 = require("./627758.js");

function m(e) {
  let {
    className: t
  } = e, n = (0, c.fJ)(), i = (0, d.ux)(), {
    selectedFilter: m,
    setSelectedFilter: b
  } = (0, u.Z)(), y = (0, p.d)(e => e.setInboxReadState);
  if (!i) return null;
  let v = m === f.V5.ALL ? h.intl.string(h.t["2pAkDA"]) : h.intl.string(h.t.HcoRu0);
  return (0, r.jsx)(o.u, {
    position: "bottom",
    text: v,
    children: (0, r.jsx)(s.P3F, {
      className: l()(t, g.headerButton, {
        [g.enabled]: m === f.V5.BOOKMARKS
      }),
      "aria-label": v,
      onClick: () => {
        let e = m === f.V5.ALL ? f.V5.BOOKMARKS : f.V5.ALL;
        b(e), e === f.V5.ALL && y(false), (0, c.RZ)({
          section: e,
          enabled: true,
          viewId: n
        })
      },
      children: m === f.V5.BOOKMARKS ? (0, r.jsx)(s.plf, {
        size: "xs",
        color: a.Z.colors.ICON_DEFAULT.css
      }) : (0, r.jsx)(s.gt9, {
        size: "xs",
        color: a.Z.colors.ICON_MUTED.css
      })
    })
  })
}