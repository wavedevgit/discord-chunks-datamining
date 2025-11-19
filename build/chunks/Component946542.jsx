/** Chunk was on 69844 **/
/** chunk id: 946542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk255333 = require("./255333.js"),
  Chunk881294 = require("./881294.js"),
  Chunk194594 = require("./194594.jsx"),
  Chunk523311 = require("./523311.jsx"),
  Chunk359993 = require("./359993.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk431085 = require("./431085.js");

function _(e) {
  let {
    applicationId: t,
    similarApplications: n,
    onSelectApplication: l,
    similarLoadId: s
  } = e, o = function(e) {
    let {
      applicationId: t,
      similarAppIds: n
    } = e, [r, l] = a.useState(), s = (0, i.O)(e => {
      e && l(t)
    });
    return a.useEffect(() => {
      r === t && (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
        application_id: t,
        suggested_application_ids: n
      })
    }, [r, t, n]), s
  }({
    applicationId: t,
    similarAppIds: a.useMemo(() => n.map(e => e.id), [n])
  });
  return (0, r.jsx)("div", {
    className: g.contentContainer,
    ref: o,
    children: n.map((e, n) => (0, r.jsx)(f, {
      applicationId: t,
      similarApplication: e,
      onSelectApplication: l,
      similarLoadId: s,
      position: n
    }, e.id))
  })
}

function f(e) {
  var t, n, i;
  let {
    applicationId: o,
    similarApplication: u,
    onSelectApplication: h,
    position: _,
    similarLoadId: f
  } = e, b = (0, p.Z)({
    application: u
  }), x = null == (t = u.categories) ? true : t[0], v = a.useMemo(() => s.ZP.getApplicationIconURL({
    id: u.id,
    icon: u.icon,
    size: 48
  }), [u]), C = a.useCallback(() => {
    (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
      current_page: "product",
      application_id: o,
      suggested_application_id: u.id,
      position: _,
      load_id: f,
      shown_mutual_guilds_count: b.length
    }), h(u.id)
  }, [h, u.id, o, b.length, f, _]);
  return (0, r.jsxs)(l.P3F, {
    onClick: C,
    className: g.appContainer,
    children: [(0, r.jsxs)("div", {
      className: g.appHeader,
      children: [(0, r.jsx)("img", {
        src: v,
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
          children: (0, r.jsx)(l.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            className: g.appName,
            children: u.name
          })
        }), null != x ? (0, r.jsx)(l.Text, {
          className: g.appCategory,
          variant: "text-xs/medium",
          color: "text-muted",
          children: x.name
        }) : null]
      })]
    }), (0, r.jsx)(l.Text, {
      className: g.appDescription,
      variant: "text-sm/medium",
      color: "header-secondary",
      lineClamp: 2,
      children: null != (i = null == (n = u.directory_entry) ? true : n.short_description) ? i : u.description
    }), (0, r.jsx)(d.Z, {
      application: u,
      textVariant: "text-xs/medium",
      mutualGuilds: b,
      mutualGuildShownMax: 3,
      guildIconSize: d.x.SMALL,
      compact: true
    })]
  })
}
let b = function(e) {
  let {
    applicationId: t,
    fetchState: n,
    similarApplications: a,
    onSelectApplication: i,
    similarLoadId: s
  } = e;
  return n !== o.M.FETCHING && (null == a || 0 === a.length) ? null : (0, r.jsxs)("div", {
    className: g.sectionContainer,
    children: [(0, r.jsx)("div", {
      className: g.divider
    }), (0, r.jsx)(l.Heading, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      className: g.sectionHeader,
      children: h.intl.string(h.t.E8wCnk)
    }), (0, r.jsx)(u.Z, {
      loading: n === o.M.FETCHING,
      children: null != a ? (0, r.jsx)(_, {
        applicationId: t,
        similarApplications: a,
        onSelectApplication: i,
        similarLoadId: s
      }) : null
    })]
  })
}