/** Chunk was on 37697 **/
n.d(t, {
  Z: () => b
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  a = n(481060),
  l = n(434650),
  o = n(768581),
  s = n(255333),
  c = n(881294),
  d = n(194594),
  u = n(523311),
  p = n(359993),
  m = n(981631),
  h = n(388032),
  g = n(899164);

function _(e) {
  let {
    applicationId: t,
    similarApplications: n,
    onSelectApplication: a,
    similarLoadId: o
  } = e, s = function(e) {
    let {
      applicationId: t,
      similarAppIds: n
    } = e, [r, a] = i.useState(), o = (0, l.O)(e => {
      e && a(t)
    });
    return i.useEffect(() => {
      r === t && (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
        application_id: t,
        suggested_application_ids: n
      })
    }, [r, t, n]), o
  }({
    applicationId: t,
    similarAppIds: i.useMemo(() => n.map(e => e.id), [n])
  });
  return (0, r.jsx)("div", {
    className: g.contentContainer,
    ref: s,
    children: n.map((e, n) => (0, r.jsx)(f, {
      applicationId: t,
      similarApplication: e,
      onSelectApplication: a,
      similarLoadId: o,
      position: n
    }, e.id))
  })
}

function f(e) {
  var t, n, l;
  let {
    applicationId: s,
    similarApplication: u,
    onSelectApplication: h,
    position: _,
    similarLoadId: f
  } = e, b = (0, p.Z)({
    application: u
  }), v = null === (t = u.categories) || void 0 === t ? void 0 : t[0], x = i.useMemo(() => o.ZP.getApplicationIconURL({
    id: u.id,
    icon: u.icon,
    size: 48
  }), [u]), C = i.useCallback(() => {
    (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
      current_page: "product",
      application_id: s,
      suggested_application_id: u.id,
      position: _,
      load_id: f,
      shown_mutual_guilds_count: b.length
    }), h(u.id)
  }, [h, u.id, s, b.length, f, _]);
  return (0, r.jsxs)(a.P3F, {
    onClick: C,
    className: g.appContainer,
    children: [(0, r.jsxs)("div", {
      className: g.appHeader,
      children: [(0, r.jsx)("img", {
        src: x,
        alt: "",
        className: g.avatar,
        height: 48,
        width: 48
      }), (0, r.jsxs)("div", {
        className: g.titleContainer,
        children: [(0, r.jsx)("div", {
          style: {
            flex: 1,
            minWidth: 0,
            overflow: "hidden"
          },
          children: (0, r.jsx)(a.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            className: g.appName,
            children: u.name
          })
        }), null != v ? (0, r.jsx)(a.Text, {
          className: g.appCategory,
          variant: "text-xs/medium",
          color: "text-muted",
          children: v.name
        }) : null]
      })]
    }), (0, r.jsx)(a.Text, {
      className: g.appDescription,
      variant: "text-sm/medium",
      color: "header-secondary",
      lineClamp: 2,
      children: null !== (l = null === (n = u.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== l ? l : u.description
    }), (0, r.jsx)(d.Z, {
      application: u,
      textVariant: "text-xs/medium",
      mutualGuilds: b,
      mutualGuildShownMax: 3,
      guildIconSize: d.x.SMALL,
      compact: !0
    })]
  })
}
let b = function(e) {
  let {
    applicationId: t,
    fetchState: n,
    similarApplications: i,
    onSelectApplication: l,
    similarLoadId: o
  } = e;
  return n !== s.M.FETCHING && (null == i || 0 === i.length) ? null : (0, r.jsxs)("div", {
    className: g.sectionContainer,
    children: [(0, r.jsx)("div", {
      className: g.divider
    }), (0, r.jsx)(a.X6q, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      className: g.sectionHeader,
      children: h.NW.string(h.t.E8wCnp)
    }), (0, r.jsx)(u.Z, {
      loading: n === s.M.FETCHING,
      children: null != i ? (0, r.jsx)(_, {
        applicationId: t,
        similarApplications: i,
        onSelectApplication: l,
        similarLoadId: o
      }) : null
    })]
  })
}