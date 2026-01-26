/** Chunk was on 67564 **/
/** chunk id: 396495, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  b: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk954571 = require("./954571.js"),
  Chunk222643 = require("./222643.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk792427 = require("./792427.js");

function g() {
  return (g = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function m(e) {
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
}

function b(e) {
  let {
    hidden: t,
    onDismiss: n
  } = e;
  return (0, c.A)({
    type: s.ImpressionTypes.VIEW,
    name: s.ImpressionNames.HD_STREAMING_POPOUT
  }, {
    disableTrack: t
  }, [t]), (0, r.jsxs)("div", {
    className: i()(f.jC, {
      [f.R]: t
    }),
    children: [(0, r.jsx)("img", {
      className: f.Sl,
      src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
      alt: "HD Streaming Nitro Perk"
    }), (0, r.jsx)(a.$n, {
      "data-migration-pending": true,
      className: f.b,
      "aria-label": h.intl.string(h.t.cpT0Cq),
      look: a.$n.Looks.BLANK,
      size: a.$n.Sizes.NONE,
      onClick: () => {
        n(), u.default.track(p.HAw.HD_STREAMING_POPOUT_DISMISSED)
      },
      children: (0, r.jsx)(o.PGe, {
        size: "xs",
        className: f.ut,
        color: "white"
      })
    }), (0, r.jsx)("div", {
      className: f.Gm,
      children: (0, r.jsxs)("div", {
        className: f.op,
        children: [(0, r.jsx)(o.Text, {
          className: f.aV,
          variant: "text-sm/medium",
          children: h.intl.format(h.t.ruvD7i, {})
        }), (0, r.jsxs)("div", {
          className: f.vX,
          children: [(0, r.jsx)(o.tvc, {
            size: "xs"
          }), (0, r.jsx)(o.Text, {
            className: f.aV,
            variant: "text-sm/medium",
            children: h.intl.string(h.t["BMw+7I"])
          })]
        })]
      })
    })]
  })
}

function A(e) {
  var t, n;
  let {} = e, l = g({}, e);
  return (0, r.jsx)(d.x, (t = m({}, l), n = n = {
    renderComponent: e => (0, r.jsx)(b, m({}, e))
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}