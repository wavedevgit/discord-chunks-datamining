/** Chunk was on 65298 **/
/** chunk id: 661652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk873298 = require("./873298.js"),
  Chunk397927 = require("./397927.js"),
  Chunk824552 = require("./824552.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk975460 = require("./975460.js"),
  Chunk362490 = require("./362490.js"),
  Chunk587895 = require("./587895.js"),
  Chunk429913 = require("./429913.js"),
  Chunk15285 = require("./15285.js"),
  Chunk905552 = require("./905552.js"),
  Chunk253932 = require("./253932.js"),
  Chunk546183 = require("./546183.js"),
  Chunk157257 = require("./157257.js"),
  Chunk661251 = require("./661251.js"),
  Chunk508474 = require("./508474.js");
let C = [{
  id: "unset",
  label: "Unset",
  value: Chunk873298.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
}, {
  id: "all",
  label: "All",
  value: Chunk873298.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
}, {
  id: "usersWithGame",
  label: "Users With Game",
  value: Chunk873298.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
}, {
  id: "none",
  label: "None",
  value: Chunk873298.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
}];

function S() {
  var e;
  let t, n, r = l.useRef(null),
    {
      analyticsLocations: o
    } = (0, m.Ay)(u.A.DEV_TOOLS),
    S = v.TA.useSetting(),
    [O, T] = l.useState(""),
    E = (0, s.bG)([f.Ay, _.A], () => (0, b.A)(f.Ay, _.A)),
    N = (0, g.h)(O),
    w = (0, s.yK)([x.A], () => {
      var e, t;
      return null != (e = null == N || null == (t = N.linkedGames) ? true : t.map(e => x.A.getApplication(e.id)).filter(e => null != e)) ? e : []
    }),
    I = (0, h.RD)(N, {
      allowedFlows: [h._M.RPC]
    }),
    k = (0, h.RD)(N, {
      allowedFlows: [h._M.WEB]
    }),
    P = (0, h.RD)(N),
    {
      canDeauthorize: R,
      deauthorize: D
    } = (e = null == N ? true : N.id, t = (0, s.bG)([j.default], () => j.default.getNewestTokenForApplication(e)), n = l.useCallback(() => {
      null != t && d.A.delete(t.id)
    }, [t]), {
      canDeauthorize: null != t,
      deauthorize: n
    });
  return (0, a.jsxs)("div", {
    ref: r,
    className: i()(y.nd, A.n),
    children: [(0, a.jsxs)("div", {
      className: A.k,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/normal",
        children: "Settings"
      }), (0, a.jsx)(c.l6P, {
        label: "Receive DMs In Game",
        options: C,
        value: S,
        onSelectionChange: v.TA.updateSetting,
        selectionMode: "single",
        fullWidth: true
      })]
    }), (0, a.jsxs)("div", {
      className: A.k,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/normal",
        children: "Application"
      }), (0, a.jsx)(c.ksK, {
        label: "Application ID",
        value: O,
        onChange: T
      }), null != E && null != E.id ? (0, a.jsx)(c.Button, {
        onClick: () => T(E.id),
        variant: "primary",
        text: "Use detected game: ".concat(E.name, " (").concat(E.id, ")")
      }) : null, (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["Application Name: ", null != N ? N.name : "N/A"]
      }), (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["Linked Games:", " ", w.length > 0 ? w.map(e => {
          var t;
          return (null == (t = (0, p.t)(N)) ? true : t.id) === e.id ? "".concat(e.name, "*") : e.name
        }).join(", ") : "N/A"]
      })]
    }), (0, a.jsxs)("div", {
      className: A.k,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/normal",
        children: "Authorization"
      }), (0, a.jsx)(c.Button, {
        disabled: !P.canStartAuthorization,
        onClick: () => P.startAuthorization({
          analyticsLocations: o
        }),
        variant: "primary",
        text: "Start Authorization"
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "This will start whichever authorization flow is available. RPC authorization takes precedence over web."
      }), (0, a.jsx)(c.Button, {
        disabled: !I.canStartAuthorization,
        onClick: () => I.startAuthorization({
          analyticsLocations: o
        }),
        variant: "secondary",
        text: "Start In-App Authorization"
      }), (0, a.jsx)(c.Button, {
        disabled: !k.canStartAuthorization,
        onClick: () => k.startAuthorization({
          analyticsLocations: o
        }),
        variant: "secondary",
        text: "Start Web Authorization"
      }), (0, a.jsx)(c.Button, {
        disabled: !R,
        onClick: D,
        variant: "critical-primary",
        text: "Deauthorize"
      })]
    })]
  })
}