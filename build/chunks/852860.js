/** Chunk was on 88625 **/
"use strict";
n.d(t, {
  Z: () => d
}), n(388685);
var r = n(255367),
  i = n(73800),
  s = n(755721),
  l = n(481060),
  o = n(585483),
  a = n(981631),
  c = n(388032),
  u = n(744053);
let d = function(e) {
  var t;
  let {
    message: n,
    errorMessage: d,
    submitting: f,
    onReset: p,
    onSave: g,
    onSaveText: b,
    onResetText: m,
    onSaveButtonColor: v,
    disabled: h,
    saveButtonTooltip: O
  } = e, y = i.useRef(null), [E, S] = i.useState(!1);
  return i.useEffect(() => {
    function e() {
      S(!0), setTimeout(() => S(!1), 1e3)
    }
    return o.S.subscribe(a.CkL.EMPHASIZE_NOTICE, e), () => {
      o.S.unsubscribe(a.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: u.container,
    "data-emphasized": E,
    children: (0, r.jsx)("div", {
      className: u.flexContainer,
      ref: y,
      children: (0, r.jsxs)(l.JcV, {
        containerRef: y,
        children: [(0, r.jsx)("div", {
          className: u.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: u.message,
            children: null != (t = null != d ? d : n) ? t : c.intl.string(c.t.GP7JLC)
          })
        }), (0, r.jsxs)("div", {
          className: u.actions,
          children: [null != p && (0, r.jsx)(s.zx, {
            className: u.resetButton,
            size: s.zx.Sizes.SMALL,
            color: s.zx.Colors.PRIMARY,
            look: s.zx.Looks.LINK,
            onClick: p,
            children: (0, r.jsx)("span", {
              children: null != m ? m : c.intl.string(c.t.yBZMsb)
            })
          }), null != g ? (0, r.jsx)(l.ua7, {
            text: O,
            children: e => {
              var t, n;
              return (0, r.jsx)(s.zx, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[t] = r
                  })
                }
                return e
              }({
                size: s.zx.Sizes.SMALL,
                color: null != v ? v : s.zx.Colors.GREEN,
                submitting: f,
                disabled: h,
                onClick: g
              }, e), n = n = {
                children: null != b ? b : c.intl.string(c.t.K344S0)
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