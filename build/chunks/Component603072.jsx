/** Chunk was on 58121 **/
/** chunk id: 603072, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk252618 = require("./252618.js"),
  Chunk266454 = require("./266454.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk216306 = require("./216306.js"),
  Chunk104155 = require("./104155.jsx"),
  Chunk22082 = require("./22082.js"),
  Chunk433355 = require("./433355.js"),
  Chunk430824 = require("./430824.js"),
  Chunk31445 = require("./31445.js"),
  Chunk59350 = require("./59350.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk176505 = require("./176505.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk126512 = require("./126512.js"),
  Chunk97009 = require("./97009.js");

function Z(e) {
  let {
    guild: t
  } = e, n = (0, C.Z)(t);
  l.useEffect(() => {
    (0, p.Q3)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, {
      dismissAction: O.L.DISMISS
    })
  });
  let i = n ? y.intl.formatToPlainString(y.t.uqZgYe, {
      guildName: t.name
    }) : y.intl.formatToPlainString(y.t.velJea, {
      guildName: t.name
    }),
    a = n ? y.intl.string(y.t.h9mGOP) : y.intl.string(y.t.et6wav);
  return (0, u.Tt)({
    location: i
  }), (0, r.jsxs)(h.Z, {
    className: N.header,
    innerClassname: N.innerHeader,
    hideSearch: true,
    channelId: v.oC.CUSTOMIZE_COMMUNITY,
    guildId: t.id,
    children: [(0, r.jsx)(h.Z.Icon, {
      icon: d.H$4,
      "aria-hidden": true
    }), (0, r.jsx)(h.Z.Title, {
      children: a
    })]
  })
}

function I(e) {
  let {
    guildId: t,
    selectedSection: n
  } = e, i = (0, o.e7)([x.Z], () => x.Z.getGuild(t)), s = (0, C.Z)(i), [u, p] = l.useState(null != n ? n : j.l7.CUSTOMIZE);
  l.useEffect(() => {
    null != n && p(n)
  }, [n]);
  let h = (0, o.e7)([_.ZP], () => _.ZP.getCurrentSidebarChannelId(v.oC.CHANNEL_BROWSER)),
    O = null != h && u === j.l7.BROWSE,
    I = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(t).size > 0),
    P = (0, f.fU)(t);
  return null == i ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a()(w.chat, {
        [w.threadSidebarOpen]: O
      }),
      children: [(0, r.jsx)(Z, {
        guild: i
      }), (0, r.jsxs)("div", {
        className: a()(w.content, N.container),
        children: [s && (0, r.jsxs)(d.njP, {
          className: N.tabBar,
          type: "top",
          look: "brand",
          selectedItem: u,
          onItemSelect: e => p(e),
          children: [(0, r.jsx)(d.njP.Item, {
            className: N.tabBarItem,
            id: j.l7.CUSTOMIZE,
            children: y.intl.string(y.t.H2cICW)
          }, j.l7.CUSTOMIZE), (0, r.jsxs)(d.njP.Item, {
            className: N.tabBarItem,
            id: j.l7.BROWSE,
            "aria-label": y.intl.string(y.t.et6wav),
            children: [y.intl.string(y.t.et6wav), (0, r.jsx)(d.IGR, {
              text: I ? y.intl.string(y.t.psHMa6) : P,
              color: I ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css,
              className: a()({
                [N.newBadge]: I
              })
            })]
          }, j.l7.BROWSE)]
        }), (() => {
          switch (u) {
            case j.l7.CUSTOMIZE:
              return (0, r.jsx)(b.Z, {
                guildId: t,
                onBrowseChannels: () => p(j.l7.BROWSE)
              });
            case j.l7.BROWSE:
            default:
              return (0, r.jsx)(m.Z, {
                guildId: t
              })
          }
        })()]
      })]
    }), O && (0, r.jsx)(m.I, {
      channelId: h
    })]
  })
}