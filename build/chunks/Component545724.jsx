/** Chunk was on 1272 **/
/** chunk id: 545724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk687683 = require("./687683.js"),
  Chunk978070 = require("./978070.js");

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
    channel: m,
    onClick: _,
    isFocused: b,
    isActive: E,
    onOtherHover: O,
    className: y
  } = e, [v, I] = i.useState(false), [C, S] = i.useState(false), T = () => {
    I(true), !b || E || C || null == O || O()
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
      children: (0, r.jsx)(s.Z.div, h(f({
        className: a()(p.messageRequestItem, y, {
          [p.active]: E || C,
          [p.firstItem]: 0 === t
        }),
        onContextMenu: e => {
          null != g && (S(true), (0, u.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
            return t => (0, r.jsx)(e, h(f({}, t), {
              user: g
            }))
          }, {
            onClose: () => {
              S(false)
            }
          }))
        },
        onMouseEnter: T,
        onMouseLeave: N,
        onClick: null != _ ? _ : true,
        style: {
          LIST_ROW_HEIGHT: d.WN,
          opacity: 1
        }
      }, e), {
        children: l(v || E || C)
      }))
    })
  })
}