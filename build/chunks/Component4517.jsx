/** Chunk was on web.js **/
/** chunk id: 4517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk636606 = require("./636606.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk368326 = require("./368326.js"),
  Chunk8454 = require("./8454.js"),
  Chunk633302 = require("./633302.js"),
  Chunk314897 = require("./314897.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk510659 = require("./510659.jsx"),
  Chunk287954 = require("./287954.jsx"),
  Chunk810097 = require("./810097.jsx"),
  Chunk913002 = require("./913002.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk244096 = require("./244096.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk516089 = require("./516089.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = L(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function x(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(C.referenceContainer, n),
    children: (0, r.jsx)("div", {
      className: C.outer,
      children: (0, r.jsx)("span", {
        className: C.inner,
        children: t
      })
    })
  })
}
let M = Chunk473749.forwardRef(function(e, t) {
    let {
      onCloseProfile: i,
      prompt: a
    } = e, {
      analyticsLocations: s
    } = (0, p.ZP)(), {
      trackUserProfileAction: l
    } = (0, b.KZ)(), c = () => {
      l({
        action: "PRESS_ADD_CUSTOM_STATUS"
      }), null == i || i(), (0, u.ZDy)(async () => {
        let {
          default: e
        } = await n.e("76215").then(n.bind(n, 66630));
        return t => (0, r.jsx)(e, D(R({}, t), {
          sourceAnalyticsLocations: s,
          prompt: a
        }))
      })
    }, d = null != a ? a.label() : A.intl.string(A.t.evw0oz), f = (0, r.jsxs)("div", {
      className: C.content,
      children: [(0, r.jsx)(u.oFk, {
        size: "xs",
        className: C.addStatusIcon,
        colorClass: C.addStatusIconColor
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: o()(C.addStatusPrompt, null != a && C.italicPrompt),
        children: d
      })]
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(x, {
        children: f
      }), (0, r.jsx)(u.tEY, {
        ringClassName: C.ring,
        children: (0, r.jsx)("div", {
          className: o()(C.container, C.editable),
          ref: t,
          children: (0, r.jsx)(u.P3F, {
            className: C.outer,
            "aria-label": A.intl.string(A.t["zrpF/b"]),
            onClick: c,
            focusProps: {
              ringClassName: C.ring
            },
            children: (0, r.jsxs)("span", {
              className: o()(C.inner, C.clickable),
              children: [(0, r.jsx)(u.oFk, {
                size: "xs",
                className: C.addStatusIcon,
                colorClass: C.addStatusIconColor
              }), (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                className: o()(C.addStatusPrompt, null != a && C.italicPrompt),
                children: d
              })]
            })
          })
        })
      })]
    })
  }),
  k = Chunk473749.forwardRef(function(e, t) {
    var n, a;
    let {
      emoji: _,
      text: p,
      animate: m,
      className: g,
      renderToolbar: E,
      onShowToolbar: O,
      placeholderText: v,
      hasEntered: I = true
    } = e, N = (0, y.yi)(), {
      trackUserProfileAction: R
    } = (0, b.KZ)(), P = (0, h.p)({
      location: "CustomStatusBubble"
    }), D = null != _ ? S.Hp : 0, w = S.hT + D, L = S.YF + D, M = i.useRef(null), k = i.useRef(null), j = i.useRef(null), U = i.useRef(w), G = i.useRef(L), B = null != _ && null == p, [Z, F] = i.useState(false), [V, H] = i.useState(true), [Y, W] = i.useState(!B && I), K = I && Z, z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), [q] = i.useState(() => new c.V7);
    i.useEffect(() => () => q.stop(), [q]), i.useEffect(() => {
      null == N || N.onInteractionPopoutTargetRefChange(M)
    }, [N]);
    let [X, Q] = (0, u.q_F)(() => ({
      maxHeight: "".concat(U.current, "px"),
      config: {
        clamp: true,
        duration: S.R1
      }
    }));
    i.useLayoutEffect(() => {
      if (F(true), null == k.current || null == j.current || !K) return;
      let e = k.current.getBoundingClientRect().height,
        t = j.current.getBoundingClientRect().height;
      W(t > e), U.current = e, G.current = t, Q({
        maxHeight: "".concat(Math.min(V ? U.current : G.current, V ? w : L), "px")
      })
    }, [K, p, _, Q, V, w, L]);
    let J = e => {
        Y && (e ? Q({
          maxHeight: "".concat(Math.min(G.current, L), "px"),
          delay: z ? 0 : S.zS,
          config: {
            clamp: true,
            duration: z ? 0 : S.R1
          }
        }) : Q({
          maxHeight: "".concat(Math.min(U.current, w), "px"),
          delay: 0
        }), z ? H(!e) : q.start(e ? S.zS : S.Sq, () => H(!e)))
      },
      $ = null != _ ? (0, r.jsx)(f.Z, {
        emoji: _,
        animate: m,
        hideTooltip: false,
        tooltipDelay: T.vB,
        className: C.statusEmoji
      }) : null,
      ee = null != p ? (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: C.statusText,
        children: p
      }) : null,
      et = true === v || null != _ && P ? null : (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        "aria-label": "".concat(A.intl.string(A.t.EVV6uZ), ": ").concat(v),
        className: o()(C.statusText, P && C.italicPrompt),
        children: null != v ? v : ""
      }),
      en = null == ee || "" === p ? et : ee,
      er = (0, r.jsxs)("div", {
        ref: k,
        className: C.content,
        children: [$, en]
      }),
      ei = (0, r.jsxs)("div", {
        ref: j,
        className: o()(C.content, C.unclamped),
        children: [$, en]
      }),
      ea = (0, r.jsx)("div", {
        ref: t,
        className: C.outer,
        children: (0, r.jsx)("span", {
          className: C.inner,
          children: (0, r.jsxs)(s.animated.div, {
            style: X,
            className: o()(C.content, {
              [C.unclamped]: !V
            }),
            children: [$, en]
          })
        })
      }),
      eo = (0, r.jsxs)(x, {
        children: [er, ei]
      });
    return null == O ? (0, r.jsxs)(r.Fragment, {
      children: [eo, (0, r.jsx)(u.tEY, {
        ringClassName: C.ring,
        children: (0, r.jsxs)("div", {
          ref: M,
          role: "tooltip",
          tabIndex: 0,
          className: o()(C.container, g),
          "aria-label": A.intl.formatToPlainString(A.t.xRGqow, {
            emoji: null != (n = null == _ ? true : _.name) ? n : "",
            status: p,
            label: ""
          }),
          onMouseEnter: () => {
            R({
              action: "HOVER_CUSTOM_STATUS"
            }), J(true)
          },
          onMouseLeave: () => {
            J(false)
          },
          onFocus: () => J(true),
          onBlur: () => J(false),
          children: [ea, null == E ? true : E(Y)]
        })
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [eo, (0, r.jsx)(u.tEY, {
        ringClassName: C.ring,
        children: (0, r.jsxs)("div", {
          ref: M,
          role: "tooltip",
          tabIndex: 0,
          className: o()(C.container, g),
          "aria-label": A.intl.formatToPlainString(A.t.xRGqow, {
            emoji: null != (a = null == _ ? true : _.name) ? a : "",
            label: "",
            status: p
          }),
          onFocus: () => {
            O(true), J(true)
          },
          onBlur: e => {
            var t;
            (null == (t = M.current) ? true : t.contains(e.relatedTarget)) || (O(false), J(false))
          },
          onMouseEnter: () => {
            R({
              action: "HOVER_CUSTOM_STATUS"
            }), O(true), J(true)
          },
          onMouseLeave: () => {
            O(false), J(false)
          },
          children: [ea, null == E ? true : E(Y)]
        })
      })]
    })
  }),
  j = Chunk473749.forwardRef(function(e, t) {
    var {
      emoji: n,
      text: a,
      onCloseProfile: o
    } = e, s = w(e, ["emoji", "text", "onCloseProfile"]);
    let [l, c] = i.useState(false);
    return (0, r.jsx)(k, D(R({}, s), {
      ref: t,
      emoji: n,
      text: a,
      className: C.editable,
      onShowToolbar: c,
      renderToolbar: e => (0, r.jsx)(I.Z, {
        isVisible: l,
        isExpandable: e,
        onCloseProfile: o
      })
    }))
  });

function U(e) {
  var {
    emoji: t,
    text: n,
    user: a,
    guildId: o,
    channelId: s,
    themeType: l
  } = e, c = w(e, ["emoji", "text", "user", "guildId", "channelId", "themeType"]);
  let {
    trackUserProfileAction: u
  } = (0, b.KZ)(), {
    interactionType: d,
    interactionSource: f,
    resetInteraction: _
  } = (0, y.Xo)(), p = f === T.n_.STATUS && d === T.P.REACT, h = f === T.n_.STATUS && d === T.P.REPLY, m = p || h, E = i.useRef(null), I = i.useRef(t), S = i.useRef(n);
  i.useEffect(() => {
    f === T.n_.STATUS && ((I.current !== t || S.current !== n) && _(), I.current = t, S.current = n)
  }, [f, _, t, n]);
  let [A, N] = i.useState(false), P = i.useCallback(e => {
    (e || !m) && N(e)
  }, [m]), L = e => null == e ? null : null != e.id ? "`" + ":".concat(e.name, ":") + "`" : g.ZP.translateSurrogatesToInlineEmoji(e.name), x = (e, t) => null == e ? t : "".concat(e, " ").concat(t), M = () => {
    let e = L(t);
    return null == n ? e : x(e, n)
  };
  return (0, r.jsx)(O.Z, {
    user: a,
    guildId: o,
    channelId: s,
    themeType: l,
    sourceDetails: M(),
    sourceType: T.n_.STATUS,
    onAction: u,
    onClose: () => N(false),
    children: () => (0, r.jsx)(k, D(R({}, c), {
      ref: E,
      emoji: t,
      text: n,
      themeType: l,
      className: m ? C.hoisted : true,
      onShowToolbar: P,
      renderToolbar: e => (0, r.jsx)(v.ZP, {
        targetRef: E,
        user: a,
        sourceType: T.n_.STATUS,
        isVisible: A && !m,
        isExpandable: e,
        onAction: u
      })
    }))
  })
}
let G = Chunk473749.forwardRef(function(e, t) {
  var n, i;
  let {
    user: a,
    onCloseProfile: o,
    previewText: s,
    previewEmoji: c,
    placeholderText: u,
    prompt: d,
    disableToolbar: f = false
  } = e, h = w(e, ["user", "onCloseProfile", "previewText", "previewEmoji", "placeholderText", "prompt", "disableToolbar"]), g = (0, m.Z)(a.id), {
    analyticsLocations: b
  } = (0, p.ZP)(_.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE), y = (0, l.e7)([E.default], () => E.default.getId() === a.id), O = y && !f, v = !y && !a.bot && !f;
  if (null != s || null != c) {
    let e = null != c ? c : null,
      n = null != s && "" !== s ? s : null;
    return (0, r.jsx)(p.Gt, {
      value: b,
      children: (0, r.jsx)(k, R({
        emoji: e,
        text: n,
        placeholderText: u,
        ref: t
      }, h))
    })
  }
  let I = null != (n = null == g ? true : g.emoji) ? n : null,
    T = null != (i = null == g ? true : g.state) ? i : null,
    S = null != T && "" !== T ? T : null;
  return null != I || null != S || O ? null == I && null == S ? (0, r.jsx)(p.Gt, {
    value: b,
    children: (0, r.jsx)(M, R({
      onCloseProfile: o,
      prompt: d,
      ref: t
    }, h))
  }) : v ? (0, r.jsx)(p.Gt, {
    value: b,
    children: (0, r.jsx)(U, R({
      user: a,
      emoji: I,
      text: S
    }, h))
  }) : O ? (0, r.jsx)(p.Gt, {
    value: b,
    children: (0, r.jsx)(j, R({
      emoji: I,
      text: S,
      onCloseProfile: o,
      ref: t
    }, h))
  }) : (0, r.jsx)(p.Gt, {
    value: b,
    children: (0, r.jsx)(k, R({
      emoji: I,
      text: S,
      ref: t
    }, h))
  }) : null
})