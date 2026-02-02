/** Chunk was on 71853 **/
/** chunk id: 414711, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js");
require("./646363.js");
var Chunk254155 = require("./254155.js");

function p(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      s = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), s.forEach(function(t) {
      p(e, t, i[t])
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      i.push.apply(i, s)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}
class A extends Chunk64700.PureComponent {
  componentWillLeave(e) {
    a.A.parallel([a.A.timing(this.state.opacity, {
      toValue: 0,
      duration: 200
    }), a.A.timing(this.state.height, {
      toValue: 0,
      duration: 200
    })]).start(e)
  }
  componentWillEnter(e) {
    var t;
    this.state.opacity.setValue(0), this.state.height.setValue(0), a.A.parallel([a.A.timing(this.state.opacity, {
      toValue: 1,
      duration: 200
    }), a.A.timing(this.state.height, {
      toValue: null != (t = this.props.height) ? t : 62,
      duration: 200
    })]).start(e)
  }
  render() {
    let {
      height: e,
      opacity: t,
      hovered: i,
      isContextMenuActive: n
    } = this.state, {
      children: r,
      user: c,
      onClick: p,
      isActive: A,
      className: y,
      activeClassName: N
    } = this.props;
    return (0, s.jsx)(l.tG, {
      id: c.id,
      children: l => (0, s.jsx)(u.vN3, {
        offset: {
          left: false,
          right: false
        },
        children: (0, s.jsx)(a.A.div, m(d({
          className: o()(y, h.V, null != N ? {
            [N]: A || n
          } : null, {
            [h.v]: A || n
          }),
          onContextMenu: e => this.handleContextMenu(e, c),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onClick: null != p ? p : true,
          style: {
            height: e,
            opacity: t
          }
        }, l), {
          children: r(i || A || n)
        }))
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), p(this, "state", {
      height: new a.A.Value(null != (t = this.props.height) ? t : 62),
      opacity: new a.A.Value(1),
      hovered: false,
      isContextMenuActive: false
    }), p(this, "handleMouseEnter", () => {
      let {
        isFocused: e,
        isActive: t,
        onOtherHover: i
      } = this.props, {
        isContextMenuActive: s
      } = this.state;
      this.setState({
        hovered: e
      }), !e || t || s || null == i || i()
    }), p(this, "handleMouseLeave", () => {
      this.setState({
        hovered: false
      })
    }), p(this, "handleContextMenu", (e, t) => {
      this.setState({
        isContextMenuActive: true
      }), (0, c.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([i.e("97262"), i.e("32418"), i.e("22252")]).then(i.bind(i, 668569));
        return i => (0, s.jsx)(e, m(d({}, i), {
          user: t
        }))
      }, {
        onClose: () => {
          this.setState({
            isContextMenuActive: false
          })
        }
      })
    })
  }
}
let y = A