/** Chunk was on web.js **/
/** chunk id: 4517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk790519 = require("./790519.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
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

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i = x(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function M(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(N.referenceContainer, n),
    children: (0, r.jsx)("div", {
      className: N.outer,
      children: (0, r.jsx)("span", {
        className: N.inner,
        children: t
      })
    })
  })
}
let k = Chunk473749.forwardRef(function(e, t) {
    let {
      onCloseProfile: i,
      prompt: a
    } = e, s = (0, h.Dt)(), {
      analyticsLocations: l
    } = (0, p.ZP)(), {
      trackUserProfileAction: c
    } = (0, y.KZ)(), d = () => {
      c({
        action: "PRESS_ADD_CUSTOM_STATUS"
      }), null == i || i(), (0, u.ZDy)(async () => {
        let {
          default: e
        } = await n.e("76215").then(n.bind(n, 66630));
        return t => (0, r.jsx)(e, w(P({}, t), {
          sourceAnalyticsLocations: l,
          prompt: a
        }))
      })
    }, f = null != a ? a.label() : C.intl.string(C.t.evw0oz), _ = (0, r.jsxs)("div", {
      className: N.content,
      children: [(0, r.jsx)(u.oFk, {
        size: "xs",
        className: N.addStatusIcon,
        colorClass: N.addStatusIconColor
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: o()(N.addStatusPrompt, null != a && N.italicPrompt),
        children: f
      })]
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(M, {
        children: _
      }), (0, r.jsx)("div", {
        className: o()(N.container, N.editable),
        ref: t,
        children: (0, r.jsx)(u.P3F, {
          className: N.outer,
          "aria-label": C.intl.string(C.t["zrpF/b"]),
          "aria-describedby": s,
          onClick: d,
          focusProps: {
            ringClassName: N.ring
          },
          children: (0, r.jsxs)("span", {
            className: o()(N.inner, N.clickable),
            children: [(0, r.jsx)(u.oFk, {
              size: "xs",
              className: N.addStatusIcon,
              colorClass: N.addStatusIconColor
            }), (0, r.jsxs)(u.nn4, {
              id: s,
              children: [C.intl.string(C.t.EVV6uZ), ": ", f]
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: o()(N.addStatusPrompt, null != a && N.italicPrompt),
              "aria-hidden": "true",
              children: f
            })]
          })
        })
      })]
    })
  }),
  j = Chunk473749.forwardRef(function(e, t) {
    var n, a;
    let {
      emoji: _,
      text: p,
      animate: h,
      className: g,
      renderToolbar: E,
      onShowToolbar: b,
      placeholderText: v,
      hasEntered: I = true
    } = e, T = (0, O.yi)(), {
      trackUserProfileAction: R
    } = (0, y.KZ)(), P = (0, m.p)({
      location: "CustomStatusBubble"
    }), D = null != _ ? A.Hp : 0, w = A.hT + D, L = A.YF + D, x = i.useRef(null), k = i.useRef(null), j = i.useRef(null), U = i.useRef(w), G = i.useRef(L), B = null != _ && null == p, [Z, F] = i.useState(false), [V, H] = i.useState(true), [Y, W] = i.useState(!B && I), K = I && Z, z = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), [q] = i.useState(() => new c.V7);
    i.useEffect(() => () => q.stop(), [q]), i.useEffect(() => {
      null == T || T.onInteractionPopoutTargetRefChange(x)
    }, [T]);
    let [X, Q] = (0, u.q_F)(() => ({
      maxHeight: "".concat(U.current, "px"),
      config: {
        clamp: true,
        duration: A.R1
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
          delay: z ? 0 : A.zS,
          config: {
            clamp: true,
            duration: z ? 0 : A.R1
          }
        }) : Q({
          maxHeight: "".concat(Math.min(U.current, w), "px"),
          delay: 0
        }), z ? H(!e) : q.start(e ? A.zS : A.Sq, () => H(!e)))
      },
      $ = null != _ ? (0, r.jsx)(f.Z, {
        emoji: _,
        animate: h,
        hideTooltip: false,
        tooltipDelay: S.vB,
        className: N.statusEmoji
      }) : null,
      ee = null != p ? (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: N.statusText,
        children: p
      }) : null,
      et = true === v || null != _ && P ? null : (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        "aria-label": "".concat(C.intl.string(C.t.EVV6uZ), ": ").concat(v),
        className: o()(N.statusText, P && N.italicPrompt),
        children: null != v ? v : ""
      }),
      en = null == ee || "" === p ? et : ee,
      er = (0, r.jsxs)("div", {
        ref: k,
        className: N.content,
        children: [$, en]
      }),
      ei = (0, r.jsxs)("div", {
        ref: j,
        className: o()(N.content, N.unclamped),
        children: [$, en]
      }),
      ea = (0, r.jsx)("div", {
        ref: t,
        className: N.outer,
        children: (0, r.jsx)("span", {
          className: N.inner,
          children: (0, r.jsxs)(s.animated.div, {
            style: X,
            className: o()(N.content, {
              [N.unclamped]: !V
            }),
            children: [$, en]
          })
        })
      }),
      eo = (0, r.jsxs)(M, {
        children: [er, ei]
      });
    return null == b ? (0, r.jsxs)(r.Fragment, {
      children: [eo, (0, r.jsxs)("div", {
        ref: x,
        className: o()(N.container, g),
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
        children: [(0, r.jsx)(u.tEY, {
          children: (0, r.jsx)("div", {
            className: N.ring,
            role: "tooltip",
            tabIndex: 0,
            "aria-label": C.intl.formatToPlainString(C.t.UpF5Qa, {
              emoji: null != (n = null == _ ? true : _.name) ? n : "",
              status: p
            }),
            children: ea
          })
        }), null == E ? true : E(Y)]
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [eo, (0, r.jsxs)("div", {
        ref: x,
        className: o()(N.container, g),
        onFocus: () => {
          b(true), J(true)
        },
        onBlur: e => {
          var t;
          (null == (t = x.current) ? true : t.contains(e.relatedTarget)) || (b(false), J(false))
        },
        onMouseEnter: () => {
          R({
            action: "HOVER_CUSTOM_STATUS"
          }), b(true), J(true)
        },
        onMouseLeave: () => {
          b(false), J(false)
        },
        children: [(0, r.jsx)(u.tEY, {
          children: (0, r.jsx)("div", {
            className: N.ring,
            role: "tooltip",
            tabIndex: 0,
            "aria-label": C.intl.formatToPlainString(C.t.UpF5Qa, {
              emoji: null != (a = null == _ ? true : _.name) ? a : "",
              status: p
            }),
            children: ea
          })
        }), null == E ? true : E(Y)]
      })]
    })
  }),
  U = Chunk473749.forwardRef(function(e, t) {
    var {
      emoji: n,
      text: a,
      onCloseProfile: o
    } = e, s = L(e, ["emoji", "text", "onCloseProfile"]);
    let [l, c] = i.useState(false);
    return (0, r.jsx)(j, w(P({}, s), {
      ref: t,
      emoji: n,
      text: a,
      className: N.editable,
      onShowToolbar: c,
      renderToolbar: e => (0, r.jsx)(T.Z, {
        isVisible: l,
        isExpandable: e,
        onCloseProfile: o
      })
    }))
  });

function G(e) {
  var {
    emoji: t,
    text: n,
    user: a,
    guildId: o,
    channelId: s,
    themeType: l
  } = e, c = L(e, ["emoji", "text", "user", "guildId", "channelId", "themeType"]);
  let {
    trackUserProfileAction: u
  } = (0, y.KZ)(), {
    interactionType: d,
    interactionSource: f,
    resetInteraction: _
  } = (0, O.Xo)(), p = f === S.n_.STATUS && d === S.P.REACT, h = f === S.n_.STATUS && d === S.P.REPLY, m = p || h, g = i.useRef(null), b = i.useRef(t), T = i.useRef(n);
  i.useEffect(() => {
    f === S.n_.STATUS && ((b.current !== t || T.current !== n) && _(), b.current = t, T.current = n)
  }, [f, _, t, n]);
  let [A, C] = i.useState(false), R = i.useCallback(e => {
    (e || !m) && C(e)
  }, [m]), D = e => null == e ? null : null != e.id ? "`" + ":".concat(e.name, ":") + "`" : E.ZP.translateSurrogatesToInlineEmoji(e.name), x = (e, t) => null == e ? t : "".concat(e, " ").concat(t), M = () => {
    let e = D(t);
    return null == n ? e : x(e, n)
  };
  return (0, r.jsx)(v.Z, {
    user: a,
    guildId: o,
    channelId: s,
    themeType: l,
    sourceDetails: M(),
    sourceType: S.n_.STATUS,
    onAction: u,
    onClose: () => C(false),
    children: () => (0, r.jsx)(j, w(P({}, c), {
      ref: g,
      emoji: t,
      text: n,
      themeType: l,
      className: m ? N.hoisted : true,
      onShowToolbar: R,
      renderToolbar: e => (0, r.jsx)(I.ZP, {
        targetRef: g,
        user: a,
        sourceType: S.n_.STATUS,
        isVisible: A && !m,
        isExpandable: e,
        onAction: u
      })
    }))
  })
}
let B = Chunk473749.forwardRef(function(e, t) {
  var n, i;
  let {
    user: a,
    onCloseProfile: o,
    previewText: s,
    previewEmoji: c,
    placeholderText: u,
    prompt: d,
    disableToolbar: f = false
  } = e, h = L(e, ["user", "onCloseProfile", "previewText", "previewEmoji", "placeholderText", "prompt", "disableToolbar"]), m = (0, g.Z)(a.id), {
    analyticsLocations: E
  } = (0, p.ZP)(_.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE), y = (0, l.e7)([b.default], () => b.default.getId() === a.id), O = y && !f, v = !y && !a.bot && !f;
  if (null != s || null != c) {
    let e = null != c ? c : null,
      n = null != s && "" !== s ? s : null;
    return (0, r.jsx)(p.Gt, {
      value: E,
      children: (0, r.jsx)(j, P({
        emoji: e,
        text: n,
        placeholderText: u,
        ref: t
      }, h))
    })
  }
  let I = null != (n = null == m ? true : m.emoji) ? n : null,
    T = null != (i = null == m ? true : m.state) ? i : null,
    S = null != T && "" !== T ? T : null;
  return null != I || null != S || O ? null == I && null == S ? (0, r.jsx)(p.Gt, {
    value: E,
    children: (0, r.jsx)(k, P({
      onCloseProfile: o,
      prompt: d,
      ref: t
    }, h))
  }) : v ? (0, r.jsx)(p.Gt, {
    value: E,
    children: (0, r.jsx)(G, P({
      user: a,
      emoji: I,
      text: S
    }, h))
  }) : O ? (0, r.jsx)(p.Gt, {
    value: E,
    children: (0, r.jsx)(U, P({
      emoji: I,
      text: S,
      onCloseProfile: o,
      ref: t
    }, h))
  }) : (0, r.jsx)(p.Gt, {
    value: E,
    children: (0, r.jsx)(j, P({
      emoji: I,
      text: S,
      ref: t
    }, h))
  }) : null
})