/** Chunk was on 27278 **/
n.d(t, {
  Z: () => h
});
var o = n(200651),
  r = n(192379),
  a = n(442837),
  i = n(481060),
  l = n(110924),
  c = n(812206),
  s = n(554370),
  _ = n(788983),
  u = n(214629),
  d = n(317381),
  p = n(16609),
  b = n(781780),
  f = n(325749),
  m = n(981631),
  v = n(859492);

function h() {
  let {
    embeddedActivity: e,
    channelId: t,
    guildId: n
  } = (0, a.cj)([d.ZP], () => {
    let e = d.ZP.getCurrentEmbeddedActivity(),
      t = (0, p.pY)(null == e ? void 0 : e.location),
      n = (0, p.jS)(null == e ? void 0 : e.location);
    return {
      embeddedActivity: e,
      channelId: t,
      guildId: n
    }
  }), h = r.useRef(null), C = (0, l.Z)(e);
  r.useEffect(() => {
    null != e ? clearTimeout(h.current) : null != C && null == e && (h.current = window.setTimeout(() => {
      (0, _.xv)(m.KJ3.ACTIVITY_POPOUT)
    }, 5e3))
  }, [e, C]);
  let x = (0, a.e7)([c.Z], () => {
      let t = null == e ? void 0 : e.applicationId;
      return null == t ? void 0 : c.Z.getApplication(t)
    }),
    g = (0, u.PR)();
  return (0, o.jsx)("div", {
    className: v.container,
    children: null == e || null == x ? (0, o.jsx)(i.$jN, {
      className: v.iframe
    }) : (0, o.jsx)("div", {
      className: v.loadedContentContainer,
      children: (0, o.jsxs)("div", {
        className: v.iframeAndHeaderContainer,
        children: [(0, o.jsx)("div", {
          className: v.headerContainer,
          children: (0, o.jsx)(f.Z, {
            applicationId: x.id,
            channelId: t
          })
        }), (0, o.jsx)("div", {
          className: v.iframeContainer,
          children: (0, o.jsx)(b.Z, {
            channelId: t,
            guildId: n,
            embeddedActivity: e,
            application: x
          })
        }), g ? (0, o.jsx)(s.Z, {
          isEmbeddedActivity: !0
        }) : null]
      })
    })
  })
}