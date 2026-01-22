/** Chunk was on web.js **/
/** chunk id: 244083, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => v,
  YL: () => y,
  oN: () => O
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk478507 = require("./478507.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var y = function(e) {
    return e.CENTER = "center", e.LEFT = "left", e
  }({}),
  O = function(e) {
    return e.TOP = "top", e.MIDDLE = "middle", e
  }({});
class A extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      uniqueId: e
    } = this.props;
    u.default.track(d.HAw.SHOW_TUTORIAL, {
      tutorial: e
    })
  }
  componentWillUnmount() {
    u.default.track(d.HAw.CLOSE_TUTORIAL, {
      tutorial: this.props.uniqueId,
      acknowledged: this.state.confirmed
    })
  }
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      isLongText: n,
      title: r,
      body: a,
      className: s,
      onClickSkipAll: u
    } = this.props, d = "string" == typeof a ? "p" : "div", _ = "left" === t || n, h = "center" === t || !_;
    return (0, i.jsxs)(l.lGe, {
      className: o()(p.Sy, s),
      children: [null != e && (0, i.jsx)(c.A, {
        className: p.il,
        justify: _ ? c.A.Justify.START : c.A.Justify.CENTER,
        children: e()
      }), (0, i.jsx)(l.H, {
        className: o()({
          [p.Av]: h,
          [p.gH]: _
        }),
        children: r
      }), (0, i.jsx)(d, {
        className: o()({
          [p.IF]: h,
          [p.If]: _
        }),
        children: a
      }), (0, i.jsxs)(l.ButtonGroup, {
        fullWidth: true,
        direction: "vertical",
        children: [(0, i.jsx)(l.Button, {
          fullWidth: true,
          variant: "primary",
          onClick: this.handleDismiss,
          text: f.intl.string(f.t["+IrDzN"])
        }), (0, i.jsx)(l.Button, {
          fullWidth: true,
          variant: "secondary",
          onClick: u,
          text: f.intl.string(f.t["33wtxt"])
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      confirmed: false
    }), _(this, "handleDismiss", () => {
      let {
        onClickComplete: e
      } = this.props;
      this.setState({
        confirmed: true
      }, () => null == e ? true : e())
    })
  }
}
class v extends(r = Chunk64700.PureComponent) {
  render() {
    let e = this.props,
      {
        renderMedia: t,
        textAlign: n,
        onComplete: r,
        onSkipAll: a,
        isLongText: s,
        title: o,
        body: c,
        children: u,
        spacing: d,
        forceTheme: f,
        innerRef: p
      } = e,
      _ = E(e, ["renderMedia", "textAlign", "onComplete", "onSkipAll", "isLongText", "title", "body", "children", "spacing", "forceTheme", "innerRef"]),
      m = "top" === _.position || "bottom" === _.position ? "center" : "top";
    return (0, i.jsx)(l.YNO, g(h({
      targetElementRef: p
    }, _), {
      align: m,
      spacing: null != d ? d : 0,
      renderPopout: this.renderPopoutContent,
      nudgeAlignIntoViewport: true,
      children: u
    }))
  }
  constructor(...e) {
    super(...e), _(this, "onClickComplete", e => {
      e(), this.props.onComplete()
    }), _(this, "onClickSkipAll", e => {
      let {
        onSkipAll: t,
        uniqueId: n
      } = this.props;
      e(), t(), u.default.track(d.HAw.DISMISS_ALL_TUTORIALS, {
        tutorial: n
      })
    }), _(this, "renderPopoutContent", e => {
      let {
        closePopout: t,
        position: n
      } = e, {
        forceTheme: r,
        isLongText: a,
        arrowAlignment: s,
        renderMedia: c
      } = this.props, u = null != c;
      return (0, i.jsx)(l.NPJ, {
        theme: r,
        children: e => (0, i.jsx)(A, g(h({}, this.props), {
          className: o()({
            [p.sQ]: "bottom" === n,
            [p.eV]: !a && !u,
            [p.tJ]: !a && u,
            [p.II]: a && !u,
            [p.HU]: a && u,
            [p.pG]: "right" === n,
            [p.Mn]: "top" === n,
            [p.kb]: "left" === n,
            [p.ks]: "top" === s,
            [p.Eo]: "middle" === s,
            "force-theme": null != r
          }, e),
          onClickComplete: () => this.onClickComplete(t),
          onClickSkipAll: () => this.onClickSkipAll(t)
        }))
      })
    })
  }
}
_(v, "TextAlignments", y), _(v, "defaultProps", {
  textAlign: "left"
})