/** Chunk was on 92504 **/
/** chunk id: 946542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk411317 = require("./411317.js");

function b(e) {
  let {
    applicationId: t,
    similarApplications: n,
    onSelectApplication: l,
    similarLoadId: s
  } = e, o = function(e) {
    let {
      applicationId: t,
      similarAppIds: n
    } = e, [a, l] = r.useState(), s = (0, i.O)(e => {
      e && l(t)
    });
    return r.useEffect(() => {
      a === t && (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
        application_id: t,
        suggested_application_ids: n
      })
    }, [a, t, n]), s
  }({
    applicationId: t,
    similarAppIds: r.useMemo(() => n.map(e => e.id), [n])
  });
  return (0, a.jsx)("div", {
    className: f.contentContainer,
    ref: o,
    children: n.map((e, n) => (0, a.jsx)(g, {
      applicationId: t,
      similarApplication: e,
      onSelectApplication: l,
      similarLoadId: s,
      position: n
    }, e.id))
  })
}

function g(e) {
  var t, n, i;
  let {
    applicationId: o,
    similarApplication: u,
    onSelectApplication: h,
    position: b,
    similarLoadId: g
  } = e, x = (0, p.Z)({
    application: u
  }), v = null == (t = u.categories) ? true : t[0], C = r.useMemo(() => s.ZP.getApplicationIconURL({
    id: u.id,
    icon: u.icon,
    size: 48
  }), [u]), j = r.useCallback(() => {
    (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
      current_page: "product",
      application_id: o,
      suggested_application_id: u.id,
      position: b,
      load_id: g,
      shown_mutual_guilds_count: x.length
    }), h(u.id)
  }, [h, u.id, o, x.length, g, b]);
  return (0, a.jsxs)(l.P3F, {
    onClick: j,
    className: f.appContainer,
    children: [(0, a.jsxs)("div", {
      className: f.appHeader,
      children: [(0, a.jsx)("img", {
        src: C,
        alt: "",
        className: f.avatar,
        height: 48,
        width: 48
      }), (0, a.jsxs)("div", {
        className: f.titleContainer,
        children: [(0, a.jsx)("div", {
          style: {
            flex: 1,
            minWidth: 0,
            overflow: "hidden"
          },
          children: (0, a.jsx)(l.Heading, {
            variant: "heading-md/semibold",
            color: "header-primary",
            className: f.appName,
            children: u.name
          })
        }), null != v ? (0, a.jsx)(l.Text, {
          className: f.appCategory,
          variant: "text-xs/medium",
          color: "text-muted",
          children: v.name
        }) : null]
      })]
    }), (0, a.jsx)(l.Text, {
      className: f.appDescription,
      variant: "text-sm/medium",
      color: "text-default",
      lineClamp: 2,
      children: null != (i = null == (n = u.directory_entry) ? true : n.short_description) ? i : u.description
    }), (0, a.jsx)(d.Z, {
      application: u,
      textVariant: "text-xs/medium",
      mutualGuilds: x,
      mutualGuildShownMax: 3,
      guildIconSize: d.x.SMALL,
      compact: true
    })]
  })
}
let x = function(e) {
  let {
    applicationId: t,
    fetchState: n,
    similarApplications: r,
    onSelectApplication: i,
    similarLoadId: s
  } = e;
  return n !== o.M.FETCHING && (null == r || 0 === r.length) ? null : (0, a.jsxs)("div", {
    className: f.sectionContainer,
    children: [(0, a.jsx)("div", {
      className: f.divider
    }), (0, a.jsx)(l.Heading, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      className: f.sectionHeader,
      children: h.intl.string(h.t.E8wCnk)
    }), (0, a.jsx)(u.Z, {
      loading: n === o.M.FETCHING,
      children: null != r ? (0, a.jsx)(b, {
        applicationId: t,
        similarApplications: r,
        onSelectApplication: i,
        similarLoadId: s
      }) : null
    })]
  })
}