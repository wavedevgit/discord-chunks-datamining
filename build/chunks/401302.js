/** Chunk was on web.js **/
/** chunk id: 401302, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      r(e, t, n[t])
    })
  }
  return e
}

function a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
require.d(exports, {
  H: () => s
}), require("./388685.js");
let s = (0, require("./191336.js").U)((e, t) => ({
  responses: {},
  displayedQuestions: {},
  setResponse: (t, n, r) => {
    e(e => ({
      responses: o(i({}, e.responses), {
        [t]: o(i({}, e.responses[t]), {
          [n]: r
        })
      })
    }))
  },
  getSurveyResponses: e => {
    var n;
    return null != (n = t().responses[e]) ? n : {}
  },
  clearSurveyResponses: t => {
    e(e => {
      let n = i({}, e.responses);
      delete n[t];
      let r = i({}, e.displayedQuestions);
      return delete r[t], {
        responses: n,
        displayedQuestions: r
      }
    })
  },
  trackDisplayedQuestions: (t, n) => {
    e(e => {
      var r;
      let a = new Set(null != (r = e.displayedQuestions[t]) ? r : new Set);
      return n.forEach(e => a.add(e)), {
        displayedQuestions: o(i({}, e.displayedQuestions), {
          [t]: a
        })
      }
    })
  },
  getDisplayedQuestions: e => {
    let n = t().displayedQuestions[e];
    return null != n ? Array.from(n) : []
  }
}))