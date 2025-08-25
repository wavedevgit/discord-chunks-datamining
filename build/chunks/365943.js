/** Chunk was on web.js **/
/** chunk id: 365943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => p
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk479531 = require("./479531.js"),
  Chunk411700 = require("./411700.js"),
  Chunk25251 = require("./25251.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let _ = e => {
    var {
      sku_id: t
    } = e;
    return u({
      skuId: t
    }, d(e, ["sku_id"]))
  },
  p = async function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    if (!Chunk25251.Z.isFetchingAll && (module || Chunk25251.Z.canFetchAll())) {
      Chunk570140.Z.dispatch({
        type: "PROFILE_EFFECTS_FETCH_ALL"
      });
      try {
        var t, n;
        let {
          body: e
        } = await Chunk544891.tn.get({
          url: Chunk981631.ANM.USER_PROFILE_EFFECTS,
          rejectWithError: true
        });
        Chunk570140.Z.dispatch({
          type: "PROFILE_EFFECTS_FETCH_ALL_SUCCESS",
          configs: null != (n = null == module || null == (t = module.profile_effect_configs) ? true : exports.map(_)) ? require : []
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