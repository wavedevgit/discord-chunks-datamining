/** Chunk was on 40184 **/
/** chunk id: 350707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => O,
  cy: () => v,
  iu: () => y
}), require("./388685.js");
var i, r, l, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk308779 = require("./308779.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var y = ((r = {}).CENTER = "center", r.LEFT = "left", r),
  v = ((l = {}).TOP = "top", l.MIDDLE = "middle", l);
class x extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      uniqueId: e
    } = this.props;
    Chunk626135.default.track(Chunk981631.rMx.SHOW_TUTORIAL, {
      tutorial: module
    })
  }
  componentWillUnmount() {
    Chunk626135.default.track(Chunk981631.rMx.CLOSE_TUTORIAL, {
      tutorial: this.props.uniqueId,
      acknowledged: this.state.confirmed
    })
  }
  render() {
    let {
      renderMedia: e,
      textAlign: t,
      isLongText: n,
      title: i,
      body: r,
      className: l,
      onClickSkipAll: o
    } = this.props, s = "left" === exports || require, p = "center" === exports || !Chunk120356;
    return (0, Chunk54381.jsxs)(Chunk481060.VqE, {
      className: c()(Chunk308779.popoutRoot, l),
      children: [null != module && (0, Chunk54381.jsx)(Chunk600164.Z, {
        className: Chunk308779.mediaContainer,
        justify: Chunk120356 ? Chunk600164.Z.Justify.START : Chunk600164.Z.Justify.CENTER,
        children: module()
      }), (0, Chunk54381.jsx)(Chunk481060.H, {
        className: c()({
          [Chunk308779.titleCenter]: Chunk626135,
          [Chunk308779.titleLeft]: Chunk120356
        }),
        children: i
      }), (0, Chunk54381.jsx)("string" == typeof r ? "p" : "div", {
        className: c()({
          [Chunk308779.bodyCenter]: Chunk626135,
          [Chunk308779.bodyLeft]: Chunk120356
        }),
        children: r
      }), (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
        fullWidth: true,
        direction: "vertical",
        children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
          fullWidth: true,
          variant: "primary",
          onClick: this.handleDismiss,
          text: Chunk388032.intl.string(Chunk388032.t["+IrDzN"])
        }), (0, Chunk54381.jsx)(Chunk481060.Button, {
          fullWidth: true,
          variant: "secondary",
          onClick: Chunk473749,
          text: Chunk388032.intl.string(Chunk388032.t["33wtxt"])
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      confirmed: false
    }), g(this, "handleDismiss", () => {
      let {
        onClickComplete: e
      } = this.props;
      this.setState({
        confirmed: true
      }, () => null == e ? true : e())
    })
  }
}
class O extends(i = Chunk473749.PureComponent) {
  render() {
    let e = this.props,
      {
        renderMedia: t,
        textAlign: n,
        onComplete: i,
        onSkipAll: r,
        isLongText: l,
        title: o,
        body: s,
        children: c,
        spacing: d,
        forceTheme: p,
        innerRef: f
      } = module,
      h = function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            l = Object.keys(e);
          for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(module, ["renderMedia", "textAlign", "onComplete", "onSkipAll", "isLongText", "title", "body", "children", "spacing", "forceTheme", "innerRef"]),
      m = "top" === Chunk388032.position || "bottom" === Chunk388032.position ? "center" : "top";
    return (0, Chunk54381.jsx)(Chunk481060.yRy, C(b({
      targetElementRef: Chunk981631
    }, Chunk388032), {
      align: Chunk308779,
      spacing: null != Chunk600164 ? Chunk600164 : 0,
      renderPopout: this.renderPopoutContent,
      nudgeAlignIntoViewport: true,
      children: c
    }))
  }
  constructor(...e) {
    super(...e), g(this, "onClickComplete", e => {
      e(), this.props.onComplete()
    }), g(this, "onClickSkipAll", e => {
      let {
        onSkipAll: t,
        uniqueId: n
      } = this.props;
      e(), t(), p.default.track(f.rMx.DISMISS_ALL_TUTORIALS, {
        tutorial: n
      })
    }), g(this, "renderPopoutContent", e => {
      let {
        closePopout: t,
        position: n
      } = e, {
        forceTheme: i,
        isLongText: r,
        arrowAlignment: l,
        renderMedia: o
      } = this.props, s = null != o;
      return (0, a.jsx)(u.f6W, {
        theme: i,
        children: e => (0, a.jsx)(x, C(b({}, this.props), {
          className: c()({
            [m.bottom]: "bottom" === n,
            [m.contentNarrowNoMedia]: !r && !s,
            [m.contentNarrowWithMedia]: !r && s,
            [m.contentWideNoMedia]: r && !s,
            [m.contentWideWithMedia]: r && s,
            [m.right]: "right" === n,
            [m.top]: "top" === n,
            [m.left]: "left" === n,
            [m.arrowAlignmentTop]: "top" === l,
            [m.arrowAlignmentMiddle]: "middle" === l,
            "force-theme": null != i
          }, e),
          onClickComplete: () => this.onClickComplete(t),
          onClickSkipAll: () => this.onClickSkipAll(t)
        }))
      })
    })
  }
}
g(O, "TextAlignments", y), g(O, "defaultProps", {
  textAlign: "left"
})