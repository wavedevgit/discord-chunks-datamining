/** Chunk was on 35641 **/
/** chunk id: 698336, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk888940 = require("./888940.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk558179 = require("./558179.jsx"),
  Chunk355190 = require("./355190.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk592738 = require("./592738.js");

function p(e) {
  var t;
  let {
    eulaId: n,
    transitionState: p,
    onClose: g
  } = e, h = (0, r.bG)([c.A], () => c.A.getEULA(n));
  i.useEffect(() => {
    (0, l.E)(n)
  }, [n]);
  let A = null != (t = null == h ? true : h.name) ? t : u.intl.string(u.t.ZTNur7),
    m = null != h ? (0, a.jsx)(o.A, {
      children: h.content,
      className: E.w
    }) : (0, a.jsx)(s.y$y, {
      className: E.u
    });
  return (0, a.jsxs)(s.EOs, {
    "data-migration-pending": true,
    transitionState: p,
    size: s.rIJ.SMALL,
    "aria-label": A,
    parentComponent: "EULA",
    children: [(0, a.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      justify: d.A.Justify.BETWEEN,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: A
      }), (0, a.jsx)(s.s_y, {
        "data-migration-pending": true,
        onClick: g
      })]
    }), (0, a.jsx)(s.$mQ, {
      "data-migration-pending": true,
      children: m
    })]
  })
}