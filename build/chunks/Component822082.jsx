/** Chunk was on 21738 **/
/** chunk id: 822082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js");
require("./687599.js");
var Chunk102752 = require("./102752.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
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
let g = function(e) {
  let {
    index: t,
    children: l,
    user: g,
    channel: f,
    onClick: m,
    isFocused: A,
    isActive: _,
    onOtherHover: b,
    className: E
  } = e, [O, y] = i.useState(false), [I, v] = i.useState(false), S = () => {
    y(true), !A || _ || I || null == b || b()
  }, C = () => {
    y(false)
  };
  return (0, r.jsx)(o.tG, {
    id: f.id,
    children: e => (0, r.jsx)(c.vN3, {
      offset: {
        left: false,
        right: false
      },
      children: (0, r.jsx)(s.A.div, h(p({
        className: a()(d.Cf, E, {
          [d.vu]: _ || I,
          [d.CJ]: 0 === t
        }),
        onContextMenu: e => {
          null != g && (v(true), (0, u.L3)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("97262"), n.e("32418"), n.e("99871")]).then(n.bind(n, 668569));
            return t => (0, r.jsx)(e, h(p({}, t), {
              user: g
            }))
          }, {
            onClose: () => {
              v(false)
            }
          }))
        },
        onMouseEnter: S,
        onMouseLeave: C,
        onClick: null != m ? m : true,
        style: {
          LIST_ROW_HEIGHT: 73,
          opacity: 1
        }
      }, e), {
        children: l(O || _ || I)
      }))
    })
  })
}