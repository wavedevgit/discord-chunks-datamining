/** Chunk was on 52986 **/
/** chunk id: 556074, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  VerifyAccountDeekLink: () => E,
  VerifyAccountLoading: () => w,
  default: () => g
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk960488 = require("./960488.js"),
  Chunk607399 = require("./607399.js"),
  Chunk590053 = require("./590053.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77468 = require("./77468.js"),
  Chunk964459 = require("./964459.js"),
  Chunk458518 = require("./458518.js"),
  Chunk573648 = require("./573648.js"),
  Chunk129014 = require("./129014.js"),
  Chunk998218 = require("./998218.js"),
  Chunk950198 = require("./950198.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk538644 = require("./538644.js");
let b = null != window.opener;

function g() {
  var e, t;
  let n = (0, c.W6)(),
    i = (0, f.o)(),
    s = i.get("code"),
    O = i.get("oauth_verifier"),
    S = null != (e = i.get("state")) ? e : "",
    C = i.get("loading"),
    g = null != (t = i.get("iss")) ? t : true,
    {
      type: j
    } = (0, c.g)(),
    A = (0, m.mw)(j),
    [R, T] = l.useState(false),
    [D, x] = l.useState(false),
    I = (0, d.A)(),
    k = null == O ? null != s ? s : "" : O;
  l.useEffect(() => {
    let e;
    if (null != C) return;
    for (let t of i.keys()) t.startsWith("openid.") && (null == e && (e = {}), e[t] = i.get(t));
    let t = (0, m.mw)(j);
    !async function() {
      if (null == t || !p.A.isSupported(t)) return;

      function r(e) {
        let {
          status: r,
          body: l
        } = e;
        if (null != t) {
          if (null == l ? true : l.redirect) {
            window.location = l.redirect;
            return
          }
          if ([200, 204].includes(r)) {
            n.replace(y.BVt.CONNECTIONS_SUCCESS(t)), b && window.close();
            return
          }(null == l ? true : l.code) != null && i.append("error-code", l.code), n.replace("".concat(y.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        }
      }
      if (await _({
          platformType: t,
          code: k,
          state: S,
          openidParams: e,
          iss: g,
          handleCallbackResponse: r
        })) return;
      let l = await v(t, S, k, e, g);
      0 === l ? T(true) : 1 === l ? n.replace("".concat(y.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString())) : 3 === l ? a.Fr ? x(true) : n.replace("".concat(y.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString())) : h({
        platformType: t,
        state: S,
        handleCallbackResponse: r,
        handleCallbackError: e => {
          var r;
          (null == e || null == (r = e.body) ? true : r.code) != null && i.append("error-code", e.body.code), n.replace("".concat(y.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        },
        openidParams: e,
        code: k,
        iss: g
      })
    }()
  }, [k, n, C, j, i, S, g]), l.useEffect(() => {
    let e;
    if (!R) return;
    let t = 0;
    async function r() {
      if (null == A) return;
      let {
        handoff_status: l,
        success_redirect: c
      } = (await u.A.getHandoffStatus(A, S)).body;
      if (l === o.N.HANDOFF_SUCCESS)
        if (null == N.A.toURLSafe(c)) return n.replace(y.BVt.CONNECTIONS_SUCCESS(A));
        else {
          window.location = c;
          return
        } if (l === o.N.HANDOFF_ERROR || t >= 10) return n.replace(y.BVt.CONNECTIONS_ERROR(A));
      e = setTimeout(() => {
        I() && (t += 1, r())
      }, 1e3)
    }
    return r(), () => {
      null != e && clearTimeout(e)
    }
  }, [I, n, A, R, S]);
  let P = l.useMemo(() => {
    if (null != A) return "discord://".concat(y.BVt.CONNECTIONS(A), "/?").concat(i.toString())
  }, [A, i]);
  return null != A && p.A.isSupported(A) ? D ? (0, r.jsx)(E, {
    platformType: A,
    deeplink: P,
    onClick: () => {
      x(false), T(true)
    }
  }) : (0, r.jsx)(w, {
    platformType: A
  }) : null
}

function w(e) {
  let {
    platformType: t
  } = e, n = p.A.get(t);
  return (0, r.jsxs)(m.mP, {
    platformType: t,
    children: [(0, r.jsx)("div", {
      className: C.iU,
      children: S.intl.format(S.t.AOKOe7, {
        name: n.name
      })
    }), (0, r.jsx)("div", {
      className: C.UD,
      children: (0, r.jsx)(i.$n, {
        className: C.HM,
        disabled: true,
        children: (0, r.jsx)(s.y$y, {
          itemClassName: C.$N
        })
      })
    })]
  })
}

function E(e) {
  let {
    deeplink: t,
    onClick: n,
    platformType: l
  } = e, c = p.A.get(l);
  return (0, r.jsx)(m.mP, {
    platformType: l,
    children: (0, r.jsxs)("div", {
      className: C.UD,
      children: [(0, r.jsx)("div", {
        className: C.iU,
        children: S.intl.format(S.t["6ig6i5"], {
          connectionName: c.name
        })
      }), (0, r.jsx)(s.DUT, {
        tag: "a",
        href: t,
        onClick: n,
        target: "_self",
        children: (0, r.jsx)(i.$n, {
          className: C.HM,
          children: S.intl.string(S.t.flvacA)
        })
      })]
    })
  })
}
async function _(e) {
  let {
    platformType: t,
    code: n,
    state: r,
    openidParams: l,
    iss: c,
    handleCallbackResponse: o
  } = e;
  if (a.Fr || b) returnfalse;
  try {
    var i, s;
    let e = await O.default.request(y.e$_.CONNECTIONS_CALLBACK, (i = function(e) {
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
    }({}, {
      code: n,
      openid_params: l,
      iss: c,
      state: r
    }), s = {
      providerType: t
    }, s = null != s ? s : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(s)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
    }), i)).finally(() => {
      O.default.disconnect()
    });
    return o(e), true
  } catch (e) {
    returnfalse
  }
}
async function v(e, t, n, r, l) {
  try {
    return await u.A.sessionHandoff(e, t, n, r, l), 0
  } catch (e) {
    var c, a;
    if ((null == e || null == (c = e.body) ? true : c.code) === 10020) return 2;
    if ((null == e || null == (a = e.body) ? true : a.code) === 40001) return 3;
    return 1
  }
}
async function h(e) {
  let {
    platformType: t,
    state: n,
    handleCallbackResponse: r,
    handleCallbackError: l,
    openidParams: c,
    code: a,
    iss: o
  } = e;
  try {
    let e = await u.A.callback(t, {
      code: a,
      openid_params: c,
      state: n,
      iss: o
    }, !b);
    return r(e), true
  } catch (e) {
    return l(e), true
  }
}