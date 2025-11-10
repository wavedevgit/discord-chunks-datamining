/** Chunk was on web.js **/
/** chunk id: 954654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => j,
  xX: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk23750 = require("./23750.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk197653 = require("./197653.jsx"),
  Chunk987106 = require("./987106.jsx"),
  Chunk927057 = require("./927057.jsx"),
  Chunk241085 = require("./241085.jsx"),
  Chunk574597 = require("./574597.jsx"),
  Chunk368451 = require("./368451.jsx"),
  Chunk732586 = require("./732586.jsx"),
  Chunk628844 = require("./628844.jsx"),
  Chunk988075 = require("./988075.jsx"),
  Chunk12067 = require("./12067.jsx"),
  Chunk676149 = require("./676149.jsx"),
  Chunk861529 = require("./861529.jsx"),
  Chunk568248 = require("./568248.jsx"),
  Chunk48870 = require("./48870.jsx"),
  Chunk770009 = require("./770009.jsx"),
  Chunk889515 = require("./889515.jsx"),
  Chunk985184 = require("./985184.jsx"),
  Chunk424158 = require("./424158.jsx"),
  Chunk892519 = require("./892519.jsx"),
  Chunk429577 = require("./429577.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  return e.map((e, t) => (0, r.jsxs)(r.Fragment, {
    children: [M(e, t.toString()), (0, r.jsx)(o.nn4, {
      children: ","
    })]
  }))
}

function M(e, t) {
  switch (e.type) {
    case s.re.ACTION_ROW:
      return (0, r.jsx)(T.Z, x(w({}, e), {
        renderComponents: L
      }), t);
    case s.re.BUTTON:
      return (0, r.jsx)(d.Z, w({}, e), t);
    case s.re.STRING_SELECT:
      return (0, r.jsx)(h.Z, w({}, e), t);
    case s.re.CHANNEL_SELECT:
      return (0, r.jsx)(f.Z, w({}, e), t);
    case s.re.USER_SELECT:
    case s.re.ROLE_SELECT:
    case s.re.MENTIONABLE_SELECT:
      return (0, r.jsx)(p.Z, w({}, e), t);
    case s.re.TEXT_INPUT:
      return (0, r.jsx)(m.Z, w({}, e), t);
    case s.re.SECTION:
      return (0, r.jsx)(N.Z, x(w({}, e), {
        renderComponents: L
      }), t);
    case s.re.TEXT_DISPLAY:
      return (0, r.jsx)(O.Z, w({}, e), t);
    case s.re.MEDIA_GALLERY:
      return (0, r.jsx)(b.Z, w({}, e), t);
    case s.re.THUMBNAIL:
      return (0, r.jsx)(v.Z, w({}, e), t);
    case s.re.FILE:
      return (0, r.jsx)(E.Z, w({}, e), t);
    case s.re.SEPARATOR:
      return (0, r.jsx)(y.Z, w({}, e), t);
    case s.re.CONTENT_INVENTORY_ENTRY:
      return (0, r.jsx)(S.Z, w({}, e), t);
    case s.re.CONTAINER:
      return (0, r.jsx)(A.Z, x(w({}, e), {
        renderComponents: L
      }), t);
    case s.re.LABEL:
      return (0, r.jsx)(C.Z, x(w({}, e), {
        renderComponent: M
      }), t);
    case s.re.FILE_UPLOAD:
      return (0, r.jsx)(_.Z, w({}, e), t);
    case s.re.CHECKPOINT_CARD:
      return (0, r.jsx)(g.Z, w({}, e), t);
    default:
      return (0, r.jsx)(I.Z, {}, t)
  }
}

function j(e) {
  let {
    message: t,
    shouldDisableInteractiveComponents: n
  } = e, {
    components: i
  } = t, [o, s] = (0, u.e4)();
  return 0 === i.length ? null : (0, r.jsx)(c.Il, {
    message: t,
    shouldDisableInteractiveComponents: n,
    children: (0, r.jsx)(u.am.Root, {
      containerInnerWidth: s,
      children: (0, r.jsx)("div", {
        style: {
          width: "100%"
        },
        ref: o,
        children: (0, r.jsx)(u.am.AutoMeasuredNestedContainer, {
          children: e => (0, r.jsx)("div", {
            ref: e,
            className: a()([R.container, {
              [R.isComponentsV2]: (0, l.hv)(t)
            }]),
            children: L(i)
          })
        })
      })
    })
  })
}