/** Chunk was on 97492 **/
/** chunk id: 494208, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk323073 = require("./323073.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk707539 = require("./707539.js"),
  Chunk617011 = require("./617011.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk498654 = require("./498654.js");

function p(e) {
  let {
    channel: t
  } = e, [n, p] = l.useState(false), h = l.useRef(null), f = (0, s.vL)(t), g = l.useCallback(() => {
    p(false)
  }, []), m = l.useCallback(() => {
    n || (0, o.D3)("Popout"), p(!n)
  }, [n]);
  return (0, r.jsx)(i.YNO, {
    targetElementRef: h,
    animation: i.YNO.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    shouldShow: n,
    onRequestClose: g,
    renderPopout: function() {
      return (0, r.jsx)(i.lGe, {
        children: (0, r.jsx)(c.A, {
          className: d.T,
          channel: t,
          onClose: g,
          context: "popout"
        })
      })
    },
    clickTrap: true,
    children: (e, t) => {
      var n, l;
      let {
        isShown: s
      } = t;
      return (0, r.jsx)(a.In, (n = function(e) {
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
      }({}, e), l = l = {
        ref: h,
        className: d.Kk,
        onClick: m,
        icon: i.ysw,
        "aria-label": u.intl.string(u.t.B2panI),
        tooltip: s ? null : u.intl.string(u.t.B2panI),
        disabled: f,
        selected: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
      }), n))
    }
  })
}