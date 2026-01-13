/** Chunk was on 22979 **/
/** chunk id: 264603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk199849 = require("./199849.jsx"),
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
  Chunk246992 = require("./246992.js"),
  Chunk663618 = require("./663618.js"),
  Chunk17827 = require("./17827.js");
let T = [{
  label: "Unset",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
}, {
  label: "All",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL
}, {
  label: "Users With Game",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME
}, {
  label: "None",
  value: Chunk524437.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE
}];

function O() {
  let e = r.useRef(null),
    {
      analyticsLocations: t
    } = (0, p.ZP)(m.Z.DEV_TOOLS),
    n = j.JG.useSetting(),
    [i, o] = r.useState(""),
    O = (0, s.e7)([g.ZP, C.Z], () => (0, v.Z)(g.ZP, C.Z)),
    N = (0, b.q)(i),
    P = (0, s.Wu)([x.Z], () => {
      var e, t;
      return null != (t = null == N || null == (e = N.linkedGames) ? true : e.map(e => x.Z.getApplication(e.id)).filter(e => null != e)) ? t : []
    }),
    w = (0, f.FG)(N, {
      allowedFlows: [f.ro.RPC]
    }),
    I = (0, f.FG)(N, {
      allowedFlows: [f.ro.WEB]
    }),
    k = (0, f.FG)(N),
    {
      canDeauthorize: R,
      deauthorize: A
    } = function(e) {
      let t = (0, s.e7)([y.default], () => y.default.getNewestTokenForApplication(e)),
        n = r.useCallback(() => {
          null != t && u.Z.delete(t.id)
        }, [t]);
      return {
        canDeauthorize: null != t,
        deauthorize: n
      }
    }(null == N ? true : N.id);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(S.panel, E.panel),
    children: [(0, a.jsxs)("div", {
      className: E.container,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-lg/normal",
        children: "Settings"
      }), (0, a.jsx)(c.B6, {
        label: "Receive DMs In Game",
        options: T,
        isSelected: e => e === n,
        select: j.JG.updateSetting,
        popoutLayerContext: _.O$,
        serialize: e => e.toString()
      })]
    }), (0, a.jsxs)("div", {
      className: E.container,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-lg/normal",
        children: "Application"
      }), (0, a.jsx)(d.oil, {
        label: "Application ID",
        value: i,
        onChange: o
      }), null != O && null != O.id ? (0, a.jsx)(d.Button, {
        onClick: () => o(O.id),
        variant: "primary",
        text: "Use detected game: ".concat(O.name, " (").concat(O.id, ")")
      }) : null, (0, a.jsxs)(d.Text, {
        variant: "text-md/normal",
        children: ["Application Name: ", null != N ? N.name : "N/A"]
      }), (0, a.jsxs)(d.Text, {
        variant: "text-md/normal",
        children: ["Linked Games:", " ", P.length > 0 ? P.map(e => {
          var t;
          return (null == (t = (0, h.r)(N)) ? true : t.id) === e.id ? "".concat(e.name, "*") : e.name
        }).join(", ") : "N/A"]
      })]
    }), (0, a.jsxs)("div", {
      className: E.container,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-lg/normal",
        children: "Authorization"
      }), (0, a.jsx)(d.Button, {
        disabled: !k.canStartAuthorization,
        onClick: () => k.startAuthorization({
          analyticsLocations: t
        }),
        variant: "primary",
        text: "Start Authorization"
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "This will start whichever authorization flow is available. RPC authorization takes precedence over web."
      }), (0, a.jsx)(d.Button, {
        disabled: !w.canStartAuthorization,
        onClick: () => w.startAuthorization({
          analyticsLocations: t
        }),
        variant: "secondary",
        text: "Start In-App Authorization"
      }), (0, a.jsx)(d.Button, {
        disabled: !I.canStartAuthorization,
        onClick: () => I.startAuthorization({
          analyticsLocations: t
        }),
        variant: "secondary",
        text: "Start Web Authorization"
      }), (0, a.jsx)(d.Button, {
        disabled: !R,
        onClick: A,
        variant: "critical-primary",
        text: "Deauthorize"
      })]
    })]
  })
}