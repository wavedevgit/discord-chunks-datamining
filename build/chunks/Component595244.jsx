/** Chunk was on web.js **/
/** chunk id: 595244, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => j,
  Sm: () => G,
  bc: () => H,
  dR: () => k,
  gz: () => F,
  i8: () => B,
  jX: () => M,
  xb: () => V
}), require("./142703.js"), require("./321073.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk571356 = require("./571356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk726249 = require("./726249.js"),
  Chunk310419 = require("./310419.js"),
  Chunk976860 = require("./976860.js"),
  Chunk345942 = require("./345942.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk203982 = require("./203982.js"),
  Chunk998218 = require("./998218.js"),
  Chunk321987 = require("./321987.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk756302 = require("./756302.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = L(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function j(e) {
  let {
    message: t,
    footer: n,
    headerClassName: i,
    showsCloseWindowText: a,
    spinner: o
  } = e;
  return (0, _.HU)({
    location: C.intl.string(C.t["3S2494"])
  }), (0, r.jsxs)("div", {
    className: N.iE,
    children: [o ? (0, r.jsx)(f.y$y, {}) : null, (0, r.jsx)("div", {
      className: s()(N.wx, i)
    }), (0, r.jsx)(f.Heading, {
      variant: "heading-lg/bold",
      className: N.Qq,
      children: t
    }), null != n ? n : null, a ? (0, r.jsx)(d.E, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: N.lO,
      children: C.intl.string(C.t["k7J/w/"])
    }) : null]
  })
}

function M(e) {
  return (0, r.jsx)(j, D(w({}, e), {
    headerClassName: N.nQ
  }))
}

function k(e) {
  let {
    guild: t,
    application: n
  } = e, a = x(e, ["guild", "application"]), {
    onClose: s
  } = a, o = i.useCallback(() => {
    (null == t ? true : t.id) != null && ((0, g.u)(null == t ? true : t.id), null == s || s(), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
      application_id: null == n ? true : n.id,
      guild_id: null == t ? true : t.id
    }))
  }, [s, null == n ? true : n.id, null == t ? true : t.id]), l = h.h.getField("entrypoint"), c = i.useCallback(() => {
    null == s || s(), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: null == n ? true : n.id
    })
  }, [s, null == n ? true : n.id]), d = window.location.pathname.startsWith(T.BVt.APPLICATION_DIRECTORY), f = i.useCallback(() => {
    (null == n ? true : n.id) != null && (null == s || s(), null != l && (0, m.pX)(""), setImmediate(() => {
      v._.dispatchToLastSubscribed(T.jej.OPEN_APP_LAUNCHER, {
        applicationId: n.id
      }), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, {
        application_id: n.id
      })
    }))
  }, [null == n ? true : n.id, s, l]), p = (0, u.bG)([y.A, E.A], () => E.A.getChannel(y.A.getChannelId())), _ = (0, u.bG)([b.A], () => b.A.can(T.xBc.SEND_MESSAGES, p)), A = null != t, S = null == t && _ && (!d || null != l), N = [];
  return (null != t || null != s) && (null != s && N.push({
    variant: "secondary",
    text: C.intl.string(C.t.cpT0Cq),
    onClick: c
  }), A && N.push({
    variant: "primary",
    text: (null == t ? true : t.name.length) > 30 ? C.intl.string(C.t.M35zFB) : C.intl.format(C.t.UdYYP3, {
      guildName: null == t ? true : t.name
    }),
    onClick: o
  }), S && N.push({
    variant: "primary",
    text: C.intl.string(C.t["0cCDKP"]),
    onClick: f
  })), (0, r.jsx)(I.f, D(w({}, a), {
    actions: N,
    children: (0, r.jsx)(U, w({
      guild: t,
      application: n
    }, a))
  }))
}

function U(e) {
  let {
    guild: t,
    application: n
  } = e, a = x(e, ["guild", "application"]), s = C.intl.string(C.t.se5gLj);
  i.useEffect(() => {
    O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: null == n ? true : n.id
    })
  }, [null == n ? true : n.id]);
  let o = i.useMemo(() => null != n ? null != t ? C.intl.format(C.t.IlF6IY, {
      installedApplicationName: null == n ? true : n.name,
      guildName: null == t ? true : t.name
    }) : C.intl.format(C.t.vTVC5T, {
      installedApplicationName: null == n ? true : n.name
    }) : C.intl.string(C.t["Dp+rgP"]), [n, t]),
    l = (0, r.jsx)(d.E, {
      variant: "text-md/normal",
      className: N.OY,
      children: o
    });
  return (0, r.jsx)(M, w({
    message: s,
    footer: l
  }, a))
}

function G(e) {
  let {
    application: t
  } = e, n = x(e, ["application"]), {
    onClose: a
  } = n;
  i.useEffect(() => {
    O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: t.id
    })
  }, [t.id]);
  let s = i.useCallback(() => {
    null == a || a(), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: t.id
    })
  }, [a, t.id]);
  return (0, r.jsx)(I.f, D(w({}, n), {
    actions: [{
      variant: "primary",
      text: C.intl.string(C.t["31Bci5"]),
      onClick: s
    }],
    children: (0, r.jsxs)("div", {
      className: N.kV,
      children: [(0, r.jsx)(p.Ay, {
        mask: p.hW.SQUIRCLE,
        className: N.LR,
        children: (0, r.jsx)("img", {
          alt: t.name,
          src: A.Ay.getApplicationIconURL({
            id: t.id,
            icon: t.icon
          })
        })
      }), (0, r.jsxs)("div", {
        className: N.fv,
        children: [(0, r.jsx)(f.Heading, {
          variant: "heading-xl/semibold",
          color: "text-strong",
          children: C.intl.format(C.t["1Q+p1k"], {
            appName: t.name
          })
        }), (0, r.jsx)(d.E, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.format(C.t.Mr7x5U, {
            appName: t.name
          })
        })]
      })]
    })
  }))
}

function V(e) {
  return (0, r.jsx)(I.f, D(w({}, e), {
    title: C.intl.string(C.t.j2d6Km),
    subtitle: C.intl.string(C.t["/B7kXy"]),
    actions: [{
      text: C.intl.string(C.t["31Bci5"]),
      onClick: e.onClose
    }]
  }))
}

function F(e) {
  return (0, r.jsx)(j, D(w({}, e), {
    headerClassName: N.gW
  }))
}

function B() {
  var e, t;
  let n = (0, l.zy)();
  return (0, r.jsx)(I.$, {
    removeChildWrapper: true,
    children: (0, r.jsx)(I.f, {
      transitionState: c.ip4.ENTERED,
      hideHeader: true,
      children: (0, r.jsx)(U, {
        guild: null == (e = n.state) ? true : e.guild,
        application: null == (t = n.state) ? true : t.application,
        showsCloseWindowText: true
      })
    })
  })
}

function H(e) {
  var t, n;
  let {
    location: a
  } = e;
  i.useEffect(() => {
    if (null == a || "" === a.search) return;
    let e = null != document.referrer && "" !== document.referrer ? S.A.toURLSafe(document.referrer) : null;
    (null == e || e.host !== window.location.host || e.pathname !== T.BVt.OAUTH2_AUTHORIZE) && (0, m.pX)(T.BVt.INDEX)
  }, [a]);
  let s = null != a ? (0, o.parse)(a.search) : {},
    l = null != (t = null != (n = s.error_description) ? n : s.error) ? t : C.intl.string(C.t.mqn873);
  return (0, r.jsx)(I.$, {
    removeChildWrapper: true,
    children: (0, r.jsx)(I.f, {
      transitionState: c.ip4.ENTERED,
      hideHeader: true,
      children: (0, r.jsx)(F, {
        message: l,
        showsCloseWindowText: true
      })
    })
  })
}