/** Chunk was on 75708 **/
/** chunk id: 960412, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y7: () => c,
  oc: () => u,
  pR: () => d
});
var Chunk990547 = require("./990547.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk573261 = require("./573261.js"),
  Chunk930441 = require("./930441.js"),
  Chunk981631 = require("./981631.js");
async function c() {
  try {
    let e = await Chunk573261.Z.get({
      url: Chunk981631.ANM.EMAIL_SETTINGS,
      trackedActionData: {
        event: Chunk990547.NetworkActionNames.EMAIL_SETTINGS_FETCH,
        properties: e => {
          var t;
          let n = null == e || null == (t = e.body) ? true : t.initialized;
          return (0, r.iG)({
            initialized: n
          })
        }
      },
      rejectWithError: true
    });
    return Chunk570140.Z.dispatch({
      type: "EMAIL_SETTINGS_FETCH_SUCCESS",
      settings: module.body
    }), module.body
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "EMAIL_SETTINGS_FETCH_FAILURE"
    })
  }
}
async function d(e, t) {
  s.Z.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: {
      [e]: t
    }
  });
  try {
    let n = await a.Z.patch({
      url: o.ANM.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: {
            [e]: t
          }
        }
      },
      trackedActionData: {
        event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: e,
          value: t
        }
      },
      rejectWithError: true
    });
    s.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: n.body
    })
  } catch (e) {
    s.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
async function u() {
  let e = Chunk930441.M0.reduce((e, t) => {
    var n, i;
    return n = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, e), i = i = {
      [t]: false
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n
  }, {});
  Chunk570140.Z.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: module
  });
  try {
    let t = await Chunk573261.Z.patch({
      url: Chunk981631.ANM.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: module
        }
      },
      trackedActionData: {
        event: Chunk990547.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: "marketing",
          value: false
        }
      },
      rejectWithError: true
    });
    Chunk570140.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: exports.body
    })
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}