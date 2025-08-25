/** Chunk was on web.js **/
/** chunk id: 780605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => w,
  Y: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk267843 = require("./267843.js"),
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
  Chunk214785 = require("./214785.js");

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

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let S = {
    xs: "text-xs/medium",
    sm: "text-sm/medium",
    md: "text-md/medium"
  },
  A = {
    xs: "xxs",
    sm: "xs",
    md: "refresh_sm"
  },
  C = {
    xs: "sm",
    sm: "sm",
    md: "md"
  };

function N(e) {
  var t, n, {
      role: o = "button",
      variant: s = "primary",
      size: d = "md",
      text: f,
      icon: b,
      iconPosition: O = "start",
      iconOpticalOffsetMargin: T = 0,
      fullWidth: A = false,
      focusProps: C,
      loading: N,
      loadingStartedLabel: D,
      loadingFinishedLabel: x,
      rounded: L = false,
      type: j = "button",
      rel: k,
      onClick: M,
      onDoubleClick: U,
      onMouseEnter: G,
      onMouseLeave: B,
      onMouseUp: Z,
      onMouseDown: F,
      onKeyDown: V,
      disabled: H,
      className: Y,
      style: W,
      buttonRef: K
    } = e,
    z = I(e, ["role", "variant", "size", "text", "icon", "iconPosition", "iconOpticalOffsetMargin", "fullWidth", "focusProps", "loading", "loadingStartedLabel", "loadingFinishedLabel", "rounded", "type", "rel", "onClick", "onDoubleClick", "onMouseEnter", "onMouseLeave", "onMouseUp", "onMouseDown", "onKeyDown", "disabled", "className", "style", "buttonRef"]);
  let q = (0, g.M)(),
    X = null != (t = null == q ? true : q.size) ? t : d,
    Q = null != (n = null == q ? true : q.fullWidth) ? n : A,
    J = null != f,
    $ = i.useRef(null),
    ee = null != K ? K : $,
    et = (0, r.jsx)(w, {
      icon: b,
      iconOpticalOffsetMargin: T,
      iconPosition: O,
      size: X,
      ref: ee,
      disabled: H
    }),
    en = "expressive" === s,
    er = i.useContext(c.S),
    ei = (0, p.a)((0, h.ZP)()),
    eo = i.useRef(false);
  i.useEffect(() => {
    true === N && (eo.current = true, l.u.announce(null != D ? D : m.intl.string(m.t.A11Y_LOADING_STARTED))), false === N && true === eo.current && (l.u.announce(null != x ? x : m.intl.string(m.t.A11Y_LOADING_FINISHED)), eo.current = false)
  }, [N, D, x]);
  let ea = (0, r.jsxs)("div", {
      className: a()(E.buttonChildren, {
        [E.loading]: N
      }),
      children: [null != et && "start" === O && et, J && (0, r.jsx)(_.x, {
        tag: "span",
        variant: S[X],
        color: "none",
        lineClamp: 1,
        children: f
      }), null != et && "end" === O && et]
    }),
    es = H || N,
    el = (0, r.jsx)(u.t, v(y({}, C), {
      children: (0, r.jsxs)("button", v(y({
        "data-mana-component": "button",
        role: o,
        "aria-busy": N,
        className: a()(E.button, E[X], E[s], {
          [E.hasText]: J,
          [E.fullWidth]: Q,
          [E.rounded]: L
        }),
        ref: ee,
        rel: k,
        type: j,
        onClick: es ? e => e.preventDefault() : M,
        onDoubleClick: es ? e => e.preventDefault() : U,
        onMouseUp: es ? true : Z,
        onMouseDown: es ? true : F,
        onKeyDown: es ? true : V,
        onMouseEnter: es ? true : G,
        onMouseLeave: es ? true : B,
        disabled: H
      }, z), {
        children: [en && (0, r.jsx)(P, {
          hasReducedMotion: er.reducedMotion.enabled,
          buttonRef: ee,
          isLightMode: ei,
          disabled: H
        }), null == N ? (0, r.jsx)("div", {
          className: E.buttonChildrenWrapper,
          children: ea
        }) : (0, r.jsx)(R, {
          loading: N,
          size: X,
          children: ea
        })]
      }))
    }));
  return en ? (0, r.jsx)("div", {
    className: a()(E.expressiveWrapper, {
      [E.fullWidth]: Q,
      [E.hasText]: J
    }),
    children: el
  }) : el
}

function R(e) {
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
    className: E.buttonChildrenWrapper,
    children: [t, l && (0, r.jsx)("div", {
      className: a()(E.spinnerWrapper, {
        [E.fadeIn]: n,
        [E.fadeOut]: !n
      }),
      children: (0, r.jsx)(f.$, {
        type: f.R.PULSING_ELLIPSIS,
        className: a()(E.spinner, E["spinner-".concat(o)]),
        itemClassName: E.spinnerItem
      })
    })]
  })
}

function P(e) {
  let {
    hasReducedMotion: t,
    buttonRef: n,
    isLightMode: o,
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
    children: [!s && (0, r.jsx)(d.GlowButtonRive, {
      className: a()(E.expressiveRive, E.expressiveBackground),
      eventTargetRef: n,
      fit: "layout",
      artboard: "BaseGlowRemapped",
      ref: l,
      withReducedMotion: "short-loop"
    }), !t && !s && (0, r.jsx)(d.GlowButtonRive, {
      className: a()(E.expressiveRive, E.expressiveHoverContainer),
      fit: "layout",
      artboard: o ? "HoverLightmode" : "HoverDarkmode"
    }), (0, r.jsx)("div", {
      className: a()(E.expressiveRive, E.expressiveFill)
    })]
  })
}

function w(e) {
  let {
    icon: t,
    iconOpticalOffsetMargin: n,
    iconPosition: o,
    size: a,
    ref: l,
    disabled: c
  } = e, u = null;

  function d() {
    if (0 === n) return {};
    switch (o) {
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
  let [f, _] = i.useState(false);
  if (i.useEffect(() => {
      if ("object" == typeof t && "sticker" === t.type && null != l.current) {
        let e = l.current,
          t = () => {
            c || _(true)
          },
          n = () => {
            c || _(false)
          };
        return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n), () => {
          e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n)
        }
      }
    }, [t, l, c]), "function" == typeof t || (null == t ? true : t.type) === "icon") {
    let e = "function" == typeof t ? t : t.asset;
    u = (0, r.jsx)(e, {
      color: "currentColor",
      style: d(),
      size: A[a],
      className: E.icon
    })
  } else if (null != t) {
    if ("rive" === t.type) {
      let e = t.asset;
      u = (0, r.jsx)(e, v(y({}, t.riveProps), {
        eventTargetRef: l,
        style: {
          width: s.Z[A[a]],
          height: s.Z[A[a]]
        }
      }))
    } else if ("sticker" === t.type) {
      let e = t.component;
      u = (0, r.jsx)(e, {
        size: s.Z[C[a]],
        sticker: t.asset,
        isInteracting: f
      })
    }
  }
  return u
}