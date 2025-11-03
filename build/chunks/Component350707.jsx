/** Chunk was on 88647 **/
/** chunk id: 350707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => E,
  cy: () => x,
  iu: () => v
}), require("./388685.js");
var r, i, l, Chunk951288 = require("./951288.js"),
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
  Chunk105853 = require("./105853.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var v = ((i = {}).CENTER = "center", i.LEFT = "left", i),
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
      title: r,
      body: i,
      className: l,
      forceTheme: o,
      onClickSkipAll: s
    } = this.props, h = "left" === exports || require, m = "center" === exports || !Chunk626135;
    return (0, Chunk951288.jsxs)(Chunk481060.VqE, {
      className: c()(Chunk105853.popoutRoot, l),
      children: [null != module && (0, Chunk951288.jsx)(Chunk600164.Z, {
        className: Chunk105853.mediaContainer,
        justify: Chunk626135 ? Chunk600164.Z.Justify.START : Chunk600164.Z.Justify.CENTER,
        children: module()
      }), (0, Chunk951288.jsx)(Chunk481060.H, {
        className: c()({
          [Chunk105853.titleCenter]: Chunk981631,
          [Chunk105853.titleLeft]: Chunk626135
        }),
        children: r
      }), (0, Chunk951288.jsx)("string" == typeof i ? "p" : "div", {
        className: c()({
          [Chunk105853.bodyCenter]: Chunk981631,
          [Chunk105853.bodyLeft]: Chunk626135
        }),
        children: i
      }), (0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk105853.buttonContainer,
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
          className: Chunk626135 ? Chunk105853.buttonSkipLeftAlign : Chunk105853.buttonSkipCenterAlign,
          children: Chunk388032.intl.string(Chunk388032.t["33wtxt"])
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
class E extends(r = Chunk647438.PureComponent) {
  render() {
    let e = this.props,
      {
        renderMedia: t,
        textAlign: n,
        onComplete: r,
        onSkipAll: i,
        isLongText: l,
        title: o,
        body: s,
        children: c,
        spacing: u,
        forceTheme: d,
        innerRef: f
      } = module,
      h = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(module, ["renderMedia", "textAlign", "onComplete", "onSkipAll", "isLongText", "title", "body", "children", "spacing", "forceTheme", "innerRef"]),
      m = "top" === Chunk626135.position || "bottom" === Chunk626135.position ? "center" : "top";
    return (0, Chunk951288.jsx)(Chunk481060.yRy, C(y({
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
    super(...e), _(this, "onClickComplete", e => {
      e(), this.props.onComplete()
    }), _(this, "onClickSkipAll", e => {
      let {
        onSkipAll: t,
        uniqueId: n
      } = this.props;
      e(), t(), h.default.track(m.rMx.DISMISS_ALL_TUTORIALS, {
        tutorial: n
      })
    }), _(this, "renderPopoutContent", e => {
      let {
        closePopout: t,
        position: n
      } = e, {
        forceTheme: r,
        isLongText: i,
        arrowAlignment: l,
        renderMedia: o
      } = this.props, s = null != o;
      return (0, a.jsx)(p.f6W, {
        theme: r,
        children: e => (0, a.jsx)(O, C(y({}, this.props), {
          className: c()({
            [b.bottom]: "bottom" === n,
            [b.contentNarrowNoMedia]: !i && !s,
            [b.contentNarrowWithMedia]: !i && s,
            [b.contentWideNoMedia]: i && !s,
            [b.contentWideWithMedia]: i && s,
            [b.right]: "right" === n,
            [b.top]: "top" === n,
            [b.left]: "left" === n,
            [b.arrowAlignmentTop]: "top" === l,
            [b.arrowAlignmentMiddle]: "middle" === l,
            "force-theme": null != r
          }, e),
          onClickComplete: () => this.onClickComplete(t),
          onClickSkipAll: () => this.onClickSkipAll(t)
        }))
      })
    })
  }
}
_(E, "TextAlignments", v), _(E, "defaultProps", {
  textAlign: "left"
})