/** Chunk was on web.js **/
/** chunk id: 590956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => A,
  c: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk372216 = require("./372216.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
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

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = e => {
    var t;
    let {
      node: n,
      tooltipPosition: a = h.b_.position,
      enableClick: s = true,
      channelId: d,
      messageId: f
    } = e, _ = i.useRef(null), m = null == (t = n.originalMatch) ? true : t[0], g = null != m ? m : n.name, [E, O] = i.useState(false), I = e => (0, r.jsx)(u.Z, {
      emojiName: n.name,
      size: null != e ? e : n.jumboable ? "jumbo" : "default",
      src: n.src,
      alt: m,
      animated: false,
      channelId: d,
      messageId: f
    }), S = e => {
      var t;
      return (0, r.jsx)(l.i_, T(v({
        asset: I("jumbo"),
        title: null != (t = n.name) ? t : "",
        body: s ? b.intl.string(b.t["515vjG"]) : "",
        "aria-label": g
      }, h.b_), {
        position: a,
        shouldShow: !E,
        onTooltipShow: () => {
          s && C({
            emojiNode: n,
            isCustomEmoji: false
          })
        },
        children: (0, r.jsx)(c.P3F, T(v({}, e), {
          innerRef: _,
          tag: "span",
          onClick: t => {
            var n;
            O(true), null == e || null == (n = e.onClick) || n.call(e, t)
          },
          className: o()(y.emojiContainer, {
            [y.emojiContainerClickable]: s,
            [y.emojiJumbo]: n.jumboable
          }),
          children: I()
        }))
      }))
    };
    if (!s) return S();
    let A = e => (0, r.jsx)(p.Az, T(v({}, e), {
      node: n
    }));
    return (0, r.jsx)(c.yRy, {
      animation: c.yRy.Animation.TRANSLATE,
      align: "center",
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      position: "right",
      onRequestClose: () => {
        O(false)
      },
      renderPopout: A,
      targetElementRef: _,
      children: S
    })
  },
  A = e => {
    let {
      node: t,
      isInteracting: n,
      tooltipPosition: a = h.b_.position,
      enableClick: d = true,
      channelId: E,
      messageId: O
    } = e, [I, S] = i.useState(String(Date.now())), [A, N] = i.useState(false), [R, P] = i.useState(false), D = i.useRef(null), w = e => (0, r.jsx)(u.Z, {
      emojiName: t.name,
      size: null != e ? e : t.jumboable ? "jumbo" : "default",
      emojiId: t.emojiId,
      animated: t.animated,
      isInteracting: n,
      channelId: E,
      messageId: O
    }), L = (0, s.Z)(), x = e => (0, r.jsx)(l.i_, T(v({
      asset: w("jumbo"),
      title: t.name,
      body: d ? b.intl.string(b.t["515vjG"]) : "",
      "aria-label": t.name
    }, h.b_), {
      position: a,
      shouldShow: !R,
      onTooltipShow: () => {
        N(true), d && (C({
          emojiNode: t,
          isCustomEmoji: true,
          nonce: L
        }), (0, f.x)(g.qR.CustomEmojiTooltipShown))
      },
      children: (0, r.jsx)(c.P3F, T(v({}, e), {
        innerRef: D,
        onMouseEnter: () => {
          var t;
          null == e || null == (t = e.onMouseEnter) || t.call(e)
        },
        onClick: d ? t => {
          var n;
          N(false), P(true), null == e || null == (n = e.onClick) || n.call(e, t)
        } : true,
        onMouseLeave: () => {
          A && (_.default.track(m.rMx.CLOSE_POPOUT, {
            nonce: L
          }), N(false))
        },
        tag: "span",
        className: o()(y.emojiContainer, {
          [y.emojiContainerClickable]: d,
          [y.emojiJumbo]: t.jumboable
        }),
        children: w()
      }))
    }));
    if (!d) return x();
    let M = e => (0, r.jsx)(p.vk, T(v({}, e), {
      node: t,
      refreshPositionKey: () => S(String(Date.now())),
      nonce: L
    }));
    return (0, r.jsx)(c.yRy, {
      animation: c.yRy.Animation.FADE,
      align: "center",
      onRequestClose: () => {
        _.default.track(m.rMx.CLOSE_POPOUT, {
          nonce: L
        }), N(false), P(false)
      },
      autoInvert: true,
      nudgeAlignIntoViewport: true,
      position: "right",
      renderPopout: M,
      positionKey: I,
      targetElementRef: D,
      children: x
    })
  },
  C = e => {
    let {
      emojiNode: t,
      isCustomEmoji: n,
      nonce: r
    } = e;
    d.ZP.trackWithMetadata(m.rMx.EXPRESSION_TOOLTIP_VIEWED, {
      type: E.cd.EMOJI_IN_MESSAGE_HOVER,
      expression_id: t.emojiId,
      expression_name: t.name,
      is_animated: t.animated,
      is_custom: n,
      nonce: r
    })
  }