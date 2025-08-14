/** Chunk was on web.js **/
/** chunk id: 861974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => c,
  W: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk777207 = require("./777207.jsx"),
  Chunk343696 = require("./343696.js"),
  c = function(e) {
    return e.WARNING = "warn", e.INFO = "info", e.ERROR = "danger", e.POSITIVE = "positive", e.PREVIEW = "preview", e
  }({});

function u(e) {
  switch (e) {
    case "warn":
      return a.Mgn;
    case "info":
      return a.d3s;
    case "danger":
      return a.k$p;
    case "positive":
      return a.dz2;
    case "preview":
      return a.Che
  }
}

function d(e) {
  switch (e) {
    case "warn":
      return l.warning;
    case "info":
      return l.info;
    case "danger":
      return l.error;
    case "positive":
    case "preview":
      return l.positive
  }
}

function f(e) {
  let {
    children: t,
    messageType: n,
    className: i,
    textColor: a = "text-default",
    textVariant: c = "text-sm/medium"
  } = e, f = u(n), _ = d(n);
  return (0, r.jsxs)("div", {
    className: o()(l.container, _, i),
    children: [(0, r.jsx)("div", {
      className: l.iconDiv,
      children: f && (0, r.jsx)(f, {
        className: l.icon,
        color: "currentColor"
      })
    }), (0, r.jsx)(s.x, {
      className: l.text,
      color: a,
      variant: c,
      children: t
    })]
  })
}