/** Chunk was on web.js **/
/** chunk id: 543388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk56651 = require("./56651.js");

function d(e) {
  let {
    application: t,
    timestamp: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Z, {
      size: l.A.LARGE,
      game: t
    }), (0, r.jsxs)("div", {
      className: u.textContainer,
      children: [(0, r.jsx)(s.Text, {
        className: u.timestamp,
        variant: "text-xs/medium",
        color: "text-muted",
        children: a()(n).format("LLLL")
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "interactive-active",
        children: c.intl.format(c.t.J3s8JP, {
          applicationName: t.name
        })
      })]
    })]
  })
}

function f(e) {
  let {
    application: t,
    timestamp: n,
    children: i
  } = e;
  return (0, r.jsx)(o.u, {
    position: "top",
    asContainer: true,
    "aria-label": c.intl.string(c.t["5nMcv1"]),
    __unsupportedReactNodeAsText: (0, r.jsx)(d, {
      application: t,
      timestamp: n
    }),
    children: (0, r.jsx)(s.P3F, {
      tag: "span",
      children: i
    })
  })
}

function _(e) {
  let {
    application: t,
    timestamp: n,
    compact: i,
    children: a
  } = e;
  return (0, r.jsxs)(f, {
    application: t,
    timestamp: n,
    children: [i ? null : (0, r.jsx)(s.iWm, {
      className: u.gameIcon,
      size: "custom",
      width: 14,
      height: 14
    }), a]
  })
}