/** Chunk was on web.js **/
/** chunk id: 657718, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk366010 = require("./366010.js"),
  Chunk765178 = require("./765178.js"),
  Chunk844222 = require("./844222.js"),
  Chunk977067 = require("./977067.js"),
  Chunk426333 = require("./426333.js"),
  Chunk27989 = require("./27989.js"),
  Chunk460890 = require("./460890.jsx"),
  Chunk145188 = require("./145188.jsx"),
  Chunk289873 = require("./289873.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk165180 = require("./165180.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = v(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let S = {
    xs: "text-xs/medium",
    sm: "text-sm/medium",
    md: "text-md/medium"
  },
  I = {
    xs: "xxs",
    sm: "xs",
    md: "refresh_sm"
  },
  T = {
    xs: "sm",
    sm: "sm",
    md: "md"
  };

function C(e) {
  var t, n;
  let {
    role: a = "button",
    variant: f = "primary",
    size: _ = "md",
    text: h,
    icon: E,
    iconPosition: y = "start",
    iconOpticalOffsetMargin: v = 0,
    fullWidth: I = false,
    focusProps: T,
    loading: C,
    loadingStartedLabel: P,
    loadingFinishedLabel: D,
    rounded: x = false,
    type: L = "button",
    rel: j,
    onClick: M,
    onDoubleClick: k,
    onMouseEnter: U,
    onMouseLeave: G,
    onMouseUp: V,
    onMouseDown: F,
    onKeyDown: B,
    disabled: H,
    minWidth: Y,
    className: W,
    style: K,
    buttonRef: z
  } = e, q = A(e, ["role", "variant", "size", "text", "icon", "iconPosition", "iconOpticalOffsetMargin", "fullWidth", "focusProps", "loading", "loadingStartedLabel", "loadingFinishedLabel", "rounded", "type", "rel", "onClick", "onDoubleClick", "onMouseEnter", "onMouseLeave", "onMouseUp", "onMouseDown", "onKeyDown", "disabled", "minWidth", "className", "style", "buttonRef"]), X = (0, u.C)(), Z = null != (t = null == X ? true : X.size) ? t : _, Q = null != (n = null == X ? true : X.fullWidth) ? n : I, $ = null != h, J = i.useRef(null), ee = null != z ? z : J, et = (0, r.jsx)(w, {
    icon: E,
    iconOpticalOffsetMargin: v,
    iconPosition: y,
    size: Z,
    ref: ee,
    disabled: H
  }), en = "expressive" === f, er = i.useContext(c.C), {
    theme: ei,
    i18n: ea
  } = (0, p.G9)(), es = (0, o.q)(ei), eo = i.useRef(false);
  i.useEffect(() => {
    true === C && (eo.current = true, l.O.announce(null != P ? P : ea.BUTTON_LOADING_STARTED_LABEL)), false === C && true === eo.current && (l.O.announce(null != D ? D : ea.BUTTON_LOADING_FINISHED_LABEL), eo.current = false)
  }, [C, P, D, ea.BUTTON_LOADING_STARTED_LABEL, ea.BUTTON_LOADING_FINISHED_LABEL]);
  let el = (0, r.jsxs)("div", {
      className: s()(g.buttonChildren, {
        [g.loading]: C
      }),
      children: [null != et && "start" === y && et, $ && (0, r.jsx)(m.E, {
        tag: "span",
        variant: S[Z],
        color: "none",
        lineClamp: 1,
        children: h
      }), null != et && "end" === y && et]
    }),
    ec = H || C,
    eu = Y;
  null != eu && "number" == typeof eu && (eu = "".concat(eu, "px"));
  let ed = (0, r.jsx)(d.vN, O(b({}, T), {
    children: (0, r.jsxs)("button", O(b({
      "data-mana-component": "button",
      role: a,
      "aria-busy": C,
      className: s()(g.button, g[Z], g[f], {
        [g.hasText]: $,
        [g.fullWidth]: Q,
        [g.rounded]: x
      }),
      ref: ee,
      rel: j,
      type: L,
      onClick: ec ? e => e.preventDefault() : M,
      onDoubleClick: ec ? e => e.preventDefault() : k,
      onMouseUp: ec ? true : V,
      onMouseDown: ec ? true : F,
      onKeyDown: ec ? true : B,
      onMouseEnter: ec ? true : U,
      onMouseLeave: ec ? true : G,
      disabled: H,
      style: {
        "--__button-min-width": eu
      }
    }, q), {
      children: [en && (0, r.jsx)(R, {
        hasReducedMotion: er.reducedMotion.enabled,
        buttonRef: ee,
        isLightMode: es,
        disabled: H
      }), null == C ? (0, r.jsx)("div", {
        className: g.buttonChildrenWrapper,
        children: el
      }) : (0, r.jsx)(N, {
        loading: C,
        size: Z,
        children: el
      })]
    }))
  }));
  return en ? (0, r.jsx)("div", {
    className: s()(g.expressiveWrapper, {
      [g.fullWidth]: Q,
      [g.hasText]: $
    }),
    children: ed
  }) : ed
}

function N(e) {
  let {
    children: t,
    loading: n,
    size: a
  } = e, o = i.useRef(null), [l, c] = i.useState(n);
  return i.useEffect(() => (null != o.current && clearTimeout(o.current), n ? c(true) : o.current = setTimeout(() => {
    c(false)
  }, 500), () => {
    null != o.current && clearTimeout(o.current)
  }), [n]), (0, r.jsxs)("div", {
    className: g.buttonChildrenWrapper,
    children: [t, l && (0, r.jsx)("div", {
      className: s()(g.spinnerWrapper, {
        [g.fadeIn]: n,
        [g.fadeOut]: !n
      }),
      children: (0, r.jsx)(h.y, {
        type: h.t.PULSING_ELLIPSIS,
        className: s()(g.spinner, g["spinner-".concat(a)]),
        itemClassName: g.spinnerItem
      })
    })]
  })
}

function R(e) {
  let {
    hasReducedMotion: t,
    buttonRef: n,
    isLightMode: a,
    disabled: o
  } = e, l = i.useRef(null);
  return i.useEffect(() => {
    if (!o && t) {
      let e = n.current,
        t = () => {
          var e;
          null == (e = l.current) || e.play()
        },
        r = () => {
          var e;
          null == (e = l.current) || e.pause()
        };
      return null == e || e.addEventListener("mouseenter", t, true), null == e || e.addEventListener("mouseleave", r, true), () => {
        null == e || e.removeEventListener("mouseenter", t, true), null == e || e.removeEventListener("mouseleave", r, true)
      }
    }
  }, [t, n, o]), (0, r.jsxs)(r.Fragment, {
    children: [!o && (0, r.jsx)(_.s, {
      className: s()(g.expressiveRive, g.expressiveBackground),
      eventTargetRef: n,
      fit: "layout",
      artboard: "BaseGlowRemapped",
      ref: l,
      withReducedMotion: "short-loop"
    }), !t && !o && (0, r.jsx)(_.s, {
      className: s()(g.expressiveRive, g.expressiveHoverContainer),
      fit: "layout",
      artboard: a ? "HoverLightmode" : "HoverDarkmode"
    }), (0, r.jsx)("div", {
      className: s()(g.expressiveRive, g.expressiveFill)
    })]
  })
}

function w(e) {
  let {
    icon: t,
    iconOpticalOffsetMargin: n,
    iconPosition: a,
    size: s,
    ref: o,
    disabled: l
  } = e, c = null;

  function u() {
    if (0 === n) return {};
    switch (a) {
      case "start":
        return {
          marginLeft: n
        };
      case "end":
        return {
          marginRight: n
        }
    }
    return {}
  }
  let [d, p] = i.useState(false);
  if (i.useEffect(() => {
      if ("object" == typeof t && "sticker" === t.type && null != o.current) {
        let e = o.current,
          t = () => {
            l || p(true)
          },
          n = () => {
            l || p(false)
          };
        return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
          e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
        }
      }
    }, [t, o, l]), "function" == typeof t || (null == t ? true : t.type) === "icon") {
    let e = "function" == typeof t ? t : t.asset;
    c = (0, r.jsx)(e, {
      color: "currentColor",
      style: u(),
      size: I[s],
      className: g.icon
    })
  } else if (null != t) {
    if ("rive" === t.type) {
      let e = t.asset;
      c = (0, r.jsx)(e, O(b({}, t.riveProps), {
        eventTargetRef: o,
        style: {
          width: f.E[I[s]],
          height: f.E[I[s]]
        }
      }))
    } else if ("sticker" === t.type) {
      let e = t.component;
      c = (0, r.jsx)(e, {
        size: f.E[T[s]],
        sticker: t.asset,
        isInteracting: d
      })
    }
  }
  return c
}