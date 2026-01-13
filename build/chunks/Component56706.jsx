/** Chunk was on 22979 **/
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
  Chunk663618 = require("./663618.js"),
  Chunk533477 = require("./533477.js");

function p() {
  let [e, t] = r.useState(30), n = r.useCallback(() => {
    l.Z.dispatch({
      type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
      state: s.O.LOADING
    })
  }, []);
  return (0, a.jsx)(i.zJl, {
    className: u.panel,
    children: (0, a.jsxs)("div", {
      className: m.panelInner,
      children: [(0, a.jsx)(i.Text, {
        className: m.panelHeader,
        variant: "text-lg/bold",
        children: "Voice Filters"
      }), (0, a.jsxs)("div", {
        className: m.panelRow,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Set number of seconds remaining in countdown"
        }), (0, a.jsx)(i.oil, {
          defaultValue: 30,
          onChange: e => {
            t(parseInt(e))
          }
        }), (0, a.jsx)(i.Button, {
          variant: "primary",
          size: "sm",
          text: "Set",
          onClick: () => void l.Z.dispatch({
            type: "VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME",
            timeInSeconds: e
          })
        })]
      }), (0, a.jsxs)("div", {
        className: m.panelRow,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Reset to API values"
        }), (0, a.jsx)(i.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset",
          onClick: () => {
            (0, o.wV)()
          }
        })]
      }), (0, a.jsxs)("div", {
        className: m.panelRow,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Pretend the native module is loading so when you close your app it'll look as if it crashed on load"
        }), (0, a.jsx)(i.Button, {
          variant: "primary",
          size: "sm",
          text: "Pretend",
          onClick: n
        })]
      }), (0, a.jsx)("div", {
        className: m.panelRow,
        children: (0, a.jsx)(i.Button, {
          variant: "primary",
          size: "sm",
          text: "Open voice filters panel",
          onClick: () => {
            c.S.dispatch(d.CkL.OPEN_VOICE_FILTER_POPOUT)
          }
        })
      })]
    })
  })
}