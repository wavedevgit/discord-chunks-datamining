/** Chunk was on web.js **/
/** chunk id: 443642, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk240248 = require("./240248.js"),
  Chunk256449 = require("./256449.js"),
  Chunk842086 = require("./842086.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk552117 = require("./552117.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk444736 = require("./444736.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
  I = e => {
    null != e && c.Ay.trackWithMetadata(g.HAw.EXPRESSION_TOOLTIP_VIEWED, {
      type: E.e.STICKER_IN_MESSAGE_HOVER,
      expression_id: e.id,
      expression_name: e.name,
      is_animated: (0, _.Tw)(e.format_type),
      is_custom: (0, _.zN)(e.type)
    })
  },
  T = e => {
    let {
      renderableSticker: t,
      channel: n,
      isInteracting: s
    } = e, c = i.useRef(null), [f, _] = i.useState(true), [g, E] = i.useState(String(Date.now())), [y] = (0, p.Zq)(t, s), {
      analyticsLocations: A
    } = (0, u.Ay)(l.A.STICKER_MESSAGE), T = (0, r.jsxs)("span", {
      className: b.Zl,
      children: [(0, r.jsx)(o.s2T, {
        size: "xs",
        color: "currentColor",
        className: b.lA
      }), (null != y ? y : t).name]
    });
    return (0, r.jsx)(u.f5, {
      value: A,
      children: (0, r.jsx)(o.YNO, {
        align: "center",
        animation: o.YNO.Animation.TRANSLATE,
        positionKey: g,
        onRequestClose: () => {
          _(true)
        },
        renderPopout: e => (0, r.jsx)(m.A, v(O({}, e), {
          renderableSticker: t,
          channel: n,
          refreshPositionKey: () => E(String(Date.now()))
        })),
        targetElementRef: c,
        children: e => {
          let {
            onClick: n
          } = e;
          return (0, r.jsx)(a.m, v(O({}, d.Uk), {
            shouldShow: f,
            __unsupportedReactNodeAsText: (0, d.yR)(T),
            "aria-label": false,
            onTooltipShow: () => {
              I(y)
            },
            children: (0, r.jsx)(o.DUT, {
              innerRef: c,
              className: b.q7,
              onClick: e => {
                _(!f), n(e)
              },
              tag: "span",
              children: (0, r.jsx)(h.A, {
                isInteracting: s,
                size: S,
                sticker: null != y ? y : t
              })
            })
          }))
        }
      })
    })
  }