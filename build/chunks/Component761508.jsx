/** Chunk was on web.js **/
/** chunk id: 761508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => R
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./65821.js");
var r, i, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk52724 = require("./52724.js"),
  Chunk317097 = require("./317097.js"),
  Chunk827734 = require("./827734.js"),
  Chunk939249 = require("./939249.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk650583 = require("./650583.js"),
  Chunk704118 = require("./704118.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = O(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let v = {
    side: Chunk704118.Cf,
    top: Chunk704118.Mn,
    "top-pill": Chunk704118.vO
  },
  A = Chunk64700.forwardRef(function(e, t) {
    let {
      className: n,
      onClick: r,
      children: i,
      "aria-expanded": s,
      "aria-controls": o
    } = e;
    return (0, a.jsx)(f.D, {
      innerRef: t,
      tabIndex: null == r ? false : 0,
      className: l()(h.wx, n),
      onClick: r,
      "aria-expanded": s,
      "aria-controls": o,
      focusProps: {
        offset: {
          top: false
        }
      },
      children: (0, a.jsx)(p.E, {
        variant: "eyebrow",
        color: "none",
        className: h.TK,
        children: i
      })
    })
  });

function I(e) {
  let {
    style: t
  } = e;
  return (0, a.jsx)("div", {
    className: h.me,
    style: t
  })
}
let S = Chunk64700.forwardRef(function(e, t) {
  let [n, ...r] = [e, t], {
    children: i,
    id: s
  } = n, o = b(n, ["children", "id"]), [l] = r;
  return (0, a.jsx)("div", y(g({}, o), {
    ref: l,
    role: "tabpanel",
    id: T(s),
    tabIndex: false,
    children: i
  }))
});

function T(e) {
  return "".concat(e.replace(/\s+/g, "-").toLowerCase(), "-tab")
}

function C(e, t) {
  if (null == e) return;
  let n = {};
  return "Selected" === t ? (n.backgroundColor = e, n.color = d.A.unsafe_rawColors.WHITE.css) : ("Hover" === t && (n.backgroundColor = (0, u.xp)(e, .1)), n.color = e), n
}
class N extends(r = Chunk64700.Component) {
  getStyle() {
    let {
      color: e,
      id: t,
      selectedItem: n,
      itemType: r
    } = this.props, {
      hover: i,
      active: a
    } = this.state;
    if (null != e) {
      if ("side" === r) return null != t && n === t || a ? C(e, "Selected") : i ? C(e, "Hover") : C(e);
      if ("top" === r)
        if (n === t) return {
          borderColor: e,
          color: e
        };
        else if (i) return {
        borderColor: (0, u.xp)(e, .1),
        color: (0, u.xp)(e, .6)
      };
      else return {
        borderColor: "transparent",
        color: (0, u.xp)(e, .4)
      };
      if ("top-pill" === r)
        if (n === t) return {
          backgroundColor: (0, u.xp)(e, .2),
          color: e
        };
        else return {
          backgroundColor: e,
          color: d.A.unsafe_rawColors.WHITE.css
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
      variant: s,
      disabled: o,
      onContextMenu: c,
      clickableRef: u,
      clickableInnerRef: d,
      look: p,
      disableItemStyles: _
    } = this.props, m = this.props["aria-label"], g = r === n;
    return (0, a.jsx)(f.D, {
      className: l()(t, {
        [h.AS]: !_,
        [h.wk]: "brand" === p,
        [h.wH]: null == i && g,
        [h.Sp]: "grey" === p,
        [h.r9]: null == i && o,
        [h.RD]: "destructive" === s
      }),
      style: this.getStyle(),
      role: "tab",
      "aria-selected": g,
      "aria-controls": g ? T("".concat(n)) : true,
      "aria-disabled": o,
      tabIndex: g ? 0 : false,
      onMouseEnter: null != i ? this.handleMouseOver : true,
      onClick: this.handleClick,
      onMouseLeave: null != i ? this.handleMouseOut : true,
      onMouseUp: null != i ? this.handleMouseUp : true,
      onMouseDown: this.handleMouseDown,
      onContextMenu: c,
      "aria-label": m,
      innerRef: d,
      ref: u,
      children: e
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      hover: false,
      active: false
    }), m(this, "handleClick", e => {
      let {
        disabled: t,
        onClick: n,
        id: r,
        onItemSelect: i
      } = this.props;
      t || (null != n ? n(e) : null != i && i(r))
    }), m(this, "handleMouseDown", () => {
      let {
        color: e
      } = this.props;
      null != e && this.setState({
        active: true
      })
    }), m(this, "handleMouseUp", () => {
      this.setState({
        active: false
      })
    }), m(this, "handleMouseOver", () => {
      this.setState({
        hover: true
      })
    }), m(this, "handleMouseOut", () => {
      this.setState({
        hover: false,
        active: false
      })
    })
  }
}
m(N, "defaultProps", {
  disabled: false,
  look: "grey",
  disableItemStyles: false
});
class R extends(i = Chunk64700.Component) {
  render() {
    let {
      className: e,
      children: t,
      type: n = "side",
      style: r,
      "aria-label": i,
      orientation: o = "horizontal"
    } = this.props;
    return (0, a.jsx)("div", {
      ref: this.tabBarRef,
      className: l()(e, v[n]),
      style: r,
      role: "tablist",
      "aria-orientation": o,
      onKeyDown: this.handleKeyDown,
      "aria-label": i,
      children: s.Children.map(t, this.renderChildren)
    })
  }
  constructor(...e) {
    super(...e), m(this, "tabBarRef", s.createRef()), m(this, "focusManager", (0, c.C)({
      getFocusableElements: () => {
        let e = this.tabBarRef.current;
        return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : []
      },
      getActiveElement: () => {
        var e;
        return null == (e = this.tabBarRef.current) ? true : e.ownerDocument.activeElement
      }
    })), m(this, "renderChildren", e => {
      let {
        selectedItem: t,
        onItemSelect: n,
        type: r = "side",
        look: i = "grey"
      } = this.props;
      return s.isValidElement(e) ? s.cloneElement(e, {
        selectedItem: t,
        onItemSelect: n,
        itemType: r,
        look: i
      }) : null
    }), m(this, "getNodeForKeydownEvent", async e => {
      let {
        orientation: t = "horizontal"
      } = this.props, n = "vertical" === t ? _.dh.ARROW_UP : _.dh.ARROW_LEFT, r = "vertical" === t ? _.dh.ARROW_DOWN : _.dh.ARROW_RIGHT;
      switch (e.key) {
        case n:
          return this.focusManager.getPreviousFocusableElement();
        case r:
          return this.focusManager.getNextFocusableElement();
        case _.dh.HOME:
          return this.focusManager.getFirstFocusableElement();
        case _.dh.END:
          return this.focusManager.getLastFocusableElement()
      }
      return null
    }), m(this, "handleKeyDown", async e => {
      let t = await this.getNodeForKeydownEvent(e);
      null != t && (e.preventDefault(), t.focus())
    })
  }
}
m(R, "Header", A), m(R, "Item", N), m(R, "Separator", I), m(R, "Panel", S)