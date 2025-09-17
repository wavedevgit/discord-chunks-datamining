/** Chunk was on web.js **/
/** chunk id: 710593, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => f
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk358085 = require("./358085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk959638 = require("./959638.js");

function c(e) {
  let {
    direction: t = "up"
  } = e;
  return (0, r.jsx)("svg", {
    width: "10",
    height: "10",
    xmlns: "http://www.w3.org/2000/svg",
    className: a()(l.bindArrow, l[t]),
    children: (0, r.jsx)("g", {
      fill: "#FFFFFF",
      children: (0, r.jsx)("polygon", {
        transform: "translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ",
        points: "4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10"
      })
    })
  })
}

function u(e) {
  let {
    children: t,
    text: n,
    macText: i,
    label: a,
    macLabel: s
  } = e, c = (0, o.isMac)() || (0, o.isMacWeb)(), u = c && null != i ? l.systemFont : true, d = c && null != s ? s : a, f = c && null != i ? i : null != t ? t : n;
  return (0, r.jsx)("span", {
    className: u,
    role: null != d ? "img" : true,
    "aria-label": null != d ? d : true,
    children: f
  })
}
let d = {
  ctrl: () => (0, Chunk951288.jsx)(u, {
    macText: "⌃",
    text: "ctrl",
    label: Chunk388032.intl.string(Chunk388032.t.jm6v8v)
  }),
  cmd: () => (0, Chunk951288.jsx)(u, {
    macText: "⌘",
    text: "cmd",
    label: Chunk388032.intl.string(Chunk388032.t.pYkiQk)
  }),
  mod: () => (0, Chunk951288.jsx)(u, {
    macText: "⌘",
    text: "ctrl",
    label: Chunk388032.intl.string(Chunk388032.t.jm6v8v),
    macLabel: Chunk388032.intl.string(Chunk388032.t.pYkiQk)
  }),
  alt: () => (0, Chunk951288.jsx)(u, {
    macText: "⌥",
    text: "alt",
    label: Chunk388032.intl.string(Chunk388032.t.R2n7d3),
    macLabel: Chunk388032.intl.string(Chunk388032.t.FMYSJS)
  }),
  shift: () => (0, Chunk951288.jsx)(u, {
    macText: "⇧",
    text: Chunk388032.intl.string(Chunk388032.t["L+jWo6"]),
    label: Chunk388032.intl.string(Chunk388032.t["q+/2+f"])
  }),
  up: () => (0, Chunk951288.jsx)(u, {
    label: Chunk388032.intl.string(Chunk388032.t.HxzHDQ),
    macText: "▲",
    children: (0, Chunk951288.jsx)(c, {
      direction: "up"
    })
  }),
  down: () => (0, Chunk951288.jsx)(u, {
    label: Chunk388032.intl.string(Chunk388032.t["a+iRlJ"]),
    macText: "▼",
    children: (0, Chunk951288.jsx)(c, {
      direction: "down"
    })
  }),
  left: () => (0, Chunk951288.jsx)(u, {
    label: Chunk388032.intl.string(Chunk388032.t.xFjIVF),
    macText: "◀",
    children: (0, Chunk951288.jsx)(c, {
      direction: "left"
    })
  }),
  right: () => (0, Chunk951288.jsx)(u, {
    label: Chunk388032.intl.string(Chunk388032.t.BT3jf3),
    macText: "▶",
    children: (0, Chunk951288.jsx)(c, {
      direction: "right"
    })
  }),
  pageup: () => Chunk388032.intl.string(Chunk388032.t.VdCWGB),
  pagedown: () => Chunk388032.intl.string(Chunk388032.t.gpSh3d),
  "any-character": () => Chunk388032.intl.string(Chunk388032.t.CkGpcX),
  plus: () => "+",
  return: () => (0, Chunk951288.jsx)(u, {
    macText: "⏎",
    text: Chunk388032.intl.string(Chunk388032.t.SUweGx),
    label: Chunk388032.intl.string(Chunk388032.t.yLNalZ),
    macLabel: Chunk388032.intl.string(Chunk388032.t.V7nPj4)
  }),
  enter: () => (0, Chunk951288.jsx)(u, {
    macText: "⏎",
    text: Chunk388032.intl.string(Chunk388032.t.SUweGx),
    label: Chunk388032.intl.string(Chunk388032.t.yLNalZ),
    macLabel: Chunk388032.intl.string(Chunk388032.t.V7nPj4)
  }),
  escape: () => (0, Chunk951288.jsx)(u, {
    text: Chunk388032.intl.string(Chunk388032.t.cQmsQE),
    label: Chunk388032.intl.string(Chunk388032.t["2qsw5+"])
  }),
  esc: () => (0, Chunk951288.jsx)(u, {
    text: Chunk388032.intl.string(Chunk388032.t.cQmsQE),
    label: Chunk388032.intl.string(Chunk388032.t["2qsw5+"])
  }),
  backspace: () => (0, Chunk951288.jsx)(u, {
    macText: "⌫",
    text: Chunk388032.intl.string(Chunk388032.t["L+36+v"]),
    label: Chunk388032.intl.string(Chunk388032.t["9c/Ikp"]),
    macLabel: Chunk388032.intl.string(Chunk388032.t.BTFDmp)
  })
};

function f(e) {
  let {
    shortcut: t,
    dim: n = false,
    className: i,
    keyClassName: o
  } = e, s = Array.isArray(t) ? t : t.split("+");
  return (0, r.jsx)("div", {
    className: a()(l.combo, i, {
      [l.dim]: n
    }),
    children: s.map(e => null != d[e] ? d[e]() : e).map((e, t) => (0, r.jsx)("span", {
      className: a()(l.key, o),
      children: e
    }, t))
  })
}