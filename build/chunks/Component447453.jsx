/** Chunk was on web.js **/
/** chunk id: 447453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk425763 = require("./425763.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk14949 = require("./14949.js");

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
  }], a = (0, l.bG)([u.A], () => u.A.useReducedMotion), _ = (0, d.VU)();
  return (0, c.pnh)(_, {
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
    className: o()(p.lY, t),
    children: (0, r.jsx)(s.animated.div, {
      className: p.kL,
      style: e,
      children: n.map((e, t) => {
        let {
          keybinds: a,
          name: o
        } = e;
        return (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: p.nx,
            children: o
          }), a.map(e => (0, r.jsx)(c.e7I, {
            shortcut: e,
            className: p.LE
          }, e)), t < n.length - 1 ? (0, r.jsx)("span", {
            className: p.me
          }) : null]
        }, o)
      })
    })
  }) : null)
}