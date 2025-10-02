/** Chunk was on 51711 **/
/** chunk id: 264603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk20471 = require("./20471.js"),
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
let y = [{
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

function C() {
  let e = Chunk647438.useRef(null),
    t = Chunk695346.JG.useSetting(),
    [n, i] = Chunk647438.useState(""),
    o = (0, Chunk442837.e7)([Chunk594190.ZP, Chunk449224.Z], () => (0, Chunk989941.Z)(Chunk594190.ZP, Chunk449224.Z)),
    C = (0, Chunk835473.q)(require),
    E = (0, Chunk442837.Wu)([Chunk812206.Z], () => {
      var e, t;
      return null != (t = null == C || null == (e = C.linkedGames) ? true : module.map(e => m.Z.getApplication(e.id)).filter(e => null != e)) ? exports : []
    }),
    S = (0, Chunk20471.FG)(C, {
      allowedFlows: [Chunk20471.ro.RPC]
    }),
    N = (0, Chunk20471.FG)(C, {
      allowedFlows: [Chunk20471.ro.WEB]
    }),
    T = (0, Chunk20471.FG)(C),
    {
      canDeauthorize: O,
      deauthorize: P
    } = function(e) {
      let t = (0, s.e7)([b.Z], () => b.Z.getNewestTokenForApplication(e)),
        n = r.useCallback(() => {
          null != t && d.Z.delete(t.id)
        }, [t]);
      return {
        canDeauthorize: null != t,
        deauthorize: n
      }
    }(null == C ? true : C.id);
  return (0, Chunk951288.jsxs)("div", {
    ref: module,
    className: l()(Chunk451429.panel, Chunk441900.panel),
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk441900.container,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/normal",
        children: "Settings"
      }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: "Receive DMs In Game",
        children: (0, Chunk951288.jsx)(Chunk481060.PhF, {
          options: y,
          isSelected: e => e === t,
          select: Chunk695346.JG.updateSetting,
          popoutLayerContext: Chunk246992.O$,
          serialize: e => e.toString()
        })
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk441900.container,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/normal",
        children: "Application"
      }), (0, Chunk951288.jsx)(Chunk481060.xJW, {
        title: "Application ID",
        children: (0, Chunk951288.jsx)(Chunk481060.oil, {
          value: require,
          onChange: Chunk120356
        })
      }), null != Chunk524437 && null != Chunk524437.id ? (0, Chunk951288.jsx)(Chunk481060.zxk, {
        onClick: () => Chunk120356(Chunk524437.id),
        variant: "primary",
        text: "Use detected game: ".concat(Chunk524437.name, " (").concat(Chunk524437.id, ")")
      }) : null, (0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Application Name: ", null != C ? C.name : "N/A"]
      }), (0, Chunk951288.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Linked Games:", " ", E.length > 0 ? E.map(e => {
          var t;
          return (null == (t = (0, u.ju)(C)) ? true : t.id) === e.id ? "".concat(e.name, "*") : e.name
        }).join(", ") : "N/A"]
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk441900.container,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/normal",
        children: "Authorization"
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        disabled: !T.canStartAuthorization,
        onClick: T.startAuthorization,
        variant: "primary",
        text: "Start Authorization"
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: "This will start whichever authorization flow is available. RPC authorization takes precedence over web."
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        disabled: !S.canStartAuthorization,
        onClick: S.startAuthorization,
        variant: "secondary",
        text: "Start In-App Authorization"
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        disabled: !N.canStartAuthorization,
        onClick: N.startAuthorization,
        variant: "secondary",
        text: "Start Web Authorization"
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        disabled: !O,
        onClick: P,
        variant: "critical-primary",
        text: "Deauthorize"
      })]
    })]
  })
}