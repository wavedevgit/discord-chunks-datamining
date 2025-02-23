/** Chunk was on 90728 (f68c32709458369a.js) **/
n.d(t, {
  Z: () => v
}), n(266796), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(481060),
  l = n(434650),
  o = n(303383),
  s = n(924489),
  c = n(125909),
  d = n(824606),
  u = n(768581),
  p = n(881294),
  m = n(981631),
  h = n(388032),
  g = n(219342);

function _(e) {
  let {
    applicationId: t,
    similarApplications: n,
    onSelectApplication: i,
    similarLoadId: o
  } = e, s = function(e) {
    let {
      applicationId: t,
      similarAppIds: n
    } = e, [r, i] = a.useState(), o = (0, l.O)(e => {
      e && i(t)
    });
    return a.useEffect(() => {
      r === t && (0, p.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
        application_id: t,
        suggested_application_ids: n
      })
    }, [r, t, n]), o
  }({
    applicationId: t,
    similarAppIds: a.useMemo(() => n.map(e => e.id), [n])
  });
  return (0, r.jsx)("div", {
    className: g.contentContainer,
    ref: s,
    children: n.map((e, n) => (0, r.jsx)(f, {
      applicationId: t,
      similarApplication: e,
      onSelectApplication: i,
      similarLoadId: o,
      position: n
    }, e.id))
  })
}

function f(e) {
  var t, n, l;
  let {
    applicationId: o,
    similarApplication: c,
    onSelectApplication: h,
    position: _,
    similarLoadId: f
  } = e, v = (0, d.Z)({
    application: c
  }), b = null === (t = c.categories) || void 0 === t ? void 0 : t[0], x = a.useMemo(() => u.ZP.getApplicationIconURL({
    id: c.id,
    icon: c.icon,
    size: 48
  }), [c]), C = a.useCallback(() => {
    (0, p.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
      current_page: "product",
      application_id: o,
      suggested_application_id: c.id,
      position: _,
      load_id: f,
      shown_mutual_guilds_count: v.length
    }), h(c.id)
  }, [h, c.id, o, v.length, f, _]);
  return (0, r.jsxs)(i.P3F, {
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
          children: (0, r.jsx)(i.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            className: g.appName,
            children: c.name
          })
        }), null != b ? (0, r.jsx)(i.Text, {
          className: g.appCategory,
          variant: "text-xs/medium",
          color: "text-muted",
          children: b.name
        }) : null]
      })]
    }), (0, r.jsx)(i.Text, {
      className: g.appDescription,
      variant: "text-sm/medium",
      color: "header-secondary",
      lineClamp: 2,
      children: null !== (l = null === (n = c.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== l ? l : c.description
    }), (0, r.jsx)(s.Z, {
      application: c,
      textVariant: "text-xs/medium",
      mutualGuilds: v,
      mutualGuildShownMax: 3,
      guildIconSize: s.x.SMALL,
      compact: !0
    })]
  })
}
let v = function(e) {
  let {
    applicationId: t,
    fetchState: n,
    similarApplications: a,
    onSelectApplication: l,
    similarLoadId: s
  } = e;
  return n !== o.M.FETCHING && (null == a || 0 === a.length) ? null : (0, r.jsxs)("div", {
    className: g.sectionContainer,
    children: [(0, r.jsx)("div", {
      className: g.divider
    }), (0, r.jsx)(i.X6q, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      className: g.sectionHeader,
      children: h.NW.string(h.t.E8wCnp)
    }), (0, r.jsx)(c.Z, {
      loading: n === o.M.FETCHING,
      children: null != a ? (0, r.jsx)(_, {
        applicationId: t,
        similarApplications: a,
        onSelectApplication: l,
        similarLoadId: s
      }) : null
    })]
  })
}