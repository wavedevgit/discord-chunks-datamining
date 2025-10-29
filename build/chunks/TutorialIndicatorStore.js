/** Chunk was on 88647 **/
/** chunk id: 10401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var r, Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk38618 = require("./38618.js"),
  Chunk268967 = require("./268967.js"),
  Chunk188785 = require("./188785.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = {},
  h = {},
  m = true,
  g = {},
  b = false;

function _() {
  if (g = {}, !m)
    for (let [e, t] of Object.entries(Chunk268967.Z)) {
      let n = false !== f[module];
      if (g[module] = require, require && null != exports.prerequisites)
        for (let n of exports.prerequisites) false !== f[require] && (g[module] = false)
    }
}
class y extends(r = Chunk442837.ZP.Store) {
  initialize() {
    _(), this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(Chunk38618.Z)
  }
  shouldShow(e) {
    return !(!b || m || c.a || i.tq && ["writing-messages", "organize-by-topic"].includes(e)) && (g[e] || false)
  }
  shouldShowAnyIndicators() {
    return !m
  }
  getIndicators() {
    return h
  }
  getData() {
    return Chunk268967.Z
  }
  getDefinition(e) {
    let t = this.getData();
    return null != t ? t[e] : null
  }
}
u(y, "displayName", "TutorialIndicatorStore");
let C = new y(Chunk570140.Z, {
  CONNECTION_OPEN: function(e) {
    let {
      tutorial: t
    } = e;
    b = true, m = true, f = {}, null != t && (m = t.indicators_suppressed, t.indicators_confirmed.forEach(e => f[e] = false)), _()
  },
  CONNECTION_CLOSED: function() {
    b = false
  },
  TUTORIAL_INDICATOR_DISMISS: function(e) {
    f = p(d({}, f), {
      [e.tutorialId]: false
    }), h = d({}, h), delete h[e.tutorialId], _()
  },
  TUTORIAL_INDICATOR_SHOW: function(e) {
    h = p(d({}, h), {
      [e.tutorialId]: e.renderData
    })
  },
  TUTORIAL_INDICATOR_HIDE: function(e) {
    h = d({}, h), delete h[e.tutorialId]
  },
  TUTORIAL_INDICATOR_SUPPRESS_ALL: function() {
    m = true
  }
})