/** Chunk was on 27978 **/
/** chunk id: 360887, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./35282.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js"),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk872549 = require("./872549.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk361207 = require("./361207.js"),
  Chunk358085 = require("./358085.js"),
  Chunk954824 = require("./954824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx");
let j = e => {
  let {
    title: t,
    subtitle: n,
    buttonText: i,
    buttonOnClick: s
  } = e;
  return (0, r.jsx)(u.ZP, {
    children: (0, r.jsxs)(o.Kqy, {
      gap: 24,
      children: [(0, r.jsxs)(o.Kqy, {
        gap: 8,
        children: [(0, r.jsx)(u.Dx, {
          children: t
        }), (0, r.jsx)(u.DK, {
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

function b(e) {
  let {
    match: t,
    location: l
  } = e, o = (0, s.parse)(l.search).token, [d, b] = i.useState("loading"), I = i.useRef(false), y = i.useCallback(async e => {
    try {
      await c.Z.oneTimeLogin(e), b("login_success"), n.g.location.assign(x.Z5c.APP)
    } catch (e) {
      b("error")
    }
  }, []), O = i.useCallback(e => {
    let t = "discord://login/one-time?token=".concat(encodeURIComponent(e));
    _.Z.launch(t, t => {
      t ? b("app_launched") : y(e)
    })
  }, [y]), S = i.useCallback(e => {
    var t;
    let r = null != (t = g.default.getFingerprint()) ? t : g.default.getId();
    Promise.resolve().then(n.bind(n, 536285)).then(t => {
      let {
        default: n
      } = t;
      n.request(x.Etm.DEEP_LINK, {
        type: E.jE.ONE_TIME_LOGIN,
        params: {
          token: e,
          fingerprint: r
        }
      }).then(t => {
        null != t && t ? b("app_launched") : O(e)
      }).catch(() => {
        O(e)
      }).then(() => n.disconnect())
    })
  }, [O]);
  return (i.useEffect(() => {
    if (null == o || "string" != typeof o) return void b("error");
    if (a.tq || a.Em) {
      var e;
      let t = null == (e = p.default.getSuperProperties()) ? true : e.os,
        n = new URL(l.pathname + l.search, window.location.origin),
        r = (0, m.Gn)("one_time_login", t, n);
      window.location.href = r;
      return
    }
    if ((0, f.isDesktop)()) return void y(o);
    I.current || (I.current = true, b("rpc_attempting"), S(o))
  }, [o, l, y, S]), a.tq || a.Em || (0, h.DB)()) ? null : "app_launched" === d ? (0, r.jsx)(j, {
    title: v.intl.string(v.t.RvUUOy),
    subtitle: v.intl.string(v.t["5/lR0g"]),
    buttonText: v.intl.string(v.t["2ixEBi"]),
    buttonOnClick: () => y(o)
  }) : "error" === d ? (0, r.jsx)(j, {
    title: v.intl.string(v.t.RtCSr1),
    subtitle: v.intl.string(v.t["S+YjYJ"]),
    buttonText: v.intl.string(v.t.j3cG2p),
    buttonOnClick: () => (0, h.uL)(x.Z5c.LOGIN)
  }) : (0, r.jsx)(u.ZP, {
    children: (0, r.jsx)(u.Hh, {})
  })
}
let I = function(e) {
  let {
    enabled: t
  } = (0, d.WW)("OneTimeLoginCardWrapper");
  return t ? (0, r.jsx)(b, function(e) {
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
  }({}, e)) : (0, r.jsx)(l.l_, {
    to: x.Z5c.LOGIN
  })
}