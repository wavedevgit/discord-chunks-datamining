/** Chunk was on 77512 **/
/** chunk id: 852860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk435613 = require("./435613.js");
let d = function(e) {
  var t;
  let {
    message: n,
    errorMessage: d,
    submitting: f,
    onReset: p,
    onSave: b,
    onSaveText: O,
    onResetText: m,
    onSaveButtonColor: h,
    disabled: g,
    saveButtonTooltip: j
  } = e, y = i.useRef(null), [v, S] = i.useState(false);
  return i.useEffect(() => {
    function e() {
      S(true), setTimeout(() => S(false), 1e3)
    }
    return s.S.subscribe(c.CkL.EMPHASIZE_NOTICE, e), () => {
      s.S.unsubscribe(c.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: u.container,
    "data-emphasized": v,
    children: (0, r.jsx)("div", {
      className: u.flexContainer,
      ref: y,
      children: (0, r.jsxs)(o.JcV, {
        containerRef: y,
        children: [(0, r.jsx)("div", {
          className: u.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: u.message,
            children: null != (t = null != d ? d : n) ? t : a.intl.string(a.t.GP7JLC)
          })
        }), (0, r.jsxs)("div", {
          className: u.actions,
          children: [null != p && (0, r.jsx)(l.zx, {
            className: u.resetButton,
            size: l.zx.Sizes.SMALL,
            color: l.zx.Colors.PRIMARY,
            look: l.zx.Looks.LINK,
            onClick: p,
            children: (0, r.jsx)("span", {
              children: null != m ? m : a.intl.string(a.t.yBZMsb)
            })
          }), null != b ? (0, r.jsx)(o.ua7, {
            text: j,
            children: e => {
              var t, n;
              return (0, r.jsx)(l.zx, (t = function(e) {
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
              }({
                size: l.zx.Sizes.SMALL,
                color: null != h ? h : l.zx.Colors.GREEN,
                submitting: f,
                disabled: g,
                onClick: b
              }, e), n = n = {
                children: null != O ? O : a.intl.string(a.t.K344S0)
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), t))
            }
          }) : null]
        })]
      })
    })
  })
}