/** Chunk was on 93979 **/
/** chunk id: 769321, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk980120 = require("./980120.js");

function b(e) {
  let {
    applicationRoleConnection: n,
    locale: t,
    onApplicationClicked: i,
    selectedGuildId: o
  } = e, r = (0, s.rm)(n, t);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: v.platformIconContainer,
      children: null != n.application.bot ? (0, l.jsx)(c.Z, {
        user: new m.Z(n.application.bot),
        size: a.EFr.SIZE_16
      }) : (0, l.jsx)(a.IMN, {
        color: "currentColor",
        size: "sm"
      })
    }), (0, l.jsxs)("div", {
      className: v.connectionInfo,
      children: [(0, l.jsxs)(a.P3F, {
        className: v.connectedAppRoleAccountClickable,
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
        children: [null != n.platform_name ? (0, l.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: n.platform_name
        }) : null, null != n.platform_username ? (0, l.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          children: n.platform_username
        }) : null, (0, l.jsx)(a.Text, {
          variant: "text-xxs/normal",
          color: "text-default",
          className: v.connectedAppRoleAccountPoweredBy,
          children: j.intl.format(j.t.zIT9YA, {
            applicationHook: () => n.application.name
          })
        })]
      }), null != r && r.length > 0 ? (0, l.jsx)("div", {
        className: v.metadata,
        children: r
      }) : null]
    })]
  })
}

function g(e) {
  let {
    applicationRoleConnections: n,
    className: t,
    onClose: i
  } = e, {
    trackUserProfileAction: a
  } = (0, x.KZ)(), c = (0, r.e7)([f.default], () => f.default.locale), s = (0, r.e7)([p.Z], () => p.Z.getGuildId());
  return 0 === n.length ? null : (0, l.jsx)("ul", {
    className: o()(v.container, t),
    children: n.map((e, n) => (0, l.jsx)("li", {
      className: v.connection,
      children: (0, l.jsx)(b, {
        applicationRoleConnection: e,
        locale: c,
        onApplicationClicked: () => {
          a({
            action: "PRESS_APP_CONNECTION"
          }), i()
        },
        selectedGuildId: null != s ? s : true
      })
    }, "".concat(n, "-").concat(e.application.id)))
  })
}