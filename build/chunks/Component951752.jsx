/** Chunk was on 1272 **/
/** chunk id: 951752, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk362762 = require("./362762.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk307907 = require("./307907.js");
let Chunk575703 = require("./575703.js");

function p(e) {
  let {
    children: t
  } = e, n = (0, i.e7)([a.Z], () => a.Z.getHighestState());
  return (0, s.isDesktop)() || n !== o.kEZ.OPENING ? (0, s.isDesktop)() || n !== o.kEZ.OPEN ? t : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      className: u.backgroundArtwork,
      src: d,
      alt: ""
    }), (0, r.jsx)("div", {
      className: u.container,
      children: (0, r.jsxs)(l.ZP, {
        children: [(0, r.jsx)(l.Dx, {
          className: u.appOpenedTitle,
          children: c.intl.string(c.t.csrAMJ)
        }), (0, r.jsx)(l.DK, {
          children: c.intl.string(c.t.ghBJz9)
        })]
      })
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      className: u.backgroundArtwork,
      src: d,
      alt: ""
    }), (0, r.jsx)("div", {
      className: u.container,
      children: (0, r.jsxs)(l.ZP, {
        children: [(0, r.jsx)(l.Dx, {
          children: c.intl.string(c.t["Z+hCVU"])
        }), (0, r.jsx)(l.Hh, {})]
      })
    })]
  })
}

function f(e) {
  var t, n;

  function i(t) {
    return (0, r.jsx)(p, {
      children: (0, r.jsx)(e, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, t), "deeplink-wrapper")
    })
  }
  return i.displayName = "Deeplink(".concat(null != (n = null != (t = e.displayName) ? t : e.name) ? n : "<Unknown>", ")"), i
}