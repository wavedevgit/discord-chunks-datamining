/** Chunk was on 86142 **/
/** chunk id: 957622, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./747238.js"), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk607399 = require("./607399.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk309165 = require("./309165.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk877062 = require("./877062.js"),
  Chunk501187 = require("./501187.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js"),
  Chunk985018 = require("./985018.jsx");
let v = e => {
  let {
    title: t,
    subtitle: n,
    buttonText: i,
    buttonOnClick: s
  } = e;
  return (0, r.jsx)(u.Ay, {
    children: (0, r.jsxs)(o.BJc, {
      gap: 24,
      children: [(0, r.jsxs)(o.BJc, {
        gap: 8,
        children: [(0, r.jsx)(u.hE, {
          children: t
        }), (0, r.jsx)(u.tK, {
          children: n
        })]
      }), (0, r.jsx)(o.Button, {
        onClick: s,
        text: i,
        fullWidth: true
      })]
    })
  })
};

function y(e) {
  let {
    match: t,
    location: l
  } = e, o = (0, s.parse)(l.search).token, [d, y] = i.useState("loading"), b = i.useRef(false), j = i.useCallback(async e => {
    try {
      g.default.track(A.HAw.ONE_TIME_LOGIN_ATTEMPTED, {
        source: "web_page"
      }), await c.A.oneTimeLogin(e), y("login_success"), g.default.track(A.HAw.LOGIN_SUCCESSFUL, {
        source: "web_page",
        login_method: "one_time_login"
      }), n.g.location.assign(A.BVt.APP)
    } catch (t) {
      let e = t instanceof Error ? t.message : "Unknown error";
      g.default.track(A.HAw.ONE_TIME_LOGIN_ERROR, {
        source: "web_page",
        error_reason: "api_error",
        error_message: e
      }), y("error")
    }
  }, []), O = i.useCallback(e => {
    var t;
    let n = null != (t = p.default.getFingerprint()) ? t : p.default.getId(),
      r = "discord://login/one-time?token=".concat(encodeURIComponent(e));
    _.A.launch(r, e => {
      e ? (g.default.track(A.HAw.DEEP_LINK_CLICKED, {
        source: "web_page",
        destination: "discord://login/one-time",
        deep_link_provider: "protocol",
        fingerprint: n
      }), y("app_launched")) : y("app_launch_not_supported")
    })
  }, []), I = i.useCallback(e => {
    var t;
    let r = null != (t = p.default.getFingerprint()) ? t : p.default.getId();
    Promise.resolve().then(n.bind(n, 129014)).then(t => {
      let {
        default: n
      } = t;
      n.request(A.e$_.DEEP_LINK, {
        type: x.XK.ONE_TIME_LOGIN,
        params: {
          token: e,
          fingerprint: r
        }
      }).then(t => {
        null != t && t ? (g.default.track(A.HAw.DEEP_LINK_CLICKED, {
          source: "web_page",
          destination: "one_time_login_modal",
          deep_link_provider: "rpc",
          fingerprint: r
        }), y("app_launched")) : O(e)
      }).catch(() => {
        O(e)
      }).then(() => n.disconnect())
    })
  }, [O]);
  if (i.useEffect(() => {
      let e = null != o && "string" == typeof o,
        t = a.Fr ? "mobile" : a.v1 ? "tablet" : (0, f.isDesktop)() ? "desktop_app" : "web";
      if (g.default.track(A.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, {
          has_token: e,
          device_type: t
        }), !e) return void y("error");
      if (a.Fr || a.v1) {
        var n;
        let e = null == (n = g.default.getSuperProperties()) ? true : n.os;
        g.default.track(A.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
          detection_type: "mobile_ui_shown",
          device_type: t,
          platform: e
        });
        return
      }(0, f.isDesktop)() ? j(o): b.current || (b.current = true, y("rpc_attempting"), I(o))
    }, [o, l, j, I]), a.Fr || a.v1) {
    let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
    return (0, r.jsx)(m.W, {
      token: o,
      hasError: "error" === d,
      errorReason: e
    })
  }
  if ((0, h.MX)()) return null;
  if ("app_launched" === d) return (0, r.jsx)(v, {
    title: E.intl.string(E.t.RvUUOy),
    subtitle: E.intl.string(E.t["5/lR0g"]),
    buttonText: E.intl.string(E.t["2ixEBi"]),
    buttonOnClick: () => {
      g.default.track(A.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, {
        previous_status: d
      }), j(o)
    }
  });
  if ("app_launch_not_supported" === d) return (0, r.jsx)(v, {
    title: E.intl.string(E.t.qq4tjT),
    subtitle: E.intl.string(E.t.CVxYRo),
    buttonText: E.intl.string(E.t["2ixEBi"]),
    buttonOnClick: () => j(o)
  });
  if ("error" === d) {
    let e = null == o || "string" != typeof o ? "missing_token" : "invalid_token";
    return (0, r.jsx)(v, {
      title: E.intl.string(E.t.RtCSr1),
      subtitle: E.intl.string(E.t["S+YjYJ"]),
      buttonText: E.intl.string(E.t.j3cG2p),
      buttonOnClick: () => {
        g.default.track(A.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, {
          error_reason: e
        }), (0, h.pX)(A.BVt.LOGIN)
      }
    })
  }
  return (0, r.jsx)(u.Ay, {
    children: (0, r.jsx)(u.CK, {})
  })
}
let b = function(e) {
  let {
    enabled: t
  } = (0, d.lq)("OneTimeLoginCardWrapper");
  return t ? (0, r.jsx)(y, function(e) {
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
  }({}, e)) : (0, r.jsx)(l.rd, {
    to: A.BVt.LOGIN
  })
}