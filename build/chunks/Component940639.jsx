/** Chunk was on 86915 **/
/** chunk id: 940639, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./539854.js"), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./781311.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk251625 = require("./251625.js"),
  Chunk226951 = require("./226951.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk433566 = require("./433566.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class b extends(i = Chunk473749.Component) {
  getSelectedSection(e) {
    let {
      selectedSection: t
    } = this.state;
    if (null != t) return t;
    for (let t = 0; t < e.length; t++)
      if (e[t].length > 0) return t;
    return 0
  }
  componentDidMount() {
    this.focus()
  }
  render() {
    let {
      position: e
    } = this.props, t = this.getRows(), n = [];
    if (this.isEmpty()) require.push(1);
    else
      for (let e of exports) require.push(module.length);
    return (0, Chunk54381.jsxs)(Chunk481060.VqE, {
      className: a()(Chunk433566.container, "bottom" === module ? Chunk433566.positionBottom : Chunk433566.positionTop),
      "aria-label": this.props["aria-label"],
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk433566.autocompleteShadow
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk433566.autocompleteArrowWrapper,
        children: (0, Chunk54381.jsx)("div", {
          className: Chunk433566.autocompleteArrow
        })
      }), (0, Chunk54381.jsxs)("header", {
        className: Chunk433566.header,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk433566.autocompleteHeaderBackground
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk433566.headerText,
          children: this.props.label
        }), (0, Chunk54381.jsx)("input", {
          type: "text",
          className: Chunk433566.input,
          placeholder: this.props.placeholder,
          ref: this.inputRef,
          onChange: this.handleChange,
          onKeyDown: this.handleKeyDown
        })]
      }), (0, Chunk54381.jsx)("section", {
        className: Chunk433566.sectionTag,
        children: (0, Chunk54381.jsx)(Chunk481060.aVo, {
          className: Chunk433566.autocompleteScroller,
          fade: true,
          sections: require,
          sectionHeight: this.getSectionHeight,
          rowHeight: 40,
          renderRow: this.renderRow,
          renderSection: this.renderSection
        })
      })]
    })
  }
  focus() {
    null != this.inputRef.current && this.inputRef.current.focus()
  }
  constructor(...e) {
    super(...e), f(this, "inputRef", r.createRef()), f(this, "state", {
      query: null,
      selectedSection: null,
      selectedRow: 0
    }), f(this, "memoizedGetRows", (0, u.oH)((e, t, n) => {
      let i = RegExp("^".concat(h.Z.escape(null != e ? e.trim() : "")), "i"),
        l = e => i.test(e);
      return n.map((e, n) => t(l, n))
    })), f(this, "getRows", () => {
      let {
        onFilterResults: e,
        sections: t
      } = this.props, {
        query: n
      } = this.state;
      return this.memoizedGetRows(n, e, t)
    }), f(this, "handleChange", e => {
      var t, n;
      let i = e.target.value;
      null == (t = (n = this.props).onQueryChange) || t.call(n, i), this.setState({
        query: i,
        selectedSection: null,
        selectedRow: 0
      })
    }), f(this, "handleMouseEnter", (e, t) => {
      this.setState({
        selectedSection: e,
        selectedRow: t
      })
    }), f(this, "handleClick", (e, t) => {
      let n = this.getRows();
      this.props.onSelect(n[e][t], e), this.props.onClose()
    }), f(this, "handleKeyDown", e => {
      let {
        keyboardModeEnabled: t
      } = this.props, {
        selectedRow: n
      } = this.state, i = this.getRows(), l = this.getSelectedSection(i);
      switch (e.key) {
        case g.vn.TAB:
          if (t) break;
        case g.vn.ARROW_DOWN:
          e.preventDefault(), this.props.sections.length > l && ++n >= i[l].length && (++l >= this.props.sections.length && (l = 0), n = 0), this.setState({
            selectedSection: l,
            selectedRow: n
          });
          break;
        case g.vn.ARROW_UP:
          e.preventDefault(), --n < 0 && (--l < 0 && (l = this.props.sections.length - 1), n = i[l].length - 1), this.setState({
            selectedSection: l,
            selectedRow: n
          });
          break;
        case g.vn.ENTER:
          e.preventDefault(), this.props.sections.length > l && i[l].length > n && (this.props.onSelect(i[l][n], l), this.props.onClose());
          break;
        case g.vn.ESCAPE:
          e.preventDefault(), this.props.onSelect(null, null), this.props.onClose()
      }
    }), f(this, "isEmpty", () => 0 === this.getRows().reduce((e, t) => e + t.length, 0)), f(this, "getSectionHeight", e => {
      let t = this.props.sections[e];
      return this.isEmpty() || null == t ? 0 : 44
    }), f(this, "renderSection", e => {
      let {
        section: t
      } = e, n = this.props.sections[t];
      return this.isEmpty() || null == n ? null : (0, l.jsx)("div", {
        className: m.section,
        children: n
      }, t)
    }), f(this, "renderRow", e => {
      var t;
      let {
        section: n,
        row: i
      } = e, {
        selectedRow: r
      } = this.state;
      if (this.isEmpty()) return (0, l.jsxs)("div", {
        className: m.empty,
        children: [(0, l.jsx)("p", {
          className: m.noResultsHeader,
          children: p.intl.string(p.t["4o4z3e"])
        }), (0, l.jsx)("p", {
          children: p.intl.string(p.t.QwSXv8)
        })]
      }, "empty");
      let s = this.getRows(),
        o = this.getSelectedSection(s),
        d = null == (t = s[n]) ? true : t[i];
      return (0, l.jsx)(c.P3F, {
        onClick: this.handleClick.bind(this, n, i),
        onMouseEnter: this.handleMouseEnter.bind(this, n, i),
        className: a()(m.row, {
          [m.selected]: o === n && r === i
        }),
        children: (0, l.jsx)("div", {
          className: m.rowInner,
          children: this.props.onRenderResult(d, n)
        })
      }, "".concat(n, "-").concat(i))
    })
  }
}
f(b, "defaultProps", {
  sections: [null]
});
let x = Chunk442837.ZP.connectStores([Chunk607070.Z], () => ({
  keyboardModeEnabled: Chunk607070.Z.keyboardModeEnabled
}))(b)