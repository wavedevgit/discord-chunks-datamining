/** Chunk was on 5945 **/
n.d(t, {
  j: () => c
});
var r = n(200651);
n(192379);
var l = n(120356),
  a = n.n(l),
  o = n(481060),
  i = n(482450);

function c(e) {
  let {
    pills: t,
    pillClassName: n
  } = e;
  return (0, r.jsx)("div", {
    className: i.container,
    children: t.map(e => (0, r.jsx)(o.ua7, {
      text: e.tooltipText,
      shouldShow: null != e.tooltipText,
      children: t => {
        var l, c;
        return (0, r.jsx)(o.P3F, (l = function(e) {
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
        }({}, t), c = c = {
          className: a()(i.pill, {
            [i.disabled]: e.disabled
          }, n),
          onClick: e.onClick,
          children: (0, r.jsx)(o.Text, {
            tag: "span",
            variant: "text-sm/medium",
            color: "interactive-normal",
            children: e.text
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(c)).forEach(function(e) {
          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e))
        }), l))
      }
    }, e.text))
  })
}