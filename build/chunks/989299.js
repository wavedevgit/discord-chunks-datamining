/** Chunk was on 53653 **/
/** chunk id: 989299, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  I: () => f,
  O: () => d
});
var Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk198982 = require("./198982.js"),
  Chunk218727 = require("./218727.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
async function f() {
  if (o.A.shouldFetch) {
    a.h.dispatch({
      type: "RECENT_AVATARS_FETCH_START"
    });
    try {
      let e = await n.Bo.get({
        url: c.Rsh.RECENT_AVATARS,
        rejectWithError: true
      });
      a.h.dispatch({
        type: "RECENT_AVATARS_FETCH_SUCCESS",
        avatars: e.body.avatars.map(e => {
          var t, r;
          let {
            storage_hash: n
          } = e, l = function(e, t) {
            if (null == e) return {};
            var r, n, l, a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
              return a
            }
            if (a = function(e, t) {
                if (null == e) return {};
                var r, n, l = {},
                  a = Object.getOwnPropertyNames(e);
                for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l
              }(e, t), Object.getOwnPropertySymbols)
              for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a
          }(e, ["storage_hash"]);
          return t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, l), r = {
            storageHash: n
          }, r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }), t
        })
      })
    } catch (e) {
      a.h.dispatch({
        type: "RECENT_AVATARS_FETCH_FAILURE",
        error: new s.LG(e)
      })
    }
  }
}
async function d(e) {
  try {
    await n.Bo.del({
      url: c.Rsh.RECENT_AVATARS_DELETE(e),
      rejectWithError: true
    }), await a.h.dispatch({
      type: "RECENT_AVATAR_DELETE",
      avatarId: e
    }), l.ORC.announce(u.intl.string(u.t.YJPieI))
  } catch (e) {
    i.A.show({
      title: u.intl.string(u.t.iufib1),
      body: u.intl.string(u.t["/ZNT+0"])
    })
  }
}