/** Chunk was on 66003 **/
/** chunk id: 258942, original params: t,i,s (module,exports,require) **/
require.d(exports, {
  default: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk826673 = require("./826673.js"),
  Chunk837057 = require("./837057.js"),
  Chunk813516 = require("./813516.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk310419 = require("./310419.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk449488 = require("./449488.js");

function A(t) {
  let {
    guildId: i,
    transitionState: A,
    onClose: h,
    analyticsType: I = l.M.APP_DIRECTORY_UPSELL_MODAL
  } = t;
  return n.useEffect(() => {
    d.default.track(x.HAw.DISMISSIBLE_CONTENT_SHOWN, {
      type: l.M[I],
      guild_id: i
    })
  }, [i, I]), (0, e.jsx)(r.ExpressiveModal, {
    title: C.intl.string(C.t["2tv5YG"]),
    subtitle: C.intl.string(C.t.pgwlD7),
    transitionState: A,
    size: "sm",
    graphic: {
      type: "lottie",
      lottie: () => s.e("95947").then(s.t.bind(s, 604902, 19)),
      aspectRatio: "6/4"
    },
    onClose: h,
    actions: [{
      variant: "secondary",
      text: C.intl.string(C.t.L5eIZ2),
      onClick: () => {
        h(), (0, o.Dr)(I, {
          forceTrack: true,
          dismissAction: u.i.SECONDARY,
          guildId: i
        })
      }
    }, {
      variant: "primary",
      text: C.intl.string(C.t["5e8Mrp"]),
      onClick: () => {
        h(), (0, o.Dr)(I, {
          forceTrack: true,
          dismissAction: u.i.PRIMARY,
          guildId: i
        }), (0, c.transitionToGlobalDiscovery)({
          tab: _.GlobalDiscoveryTab.APPS,
          newSessionState: {
            guildId: i,
            entrypoint: {
              name: m.sW.APPLICATION_DIRECTORY_UPSELL_MODAL
            }
          }
        })
      }
    }],
    children: (0, e.jsxs)("ul", {
      className: p.qI,
      children: [(0, e.jsxs)("li", {
        className: p.Aw,
        children: [(0, e.jsx)(a.Dud, {
          color: "currentColor",
          className: p.Kb
        }), (0, e.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: C.intl.string(C.t["0vKo5F"])
        })]
      }), (0, e.jsx)(b.A, {
        className: p.yF
      }), (0, e.jsxs)("li", {
        className: p.Aw,
        children: [(0, e.jsx)(a.CnV, {
          color: "currentColor",
          className: p.EQ
        }), (0, e.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: C.intl.string(C.t.CprEDO)
        })]
      }), (0, e.jsx)(b.A, {
        className: p.yF
      }), (0, e.jsxs)("li", {
        className: p.Aw,
        children: [(0, e.jsx)(a.nm2, {
          color: "currentColor",
          className: p.Cf
        }), (0, e.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: C.intl.string(C.t.wQJMPC)
        })]
      })]
    })
  })
}