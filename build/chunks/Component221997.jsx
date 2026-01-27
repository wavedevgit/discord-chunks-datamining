/** Chunk was on web.js **/
/** chunk id: 221997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk245595 = require("./245595.jsx"),
  Chunk540391 = require("./540391.jsx"),
  Chunk684109 = require("./684109.jsx"),
  Chunk304973 = require("./304973.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
let d = {
  name: "FeaturedChip",
  id: "featured-chip",
  component: e => (0, r.jsxs)("div", {
    children: [(0, r.jsx)(i.Text, {
      variant: "text-lg/semibold",
      children: "Featured Chip will take up the full width of the parent, so it is best suited for Stack or Grid parents"
    }), (0, r.jsx)(o.A, {
      children: (0, r.jsx)(l.A, u({}, e))
    }), (0, r.jsxs)(o.A, {
      children: [(0, r.jsx)(i.Text, {
        variant: "text-lg/semibold",
        children: "Grid (3):"
      }), (0, r.jsxs)(a.A, {
        columns: 3,
        children: [(0, r.jsx)(l.A, u({}, e)), (0, r.jsx)(l.A, u({}, e)), (0, r.jsx)(l.A, u({}, e)), (0, r.jsx)(l.A, u({}, e)), (0, r.jsx)(l.A, u({}, e)), (0, r.jsx)(l.A, u({}, e))]
      })]
    }), (0, r.jsxs)(o.A, {
      children: [(0, r.jsx)(i.Text, {
        variant: "text-lg/semibold",
        children: "Stack:"
      }), (0, r.jsxs)(s.A, {
        direction: "horizontal",
        children: [(0, r.jsx)(l.A, u({}, e)), (0, r.jsx)(l.A, u({}, e)), (0, r.jsx)(l.A, u({}, e)), (0, r.jsx)(l.A, u({}, e))]
      })]
    })]
  }),
  controls: {
    backgroundImage: {
      label: "Background Image",
      type: "text",
      defaultValue: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e"
    },
    ctaText: {
      label: "Background Image",
      type: "text",
      defaultValue: "Browse"
    },
    href: {
      label: "href",
      type: "text",
      defaultValue: "/shop/things"
    }
  }
}