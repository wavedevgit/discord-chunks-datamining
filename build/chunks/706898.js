/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  n: () => R
}), n(757143), n(301563), n(411104), n(47120);
var r, i, o = n(200651),
  a = n(192379),
  s = n(120356),
  l = n.n(s),
  c = n(372817),
  u = n(866442),
  d = n(692547),
  f = n(1561),
  p = n(993365),
  _ = n(981631),
  h = n(19864);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = {
  side: h.side,
  top: h.top,
  "top-pill": h.topPill
};

function S(e) {
  let {
    className: t,
    onClick: n,
    children: r,
    "aria-expanded": i,
    "aria-controls": a
  } = e;
  return (0, o.jsx)(f.P, {
    tabIndex: null == n ? -1 : 0,
    className: l()(h.header, t),
    onClick: n,
    "aria-expanded": i,
    "aria-controls": a,
    focusProps: {
      offset: {
        top: -6
      }
    },
    children: (0, o.jsx)(p.x, {
      variant: "eyebrow",
      color: "none",
      className: h.headerText,
      children: r
    })
  })
}

function I(e) {
  let {
    style: t
  } = e;
  return (0, o.jsx)("div", {
    className: h.separator,
    style: t
  })
}
let T = a.forwardRef(function(e, t) {
  var {
    children: n,
    id: r
  } = e, i = b(e, ["children", "id"]);
  return (0, o.jsx)("div", v(g({}, i), {
    ref: t,
    role: "tabpanel",
    id: N(r),
    tabIndex: -1,
    children: n
  }))
});

function N(e) {
  return "".concat(e.replace(/\s+/g, "-").toLowerCase(), "-tab")
}

function A(e, t) {
  if (null == e) return;
  let n = {};
  return "Selected" === t ? (n.backgroundColor = e, n.color = d.Z.unsafe_rawColors.WHITE_500.css) : ("Hover" === t && (n.backgroundColor = (0, u.wK)(e, .1)), n.color = e), n
}
class C extends(r = a.Component) {
  getStyle() {
    let {
      color: e,
      id: t,
      selectedItem: n,
      itemType: r
    } = this.props, {
      hover: i,
      active: o
    } = this.state;
    if (null != e) {
      if ("side" === r) return null != t && n === t || o ? A(e, "Selected") : i ? A(e, "Hover") : A(e);
      if ("top" === r) return n === t ? {
        borderColor: e,
        color: e
      } : i ? {
        borderColor: (0, u.wK)(e, .1),
        color: (0, u.wK)(e, .6)
      } : {
        borderColor: "transparent",
        color: (0, u.wK)(e, .4)
      };
      if ("top-pill" === r) return n === t ? {
        backgroundColor: (0, u.wK)(e, .2),
        color: e
      } : {
        backgroundColor: e,
        color: d.Z.unsafe_rawColors.WHITE_500.css
      }
    }
  }
  render() {
    let {
      children: e,
      className: t,
      id: n,
      selectedItem: r,
      color: i,
      disabled: a,
      onContextMenu: s,
      clickableRef: c,
      look: u,
      disableItemStyles: d
    } = this.props, p = this.props["aria-label"], _ = r === n;
    return (0, o.jsx)(f.P, {
      className: l()(t, {
        [h.item]: !d,
        [h.brand]: "brand" === u,
        [h.selected]: null == i && _,
        [h.themed]: "grey" === u,
        [h.disabled]: null == i && a
      }),
      style: this.getStyle(),
      role: "tab",
      "aria-selected": _,
      "aria-controls": _ ? N("".concat(n)) : void 0,
      "aria-disabled": a,
      tabIndex: _ ? 0 : -1,
      onMouseEnter: null != i ? this.handleMouseOver : void 0,
      onClick: this.handleClick,
      onMouseLeave: null != i ? this.handleMouseOut : void 0,
      onMouseUp: null != i ? this.handleMouseUp : void 0,
      onMouseDown: this.handleMouseDown,
      onContextMenu: s,
      "aria-label": p,
      ref: c,
      children: e
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      hover: !1,
      active: !1
    }), m(this, "handleClick", e => {
      let {
        disabled: t,
        onClick: n,
        id: r,
        onItemSelect: i
      } = this.props;
      !t && (null != n ? n(e) : null != i && i(r))
    }), m(this, "handleMouseDown", () => {
      let {
        color: e
      } = this.props;
      null != e && this.setState({
        active: !0
      })
    }), m(this, "handleMouseUp", () => {
      this.setState({
        active: !1
      })
    }), m(this, "handleMouseOver", () => {
      this.setState({
        hover: !0
      })
    }), m(this, "handleMouseOut", () => {
      this.setState({
        hover: !1,
        active: !1
      })
    })
  }
}
m(C, "defaultProps", {
  disabled: !1,
  look: "grey",
  disableItemStyles: !1
});
class R extends(i = a.Component) {
  render() {
    let {
      className: e,
      children: t,
      type: n = "side",
      style: r,
      "aria-label": i,
      orientation: s = "horizontal"
    } = this.props;
    return (0, o.jsx)("div", {
      ref: this.tabBarRef,
      className: l()(e, O[n]),
      style: r,
      role: "tablist",
      "aria-orientation": s,
      onKeyDown: this.handleKeyDown,
      "aria-label": i,
      children: a.Children.map(t, this.renderChildren)
    })
  }
  constructor(...e) {
    super(...e), m(this, "tabBarRef", a.createRef()), m(this, "focusManager", (0, c.E)({
      getFocusableElements: () => {
        let e = this.tabBarRef.current;
        return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : []
      },
      getActiveElement: () => {
        var e;
        return null === (e = this.tabBarRef.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
      }
    })), m(this, "renderChildren", e => {
      let {
        selectedItem: t,
        onItemSelect: n,
        type: r = "side",
        look: i = "grey"
      } = this.props;
      return a.isValidElement(e) ? a.cloneElement(e, {
        selectedItem: t,
        onItemSelect: n,
        itemType: r,
        look: i
      }) : null
    }), m(this, "getNodeForKeydownEvent", async e => {
      let {
        orientation: t = "horizontal"
      } = this.props, n = "vertical" === t ? _.yXg.ARROW_UP : _.yXg.ARROW_LEFT, r = "vertical" === t ? _.yXg.ARROW_DOWN : _.yXg.ARROW_RIGHT;
      switch (e.which) {
        case n:
          return this.focusManager.getPreviousFocusableElement();
        case r:
          return this.focusManager.getNextFocusableElement();
        case _.yXg.HOME:
          return this.focusManager.getFirstFocusableElement();
        case _.yXg.END:
          return this.focusManager.getLastFocusableElement()
      }
      return null
    }), m(this, "handleKeyDown", async e => {
      let t = await this.getNodeForKeydownEvent(e);
      null != t && (e.preventDefault(), t.focus())
    })
  }
}
m(R, "Header", S), m(R, "Item", C), m(R, "Separator", I), m(R, "Panel", T)