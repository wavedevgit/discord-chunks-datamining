/** Chunk was on 88282 **/
/** chunk id: 264603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk451429 = require("./451429.js"),
  Chunk441900 = require("./441900.js");
let N = [{
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

function T() {
  let e = Chunk473749.useRef(null),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(Chunk100527.Z.DEV_TOOLS),
    n = Chunk695346.JG.useSetting(),
    [r, o] = Chunk473749.useState(""),
    T = (0, Chunk442837.e7)([Chunk594190.ZP, Chunk449224.Z], () => (0, Chunk989941.Z)(Chunk594190.ZP, Chunk449224.Z)),
    O = (0, Chunk835473.q)(Chunk120356),
    P = (0, Chunk442837.Wu)([Chunk812206.Z], () => {
      var e, t;
      return null != (t = null == O || null == (e = O.linkedGames) ? true : module.map(e => f.Z.getApplication(e.id)).filter(e => null != e)) ? exports : []
    }),
    I = (0, Chunk524995.F)(O, {
      allowedFlows: [Chunk524995.r.RPC]
    }),
    w = (0, Chunk524995.F)(O, {
      allowedFlows: [Chunk524995.r.WEB]
    }),
    k = (0, Chunk524995.F)(O),
    {
      canDeauthorize: R,
      deauthorize: A
    } = function(e) {
      let t = (0, s.e7)([_.default], () => _.default.getNewestTokenForApplication(e)),
        n = l.useCallback(() => {
          null != t && u.Z.delete(t.id)
        }, [t]);
      return {
        canDeauthorize: null != t,
        deauthorize: n
      }
    }(null == O ? true : O.id);
  return (0, Chunk54381.jsxs)("div", {
    ref: module,
    className: i()(Chunk451429.panel, Chunk441900.panel),
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk441900.container,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/normal",
        children: "Settings"
      }), (0, Chunk54381.jsx)(Chunk199849.B6, {
        label: "Receive DMs In Game",
        options: N,
        isSelected: e => e === n,
        select: Chunk695346.JG.updateSetting,
        popoutLayerContext: Chunk246992.O$,
        serialize: e => e.toString()
      })]
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk441900.container,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/normal",
        children: "Application"
      }), (0, Chunk54381.jsx)(Chunk481060.oil, {
        label: "Application ID",
        value: Chunk120356,
        onChange: Chunk524437
      }), null != T && null != T.id ? (0, Chunk54381.jsx)(Chunk481060.Button, {
        onClick: () => Chunk524437(T.id),
        variant: "primary",
        text: "Use detected game: ".concat(T.name, " (").concat(T.id, ")")
      }) : null, (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Application Name: ", null != O ? O.name : "N/A"]
      }), (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Linked Games:", " ", P.length > 0 ? P.map(e => {
          var t;
          return (null == (t = (0, h.r)(O)) ? true : t.id) === e.id ? "".concat(e.name, "*") : e.name
        }).join(", ") : "N/A"]
      })]
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk441900.container,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/normal",
        children: "Authorization"
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        disabled: !k.canStartAuthorization,
        onClick: () => k.startAuthorization({
          analyticsLocations: exports
        }),
        variant: "primary",
        text: "Start Authorization"
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: "This will start whichever authorization flow is available. RPC authorization takes precedence over web."
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        disabled: !I.canStartAuthorization,
        onClick: () => I.startAuthorization({
          analyticsLocations: exports
        }),
        variant: "secondary",
        text: "Start In-App Authorization"
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        disabled: !w.canStartAuthorization,
        onClick: () => w.startAuthorization({
          analyticsLocations: exports
        }),
        variant: "secondary",
        text: "Start Web Authorization"
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        disabled: !R,
        onClick: A,
        variant: "critical-primary",
        text: "Deauthorize"
      })]
    })]
  })
}