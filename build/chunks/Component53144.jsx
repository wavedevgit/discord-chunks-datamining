/** Chunk was on web.js **/
/** chunk id: 53144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    token: t,
    onClose: n
  } = e, [a, s] = i.useState("loading"), p = (0, o.e7)([d.default], () => d.default.isAuthenticated()), h = i.useCallback(async () => {
    try {
      if (null == t) return void s("error");
      s("loading"), await l.Z.oneTimeLogin(t), s("success")
    } catch (e) {
      s("error")
    }
  }, [t]);
  i.useEffect(() => {
    if (p) return void s("success");
    h()
  }, [h, p]);
  let m = i.useCallback(() => {
    null == n || n()
  }, [n]);
  switch (i.useEffect(() => {
      "success" === a && (null == n || n(), (0, u.uL)(f.Z5c.ME))
    }, [a, n]), a) {
    case "loading":
    case "success":
      return {
        title: _.intl.string(_.t.W9uNdG), body: (0, r.jsx)(c.Hh, {})
      };
    case "error":
      return {
        title: _.intl.string(_.t.RtCSr1), subtitle: _.intl.string(_.t["S+YjYJ"]), actions: [{
          onClick: m,
          text: _.intl.string(_.t["ETE/oC"])
        }]
      };
    default:
      return {}
  }
}

function b(e) {
  let {
    title: t,
    subtitle: n,
    body: i,
    actions: o
  } = E(e);
  return (0, r.jsxs)(a.IX, g(h({}, e), {
    onClose: () => {
      var t;
      return Promise.resolve(null == (t = e.onClose) ? true : t.call(e))
    },
    size: "sm",
    children: [(0, r.jsx)(a.xBx, {
      title: null != t ? t : "",
      subtitle: n
    }), (0, r.jsx)(a.fef, {
      children: i
    }), (0, r.jsx)(a.Go$, {
      actions: null != o ? o : [],
      actionsFullWidth: true
    })]
  }))
}

function y(e) {
  (0, s.ZDy)(() => Promise.resolve(t => (0, r.jsx)(b, h({}, t, e))))
}