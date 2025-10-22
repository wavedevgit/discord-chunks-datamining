/** Chunk was on 93979 **/
/** chunk id: 769321, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk888496 = require("./888496.jsx"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk706454 = require("./706454.js"),
  Chunk598077 = require("./598077.js"),
  Chunk914010 = require("./914010.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk638999 = require("./638999.js");

function g(e) {
  let {
    applicationRoleConnection: n,
    locale: t,
    onApplicationClicked: i,
    selectedGuildId: o
  } = e, r = (0, c.rm)(n, t);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: j.platformIconContainer,
      children: null != n.application.bot ? (0, l.jsx)(a.Z, {
        user: new p.Z(n.application.bot),
        size: s.EFr.SIZE_16
      }) : (0, l.jsx)(s.IMN, {
        color: "currentColor",
        size: "sm"
      })
    }), (0, l.jsxs)("div", {
      className: j.connectionInfo,
      children: [(0, l.jsxs)(s.P3F, {
        className: j.connectedAppRoleAccountClickable,
        onClick: () => {
          null == i || i(), (0, d.transitionToGlobalDiscovery)({
            tab: h.GlobalDiscoveryTab.APPS,
            applicationId: n.application.id,
            newSessionState: {
              entrypoint: {
                name: u.xF.APPLICATION_DIRECTORY_URL
              },
              guildId: o
            }
          })
        },
        children: [null != n.platform_name ? (0, l.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, l.jsx)(s.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: n.platform_username
        }) : null, (0, l.jsx)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-default",
          className: j.connectedAppRoleAccountPoweredBy,
          children: v.intl.format(v.t.zIT9YA, {
            applicationHook: () => n.application.name
          })
        })]
      }), null != r && r.length > 0 ? (0, l.jsx)("div", {
        className: j.metadata,
        children: r
      }) : null]
    })]
  })
}

function b(e) {
  let {
    applicationRoleConnections: n,
    className: t,
    onClose: i
  } = e, {
    trackUserProfileAction: s
  } = (0, x.KZ)(), a = (0, r.e7)([m.default], () => m.default.locale), c = (0, r.e7)([f.Z], () => f.Z.getGuildId());
  return 0 === n.length ? null : (0, l.jsx)("ul", {
    className: o()(j.container, t),
    children: n.map((e, n) => (0, l.jsx)("li", {
      className: j.connection,
      children: (0, l.jsx)(g, {
        applicationRoleConnection: e,
        locale: a,
        onApplicationClicked: () => {
          s({
            action: "PRESS_APP_CONNECTION"
          }), i()
        },
        selectedGuildId: null != c ? c : true
      })
    }, "".concat(n, "-").concat(e.application.id)))
  })
}