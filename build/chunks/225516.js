/** Chunk was on 89289 **/
/** chunk id: 225516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => f,
  N: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk881052 = require("./881052.js"),
  Chunk482207 = require("./482207.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function d() {
  if (Chunk482207.Z.shouldFetch) {
    Chunk570140.Z.dispatch({
      type: "RECENT_AVATARS_FETCH_START"
    });
    try {
      let e = await Chunk544891.tn.get({
        url: Chunk981631.ANM.RECENT_AVATARS,
        rejectWithError: true
      });
      Chunk570140.Z.dispatch({
        type: "RECENT_AVATARS_FETCH_SUCCESS",
        avatars: module.body.avatars.map(e => {
          var t, n, {
              storage_hash: r
            } = e,
            a = function(e, t) {
              if (null == e) return {};
              var n, r, a = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                  l = Object.keys(e);
                for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                return a
              }(e, t);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
              }
              return a
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
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, a), n = {
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
      Chunk570140.Z.dispatch({
        type: "RECENT_AVATARS_FETCH_FAILURE",
        error: new Chunk881052.Hx(module)
      })
    }
  }
}
async function f(e) {
  try {
    await r.tn.del({
      url: c.ANM.RECENT_AVATARS_DELETE(e),
      rejectWithError: true
    }), await l.Z.dispatch({
      type: "RECENT_AVATAR_DELETE",
      avatarId: e
    }), a.uvj.announce(u.intl.string(u.t.YJPieI))
  } catch (e) {
    i.Z.show({
      title: u.intl.string(u.t.iufib1),
      body: u.intl.string(u.t["/ZNT+0"])
    })
  }
}