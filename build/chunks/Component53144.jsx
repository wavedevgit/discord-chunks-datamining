/** Chunk was on web.js **/
/** chunk id: 53144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => b
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
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

function _(e) {
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    token: t,
    onClose: n
  } = e, [o, a] = i.useState("loading");
  i.useEffect(() => {
    u.default.track(d.rMx.ONE_TIME_LOGIN_MODAL_OPENED, {
      has_token: null != t
    })
  }, [t]);
  let p = i.useCallback(async () => {
    try {
      if (null == t) {
        a("error"), u.default.track(d.rMx.ONE_TIME_LOGIN_ERROR, {
          source: "web_modal",
          error_reason: "missing_token",
          error_message: "No token provided"
        });
        return
      }
      a("loading"), u.default.track(d.rMx.ONE_TIME_LOGIN_ATTEMPTED, {
        source: "web_modal"
      }), await s.Z.oneTimeLogin(t), a("success"), u.default.track(d.rMx.LOGIN_SUCCESSFUL, {
        source: "web_modal",
        login_method: "one_time_login"
      })
    } catch (t) {
      a("error");
      let e = t instanceof Error ? t.message : "Login failed";
      u.default.track(d.rMx.ONE_TIME_LOGIN_ERROR, {
        source: "web_modal",
        error_reason: "api_error",
        error_message: e
      })
    }
  }, [t]);
  i.useEffect(() => {
    p()
  }, [p]);
  let _ = i.useCallback(() => {
    u.default.track(d.rMx.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, {
      current_state: o
    }), null == n || n()
  }, [n, o]);
  switch (i.useEffect(() => {
      "success" === o && (null == n || n(), (0, c.uL)(d.Z5c.ME))
    }, [o, n]), o) {
    case "loading":
    case "success":
      return {
        title: f.intl.string(f.t.W9uNdG), body: (0, r.jsx)(l.Hh, {})
      };
    case "error":
      return {
        title: f.intl.string(f.t.RtCSr1), subtitle: f.intl.string(f.t["S+YjYJ"]), actions: [{
          onClick: _,
          text: f.intl.string(f.t["ETE/oC"])
        }]
      };
    default:
      return {}
  }
}

function E(e) {
  let {
    title: t,
    subtitle: n,
    body: i,
    actions: a
  } = g(e);
  return (0, r.jsxs)(o.IX, h(_({}, e), {
    onClose: () => {
      var t;
      return Promise.resolve(null == (t = e.onClose) ? true : t.call(e))
    },
    size: "sm",
    children: [(0, r.jsx)(o.xBx, {
      title: null != t ? t : "",
      subtitle: n
    }), (0, r.jsx)(o.fef, {
      children: i
    }), (0, r.jsx)(o.Go$, {
      actions: null != a ? a : [],
      actionsFullWidth: true
    })]
  }))
}

function b(e) {
  (0, a.ZDy)(() => Promise.resolve(t => (0, r.jsx)(E, _({}, t, e))))
}