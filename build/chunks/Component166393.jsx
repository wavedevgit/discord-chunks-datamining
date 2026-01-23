/** Chunk was on 28636 **/
/** chunk id: 166393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk172218 = require("./172218.js"),
  Chunk724002 = require("./724002.js"),
  Chunk287174 = require("./287174.js"),
  Chunk487899 = require("./487899.js"),
  Chunk239314 = require("./239314.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk111162 = require("./111162.js"),
  Chunk354138 = require("./354138.js"),
  Chunk111042 = require("./111042.js"),
  Chunk412461 = require("./412461.js"),
  Chunk867333 = require("./867333.jsx"),
  Chunk487953 = require("./487953.jsx"),
  Chunk111737 = require("./111737.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk789113 = require("./789113.js");
let y = Chunk287174.K.APPLICATION_DIRECTORY;

function C(e) {
  let {
    collection: t,
    index: n,
    onSelectApplication: i
  } = e, o = function(e) {
    let {
      collectionId: t,
      index: n
    } = e, [r, i] = l.useState(false), a = (0, s.K)(e => {
      e && i(true)
    });
    return l.useEffect(() => {
      r && (0, b.TR)(j.HAw.APP_DIRECTORY_COLLECTION_VIEWED, {
        collection_id: t,
        collection_position: n
      })
    }, [r, t, n]), a
  }({
    collectionId: t.id,
    index: n
  }), c = l.useCallback((e, r) => {
    (0, b.TR)(j.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
      collection_id: t.id,
      item_position: r,
      collection_position: n,
      application_id: e
    }), i(e)
  }, [t.id, n, i]);
  return (0, r.jsxs)("div", {
    ref: o,
    children: [(0, r.jsx)(h.Heading, {
      className: a()(A.Gf, {
        [A.SH]: 0 === n
      }),
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: t.title
    }), (0, r.jsx)("div", {
      className: A.Qs,
      children: t.application_directory_collection_items.map((e, t) => e.type !== d.L.APPLICATION || null == e.application ? null : (0, r.jsx)(x.A, {
        application: e.application,
        onSelectApplication: () => c(e.application.id, t),
        showCategory: true
      }, e.id))
    })]
  })
}
let O = function(e) {
  let {
    onSelectApplication: t
  } = e, n = (0, p.bG)([m.default], () => m.default.onlyShowPreviewAppCollections) ? o.W.PREVIEW : o.W.ACTIVE, i = (0, p.bG)([_.A], () => _.A.getFetchState({
    surface: y,
    activeState: n
  })), a = (0, p.bG)([_.A], () => _.A.getCollections({
    surface: y,
    activeState: n
  }));
  l.useEffect(() => {
    g.An({
      surface: y,
      activeState: n
    })
  }, [n]);
  let s = l.useMemo(() => null == a ? true : a.filter(e => e.type !== u.Y.GALLERY), [a]);
  return i === _.e.ERROR ? (0, r.jsx)("div", {
    className: A.Un,
    children: (0, r.jsx)(v.A, {
      className: A.z3
    })
  }) : (0, r.jsx)(f.A, {
    loading: i === _.e.FETCHING,
    children: null == s ? true : s.map((e, n) => (0, r.jsx)(C, {
      collection: e,
      index: n,
      onSelectApplication: t
    }, n))
  })
}