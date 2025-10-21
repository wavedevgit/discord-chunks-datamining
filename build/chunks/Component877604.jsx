/** Chunk was on 3688 **/
/** chunk id: 877604, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./415506.js");
var s, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk156578 = require("./156578.js");

function l(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class d extends(s = Chunk647438.PureComponent) {
  componentDidUpdate(t) {
    t.src !== this.props.src && this.setState({
      loaded: false
    }, () => this.initialize())
  }
  initialize() {
    let t;
    (t = this.props.src, new Promise((e, i) => {
      null == t && i(Error("No image src passed"));
      let s = new Image;
      s.src = t, s.onload = () => e(s), s.onerror = t => i(t)
    })).then(() => {
      this.unmounting || this.setState({
        loaded: true
      })
    })
  }
  componentWillUnmount() {
    this.unmounting = true
  }
  render() {
    var t, e;
    let {
      className: i,
      src: s,
      alt: a,
      width: h,
      height: d,
      onLoad: c,
      style: u,
      imageClassName: p
    } = this.props, {
      loaded: f
    } = this.state;
    return (0, Chunk951288.jsx)("div", {
      className: require,
      style: (t = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            s = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), s.forEach(function(e) {
            l(t, e, i[e])
          })
        }
        return t
      }({}, u), e = e = {
        width: Chunk120356,
        height: d
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          i.push.apply(i, s)
        }
        return i
      })(Object(exports)).forEach(function(i) {
        Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
      }), module),
      children: (0, Chunk951288.jsx)("img", {
        className: r()(Chunk156578.image, p, {
          [Chunk156578.loaded]: f
        }),
        width: Chunk120356,
        height: d,
        src: s,
        alt: Chunk647438,
        onLoad: c
      })
    })
  }
  constructor(t) {
    super(t), l(this, "unmounting", false), l(this, "state", {
      loaded: false
    }), this.initialize()
  }
}
l(d, "defaultProps", {
  width: 0,
  height: 0,
  alt: ""
});
let c = d