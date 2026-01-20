/** Chunk was on 22979 **/
/** chunk id: 264603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk407089 = require("./407089.js"),
  Chunk524995 = require("./524995.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk594190 = require("./594190.js"),
  Chunk989941 = require("./989941.js"),
  Chunk695346 = require("./695346.js"),
  Chunk881998 = require("./881998.js"),
  Chunk449224 = require("./449224.js"),
  Chunk663618 = require("./663618.js"),
  Chunk17827 = require("./17827.js");
let S = [{
  id: "unset",
  label: "Unset",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
}, {
  id: "all",
  label: "All",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
}, {
  id: "usersWithGame",
  label: "Users With Game",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
}, {
  id: "none",
  label: "None",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
}];

function E() {
  let e = r.useRef(null),
    {
      analyticsLocations: t
    } = (0, m.ZP)(u.Z.DEV_TOOLS),
    n = v.JG.useSetting(),
    [i, o] = r.useState(""),
    E = (0, s.e7)([x.ZP, y.Z], () => (0, g.Z)(x.ZP, y.Z)),
    T = (0, b.q)(i),
    O = (0, s.Wu)([f.Z], () => {
      var e, t;
      return null != (t = null == T || null == (e = T.linkedGames) ? true : e.map(e => f.Z.getApplication(e.id)).filter(e => null != e)) ? t : []
    }),
    N = (0, h.FG)(T, {
      allowedFlows: [h.ro.RPC]
    }),
    P = (0, h.FG)(T, {
      allowedFlows: [h.ro.WEB]
    }),
    w = (0, h.FG)(T),
    {
      canDeauthorize: I,
      deauthorize: k
    } = function(e) {
      let t = (0, s.e7)([j.default], () => j.default.getNewestTokenForApplication(e)),
        n = r.useCallback(() => {
          null != t && d.Z.delete(t.id)
        }, [t]);
      return {
        canDeauthorize: null != t,
        deauthorize: n
      }
    }(null == T ? true : T.id);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(C.panel, _.panel),
    children: [(0, a.jsxs)("div", {
      className: _.container,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/normal",
        children: "Settings"
      }), (0, a.jsx)(c.PhF, {
        label: "Receive DMs In Game",
        options: S,
        value: n,
        onSelectionChange: v.JG.updateSetting,
        selectionMode: "single",
        fullWidth: true
      })]
    }), (0, a.jsxs)("div", {
      className: _.container,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/normal",
        children: "Application"
      }), (0, a.jsx)(c.oil, {
        label: "Application ID",
        value: i,
        onChange: o
      }), null != E && null != E.id ? (0, a.jsx)(c.Button, {
        onClick: () => o(E.id),
        variant: "primary",
        text: "Use detected game: ".concat(E.name, " (").concat(E.id, ")")
      }) : null, (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["Application Name: ", null != T ? T.name : "N/A"]
      }), (0, a.jsxs)(c.Text, {
        variant: "text-md/normal",
        children: ["Linked Games:", " ", O.length > 0 ? O.map(e => {
          var t;
          return (null == (t = (0, p.r)(T)) ? true : t.id) === e.id ? "".concat(e.name, "*") : e.name
        }).join(", ") : "N/A"]
      })]
    }), (0, a.jsxs)("div", {
      className: _.container,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-lg/normal",
        children: "Authorization"
      }), (0, a.jsx)(c.Button, {
        disabled: !w.canStartAuthorization,
        onClick: () => w.startAuthorization({
          analyticsLocations: t
        }),
        variant: "primary",
        text: "Start Authorization"
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "This will start whichever authorization flow is available. RPC authorization takes precedence over web."
      }), (0, a.jsx)(c.Button, {
        disabled: !N.canStartAuthorization,
        onClick: () => N.startAuthorization({
          analyticsLocations: t
        }),
        variant: "secondary",
        text: "Start In-App Authorization"
      }), (0, a.jsx)(c.Button, {
        disabled: !P.canStartAuthorization,
        onClick: () => P.startAuthorization({
          analyticsLocations: t
        }),
        variant: "secondary",
        text: "Start Web Authorization"
      }), (0, a.jsx)(c.Button, {
        disabled: !I,
        onClick: k,
        variant: "critical-primary",
        text: "Deauthorize"
      })]
    })]
  })
}