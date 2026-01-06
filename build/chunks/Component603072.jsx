/** Chunk was on 58121 **/
/** chunk id: 603072, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk453223 = require("./453223.js"),
  Chunk978966 = require("./978966.js");

function w(e) {
  let {
    guild: t
  } = e, n = (0, C.Z)(t);
  r.useEffect(() => {
    (0, b.Q3)(c.z.CHANNEL_BROWSER_NEW_BADGE_NUX, {
      dismissAction: y.L.DISMISS
    })
  });
  let l = n ? N.intl.formatToPlainString(N.t.uqZgYe, {
      guildName: t.name
    }) : N.intl.formatToPlainString(N.t.velJea, {
      guildName: t.name
    }),
    i = n ? N.intl.string(N.t.h9mGOP) : N.intl.string(N.t.et6wav);
  return (0, u.Tt)({
    location: l
  }), (0, a.jsxs)(p.Z, {
    className: _.header,
    innerClassname: _.innerHeader,
    hideSearch: true,
    channelId: O.oC.CUSTOMIZE_COMMUNITY,
    guildId: t.id,
    children: [(0, a.jsx)(p.Z.Icon, {
      icon: s.H$4,
      "aria-hidden": true
    }), (0, a.jsx)(p.Z.Title, {
      children: i
    })]
  })
}

function I(e) {
  let {
    guildId: t,
    selectedSection: n
  } = e, l = (0, o.e7)([x.Z], () => x.Z.getGuild(t)), c = (0, C.Z)(l), [u, b] = r.useState(null != n ? n : v.l7.CUSTOMIZE);
  r.useEffect(() => {
    null != n && b(n)
  }, [n]), r.useEffect(() => {
    c || u !== v.l7.CUSTOMIZE || b(v.l7.BROWSE)
  }, [c, u]);
  let p = (0, o.e7)([g.ZP], () => g.ZP.getCurrentSidebarChannelId(O.oC.CHANNEL_BROWSER)),
    y = null != p && u === v.l7.BROWSE,
    I = (0, o.e7)([m.Z], () => m.Z.getNewChannelIds(t).size > 0),
    P = (0, f.fU)(t);
  return null == l ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i()(Z.chat, {
        [Z.threadSidebarOpen]: y
      }),
      children: [(0, a.jsx)(w, {
        guild: l
      }), (0, a.jsxs)("div", {
        className: i()(Z.content, _.container),
        children: [c && (0, a.jsxs)(s.njP, {
          className: _.tabBar,
          type: "top",
          look: "brand",
          selectedItem: u,
          onItemSelect: e => b(e),
          children: [(0, a.jsx)(s.njP.Item, {
            className: _.tabBarItem,
            id: v.l7.CUSTOMIZE,
            children: N.intl.string(N.t.H2cICW)
          }, v.l7.CUSTOMIZE), (0, a.jsxs)(s.njP.Item, {
            className: _.tabBarItem,
            id: v.l7.BROWSE,
            "aria-label": N.intl.string(N.t.et6wav),
            children: [N.intl.string(N.t.et6wav), (0, a.jsx)(s.IGR, {
              text: I ? N.intl.string(N.t.psHMa6) : P,
              color: I ? d.Z.unsafe_rawColors.BRAND_260.css : d.Z.colors.BACKGROUND_ACCENT.css,
              className: i()({
                [_.newBadge]: I
              })
            })]
          }, v.l7.BROWSE)]
        }), (() => {
          switch (u) {
            case v.l7.CUSTOMIZE:
              return (0, a.jsx)(j.Z, {
                guildId: t,
                onBrowseChannels: () => b(v.l7.BROWSE)
              });
            case v.l7.BROWSE:
            default:
              return (0, a.jsx)(h.Z, {
                guildId: t
              })
          }
        })()]
      })]
    }), y && (0, a.jsx)(h.I, {
      channelId: p
    })]
  })
}