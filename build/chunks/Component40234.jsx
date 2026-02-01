/** Chunk was on 21738 **/
/** chunk id: 40234, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk377802 = require("./377802.jsx"),
  Chunk956793 = require("./956793.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk707592 = require("./707592.jsx"),
  Chunk132860 = require("./132860.js"),
  Chunk993838 = require("./993838.jsx"),
  Chunk106044 = require("./106044.js"),
  Chunk42473 = require("./42473.jsx"),
  Chunk985018 = require("./985018.jsx");

function g(e) {
  var t, n;
  let {
    tooltipText: l,
    onClick: o
  } = e, {
    parentAnalyticsLocation: c
  } = (0, a.Ay)(), {
    events: u,
    Component: d
  } = (0, i.O)();
  return (0, r.jsx)(p.A, (t = function(e) {
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
  }({
    tooltipText: l,
    onClick: () => {
      (0, s.X)(c, s.O.DISCONNECT), o()
    }
  }, u), n = n = {
    icon: (0, r.jsx)(d, {
      size: "refresh_sm"
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function m(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsx)(g, {
    tooltipText: h.intl.string(h.t.SMKyih),
    onClick: () => {
      (0, d.A)(t) ? (0, u.j3)(t) : l.default.disconnect()
    }
  })
}

function f(e) {
  let {
    channel: t
  } = e;
  return (0, r.jsx)(g, {
    tooltipText: h.intl.string(h.t["6vrfgt"]),
    onClick: () => {
      (0, c.A)(t) ? (0, o.Py)(t) : l.default.disconnect()
    }
  })
}

function A(e) {
  let {
    channel: t
  } = e;
  return t.isGuildStageVoice() ? (0, r.jsx)(m, {
    channel: t
  }) : (0, r.jsx)(f, {
    channel: t
  })
}