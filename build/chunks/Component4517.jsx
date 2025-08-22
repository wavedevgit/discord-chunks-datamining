/** Chunk was on web.js **/
/** chunk id: 4517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk368326 = require("./368326.js"),
  Chunk74340 = require("./74340.js"),
  Chunk19391 = require("./19391.js"),
  Chunk8454 = require("./8454.js"),
  Chunk346565 = require("./346565.jsx"),
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

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i = M(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function k(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: o()(P.referenceContainer, n),
    children: (0, r.jsx)("div", {
      className: P.outer,
      children: (0, r.jsx)("span", {
        className: P.inner,
        children: t
      })
    })
  })
}
let U = Chunk647438.forwardRef(function(e, t) {
    let {
      onCloseProfile: i,
      prompt: a
    } = e, {
      analyticsLocations: s
    } = (0, p.ZP)(), {
      trackUserProfileAction: l
    } = (0, v.KZ)(), c = () => {
      l({
        action: "PRESS_ADD_CUSTOM_STATUS"
      }), null == i || i(), (0, u.ZDy)(async () => {
        let {
          default: e
        } = await n.e("31649").then(n.bind(n, 475613));
        return t => (0, r.jsx)(e, L(D({}, t), {
          sourceAnalyticsLocations: s,
          location: "UserProfileCustomStatusBubble",
          prompt: a
        }))
      })
    }, d = null != a ? a.label() : R.intl.string(R.t.evw0o6), f = (0, r.jsxs)("div", {
      className: P.content,
      children: [(0, r.jsx)(u.oFk, {
        size: "xs",
        className: P.addStatusIcon,
        colorClass: P.addStatusIconColor
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: o()(P.addStatusPrompt, null != a && P.italicPrompt),
        children: d
      })]
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(k, {
        children: f
      }), (0, r.jsx)(u.tEY, {
        ringClassName: P.ring,
        children: (0, r.jsx)("div", {
          className: o()(P.container, P.editable),
          ref: t,
          children: (0, r.jsx)(u.P3F, {
            className: P.outer,
            "aria-label": R.intl.string(R.t["zrpF/f"]),
            onClick: c,
            focusProps: {
              ringClassName: P.ring
            },
            children: (0, r.jsxs)("span", {
              className: o()(P.inner, P.clickable),
              children: [(0, r.jsx)(u.oFk, {
                size: "xs",
                className: P.addStatusIcon,
                colorClass: P.addStatusIconColor
              }), (0, r.jsx)(u.Text, {
                variant: "text-sm/normal",
                className: o()(P.addStatusPrompt, null != a && P.italicPrompt),
                children: d
              })]
            })
          })
        })
      })]
    })
  }),
  G = Chunk647438.forwardRef(function(e, t) {
    var n, a;
    let {
      emoji: _,
      text: p,
      animate: m,
      className: E,
      renderToolbar: y,
      onShowToolbar: O,
      placeholderText: T,
      label: S,
      hasEntered: A = true
    } = e, w = (0, I.yi)(), {
      trackUserProfileAction: D
    } = (0, v.KZ)(), x = (0, h.p)({
      location: "CustomStatusBubble"
    }), [L, j] = i.useState(false);
    i.useEffect(() => {
      null != W.current ? j(W.current.getBoundingClientRect().height > N.Ow + N.P) : j(false)
    }, [S, L]);
    let M = null != _ ? N.Hp : 0,
      U = null != S ? N.du : 0,
      G = (L && (null == _ || null != p) ? N._v : N.hT) + M + U,
      B = N.YF + M + U,
      Z = i.useRef(null),
      V = i.useRef(null),
      F = i.useRef(null),
      H = i.useRef(G),
      Y = i.useRef(B),
      W = i.useRef(null),
      K = null != _ && null == p && null == S,
      [z, q] = i.useState(false),
      [X, Q] = i.useState(true),
      [J, $] = i.useState(!K && A),
      ee = A && z,
      et = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
      [en] = i.useState(() => new c.V7);
    i.useEffect(() => () => en.stop(), [en]), i.useEffect(() => {
      null == w || w.onInteractionPopoutTargetRefChange(Z)
    }, [w]);
    let [er, ei] = (0, u.q_F)(() => ({
      maxHeight: "".concat(H.current, "px"),
      config: {
        clamp: true,
        duration: N.R1
      }
    }));
    i.useLayoutEffect(() => {
      if (q(true), null == V.current || null == F.current || !ee) return;
      let e = V.current.getBoundingClientRect().height,
        t = F.current.getBoundingClientRect().height;
      $(t > e), H.current = e, Y.current = t, ei({
        maxHeight: "".concat(Math.min(X ? H.current : Y.current, X ? G : B), "px")
      })
    }, [ee, p, _, S, ei, X, G, B]);
    let ea = e => {
        J && (e ? ei({
          maxHeight: "".concat(Math.min(Y.current, B), "px"),
          delay: et ? 0 : N.zS,
          config: {
            clamp: true,
            duration: et ? 0 : N.R1
          }
        }) : ei({
          maxHeight: "".concat(Math.min(H.current, G), "px"),
          delay: 0
        }), et ? Q(!e) : en.start(e ? N.zS : N.Sq, () => Q(!e)))
      },
      eo = null != S ? (0, r.jsx)("div", {
        ref: W,
        className: P.labelRow,
        children: (0, r.jsx)(b.Z, {
          label: S
        })
      }) : null,
      es = null != _ ? (0, r.jsx)(f.Z, {
        emoji: _,
        animate: m,
        hideTooltip: false,
        tooltipDelay: C.vB,
        className: P.statusEmoji
      }) : null,
      el = null != p ? (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: P.statusText,
        children: p
      }) : null,
      ec = true === T || null != _ && x ? null : (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        "aria-label": "".concat(R.intl.string(R.t.EVV6ub), ": ").concat(T),
        className: o()(P.statusText, x && P.italicPrompt),
        children: null != T ? T : ""
      }),
      eu = null == el || "" === p ? ec : el,
      ed = (0, r.jsxs)("div", {
        ref: V,
        className: o()(P.content, L && P.singleLineTextClamp),
        children: [eo, es, eu]
      }),
      ef = (0, r.jsxs)("div", {
        ref: F,
        className: o()(P.content, P.unclamped),
        children: [eo, es, eu]
      }),
      e_ = (0, r.jsx)("div", {
        ref: t,
        className: P.outer,
        children: (0, r.jsx)("span", {
          className: P.inner,
          children: (0, r.jsxs)(s.animated.div, {
            style: er,
            className: o()(P.content, {
              [P.singleLineTextClamp]: L,
              [P.unclamped]: !X
            }),
            children: [eo, es, eu]
          })
        })
      }),
      ep = (0, r.jsxs)(k, {
        className: null != eo ? P.withLabel : true,
        children: [eo, ed, ef]
      });
    return null == O ? (0, r.jsxs)(r.Fragment, {
      children: [ep, (0, r.jsx)(u.tEY, {
        ringClassName: P.ring,
        children: (0, r.jsxs)("div", {
          ref: Z,
          role: "tooltip",
          tabIndex: 0,
          className: o()(P.container, E),
          "aria-label": R.intl.formatToPlainString(R.t.xRGqo6, {
            emoji: null != (n = null == _ ? true : _.name) ? n : "",
            status: p,
            label: null != S ? "".concat((0, g.Z)(S), ":") : ""
          }),
          onMouseEnter: () => {
            D({
              action: "HOVER_CUSTOM_STATUS"
            }), ea(true)
          },
          onMouseLeave: () => {
            ea(false)
          },
          onFocus: () => ea(true),
          onBlur: () => ea(false),
          children: [e_, null == y ? true : y(J)]
        })
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [ep, (0, r.jsx)(u.tEY, {
        ringClassName: P.ring,
        children: (0, r.jsxs)("div", {
          ref: Z,
          role: "tooltip",
          tabIndex: 0,
          className: o()(P.container, E),
          "aria-label": R.intl.formatToPlainString(R.t.xRGqo6, {
            emoji: null != (a = null == _ ? true : _.name) ? a : "",
            status: p,
            label: null != S ? "".concat((0, g.Z)(S), ":") : ""
          }),
          onFocus: () => {
            O(true), ea(true)
          },
          onBlur: e => {
            var t;
            (null == (t = Z.current) ? true : t.contains(e.relatedTarget)) || (O(false), ea(false))
          },
          onMouseEnter: () => {
            D({
              action: "HOVER_CUSTOM_STATUS"
            }), O(true), ea(true)
          },
          onMouseLeave: () => {
            O(false), ea(false)
          },
          children: [e_, null == y ? true : y(J)]
        })
      })]
    })
  }),
  B = Chunk647438.forwardRef(function(e, t) {
    var {
      emoji: n,
      text: a,
      label: o,
      onCloseProfile: s
    } = e, l = j(e, ["emoji", "text", "label", "onCloseProfile"]);
    let [c, u] = i.useState(false);
    return (0, r.jsx)(G, L(D({}, l), {
      ref: t,
      emoji: n,
      text: a,
      label: o,
      className: P.editable,
      onShowToolbar: u,
      renderToolbar: e => (0, r.jsx)(A.Z, {
        isVisible: c,
        isExpandable: e,
        onCloseProfile: s
      })
    }))
  });

function Z(e) {
  var {
    emoji: t,
    text: n,
    label: a,
    user: o,
    guildId: s,
    channelId: l,
    themeType: c
  } = e, u = j(e, ["emoji", "text", "label", "user", "guildId", "channelId", "themeType"]);
  let {
    trackUserProfileAction: d
  } = (0, v.KZ)(), {
    interactionType: f,
    interactionSource: _,
    resetInteraction: p
  } = (0, I.Xo)(), h = _ === C.n_.STATUS && f === C.P.REACT, m = _ === C.n_.STATUS && f === C.P.REPLY, E = h || m, b = i.useRef(null), O = i.useRef(t), A = i.useRef(n);
  i.useEffect(() => {
    _ === C.n_.STATUS && ((O.current !== t || A.current !== n) && p(), O.current = t, A.current = n)
  }, [_, p, t, n]);
  let [N, R] = i.useState(false), w = i.useCallback(e => {
    (e || !E) && R(e)
  }, [E]), x = e => null == e ? null : null != e.id ? "`" + ":".concat(e.name, ":") + "`" : y.ZP.translateSurrogatesToInlineEmoji(e.name), M = (e, t) => null == e ? t : "".concat(e, " ").concat(t), k = () => {
    let e = x(t),
      r = null == n ? e : M(e, n);
    return null != a ? "".concat((0, g.Z)(a), ":\n> ").concat(r) : r
  };
  return (0, r.jsx)(T.Z, {
    user: o,
    guildId: s,
    channelId: l,
    themeType: c,
    sourceDetails: k(),
    sourceType: C.n_.STATUS,
    onAction: d,
    onClose: () => R(false),
    children: () => (0, r.jsx)(G, L(D({}, u), {
      ref: b,
      emoji: t,
      text: n,
      label: a,
      themeType: c,
      className: E ? P.hoisted : true,
      onShowToolbar: w,
      renderToolbar: e => (0, r.jsx)(S.ZP, {
        targetRef: b,
        user: o,
        sourceType: C.n_.STATUS,
        isVisible: N && !E,
        isExpandable: e,
        onAction: d
      })
    }))
  })
}
let V = Chunk647438.forwardRef(function(e, t) {
  var n, i;
  let {
    user: a,
    onCloseProfile: o,
    previewText: s,
    previewEmoji: c,
    previewLabel: u,
    placeholderText: d,
    prompt: f,
    disableToolbar: h = false
  } = e, g = j(e, ["user", "onCloseProfile", "previewText", "previewEmoji", "previewLabel", "placeholderText", "prompt", "disableToolbar"]), b = (0, E.Z)(a.id), {
    analyticsLocations: y
  } = (0, p.ZP)(_.Z.USER_PROFILE_CUSTOM_STATUS_BUBBLE), v = (0, l.e7)([O.default], () => O.default.getId() === a.id), I = v && !h, T = !v && !a.bot && !h;
  if (null != s || null != c) {
    let e = null != c ? c : null,
      n = null != s && "" !== s ? s : null,
      i = null != u ? u : null;
    return (0, r.jsx)(p.Gt, {
      value: y,
      children: (0, r.jsx)(G, D({
        emoji: e,
        text: n,
        placeholderText: d,
        label: i,
        ref: t
      }, g))
    })
  }
  let S = null != (n = null == b ? true : b.emoji) ? n : null,
    A = null != (i = null == b ? true : b.state) ? i : null,
    C = null != A && "" !== A ? A : null,
    N = null != b ? (0, m.Z)(b) : null;
  return null != S || null != C || I ? null == S && null == C ? (0, r.jsx)(p.Gt, {
    value: y,
    children: (0, r.jsx)(U, D({
      onCloseProfile: o,
      prompt: f,
      ref: t
    }, g))
  }) : T ? (0, r.jsx)(p.Gt, {
    value: y,
    children: (0, r.jsx)(Z, D({
      user: a,
      emoji: S,
      text: C,
      label: N
    }, g))
  }) : I ? (0, r.jsx)(p.Gt, {
    value: y,
    children: (0, r.jsx)(B, D({
      emoji: S,
      text: C,
      label: N,
      onCloseProfile: o,
      ref: t
    }, g))
  }) : (0, r.jsx)(p.Gt, {
    value: y,
    children: (0, r.jsx)(G, D({
      emoji: S,
      text: C,
      label: N,
      ref: t
    }, g))
  }) : null
})