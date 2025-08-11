/** Chunk was on web.js **/
/** chunk id: 997638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => S,
  cy: () => I,
  iu: () => v
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk993229 = require("./993229.js");

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
var v = function(e) {
    return e.CENTER = "center", e.LEFT = "left", e
  }({}),
  I = function(e) {
    return e.TOP = "top", e.MIDDLE = "middle", e
  }({});
class T extends Chunk73800.PureComponent {
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
      body: o,
      className: a,
      forceTheme: d,
      onClickSkipAll: _
    } = this.props, m = "string" == typeof Chunk73800 ? "p" : "div", g = "left" === exports || require, E = "center" === exports || !g;
    return (0, Chunk255367.jsxs)(Chunk481060.VqE, {
      className: s()(Chunk993229.popoutRoot, Chunk120356),
      children: [null != module && (0, Chunk255367.jsx)(Chunk600164.Z, {
        className: Chunk993229.mediaContainer,
        justify: g ? Chunk600164.Z.Justify.START : Chunk600164.Z.Justify.CENTER,
        children: module()
      }), (0, Chunk255367.jsx)(Chunk481060.H, {
        className: s()({
          [Chunk993229.titleCenter]: E,
          [Chunk993229.titleLeft]: g
        }),
        children: r
      }), (0, Chunk255367.jsx)(m, {
        className: s()({
          [Chunk993229.bodyCenter]: E,
          [Chunk993229.bodyLeft]: g
        }),
        children: Chunk73800
      }), (0, Chunk255367.jsxs)(Chunk600164.Z, {
        className: Chunk993229.buttonContainer,
        justify: g ? Chunk600164.Z.Justify.BETWEEN : Chunk600164.Z.Justify.CENTER,
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t["+IrDzM"]),
          onClick: this.handleDismiss
        }), (0, Chunk255367.jsx)(Chunk755721.zx, {
          size: Chunk755721.Ph.SMALL,
          look: Chunk755721.zx.Looks.BLANK,
          onClick: Chunk981631,
          color: (0, Chunk780384.ap)(Chunk626135) ? Chunk755721.zx.Colors.PRIMARY : Chunk755721.zx.Colors.WHITE,
          className: g ? Chunk993229.buttonSkipLeftAlign : Chunk993229.buttonSkipCenterAlign,
          children: Chunk388032.intl.string(Chunk388032.t["33wtxs"])
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      confirmed: false
    }), m(this, "handleDismiss", () => {
      let {
        onClickComplete: e
      } = this.props;
      this.setState({
        confirmed: true
      }, () => null == e ? true : e())
    })
  }
}
class S extends(r = Chunk73800.PureComponent) {
  render() {
    let e = this.props,
      {
        renderMedia: t,
        textAlign: n,
        onComplete: r,
        onSkipAll: o,
        isLongText: a,
        title: s,
        body: l,
        children: c,
        spacing: d,
        forceTheme: f,
        innerRef: _
      } = module,
      p = y(module, ["renderMedia", "textAlign", "onComplete", "onSkipAll", "isLongText", "title", "body", "children", "spacing", "forceTheme", "innerRef"]),
      h = "top" === Chunk388032.position || "bottom" === Chunk388032.position ? "center" : "top";
    return (0, Chunk255367.jsx)(Chunk481060.yRy, b(g({
      targetElementRef: Chunk981631
    }, Chunk388032), {
      align: Chunk993229,
      spacing: null != Chunk626135 ? Chunk626135 : 0,
      renderPopout: this.renderPopoutContent,
      nudgeAlignIntoViewport: true,
      children: Chunk755721
    }))
  }
  constructor(...e) {
    super(...e), m(this, "onClickComplete", e => {
      e(), this.props.onComplete()
    }), m(this, "onClickSkipAll", e => {
      let {
        onSkipAll: t,
        uniqueId: n
      } = this.props;
      e(), t(), d.default.track(_.rMx.DISMISS_ALL_TUTORIALS, {
        tutorial: n
      })
    }), m(this, "renderPopoutContent", e => {
      let {
        closePopout: t,
        position: n
      } = e, {
        forceTheme: r,
        isLongText: o,
        arrowAlignment: a,
        renderMedia: l
      } = this.props, c = null != l;
      return (0, i.jsx)(u.f6W, {
        theme: r,
        children: e => (0, i.jsx)(T, b(g({}, this.props), {
          className: s()({
            [h.bottom]: "bottom" === n,
            [h.contentNarrowNoMedia]: !o && !c,
            [h.contentNarrowWithMedia]: !o && c,
            [h.contentWideNoMedia]: o && !c,
            [h.contentWideWithMedia]: o && c,
            [h.right]: "right" === n,
            [h.top]: "top" === n,
            [h.left]: "left" === n,
            [h.arrowAlignmentTop]: "top" === a,
            [h.arrowAlignmentMiddle]: "middle" === a,
            "force-theme": null != r
          }, e),
          onClickComplete: () => this.onClickComplete(t),
          onClickSkipAll: () => this.onClickSkipAll(t)
        }))
      })
    })
  }
}
m(S, "TextAlignments", v), m(S, "defaultProps", {
  textAlign: "left"
})