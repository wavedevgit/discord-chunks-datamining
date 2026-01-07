/** Chunk was on 74969 **/
/** chunk id: 417183, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk617015 = require("./617015.js"),
  Chunk702301 = require("./702301.js");

function d(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      d(e, t, i[t])
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
  }), e
}
class N extends Chunk473749.PureComponent {
  componentWillLeave(e) {
    a.Z.parallel([a.Z.timing(this.state.opacity, {
      toValue: 0,
      duration: 200
    }), a.Z.timing(this.state.height, {
      toValue: 0,
      duration: 200
    })]).start(e)
  }
  componentWillEnter(e) {
    var t;
    this.state.opacity.setValue(0), this.state.height.setValue(0), a.Z.parallel([a.Z.timing(this.state.opacity, {
      toValue: 1,
      duration: 200
    }), a.Z.timing(this.state.height, {
      toValue: null != (t = this.props.height) ? t : h.NV,
      duration: 200
    })]).start(e)
  }
  render() {
    let {
      height: e,
      opacity: t,
      hovered: i,
      isContextMenuActive: s
    } = this.state, {
      children: r,
      user: c,
      onClick: h,
      isActive: d,
      className: N,
      activeClassName: y
    } = this.props;
    return (0, n.jsx)(l.mh, {
      id: c.id,
      children: l => (0, n.jsx)(u.tEY, {
        offset: {
          left: false,
          right: false
        },
        children: (0, n.jsx)(a.Z.div, O(m({
          className: o()(N, p.peopleListItem, null != y ? {
            [y]: d || s
          } : null, {
            [p.active]: d || s
          }),
          onContextMenu: e => this.handleContextMenu(e, c),
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave,
          onClick: null != h ? h : true,
          style: {
            height: e,
            opacity: t
          }
        }, l), {
          children: r(i || d || s)
        }))
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), d(this, "state", {
      height: new a.Z.Value(null != (t = this.props.height) ? t : h.NV),
      opacity: new a.Z.Value(1),
      hovered: false,
      isContextMenuActive: false
    }), d(this, "handleMouseEnter", () => {
      let {
        isFocused: e,
        isActive: t,
        onOtherHover: i
      } = this.props, {
        isContextMenuActive: n
      } = this.state;
      this.setState({
        hovered: e
      }), !e || t || n || null == i || i()
    }), d(this, "handleMouseLeave", () => {
      this.setState({
        hovered: false
      })
    }), d(this, "handleContextMenu", (e, t) => {
      this.setState({
        isContextMenuActive: true
      }), (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([i.e("79695"), i.e("69220"), i.e("26465")]).then(i.bind(i, 881351));
        return i => (0, n.jsx)(e, O(m({}, i), {
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
let y = N