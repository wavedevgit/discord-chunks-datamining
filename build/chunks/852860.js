/** Chunk was on 94928 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(388685);
var r = n(255367),
  s = n(73800),
  i = n(481060),
  o = n(585483),
  l = n(981631),
  a = n(388032),
  c = n(744053);
let u = function(e) {
  var t;
  let {
    message: n,
    errorMessage: u,
    submitting: d,
    onReset: f,
    onSave: p,
    onSaveText: g,
    onResetText: b,
    onSaveButtonColor: m,
    disabled: v,
    saveButtonTooltip: h
  } = e, O = s.useRef(null), [_, j] = s.useState(!1);
  return s.useEffect(() => {
    function e() {
      j(!0), setTimeout(() => j(!1), 1e3)
    }
    return o.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e), () => {
      o.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: c.container,
    "data-emphasized": _,
    children: (0, r.jsx)("div", {
      className: c.flexContainer,
      ref: O,
      children: (0, r.jsxs)(i.JcV, {
        containerRef: O,
        children: [(0, r.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: c.message,
            children: null != (t = null != u ? u : n) ? t : a.intl.string(a.t.GP7JLC)
          })
        }), (0, r.jsxs)("div", {
          className: c.actions,
          children: [null != f && (0, r.jsx)(i.zxk, {
            className: c.resetButton,
            size: i.zxk.Sizes.SMALL,
            color: i.zxk.Colors.PRIMARY,
            look: i.zxk.Looks.LINK,
            onClick: f,
            children: (0, r.jsx)("span", {
              children: null != b ? b : a.intl.string(a.t.yBZMsb)
            })
          }), null != p ? (0, r.jsx)(i.ua7, {
            text: h,
            children: e => {
              var t, n;
              return (0, r.jsx)(i.zxk, (t = function(e) {
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
                size: i.zxk.Sizes.SMALL,
                color: null != m ? m : i.zxk.Colors.GREEN,
                submitting: d,
                disabled: v,
                onClick: p
              }, e), n = n = {
                children: null != g ? g : a.intl.string(a.t.K344S0)
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