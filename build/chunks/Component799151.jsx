/** Chunk was on web.js **/
/** chunk id: 799151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk79320 = require("./79320.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk382462 = require("./382462.js");

function p(e) {
  let {
    className: t
  } = e, n = [{
    keybinds: ["Spacebar", "Enter"],
    name: f.intl.string(f.t["cs/HVH"])
  }, {
    keybinds: ["up", "down"],
    name: f.intl.string(f.t.dmMqay)
  }, {
    keybinds: ["ESC"],
    name: f.intl.string(f.t["1ioMJQ"])
  }], a = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), p = (0, d.zP)();
  return (0, c.Yzy)(p, {
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
    className: o()(_.positioner, t),
    children: (0, r.jsx)(s.animated.div, {
      className: _.container,
      style: e,
      children: n.map((e, t) => {
        let {
          keybinds: a,
          name: o
        } = e;
        return (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: _.bindName,
            children: o
          }), a.map(e => (0, r.jsx)(c.M2$, {
            shortcut: e,
            className: _.shortcut
          }, e)), t < n.length - 1 ? (0, r.jsx)("span", {
            className: _.separator
          }) : null]
        }, o)
      })
    })
  }) : null)
}