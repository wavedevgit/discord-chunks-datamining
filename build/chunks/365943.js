/** Chunk was on web.js **/
/** chunk id: 365943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => h
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk479531 = require("./479531.js"),
  Chunk411700 = require("./411700.js"),
  Chunk706454 = require("./706454.js"),
  Chunk594174 = require("./594174.js"),
  Chunk25251 = require("./25251.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = e => {
    var {
      sku_id: t
    } = e;
    return f({
      skuId: t
    }, p(e, ["sku_id"]))
  },
  h = async function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    if (!Chunk25251.Z.isFetchingAll && (module || Chunk25251.Z.canFetchAll())) {
      Chunk570140.Z.dispatch({
        type: "PROFILE_EFFECTS_FETCH_ALL"
      });
      try {
        var t, n, d;
        let e = {
          locale: Chunk706454.default.locale
        };
        (null == (t = Chunk594174.default.getCurrentUser()) ? true : exports.isStaff()) && (module.with_unpublished = true);
        let {
          body: a
        } = await Chunk544891.tn.get({
          url: Chunk981631.ANM.USER_PROFILE_EFFECTS,
          rejectWithError: true,
          query: module
        });
        Chunk570140.Z.dispatch({
          type: "PROFILE_EFFECTS_FETCH_ALL_SUCCESS",
          configs: null != (d = null == Chunk479531 || null == (n = Chunk479531.profile_effect_configs) ? true : require.map(m)) ? d : []
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