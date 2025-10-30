/** Chunk was on 13873 **/
/** chunk id: 800966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk626135 = require("./626135.js"),
  Chunk738672 = require("./738672.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517485 = require("./517485.js");

function m() {
  return (m = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function g(e) {
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
  return (0, c.Z)({
    type: a.ImpressionTypes.VIEW,
    name: a.ImpressionNames.HD_STREAMING_POPOUT
  }, {
    disableTrack: t
  }, [t]), (0, r.jsxs)("div", {
    className: l()(h.popoutContainer, {
      [h.hidden]: t
    }),
    children: [(0, r.jsx)("img", {
      className: h.image,
      src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
      alt: "HD Streaming Nitro Perk"
    }), (0, r.jsx)(o.zx, {
      "data-migration-pending": true,
      className: h.closeButton,
      "aria-label": f.intl.string(f.t.cpT0Cq),
      look: o.zx.Looks.BLANK,
      size: o.zx.Sizes.NONE,
      onClick: () => {
        n(), u.default.track(p.rMx.HD_STREAMING_POPOUT_DISMISSED)
      },
      children: (0, r.jsx)(s.Dio, {
        size: "xs",
        className: h.closeIcon,
        color: "white"
      })
    }), (0, r.jsx)("div", {
      className: h.infoContainerParent,
      children: (0, r.jsxs)("div", {
        className: h.infoContainer,
        children: [(0, r.jsx)(s.Text, {
          className: h.infoText,
          variant: "text-sm/medium",
          children: f.intl.format(f.t.ruvD7i, {})
        }), (0, r.jsxs)("div", {
          className: h.poweredByNitroContainer,
          children: [(0, r.jsx)(s.SrA, {
            size: "xs"
          }), (0, r.jsx)(s.Text, {
            className: h.infoText,
            variant: "text-sm/medium",
            children: f.intl.string(f.t["BMw+7I"])
          })]
        })]
      })
    })]
  })
}

function _(e) {
  var t, n, i = m({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, r.jsx)(d.h, (t = g({}, i), n = n = {
    renderComponent: e => (0, r.jsx)(b, g({}, e))
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