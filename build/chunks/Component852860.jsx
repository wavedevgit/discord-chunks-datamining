/** Chunk was on 81498 **/
/** chunk id: 852860, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    submitting: h,
    onReset: p,
    onSave: g,
    onSaveText: f,
    onResetText: v,
    onSaveButtonColor: m,
    disabled: C,
    saveButtonTooltip: b
  } = e, y = r.useRef(null), [O, S] = r.useState(false);
  return r.useEffect(() => {
    function e() {
      S(true), setTimeout(() => S(false), 1e3)
    }
    return o.S.subscribe(a.CkL.EMPHASIZE_NOTICE, e), () => {
      o.S.unsubscribe(a.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, i.jsx)("div", {
    className: c.container,
    "data-emphasized": O,
    children: (0, i.jsx)("div", {
      className: c.flexContainer,
      ref: y,
      children: (0, i.jsxs)(l.JcV, {
        containerRef: y,
        children: [(0, i.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, i.jsx)("div", {
            className: c.message,
            children: null != (t = null != d ? d : n) ? t : u.intl.string(u.t.GP7JLC)
          })
        }), (0, i.jsxs)("div", {
          className: c.actions,
          children: [null != p && (0, i.jsx)(s.zx, {
            className: c.resetButton,
            size: s.zx.Sizes.SMALL,
            color: s.zx.Colors.PRIMARY,
            look: s.zx.Looks.LINK,
            onClick: p,
            children: (0, i.jsx)("span", {
              children: null != v ? v : u.intl.string(u.t.yBZMsb)
            })
          }), null != g ? (0, i.jsx)(l.ua7, {
            text: b,
            children: e => {
              var t, n;
              return (0, i.jsx)(s.zx, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), i.forEach(function(t) {
                    var i;
                    i = n[t], t in e ? Object.defineProperty(e, t, {
                      value: i,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = i
                  })
                }
                return e
              }({
                size: s.zx.Sizes.SMALL,
                color: null != m ? m : s.zx.Colors.GREEN,
                submitting: h,
                disabled: C,
                onClick: g
              }, e), n = n = {
                children: null != f ? f : u.intl.string(u.t.K344S0)
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, i)
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