/** Chunk was on web.js **/
/** chunk id: 683976, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => b,
  n: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk924826 = require("./924826.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk474047 = require("./474047.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class b extends Chunk473749.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: i
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk600164.Z, {
      className: o()(Chunk474047.quickSelect, Chunk473749),
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk474047.quickSelectLabel,
        children: module
      }), (0, Chunk54381.jsxs)(Chunk600164.Z, {
        align: Chunk600164.Z.Align.CENTER,
        className: Chunk474047.quickSelectClick,
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk474047.quickSelectValue,
          children: null != require ? require(exports) : exports.label
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk474047.quickSelectArrow
        })]
      })]
    })
  }
}
class y extends Chunk473749.PureComponent {
  render() {
    let {
      selected: e,
      renderOption: t,
      option: n
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk91192.mh, {
      id: require.key,
      children: i => (0, r.jsx)(c.P3F, m(p({
        focusProps: {
          enabled: false
        },
        className: o()(f.quickSelectPopoutOption, {
          selected: e
        }),
        onClick: this.handleClick
      }, i), {
        role: "option",
        children: t(n, e)
      }))
    })
  }
  constructor(...e) {
    super(...e), _(this, "handleClick", () => {
      let {
        option: e,
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}

function O(e) {
  let {
    options: t,
    value: n,
    scroller: i,
    renderOption: a,
    onChange: u,
    className: _
  } = e, h = o()(f.quickSelectPopout, _, {
    [f.quickSelectPopoutScroll]: i
  }), E = t.map(e => {
    let t = null != n && e.value === n.value,
      i = t ? true : u;
    return (0, r.jsx)(y, {
      className: f.quickSelectPopoutOption,
      renderOption: a,
      option: e,
      onChange: i,
      selected: t
    }, e.key || e.value)
  }), b = (0, d.Dt)(), O = (0, l.ZP)({
    id: b,
    isEnabled: true,
    wrap: true,
    async scrollToStart() {},
    async scrollToEnd() {}
  }), v = O.containerProps, {
    ref: I
  } = v, T = g(v, ["ref"]);
  return (0, c.Tbt)(I), (0, r.jsx)(s.bG, {
    navigator: O,
    children: (0, r.jsx)("div", m(p({
      ref: I,
      className: h
    }, T), {
      role: "listbox",
      children: i ? (0, r.jsx)(c.Ttm, {
        className: f.quickSelectScroller,
        children: E
      }) : E
    }))
  })
}
class v extends Chunk473749.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: i,
      popoutProps: a
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk481060.yRy, m(p({
      targetElementRef: this.ref
    }, Chunk120356), {
      renderPopout: this.renderPopout,
      children: (a, o) => {
        let {
          isShown: s
        } = o;
        return (0, r.jsx)(c.P3F, m(p({
          innerRef: this.ref
        }, a), {
          className: i,
          "aria-haspopup": "listbox",
          "aria-expanded": s,
          children: (0, r.jsx)(b, {
            label: e,
            value: t,
            renderValue: n
          })
        }))
      }
    }))
  }
  constructor(...e) {
    super(...e), _(this, "ref", i.createRef()), _(this, "renderPopout", e => {
      let {
        closePopout: t
      } = e, {
        options: n,
        value: i,
        renderOption: a,
        popoutClassName: o,
        scroller: s
      } = this.props;
      return (0, r.jsx)(O, {
        scroller: !!s,
        className: o,
        options: n,
        value: i,
        renderOption: a,
        onChange: e => {
          this.handleChange(e), t()
        }
      })
    }), _(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e)
    })
  }
}