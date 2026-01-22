/** Chunk was on 66003 **/
/** chunk id: 258942, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => _
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

function _(t) {
  let {
    guildId: e,
    transitionState: _,
    onClose: b,
    analyticsType: f = r.M.APP_DIRECTORY_UPSELL_MODAL
  } = t;
  return i.useEffect(() => {
    x.default.track(u.HAw.DISMISSIBLE_CONTENT_SHOWN, {
      type: r.M[f],
      guild_id: e
    })
  }, [e, f]), (0, a.jsx)(c.ExpressiveModal, {
    title: A.intl.string(A.t["2tv5YG"]),
    subtitle: A.intl.string(A.t.pgwlD7),
    transitionState: _,
    size: "sm",
    graphic: {
      type: "lottie",
      lottie: () => s.e("95947").then(s.t.bind(s, 604902, 19)),
      aspectRatio: "6/4"
    },
    onClose: b,
    actions: [{
      variant: "secondary",
      text: A.intl.string(A.t.L5eIZ2),
      onClick: () => {
        b(), (0, n.Dr)(f, {
          forceTrack: true,
          dismissAction: p.i.SECONDARY,
          guildId: e
        })
      }
    }, {
      variant: "primary",
      text: A.intl.string(A.t["5e8Mrp"]),
      onClick: () => {
        b(), (0, n.Dr)(f, {
          forceTrack: true,
          dismissAction: p.i.PRIMARY,
          guildId: e
        }), (0, d.transitionToGlobalDiscovery)({
          tab: C.GlobalDiscoveryTab.APPS,
          newSessionState: {
            guildId: e,
            entrypoint: {
              name: m.sW.APPLICATION_DIRECTORY_UPSELL_MODAL
            }
          }
        })
      }
    }],
    children: (0, a.jsxs)("ul", {
      className: h.qI,
      children: [(0, a.jsxs)("li", {
        className: h.Aw,
        children: [(0, a.jsx)(l.Dud, {
          color: "currentColor",
          className: h.Kb
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: A.intl.string(A.t["0vKo5F"])
        })]
      }), (0, a.jsx)(o.A, {
        className: h.yF
      }), (0, a.jsxs)("li", {
        className: h.Aw,
        children: [(0, a.jsx)(l.CnV, {
          color: "currentColor",
          className: h.EQ
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: A.intl.string(A.t.CprEDO)
        })]
      }), (0, a.jsx)(o.A, {
        className: h.yF
      }), (0, a.jsxs)("li", {
        className: h.Aw,
        children: [(0, a.jsx)(l.nm2, {
          color: "currentColor",
          className: h.Cf
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: A.intl.string(A.t.wQJMPC)
        })]
      })]
    })
  })
}