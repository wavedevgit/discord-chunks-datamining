/** Chunk was on 58121 **/
/** chunk id: 603072, original params: e,n,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function I(e) {
  let {
    guild: n
  } = e, t = (0, C.Z)(n);
  r.useEffect(() => {
    (0, m.Q3)(s.z.CHANNEL_BROWSER_NEW_BADGE_NUX, {
      dismissAction: y.L.DISMISS
    })
  });
  let i = t ? O.intl.formatToPlainString(O.t.uqZgYe, {
      guildName: n.name
    }) : O.intl.formatToPlainString(O.t.velJea, {
      guildName: n.name
    }),
    a = t ? O.intl.string(O.t.h9mGOP) : O.intl.string(O.t.et6wav);
  return (0, u.Tt)({
    location: i
  }), (0, l.jsxs)(h.Z, {
    className: N.header,
    innerClassname: N.innerHeader,
    hideSearch: true,
    channelId: v.oC.CUSTOMIZE_COMMUNITY,
    guildId: n.id,
    children: [(0, l.jsx)(h.Z.Icon, {
      icon: d.H$4,
      "aria-hidden": true
    }), (0, l.jsx)(h.Z.Title, {
      children: a
    })]
  })
}

function w(e) {
  let {
    guildId: n,
    selectedSection: t
  } = e, i = (0, o.e7)([_.Z], () => _.Z.getGuild(n)), s = (0, C.Z)(i), [u, m] = r.useState(null != t ? t : j.l7.CUSTOMIZE);
  r.useEffect(() => {
    null != t && m(t)
  }, [t]);
  let h = (0, o.e7)([x.ZP], () => x.ZP.getCurrentSidebarChannelId(v.oC.CHANNEL_BROWSER)),
    y = null != h && u === j.l7.BROWSE,
    w = (0, o.e7)([g.Z], () => g.Z.getNewChannelIds(n).size > 0),
    P = (0, p.fU)(n);
  return null == i ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: a()(Z.chat, {
        [Z.threadSidebarOpen]: y
      }),
      children: [(0, l.jsx)(I, {
        guild: i
      }), (0, l.jsxs)("div", {
        className: a()(Z.content, N.container),
        children: [s && (0, l.jsxs)(d.njP, {
          className: N.tabBar,
          type: "top",
          look: "brand",
          selectedItem: u,
          onItemSelect: e => m(e),
          children: [(0, l.jsx)(d.njP.Item, {
            className: N.tabBarItem,
            id: j.l7.CUSTOMIZE,
            children: O.intl.string(O.t.H2cICW)
          }, j.l7.CUSTOMIZE), (0, l.jsxs)(d.njP.Item, {
            className: N.tabBarItem,
            id: j.l7.BROWSE,
            "aria-label": O.intl.string(O.t.et6wav),
            children: [O.intl.string(O.t.et6wav), (0, l.jsx)(d.IGR, {
              text: w ? O.intl.string(O.t.psHMa6) : P,
              color: w ? c.Z.unsafe_rawColors.BRAND_260.css : c.Z.colors.BACKGROUND_ACCENT.css,
              className: a()({
                [N.newBadge]: w
              })
            })]
          }, j.l7.BROWSE)]
        }), (() => {
          switch (u) {
            case j.l7.CUSTOMIZE:
              return (0, l.jsx)(b.Z, {
                guildId: n,
                onBrowseChannels: () => m(j.l7.BROWSE)
              });
            case j.l7.BROWSE:
            default:
              return (0, l.jsx)(f.Z, {
                guildId: n
              })
          }
        })()]
      })]
    }), y && (0, l.jsx)(f.I, {
      channelId: h
    })]
  })
}