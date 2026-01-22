/** Chunk was on 22477 **/
/** chunk id: 661652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
  let t, n, i = l.useRef(null),
    {
      analyticsLocations: o
    } = (0, m.Ay)(u.A.DEV_TOOLS),
    S = v.TA.useSetting(),
    [O, E] = l.useState(""),
    N = (0, s.bG)([b.Ay, y.A], () => (0, g.A)(b.Ay, y.A)),
    T = (0, x.h)(O),
    I = (0, s.yK)([f.A], () => {
      var e, t;
      return null != (e = null == T || null == (t = T.linkedGames) ? true : t.map(e => f.A.getApplication(e.id)).filter(e => null != e)) ? e : []
    }),
    k = (0, h.RD)(T, {
      allowedFlows: [h._M.RPC]
    }),
    w = (0, h.RD)(T, {
      allowedFlows: [h._M.WEB]
    }),
    P = (0, h.RD)(T),
    {
      canDeauthorize: R,
      deauthorize: D
    } = (e = null == T ? true : T.id, t = (0, s.bG)([j.default], () => j.default.getNewestTokenForApplication(e)), n = l.useCallback(() => {
      null != t && d.A.delete(t.id)
    }, [t]), {
      canDeauthorize: null != t,
      deauthorize: n
    });
  return (0, a.jsxs)("div", {
    ref: i,
    className: r()(_.nd, A.n),
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
        onChange: E
      }), null != N && null != N.id ? (0, a.jsx)(c.Button, {
        onClick: () => E(N.id),
        variant: "primary",
        text: "Use detected game: ".concat(N.name, " (").concat(N.id, ")")
      }) : null, (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["Application Name: ", null != T ? T.name : "N/A"]
      }), (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["Linked Games:", " ", I.length > 0 ? I.map(e => {
          var t;
          return (null == (t = (0, p.t)(T)) ? true : t.id) === e.id ? "".concat(e.name, "*") : e.name
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
        disabled: !k.canStartAuthorization,
        onClick: () => k.startAuthorization({
          analyticsLocations: o
        }),
        variant: "secondary",
        text: "Start In-App Authorization"
      }), (0, a.jsx)(c.Button, {
        disabled: !w.canStartAuthorization,
        onClick: () => w.startAuthorization({
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