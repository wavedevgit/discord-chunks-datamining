/** Chunk was on web.js **/
/** chunk id: 830447, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => D,
  v: () => R
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

function S(e, t) {
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

function T(e) {
  return null == e ? [] : i.Children.toArray(e).flatMap(e => {
    var t;
    return null == e ? [] : Array.isArray(e) ? T(e) : e.type === i.Fragment ? null != (t = T(e.props.children)) ? t : [] : [e]
  })
}

function C(e, t) {
  if (!t || !e.icon || e.iconLeft) return e;
  let {
    icon: n
  } = e;
  return v(y({}, S(e, ["icon"])), {
    iconLeft: n
  })
}

function A(e, t) {
  return T(e).reduce((e, n) => {
    var r, i;
    if (n.type === _.Cl) return e.push({
      type: "separator",
      navigable: false
    }), e;
    if (n.type === _.kS) {
      let r = A(n.props.children, t);
      return r.length > 0 && (e.push({
        type: "groupstart",
        length: r.length,
        navigable: false,
        props: n.props
      }), e.push(...r), e.push({
        type: "groupend",
        length: r.length,
        navigable: false,
        props: n.props
      })), e
    }
    if (n.type === _.sN) {
      let r = C(n.props, t);
      return e.push(null != n.props.render ? {
        type: "customitem",
        key: n.props.id,
        navigable: null == n.props.navigable || n.props.navigable,
        render: n.props.render,
        props: r
      } : {
        type: "item",
        key: n.props.id,
        navigable: true,
        label: n.props.label,
        children: n.props.children ? A(n.props.children, t) : true,
        onChildrenScroll: n.props.onChildrenScroll,
        props: r,
        childRowHeight: n.props.childRowHeight,
        listClassName: n.props.listClassName,
        subMenuClassName: n.props.subMenuClassName
      }), e
    }
    if (n.type === _.S8) return e.push({
      type: "checkbox",
      key: n.props.id,
      navigable: true,
      props: n.props
    }), e;
    if (n.type === _.k5) return e.push({
      type: "radio",
      key: n.props.id,
      navigable: true,
      props: n.props
    }), e;
    else if (n.type === _.m7) return e.push({
      type: "switch",
      key: n.props.id,
      navigable: true,
      props: n.props
    }), e;
    else if (n.type === _.II) return e.push(null != n.props.control ? {
      type: "control",
      key: n.props.id,
      navigable: true,
      props: n.props
    } : {
      type: "compositecontrol",
      key: n.props.id,
      navigable: false !== n.props.interactive,
      children: n.props.children,
      props: n.props
    }), e;
    throw Error("Menu API only allows Items and groups of Items as children. Received ".concat(null != (i = null != (r = null == n ? true : n.type) ? r : n) ? i : typeof n, " (").concat(typeof n, ") instead"))
  }, [])
}

function N(e) {
  return e.reduce((e, t) => (t.navigable && e.push({
    key: t.key,
    children: "item" === t.type && null != t.children ? N(t.children) : true
  }), e), [])
}

function P(e, t, n, i) {
  let a = 0,
    o = [];
  return e.reduce((e, s, l) => {
    let c = o.length > 0 ? o[o.length - 1] : e;
    switch (s.type) {
      case "separator":
        c.push((0, r.jsx)(h.Z0, {}, "separator-".concat(l))), a = 0;
        break;
      case "groupstart":
        a > 0 && s.length > 0 && (c.push((0, r.jsx)(h.Z0, {}, "separator-".concat(l))), a = 0), o.push([]);
        break;
      case "groupend":
        o.length > 0 && e.push((0, r.jsx)(h.ZA, y({
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
        } = s, f = null != e, p = [...n, s.key], _ = t.isFocused(p), m = null != e ? {
          "aria-haspopup": true
        } : {}, g = (0, r.jsx)(h.ck, v(y({}, s.props), {
          label: s.label,
          hasSubmenu: null != e,
          isFocused: _,
          menuItemProps: y({}, t.getItemProps({
            path: p,
            hasSubmenu: f
          }), m),
          onClose: i
        }), s.key);
        f ? null != o ? c.push((0, r.jsx)(h.P2, v(y({}, s.props), {
          parentItem: g,
          isFocused: _,
          menuSubmenuProps: t.getSubmenuProps({
            path: p
          }),
          rows: P(e, t, p, i),
          rowHeight: o,
          onScroll: l,
          listClassName: u
        }), "".concat(s.key, "-submenu"))) : c.push((0, r.jsx)(h.LY, v(y({}, s.props), {
          subMenuClassName: d,
          parentItem: g,
          isFocused: _,
          menuSubmenuProps: t.getSubmenuProps({
            path: p
          }),
          renderSubmenu: () => P(e, t, p, i)
        }), "".concat(s.key, "-submenu"))) : c.push(g), a++;
        break
      }
      case "customitem": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(h.kq, v(y({}, s.props), {
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
        c.push((0, r.jsx)(h.oC, v(y({}, s.props), {
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
        c.push((0, r.jsx)(h.Rk, v(y({}, s.props), {
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
        c.push((0, r.jsx)(h.TO, v(y({}, s.props), {
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
        c.push((0, r.jsx)(h.lc, v(y({}, s.props), {
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
        c.push((0, r.jsx)(h.$I, v(y({}, s.props), {
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

function R(e) {
  var t;
  let {
    navId: n,
    variant: a = "flexible",
    hideScroller: s = false,
    className: _,
    children: b,
    onClose: O,
    onSelect: S,
    onInteraction: I,
    forceIconsLeft: T
  } = e, C = A(b, T), R = N(C), D = i.useRef([]);
  l()(D.current, R) || (D.current = R);
  let x = (0, p.c)("Menu"),
    L = null == (t = C.find(e => null != e.key)) ? true : t.key,
    j = (0, c.Z)({
      navId: n,
      items: D.current,
      initialFocusPath: f.Z.keyboardModeEnabled && null != L ? [L] : [],
      closeMenu: O,
      defaultIsUsingKeyboardNavigation: f.Z.keyboardModeEnabled
    });
  i.useEffect(() => {
    j.isUsingKeyboardNavigation ? f.Z.keyboardModeEnabled || (0, d.Qj)() : f.Z.keyboardModeEnabled && (0, d.rf)()
  }, [j.isUsingKeyboardNavigation]);
  let M = i.useRef(null);
  (0, u.Tbt)(M);
  let k = s ? u.u2D : u.zJl,
    U = i.useMemo(() => ({
      onSelect: S,
      onInteraction: I
    }), [S, I]);
  return (0, r.jsx)(m.p.Provider, {
    value: U,
    children: (0, r.jsx)("div", v(y({
      className: o()(E.menu, E[a], _),
      style: {
        "--custom-menu-viewport-padding": x ? "".concat(g.sb, "px") : "".concat(g.F3, "px")
      }
    }, j.getContainerProps()), {
      ref: M,
      "aria-label": e["aria-label"],
      children: (0, r.jsxs)(k, {
        className: E.scroller,
        children: [0 === C.length && (0, r.jsx)(h.ck, {
          disabled: true,
          label: () => (0, r.jsx)(w, {}),
          menuItemProps: j.getItemProps({
            path: ["empty"]
          }),
          isFocused: false,
          onFocus: () => {},
          onClose: O
        }), C.length > 0 && P(C, j, [], O)]
      })
    }))
  })
}

function D() {
  return (0, Chunk54381.jsx)("div", {
    className: o()(Chunk334405.menu, Chunk334405.loader, Chunk334405.flexible),
    children: (0, Chunk54381.jsx)(Chunk793030.$jN, {})
  })
}

function w() {
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