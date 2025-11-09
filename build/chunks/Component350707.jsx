/** Chunk was on 50642 **/
/** chunk id: 350707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => j,
  cy: () => x,
  iu: () => _
}), require("./388685.js");
var i, r, l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk900418 = require("./900418.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
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
var _ = ((r = {}).CENTER = "center", r.LEFT = "left", r),
  x = ((l = {}).TOP = "top", l.MIDDLE = "middle", l);
class O extends Chunk647438.PureComponent {
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
      forceTheme: o,
      onClickSkipAll: s
    } = this.props, f = "left" === exports || require, m = "center" === exports || !Chunk626135;
    return (0, Chunk951288.jsxs)(Chunk481060.VqE, {
      className: c()(Chunk900418.popoutRoot, l),
      children: [null != module && (0, Chunk951288.jsx)(Chunk600164.Z, {
        className: Chunk900418.mediaContainer,
        justify: Chunk626135 ? Chunk600164.Z.Justify.START : Chunk600164.Z.Justify.CENTER,
        children: module()
      }), (0, Chunk951288.jsx)(Chunk481060.H, {
        className: c()({
          [Chunk900418.titleCenter]: Chunk981631,
          [Chunk900418.titleLeft]: Chunk626135
        }),
        children: i
      }), (0, Chunk951288.jsx)("string" == typeof r ? "p" : "div", {
        className: c()({
          [Chunk900418.bodyCenter]: Chunk981631,
          [Chunk900418.bodyLeft]: Chunk626135
        }),
        children: r
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk900418.buttonContainer,
        justify: Chunk626135 ? Chunk600164.Z.Justify.BETWEEN : Chunk600164.Z.Justify.CENTER,
        children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t["+IrDzN"]),
          onClick: this.handleDismiss
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          size: Chunk755721.Ph.SMALL,
          look: Chunk755721.zx.Looks.BLANK,
          onClick: Chunk120356,
          color: (0, Chunk780384.ap)(Chunk647438) ? Chunk755721.zx.Colors.PRIMARY : Chunk755721.zx.Colors.WHITE,
          className: Chunk626135 ? Chunk900418.buttonSkipLeftAlign : Chunk900418.buttonSkipCenterAlign,
          children: Chunk388032.intl.string(Chunk388032.t["33wtxt"])
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "state", {
      confirmed: false
    }), y(this, "handleDismiss", () => {
      let {
        onClickComplete: e
      } = this.props;
      this.setState({
        confirmed: true
      }, () => null == e ? true : e())
    })
  }
}
class j extends(i = Chunk647438.PureComponent) {
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
        spacing: u,
        forceTheme: d,
        innerRef: h
      } = module,
      f = function(e, t) {
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
      m = "top" === Chunk626135.position || "bottom" === Chunk626135.position ? "center" : "top";
    return (0, Chunk951288.jsx)(Chunk481060.yRy, v(C({
      targetElementRef: Chunk600164
    }, Chunk626135), {
      align: Chunk981631,
      spacing: null != Chunk780384 ? Chunk780384 : 0,
      renderPopout: this.renderPopoutContent,
      nudgeAlignIntoViewport: true,
      children: c
    }))
  }
  constructor(...e) {
    super(...e), y(this, "onClickComplete", e => {
      e(), this.props.onComplete()
    }), y(this, "onClickSkipAll", e => {
      let {
        onSkipAll: t,
        uniqueId: n
      } = this.props;
      e(), t(), f.default.track(m.rMx.DISMISS_ALL_TUTORIALS, {
        tutorial: n
      })
    }), y(this, "renderPopoutContent", e => {
      let {
        closePopout: t,
        position: n
      } = e, {
        forceTheme: i,
        isLongText: r,
        arrowAlignment: l,
        renderMedia: o
      } = this.props, s = null != o;
      return (0, a.jsx)(p.f6W, {
        theme: i,
        children: e => (0, a.jsx)(O, v(C({}, this.props), {
          className: c()({
            [b.bottom]: "bottom" === n,
            [b.contentNarrowNoMedia]: !r && !s,
            [b.contentNarrowWithMedia]: !r && s,
            [b.contentWideNoMedia]: r && !s,
            [b.contentWideWithMedia]: r && s,
            [b.right]: "right" === n,
            [b.top]: "top" === n,
            [b.left]: "left" === n,
            [b.arrowAlignmentTop]: "top" === l,
            [b.arrowAlignmentMiddle]: "middle" === l,
            "force-theme": null != i
          }, e),
          onClickComplete: () => this.onClickComplete(t),
          onClickSkipAll: () => this.onClickSkipAll(t)
        }))
      })
    })
  }
}
y(j, "TextAlignments", _), y(j, "defaultProps", {
  textAlign: "left"
})