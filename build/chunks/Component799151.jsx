/** Chunk was on web.js **/
/** chunk id: 799151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk488290 = require("./488290.js"),
  Chunk442837 = require("./442837.js"),
  Chunk710593 = require("./710593.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk79320 = require("./79320.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk110109 = require("./110109.js");

function h(e) {
  let {
    className: t
  } = e, n = [{
    keybinds: ["Spacebar", "Enter"],
    name: _.intl.string(_.t["cs/HVF"])
  }, {
    keybinds: ["up", "down"],
    name: _.intl.string(_.t.dmMqa2)
  }, {
    keybinds: ["ESC"],
    name: _.intl.string(_.t["1ioMJS"])
  }], a = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), h = (0, f.zP)();
  return (0, u.Yzy)(h, {
    enter: {
      from: {
        opacity: 0,
        y: 80 * !a
      },
      to: {
        opacity: 1,
        y: 0
      }
    },
    leave: {
      opacity: 0,
      y: 80 * !a
    },
    config: s.config.stiff
  }, "animate-always")((e, a) => a ? (0, r.jsx)("div", {
    className: o()(p.positioner, t),
    children: (0, r.jsx)(s.animated.div, {
      className: p.container,
      style: e,
      children: n.map((e, t) => {
        let {
          keybinds: a,
          name: o
        } = e;
        return (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: p.bindName,
            children: o
          }), a.map(e => (0, r.jsx)(c.M, {
            shortcut: e,
            className: p.shortcut
          }, e)), t < n.length - 1 ? (0, r.jsx)("span", {
            className: p.separator
          }) : null]
        }, o)
      })
    })
  }) : null)
}