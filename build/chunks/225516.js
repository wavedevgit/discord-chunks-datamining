/** Chunk was on 55849 **/
n.d(t, {
  N: () => s
});
var r = n(544891),
  l = n(570140),
  a = n(881052),
  i = n(482207),
  o = n(981631);
async function s() {
  if (i.Z.shouldFetch) {
    l.Z.dispatch({
      type: "RECENT_AVATARS_FETCH_START"
    });
    try {
      let e = await r.tn.get({
        url: o.ANM.RECENT_AVATARS,
        rejectWithError: !0
      });
      l.Z.dispatch({
        type: "RECENT_AVATARS_FETCH_SUCCESS",
        avatars: e.body.avatars.map(e => {
          var t, n, {
              storage_hash: r
            } = e,
            l = function(e, t) {
              if (null == e) return {};
              var n, r, l = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                  a = Object.keys(e);
                for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
                return l
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
              }
              return l
            }(e, ["storage_hash"]);
          return t = function(e) {
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
          }({}, l), n = {
            storageHash: r
          }, n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t
        })
      })
    } catch (e) {
      l.Z.dispatch({
        type: "RECENT_AVATARS_FETCH_FAILURE",
        error: new a.Hx(e)
      })
    }
  }
}