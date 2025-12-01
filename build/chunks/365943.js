/** Chunk was on 837 **/
/** chunk id: 365943, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => m
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk479531 = require("./479531.js"),
  Chunk411700 = require("./411700.js"),
  Chunk706454 = require("./706454.js"),
  Chunk594174 = require("./594174.js"),
  Chunk25251 = require("./25251.js"),
  Chunk981631 = require("./981631.js");
let u = e => {
    var {
      sku_id: t
    } = e;
    return function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
          var a;
          a = n[t], t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = a
        })
      }
      return e
    }({
      skuId: t
    }, function(e, t) {
      if (null == e) return {};
      var n, a, l = function(e, t) {
        if (null == e) return {};
        var n, a, l = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["sku_id"]))
  },
  m = async function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    if (!Chunk25251.Z.isFetchingAll && (module || Chunk25251.Z.canFetchAll())) {
      Chunk570140.Z.dispatch({
        type: "PROFILE_EFFECTS_FETCH_ALL"
      });
      try {
        var t, n, m;
        let e = {
          locale: Chunk706454.default.locale
        };
        (null == (t = Chunk594174.default.getCurrentUser()) ? true : exports.isStaff()) && (module.with_unpublished = true);
        let {
          body: i
        } = await Chunk544891.tn.get({
          url: Chunk981631.ANM.USER_PROFILE_EFFECTS,
          rejectWithError: true,
          query: module
        });
        Chunk570140.Z.dispatch({
          type: "PROFILE_EFFECTS_FETCH_ALL_SUCCESS",
          configs: null != (m = null == Chunk479531 || null == (n = Chunk479531.profile_effect_configs) ? true : require.map(u)) ? m : []
        })
      } catch (t) {
        let e = new Chunk479531.Z(exports);
        (0, Chunk411700.G)(module), Chunk570140.Z.dispatch({
          type: "PROFILE_EFFECTS_FETCH_ALL_FAILURE",
          apiError: module
        })
      }
    }
  }