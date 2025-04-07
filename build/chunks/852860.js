/** Chunk was on 88953 **/
n.d(t, {
  Z: () => d
}), n(388685);
var r = n(200651),
  l = n(192379),
  o = n(481060),
  a = n(585483),
  i = n(981631),
  s = n(388032),
  c = n(744053);
let d = function(e) {
  var t;
  let {
    message: n,
    errorMessage: d,
    submitting: u,
    onReset: m,
    onSave: h,
    onSaveText: f,
    onResetText: x,
    onSaveButtonColor: p,
    disabled: _,
    saveButtonTooltip: g
  } = e, N = l.useRef(null), [v, b] = l.useState(!1);
  return l.useEffect(() => {
    function e() {
      b(!0), setTimeout(() => b(!1), 1e3)
    }
    return a.S.subscribe(i.CkL.EMPHASIZE_NOTICE, e), () => {
      a.S.unsubscribe(i.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: c.container,
    "data-emphasized": v,
    children: (0, r.jsx)("div", {
      className: c.flexContainer,
      ref: N,
      children: (0, r.jsxs)(o.JcV, {
        containerRef: N,
        children: [(0, r.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: c.message,
            children: null != (t = null != d ? d : n) ? t : s.NW.string(s.t.GP7JLC)
          })
        }), (0, r.jsxs)("div", {
          className: c.actions,
          children: [null != m && (0, r.jsx)(o.zxk, {
            className: c.resetButton,
            size: o.zxk.Sizes.SMALL,
            color: o.zxk.Colors.PRIMARY,
            look: o.zxk.Looks.LINK,
            onClick: m,
            children: (0, r.jsx)("span", {
              children: null != x ? x : s.NW.string(s.t.yBZMsb)
            })
          }), null != h ? (0, r.jsx)(o.ua7, {
            text: g,
            children: e => {
              var t, n;
              return (0, r.jsx)(o.zxk, (t = function(e) {
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
                size: o.zxk.Sizes.SMALL,
                color: null != p ? p : o.zxk.Colors.GREEN,
                submitting: u,
                disabled: _,
                onClick: h
              }, e), n = n = {
                children: null != f ? f : s.NW.string(s.t.K344S0)
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