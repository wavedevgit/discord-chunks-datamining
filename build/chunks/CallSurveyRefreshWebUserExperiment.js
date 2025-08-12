/** Chunk was on 47270 **/
/** chunk id: 891802, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => c
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), o.forEach(function(t) {
      var o;
      o = n[t], t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = o
    })
  }
  return e
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      n.push.apply(n, o)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let a = {
    showFormStyleSurvey: false,
    hideNeutralOption: false,
    showVibesHoneypot: false
  },
  s = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-02_call_survey_refresh_web",
    label: "Call Survey Refresh (Web)",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "Show form-style survey without neutral",
      config: l(i({}, a), {
        showFormStyleSurvey: true,
        hideNeutralOption: true
      })
    }, {
      id: 2,
      label: "Show survey without neutral",
      config: l(i({}, a), {
        hideNeutralOption: true
      })
    }, {
      id: 3,
      label: "Show survey without neutral, and with vibes honeypot",
      config: l(i({}, a), {
        hideNeutralOption: true,
        showVibesHoneypot: true
      })
    }]
  });

function c(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: o
  } = r.Y.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return s.useExperiment({
    location: t
  }, {
    disable: o,
    autoTrackExposure: n
  })
}