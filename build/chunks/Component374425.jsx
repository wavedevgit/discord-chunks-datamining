/** Chunk was on 26434 **/
/** chunk id: 374425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk205844 = require("./205844.js");

function E(e) {
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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = (0, Chunk624138.Mg)(Chunk477690.Z.STICKERS_CONSTANTS_STICKER_DIMENSION),
  O = e => {
    let {
      renderableSticker: t,
      channel: n,
      isInteracting: l
    } = e, d = i.useRef(null), [O, y] = i.useState(true), [x, j] = i.useState(String(Date.now())), [I] = (0, p.XW)(t, l), {
      analyticsLocations: S
    } = (0, c.ZP)(a.Z.STICKER_MESSAGE), T = (0, r.jsxs)("span", {
      className: b.stickerName,
      children: [(0, r.jsx)(o.B7q, {
        size: "xs",
        color: "currentColor",
        className: b.stickerIcon
      }), (null != I ? I : t).name]
    });
    return (0, r.jsx)(c.Gt, {
      value: S,
      children: (0, r.jsx)(o.yRy, {
        align: "center",
        animation: o.yRy.Animation.TRANSLATE,
        positionKey: x,
        onRequestClose: () => {
          y(true)
        },
        renderPopout: e => (0, r.jsx)(g.Z, C(E({}, e), {
          renderableSticker: t,
          channel: n,
          refreshPositionKey: () => j(String(Date.now()))
        })),
        targetElementRef: d,
        children: e => {
          let {
            onClick: n
          } = e;
          return (0, r.jsx)(o.ua7, C(E({}, u.b_), {
            shouldShow: O,
            text: (0, u.Y)(T),
            "aria-label": false,
            onTooltipShow: () => {
              var e;
              null != (e = I) && s.ZP.trackWithMetadata(_.rMx.EXPRESSION_TOOLTIP_VIEWED, {
                type: h.cd.STICKER_IN_MESSAGE_HOVER,
                expression_id: e.id,
                expression_name: e.name,
                is_animated: (0, m.aQ)(e.format_type),
                is_custom: (0, m.z)(e.type)
              })
            },
            children: e => (0, r.jsx)(o.P3F, C(E({}, e), {
              innerRef: d,
              className: b.clickableSticker,
              onClick: e => {
                y(!O), n(e)
              },
              tag: "span",
              children: (0, r.jsx)(f.Z, {
                isInteracting: l,
                size: v,
                sticker: null != I ? I : t
              })
            }))
          }))
        }
      })
    })
  }