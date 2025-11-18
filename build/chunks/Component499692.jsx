/** Chunk was on 84283 **/
/** chunk id: 499692, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk907331 = require("./907331.js"),
  Chunk535655 = require("./535655.js"),
  Chunk973693 = require("./973693.js"),
  Chunk912370 = require("./912370.js"),
  Chunk873199 = require("./873199.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857192 = require("./857192.js"),
  Chunk471518 = require("./471518.js"),
  Chunk425986 = require("./425986.js"),
  Chunk881294 = require("./881294.js"),
  Chunk523311 = require("./523311.jsx"),
  Chunk797908 = require("./797908.jsx"),
  Chunk292191 = require("./292191.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk402384 = require("./402384.js");
let y = Chunk973693.Y.APPLICATION_DIRECTORY;

function I(e) {
  let {
    collection: t,
    index: n,
    onSelectApplication: i
  } = e, o = function(e) {
    let {
      collectionId: t,
      index: n
    } = e, [r, i] = a.useState(false), l = (0, s.O)(e => {
      e && i(true)
    });
    return a.useEffect(() => {
      r && (0, f.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
        collection_id: t,
        collection_position: n
      })
    }, [r, t, n]), l
  }({
    collectionId: t.id,
    index: n
  }), c = a.useCallback((e, r) => {
    (0, f.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
      collection_id: t.id,
      item_position: r,
      collection_position: n,
      application_id: e
    }), i(e)
  }, [t.id, n, i]);
  return (0, r.jsxs)("div", {
    ref: o,
    children: [(0, r.jsx)(m.Heading, {
      className: l()(j.sectionTitle, {
        [j.titleExtraPadding]: 0 === n
      }),
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: t.title
    }), (0, r.jsx)("div", {
      className: j.content,
      children: t.application_directory_collection_items.map((e, t) => e.type !== d.C.APPLICATION || null == e.application ? null : (0, r.jsx)(x.Z, {
        application: e.application,
        onSelectApplication: () => c(e.application.id, t),
        showCategory: true
      }, e.id))
    })]
  })
}
let S = function(e) {
  let {
    onSelectApplication: t
  } = e, n = (0, p.e7)([h.default], () => h.default.onlyShowPreviewAppCollections) ? o.E.PREVIEW : o.E.ACTIVE, i = (0, p.e7)([_.Z], () => _.Z.getFetchState({
    surface: y,
    activeState: n
  })), l = (0, p.e7)([_.Z], () => _.Z.getCollections({
    surface: y,
    activeState: n
  }));
  a.useEffect(() => {
    g.XK({
      surface: y,
      activeState: n
    })
  }, [n]);
  let s = a.useMemo(() => null == l ? true : l.filter(e => e.type !== u.o.GALLERY), [l]);
  return i === _.M.ERROR ? (0, r.jsx)("div", {
    className: j.errorContainer,
    children: (0, r.jsx)(v.Z, {
      className: j.error
    })
  }) : (0, r.jsx)(b.Z, {
    loading: i === _.M.FETCHING,
    children: null == s ? true : s.map((e, n) => (0, r.jsx)(I, {
      collection: e,
      index: n,
      onSelectApplication: t
    }, n))
  })
}