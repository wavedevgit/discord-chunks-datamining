/** Chunk was on web.js **/
/** chunk id: 960412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y7: () => p,
  oc: () => m,
  pR: () => _
});
var Chunk990547 = require("./990547.js"),
  Chunk283693 = require("./283693.js"),
  Chunk570140 = require("./570140.js"),
  Chunk573261 = require("./573261.js"),
  Chunk930441 = require("./930441.js"),
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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function p() {
  try {
    let e = await Chunk573261.Z.get({
      url: Chunk981631.ANM.EMAIL_SETTINGS,
      trackedActionData: {
        event: Chunk990547.NetworkActionNames.EMAIL_SETTINGS_FETCH,
        properties: e => {
          var t;
          let n = null == e || null == (t = e.body) ? true : t.initialized;
          return (0, i.iG)({
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
async function _(e, t) {
  o.Z.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: {
      [e]: t
    }
  });
  try {
    let n = await a.Z.patch({
      url: l.ANM.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: {
            [e]: t
          }
        }
      },
      trackedActionData: {
        event: r.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: e,
          value: t
        }
      },
      rejectWithError: true
    });
    o.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: n.body
    })
  } catch (e) {
    o.Z.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
async function m() {
  let e = Chunk930441.M0.reduce((e, t) => f(u({}, e), {
    [t]: false
  }), {});
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