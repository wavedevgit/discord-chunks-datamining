/** Chunk was on 83500 **/
n.d(t, {
  Z: () => d
}), n(47120);
var i = n(200651),
  r = n(192379),
  l = n(481060),
  a = n(585483),
  o = n(981631),
  s = n(388032),
  c = n(82434);
let d = function(e) {
  var t;
  let {
    message: n,
    errorMessage: d,
    submitting: u,
    onReset: f,
    onSave: m,
    onSaveText: _,
    onResetText: v,
    onSaveButtonColor: g,
    disabled: h,
    saveButtonTooltip: p
  } = e, I = r.useRef(null), [E, b] = r.useState(!1);
  return r.useEffect(() => {
    function e() {
      b(!0), setTimeout(() => b(!1), 1e3)
    }
    return a.S.subscribe(o.CkL.EMPHASIZE_NOTICE, e), () => {
      a.S.unsubscribe(o.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, i.jsx)("div", {
    className: c.container,
    "data-emphasized": E,
    children: (0, i.jsx)("div", {
      className: c.flexContainer,
      ref: I,
      children: (0, i.jsxs)(l.JcV, {
        containerRef: I,
        children: [(0, i.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, i.jsx)("div", {
            className: c.message,
            children: null !== (t = null != d ? d : n) && void 0 !== t ? t : s.NW.string(s.t.GP7JLC)
          })
        }), (0, i.jsxs)("div", {
          className: c.actions,
          children: [null != f && (0, i.jsx)(l.zxk, {
            className: c.resetButton,
            size: l.zxk.Sizes.SMALL,
            color: l.zxk.Colors.PRIMARY,
            look: l.zxk.Looks.LINK,
            onClick: f,
            children: (0, i.jsx)("span", {
              children: null != v ? v : s.NW.string(s.t.yBZMsb)
            })
          }), null != m ? (0, i.jsx)(l.ua7, {
            text: p,
            children: e => {
              var t, n;
              return (0, i.jsx)(l.zxk, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), i.forEach(function(t) {
                    var i;
                    i = n[t], t in e ? Object.defineProperty(e, t, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[t] = i
                  })
                }
                return e
              }({
                size: l.zxk.Sizes.SMALL,
                color: null != g ? g : l.zxk.Colors.GREEN,
                submitting: u,
                disabled: h,
                onClick: m
              }, e), n = n = {
                children: null != _ ? _ : s.NW.string(s.t.K344S0)
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