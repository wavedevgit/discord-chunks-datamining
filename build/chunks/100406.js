/** Chunk was on web.js **/
/** chunk id: 100406, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CA: () => _,
  NI: () => h,
  cR: () => p
});
var Chunk110259 = require("./110259.js"),
  Chunk933681 = require("./933681.js"),
  Chunk73153 = require("./73153.js"),
  Chunk499785 = require("./499785.js"),
  Chunk431144 = require("./431144.js"),
  Chunk652215 = require("./652215.js");

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
    let e = await s.A.get({
      url: l.Rsh.EMAIL_SETTINGS,
      trackedActionData: {
        event: r.NetworkActionNames.EMAIL_SETTINGS_FETCH,
        properties: e => {
          var t;
          let n = null == e || null == (t = e.body) ? true : t.initialized;
          return (0, i.e0)({
            initialized: n
          })
        }
      },
      rejectWithError: true
    });
    return a.h.dispatch({
      type: "EMAIL_SETTINGS_FETCH_SUCCESS",
      settings: e.body
    }), e.body
  } catch (e) {
    a.h.dispatch({
      type: "EMAIL_SETTINGS_FETCH_FAILURE"
    })
  }
}
async function _(e, t) {
  a.h.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: {
      [e]: t
    }
  });
  try {
    let n = await s.A.patch({
      url: l.Rsh.EMAIL_SETTINGS,
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
    a.h.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: n.body
    })
  } catch (e) {
    a.h.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
async function h() {
  let e = o.Zk.reduce((e, t) => f(u({}, e), {
    [t]: false
  }), {});
  a.h.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: e
  });
  try {
    let t = await s.A.patch({
      url: l.Rsh.EMAIL_SETTINGS,
      body: {
        settings: {
          categories: e
        }
      },
      trackedActionData: {
        event: r.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
        properties: {
          category: "marketing",
          value: false
        }
      },
      rejectWithError: true
    });
    a.h.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: t.body
    })
  } catch (e) {
    a.h.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}