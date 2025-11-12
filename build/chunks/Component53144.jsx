/** Chunk was on web.js **/
/** chunk id: 53144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => O
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  let {
    token: t,
    onClose: n
  } = e, [a, s] = i.useState("loading"), h = (0, o.e7)([d.default], () => d.default.isAuthenticated());
  i.useEffect(() => {
    f.default.track(_.rMx.ONE_TIME_LOGIN_MODAL_OPENED, {
      has_token: null != t
    })
  }, [t]);
  let m = i.useCallback(async () => {
    try {
      if (null == t) {
        s("error"), f.default.track(_.rMx.ONE_TIME_LOGIN_ERROR, {
          source: "web_modal",
          error_reason: "missing_token",
          error_message: "No token provided"
        });
        return
      }
      s("loading"), f.default.track(_.rMx.ONE_TIME_LOGIN_ATTEMPTED, {
        source: "web_modal"
      }), await l.Z.oneTimeLogin(t), s("success"), f.default.track(_.rMx.LOGIN_SUCCESSFUL, {
        source: "web_modal",
        login_method: "one_time_login"
      })
    } catch (t) {
      s("error");
      let e = t instanceof Error ? t.message : "Login failed";
      f.default.track(_.rMx.ONE_TIME_LOGIN_ERROR, {
        source: "web_modal",
        error_reason: "api_error",
        error_message: e
      })
    }
  }, [t]);
  i.useEffect(() => {
    if (h) return void s("success");
    m()
  }, [m, h]);
  let g = i.useCallback(() => {
    f.default.track(_.rMx.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, {
      current_state: a
    }), null == n || n()
  }, [n, a]);
  switch (i.useEffect(() => {
      "success" === a && (null == n || n(), (0, u.uL)(_.Z5c.ME))
    }, [a, n]), a) {
    case "loading":
    case "success":
      return {
        title: p.intl.string(p.t.W9uNdG), body: (0, r.jsx)(c.Hh, {})
      };
    case "error":
      return {
        title: p.intl.string(p.t.RtCSr1), subtitle: p.intl.string(p.t["S+YjYJ"]), actions: [{
          onClick: g,
          text: p.intl.string(p.t["ETE/oC"])
        }]
      };
    default:
      return {}
  }
}

function y(e) {
  let {
    title: t,
    subtitle: n,
    body: i,
    actions: o
  } = b(e);
  return (0, r.jsxs)(a.IX, E(m({}, e), {
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

function O(e) {
  (0, s.ZDy)(() => Promise.resolve(t => (0, r.jsx)(y, m({}, t, e))))
}