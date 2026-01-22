/** Chunk was on 22477 **/
/** chunk id: 573121, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk736666 = require("./736666.js"),
  Chunk342887 = require("./342887.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk661251 = require("./661251.js"),
  Chunk843077 = require("./843077.js");

function p() {
  let [e, t] = l.useState(30), n = l.useCallback(() => {
    r.h.dispatch({
      type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
      state: s.R.LOADING
    })
  }, []);
  return (0, a.jsx)(i.IpV, {
    className: u.nd,
    children: (0, a.jsxs)("div", {
      className: m.l$,
      children: [(0, a.jsx)(i.Text, {
        className: m.Iv,
        variant: "text-lg/bold",
        children: "Voice Filters"
      }), (0, a.jsxs)("div", {
        className: m.Pm,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Set number of seconds remaining in countdown"
        }), (0, a.jsx)(i.ksK, {
          defaultValue: 30,
          onChange: e => {
            t(parseInt(e))
          }
        }), (0, a.jsx)(i.Button, {
          variant: "primary",
          size: "sm",
          text: "Set",
          onClick: () => void r.h.dispatch({
            type: "VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME",
            timeInSeconds: e
          })
        })]
      }), (0, a.jsxs)("div", {
        className: m.Pm,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-md/normal",
          children: "Reset to API values"
        }), (0, a.jsx)(i.Button, {
          variant: "primary",
          size: "sm",
          text: "Reset",
          onClick: () => {
            (0, o.st)()
          }
        })]
      }), (0, a.jsxs)("div", {
        className: m.Pm,
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
        className: m.Pm,
        children: (0, a.jsx)(i.Button, {
          variant: "primary",
          size: "sm",
          text: "Open voice filters panel",
          onClick: () => {
            c._.dispatch(d.jej.OPEN_VOICE_FILTER_POPOUT)
          }
        })
      })]
    })
  })
}