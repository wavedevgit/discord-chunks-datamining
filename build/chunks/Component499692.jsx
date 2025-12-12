/** Chunk was on 92504 **/
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
  Chunk551222 = require("./551222.js");
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
    } = e, [a, i] = r.useState(false), l = (0, s.O)(e => {
      e && i(true)
    });
    return r.useEffect(() => {
      a && (0, b.zZ)(j.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
        collection_id: t,
        collection_position: n
      })
    }, [a, t, n]), l
  }({
    collectionId: t.id,
    index: n
  }), c = r.useCallback((e, a) => {
    (0, b.zZ)(j.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
      collection_id: t.id,
      item_position: a,
      collection_position: n,
      application_id: e
    }), i(e)
  }, [t.id, n, i]);
  return (0, a.jsxs)("div", {
    ref: o,
    children: [(0, a.jsx)(m.Heading, {
      className: l()(_.sectionTitle, {
        [_.titleExtraPadding]: 0 === n
      }),
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: t.title
    }), (0, a.jsx)("div", {
      className: _.content,
      children: t.application_directory_collection_items.map((e, t) => e.type !== d.C.APPLICATION || null == e.application ? null : (0, a.jsx)(v.Z, {
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
  } = e, n = (0, p.e7)([h.default], () => h.default.onlyShowPreviewAppCollections) ? o.E.PREVIEW : o.E.ACTIVE, i = (0, p.e7)([g.Z], () => g.Z.getFetchState({
    surface: y,
    activeState: n
  })), l = (0, p.e7)([g.Z], () => g.Z.getCollections({
    surface: y,
    activeState: n
  }));
  r.useEffect(() => {
    f.XK({
      surface: y,
      activeState: n
    })
  }, [n]);
  let s = r.useMemo(() => null == l ? true : l.filter(e => e.type !== u.o.GALLERY), [l]);
  return i === g.M.ERROR ? (0, a.jsx)("div", {
    className: _.errorContainer,
    children: (0, a.jsx)(C.Z, {
      className: _.error
    })
  }) : (0, a.jsx)(x.Z, {
    loading: i === g.M.FETCHING,
    children: null == s ? true : s.map((e, n) => (0, a.jsx)(I, {
      collection: e,
      index: n,
      onSelectApplication: t
    }, n))
  })
}