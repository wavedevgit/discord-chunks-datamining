/** Chunk was on 73628 **/
r.d(t, {
  Z: () => c
}), r(47120);
var A = r(200651),
  n = r(192379),
  o = r(481060),
  a = r(585483),
  l = r(981631),
  i = r(388032),
  s = r(266911);
let c = function(e) {
  var t;
  let {
    message: r,
    errorMessage: c,
    submitting: d,
    onReset: u,
    onSave: f,
    onSaveText: g,
    onResetText: p,
    onSaveButtonColor: m,
    disabled: h,
    saveButtonTooltip: b
  } = e, v = n.useRef(null), [C, q] = n.useState(!1);
  return n.useEffect(() => {
    function e() {
      q(!0), setTimeout(() => q(!1), 1e3)
    }
    return a.S.subscribe(l.CkL.EMPHASIZE_NOTICE, e), () => {
      a.S.unsubscribe(l.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, A.jsx)("div", {
    className: s.container,
    "data-emphasized": C,
    children: (0, A.jsx)("div", {
      className: s.flexContainer,
      ref: v,
      children: (0, A.jsxs)(o.JcV, {
        containerRef: v,
        children: [(0, A.jsx)("div", {
          className: s.shrinkingContainer,
          children: (0, A.jsx)("div", {
            className: s.message,
            children: null !== (t = null != c ? c : r) && void 0 !== t ? t : i.NW.string(i.t.GP7JLC)
          })
        }), (0, A.jsxs)("div", {
          className: s.actions,
          children: [null != u && (0, A.jsx)(o.zxk, {
            className: s.resetButton,
            size: o.zxk.Sizes.SMALL,
            color: o.zxk.Colors.PRIMARY,
            look: o.zxk.Looks.LINK,
            onClick: u,
            children: (0, A.jsx)("span", {
              children: null != p ? p : i.NW.string(i.t.yBZMsb)
            })
          }), null != f ? (0, A.jsx)(o.ua7, {
            text: b,
            children: e => {
              var t, r;
              return (0, A.jsx)(o.zxk, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    A = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols && (A = A.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                  }))), A.forEach(function(t) {
                    var A;
                    A = r[t], t in e ? Object.defineProperty(e, t, {
                      value: A,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[t] = A
                  })
                }
                return e
              }({
                size: o.zxk.Sizes.SMALL,
                color: null != m ? m : o.zxk.Colors.GREEN,
                submitting: d,
                disabled: h,
                onClick: f
              }, e), r = r = {
                children: null != g ? g : i.NW.string(i.t.K344S0)
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var A = Object.getOwnPropertySymbols(e);
                  r.push.apply(r, A)
                }
                return r
              })(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
              }), t))
            }
          }) : null]
        })]
      })
    })
  })
}