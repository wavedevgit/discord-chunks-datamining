/** Chunk was on 37697 **/
n.d(t, {
  Z: () => O
}), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(120356),
  l = n.n(a),
  o = n(535655),
  s = n(973693),
  c = n(912370),
  d = n(873199),
  u = n(442837),
  p = n(481060),
  m = n(434650),
  h = n(857192),
  g = n(471518),
  _ = n(425986),
  f = n(881294),
  b = n(523311),
  v = n(797908),
  x = n(292191),
  C = n(981631),
  j = n(123679);
let y = s.Y.APPLICATION_DIRECTORY;

function I(e) {
  let {
    collection: t,
    index: n,
    onSelectApplication: a
  } = e, o = function(e) {
    let {
      collectionId: t,
      index: n
    } = e, [r, a] = i.useState(!1), l = (0, m.O)(e => {
      e && a(!0)
    });
    return i.useEffect(() => {
      r && (0, f.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
        collection_id: t,
        collection_position: n
      })
    }, [r, t, n]), l
  }({
    collectionId: t.id,
    index: n
  }), s = i.useCallback((e, r) => {
    (0, f.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
      collection_id: t.id,
      item_position: r,
      collection_position: n,
      application_id: e
    }), a(e)
  }, [t.id, n, a]);
  return (0, r.jsxs)("div", {
    ref: o,
    children: [(0, r.jsx)(p.X6q, {
      className: l()(j.sectionTitle, {
        [j.titleExtraPadding]: 0 === n
      }),
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: t.title
    }), (0, r.jsx)("div", {
      className: j.content,
      children: t.application_directory_collection_items.map((e, t) => e.type !== c.C.APPLICATION || null == e.application ? null : (0, r.jsx)(v.Z, {
        application: e.application,
        onSelectApplication: () => s(e.application.id, t),
        showCategory: !0
      }, e.id))
    })]
  })
}
let O = function(e) {
  let {
    onSelectApplication: t
  } = e, n = (0, u.e7)([h.default], () => h.default.onlyShowPreviewAppCollections) ? o.E.PREVIEW : o.E.ACTIVE, a = (0, u.e7)([_.Z], () => _.Z.getFetchState({
    surface: y,
    activeState: n
  })), l = (0, u.e7)([_.Z], () => _.Z.getCollections({
    surface: y,
    activeState: n
  }));
  i.useEffect(() => {
    g.XK({
      surface: y,
      activeState: n
    })
  }, [n]);
  let s = i.useMemo(() => null == l ? void 0 : l.filter(e => e.type !== d.o.GALLERY), [l]);
  return a === _.M.ERROR ? (0, r.jsx)("div", {
    className: j.errorContainer,
    children: (0, r.jsx)(x.Z, {
      className: j.error
    })
  }) : (0, r.jsx)(b.Z, {
    loading: a === _.M.FETCHING,
    children: null == s ? void 0 : s.map((e, n) => (0, r.jsx)(I, {
      collection: e,
      index: n,
      onSelectApplication: t
    }, n))
  })
}