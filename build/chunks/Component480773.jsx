/** Chunk was on web.js **/
/** chunk id: 480773, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk245595 = require("./245595.jsx"),
  Chunk540391 = require("./540391.jsx"),
  Chunk684109 = require("./684109.jsx"),
  Chunk18769 = require("./18769.jsx");

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

function d(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = f(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let p = {
  name: "FeaturedCollection",
  id: "featured-collection",
  component: e => {
    let {
      columns: t
    } = e, n = d(e, ["columns"]);
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(i.Text, {
        variant: "text-lg/semibold",
        children: "Featured Collection will take up the full width of the parent, so it is best suited for Stack or Grid parents"
      }), (0, r.jsx)(o.A, {
        children: (0, r.jsx)(l.A, u({}, n))
      }), (0, r.jsxs)(o.A, {
        children: [(0, r.jsxs)(i.Text, {
          variant: "text-lg/semibold",
          children: ["Grid (", t, "):"]
        }), (0, r.jsxs)(a.A, {
          columns: t,
          children: [(0, r.jsx)(l.A, u({}, n)), (0, r.jsx)(l.A, u({}, n))]
        })]
      }), (0, r.jsxs)(o.A, {
        children: [(0, r.jsx)(i.Text, {
          variant: "text-lg/semibold",
          children: "Stack:"
        }), (0, r.jsxs)(s.A, {
          direction: "horizontal",
          children: [(0, r.jsx)(l.A, u({}, n)), (0, r.jsx)(l.A, u({}, n)), (0, r.jsx)(l.A, u({}, n)), (0, r.jsx)(l.A, u({}, n))]
        })]
      })]
    })
  },
  controls: {
    backgroundImage: {
      label: "Background Image",
      type: "text",
      defaultValue: "https://cdn.discordapp.com/assets/content/cd657aa88cb5c636a97dd3a5d68debfb009515cdc1c541296c1ac4e3ad5fc63e"
    },
    logoSrc: {
      label: "Logo Source",
      type: "text",
      defaultValue: "https://cdn.discordapp.com/assets/content/272efe50874c7fc6e788078e6f8b5fdfc40a7de7358fe3672f1b5e3659047bda"
    },
    supplementalImage: {
      label: "supplemental Image",
      type: "text",
      defaultValue: "https://cdn.discordapp.com/assets/content/c73a78420e788a01f10ae7106a1b858e78fffd11e0e2eee6ece0acf192bc3bf3.png"
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
    },
    columns: {
      label: "Columns",
      type: "number",
      defaultValue: 2
    }
  }
}