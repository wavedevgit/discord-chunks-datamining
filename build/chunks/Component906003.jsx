/** Chunk was on web.js **/
/** chunk id: 906003, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => P,
  Y: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk924929 = require("./924929.js"),
  Chunk677554 = require("./677554.js"),
  Chunk213305 = require("./213305.js"),
  Chunk986794 = require("./986794.js"),
  Chunk155127 = require("./155127.js"),
  Chunk267843 = require("./267843.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk551488 = require("./551488.jsx"),
  Chunk131573 = require("./131573.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk332103 = require("./332103.js");

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

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let T = {
    xs: "text-xs/medium",
    sm: "text-sm/medium",
    md: "text-md/medium"
  },
  S = {
    xs: "xxs",
    sm: "xs",
    md: "refresh_sm"
  },
  A = {
    xs: "sm",
    sm: "sm",
    md: "md"
  };

function C(e) {
  var t, n, {
      role: a = "button",
      variant: f = "primary",
      size: p = "md",
      text: h,
      icon: E,
      iconPosition: y = "start",
      iconOpticalOffsetMargin: I = 0,
      fullWidth: S = false,
      focusProps: A,
      loading: C,
      loadingStartedLabel: w,
      loadingFinishedLabel: D,
      rounded: x = false,
      type: L = "button",
      rel: j,
      onClick: M,
      onDoubleClick: k,
      onMouseEnter: U,
      onMouseLeave: G,
      onMouseUp: B,
      onMouseDown: Z,
      onKeyDown: F,
      disabled: V,
      className: H,
      style: Y,
      buttonRef: W
    } = e,
    K = v(e, ["role", "variant", "size", "text", "icon", "iconPosition", "iconOpticalOffsetMargin", "fullWidth", "focusProps", "loading", "loadingStartedLabel", "loadingFinishedLabel", "rounded", "type", "rel", "onClick", "onDoubleClick", "onMouseEnter", "onMouseLeave", "onMouseUp", "onMouseDown", "onKeyDown", "disabled", "className", "style", "buttonRef"]);
  let z = (0, u.M)(),
    q = null != (t = null == z ? true : z.size) ? t : p,
    X = null != (n = null == z ? true : z.fullWidth) ? n : S,
    Q = null != h,
    J = i.useRef(null),
    $ = null != W ? W : J,
    ee = (0, r.jsx)(P, {
      icon: E,
      iconOpticalOffsetMargin: I,
      iconPosition: y,
      size: q,
      ref: $,
      disabled: V
    }),
    et = "expressive" === f,
    en = i.useContext(c.S),
    {
      theme: er,
      i18n: ei
    } = (0, _.ZF)(),
    ea = (0, s.a)(er),
    eo = i.useRef(false);
  i.useEffect(() => {
    true === C && (eo.current = true, l.u.announce(null != w ? w : ei.BUTTON_LOADING_STARTED_LABEL)), false === C && true === eo.current && (l.u.announce(null != D ? D : ei.BUTTON_LOADING_FINISHED_LABEL), eo.current = false)
  }, [C, w, D, ei.BUTTON_LOADING_STARTED_LABEL, ei.BUTTON_LOADING_FINISHED_LABEL]);
  let es = (0, r.jsxs)("div", {
      className: o()(g.buttonChildren, {
        [g.loading]: C
      }),
      children: [null != ee && "start" === y && ee, Q && (0, r.jsx)(m.x, {
        tag: "span",
        variant: T[q],
        color: "none",
        lineClamp: 1,
        children: h
      }), null != ee && "end" === y && ee]
    }),
    el = V || C,
    ec = (0, r.jsx)(d.tE, O(b({}, A), {
      children: (0, r.jsxs)("button", O(b({
        "data-mana-component": "button",
        role: a,
        "aria-busy": C,
        className: o()(g.button, g[q], g[f], {
          [g.hasText]: Q,
          [g.fullWidth]: X,
          [g.rounded]: x
        }),
        ref: $,
        rel: j,
        type: L,
        onClick: el ? e => e.preventDefault() : M,
        onDoubleClick: el ? e => e.preventDefault() : k,
        onMouseUp: el ? true : B,
        onMouseDown: el ? true : Z,
        onKeyDown: el ? true : F,
        onMouseEnter: el ? true : U,
        onMouseLeave: el ? true : G,
        disabled: V
      }, K), {
        children: [et && (0, r.jsx)(R, {
          hasReducedMotion: en.reducedMotion.enabled,
          buttonRef: $,
          isLightMode: ea,
          disabled: V
        }), null == C ? (0, r.jsx)("div", {
          className: g.buttonChildrenWrapper,
          children: es
        }) : (0, r.jsx)(N, {
          loading: C,
          size: q,
          children: es
        })]
      }))
    }));
  return et ? (0, r.jsx)("div", {
    className: o()(g.expressiveWrapper, {
      [g.fullWidth]: X,
      [g.hasText]: Q
    }),
    children: ec
  }) : ec
}

function N(e) {
  let {
    children: t,
    loading: n,
    size: a
  } = e, s = i.useRef(null), [l, c] = i.useState(n);
  return i.useEffect(() => (null != s.current && clearTimeout(s.current), n ? c(true) : s.current = setTimeout(() => {
    c(false)
  }, 500), () => {
    null != s.current && clearTimeout(s.current)
  }), [n]), (0, r.jsxs)("div", {
    className: g.buttonChildrenWrapper,
    children: [t, l && (0, r.jsx)("div", {
      className: o()(g.spinnerWrapper, {
        [g.fadeIn]: n,
        [g.fadeOut]: !n
      }),
      children: (0, r.jsx)(h.$, {
        type: h.R.PULSING_ELLIPSIS,
        className: o()(g.spinner, g["spinner-".concat(a)]),
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
    disabled: s
  } = e, l = i.useRef(null);
  return i.useEffect(() => {
    if (!s && t) {
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
  }, [t, n, s]), (0, r.jsxs)(r.Fragment, {
    children: [!s && (0, r.jsx)(p.Q, {
      className: o()(g.expressiveRive, g.expressiveBackground),
      eventTargetRef: n,
      fit: "layout",
      artboard: "BaseGlowRemapped",
      ref: l,
      withReducedMotion: "short-loop"
    }), !t && !s && (0, r.jsx)(p.Q, {
      className: o()(g.expressiveRive, g.expressiveHoverContainer),
      fit: "layout",
      artboard: a ? "HoverLightmode" : "HoverDarkmode"
    }), (0, r.jsx)("div", {
      className: o()(g.expressiveRive, g.expressiveFill)
    })]
  })
}

function P(e) {
  let {
    icon: t,
    iconOpticalOffsetMargin: n,
    iconPosition: a,
    size: o,
    ref: s,
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
  let [d, _] = i.useState(false);
  if (i.useEffect(() => {
      if ("object" == typeof t && "sticker" === t.type && null != s.current) {
        let e = s.current,
          t = () => {
            l || _(true)
          },
          n = () => {
            l || _(false)
          };
        return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
          e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
        }
      }
    }, [t, s, l]), "function" == typeof t || (null == t ? true : t.type) === "icon") {
    let e = "function" == typeof t ? t : t.asset;
    c = (0, r.jsx)(e, {
      color: "currentColor",
      style: u(),
      size: S[o],
      className: g.icon
    })
  } else if (null != t) {
    if ("rive" === t.type) {
      let e = t.asset;
      c = (0, r.jsx)(e, O(b({}, t.riveProps), {
        eventTargetRef: s,
        style: {
          width: f.Z[S[o]],
          height: f.Z[S[o]]
        }
      }))
    } else if ("sticker" === t.type) {
      let e = t.component;
      c = (0, r.jsx)(e, {
        size: f.Z[A[o]],
        sticker: t.asset,
        isInteracting: d
      })
    }
  }
  return c
}