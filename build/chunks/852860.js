/** Chunk was on 77025 **/
n.d(t, {
  Z: () => u
}), n(388685);
var r = n(200651),
  i = n(192379),
  l = n(481060),
  o = n(585483),
  s = n(981631),
  a = n(388032),
  c = n(744053);
let u = function(e) {
  var t;
  let {
    message: n,
    errorMessage: u,
    submitting: d,
    onReset: m,
    onSave: f,
    onSaveText: h,
    onResetText: p,
    onSaveButtonColor: b,
    disabled: g,
    saveButtonTooltip: x
  } = e, j = i.useRef(null), [v, _] = i.useState(!1);
  return i.useEffect(() => {
    function e() {
      _(!0), setTimeout(() => _(!1), 1e3)
    }
    return o.S.subscribe(s.CkL.EMPHASIZE_NOTICE, e), () => {
      o.S.unsubscribe(s.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: c.container,
    "data-emphasized": v,
    children: (0, r.jsx)("div", {
      className: c.flexContainer,
      ref: j,
      children: (0, r.jsxs)(l.JcV, {
        containerRef: j,
        children: [(0, r.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: c.message,
            children: null != (t = null != u ? u : n) ? t : a.intl.string(a.t.GP7JLC)
          })
        }), (0, r.jsxs)("div", {
          className: c.actions,
          children: [null != m && (0, r.jsx)(l.zxk, {
            className: c.resetButton,
            size: l.zxk.Sizes.SMALL,
            color: l.zxk.Colors.PRIMARY,
            look: l.zxk.Looks.LINK,
            onClick: m,
            children: (0, r.jsx)("span", {
              children: null != p ? p : a.intl.string(a.t.yBZMsb)
            })
          }), null != f ? (0, r.jsx)(l.ua7, {
            text: x,
            children: e => {
              var t, n;
              return (0, r.jsx)(l.zxk, (t = function(e) {
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
                size: l.zxk.Sizes.SMALL,
                color: null != b ? b : l.zxk.Colors.GREEN,
                submitting: d,
                disabled: g,
                onClick: f
              }, e), n = n = {
                children: null != h ? h : a.intl.string(a.t.K344S0)
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