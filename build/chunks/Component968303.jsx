/** Chunk was on web.js **/
/** chunk id: 968303, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => R
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = {
    side: Chunk82642.side,
    top: Chunk82642.top,
    "top-pill": Chunk82642.topPill
  },
  I = Chunk473749.forwardRef(function(e, t) {
    let {
      className: n,
      onClick: r,
      children: i,
      "aria-expanded": o,
      "aria-controls": s
    } = e;
    return (0, a.jsx)(f.P, {
      innerRef: t,
      tabIndex: null == r ? false : 0,
      className: l()(h.header, n),
      onClick: r,
      "aria-expanded": o,
      "aria-controls": s,
      focusProps: {
        offset: {
          top: false
        }
      },
      children: (0, a.jsx)(_.x, {
        variant: "eyebrow",
        color: "none",
        className: h.headerText,
        children: i
      })
    })
  });

function T(e) {
  let {
    style: t
  } = e;
  return (0, a.jsx)("div", {
    className: h.separator,
    style: t
  })
}
let S = Chunk473749.forwardRef(function(e, t) {
  var {
    children: n,
    id: r
  } = e, i = y(e, ["children", "id"]);
  return (0, a.jsx)("div", b(g({}, i), {
    ref: t,
    role: "tabpanel",
    id: A(r),
    tabIndex: false,
    children: n
  }))
});

function A(e) {
  return "".concat(e.replace(/\s+/g, "-").toLowerCase(), "-tab")
}

function C(e, t) {
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
      active: a
    } = this.state;
    if (null != module) {
      if ("side" === r) return null != exports && require === exports || Chunk54381 ? C(module, "Selected") : i ? C(module, "Hover") : C(module);
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
      variant: o,
      disabled: s,
      onContextMenu: c,
      clickableRef: u,
      clickableInnerRef: d,
      look: _,
      disableItemStyles: p
    } = this.props, m = this.props["aria-label"], g = r === require;
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
      "aria-controls": g ? A("".concat(require)) : true,
      "aria-disabled": Chunk120356,
      tabIndex: g ? 0 : false,
      onMouseEnter: null != i ? this.handleMouseOver : true,
      onClick: this.handleClick,
      onMouseLeave: null != i ? this.handleMouseOut : true,
      onMouseUp: null != i ? this.handleMouseUp : true,
      onMouseDown: this.handleMouseDown,
      onContextMenu: Chunk372817,
      "aria-label": m,
      innerRef: Chunk692547,
      ref: Chunk866442,
      children: module
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
class R extends(i = Chunk473749.Component) {
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
    super(...e), m(this, "tabBarRef", o.createRef()), m(this, "focusManager", (0, c.E)({
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
      return o.isValidElement(e) ? o.cloneElement(e, {
        selectedItem: t,
        onItemSelect: n,
        itemType: r,
        look: i
      }) : null
    }), m(this, "getNodeForKeydownEvent", async e => {
      let {
        orientation: t = "horizontal"
      } = this.props, n = "vertical" === t ? p.vn.ARROW_UP : p.vn.ARROW_LEFT, r = "vertical" === t ? p.vn.ARROW_DOWN : p.vn.ARROW_RIGHT;
      switch (e.key) {
        case n:
          return this.focusManager.getPreviousFocusableElement();
        case r:
          return this.focusManager.getNextFocusableElement();
        case p.vn.HOME:
          return this.focusManager.getFirstFocusableElement();
        case p.vn.END:
          return this.focusManager.getLastFocusableElement()
      }
      return null
    }), m(this, "handleKeyDown", async e => {
      let t = await this.getNodeForKeydownEvent(e);
      null != t && (e.preventDefault(), t.focus())
    })
  }
}
m(R, "Header", I), m(R, "Item", N), m(R, "Separator", T), m(R, "Panel", S)