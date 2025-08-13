/** Chunk was on web.js **/
/** chunk id: 397394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $0: () => B,
  Lk: () => F,
  Xg: () => V,
  ZP: () => k,
  c7: () => j,
  j3: () => H,
  jO: () => U,
  ks: () => Z
}), require("./358797.js"), require("./539854.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk114858 = require("./114858.js"),
  Chunk442837 = require("./442837.js"),
  Chunk922770 = require("./922770.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk257465 = require("./257465.jsx"),
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
  Chunk354623 = require("./354623.js");

function P(e, t, n) {
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
      P(e, t, n[t])
    })
  }
  return e
}

function D(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = M(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function k(e) {
  let {
    message: t,
    footer: n,
    headerClassName: i,
    showsCloseWindowText: o,
    spinner: s
  } = e;
  return (0, h.Tt)({
    location: C.intl.string(C.t["3S249/"])
  }), (0, r.jsxs)("div", {
    className: R.wrapper,
    children: [s ? (0, r.jsx)(u.$, {}) : null, (0, r.jsx)("div", {
      className: a()(R.header, i)
    }), (0, r.jsx)(_.X6q, {
      variant: "heading-lg/bold",
      className: R.text,
      children: t
    }), null != n ? n : null, o ? (0, r.jsx)(d.x, {
      variant: "text-sm/normal",
      color: "text-muted",
      className: R.cta,
      children: C.intl.string(C.t["k7J/w8"])
    }) : null]
  })
}

function j(e) {
  return (0, r.jsx)(k, L(w({}, e), {
    headerClassName: R.headerSuccess
  }))
}

function U(e) {
  var {
    guild: t,
    application: n
  } = e, o = x(e, ["guild", "application"]);
  let {
    onClose: a
  } = o, s = i.useCallback(() => {
    (null == t ? true : t.id) != null && ((0, E.X)(null == t ? true : t.id), null == a || a(), v.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_GO_TO_GUILD_CLICKED, {
      application_id: null == n ? true : n.id,
      guild_id: null == t ? true : t.id
    }))
  }, [a, null == n ? true : n.id, null == t ? true : t.id]), l = m.z8.getField("entrypoint"), u = i.useCallback(() => {
    null == a || a(), v.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: null == n ? true : n.id
    })
  }, [a, null == n ? true : n.id]), d = window.location.pathname.startsWith(N.Z5c.APPLICATION_DIRECTORY), f = i.useCallback(() => {
    (null == n ? true : n.id) != null && (null == a || a(), null != l && (0, g.uL)(""), setImmediate(() => {
      T.S.dispatchToLastSubscribed(N.CkL.OPEN_APP_LAUNCHER, {
        applicationId: n.id
      }), v.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_OPEN_APP_CLICKED, {
        application_id: n.id
      })
    }))
  }, [null == n ? true : n.id, a, l]), _ = (0, c.e7)([O.Z, b.Z], () => b.Z.getChannel(O.Z.getChannelId())), p = (0, c.e7)([y.Z], () => y.Z.can(N.Plq.SEND_MESSAGES, _)), h = null != t, I = null == t && p && (!d || null != l), S = [];
  return (null != t || null != a) && (null != a && S.push({
    variant: "secondary",
    text: C.intl.string(C.t.cpT0Cg),
    onClick: u
  }), h && S.push({
    variant: "primary",
    text: (null == t ? true : t.name.length) > 30 ? C.intl.string(C.t.M35zFB) : C.intl.format(C.t.UdYYPz, {
      guildName: null == t ? true : t.name
    }),
    onClick: s
  }), I && S.push({
    variant: "primary",
    text: C.intl.string(C.t["0cCDKC"]),
    onClick: f
  })), (0, r.jsx)(A.j, L(w({}, o), {
    actions: S,
    children: (0, r.jsx)(G, w({
      guild: t,
      application: n
    }, o))
  }))
}

function G(e) {
  var {
    guild: t,
    application: n
  } = e, o = x(e, ["guild", "application"]);
  let a = C.intl.string(C.t.se5gLi);
  i.useEffect(() => {
    v.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: null == n ? true : n.id
    })
  }, [null == n ? true : n.id]);
  let s = i.useMemo(() => null != n ? null != t ? C.intl.format(C.t.IlF6IS, {
      installedApplicationName: null == n ? true : n.name,
      guildName: null == t ? true : t.name
    }) : C.intl.format(C.t.vTVC5e, {
      installedApplicationName: null == n ? true : n.name
    }) : C.intl.string(C.t["Dp+rgI"]), [n, t]),
    l = (0, r.jsx)(d.x, {
      variant: "text-md/normal",
      className: R.authorizedSuccessSubtext,
      children: s
    });
  return (0, r.jsx)(j, w({
    message: a,
    footer: l
  }, o))
}

function B(e) {
  var {
    application: t
  } = e, n = x(e, ["application"]);
  let {
    onClose: o
  } = n;
  i.useEffect(() => {
    v.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_VIEWED, {
      application_id: t.id
    })
  }, [t.id]);
  let a = i.useCallback(() => {
    null == o || o(), v.default.track(N.rMx.OAUTH2_AUTHORIZE_SUCCESS_CLOSE_CLICKED, {
      application_id: t.id
    })
  }, [o, t.id]);
  return (0, r.jsx)(A.j, L(w({}, n), {
    actions: [{
      variant: "primary",
      text: C.intl.string(C.t["31Bci4"]),
      onClick: a
    }],
    children: (0, r.jsxs)("div", {
      className: R.authorizedSuccessExternal,
      children: [(0, r.jsx)(p.ZP, {
        mask: p.QS.SQUIRCLE,
        className: R.authorizedSuccessExternalIcon,
        children: (0, r.jsx)("img", {
          alt: t.name,
          src: I.ZP.getApplicationIconURL({
            id: t.id,
            icon: t.icon
          })
        })
      }), (0, r.jsxs)("div", {
        className: R.authorizedSuccessExternalCopy,
        children: [(0, r.jsx)(_.X6q, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: C.intl.format(C.t["1Q+p1t"], {
            appName: t.name
          })
        }), (0, r.jsx)(d.x, {
          variant: "text-md/normal",
          color: "text-muted",
          children: C.intl.format(C.t.Mr7x5e, {
            appName: t.name
          })
        })]
      })]
    })
  }))
}

function Z(e) {
  return (0, r.jsx)(A.j, L(w({}, e), {
    title: C.intl.string(C.t.j2d6Ki),
    subtitle: C.intl.string(C.t["/B7kX1"]),
    actions: [{
      text: C.intl.string(C.t["31Bci4"]),
      onClick: e.onClose
    }]
  }))
}

function F(e) {
  return (0, r.jsx)(k, L(w({}, e), {
    headerClassName: R.headerFailure
  }))
}

function V() {
  var e, t;
  let n = (0, Chunk114858.TH)();
  return (0, Chunk255367.jsx)(Chunk787025.G, {
    removeChildWrapper: true,
    children: (0, Chunk255367.jsx)(Chunk787025.j, {
      transitionState: Chunk257465.D.ENTERED,
      hideHeader: true,
      children: (0, Chunk255367.jsx)(G, {
        guild: null == (e = require.state) ? true : module.guild,
        application: null == (t = require.state) ? true : exports.application,
        showsCloseWindowText: true
      })
    })
  })
}

function H(e) {
  var t, n;
  let {
    location: o
  } = e;
  i.useEffect(() => {
    if (null == o || "" === o.search) return;
    let e = null != document.referrer && "" !== document.referrer ? S.Z.toURLSafe(document.referrer) : null;
    (null == e || e.host !== window.location.host || e.pathname !== N.Z5c.OAUTH2_AUTHORIZE) && (0, g.uL)(N.Z5c.INDEX)
  }, [o]);
  let a = null != o ? (0, s.parse)(o.search) : {},
    l = null != (n = null != (t = a.error_description) ? t : a.error) ? n : C.intl.string(C.t["mqn87+"]);
  return (0, r.jsx)(A.G, {
    removeChildWrapper: true,
    children: (0, r.jsx)(A.j, {
      transitionState: f.D.ENTERED,
      hideHeader: true,
      title: C.intl.string(C.t.j2d6Ki),
      subtitle: l
    })
  })
}