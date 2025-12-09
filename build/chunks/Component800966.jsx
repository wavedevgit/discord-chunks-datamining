/** Chunk was on 73755 **/
/** chunk id: 800966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk916796 = require("./916796.js");

function m() {
  return (m = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
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
  }, [t]), (0, i.jsxs)("div", {
    className: l()(f.popoutContainer, {
      [f.hidden]: t
    }),
    children: [(0, i.jsx)("img", {
      className: f.image,
      src: "https://cdn.discordapp.com/assets/premium/roadblocks/hd_streaming.png",
      alt: "HD Streaming Nitro Perk"
    }), (0, i.jsx)(o.zx, {
      "data-migration-pending": true,
      className: f.closeButton,
      "aria-label": h.intl.string(h.t.cpT0Cq),
      look: o.zx.Looks.BLANK,
      size: o.zx.Sizes.NONE,
      onClick: () => {
        n(), u.default.track(p.rMx.HD_STREAMING_POPOUT_DISMISSED)
      },
      children: (0, i.jsx)(s.Dio, {
        size: "xs",
        className: f.closeIcon,
        color: "white"
      })
    }), (0, i.jsx)("div", {
      className: f.infoContainerParent,
      children: (0, i.jsxs)("div", {
        className: f.infoContainer,
        children: [(0, i.jsx)(s.Text, {
          className: f.infoText,
          variant: "text-sm/medium",
          children: h.intl.format(h.t.ruvD7i, {})
        }), (0, i.jsxs)("div", {
          className: f.poweredByNitroContainer,
          children: [(0, i.jsx)(s.SrA, {
            size: "xs"
          }), (0, i.jsx)(s.Text, {
            className: f.infoText,
            variant: "text-sm/medium",
            children: h.intl.string(h.t["BMw+7I"])
          })]
        })]
      })
    })]
  })
}

function C(e) {
  var t, n, r = m({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, i.jsx)(d.h, (t = g({}, r), n = n = {
    renderComponent: e => (0, i.jsx)(b, g({}, e))
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}