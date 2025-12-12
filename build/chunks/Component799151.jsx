/** Chunk was on web.js **/
/** chunk id: 799151, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk79320 = require("./79320.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk110109 = require("./110109.js");

function _(e) {
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
  }], o = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), _ = (0, d.zP)();
  return (0, c.Yzy)(_, {
    enter: {
      from: {
        opacity: 0,
        y: 80 * !o
      },
      to: {
        opacity: 1,
        y: 0
      }
    },
    leave: {
      opacity: 0,
      y: 80 * !o
    },
    config: s.config.stiff
  }, "animate-always")((e, o) => o ? (0, r.jsx)("div", {
    className: a()(p.positioner, t),
    children: (0, r.jsx)(s.animated.div, {
      className: p.container,
      style: e,
      children: n.map((e, t) => {
        let {
          keybinds: o,
          name: a
        } = e;
        return (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: p.bindName,
            children: a
          }), o.map(e => (0, r.jsx)(c.M2$, {
            shortcut: e,
            className: p.shortcut
          }, e)), t < n.length - 1 ? (0, r.jsx)("span", {
            className: p.separator
          }) : null]
        }, a)
      })
    })
  }) : null)
}