/** Chunk was on 2827 **/
/** chunk id: 100406, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CA: () => d,
  NI: () => u,
  cR: () => c
});
var Chunk110259 = require("./110259.js"),
  Chunk933681 = require("./933681.js"),
  Chunk73153 = require("./73153.js"),
  Chunk499785 = require("./499785.js"),
  Chunk431144 = require("./431144.js"),
  Chunk652215 = require("./652215.js");
async function c() {
  try {
    let e = await s.A.get({
      url: o.Rsh.EMAIL_SETTINGS,
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
    return l.h.dispatch({
      type: "EMAIL_SETTINGS_FETCH_SUCCESS",
      settings: e.body
    }), e.body
  } catch (e) {
    l.h.dispatch({
      type: "EMAIL_SETTINGS_FETCH_FAILURE"
    })
  }
}
async function d(e, t) {
  l.h.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: {
      [e]: t
    }
  });
  try {
    let n = await s.A.patch({
      url: o.Rsh.EMAIL_SETTINGS,
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
    l.h.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: n.body
    })
  } catch (e) {
    l.h.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}
async function u() {
  let e = a.Zk.reduce((e, t) => {
    var n, r;
    return n = function(e) {
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
    }({}, e), r = r = {
      [t]: false
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n
  }, {});
  l.h.dispatch({
    type: "EMAIL_SETTINGS_UPDATE",
    updates: e
  });
  try {
    let t = await s.A.patch({
      url: o.Rsh.EMAIL_SETTINGS,
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
    l.h.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_SUCCESS",
      settings: t.body
    })
  } catch (e) {
    l.h.dispatch({
      type: "EMAIL_SETTINGS_UPDATE_FAILURE"
    })
  }
}