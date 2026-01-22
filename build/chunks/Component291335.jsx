/** Chunk was on 64228 **/
/** chunk id: 291335, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => v
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

function g(e) {
  let {
    applicationRoleConnection: l,
    locale: t,
    onApplicationClicked: i,
    selectedGuildId: r
  } = e, s = (0, d.VW)(l, t);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: h.k_,
      children: null != l.application.bot ? (0, n.jsx)(o.A, {
        user: new p.A(l.application.bot),
        size: a._3J.SIZE_16
      }) : (0, n.jsx)(a._7Z, {
        color: "currentColor",
        size: "sm"
      })
    }), (0, n.jsxs)("div", {
      className: h.Hd,
      children: [(0, n.jsxs)(a.DUT, {
        className: h.OB,
        onClick: () => {
          null == i || i(), (0, c.transitionToGlobalDiscovery)({
            tab: A.GlobalDiscoveryTab.APPS,
            applicationId: l.application.id,
            newSessionState: {
              entrypoint: {
                name: u.sW.APPLICATION_DIRECTORY_URL
              },
              guildId: r
            }
          })
        },
        children: [null != l.platform_name ? (0, n.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: l.platform_name
        }) : null, null != l.platform_username ? (0, n.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: l.platform_username
        }) : null, (0, n.jsx)(a.Text, {
          variant: "text-xxs/normal",
          color: "text-default",
          className: h.nk,
          children: j.intl.format(j.t.zIT9YA, {
            applicationHook: () => l.application.name
          })
        })]
      }), null != s && s.length > 0 ? (0, n.jsx)("div", {
        className: h.yu,
        children: s
      }) : null]
    })]
  })
}

function v(e) {
  let {
    applicationRoleConnections: l,
    className: t,
    onClose: i
  } = e, {
    trackUserProfileAction: a
  } = (0, x.NJ)(), o = (0, s.bG)([f.default], () => f.default.locale), d = (0, s.bG)([m.A], () => m.A.getGuildId());
  return 0 === l.length ? null : (0, n.jsx)("ul", {
    className: r()(h.kL, t),
    children: l.map((e, l) => (0, n.jsx)("li", {
      className: h.FI,
      children: (0, n.jsx)(g, {
        applicationRoleConnection: e,
        locale: o,
        onApplicationClicked: () => {
          a({
            action: "PRESS_APP_CONNECTION"
          }), i()
        },
        selectedGuildId: null != d ? d : true
      })
    }, "".concat(l, "-").concat(e.application.id)))
  })
}