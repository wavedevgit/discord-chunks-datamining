/** Chunk was on web.js **/
/** chunk id: 968303, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => P
}), require("./704826.js"), require("./35282.js"), require("./415506.js"), require("./388685.js");
var r, i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk372817 = require("./372817.js"),
  Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk360920 = require("./360920.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk295907 = require("./295907.js"),
  Chunk82642 = require("./82642.js");

function h(e, t, n) {
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
      h(e, t, n[t])
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = {
    side: Chunk82642.side,
    top: Chunk82642.top,
    "top-pill": Chunk82642.topPill
  },
  S = Chunk473749.forwardRef(function(e, t) {
    let {
      className: n,
      onClick: r,
      children: i,
      "aria-expanded": a,
      "aria-controls": s
    } = e;
    return (0, o.jsx)(f.P, {
      innerRef: t,
      tabIndex: null == r ? false : 0,
      className: l()(m.header, n),
      onClick: r,
      "aria-expanded": a,
      "aria-controls": s,
      focusProps: {
        offset: {
          top: false
        }
      },
      children: (0, o.jsx)(p.x, {
        variant: "eyebrow",
        color: "none",
        className: m.headerText,
        children: i
      })
    })
  });

function I(e) {
  let {
    style: t
  } = e;
  return (0, o.jsx)("div", {
    className: m.separator,
    style: t
  })
}
let T = Chunk473749.forwardRef(function(e, t) {
  var {
    children: n,
    id: r
  } = e, i = y(e, ["children", "id"]);
  return (0, o.jsx)("div", b(g({}, i), {
    ref: t,
    role: "tabpanel",
    id: C(r),
    tabIndex: false,
    children: n
  }))
});

function C(e) {
  return "".concat(e.replace(/\s+/g, "-").toLowerCase(), "-tab")
}

function A(e, t) {
  if (null == e) return;
  let n = {};
  return "Selected" === t ? (n.backgroundColor = e, n.color = d.Z.unsafe_rawColors.WHITE_500.css) : ("Hover" === t && (n.backgroundColor = (0, u.wK)(e, .1)), n.color = e), n
}
class N extends(r = Chunk473749.Component) {
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
    if (null != module) {
      if ("side" === r) return null != exports && require === exports || Chunk54381 ? A(module, "Selected") : i ? A(module, "Hover") : A(module);
      if ("top" === r)
        if (require === exports) return {
          borderColor: module,
          color: module
        };
        else if (i) return {
        borderColor: (0, Chunk866442.wK)(module, .1),
        color: (0, Chunk866442.wK)(module, .6)
      };
      else return {
        borderColor: "transparent",
        color: (0, Chunk866442.wK)(module, .4)
      };
      if ("top-pill" === r)
        if (require === exports) return {
          backgroundColor: (0, Chunk866442.wK)(module, .2),
          color: module
        };
        else return {
          backgroundColor: module,
          color: Chunk692547.Z.unsafe_rawColors.WHITE_500.css
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
      variant: a,
      disabled: s,
      onContextMenu: c,
      clickableRef: u,
      clickableInnerRef: d,
      look: p,
      disableItemStyles: _
    } = this.props, h = this.props["aria-label"], g = r === require;
    return (0, Chunk54381.jsx)(Chunk360920.P, {
      className: l()(exports, {
        [Chunk82642.item]: !Chunk295907,
        [Chunk82642.brand]: "brand" === Chunk777207,
        [Chunk82642.selected]: null == i && g,
        [Chunk82642.themed]: "grey" === Chunk777207,
        [Chunk82642.disabled]: null == i && Chunk120356,
        [Chunk82642.destructive]: "destructive" === Chunk473749
      }),
      style: this.getStyle(),
      role: "tab",
      "aria-selected": g,
      "aria-controls": g ? C("".concat(require)) : true,
      "aria-disabled": Chunk120356,
      tabIndex: g ? 0 : false,
      onMouseEnter: null != i ? this.handleMouseOver : true,
      onClick: this.handleClick,
      onMouseLeave: null != i ? this.handleMouseOut : true,
      onMouseUp: null != i ? this.handleMouseUp : true,
      onMouseDown: this.handleMouseDown,
      onContextMenu: Chunk372817,
      "aria-label": h,
      innerRef: Chunk692547,
      ref: Chunk866442,
      children: module
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      hover: false,
      active: false
    }), h(this, "handleClick", e => {
      let {
        disabled: t,
        onClick: n,
        id: r,
        onItemSelect: i
      } = this.props;
      t || (null != n ? n(e) : null != i && i(r))
    }), h(this, "handleMouseDown", () => {
      let {
        color: e
      } = this.props;
      null != e && this.setState({
        active: true
      })
    }), h(this, "handleMouseUp", () => {
      this.setState({
        active: false
      })
    }), h(this, "handleMouseOver", () => {
      this.setState({
        hover: true
      })
    }), h(this, "handleMouseOut", () => {
      this.setState({
        hover: false,
        active: false
      })
    })
  }
}
h(N, "defaultProps", {
  disabled: false,
  look: "grey",
  disableItemStyles: false
});
class P extends(i = Chunk473749.Component) {
  render() {
    let {
      className: e,
      children: t,
      type: n = "side",
      style: r,
      "aria-label": i,
      orientation: s = "horizontal"
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      ref: this.tabBarRef,
      className: l()(module, v[require]),
      style: r,
      role: "tablist",
      "aria-orientation": Chunk120356,
      onKeyDown: this.handleKeyDown,
      "aria-label": i,
      children: Chunk473749.Children.map(exports, this.renderChildren)
    })
  }
  constructor(...e) {
    super(...e), h(this, "tabBarRef", a.createRef()), h(this, "focusManager", (0, c.E)({
      getFocusableElements: () => {
        let e = this.tabBarRef.current;
        return null != e ? Array.from(e.querySelectorAll('[role="tab"][aria-disabled="false"]')) : []
      },
      getActiveElement: () => {
        var e;
        return null == (e = this.tabBarRef.current) ? true : e.ownerDocument.activeElement
      }
    })), h(this, "renderChildren", e => {
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
    }), h(this, "getNodeForKeydownEvent", async e => {
      let {
        orientation: t = "horizontal"
      } = this.props, n = "vertical" === t ? _.vn.ARROW_UP : _.vn.ARROW_LEFT, r = "vertical" === t ? _.vn.ARROW_DOWN : _.vn.ARROW_RIGHT;
      switch (e.key) {
        case n:
          return this.focusManager.getPreviousFocusableElement();
        case r:
          return this.focusManager.getNextFocusableElement();
        case _.vn.HOME:
          return this.focusManager.getFirstFocusableElement();
        case _.vn.END:
          return this.focusManager.getLastFocusableElement()
      }
      return null
    }), h(this, "handleKeyDown", async e => {
      let t = await this.getNodeForKeydownEvent(e);
      null != t && (e.preventDefault(), t.focus())
    })
  }
}
h(P, "Header", S), h(P, "Item", N), h(P, "Separator", I), h(P, "Panel", T)