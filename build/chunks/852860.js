/** Chunk was on 97365 **/
n.d(t, {
  Z: () => d
}), n(47120);
var r = n(200651),
  a = n(192379),
  i = n(481060),
  o = n(585483),
  l = n(981631),
  s = n(388032),
  c = n(82434);
let d = function(e) {
  var t;
  let {
    message: n,
    errorMessage: d,
    submitting: u,
    onReset: m,
    onSave: _,
    onSaveText: f,
    onResetText: b,
    onSaveButtonColor: x,
    disabled: g,
    saveButtonTooltip: p
  } = e, v = a.useRef(null), [h, C] = a.useState(!1);
  return a.useEffect(() => {
    function e() {
      C(!0), setTimeout(() => C(!1), 1e3)
    }
    return o.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e), () => {
      o.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, r.jsx)("div", {
    className: c.container,
    "data-emphasized": h,
    children: (0, r.jsx)("div", {
      className: c.flexContainer,
      ref: v,
      children: (0, r.jsxs)(i.JcV, {
        containerRef: v,
        children: [(0, r.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, r.jsx)("div", {
            className: c.message,
            children: null !== (t = null != d ? d : n) && void 0 !== t ? t : s.NW.string(s.t.GP7JLC)
          })
        }), (0, r.jsxs)("div", {
          className: c.actions,
          children: [null != m && (0, r.jsx)(i.zxk, {
            className: c.resetButton,
            size: i.zxk.Sizes.SMALL,
            color: i.zxk.Colors.PRIMARY,
            look: i.zxk.Looks.LINK,
            onClick: m,
            children: (0, r.jsx)("span", {
              children: null != b ? b : s.NW.string(s.t.yBZMsb)
            })
          }), null != _ ? (0, r.jsx)(i.ua7, {
            text: p,
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
                color: null != x ? x : i.zxk.Colors.GREEN,
                submitting: u,
                disabled: g,
                onClick: _
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