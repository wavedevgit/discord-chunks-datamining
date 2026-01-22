/** Chunk was on web.js **/
/** chunk id: 159218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk51183 = require("./51183.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk576241 = require("./576241.js"),
  Chunk410540 = require("./410540.js"),
  Chunk7584 = require("./7584.js"),
  Chunk961350 = require("./961350.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk679492 = require("./679492.jsx"),
  Chunk563437 = require("./563437.jsx"),
  Chunk8925 = require("./8925.jsx"),
  Chunk933639 = require("./933639.jsx"),
  Chunk518477 = require("./518477.js");
require("./745541.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk178740 = require("./178740.js");

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

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = x(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function L(e) {
  let {
    children: t,
    className: n
  } = e;
  return (0, r.jsx)("div", {
    className: s()(C.nL, n),
    children: (0, r.jsx)("div", {
      className: C.A7,
      children: (0, r.jsx)("span", {
        className: C.vW,
        children: t
      })
    })
  })
}
let j = Chunk64700.forwardRef(function(e, t) {
    let {
      onCloseProfile: i,
      prompt: a
    } = e, o = (0, h.GV)(), {
      analyticsLocations: l
    } = (0, _.Ay)(), {
      trackUserProfileAction: c
    } = (0, y.NJ)(), d = () => {
      c({
        action: "PRESS_ADD_CUSTOM_STATUS"
      }), null == i || i(), (0, u.mMO)(async () => {
        let {
          default: e
        } = await n.e("41091").then(n.bind(n, 431374));
        return t => (0, r.jsx)(e, P(R({}, t), {
          sourceAnalyticsLocations: l,
          prompt: a
        }))
      })
    }, f = null != a ? a.label() : T.intl.string(T.t.evw0oz), p = (0, r.jsxs)("div", {
      className: C.Qs,
      children: [(0, r.jsx)(u.U1e, {
        size: "xs",
        className: C.Tw,
        colorClass: C.qv
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: s()(C.ch, null != a && C.R9),
        children: f
      })]
    });
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(L, {
        children: p
      }), (0, r.jsx)("div", {
        className: s()(C.kL, C.LL),
        ref: t,
        children: (0, r.jsx)(u.DUT, {
          className: C.A7,
          "aria-label": T.intl.string(T.t["zrpF/b"]),
          "aria-describedby": o,
          onClick: d,
          focusProps: {
            ringClassName: C.hN
          },
          children: (0, r.jsxs)("span", {
            className: s()(C.vW, C.vk),
            children: [(0, r.jsx)(u.U1e, {
              size: "xs",
              className: C.Tw,
              colorClass: C.qv
            }), (0, r.jsxs)(u.AC4, {
              id: o,
              children: [T.intl.string(T.t.EVV6uZ), ": ", f]
            }), (0, r.jsx)(u.Text, {
              variant: "text-sm/normal",
              className: s()(C.ch, null != a && C.R9),
              "aria-hidden": "true",
              children: f
            })]
          })
        })
      })]
    })
  }),
  M = Chunk64700.forwardRef(function(e, t) {
    var n, a;
    let {
      emoji: p,
      text: _,
      animate: h,
      className: g,
      renderToolbar: E,
      onShowToolbar: b,
      placeholderText: A,
      hasEntered: v = true
    } = e, S = (0, O.NR)(), {
      trackUserProfileAction: N
    } = (0, y.NJ)(), R = (0, m.h)({
      location: "CustomStatusBubble"
    }), w = 1.25 * (null != p), P = 36 + w, D = 144 + w, x = i.useRef(null), j = i.useRef(null), M = i.useRef(null), k = i.useRef(P), U = i.useRef(D), G = null != p && null == _, [V, F] = i.useState(false), [B, H] = i.useState(true), [Y, W] = i.useState(!G && v), K = v && V, z = (0, l.bG)([d.A], () => d.A.useReducedMotion), [q] = i.useState(() => new c.Ep);
    i.useEffect(() => () => q.stop(), [q]), i.useEffect(() => {
      null == S || S.onInteractionPopoutTargetRefChange(x)
    }, [S]);
    let [X, Z] = (0, u.zhh)(() => ({
      maxHeight: "".concat(k.current, "px"),
      config: {
        clamp: true,
        duration: 150
      }
    }));
    i.useLayoutEffect(() => {
      if (F(true), null == j.current || null == M.current || !K) return;
      let e = j.current.getBoundingClientRect().height,
        t = M.current.getBoundingClientRect().height;
      W(t > e), k.current = e, U.current = t, Z({
        maxHeight: "".concat(Math.min(B ? k.current : U.current, B ? P : D), "px")
      })
    }, [K, _, p, Z, B, P, D]);
    let Q = e => {
        Y && (e ? Z({
          maxHeight: "".concat(Math.min(U.current, D), "px"),
          delay: 300 * !z,
          config: {
            clamp: true,
            duration: 150 * !z
          }
        }) : Z({
          maxHeight: "".concat(Math.min(k.current, P), "px"),
          delay: 0
        }), z ? H(!e) : q.start(e ? 300 : 150, () => H(!e)))
      },
      $ = null != p ? (0, r.jsx)(f.A, {
        emoji: p,
        animate: h,
        hideTooltip: false,
        tooltipDelay: I.In,
        className: C.H0
      }) : null,
      J = null != _ ? (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        className: C.qS,
        children: _
      }) : null,
      ee = true === A || null != p && R ? null : (0, r.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        "aria-label": "".concat(T.intl.string(T.t.EVV6uZ), ": ").concat(A),
        className: s()(C.qS, R && C.R9),
        children: null != A ? A : ""
      }),
      et = null == J || "" === _ ? ee : J,
      en = (0, r.jsxs)("div", {
        ref: j,
        className: C.Qs,
        children: [$, et]
      }),
      er = (0, r.jsxs)("div", {
        ref: M,
        className: s()(C.Qs, C.m2),
        children: [$, et]
      }),
      ei = (0, r.jsx)("div", {
        ref: t,
        className: C.A7,
        children: (0, r.jsx)("span", {
          className: C.vW,
          children: (0, r.jsxs)(o.animated.div, {
            style: X,
            className: s()(C.Qs, {
              [C.m2]: !B
            }),
            children: [$, et]
          })
        })
      }),
      ea = (0, r.jsxs)(L, {
        children: [en, er]
      });
    return null == b ? (0, r.jsxs)(r.Fragment, {
      children: [ea, (0, r.jsxs)("div", {
        ref: x,
        className: s()(C.kL, g),
        onMouseEnter: () => {
          N({
            action: "HOVER_CUSTOM_STATUS"
          }), Q(true)
        },
        onMouseLeave: () => {
          Q(false)
        },
        onFocus: () => Q(true),
        onBlur: () => Q(false),
        children: [(0, r.jsx)(u.vN3, {
          children: (0, r.jsx)("div", {
            className: C.hN,
            role: "tooltip",
            tabIndex: 0,
            "aria-label": T.intl.formatToPlainString(T.t.UpF5Qa, {
              emoji: null != (a = null == p ? true : p.name) ? a : "",
              status: _
            }),
            children: ei
          })
        }), null == E ? true : E(Y)]
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [ea, (0, r.jsxs)("div", {
        ref: x,
        className: s()(C.kL, g),
        onFocus: () => {
          b(true), Q(true)
        },
        onBlur: e => {
          var t;
          (null == (t = x.current) ? true : t.contains(e.relatedTarget)) || (b(false), Q(false))
        },
        onMouseEnter: () => {
          N({
            action: "HOVER_CUSTOM_STATUS"
          }), b(true), Q(true)
        },
        onMouseLeave: () => {
          b(false), Q(false)
        },
        children: [(0, r.jsx)(u.vN3, {
          children: (0, r.jsx)("div", {
            className: C.hN,
            role: "tooltip",
            tabIndex: 0,
            "aria-label": T.intl.formatToPlainString(T.t.UpF5Qa, {
              emoji: null != (n = null == p ? true : p.name) ? n : "",
              status: _
            }),
            children: ei
          })
        }), null == E ? true : E(Y)]
      })]
    })
  }),
  k = Chunk64700.forwardRef(function(e, t) {
    let [n, ...a] = [e, t], {
      emoji: s,
      text: o,
      onCloseProfile: l
    } = n, c = D(n, ["emoji", "text", "onCloseProfile"]), [u] = a, [d, f] = i.useState(false);
    return (0, r.jsx)(M, P(R({}, c), {
      ref: u,
      emoji: s,
      text: o,
      className: C.LL,
      onShowToolbar: f,
      renderToolbar: e => (0, r.jsx)(S.A, {
        isVisible: d,
        isExpandable: e,
        onCloseProfile: l
      })
    }))
  });

function U(e) {
  let {
    emoji: t,
    text: n,
    user: a,
    guildId: s,
    channelId: o,
    themeType: l
  } = e, c = D(e, ["emoji", "text", "user", "guildId", "channelId", "themeType"]), {
    trackUserProfileAction: u
  } = (0, y.NJ)(), {
    interactionType: d,
    interactionSource: f,
    resetInteraction: p
  } = (0, O.Pq)(), _ = f === I.dS.STATUS && d === I.AQ.REACT, h = f === I.dS.STATUS && d === I.AQ.REPLY, m = _ || h, g = i.useRef(null), b = i.useRef(t), S = i.useRef(n);
  i.useEffect(() => {
    f === I.dS.STATUS && ((b.current !== t || S.current !== n) && p(), b.current = t, S.current = n)
  }, [f, p, t, n]);
  let [T, N] = i.useState(false), w = i.useCallback(e => {
    (e || !m) && N(e)
  }, [m]), x = e => null == e ? null : null != e.id ? "`" + ":".concat(e.name, ":") + "`" : E.Ay.translateSurrogatesToInlineEmoji(e.name), L = (e, t) => null == e ? t : "".concat(e, " ").concat(t), j = () => {
    let e = x(t);
    return null == n ? e : L(e, n)
  };
  return (0, r.jsx)(A.A, {
    user: a,
    guildId: s,
    channelId: o,
    themeType: l,
    sourceDetails: j(),
    sourceType: I.dS.STATUS,
    onAction: u,
    onClose: () => N(false),
    children: () => (0, r.jsx)(M, P(R({}, c), {
      ref: g,
      emoji: t,
      text: n,
      themeType: l,
      className: m ? C.zf : true,
      onShowToolbar: w,
      renderToolbar: e => (0, r.jsx)(v.Ay, {
        targetRef: g,
        user: a,
        sourceType: I.dS.STATUS,
        isVisible: T && !m,
        isExpandable: e,
        onAction: u
      })
    }))
  })
}
let G = Chunk64700.forwardRef(function(e, t) {
  var n, i;
  let {
    user: a,
    onCloseProfile: s,
    previewText: o,
    previewEmoji: c,
    placeholderText: u,
    prompt: d,
    disableToolbar: f = false
  } = e, h = D(e, ["user", "onCloseProfile", "previewText", "previewEmoji", "placeholderText", "prompt", "disableToolbar"]), m = (0, g.A)(a.id), {
    analyticsLocations: E
  } = (0, _.Ay)(p.A.USER_PROFILE_CUSTOM_STATUS_BUBBLE), y = (0, l.bG)([b.default], () => b.default.getId() === a.id), O = y && !f, A = !y && !a.bot && !f;
  if (null != o || null != c) {
    let e = null != c ? c : null,
      n = null != o && "" !== o ? o : null;
    return (0, r.jsx)(_.f5, {
      value: E,
      children: (0, r.jsx)(M, R({
        emoji: e,
        text: n,
        placeholderText: u,
        ref: t
      }, h))
    })
  }
  let v = null != (n = null == m ? true : m.emoji) ? n : null,
    S = null != (i = null == m ? true : m.state) ? i : null,
    I = null != S && "" !== S ? S : null;
  return null != v || null != I || O ? null == v && null == I ? (0, r.jsx)(_.f5, {
    value: E,
    children: (0, r.jsx)(j, R({
      onCloseProfile: s,
      prompt: d,
      ref: t
    }, h))
  }) : A ? (0, r.jsx)(_.f5, {
    value: E,
    children: (0, r.jsx)(U, R({
      user: a,
      emoji: v,
      text: I
    }, h))
  }) : O ? (0, r.jsx)(_.f5, {
    value: E,
    children: (0, r.jsx)(k, R({
      emoji: v,
      text: I,
      onCloseProfile: s,
      ref: t
    }, h))
  }) : (0, r.jsx)(_.f5, {
    value: E,
    children: (0, r.jsx)(M, R({
      emoji: v,
      text: I,
      ref: t
    }, h))
  }) : null
})