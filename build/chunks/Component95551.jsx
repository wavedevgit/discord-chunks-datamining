/** Chunk was on 65298 **/
/** chunk id: 95551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gs: () => h,
  N3: () => p,
  eE: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk934551 = require("./934551.js"),
  Chunk397927 = require("./397927.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk423648 = require("./423648.js");

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  return (0, a.jsx)("div", {
    className: c.wE,
    children: (0, a.jsx)(i.W1t, d({
      "data-menu-migrated": true,
      variant: "fixed",
      hideScroller: true,
      onSelect: true
    }, e))
  })
}

function p(e) {
  let {
    action: t,
    onClick: n,
    icon: m,
    label: p,
    sublabel: h,
    trailing: x,
    renderSubmenu: g,
    ref: f
  } = e, b = null != n, v = (0, s.rE)({
    action: t,
    onClick: n
  }), [j, _] = l.useState(false), y = l.useRef(null), A = null != f ? f : y, C = null != g, S = C && b, O = {
    offset: {
      top: false,
      left: false,
      right: false,
      bottom: false
    }
  }, T = l.useCallback(() => {
    _(true)
  }, []), E = l.useCallback(() => {
    _(false)
  }, []), N = () => (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: c.iA,
      children: (0, a.jsx)(m, {
        size: "xs",
        color: "currentColor"
      })
    }), (0, a.jsxs)("div", {
      className: c.$H,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(i.Text, {
          color: "currentColor",
          variant: "text-sm/medium",
          className: c.W1,
          children: p
        }), (0, a.jsx)(i.Text, {
          color: "currentColor",
          variant: "text-xs/medium",
          children: h
        })]
      }), x]
    })]
  }), w = e => {
    let t;
    return t = S ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(i.DUT, {
        className: c.ef,
        onClick: v,
        focusProps: {
          offset: u(d({}, O.offset), {
            right: 0
          })
        },
        children: N()
      }), (0, a.jsx)(i.DUT, u(d({
        className: c.ap,
        "aria-label": o.intl.string(o.t.PdRCRg)
      }, e), {
        onClick: T,
        focusProps: O,
        children: (0, a.jsx)(r.ChevronSmallRightIcon, {
          size: "xs",
          color: "currentColor"
        })
      }))]
    }) : C ? (0, a.jsxs)(i.DUT, u(d({
      className: c.ef
    }, e), {
      onClick: T,
      focusProps: O,
      children: [N(), (0, a.jsx)("div", {
        className: c.ap,
        children: (0, a.jsx)(r.ChevronSmallRightIcon, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })) : (0, a.jsx)(i.DUT, {
      className: c.ef,
      onClick: v,
      focusProps: O,
      children: N()
    }), (0, a.jsx)("div", {
      ref: A,
      className: c.jG,
      children: t
    })
  };
  return C ? (0, a.jsx)("li", {
    className: c.j$,
    onMouseEnter: T,
    onMouseLeave: E,
    children: (0, a.jsx)(i.YNO, {
      targetElementRef: A,
      spacing: 0,
      renderPopout: g,
      shouldShow: j,
      onRequestClose: E,
      children: w
    })
  }) : (0, a.jsx)("li", {
    className: c.j$,
    children: w()
  })
}

function h(e) {
  let {
    children: t,
    "aria-label": n
  } = e;
  return (0, a.jsx)("ul", {
    "aria-label": n,
    children: t
  })
}