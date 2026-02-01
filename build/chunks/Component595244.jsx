/** Chunk was on web.js **/
/** chunk id: 595244, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => M,
  Sm: () => G,
  bc: () => H,
  dR: () => k,
  gz: () => F,
  i8: () => B,
  jX: () => j,
  xb: () => V
}), require("./142703.js"), require("./321073.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
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

function L(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = x(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function M(e) {
  let {
    message: t,
    footer: n,
    headerClassName: i,
    showsCloseWindowText: a,
    spinner: s
  } = e;
  return (0, _.HU)({
    location: C.intl.string(C.t["3S2494"])
  }), (0, r.jsxs)("div", {
    className: N.iE,
    children: [s ? (0, r.jsx)(f.y$y, {}) : null, (0, r.jsx)("div", {
      className: o()(N.wx, i)
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

function j(e) {
  return (0, r.jsx)(M, D(R({}, e), {
    headerClassName: N.nQ
  }))
}

function k(e) {
  let {
    guild: t,
    application: n
  } = e, a = L(e, ["guild", "application"]), {
    onClose: o
  } = a, s = i.useCallback(() => {
    (null == t ? true : t.id) != null && ((0, g.u)(null == t ? true : t.id), null == o || o(), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
      application_id: null == n ? true : n.id,
      guild_id: null == t ? true : t.id
    }))
  }, [o, null == n ? true : n.id, null == t ? true : t.id]), l = h.h.getField("entrypoint"), c = i.useCallback(() => {
    null == o || o(), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: null == n ? true : n.id
    })
  }, [o, null == n ? true : n.id]), d = window.location.pathname.startsWith(T.BVt.APPLICATION_DIRECTORY), f = i.useCallback(() => {
    (null == n ? true : n.id) != null && (null == o || o(), null != l && (0, m.pX)(""), setImmediate(() => {
      A._.dispatchToLastSubscribed(T.jej.OPEN_APP_LAUNCHER, {
        applicationId: n.id
      }), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, {
        application_id: n.id
      })
    }))
  }, [null == n ? true : n.id, o, l]), p = (0, u.bG)([b.A, E.A], () => E.A.getChannel(b.A.getChannelId())), _ = (0, u.bG)([y.A], () => y.A.can(T.xBc.SEND_MESSAGES, p)), v = null != t, I = null == t && _ && (!d || null != l), N = [];
  return (null != t || null != o) && (null != o && N.push({
    variant: "secondary",
    text: C.intl.string(C.t.cpT0Cq),
    onClick: c
  }), v && N.push({
    variant: "primary",
    text: (null == t ? true : t.name.length) > 30 ? C.intl.string(C.t.M35zFB) : C.intl.format(C.t.UdYYP3, {
      guildName: null == t ? true : t.name
    }),
    onClick: s
  }), I && N.push({
    variant: "primary",
    text: C.intl.string(C.t["0cCDKP"]),
    onClick: f
  })), (0, r.jsx)(S.f, D(R({}, a), {
    actions: N,
    children: (0, r.jsx)(U, R({
      guild: t,
      application: n
    }, a))
  }))
}

function U(e) {
  let {
    guild: t,
    application: n
  } = e, a = L(e, ["guild", "application"]), o = C.intl.string(C.t.se5gLj);
  i.useEffect(() => {
    O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: null == n ? true : n.id
    })
  }, [null == n ? true : n.id]);
  let s = i.useMemo(() => null != n ? null != t ? C.intl.format(C.t.IlF6IY, {
      installedApplicationName: null == n ? true : n.name,
      guildName: null == t ? true : t.name
    }) : C.intl.format(C.t.vTVC5T, {
      installedApplicationName: null == n ? true : n.name
    }) : C.intl.string(C.t["Dp+rgP"]), [n, t]),
    l = (0, r.jsx)(d.E, {
      variant: "text-md/normal",
      className: N.OY,
      children: s
    });
  return (0, r.jsx)(j, R({
    message: o,
    footer: l
  }, a))
}

function G(e) {
  let {
    application: t
  } = e, n = L(e, ["application"]), {
    onClose: a
  } = n;
  i.useEffect(() => {
    O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: t.id
    })
  }, [t.id]);
  let o = i.useCallback(() => {
    null == a || a(), O.default.track(T.HAw.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: t.id
    })
  }, [a, t.id]);
  return (0, r.jsx)(S.f, D(R({}, n), {
    actions: [{
      variant: "primary",
      text: C.intl.string(C.t["31Bci5"]),
      onClick: o
    }],
    children: (0, r.jsxs)("div", {
      className: N.kV,
      children: [(0, r.jsx)(p.Ay, {
        mask: p.hW.SQUIRCLE,
        className: N.LR,
        children: (0, r.jsx)("img", {
          alt: t.name,
          src: v.Ay.getApplicationIconURL({
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
  return (0, r.jsx)(S.f, D(R({}, e), {
    title: C.intl.string(C.t.j2d6Km),
    subtitle: C.intl.string(C.t["/B7kXy"]),
    actions: [{
      text: C.intl.string(C.t["31Bci5"]),
      onClick: e.onClose
    }]
  }))
}

function F(e) {
  return (0, r.jsx)(M, D(R({}, e), {
    headerClassName: N.gW
  }))
}

function B() {
  var e, t;
  let n = (0, l.zy)();
  return (0, r.jsx)(S.$, {
    removeChildWrapper: true,
    children: (0, r.jsx)(S.f, {
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
    let e = null != document.referrer && "" !== document.referrer ? I.A.toURLSafe(document.referrer) : null;
    (null == e || e.host !== window.location.host || e.pathname !== T.BVt.OAUTH2_AUTHORIZE) && (0, m.pX)(T.BVt.INDEX)
  }, [a]);
  let o = null != a ? (0, s.parse)(a.search) : {},
    l = null != (t = null != (n = o.error_description) ? n : o.error) ? t : C.intl.string(C.t.mqn873);
  return (0, r.jsx)(S.$, {
    removeChildWrapper: true,
    children: (0, r.jsx)(S.f, {
      transitionState: c.ip4.ENTERED,
      hideHeader: true,
      children: (0, r.jsx)(F, {
        message: l,
        showsCloseWindowText: true
      })
    })
  })
}