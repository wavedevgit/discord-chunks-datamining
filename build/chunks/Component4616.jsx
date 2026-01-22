/** Chunk was on 99673 **/
/** chunk id: 4616, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./65821.js");
var s, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  h = require.n(Chunk503698),
  Chunk397086 = require("./397086.js");

function o(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class c extends(s = Chunk64700.PureComponent) {
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
      alt: r,
      width: a,
      height: c,
      onLoad: d,
      style: u,
      imageClassName: p
    } = this.props, {
      loaded: f
    } = this.state;
    return (0, n.jsx)("div", {
      className: i,
      style: (t = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            s = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), s.forEach(function(e) {
            o(t, e, i[e])
          })
        }
        return t
      }({}, u), e = e = {
        width: a,
        height: c
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(t);
          i.push.apply(i, s)
        }
        return i
      })(Object(e)).forEach(function(i) {
        Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
      }), t),
      children: (0, n.jsx)("img", {
        className: h()(l.S, p, {
          [l.K]: f
        }),
        width: a,
        height: c,
        src: s,
        alt: r,
        onLoad: d
      })
    })
  }
  constructor(t) {
    super(t), o(this, "unmounting", false), o(this, "state", {
      loaded: false
    }), this.initialize()
  }
}
o(c, "defaultProps", {
  width: 0,
  height: 0,
  alt: ""
});
let d = c