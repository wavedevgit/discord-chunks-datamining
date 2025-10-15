/** Chunk was on web.js **/
/** chunk id: 53144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => g
}), require("./388685.js"), require("./415506.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    token: t,
    onClose: n
  } = e, [a, d] = i.useState("loading"), [f, _] = i.useState(null), p = i.useCallback(async () => {
    try {
      if (null == t) {
        d("error"), _("Invalid login link - missing token");
        return
      }
      d("loading"), await new Promise((e, n) => {
        setTimeout(() => {
          "test-fail" === t ? n(Error("Invalid token")) : e(true)
        }, 2e3)
      }), d("success"), setTimeout(() => {
        null == n || n(), (0, l.uL)(c.Z5c.ME)
      }, 1500)
    } catch (e) {
      d("error"), _(e instanceof Error ? e.message : "Login failed")
    }
  }, [t, n]);
  i.useEffect(() => {
    p()
  }, [p]);
  let h = i.useCallback(() => {
      p()
    }, [p]),
    m = i.useCallback(() => {
      null == n || n()
    }, [n]),
    g = [];
  switch (a) {
    case "loading":
      return {
        title: "Logging you in...", subtitle: "Please wait while we process your one-time login.", body: (0, r.jsx)(s.Hh, {})
      };
    case "success":
      return {
        title: "Login Successful!", subtitle: "Welcome back! Taking you to Discord...", body: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: "✓ Successfully logged in with your one-time link"
        })
      };
    case "error":
      return g.push({
        variant: "secondary",
        onClick: m,
        text: u.intl.string(u.t["ETE/oC"])
      }, {
        onClick: h,
        text: "Try Again"
      }), {
        title: "Login Failed",
        subtitle: null != f ? f : "Something went wrong. Please try again.",
        body: (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          children: null != f ? f : "Unable to log you in with this link. It may have expired or been used already."
        }),
        actions: g
      };
    default:
      return {}
  }
}

function m(e) {
  let {
    title: t,
    subtitle: n,
    body: i,
    actions: o
  } = h(e);
  return (0, r.jsxs)(a.IX, p(f({}, e), {
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

function g(e) {
  (0, o.ZDy)(() => Promise.resolve(t => (0, r.jsx)(m, p(f({}, t, e), {
    onClose: () => {
      var n;
      null == (n = e.onClose) || n.call(e), t.onClose()
    }
  }))))
}