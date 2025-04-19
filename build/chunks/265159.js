/** Chunk was on 55183 **/
r.d(t, {
  Z: () => o
});
var n = r(200651);
r(192379);
var i = r(481060),
  l = r(981631);

function o() {
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await r.e("38047").then(r.bind(r, 975863));
    return t => {
      var r, i;
      return (0, n.jsx)(e, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({}, t), i = i = {
        source: {
          page: l.ZY5.USER_SETTINGS,
          section: l.jXE.SETTINGS_CUSTOMIZE_PROFILE,
          object: l.qAy.BUTTON_CTA,
          type: l.Qqv.BUY
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r))
    }
  })
}