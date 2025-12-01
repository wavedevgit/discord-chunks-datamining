/** Chunk was on web.js **/
/** chunk id: 397394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => G,
  Lk: () => B,
  Xg: () => F,
  ZP: () => j,
  c7: () => M,
  j3: () => V,
  jO: () => k,
  ks: () => Z
}), require("./358797.js"), require("./539854.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk828700 = require("./828700.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk252618 = require("./252618.js"),
  Chunk258971 = require("./258971.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk585483 = require("./585483.js"),
  Chunk591759 = require("./591759.js"),
  Chunk787025 = require("./787025.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk295880 = require("./295880.js");

function P(e, t, n) {
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
      P(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = L(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function L(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function j(e) {
  let {
    message: t,
    footer: n,
    headerClassName: i,
    showsCloseWindowText: a,
    spinner: s
  } = e;
  return (0, _.Tt)({
    location: C.intl.string(C.t["3S2494"])
  }), (0, r.jsxs)("div", {
    className: N.wrapper,
    children: [s ? (0, r.jsx)(f.$jN, {}) : null, (0, r.jsx)("div", {
      className: o()(N.header, i)
    }), (0, r.jsx)(f.Heading, {
      variant: "heading-lg/bold",
      className: N.text,
      children: t
    }), null != n ? n : null, a ? (0, r.jsx)(d.x, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: N.cta,
      children: C.intl.string(C.t["k7J/w/"])
    }) : null]
  })
}

function M(e) {
  return (0, r.jsx)(j, D(R({}, e), {
    headerClassName: N.headerSuccess
  }))
}

function k(e) {
  var {
    guild: t,
    application: n
  } = e, a = x(e, ["guild", "application"]);
  let {
    onClose: o
  } = a, s = i.useCallback(() => {
    (null == t ? true : t.id) != null && ((0, g.X)(null == t ? true : t.id), null == o || o(), O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
      application_id: null == n ? true : n.id,
      guild_id: null == t ? true : t.id
    }))
  }, [o, null == n ? true : n.id, null == t ? true : t.id]), l = m.z8.getField("entrypoint"), c = i.useCallback(() => {
    null == o || o(), O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: null == n ? true : n.id
    })
  }, [o, null == n ? true : n.id]), d = window.location.pathname.startsWith(A.Z5c.APPLICATION_DIRECTORY), f = i.useCallback(() => {
    (null == n ? true : n.id) != null && (null == o || o(), null != l && (0, h.uL)(""), setImmediate(() => {
      S.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, {
        applicationId: n.id
      }), O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, {
        application_id: n.id
      })
    }))
  }, [null == n ? true : n.id, o, l]), p = (0, u.e7)([y.Z, E.Z], () => E.Z.getChannel(y.Z.getChannelId())), _ = (0, u.e7)([b.Z], () => b.Z.can(A.Plq.SEND_MESSAGES, p)), v = null != t, I = null == t && _ && (!d || null != l), N = [];
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
  })), (0, r.jsx)(T.j, D(R({}, a), {
    actions: N,
    children: (0, r.jsx)(U, R({
      guild: t,
      application: n
    }, a))
  }))
}

function U(e) {
  var {
    guild: t,
    application: n
  } = e, a = x(e, ["guild", "application"]);
  let o = C.intl.string(C.t.se5gLj);
  i.useEffect(() => {
    O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: null == n ? true : n.id
    })
  }, [null == n ? true : n.id]);
  let s = i.useMemo(() => null != n ? null != t ? C.intl.format(C.t.IlF6IY, {
      installedApplicationName: null == n ? true : n.name,
      guildName: null == t ? true : t.name
    }) : C.intl.format(C.t.vTVC5T, {
      installedApplicationName: null == n ? true : n.name
    }) : C.intl.string(C.t["Dp+rgP"]), [n, t]),
    l = (0, r.jsx)(d.x, {
      variant: "text-md/normal",
      className: N.authorizedSuccessSubtext,
      children: s
    });
  return (0, r.jsx)(M, R({
    message: o,
    footer: l
  }, a))
}

function G(e) {
  var {
    application: t
  } = e, n = x(e, ["application"]);
  let {
    onClose: a
  } = n;
  i.useEffect(() => {
    O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: t.id
    })
  }, [t.id]);
  let o = i.useCallback(() => {
    null == a || a(), O.default.track(A.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: t.id
    })
  }, [a, t.id]);
  return (0, r.jsx)(T.j, D(R({}, n), {
    actions: [{
      variant: "primary",
      text: C.intl.string(C.t["31Bci5"]),
      onClick: o
    }],
    children: (0, r.jsxs)("div", {
      className: N.authorizedSuccessExternal,
      children: [(0, r.jsx)(p.ZP, {
        mask: p.QS.SQUIRCLE,
        className: N.authorizedSuccessExternalIcon,
        children: (0, r.jsx)("img", {
          alt: t.name,
          src: v.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon
          })
        })
      }), (0, r.jsxs)("div", {
        className: N.authorizedSuccessExternalCopy,
        children: [(0, r.jsx)(f.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: C.intl.format(C.t["1Q+p1k"], {
            appName: t.name
          })
        }), (0, r.jsx)(d.x, {
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

function Z(e) {
  return (0, r.jsx)(T.j, D(R({}, e), {
    title: C.intl.string(C.t.j2d6Km),
    subtitle: C.intl.string(C.t["/B7kXy"]),
    actions: [{
      text: C.intl.string(C.t["31Bci5"]),
      onClick: e.onClose
    }]
  }))
}

function B(e) {
  return (0, r.jsx)(j, D(R({}, e), {
    headerClassName: N.headerFailure
  }))
}

function F() {
  var e, t;
  let n = (0, Chunk828700.TH)();
  return (0, Chunk54381.jsx)(Chunk787025.G, {
    removeChildWrapper: true,
    children: (0, Chunk54381.jsx)(Chunk787025.j, {
      transitionState: Chunk793030.Dvm.ENTERED,
      hideHeader: true,
      children: (0, Chunk54381.jsx)(U, {
        guild: null == (e = require.state) ? true : module.guild,
        application: null == (t = require.state) ? true : exports.application,
        showsCloseWindowText: true
      })
    })
  })
}

function V(e) {
  var t, n;
  let {
    location: a
  } = e;
  i.useEffect(() => {
    if (null == a || "" === a.search) return;
    let e = null != document.referrer && "" !== document.referrer ? I.Z.toURLSafe(document.referrer) : null;
    (null == e || e.host !== window.location.host || e.pathname !== A.Z5c.OAUTH2_AUTHORIZE) && (0, h.uL)(A.Z5c.INDEX)
  }, [a]);
  let o = null != a ? (0, s.parse)(a.search) : {},
    l = null != (n = null != (t = o.error_description) ? t : o.error) ? n : C.intl.string(C.t.mqn873);
  return (0, r.jsx)(T.G, {
    removeChildWrapper: true,
    children: (0, r.jsx)(T.j, {
      transitionState: c.Dvm.ENTERED,
      hideHeader: true,
      children: (0, r.jsx)(B, {
        message: l,
        showsCloseWindowText: true
      })
    })
  })
}