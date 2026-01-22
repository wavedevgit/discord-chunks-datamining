/** Chunk was on 28636 **/
/** chunk id: 166393, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function O(e) {
  let {
    collection: t,
    index: n,
    onSelectApplication: r
  } = e, c = function(e) {
    let {
      collectionId: t,
      index: n
    } = e, [l, r] = a.useState(false), i = (0, s.K)(e => {
      e && r(true)
    });
    return a.useEffect(() => {
      l && (0, g.TR)(A.HAw.APP_DIRECTORY_COLLECTION_VIEWED, {
        collection_id: t,
        collection_position: n
      })
    }, [l, t, n]), i
  }({
    collectionId: t.id,
    index: n
  }), o = a.useCallback((e, l) => {
    (0, g.TR)(A.HAw.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
      collection_id: t.id,
      item_position: l,
      collection_position: n,
      application_id: e
    }), r(e)
  }, [t.id, n, r]);
  return (0, l.jsxs)("div", {
    ref: c,
    children: [(0, l.jsx)(h.Heading, {
      className: i()(_.Gf, {
        [_.SH]: 0 === n
      }),
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: t.title
    }), (0, l.jsx)("div", {
      className: _.Qs,
      children: t.application_directory_collection_items.map((e, t) => e.type !== d.L.APPLICATION || null == e.application ? null : (0, l.jsx)(v.A, {
        application: e.application,
        onSelectApplication: () => o(e.application.id, t),
        showCategory: true
      }, e.id))
    })]
  })
}
let S = function(e) {
  let {
    onSelectApplication: t
  } = e, n = (0, p.bG)([m.default], () => m.default.onlyShowPreviewAppCollections) ? c.W.PREVIEW : c.W.ACTIVE, r = (0, p.bG)([f.A], () => f.A.getFetchState({
    surface: y,
    activeState: n
  })), i = (0, p.bG)([f.A], () => f.A.getCollections({
    surface: y,
    activeState: n
  }));
  a.useEffect(() => {
    b.An({
      surface: y,
      activeState: n
    })
  }, [n]);
  let s = a.useMemo(() => null == i ? true : i.filter(e => e.type !== u.Y.GALLERY), [i]);
  return r === f.e.ERROR ? (0, l.jsx)("div", {
    className: _.Un,
    children: (0, l.jsx)(j.A, {
      className: _.z3
    })
  }) : (0, l.jsx)(x.A, {
    loading: r === f.e.FETCHING,
    children: null == s ? true : s.map((e, n) => (0, l.jsx)(O, {
      collection: e,
      index: n,
      onSelectApplication: t
    }, n))
  })
}