/** Chunk was on 90728 (f68c32709458369a.js) **/
n.d(t, {
  Z: () => I
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(120356),
  l = n.n(i),
  o = n(535655),
  s = n(973693),
  c = n(912370),
  d = n(873199),
  u = n(442837),
  p = n(481060),
  m = n(434650),
  h = n(674588),
  g = n(368862),
  _ = n(125909),
  f = n(857192),
  v = n(881294),
  b = n(797908),
  x = n(292191),
  C = n(981631),
  j = n(119103);
let y = s.Y.APPLICATION_DIRECTORY;

function O(e) {
  let {
    collection: t,
    index: n,
    onSelectApplication: i
  } = e, o = function(e) {
    let {
      collectionId: t,
      index: n
    } = e, [r, i] = a.useState(!1), l = (0, m.O)(e => {
      e && i(!0)
    });
    return a.useEffect(() => {
      r && (0, v.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
        collection_id: t,
        collection_position: n
      })
    }, [r, t, n]), l
  }({
    collectionId: t.id,
    index: n
  }), s = a.useCallback((e, r) => {
    (0, v.zZ)(C.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
      collection_id: t.id,
      item_position: r,
      collection_position: n,
      application_id: e
    }), i(e)
  }, [t.id, n, i]);
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
      children: t.application_directory_collection_items.map((e, t) => e.type !== c.C.APPLICATION || null == e.application ? null : (0, r.jsx)(b.Z, {
        application: e.application,
        onSelectApplication: () => s(e.application.id, t),
        showCategory: !0
      }, e.id))
    })]
  })
}
let I = function(e) {
  let {
    onSelectApplication: t
  } = e, n = (0, u.e7)([f.default], () => f.default.onlyShowPreviewAppCollections) ? o.E.PREVIEW : o.E.ACTIVE, i = (0, u.e7)([g.Z], () => g.Z.getFetchState({
    surface: y,
    activeState: n
  })), l = (0, u.e7)([g.Z], () => g.Z.getCollections({
    surface: y,
    activeState: n
  }));
  a.useEffect(() => {
    h.XK({
      surface: y,
      activeState: n
    })
  }, [n]);
  let s = a.useMemo(() => null == l ? void 0 : l.filter(e => e.type !== d.o.GALLERY), [l]);
  return i === g.M.ERROR ? (0, r.jsx)("div", {
    className: j.errorContainer,
    children: (0, r.jsx)(x.Z, {
      className: j.error
    })
  }) : (0, r.jsx)(_.Z, {
    loading: i === g.M.FETCHING,
    children: null == s ? void 0 : s.map((e, n) => (0, r.jsx)(O, {
      collection: e,
      index: n,
      onSelectApplication: t
    }, n))
  })
}