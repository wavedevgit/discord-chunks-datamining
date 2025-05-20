/** Chunk was on 99541 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(388685);
var r = n(255367),
  i = n(73800),
  s = n(481060),
  o = n(585483),
  a = n(981631),
  l = n(388032),
  c = n(744053);
let u = function(e) {
  var t;
  let {
    message: n,
    errorMessage: u,
    submitting: d,
    onReset: p,
    onSave: f,
    onSaveText: g,
    onResetText: b,
    onSaveButtonColor: m,
    disabled: _,
    saveButtonTooltip: v
  } = e, h = i.useRef(null), [O, j] = i.useState(!1);
  return i.useEffect(() => {
    function e() {
      j(!0), setTimeout(() => j(!1), 1e3)
    }
    return o.S.subscribe(a.CkL.EMPHASIZE_NOTICE, e), () => {
      o.S.unsubscribe(a.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: c.container,
    "data-emphasized": O,
    children: (0, r.jsx)("div", {
      className: c.flexContainer,
      ref: h,
      children: (0, r.jsxs)(s.JcV, {
        containerRef: h,
        children: [(0, r.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: c.message,
            children: null != (t = null != u ? u : n) ? t : l.intl.string(l.t.GP7JLC)
          })
        }), (0, r.jsxs)("div", {
          className: c.actions,
          children: [null != p && (0, r.jsx)(s.zxk, {
            className: c.resetButton,
            size: s.zxk.Sizes.SMALL,
            color: s.zxk.Colors.PRIMARY,
            look: s.zxk.Looks.LINK,
            onClick: p,
            children: (0, r.jsx)("span", {
              children: null != b ? b : l.intl.string(l.t.yBZMsb)
            })
          }), null != f ? (0, r.jsx)(s.ua7, {
            text: v,
            children: e => {
              var t, n;
              return (0, r.jsx)(s.zxk, (t = function(e) {
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
                size: s.zxk.Sizes.SMALL,
                color: null != m ? m : s.zxk.Colors.GREEN,
                submitting: d,
                disabled: _,
                onClick: f
              }, e), n = n = {
                children: null != g ? g : l.intl.string(l.t.K344S0)
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