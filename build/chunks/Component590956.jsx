/** Chunk was on web.js **/
/** chunk id: 590956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => S,
  c: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk255963 = require("./255963.js"),
  Chunk626135 = require("./626135.js"),
  Chunk183023 = require("./183023.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk474936 = require("./474936.js"),
  Chunk372216 = require("./372216.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
    var t;
    let {
      node: n,
      tooltipPosition: a = p.b_.position,
      enableClick: s = true,
      channelId: u,
      messageId: d
    } = e, f = i.useRef(null), h = null == (t = n.originalMatch) ? true : t[0], m = null != h ? h : n.name, [g, b] = i.useState(false), O = e => (0, r.jsx)(c.Z, v(y({}, e), {
      emojiName: n.name,
      size: n.jumboable ? "jumbo" : "default",
      src: n.src,
      alt: h,
      animated: false,
      channelId: u,
      messageId: d
    })), I = e => (0, r.jsx)(l.aML, v(y({
      text: (0, p.Y)(n.name, s),
      "aria-label": m
    }, p.b_), {
      position: a,
      shouldShow: !g,
      onTooltipShow: () => {
        s && T({
          emojiNode: n,
          isCustomEmoji: false
        })
      },
      children: t => (0, r.jsx)(l.P3F, v(y({}, e), {
        innerRef: f,
        tag: "span",
        onClick: t => {
          var n;
          b(true), null == e || null == (n = e.onClick) || n.call(e, t)
        },
        className: o()(E.emojiContainer, {
          [E.emojiContainerClickable]: s,
          [E.emojiJumbo]: n.jumboable
        }),
        children: O(t)
      }))
    }));
    if (!s) return I();
    let S = e => (0, r.jsx)(_.Az, v(y({}, e), {
      node: n
    }));
    return (0, r.jsx)(l.yRy, {
      animation: l.yRy.Animation.TRANSLATE,
      align: "center",
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      position: "right",
      onRequestClose: () => {
        b(false)
      },
      renderPopout: S,
      targetElementRef: f,
      children: I
    })
  },
  S = e => {
    let {
      node: t,
      isInteracting: n,
      tooltipPosition: a = p.b_.position,
      enableClick: u = true,
      channelId: g,
      messageId: b
    } = e, [O, I] = i.useState(String(Date.now())), [S, A] = i.useState(false), [C, N] = i.useState(false), R = i.useRef(null), P = function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
      return (0, r.jsx)(c.Z, v(y({}, e), {
        emojiName: t.name,
        size: t.jumboable ? "jumbo" : "default",
        emojiId: t.emojiId,
        animated: t.animated,
        isInteracting: n,
        channelId: g,
        messageId: b
      }))
    }, w = (0, s.Z)(), D = e => (0, r.jsx)(l.aML, v(y({
      text: (0, p.Y)(t.name, u),
      "aria-label": t.name
    }, p.b_), {
      position: a,
      shouldShow: !C,
      onTooltipShow: () => {
        A(true), u && (T({
          emojiNode: t,
          isCustomEmoji: true,
          nonce: w
        }), (0, d.x)(m.qR.CustomEmojiTooltipShown))
      },
      children: n => (0, r.jsx)(l.P3F, v(y({}, e), {
        innerRef: R,
        onMouseEnter: () => {
          var t;
          null == e || null == (t = e.onMouseEnter) || t.call(e)
        },
        onClick: u ? t => {
          var n;
          A(false), N(true), null == e || null == (n = e.onClick) || n.call(e, t)
        } : true,
        onMouseLeave: () => {
          S && (f.default.track(h.rMx.CLOSE_POPOUT, {
            nonce: w
          }), A(false))
        },
        tag: "span",
        className: o()(E.emojiContainer, {
          [E.emojiContainerClickable]: u,
          [E.emojiJumbo]: t.jumboable
        }),
        children: P(n)
      }))
    }));
    if (!u) return D();
    let x = e => (0, r.jsx)(_.vk, v(y({}, e), {
      node: t,
      refreshPositionKey: () => I(String(Date.now())),
      nonce: w
    }));
    return (0, r.jsx)(l.yRy, {
      animation: l.yRy.Animation.FADE,
      align: "center",
      onRequestClose: () => {
        f.default.track(h.rMx.CLOSE_POPOUT, {
          nonce: w
        }), A(false), N(false)
      },
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      position: "right",
      renderPopout: x,
      positionKey: O,
      targetElementRef: R,
      children: D
    })
  },
  T = e => {
    let {
      emojiNode: t,
      isCustomEmoji: n,
      nonce: r
    } = e;
    u.ZP.trackWithMetadata(h.rMx.EXPRESSION_TOOLTIP_VIEWED, {
      type: g.cd.EMOJI_IN_MESSAGE_HOVER,
      expression_id: t.emojiId,
      expression_name: t.name,
      is_animated: t.animated,
      is_custom: n,
      nonce: r
    })
  }