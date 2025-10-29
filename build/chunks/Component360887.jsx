/** Chunk was on 27978 **/
/** chunk id: 360887, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk626135 = require("./626135.js"),
  Chunk361207 = require("./361207.js"),
  Chunk358085 = require("./358085.js"),
  Chunk954824 = require("./954824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let E = e => {
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
      }), (0, r.jsx)(u.zx, {
        onClick: s,
        children: i
      })]
    })
  })
};

function v(e) {
  let {
    match: t,
    location: l
  } = e, o = (0, s.parse)(l.search).token, [d, v] = i.useState("loading"), b = i.useCallback(async e => {
    try {
      await c.Z.oneTimeLogin(e), v("login_success"), n.g.location.assign(_.Z5c.APP)
    } catch (e) {
      v("error")
    }
  }, []);
  return (i.useEffect(() => {
    if (null == o || "string" != typeof o) return void v("error");
    if (a.tq || a.Em) {
      var e;
      let t = null == (e = g.default.getSuperProperties()) ? true : e.os,
        n = new URL(l.pathname + l.search, window.location.origin),
        r = (0, p.Gn)("one_time_login", t, n);
      window.location.href = r;
      return
    }
    if ((0, m.isDesktop)()) return void b(o);
    let t = "discord://login/one-time?token=".concat(encodeURIComponent(o));
    f.Z.launch(t, e => {
      e ? v("protocol_launched") : b(o)
    })
  }, [o, l, b]), a.tq || a.Em || (0, h.DB)()) ? null : "protocol_launched" === d ? (0, r.jsx)(E, {
    title: x.intl.string(x.t.RvUUOy),
    subtitle: x.intl.string(x.t["5/lR0g"]),
    buttonText: x.intl.string(x.t["2ixEBi"]),
    buttonOnClick: () => b(o)
  }) : "error" === d ? (0, r.jsx)(E, {
    title: x.intl.string(x.t.RtCSr1),
    subtitle: x.intl.string(x.t["S+YjYJ"]),
    buttonText: x.intl.string(x.t.j3cG2p),
    buttonOnClick: () => (0, h.uL)(_.Z5c.LOGIN)
  }) : (0, r.jsx)(u.ZP, {
    children: (0, r.jsx)(u.Hh, {})
  })
}
let b = function(e) {
  let {
    enabled: t
  } = (0, d.WW)("OneTimeLoginCardWrapper");
  return t ? (0, r.jsx)(v, function(e) {
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
    to: _.Z5c.LOGIN
  })
}