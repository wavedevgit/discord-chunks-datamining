/** Chunk was on web.js **/
/** chunk id: 830447, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => N,
  v: () => C
}), require("./361932.js"), require("./187205.js"), require("./539854.js"), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  l = require.n(Chunk348327),
  Chunk498405 = require("./498405.js"),
  Chunk793030 = require("./793030.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk720312 = require("./720312.js"),
  Chunk828214 = require("./828214.js"),
  Chunk670596 = require("./670596.js"),
  Chunk788314 = require("./788314.js"),
  Chunk939350 = require("./939350.js"),
  Chunk334405 = require("./334405.js");

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

function I(e) {
  return null == e ? [] : i.Children.toArray(e).flatMap(e => {
    var t;
    return null == e ? [] : Array.isArray(e) ? I(e) : e.type === i.Fragment ? null != (t = I(e.props.children)) ? t : [] : [e]
  })
}

function T(e) {
  return I(e).reduce((e, t) => {
    var n, r;
    if (t.type === p.Cl) return e.push({
      type: "separator",
      navigable: false
    }), e;
    if (t.type === p.kS) {
      let n = T(t.props.children);
      return n.length > 0 && (e.push({
        type: "groupstart",
        length: n.length,
        navigable: false,
        props: t.props
      }), e.push(...n), e.push({
        type: "groupend",
        length: n.length,
        navigable: false,
        props: t.props
      })), e
    }
    if (t.type === p.sN) return e.push(null != t.props.render ? {
      type: "customitem",
      key: t.props.id,
      navigable: null == t.props.navigable || t.props.navigable,
      render: t.props.render,
      props: t.props
    } : {
      type: "item",
      key: t.props.id,
      navigable: true,
      label: t.props.label,
      children: t.props.children ? T(t.props.children) : true,
      onChildrenScroll: t.props.onChildrenScroll,
      props: t.props,
      childRowHeight: t.props.childRowHeight,
      listClassName: t.props.listClassName,
      subMenuClassName: t.props.subMenuClassName
    }), e;
    if (t.type === p.S8) return e.push({
      type: "checkbox",
      key: t.props.id,
      navigable: true,
      props: t.props
    }), e;
    if (t.type === p.k5) return e.push({
      type: "radio",
      key: t.props.id,
      navigable: true,
      props: t.props
    }), e;
    else if (t.type === p.m7) return e.push({
      type: "switch",
      key: t.props.id,
      navigable: true,
      props: t.props
    }), e;
    else if (t.type === p.II) return e.push(null != t.props.control ? {
      type: "control",
      key: t.props.id,
      navigable: true,
      props: t.props
    } : {
      type: "compositecontrol",
      key: t.props.id,
      navigable: false !== t.props.interactive,
      children: t.props.children,
      props: t.props
    }), e;
    throw Error("Menu API only allows Items and groups of Items as children. Received ".concat(null != (r = null != (n = null == t ? true : t.type) ? n : t) ? r : typeof t, " (").concat(typeof t, ") instead"))
  }, [])
}

function S(e) {
  return e.reduce((e, t) => (t.navigable && e.push({
    key: t.key,
    children: "item" === t.type && null != t.children ? S(t.children) : true
  }), e), [])
}

function A(e, t, n, i) {
  let a = 0,
    o = [];
  return e.reduce((e, s, l) => {
    let c = o.length > 0 ? o[o.length - 1] : e;
    switch (s.type) {
      case "separator":
        c.push((0, r.jsx)(m.Z0, {}, "separator-".concat(l))), a = 0;
        break;
      case "groupstart":
        a > 0 && s.length > 0 && (c.push((0, r.jsx)(m.Z0, {}, "separator-".concat(l))), a = 0), o.push([]);
        break;
      case "groupend":
        o.length > 0 && e.push((0, r.jsx)(m.ZA, y({
          contents: o.pop()
        }, s.props), "group-".concat(l)));
        break;
      case "item": {
        let {
          children: e,
          childRowHeight: o,
          onChildrenScroll: l,
          listClassName: u,
          subMenuClassName: d
        } = s, f = null != e, _ = [...n, s.key], p = t.isFocused(_), h = null != e ? {
          "aria-haspopup": true
        } : {}, g = (0, r.jsx)(m.ck, v(y({}, s.props), {
          label: s.label,
          hasSubmenu: null != e,
          isFocused: p,
          menuItemProps: y({}, t.getItemProps({
            path: _,
            hasSubmenu: f
          }), h),
          onClose: i
        }), s.key);
        f ? null != o ? c.push((0, r.jsx)(m.P2, v(y({}, s.props), {
          parentItem: g,
          isFocused: p,
          menuSubmenuProps: t.getSubmenuProps({
            path: _
          }),
          rows: A(e, t, _, i),
          rowHeight: o,
          onScroll: l,
          listClassName: u
        }), "".concat(s.key, "-submenu"))) : c.push((0, r.jsx)(m.LY, v(y({}, s.props), {
          subMenuClassName: d,
          parentItem: g,
          isFocused: p,
          menuSubmenuProps: t.getSubmenuProps({
            path: _
          }),
          renderSubmenu: () => A(e, t, _, i)
        }), "".concat(s.key, "-submenu"))) : c.push(g), a++;
        break
      }
      case "customitem": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.kq, v(y({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e,
            navigable: s.navigable
          }),
          onClose: i,
          children: s.render
        }), s.key)), a++;
        break
      }
      case "checkbox": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.oC, v(y({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e,
            role: "menuitemcheckbox"
          })
        }), s.key)), a++;
        break
      }
      case "radio": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.Rk, v(y({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e,
            role: "menuitemradio"
          })
        }), s.key)), a++;
        break
      }
      case "switch": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.TO, v(y({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e,
            role: "menuitemcheckbox"
          })
        }), s.key)), a++;
        break
      }
      case "control": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.lc, v(y({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e
          }),
          onClose: i
        }), s.key)), a++;
        break
      }
      case "compositecontrol": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.$I, v(y({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e
          }),
          onClose: i,
          children: s.children
        }), s.key)), a++
      }
    }
    return e
  }, [])
}

function C(e) {
  var t;
  let {
    navId: n,
    variant: a = "flexible",
    hideScroller: s = false,
    className: p,
    children: b,
    onClose: O,
    onSelect: I,
    onInteraction: C
  } = e, N = T(b), P = S(N), D = i.useRef([]);
  l()(D.current, P) || (D.current = P);
  let w = (0, _.c)("Menu"),
    L = null == (t = N.find(e => null != e.key)) ? true : t.key,
    x = (0, c.Z)({
      navId: n,
      items: D.current,
      initialFocusPath: f.Z.keyboardModeEnabled && null != L ? [L] : [],
      closeMenu: O,
      defaultIsUsingKeyboardNavigation: f.Z.keyboardModeEnabled
    });
  i.useEffect(() => {
    x.isUsingKeyboardNavigation ? f.Z.keyboardModeEnabled || (0, d.Qj)() : f.Z.keyboardModeEnabled && (0, d.rf)()
  }, [x.isUsingKeyboardNavigation]);
  let M = i.useRef(null);
  (0, u.Tbt)(M);
  let k = s ? u.u2D : u.zJl,
    j = i.useMemo(() => ({
      onSelect: I,
      onInteraction: C
    }), [I, C]);
  return (0, r.jsx)(h.p.Provider, {
    value: j,
    children: (0, r.jsx)("div", v(y({
      className: o()(E.menu, E[a], p),
      style: {
        "--custom-menu-viewport-padding": w ? "".concat(g.sb, "px") : "".concat(g.F3, "px")
      }
    }, x.getContainerProps()), {
      ref: M,
      "aria-label": e["aria-label"],
      children: (0, r.jsxs)(k, {
        className: E.scroller,
        children: [0 === N.length && (0, r.jsx)(m.ck, {
          disabled: true,
          label: () => (0, r.jsx)(R, {}),
          menuItemProps: x.getItemProps({
            path: ["empty"]
          }),
          isFocused: false,
          onFocus: () => {},
          onClose: O
        }), N.length > 0 && A(N, x, [], O)]
      })
    }))
  })
}

function N() {
  return (0, Chunk54381.jsx)("div", {
    className: o()(Chunk334405.menu, Chunk334405.loader, Chunk334405.flexible),
    children: (0, Chunk54381.jsx)(Chunk793030.$jN, {})
  })
}

function R() {
  let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
    t = "♫ ⊂(｡◕‿‿◕｡⊂) ♪",
    [n, a] = Chunk473749.useState(module);
  return Chunk473749.useEffect(() => {
    if (Chunk607070.Z.useReducedMotion) return;
    let n = setInterval(() => {
      Chunk120356(n => n === e ? t : e)
    }, 700);
    return () => clearInterval(require)
  }, []), (0, Chunk54381.jsx)("div", {
    style: {
      width: "100%",
      textAlign: "center"
    },
    children: require
  })
}