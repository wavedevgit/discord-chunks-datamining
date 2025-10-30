/** Chunk was on web.js **/
/** chunk id: 374425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk453070 = require("./453070.js"),
  Chunk373228 = require("./373228.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk217588 = require("./217588.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk614115 = require("./614115.js");

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

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
  S = e => {
    null != e && c.ZP.trackWithMetadata(g.rMx.EXPRESSION_TOOLTIP_VIEWED, {
      type: E.cd.STICKER_IN_MESSAGE_HOVER,
      expression_id: e.id,
      expression_name: e.name,
      is_animated: (0, p.aQ)(e.format_type),
      is_custom: (0, p.z)(e.type)
    })
  },
  A = e => {
    let {
      renderableSticker: t,
      channel: n,
      isInteracting: o
    } = e, c = i.useRef(null), [f, p] = i.useState(true), [g, E] = i.useState(String(Date.now())), [y] = (0, _.XW)(t, o), {
      analyticsLocations: v
    } = (0, u.ZP)(l.Z.STICKER_MESSAGE), A = (0, r.jsxs)("span", {
      className: b.stickerName,
      children: [(0, r.jsx)(s.B7q, {
        size: "xs",
        color: "currentColor",
        className: b.stickerIcon
      }), (null != y ? y : t).name]
    });
    return (0, r.jsx)(u.Gt, {
      value: v,
      children: (0, r.jsx)(s.yRy, {
        align: "center",
        animation: s.yRy.Animation.TRANSLATE,
        positionKey: g,
        onRequestClose: () => {
          p(true)
        },
        renderPopout: e => (0, r.jsx)(m.Z, I(O({}, e), {
          renderableSticker: t,
          channel: n,
          refreshPositionKey: () => E(String(Date.now()))
        })),
        targetElementRef: c,
        children: e => {
          let {
            onClick: n
          } = e;
          return (0, r.jsx)(a.u, I(O({}, d.b_), {
            shouldShow: f,
            __unsupportedReactNodeAsText: (0, d.Y)(A),
            "aria-label": false,
            onTooltipShow: () => {
              S(y)
            },
            children: (0, r.jsx)(s.P3F, {
              innerRef: c,
              className: b.clickableSticker,
              onClick: e => {
                p(!f), n(e)
              },
              tag: "span",
              children: (0, r.jsx)(h.Z, {
                isInteracting: o,
                size: T,
                sticker: null != y ? y : t
              })
            })
          }))
        }
      })
    })
  }