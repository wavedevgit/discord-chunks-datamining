/** Chunk was on web.js **/
/** chunk id: 930101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => I,
  X: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk189551 = require("./189551.js"),
  Chunk954571 = require("./954571.js"),
  Chunk767143 = require("./767143.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk611853 = require("./611853.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
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

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
    var t;
    let {
      node: n,
      tooltipPosition: a = h.Uk.position,
      enableClick: o = true,
      channelId: d,
      messageId: f
    } = e, p = i.useRef(null), m = null == (t = n.originalMatch) ? true : t[0], [g, E] = i.useState(false), O = e => (0, r.jsx)(u.A, {
      emojiName: n.name,
      size: null != e ? e : n.jumboable ? "jumbo" : "default",
      src: n.src,
      alt: m,
      animated: false,
      channelId: d,
      messageId: f
    }), v = e => {
      var t;
      return (0, r.jsx)(l.un, S(A({
        asset: O("jumbo"),
        title: null != (t = n.name) ? t : "",
        body: o ? b.intl.string(b.t["515vjG"]) : "",
        ariaHidden: true
      }, h.Uk), {
        position: a,
        shouldShow: !g,
        onTooltipShow: () => {
          o && C({
            emojiNode: n,
            isCustomEmoji: false
          })
        },
        children: (0, r.jsx)(c.DUT, S(A({}, e), {
          innerRef: p,
          tag: "span",
          onClick: t => {
            var n;
            E(true), null == e || null == (n = e.onClick) || n.call(e, t)
          },
          className: s()(y.qq, {
            [y._Y]: o,
            [y.gp]: n.jumboable
          }),
          children: O()
        }))
      }))
    };
    if (!o) return v();
    let I = e => (0, r.jsx)(_.MV, S(A({}, e), {
      node: n
    }));
    return (0, r.jsx)(c.YNO, {
      animation: c.YNO.Animation.TRANSLATE,
      align: "center",
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      position: "right",
      onRequestClose: () => {
        E(false)
      },
      renderPopout: I,
      targetElementRef: p,
      children: v
    })
  },
  T = e => {
    let {
      node: t,
      isInteracting: n,
      tooltipPosition: a = h.Uk.position,
      enableClick: d = true,
      channelId: E,
      messageId: O
    } = e, [v, I] = i.useState(String(Date.now())), [T, N] = i.useState(false), [R, w] = i.useState(false), P = i.useRef(null), D = e => (0, r.jsx)(u.A, {
      emojiName: t.name,
      size: null != e ? e : t.jumboable ? "jumbo" : "default",
      emojiId: t.emojiId,
      animated: t.animated,
      isInteracting: n,
      channelId: E,
      messageId: O
    }), x = (0, o.A)(), L = e => (0, r.jsx)(l.un, S(A({
      asset: D("jumbo"),
      title: t.name,
      body: d ? b.intl.string(b.t["515vjG"]) : "",
      ariaHidden: true
    }, h.Uk), {
      position: a,
      shouldShow: !R,
      onTooltipShow: () => {
        N(true), d && (C({
          emojiNode: t,
          isCustomEmoji: true,
          nonce: x
        }), (0, f.K)(g.Vl.CustomEmojiTooltipShown))
      },
      children: (0, r.jsx)(c.DUT, S(A({}, e), {
        innerRef: P,
        onMouseEnter: () => {
          var t;
          null == e || null == (t = e.onMouseEnter) || t.call(e)
        },
        onClick: d ? t => {
          var n;
          N(false), w(true), null == e || null == (n = e.onClick) || n.call(e, t)
        } : true,
        onMouseLeave: () => {
          T && (p.default.track(m.HAw.CLOSE_POPOUT, {
            nonce: x
          }), N(false))
        },
        tag: "span",
        className: s()(y.qq, {
          [y._Y]: d,
          [y.gp]: t.jumboable
        }),
        children: D()
      }))
    }));
    if (!d) return L();
    let j = e => (0, r.jsx)(_.iP, S(A({}, e), {
      node: t,
      refreshPositionKey: () => I(String(Date.now())),
      nonce: x
    }));
    return (0, r.jsx)(c.YNO, {
      animation: c.YNO.Animation.FADE,
      align: "center",
      onRequestClose: () => {
        p.default.track(m.HAw.CLOSE_POPOUT, {
          nonce: x
        }), N(false), w(false)
      },
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      position: "right",
      renderPopout: j,
      positionKey: v,
      targetElementRef: P,
      children: L
    })
  },
  C = e => {
    let {
      emojiNode: t,
      isCustomEmoji: n,
      nonce: r
    } = e;
    d.Ay.trackWithMetadata(m.HAw.EXPRESSION_TOOLTIP_VIEWED, {
      type: E.e.EMOJI_IN_MESSAGE_HOVER,
      expression_id: t.emojiId,
      expression_name: t.name,
      is_animated: t.animated,
      is_custom: n,
      nonce: r
    })
  }