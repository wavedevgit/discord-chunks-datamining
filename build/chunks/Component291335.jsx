/** Chunk was on 63974 **/
/** chunk id: 291335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk169869 = require("./169869.jsx"),
  Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk773669 = require("./773669.js"),
  Chunk427157 = require("./427157.js"),
  Chunk967198 = require("./967198.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk882119 = require("./882119.js");

function h(e) {
  let {
    applicationRoleConnection: t,
    locale: n,
    onApplicationClicked: i,
    selectedGuildId: r
  } = e, s = (0, d.VW)(t, n);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: j.k_,
      children: null != t.application.bot ? (0, l.jsx)(a.A, {
        user: new f.A(t.application.bot),
        size: o._3J.SIZE_16
      }) : (0, l.jsx)(o._7Z, {
        color: "currentColor",
        size: "sm"
      })
    }), (0, l.jsxs)("div", {
      className: j.Hd,
      children: [(0, l.jsxs)(o.DUT, {
        className: j.OB,
        onClick: () => {
          null == i || i(), (0, c.transitionToGlobalDiscovery)({
            tab: x.GlobalDiscoveryTab.APPS,
            applicationId: t.application.id,
            newSessionState: {
              entrypoint: {
                name: u.sW.APPLICATION_DIRECTORY_URL
              },
              guildId: r
            }
          })
        },
        children: [null != t.platform_name ? (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: t.platform_name
        }) : null, null != t.platform_username ? (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: t.platform_username
        }) : null, (0, l.jsx)(o.Text, {
          variant: "text-xxs/normal",
          color: "text-default",
          className: j.nk,
          children: g.intl.format(g.t.zIT9YA, {
            applicationHook: () => t.application.name
          })
        })]
      }), null != s && s.length > 0 ? (0, l.jsx)("div", {
        className: j.yu,
        children: s
      }) : null]
    })]
  })
}

function b(e) {
  let {
    applicationRoleConnections: t,
    className: n,
    onClose: i
  } = e, {
    trackUserProfileAction: o
  } = (0, A.NJ)(), a = (0, s.bG)([p.default], () => p.default.locale), d = (0, s.bG)([m.A], () => m.A.getGuildId());
  return 0 === t.length ? null : (0, l.jsx)("ul", {
    className: r()(j.kL, n),
    children: t.map((e, t) => (0, l.jsx)("li", {
      className: j.FI,
      children: (0, l.jsx)(h, {
        applicationRoleConnection: e,
        locale: a,
        onApplicationClicked: () => {
          o({
            action: "PRESS_APP_CONNECTION"
          }), i()
        },
        selectedGuildId: null != d ? d : true
      })
    }, "".concat(t, "-").concat(e.application.id)))
  })
}