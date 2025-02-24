/** Chunk was on 11663 (8c1c93f177bd9f10.js) **/
let r, i;
n.d(t, {
  Z: () => _
});
var l = n(200651);
n(192379);
var o = n(481060),
  a = n(570140),
  s = n(341382),
  c = n(981631);
let u = null;

function d(e) {
  null != r && e ? r() : null != i && i(), r = null, i = null
}
let _ = {
  init() {
    a.Z.subscribe("PREMIUM_REQUIRED_MODAL_OPEN", e => {
      if (d(!1), u = e.context, r = e.resolve, i = e.reject, c.e3s === e.context) {
        let e;
        e = !1, (0, o.ZDy)(async () => {
          let {
            default: t
          } = await n.e("29393").then(n.bind(n, 134817));
          return n => {
            var r, i, {
                onClose: o
              } = n,
              a = function(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                  if (null == e) return {};
                  var n, r, i = {},
                    l = Object.keys(e);
                  for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                  return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
              }(n, ["onClose"]);
            return (0, l.jsx)(t, (r = function(e) {
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
            }({}, a), i = i = {
              onClose: t => {
                e = t, o()
              }
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(i)).forEach(function(e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
            }), r))
          }
        }, {
          onCloseCallback: () => {
            (0, s.M)(e)
          }
        })
      }
    }), a.Z.subscribe("PREMIUM_REQUIRED_MODAL_CLOSE", e => {
      let {
        shouldContinue: t
      } = e;
      u = null, d(t)
    }), a.Z.subscribe("OVERLAY_SET_INPUT_LOCKED", e => {
      let {
        locked: t
      } = e;
      t && null != u && (u = null, d(!1))
    })
  }
}