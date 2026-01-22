/** Chunk was on web.js **/
/** chunk id: 520586, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => G,
  fD: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk383233 = require("./383233.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk953756 = require("./953756.jsx"),
  Chunk292366 = require("./292366.jsx"),
  Chunk544101 = require("./544101.jsx"),
  Chunk532719 = require("./532719.jsx"),
  Chunk343778 = require("./343778.jsx"),
  Chunk162493 = require("./162493.jsx"),
  Chunk367232 = require("./367232.jsx"),
  Chunk650076 = require("./650076.jsx"),
  Chunk379107 = require("./379107.jsx"),
  Chunk126727 = require("./126727.jsx"),
  Chunk663235 = require("./663235.jsx"),
  Chunk620513 = require("./620513.jsx"),
  Chunk145885 = require("./145885.jsx"),
  Chunk371068 = require("./371068.jsx"),
  Chunk61266 = require("./61266.jsx"),
  Chunk324877 = require("./324877.jsx"),
  Chunk567971 = require("./567971.jsx"),
  Chunk615390 = require("./615390.jsx"),
  Chunk747176 = require("./747176.jsx"),
  Chunk383797 = require("./383797.jsx"),
  Chunk183924 = require("./183924.jsx"),
  Chunk920409 = require("./920409.jsx"),
  Chunk87528 = require("./87528.js");

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
    children: [U(e, t.toString()), (0, r.jsx)(s.AC4, {
      children: ","
    })]
  }))
}

function U(e, t) {
  switch (e.type) {
    case o.I5.ACTION_ROW:
      return (0, r.jsx)(N.A, M(L({}, e), {
        renderComponents: k
      }), t);
    case o.I5.BUTTON:
      return (0, r.jsx)(d.A, L({}, e), t);
    case o.I5.STRING_SELECT:
      return (0, r.jsx)(E.A, L({}, e), t);
    case o.I5.CHANNEL_SELECT:
      return (0, r.jsx)(f.A, L({}, e), t);
    case o.I5.USER_SELECT:
    case o.I5.ROLE_SELECT:
    case o.I5.MENTIONABLE_SELECT:
      return (0, r.jsx)(m.A, L({}, e), t);
    case o.I5.TEXT_INPUT:
      return (0, r.jsx)(b.A, L({}, e), t);
    case o.I5.SECTION:
      return (0, r.jsx)(P.A, M(L({}, e), {
        renderComponents: k
      }), t);
    case o.I5.TEXT_DISPLAY:
      return (0, r.jsx)(S.A, L({}, e), t);
    case o.I5.MEDIA_GALLERY:
      return (0, r.jsx)(A.A, L({}, e), t);
    case o.I5.THUMBNAIL:
      return (0, r.jsx)(I.A, L({}, e), t);
    case o.I5.FILE:
      return (0, r.jsx)(O.A, L({}, e), t);
    case o.I5.SEPARATOR:
      return (0, r.jsx)(v.A, L({}, e), t);
    case o.I5.CONTENT_INVENTORY_ENTRY:
      return (0, r.jsx)(C.A, L({}, e), t);
    case o.I5.CONTAINER:
      return (0, r.jsx)(R.A, M(L({}, e), {
        renderComponents: k
      }), t);
    case o.I5.LABEL:
      return (0, r.jsx)(w.A, M(L({}, e), {
        renderComponent: U
      }), t);
    case o.I5.FILE_UPLOAD:
      return (0, r.jsx)(h.A, L({}, e), t);
    case o.I5.CHECKPOINT_CARD:
      return (0, r.jsx)(y.A, L({}, e), t);
    case o.I5.RADIO_GROUP:
      return (0, r.jsx)(g.A, L({}, e), t);
    case o.I5.CHECKBOX_GROUP:
      return (0, r.jsx)(_.A, L({}, e), t);
    case o.I5.CHECKBOX:
      return (0, r.jsx)(p.A, L({}, e), t);
    default:
      return (0, r.jsx)(T.A, {}, t)
  }
}

function G(e) {
  let {
    message: t,
    shouldDisableInteractiveComponents: n
  } = e, {
    components: i
  } = t, [s, o] = (0, u.zn)();
  return 0 === i.length ? null : (0, r.jsx)(c.f5, {
    message: t,
    shouldDisableInteractiveComponents: n,
    children: (0, r.jsx)(u.O7.Root, {
      containerInnerWidth: o,
      children: (0, r.jsx)("div", {
        style: {
          width: "100%"
        },
        ref: s,
        children: (0, r.jsx)(u.O7.AutoMeasuredNestedContainer, {
          children: e => (0, r.jsx)("div", {
            ref: e,
            className: a()([D.k, {
              [D.z]: (0, l._c)(t)
            }]),
            children: k(i)
          })
        })
      })
    })
  })
}