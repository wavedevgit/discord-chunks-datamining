/** Chunk was on 58173 **/
/** chunk id: 239120, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js");

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function a(e) {
  var {
    activity: t,
    onSelect: a
  } = e, b = function(e, t) {
    if (null == e) return {};
    var r, n, o = function(e, t) {
      if (null == e) return {};
      var r, n, o = {},
        c = Object.keys(e);
      for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
    }
    return o
  }(e, ["activity", "onSelect"]);
  let p = o.useCallback(() => {
    null == a || a(), (0, c.ZDy)(async () => {
      let {
        default: e
      } = await r.e("82077").then(r.bind(r, 953848));
      return r => (0, n.jsx)(e, u(l({}, r), {
        detectedActivity: null != t ? t : true,
        onSubmitted: () => {}
      }))
    })
  }, [t, a]);
  return (0, n.jsx)(c.v2r, u(l({
    navId: "game-detection-report-context-menu",
    "aria-label": "Game Detection Report",
    onClose: i.Zy,
    onSelect: a
  }, b), {
    children: (0, n.jsx)(c.sNh, {
      id: "report-issue",
      label: "Report Issue",
      action: p,
      color: "danger",
      icon: c.U65
    })
  }))
}