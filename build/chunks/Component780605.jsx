/** Chunk was on web.js **/
/** chunk id: 780605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk680732 = require("./680732.js"),
  Chunk186325 = require("./186325.js"),
  Chunk84735 = require("./84735.js"),
  Chunk836459 = require("./836459.js"),
  Chunk922770 = require("./922770.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk511857 = require("./511857.js"),
  Chunk410030 = require("./410030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk974223 = require("./974223.js"),
  Chunk454104 = require("./454104.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let T = {
    sm: "text-sm/medium",
    md: "text-md/medium"
  },
  S = {
    sm: "xs",
    md: "refresh_sm"
  };

function A(e) {
  let t;
  var n, o, {
      role: u = "button",
      variant: d = "primary",
      size: E = "md",
      text: y,
      icon: I,
      iconPosition: A = "start",
      iconOpticalOffsetMargin: R = 0,
      fullWidth: P = false,
      focusProps: w,
      loading: D,
      loadingStartedLabel: L,
      loadingFinishedLabel: x,
      rounded: M = false,
      type: k = "button",
      rel: j,
      onClick: U,
      onDoubleClick: G,
      onMouseUp: B,
      onMouseDown: Z,
      onKeyDown: F,
      disabled: V,
      className: H,
      style: Y,
      buttonRef: W
    } = e,
    K = v(e, ["role", "variant", "size", "text", "icon", "iconPosition", "iconOpticalOffsetMargin", "fullWidth", "focusProps", "loading", "loadingStartedLabel", "loadingFinishedLabel", "rounded", "type", "rel", "onClick", "onDoubleClick", "onMouseUp", "onMouseDown", "onKeyDown", "disabled", "className", "style", "buttonRef"]);
  let z = (0, m.M)(),
    q = null != (n = null == z ? true : z.size) ? n : E,
    X = null != (o = null == z ? true : z.fullWidth) ? o : P;

  function Q() {
    if (0 === R) return {};
    switch (A) {
      case "start":
        return {
          marginLeft: R
        };
      case "end":
        return {
          marginRight: R
        }
    }
    return {}
  }
  let J = null != y;
  null != I && (t = (0, r.jsx)(I, {
    color: "currentColor",
    style: Q(),
    size: S[q],
    className: g.icon
  }));
  let $ = i.useRef(null),
    ee = null != W ? W : $,
    et = "expressive" === d,
    en = i.useContext(l.S),
    er = (0, _.a)((0, p.ZP)()),
    ei = i.useRef(false);
  i.useEffect(() => {
    true === D && (ei.current = true, s.u.announce(null != L ? L : h.intl.string(h.t.A11Y_LOADING_STARTED))), false === D && true === ei.current && (s.u.announce(null != x ? x : h.intl.string(h.t.A11Y_LOADING_FINISHED)), ei.current = false)
  }, [D, L, x]);
  let eo = (0, r.jsxs)("div", {
      className: a()(g.buttonChildren, {
        [g.loading]: D
      }),
      children: [null != t && "start" === A && t, J && (0, r.jsx)(f.x, {
        tag: "span",
        variant: T[q],
        color: "none",
        lineClamp: 1,
        children: y
      }), null != t && "end" === A && t]
    }),
    ea = V || D,
    es = (0, r.jsx)(c.t, O(b({}, w), {
      children: (0, r.jsxs)("button", O(b({
        "data-mana-component": "button",
        role: u,
        "aria-busy": D,
        className: a()(g.button, g[q], g[d], {
          [g.hasText]: J,
          [g.fullWidth]: X,
          [g.rounded]: M
        }),
        ref: ee,
        rel: j,
        type: k,
        onClick: ea ? e => e.preventDefault() : U,
        onDoubleClick: ea ? e => e.preventDefault() : G,
        onMouseUp: ea ? true : B,
        onMouseDown: ea ? true : Z,
        onKeyDown: ea ? true : F,
        disabled: V
      }, K), {
        children: [et && (0, r.jsx)(C, {
          hasReducedMotion: en.reducedMotion.enabled,
          buttonRef: ee,
          isLightMode: er
        }), null == D ? (0, r.jsx)("div", {
          className: g.buttonChildrenWrapper,
          children: eo
        }) : (0, r.jsx)(N, {
          loading: D,
          size: q,
          children: eo
        })]
      }))
    }));
  return et ? (0, r.jsx)("div", {
    className: a()(g.expressiveWrapper, {
      [g.fullWidth]: X
    }),
    children: es
  }) : es
}

function N(e) {
  let {
    children: t,
    loading: n,
    size: o
  } = e, s = i.useRef(null), [l, c] = i.useState(n);
  return i.useEffect(() => (null != s.current && clearTimeout(s.current), n ? c(true) : s.current = setTimeout(() => {
    c(false)
  }, 500), () => {
    null != s.current && clearTimeout(s.current)
  }), [n]), (0, r.jsxs)("div", {
    className: g.buttonChildrenWrapper,
    children: [t, l && (0, r.jsx)("div", {
      className: a()(g.spinnerWrapper, {
        [g.fadeIn]: n,
        [g.fadeOut]: !n
      }),
      children: (0, r.jsx)(d.$, {
        type: d.R.PULSING_ELLIPSIS,
        className: a()(g.spinner, g["spinner-".concat(o)]),
        itemClassName: g.spinnerItem
      })
    })]
  })
}

function C(e) {
  let {
    hasReducedMotion: t,
    buttonRef: n,
    isLightMode: o
  } = e, s = i.useRef(null);
  return i.useEffect(() => {
    if (t) {
      let e = n.current,
        t = () => {
          var e;
          null == (e = s.current) || e.play()
        },
        r = () => {
          var e;
          null == (e = s.current) || e.pause()
        };
      return null == e || e.addEventListener("mouseenter", t, true), null == e || e.addEventListener("mouseleave", r, true), () => {
        null == e || e.removeEventListener("mouseenter", t, true), null == e || e.removeEventListener("mouseleave", r, true)
      }
    }
  }, [t, n]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.GlowButtonRive, {
      className: a()(g.expressiveRive, g.expressiveBackground),
      eventTargetRef: n,
      fit: "layout",
      artboard: "BaseGlowRemapped",
      ref: s,
      withReducedMotion: "short-loop"
    }), !t && (0, r.jsx)(u.GlowButtonRive, {
      className: a()(g.expressiveRive, g.expressiveHoverContainer),
      fit: "layout",
      artboard: o ? "HoverLightmode" : "HoverDarkmode"
    }), (0, r.jsx)("div", {
      className: a()(g.expressiveRive, g.expressiveFill)
    })]
  })
}