/** Chunk was on 88261 **/
n.d(t, {
  Z: () => u
}), n(388685);
var r = n(200651),
  i = n(192379),
  l = n(481060),
  a = n(585483),
  o = n(981631),
  s = n(388032),
  c = n(744053);
let u = function(e) {
  var t;
  let {
    message: n,
    errorMessage: u,
    submitting: d,
    onReset: f,
    onSave: m,
    onSaveText: _,
    onResetText: p,
    onSaveButtonColor: h,
    disabled: b,
    saveButtonTooltip: g
  } = e, x = i.useRef(null), [v, C] = i.useState(!1);
  return i.useEffect(() => {
    function e() {
      C(!0), setTimeout(() => C(!1), 1e3)
    }
    return a.S.subscribe(o.CkL.EMPHASIZE_NOTICE, e), () => {
      a.S.unsubscribe(o.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: c.container,
    "data-emphasized": v,
    children: (0, r.jsx)("div", {
      className: c.flexContainer,
      ref: x,
      children: (0, r.jsxs)(l.JcV, {
        containerRef: x,
        children: [(0, r.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: c.message,
            children: null != (t = null != u ? u : n) ? t : s.NW.string(s.t.GP7JLC)
          })
        }), (0, r.jsxs)("div", {
          className: c.actions,
          children: [null != f && (0, r.jsx)(l.zxk, {
            className: c.resetButton,
            size: l.zxk.Sizes.SMALL,
            color: l.zxk.Colors.PRIMARY,
            look: l.zxk.Looks.LINK,
            onClick: f,
            children: (0, r.jsx)("span", {
              children: null != p ? p : s.NW.string(s.t.yBZMsb)
            })
          }), null != m ? (0, r.jsx)(l.ua7, {
            text: g,
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
                color: null != h ? h : l.zxk.Colors.GREEN,
                submitting: d,
                disabled: b,
                onClick: m
              }, e), n = n = {
                children: null != _ ? _ : s.NW.string(s.t.K344S0)
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