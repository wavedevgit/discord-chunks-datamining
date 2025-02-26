/** Chunk was on web.js **/
"use strict";
n.d(t, {
  T: () => C,
  v: () => A
}), n(13667), n(390547), n(653041), n(47120), n(411104);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(348327),
  l = n.n(s),
  c = n(498405),
  u = n(597442),
  d = n(21340),
  f = n(922770),
  _ = n(857595),
  p = n(607070),
  h = n(828214),
  g = n(670596),
  m = n(788314),
  E = n(253068);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
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

function S(e) {
  return null == e ? [] : i.Children.toArray(e).flatMap(e => {
    var t;
    return null == e ? [] : Array.isArray(e) ? S(e) : e.type === i.Fragment ? null !== (t = S(e.props.children)) && void 0 !== t ? t : [] : [e]
  })
}

function I(e) {
  return S(e).reduce((e, t) => {
    var n, r;
    if (t.type === h.Cl) return e.push({
      type: "separator",
      navigable: !1
    }), e;
    if (t.type === h.kS) {
      let n = I(t.props.children);
      return n.length > 0 && (e.push({
        type: "groupstart",
        length: n.length,
        navigable: !1,
        props: t.props
      }), e.push(...n), e.push({
        type: "groupend",
        length: n.length,
        navigable: !1,
        props: t.props
      })), e
    }
    if (t.type === h.sN) return e.push(null != t.props.render ? {
      type: "customitem",
      key: t.props.id,
      navigable: null == t.props.navigable || t.props.navigable,
      render: t.props.render,
      props: t.props
    } : {
      type: "item",
      key: t.props.id,
      navigable: !0,
      label: t.props.label,
      children: t.props.children ? I(t.props.children) : void 0,
      onChildrenScroll: t.props.onChildrenScroll,
      props: t.props,
      childRowHeight: t.props.childRowHeight,
      listClassName: t.props.listClassName,
      subMenuClassName: t.props.subMenuClassName
    }), e;
    if (t.type === h.S8) return e.push({
      type: "checkbox",
      key: t.props.id,
      navigable: !0,
      props: t.props
    }), e;
    if (t.type === h.k5) return e.push({
      type: "radio",
      key: t.props.id,
      navigable: !0,
      props: t.props
    }), e;
    else if (t.type === h.II) return e.push(null != t.props.control ? {
      type: "control",
      key: t.props.id,
      navigable: !0,
      props: t.props
    } : {
      type: "compositecontrol",
      key: t.props.id,
      navigable: !1 !== t.props.interactive,
      children: t.props.children,
      props: t.props
    }), e;
    throw Error("Menu API only allows Items and groups of Items as children. Received ".concat(null !== (r = null !== (n = null == t ? void 0 : t.type) && void 0 !== n ? n : t) && void 0 !== r ? r : typeof t, " (").concat(typeof t, ") instead"))
  }, [])
}

function T(e) {
  return e.reduce((e, t) => (t.navigable && e.push({
    key: t.key,
    children: "item" === t.type && null != t.children ? T(t.children) : void 0
  }), e), [])
}

