/** Chunk was on 30243 **/
/** chunk id: 954654, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  ZP: () => T,
  xX: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk23750 = require("./23750.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk197653 = require("./197653.jsx"),
  Chunk987106 = require("./987106.jsx"),
  Chunk927057 = require("./927057.jsx"),
  Chunk574597 = require("./574597.jsx"),
  Chunk378975 = require("./378975.jsx"),
  Chunk732586 = require("./732586.jsx"),
  Chunk988075 = require("./988075.jsx"),
  Chunk12067 = require("./12067.jsx"),
  Chunk676149 = require("./676149.jsx"),
  Chunk861529 = require("./861529.jsx"),
  Chunk568248 = require("./568248.jsx"),
  Chunk770009 = require("./770009.jsx"),
  Chunk889515 = require("./889515.jsx"),
  Chunk985184 = require("./985184.jsx"),
  Chunk424158 = require("./424158.jsx"),
  Chunk892519 = require("./892519.jsx"),
  Chunk429577 = require("./429577.js");

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function I(e) {
  return e.map((e, t) => (0, n.jsxs)(n.Fragment, {
    children: [function e(t, r) {
      switch (t.type) {
        case a.re.ACTION_ROW:
          return (0, n.jsx)(P.Z, N(E({}, t), {
            renderComponents: I
          }), r);
        case a.re.BUTTON:
          return (0, n.jsx)(d.Z, E({}, t), r);
        case a.re.STRING_SELECT:
          return (0, n.jsx)(b.Z, E({}, t), r);
        case a.re.CHANNEL_SELECT:
          return (0, n.jsx)(p.Z, E({}, t), r);
        case a.re.USER_SELECT:
        case a.re.ROLE_SELECT:
        case a.re.MENTIONABLE_SELECT:
          return (0, n.jsx)(f.Z, E({}, t), r);
        case a.re.TEXT_INPUT:
          return (0, n.jsx)(m.Z, E({}, t), r);
        case a.re.SECTION:
          return (0, n.jsx)(w.Z, N(E({}, t), {
            renderComponents: I
          }), r);
        case a.re.TEXT_DISPLAY:
          return (0, n.jsx)(g.Z, E({}, t), r);
        case a.re.MEDIA_GALLERY:
          return (0, n.jsx)(y.Z, E({}, t), r);
        case a.re.THUMBNAIL:
          return (0, n.jsx)(h.Z, E({}, t), r);
        case a.re.FILE:
          return (0, n.jsx)(O.Z, E({}, t), r);
        case a.re.SEPARATOR:
          return (0, n.jsx)(j.Z, E({}, t), r);
        case a.re.CONTENT_INVENTORY_ENTRY:
          return (0, n.jsx)(v.Z, E({}, t), r);
        case a.re.CONTAINER:
          return (0, n.jsx)(x.ZP, N(E({}, t), {
            renderComponents: I
          }), r);
        case a.re.LABEL:
          return (0, n.jsx)(S.Z, N(E({}, t), {
            renderComponent: e
          }), r)
      }
    }(e, t.toString()), (0, n.jsx)(o.nn4, {
      children: ","
    })]
  }))
}

function T(e) {
  let {
    message: t,
    shouldDisableInteractiveComponents: r
  } = e, {
    components: l
  } = t, [o, a] = (0, u.e4)();
  return 0 === l.length ? null : (0, n.jsx)(s.Il, {
    message: t,
    shouldDisableInteractiveComponents: r,
    children: (0, n.jsx)(u.am.Root, {
      containerInnerWidth: a,
      children: (0, n.jsx)("div", {
        style: {
          width: "100%"
        },
        ref: o,
        children: (0, n.jsx)(u.am.AutoMeasuredNestedContainer, {
          children: e => (0, n.jsx)("div", {
            ref: e,
            className: i()([C.container, {
              [C.isComponentsV2]: (0, c.hv)(t)
            }]),
            children: I(l)
          })
        })
      })
    })
  })
}