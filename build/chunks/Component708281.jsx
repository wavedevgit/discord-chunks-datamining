/** Chunk was on web.js **/
/** chunk id: 708281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => y
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    token: t,
    onClose: n
  } = e, [a, o] = i.useState("loading");
  i.useEffect(() => {
    u.default.track(d.HAw.ONE_TIME_LOGIN_MODAL_OPENED, {
      has_token: null != t
    })
  }, [t]);
  let p = i.useCallback(async () => {
    try {
      if (null == t) {
        o("error"), u.default.track(d.HAw.ONE_TIME_LOGIN_ERROR, {
          source: "web_modal",
          error_reason: "missing_token",
          error_message: "No token provided"
        });
        return
      }
      o("loading"), u.default.track(d.HAw.ONE_TIME_LOGIN_ATTEMPTED, {
        source: "web_modal"
      }), await s.A.oneTimeLogin(t), o("success"), u.default.track(d.HAw.LOGIN_SUCCESSFUL, {
        source: "web_modal",
        login_method: "one_time_login"
      })
    } catch (t) {
      o("error");
      let e = t instanceof Error ? t.message : "Login failed";
      u.default.track(d.HAw.ONE_TIME_LOGIN_ERROR, {
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
    u.default.track(d.HAw.ONE_TIME_LOGIN_MODAL_CANCEL_CLICKED, {
      current_state: a
    }), null == n || n()
  }, [n, a]);
  switch (i.useEffect(() => {
      "success" === a && (null == n || n(), (0, c.pX)(d.BVt.ME))
    }, [a, n]), a) {
    case "loading":
    case "success":
      return {
        title: f.intl.string(f.t.W9uNdG), body: (0, r.jsx)(l.CK, {})
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
    actions: o
  } = g(e);
  return (0, r.jsxs)(a.dWK, m(_({}, e), {
    onClose: () => {
      var t;
      return Promise.resolve(null == (t = e.onClose) ? true : t.call(e))
    },
    size: "sm",
    children: [(0, r.jsx)(a.rQ0, {
      title: null != t ? t : "",
      subtitle: n
    }), (0, r.jsx)(a.cwr, {
      children: i
    }), (0, r.jsx)(a.H7u, {
      actions: null != o ? o : [],
      actionsFullWidth: true
    })]
  }))
}

function y(e) {
  (0, o.mMO)(() => Promise.resolve(t => (0, r.jsx)(E, _({}, t, e))))
}