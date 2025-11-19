/** Chunk was on web.js **/
/** chunk id: 519160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => O,
  gN: () => b
}), require("./388685.js"), require("./415506.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk582235 = require("./582235.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = {
    tension: 7,
    friction: 5,
    overshootClamping: true
  },
  m = 100,
  g = "center",
  E = "right";

function b(e, t) {
  return (e % t + t) % t
}
class y extends(r = Chunk473749.Component) {
  componentDidMount() {
    this.animatedIndex.setValue(this.props.currentIndex)
  }
  componentDidUpdate(e) {
    let {
      align: t,
      animate: n,
      currentIndex: r,
      items: i,
      width: a
    } = this.props, o = b(r, i.length), s = b(e.currentIndex, i.length);
    (o !== s || i.length !== e.items.length) && this.updateAnimatedIndex(o, s), a !== e.width ? this.animatedAlignmentOffset.setValue(this.getAlignmentOffset(t)) : n && (t !== e.align || o !== s) && l.Z.spring(this.animatedAlignmentOffset, p(f({}, h), {
      toValue: this.getAlignmentOffset(t)
    })).start()
  }
  getAlignmentOffset(e) {
    let {
      width: t,
      itemSize: n,
      currentIndex: r,
      gutter: i,
      items: a
    } = this.props, o = i * b(r, a.length) * 2;
    return e === g ? (t - n.width) / 2 + o : e === E ? t - n.width - i + o : i + o
  }
  getCarouselTranslate() {
    let {
      itemSize: e,
      edgeItems: t
    } = this.props;
    return exports * (module.width + module.margin)
  }
  animateToIndex(e, t) {
    let {
      animatedIndex: n
    } = this, {
      items: r,
      edgeItems: i
    } = this.props;
    i > 0 && (0 === e && t === r.length - 1 ? n.setValue(false) : 0 === t && e === r.length - 1 && r.length > 2 && n.setValue(r.length)), l.Z.spring(n, p(f({}, h), {
      toValue: e
    })).start()
  }
  updateAnimatedIndex(e, t) {
    let {
      animatedIndex: n,
      animatedOpacity: r
    } = this, {
      animate: i
    } = this.props;
    i ? this.animateToIndex(e, t) : l.Z.timing(r, {
      fromValue: 1,
      toValue: 0,
      duration: m
    }).start(() => {
      n.setValue(e), l.Z.timing(r, {
        fromValue: 0,
        toValue: 1,
        duration: m
      }).start()
    })
  }
  renderSingleItem() {
    let {
      renderItem: e,
      items: t,
      itemSize: n,
      className: r
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: s()(Chunk582235.singleItemWrapper, Chunk582235.viewport, r),
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk582235.singleItem,
        style: {
          width: require.width,
          height: require.height
        },
        children: module(exports[0], 0)
      })
    })
  }
  renderCarouselItems() {
    let e, {
        animatedIndex: t,
        animatedAlignmentOffset: n,
        animatedOpacity: r
      } = this,
      {
        renderItem: a,
        items: o,
        itemSize: s,
        edgeItems: c,
        gutter: d
      } = this.props,
      {
        margin: f,
        width: _
      } = s,
      p = this.getCarouselTranslate(),
      h = this.getItemStyle(),
      m = (e = Chunk112724 > 0 ? [...Chunk120356.slice(-Chunk112724), ...Chunk120356, ...Chunk120356.slice(0, Chunk112724)] : Chunk120356).map((e, t) => (0, i.jsx)("div", {
        style: h,
        className: u.item,
        children: a(e, t - c, this.interpolateValueForItem(t - c))
      }, t));
    return (0, Chunk54381.jsx)(Chunk748780.Z.div, {
      className: Chunk582235.carousel,
      style: {
        opacity: r,
        left: Chunk748780.Z.add(exports.interpolate({
          inputRange: [0, 1],
          outputRange: [-p, -f - _ - p - d * (Chunk120356.length - 1)]
        }), require)
      },
      children: m
    })
  }
  render() {
    let {
      items: e,
      className: t,
      hideOverflow: n
    } = this.props;
    if (module.length <= 0) throw Error("Carousel has no items");
    return 1 === module.length ? this.renderSingleItem() : (0, Chunk54381.jsx)("div", {
      className: s()({
        [Chunk582235.viewport]: require
      }, exports),
      children: this.renderCarouselItems()
    })
  }
  constructor(...e) {
    super(...e), d(this, "animatedIndex", new l.Z.Value(this.props.currentIndex)), d(this, "animatedAlignmentOffset", new l.Z.Value(this.getAlignmentOffset(this.props.align))), d(this, "animatedOpacity", new l.Z.Value(1)), d(this, "getItemStyle", () => {
      let {
        itemSize: {
          width: e,
          margin: t,
          height: n
        }
      } = this.props;
      return {
        flexBasis: e,
        marginRight: t,
        height: n,
        width: e,
        maxWidth: e
      }
    }), d(this, "interpolateValueForItem", e => this.animatedIndex.interpolate({
      inputRange: [e - 1, e, e + 1],
      outputRange: [0, 1, 0],
      extrapolate: "clamp"
    }))
  }
}
d(y, "defaultProps", {
  animate: true,
  edgeItems: 2,
  align: g,
  gutter: 0,
  hideOverflow: true
});
let O = (0, Chunk112724.Z)(y)