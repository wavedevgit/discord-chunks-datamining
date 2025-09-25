/** Chunk was on web.js **/
/** chunk id: 861974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => c,
  W: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk657707 = require("./657707.js"),
  Chunk777207 = require("./777207.jsx"),
  Chunk510166 = require("./510166.js"),
  c = function(e) {
    return e.WARNING = "warn", e.INFO = "info", e.ERROR = "danger", e.POSITIVE = "positive", e.PREVIEW = "preview", e
  }({});

function u(e) {
  switch (e) {
    case "warn":
      return o.Mgn;
    case "info":
      return o.d3s;
    case "danger":
      return o.k$p;
    case "positive":
      return o.dz2;
    case "preview":
      return o.Che
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
    action: i,
    className: o,
    textColor: c = "text-default",
    textVariant: f = "text-sm/medium"
  } = e, _ = u(n), p = d(n);
  return (0, r.jsxs)("div", {
    className: a()(l.container, p, o),
    children: [(0, r.jsx)("div", {
      className: l.iconDiv,
      children: null != _ ? (0, r.jsx)(_, {
        className: l.icon,
        color: "currentColor"
      }) : null
    }), (0, r.jsx)(s.x, {
      className: l.text,
      color: c,
      variant: f,
      children: t
    }), null != i ? (0, r.jsx)("div", {
      className: l.actionContainer,
      children: i
    }) : null]
  })
}