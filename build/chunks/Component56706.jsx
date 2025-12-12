/** Chunk was on 88499 **/
/** chunk id: 56706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk750180 = require("./750180.js"),
  Chunk358820 = require("./358820.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk451429 = require("./451429.js"),
  Chunk877600 = require("./877600.js");

function p() {
  let [e, t] = Chunk473749.useState(30), n = Chunk473749.useCallback(() => {
    Chunk570140.Z.dispatch({
      type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
      state: Chunk750180.O.LOADING
    })
  }, []);
  return (0, Chunk54381.jsx)(Chunk481060.zJl, {
    className: Chunk451429.panel,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk877600.panelInner,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk877600.panelHeader,
        variant: "text-lg/bold",
        children: "Voice Filters"
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk877600.panelRow,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Set number of seconds remaining in countdown"
        }), (0, Chunk54381.jsx)(Chunk481060.oil, {
          defaultValue: 30,
          onChange: e => {
            t(parseInt(e))
          }
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Set",
          onClick: () => void Chunk570140.Z.dispatch({
            type: "VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME",
            timeInSeconds: module
          })
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk877600.panelRow,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Reset to API values"
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset",
          onClick: () => {
            (0, Chunk358820.wV)()
          }
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk877600.panelRow,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "Pretend the native module is loading so when you close your app it'll look as if it crashed on load"
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Pretend",
          onClick: require
        })]
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk877600.panelRow,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: "Open voice filters panel",
          onClick: () => {
            Chunk585483.S.dispatch(Chunk981631.CkL.OPEN_VOICE_FILTER_POPOUT)
          }
        })
      })]
    })
  })
}