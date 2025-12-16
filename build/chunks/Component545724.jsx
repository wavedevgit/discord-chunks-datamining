/** Chunk was on 1272 **/
/** chunk id: 545724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk687683 = require("./687683.js"),
  Chunk718726 = require("./718726.js");

function f(e) {
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

function g(e, t) {
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
let h = function(e) {
  let {
    index: t,
    children: l,
    user: h,
    channel: m,
    onClick: b,
    isFocused: E,
    isActive: _,
    onOtherHover: O,
    className: v
  } = e, [y, I] = i.useState(false), [C, S] = i.useState(false), T = () => {
    I(true), !E || _ || C || null == O || O()
  }, N = () => {
    I(false)
  };
  return (0, r.jsx)(o.mh, {
    id: m.id,
    children: e => (0, r.jsx)(c.tEY, {
      offset: {
        left: false,
        right: false
      },
      children: (0, r.jsx)(s.Z.div, g(f({
        className: a()(p.messageRequestItem, v, {
          [p.active]: _ || C,
          [p.firstItem]: 0 === t
        }),
        onContextMenu: e => {
          null != h && (S(true), (0, u.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("79695"), n.e("69220"), n.e("18030")]).then(n.bind(n, 881351));
            return t => (0, r.jsx)(e, g(f({}, t), {
              user: h
            }))
          }, {
            onClose: () => {
              S(false)
            }
          }))
        },
        onMouseEnter: T,
        onMouseLeave: N,
        onClick: null != b ? b : true,
        style: {
          LIST_ROW_HEIGHT: d.WN,
          opacity: 1
        }
      }, e), {
        children: l(y || _ || C)
      }))
    })
  })
}