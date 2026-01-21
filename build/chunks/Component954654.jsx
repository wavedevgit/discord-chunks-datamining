/** Chunk was on web.js **/
/** chunk id: 954654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => G,
  xX: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk23750 = require("./23750.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk197653 = require("./197653.jsx"),
  Chunk987106 = require("./987106.jsx"),
  Chunk927057 = require("./927057.jsx"),
  Chunk944414 = require("./944414.jsx"),
  Chunk514523 = require("./514523.jsx"),
  Chunk241085 = require("./241085.jsx"),
  Chunk574597 = require("./574597.jsx"),
  Chunk182134 = require("./182134.jsx"),
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
  Chunk528945 = require("./528945.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e) {
  return e.map((e, t) => (0, r.jsxs)(r.Fragment, {
    children: [U(e, t.toString()), (0, r.jsx)(o.nn4, {
      children: ","
    })]
  }))
}

function U(e, t) {
  switch (e.type) {
    case s.re.ACTION_ROW:
      return (0, r.jsx)(N.Z, M(L({}, e), {
        renderComponents: k
      }), t);
    case s.re.BUTTON:
      return (0, r.jsx)(d.Z, L({}, e), t);
    case s.re.STRING_SELECT:
      return (0, r.jsx)(E.Z, L({}, e), t);
    case s.re.CHANNEL_SELECT:
      return (0, r.jsx)(f.Z, L({}, e), t);
    case s.re.USER_SELECT:
    case s.re.ROLE_SELECT:
    case s.re.MENTIONABLE_SELECT:
      return (0, r.jsx)(m.Z, L({}, e), t);
    case s.re.TEXT_INPUT:
      return (0, r.jsx)(b.Z, L({}, e), t);
    case s.re.SECTION:
      return (0, r.jsx)(R.Z, M(L({}, e), {
        renderComponents: k
      }), t);
    case s.re.TEXT_DISPLAY:
      return (0, r.jsx)(I.Z, L({}, e), t);
    case s.re.MEDIA_GALLERY:
      return (0, r.jsx)(v.Z, L({}, e), t);
    case s.re.THUMBNAIL:
      return (0, r.jsx)(T.Z, L({}, e), t);
    case s.re.FILE:
      return (0, r.jsx)(O.Z, L({}, e), t);
    case s.re.SEPARATOR:
      return (0, r.jsx)(S.Z, L({}, e), t);
    case s.re.CONTENT_INVENTORY_ENTRY:
      return (0, r.jsx)(A.Z, L({}, e), t);
    case s.re.CONTAINER:
      return (0, r.jsx)(P.Z, M(L({}, e), {
        renderComponents: k
      }), t);
    case s.re.LABEL:
      return (0, r.jsx)(w.Z, M(L({}, e), {
        renderComponent: U
      }), t);
    case s.re.FILE_UPLOAD:
      return (0, r.jsx)(h.Z, L({}, e), t);
    case s.re.CHECKPOINT_CARD:
      return (0, r.jsx)(y.Z, L({}, e), t);
    case s.re.RADIO_GROUP:
      return (0, r.jsx)(g.Z, L({}, e), t);
    case s.re.CHECKBOX_GROUP:
      return (0, r.jsx)(_.Z, L({}, e), t);
    case s.re.CHECKBOX:
      return (0, r.jsx)(p.Z, L({}, e), t);
    default:
      return (0, r.jsx)(C.Z, {}, t)
  }
}

function G(e) {
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
            className: a()([D.container, {
              [D.isComponentsV2]: (0, l.hv)(t)
            }]),
            children: k(i)
          })
        })
      })
    })
  })
}