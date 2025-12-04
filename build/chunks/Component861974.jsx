/** Chunk was on web.js **/
/** chunk id: 861974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => u,
  W: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356);
require("./161953.js");
var Chunk657707 = require("./657707.js"),
  Chunk777207 = require("./777207.jsx"),
  Chunk343696 = require("./343696.js"),
  u = function(e) {
    return e.WARNING = "warn", e.INFO = "info", e.ERROR = "danger", e.POSITIVE = "positive", e.PREVIEW = "preview", e
  }({});

function d(e, t) {
  if (null != t) return t;
  switch (e) {
    case "warn":
      return s.aNP;
    case "info":
      return s.d3s;
    case "danger":
      return s.Mgn;
    case "positive":
      return s.dz2;
    case "preview":
      return s.Che
  }
}

function f(e) {
  switch (e) {
    case "warn":
      return c.warning;
    case "info":
      return c.info;
    case "danger":
      return c.error;
    case "positive":
    case "preview":
      return c.positive
  }
}
let p = e => {
  let {
    messageType: t,
    icon: n
  } = e, r = d(t, n);
  return i.createElement(r, {
    className: c.icon,
    color: "currentColor"
  })
};

function _(e) {
  let {
    children: t,
    messageType: n,
    action: i,
    className: a,
    textColor: s = "text-default",
    textVariant: u = "text-sm/medium",
    icon: d,
    hidden: _ = false
  } = e, m = f(n);
  return (0, r.jsx)("div", {
    className: o()(c.container, m, a, {
      [c.hidden]: _
    }),
    children: (0, r.jsxs)("div", {
      className: c.innerContainer,
      children: [(0, r.jsx)("div", {
        className: c.iconDiv,
        children: (0, r.jsx)(p, {
          messageType: n,
          icon: d
        })
      }), (0, r.jsx)(l.x, {
        className: c.text,
        color: s,
        variant: u,
        children: t
      }), null != i ? (0, r.jsx)("div", {
        className: c.actionContainer,
        children: i
      }) : null]
    })
  })
}