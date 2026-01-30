/** Chunk was on 64935 **/
/** chunk id: 443642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
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

function y(e) {
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

function v(e, t) {
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
let x = (0, Chunk240248.xI)(Chunk319060.A.STICKERS_CONSTANTS_STICKER_DIMENSION),
  O = e => {
    let {
      renderableSticker: t,
      channel: n,
      isInteracting: a
    } = e, p = i.useRef(null), [O, E] = i.useState(true), [j, C] = i.useState(String(Date.now())), [I] = (0, m.Zq)(t, a), {
      analyticsLocations: S
    } = (0, u.Ay)(o.A.STICKER_MESSAGE), T = (0, r.jsxs)("span", {
      className: A.Zl,
      children: [(0, r.jsx)(s.s2T, {
        size: "xs",
        color: "currentColor",
        className: A.lA
      }), (null != I ? I : t).name]
    });
    return (0, r.jsx)(u.f5, {
      value: S,
      children: (0, r.jsx)("div", {
        className: A.be,
        children: (0, r.jsx)(s.YNO, {
          align: "center",
          animation: s.YNO.Animation.TRANSLATE,
          positionKey: j,
          onRequestClose: () => {
            E(true)
          },
          renderPopout: e => (0, r.jsx)(_.A, v(y({}, e), {
            renderableSticker: t,
            channel: n,
            refreshPositionKey: () => C(String(Date.now()))
          })),
          targetElementRef: p,
          children: e => {
            let {
              onClick: n
            } = e;
            return (0, r.jsx)(l.m, v(y({}, d.Uk), {
              shouldShow: O,
              __unsupportedReactNodeAsText: (0, d.yR)(T),
              "aria-label": false,
              onTooltipShow: () => {
                var e;
                null != (e = I) && c.Ay.trackWithMetadata(h.HAw.EXPRESSION_TOOLTIP_VIEWED, {
                  type: b.e.STICKER_IN_MESSAGE_HOVER,
                  expression_id: e.id,
                  expression_name: e.name,
                  is_animated: (0, f.Tw)(e.format_type),
                  is_custom: (0, f.zN)(e.type)
                })
              },
              children: (0, r.jsx)(s.DUT, {
                innerRef: p,
                className: A.q7,
                onClick: e => {
                  E(!O), n(e)
                },
                tag: "span",
                children: (0, r.jsx)(g.A, {
                  isInteracting: a,
                  size: x,
                  sticker: null != I ? I : t
                })
              })
            }))
          }
        })
      })
    })
  }