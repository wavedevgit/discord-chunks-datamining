/** Chunk was on web.js **/
/** chunk id: 799151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk815061 = require("./815061.js"),
  Chunk442837 = require("./442837.js"),
  Chunk710593 = require("./710593.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk79320 = require("./79320.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk110109 = require("./110109.js");

function _() {
  let e = [{
      keybinds: ["Spacebar", "Enter"],
      name: Chunk388032.intl.string(Chunk388032.t["cs/HVF"])
    }, {
      keybinds: ["up", "down"],
      name: Chunk388032.intl.string(Chunk388032.t.dmMqa2)
    }, {
      keybinds: ["ESC"],
      name: Chunk388032.intl.string(Chunk388032.t["1ioMJS"])
    }],
    t = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    n = (0, Chunk79320.zP)();
  return (0, Chunk481060.Yzy)(require, {
    enter: {
      from: {
        opacity: 0,
        y: 80 * !exports
      },
      to: {
        opacity: 1,
        y: 0
      }
    },
    leave: {
      opacity: 0,
      y: 80 * !exports
    },
    config: Chunk815061.config.stiff
  }, "animate-always")((t, n) => n ? (0, r.jsx)("div", {
    className: f.positioner,
    children: (0, r.jsx)(a.animated.div, {
      className: f.container,
      style: t,
      children: e.map((t, n) => {
        let {
          keybinds: a,
          name: o
        } = t;
        return (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(l.Text, {
            variant: "text-md/semibold",
            className: f.bindName,
            children: o
          }), a.map(e => (0, r.jsx)(s.M, {
            shortcut: e,
            className: f.shortcut
          }, e)), n < e.length - 1 ? (0, r.jsx)("span", {
            className: f.separator
          }) : null]
        }, o)
      })
    })
  }) : null)
}