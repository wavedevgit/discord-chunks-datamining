/** Chunk was on 77046 **/
/** chunk id: 272509, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk749681 = require("./749681.js"),
  Chunk661824 = require("./661824.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk258971 = require("./258971.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk104396 = require("./104396.js");

function C(t) {
  let {
    guildId: i,
    transitionState: C,
    onClose: h,
    analyticsType: v = r.z.APP_DIRECTORY_UPSELL_MODAL
  } = t;
  return n.useEffect(() => {
    d.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
      type: r.z[v],
      guild_id: i
    })
  }, [i, v]), (0, s.jsx)(o.ExpressiveModal, {
    title: _.intl.string(_.t["2tv5YG"]),
    subtitle: _.intl.string(_.t.pgwlD7),
    transitionState: C,
    size: "sm",
    graphic: {
      type: "lottie",
      lottie: () => e.e("94792").then(e.t.bind(e, 972951, 19)),
      aspectRatio: "6/4"
    },
    onClose: h,
    actions: [{
      variant: "secondary",
      text: _.intl.string(_.t.L5eIZ2),
      onClick: () => {
        h(), (0, c.Q3)(v, {
          forceTrack: true,
          dismissAction: u.L.SECONDARY,
          guildId: i
        })
      }
    }, {
      variant: "primary",
      text: _.intl.string(_.t["5e8Mrp"]),
      onClick: () => {
        h(), (0, c.Q3)(v, {
          forceTrack: true,
          dismissAction: u.L.PRIMARY,
          guildId: i
        }), (0, a.transitionToGlobalDiscovery)({
          tab: I.GlobalDiscoveryTab.APPS,
          newSessionState: {
            guildId: i,
            entrypoint: {
              name: m.xF.APPLICATION_DIRECTORY_UPSELL_MODAL
            }
          }
        })
      }
    }],
    children: (0, s.jsxs)("ul", {
      className: p.listContainer,
      children: [(0, s.jsxs)("li", {
        className: p.listItem,
        children: [(0, s.jsx)(l.$2U, {
          color: "currentColor",
          className: p.wandIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: _.intl.string(_.t["0vKo5F"])
        })]
      }), (0, s.jsx)(b.Z, {
        className: p.divider
      }), (0, s.jsxs)("li", {
        className: p.listItem,
        children: [(0, s.jsx)(l.wGt, {
          color: "currentColor",
          className: p.robotIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: _.intl.string(_.t.CprEDO)
        })]
      }), (0, s.jsx)(b.Z, {
        className: p.divider
      }), (0, s.jsxs)("li", {
        className: p.listItem,
        children: [(0, s.jsx)(l.EO4, {
          color: "currentColor",
          className: p.smileIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: _.intl.string(_.t.wQJMPC)
        })]
      })]
    })
  })
}