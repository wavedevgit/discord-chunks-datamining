/** Chunk was on 77025 **/
n.d(t, {
  Z: () => d
}), n(388685);
var r = n(255367),
  i = n(73800),
  l = n(755721),
  o = n(481060),
  s = n(585483),
  a = n(981631),
  c = n(388032),
  u = n(744053);
let d = function(e) {
  var t;
  let {
    message: n,
    errorMessage: d,
    submitting: m,
    onReset: f,
    onSave: h,
    onSaveText: p,
    onResetText: b,
    onSaveButtonColor: g,
    disabled: x,
    saveButtonTooltip: j
  } = e, v = i.useRef(null), [_, O] = i.useState(!1);
  return i.useEffect(() => {
    function e() {
      O(!0), setTimeout(() => O(!1), 1e3)
    }
    return s.S.subscribe(a.CkL.EMPHASIZE_NOTICE, e), () => {
      s.S.unsubscribe(a.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: u.container,
    "data-emphasized": _,
    children: (0, r.jsx)("div", {
      className: u.flexContainer,
      ref: v,
      children: (0, r.jsxs)(o.JcV, {
        containerRef: v,
        children: [(0, r.jsx)("div", {
          className: u.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: u.message,
            children: null != (t = null != d ? d : n) ? t : c.intl.string(c.t.GP7JLC)
          })
        }), (0, r.jsxs)("div", {
          className: u.actions,
          children: [null != f && (0, r.jsx)(l.zx, {
            className: u.resetButton,
            size: l.zx.Sizes.SMALL,
            color: l.zx.Colors.PRIMARY,
            look: l.zx.Looks.LINK,
            onClick: f,
            children: (0, r.jsx)("span", {
              children: null != b ? b : c.intl.string(c.t.yBZMsb)
            })
          }), null != h ? (0, r.jsx)(o.ua7, {
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
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[t] = r
                  })
                }
                return e
              }({
                size: l.zx.Sizes.SMALL,
                color: null != g ? g : l.zx.Colors.GREEN,
                submitting: m,
                disabled: x,
                onClick: h
              }, e), n = n = {
                children: null != p ? p : c.intl.string(c.t.K344S0)
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