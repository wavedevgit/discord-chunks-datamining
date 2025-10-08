/** Chunk was on web.js **/
/** chunk id: 695046, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DQ: () => v,
  Gu: () => N,
  Jb: () => S,
  jm: () => A,
  l7: () => O
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk372817 = require("./372817.js"),
  Chunk793030 = require("./793030.js"),
  Chunk57260 = require("./57260.jsx"),
  Chunk15127 = require("./15127.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk948201 = require("./948201.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = {
  NOT_SET: "",
  NONE: "0",
  SMALL: "7px 10px",
  MEDIUM: "10px"
};

function v(e) {
  let {
    checked: t,
    radioItemIconClassName: n,
    icon: i,
    disabled: a
  } = e, s = i;
  return (0, r.jsxs)("div", {
    className: p.radioIndicatorGroup,
    children: [(0, r.jsxs)("svg", {
      className: o()(p.radioIndicator, n, {
        [p.radioIndicatorChecked]: t,
        [p.radioIndicatorDisabled]: a
      }),
      viewBox: "0 0 24 24",
      children: [(0, r.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "12",
        className: p.refreshIconFill
      }), (0, r.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "12",
        strokeWidth: 2,
        fill: "none",
        className: p.refreshIconStroke
      }), t ? (0, r.jsx)("circle", {
        cx: "12",
        cy: "12",
        r: "5",
        className: p.refreshIcon
      }) : null]
    }), null != s && (0, r.jsx)(s, {
      className: p.icon,
      size: "md",
      color: "currentColor"
    })]
  })
}

function I(e) {
  var t;
  let {
    disabled: n,
    checked: i,
    option: a,
    size: s,
    onClick: c,
    infoClassName: u,
    titleClassName: f,
    radioItemClassName: _,
    radioItemIconClassName: h,
    radioBarClassName: m,
    hasSelection: g,
    radioPosition: E = "left",
    icon: b,
    withTransparentBackground: y
  } = e, O = null != (t = a.color) ? t : "", I = i || !g, T = (0, r.jsx)(v, {
    checked: i,
    disabled: n,
    radioItemIconClassName: h,
    icon: b
  });
  return (0, r.jsx)(l.P3F, {
    "data-toggleable-component": "radiogroup",
    role: "radio",
    "aria-checked": i,
    onClick: n ? true : c,
    tabIndex: !n && I ? 0 : false,
    className: o()(null != a.collapsibleContent ? p.collapsibleItem : p.item, {
      [p.disabled]: n,
      [p.itemFilled]: !y
    }, _),
    children: (0, r.jsxs)("div", {
      style: {
        "--radio-bar-accent-color": O,
        padding: s
      },
      className: o()(p.radioBar, {
        [p.radioPositionLeft]: "left" === E,
        [p.radioPositionRight]: "right" === E
      }, m),
      children: ["left" === E ? T : null, (0, r.jsxs)("div", {
        className: o()(p.info, u),
        children: [(0, r.jsx)(d.x, {
          variant: "text-md/medium",
          className: f,
          color: "none",
          children: a.name
        }), null != a.desc && "" !== a.desc ? (0, r.jsx)(d.x, {
          color: "none",
          variant: "text-sm/normal",
          children: a.desc
        }) : null]
      }), "right" === E ? T : null]
    })
  })
}

function T(e) {
  let {
    checked: t,
    disabled: n,
    option: a,
    size: o,
    infoClassName: s,
    hasSelection: l,
    titleClassName: u,
    radioItemClassName: d,
    radioItemIconClassName: _,
    radioBarClassName: h,
    collapsibleClassName: m,
    withTransparentBackground: g = false,
    radioPosition: E = "left",
    onClick: b
  } = e, y = i.useCallback(e => (e.preventDefault(), null == b ? true : b(a)), [b, a]), O = n || a.disabled, {
    tooltipText: v,
    tooltipPosition: T,
    icon: S
  } = a, A = null != a.collapsibleContent ? (0, r.jsx)(c.z, {
    className: m,
    isExpanded: t,
    collapsibleContent: a.collapsibleContent,
    children: e => {
      let {
        onClick: n
      } = e;
      return (0, r.jsx)(I, {
        disabled: !!O,
        checked: t,
        hasSelection: l,
        option: a,
        onClick: e => {
          y(e), n(e)
        },
        size: o,
        infoClassName: s,
        titleClassName: u,
        radioItemClassName: d,
        radioItemIconClassName: _,
        radioBarClassName: h,
        radioPosition: E,
        icon: S,
        withTransparentBackground: g
      })
    }
  }) : (0, r.jsx)(I, {
    disabled: !!O,
    checked: t,
    hasSelection: l,
    option: a,
    onClick: y,
    size: o,
    infoClassName: s,
    titleClassName: u,
    radioItemClassName: d,
    radioItemIconClassName: _,
    radioBarClassName: h,
    radioPosition: E,
    icon: S,
    withTransparentBackground: g
  });
  return null != v ? (0, r.jsx)(f.u, {
    text: v,
    position: null != T ? T : "top",
    children: (0, r.jsx)("div", {
      className: p.tooltipWrapper,
      children: A
    })
  }) : A
}

function S() {
  let {
    orientation: e = "vertical",
    isDisabled: t = false,
    labelledBy: n
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, r = Chunk647438.useRef(null), a = Chunk647438.useMemo(() => (0, Chunk372817.E)({
    getFocusableElements() {
      let e = Chunk951288.current;
      return null != module ? Array.from(module.querySelectorAll('[role="radio"]')) : []
    },
    getActiveElement() {
      var e;
      return null == (e = Chunk951288.current) ? true : module.ownerDocument.activeElement
    }
  }), []);
  return {
    role: "radiogroup",
    onKeyDown: Chunk647438.useCallback(async t => {
      if (null == r.current) return;
      let n = "vertical" === e ? _.yXg.ARROW_UP : _.yXg.ARROW_LEFT,
        i = "vertical" === e ? _.yXg.ARROW_DOWN : _.yXg.ARROW_RIGHT;
      switch (t.which) {
        case i: {
          t.stopPropagation(), t.preventDefault();
          let e = await a.getNextFocusableElement({
            wrap: true
          });
          return null == e ? true : e.focus()
        }
        case n: {
          t.stopPropagation(), t.preventDefault();
          let e = await a.getPreviousFocusableElement({
            wrap: true
          });
          return null == e ? true : e.focus()
        }
      }
    }, [Chunk120356, module]),
    ref: Chunk951288,
    "aria-labelledby": require,
    "aria-orientation": module,
    "aria-disabled": exports
  }
}

function A(e) {
  let {
    isSelected: t,
    label: n
  } = e;
  return {
    role: "radio",
    tabIndex: t ? 0 : false,
    "aria-label": n,
    "aria-checked": t
  }
}

function C(e) {
  let {
    itemInfoClassName: t,
    itemTitleClassName: n,
    radioItemClassName: a,
    collapsibleClassName: s,
    className: c,
    value: d = null,
    size: f = O.MEDIUM,
    radioPosition: h = "left",
    onChange: g = _.dG4,
    disabled: y = false,
    options: v = [],
    "aria-labelledby": I,
    orientation: A,
    withTransparentBackground: C
  } = e, N = (0, u.Gc)(), R = i.useContext(l.zbb), P = S({
    labelledBy: null != I ? I : N.titleId,
    orientation: A,
    isDisabled: y
  }), {
    ref: w
  } = P, D = b(P, ["ref"]), L = v.some(e => e.value === d);
  return (0, r.jsx)("div", E(m({}, D), {
    ref: w,
    className: o()(p.container, c),
    id: null == R ? true : R.controlId,
    "aria-describedby": null == R ? true : R.describedById,
    "aria-errormessage": null == R ? true : R.errorMessageId,
    "aria-invalid": (null == R ? true : R.errorMessageId) != null,
    children: v.map(e => (0, r.jsx)(T, {
      hasSelection: L,
      disabled: y,
      checked: d === e.value,
      option: e,
      onClick: g,
      radioPosition: h,
      size: f,
      infoClassName: t,
      titleClassName: n,
      radioItemClassName: a,
      radioItemIconClassName: e.radioItemIconClassName,
      collapsibleClassName: s,
      radioBarClassName: e.radioBarClassName,
      withTransparentBackground: C
    }, e.value))
  }))
}

function N(e) {
  var {
    label: t,
    description: n,
    required: i
  } = e, a = b(e, ["label", "description", "required"]);
  return (0, r.jsx)(l.gNt, {
    label: t,
    description: n,
    required: i,
    children: (0, r.jsx)(C, m({}, a))
  })
}