function N(e, t, n, i) {
  let o = 0,
    a = [];
  return e.reduce((e, s, l) => {
    let c = a.length > 0 ? a[a.length - 1] : e;
    switch (s.type) {
      case "separator":
        c.push((0, r.jsx)(m.Z0, {}, "separator-".concat(l))), o = 0;
        break;
      case "groupstart":
        o > 0 && s.length > 0 && (c.push((0, r.jsx)(m.Z0, {}, "separator-".concat(l))), o = 0), a.push([]);
        break;
      case "groupend":
        a.length > 0 && e.push((0, r.jsx)(m.ZA, b({
          contents: a.pop()
        }, s.props), "group-".concat(l)));
        break;
      case "item": {
        let {
          children: e,
          childRowHeight: a,
          onChildrenScroll: l,
          listClassName: u,
          subMenuClassName: d
        } = s, f = null != e, _ = [...n, s.key], p = t.isFocused(_), h = null != e ? {
          "aria-haspopup": !0
        } : {}, g = (0, r.jsx)(m.ck, O(b({}, s.props), {
          label: s.label,
          hasSubmenu: null != e,
          isFocused: p,
          menuItemProps: b({}, t.getItemProps({
            path: _,
            hasSubmenu: f
          }), h),
          onClose: i
        }), s.key);
        f ? null != a ? c.push((0, r.jsx)(m.P2, O(b({}, s.props), {
          parentItem: g,
          isFocused: p,
          menuSubmenuProps: t.getSubmenuProps({
            path: _
          }),
          rows: N(e, t, _, i),
          rowHeight: a,
          onScroll: l,
          listClassName: u
        }), "".concat(s.key, "-submenu"))) : c.push((0, r.jsx)(m.LY, O(b({}, s.props), {
          subMenuClassName: d,
          parentItem: g,
          isFocused: p,
          menuSubmenuProps: t.getSubmenuProps({
            path: _
          }),
          renderSubmenu: () => N(e, t, _, i)
        }), "".concat(s.key, "-submenu"))) : c.push(g), o++;
        break
      }
      case "customitem": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.kq, O(b({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e,
            navigable: s.navigable
          }),
          onClose: i,
          children: s.render
        }), s.key)), o++;
        break
      }
      case "checkbox": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.oC, O(b({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e,
            role: "menuitemcheckbox"
          })
        }), s.key)), o++;
        break
      }
      case "radio": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.Rk, O(b({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e,
            role: "menuitemradio"
          })
        }), s.key)), o++;
        break
      }
      case "control": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.lc, O(b({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e
          }),
          onClose: i
        }), s.key)), o++;
        break
      }
      case "compositecontrol": {
        let e = [...n, s.key];
        c.push((0, r.jsx)(m.$I, O(b({}, s.props), {
          isFocused: t.isFocused(e),
          menuItemProps: t.getItemProps({
            path: e
          }),
          onClose: i,
          children: s.children
        }), s.key)), o++
      }
    }
    return e
  }, [])
}

function A(e) {
  var t;
  let {
    navId: n,
    variant: o = "flexible",
    hideScroller: s = !1,
    className: f,
    children: h,
    onClose: v,
    onSelect: y,
    onInteraction: S
  } = e, A = I(h), C = T(A), P = i.useRef([]);
  l()(P.current, C) || (P.current = C);
  let D = null === (t = A.find(e => null != e.key)) || void 0 === t ? void 0 : t.key,
    w = (0, c.ZP)({
      navId: n,
      items: P.current,
      initialFocusPath: p.Z.keyboardModeEnabled && null != D ? [D] : [],
      closeMenu: v
    });
  i.useEffect(() => {
    w.isUsingKeyboardNavigation ? p.Z.keyboardModeEnabled || (0, _.Qj)() : p.Z.keyboardModeEnabled && (0, _.rf)()
  }, [w.isUsingKeyboardNavigation]);
  let L = i.useRef(null);
  (0, u.T)(L);
  let x = s ? d.u2 : d.zJ,
    M = i.useMemo(() => ({
      onSelect: y,
      onInteraction: S
    }), [y, S]);
  return (0, r.jsx)(g.p.Provider, {
    value: M,
    children: (0, r.jsx)("div", O(b({
      className: a()(E.menu, E[o], f)
    }, w.getContainerProps()), {
      ref: L,
      "aria-label": e["aria-label"],
      children: (0, r.jsxs)(x, {
        className: E.scroller,
        children: [0 === A.length && (0, r.jsx)(m.ck, {
          disabled: !0,
          label: () => (0, r.jsx)(R, {}),
          menuItemProps: w.getItemProps({
            path: ["empty"]
          }),
          isFocused: !1,
          onFocus: () => {},
          onClose: v
        }), A.length > 0 && N(A, w, [], v)]
      })
    }))
  })
}

function C() {
  return (0, r.jsx)("div", {
    className: a()(E.menu, E.loader, E.flexible),
    children: (0, r.jsx)(f.$, {})
  })
}

function R() {
  let e = "♫ (つ｡◕‿‿◕｡)つ ♪",
    t = "♫ ⊂(｡◕‿‿◕｡⊂) ♪",
    [n, o] = i.useState(e);
  return i.useEffect(() => {
    if (p.Z.useReducedMotion) return;
    let n = setInterval(() => {
      o(n => n === e ? t : e)
    }, 700);
    return () => clearInterval(n)
  }, []), (0, r.jsx)("div", {
    style: {
      width: "100%",
      textAlign: "center"
    },
    children: n
  })
}