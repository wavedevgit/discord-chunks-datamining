/** Chunk was on 77046 **/
/** chunk id: 272509, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk667202 = require("./667202.jsx"),
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
  Chunk817238 = require("./817238.js");

function p(t) {
  let {
    guildId: i,
    transitionState: p,
    onClose: h,
    analyticsType: v = o.z.APP_DIRECTORY_UPSELL_MODAL
  } = t;
  return n.useEffect(() => {
    d.default.track(x.rMx.DISMISSIBLE_CONTENT_SHOWN, {
      type: o.z[v],
      guild_id: i
    })
  }, [i, v]), (0, s.jsx)(r.I, {
    title: _.intl.string(_.t["2tv5YG"]),
    subtitle: _.intl.string(_.t.pgwlDw),
    transitionState: p,
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
          dismissAction: I.L.SECONDARY,
          guildId: i
        })
      }
    }, {
      variant: "primary",
      text: _.intl.string(_.t["5e8Mrq"]),
      onClick: () => {
        h(), (0, c.Q3)(v, {
          forceTrack: true,
          dismissAction: I.L.PRIMARY,
          guildId: i
        }), (0, a.transitionToGlobalDiscovery)({
          tab: u.GlobalDiscoveryTab.APPS,
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
      className: C.listContainer,
      children: [(0, s.jsxs)("li", {
        className: C.listItem,
        children: [(0, s.jsx)(l.$2U, {
          color: "currentColor",
          className: C.wandIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: _.intl.string(_.t["0vKo5O"])
        })]
      }), (0, s.jsx)(b.Z, {
        className: C.divider
      }), (0, s.jsxs)("li", {
        className: C.listItem,
        children: [(0, s.jsx)(l.wGt, {
          color: "currentColor",
          className: C.robotIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: _.intl.string(_.t.CprEDA)
        })]
      }), (0, s.jsx)(b.Z, {
        className: C.divider
      }), (0, s.jsxs)("li", {
        className: C.listItem,
        children: [(0, s.jsx)(l.EO4, {
          color: "currentColor",
          className: C.smileIcon
        }), (0, s.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: _.intl.string(_.t.wQJMPD)
        })]
      })]
    })
  })
}