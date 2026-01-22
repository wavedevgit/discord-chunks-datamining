/** Chunk was on 52986 **/
/** chunk id: 556074, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  VerifyAccountDeekLink: () => g,
  VerifyAccountLoading: () => E,
  default: () => w
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

function w() {
  var e, t;
  let r = (0, l.W6)(),
    i = (0, f.o)(),
    u = i.get("code"),
    O = i.get("oauth_verifier"),
    S = null != (e = i.get("state")) ? e : "",
    C = i.get("loading"),
    w = null != (t = i.get("iss")) ? t : true,
    {
      type: j
    } = (0, l.g)(),
    A = (0, y.mw)(j),
    [R, T] = c.useState(false),
    [x, D] = c.useState(false),
    I = (0, d.A)(),
    k = null == O ? null != u ? u : "" : O;
  c.useEffect(() => {
    let e;
    if (null != C) return;
    for (let t of i.keys()) t.startsWith("openid.") && (null == e && (e = {}), e[t] = i.get(t));
    let t = (0, y.mw)(j);
    !async function() {
      if (null == t || !p.A.isSupported(t)) return;

      function n(e) {
        let {
          status: n,
          body: c
        } = e;
        if (null != t) {
          if (null == c ? true : c.redirect) {
            window.location = c.redirect;
            return
          }
          if ([200, 204].includes(n)) {
            r.replace(m.BVt.CONNECTIONS_SUCCESS(t)), b && window.close();
            return
          }(null == c ? true : c.code) != null && i.append("error-code", c.code), r.replace("".concat(m.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        }
      }
      if (await h({
          platformType: t,
          code: k,
          state: S,
          openidParams: e,
          iss: w,
          handleCallbackResponse: n
        })) return;
      let c = await v(t, S, k, e, w);
      0 === c ? T(true) : 1 === c ? r.replace("".concat(m.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString())) : 3 === c ? a.Fr ? D(true) : r.replace("".concat(m.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString())) : _({
        platformType: t,
        state: S,
        handleCallbackResponse: n,
        handleCallbackError: e => {
          var n;
          (null == e || null == (n = e.body) ? true : n.code) != null && i.append("error-code", e.body.code), r.replace("".concat(m.BVt.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        },
        openidParams: e,
        code: k,
        iss: w
      })
    }()
  }, [k, r, C, j, i, S, w]), c.useEffect(() => {
    let e;
    if (!R) return;
    let t = 0;
    async function n() {
      if (null == A) return;
      let {
        handoff_status: c,
        success_redirect: l
      } = (await s.A.getHandoffStatus(A, S)).body;
      if (c === o.N.HANDOFF_SUCCESS)
        if (null == N.A.toURLSafe(l)) return r.replace(m.BVt.CONNECTIONS_SUCCESS(A));
        else {
          window.location = l;
          return
        } if (c === o.N.HANDOFF_ERROR || t >= 10) return r.replace(m.BVt.CONNECTIONS_ERROR(A));
      e = setTimeout(() => {
        I() && (t += 1, n())
      }, 1e3)
    }
    return n(), () => {
      null != e && clearTimeout(e)
    }
  }, [I, r, A, R, S]);
  let P = c.useMemo(() => {
    if (null != A) return "discord://".concat(m.BVt.CONNECTIONS(A), "/?").concat(i.toString())
  }, [A, i]);
  return null != A && p.A.isSupported(A) ? x ? (0, n.jsx)(g, {
    platformType: A,
    deeplink: P,
    onClick: () => {
      D(false), T(true)
    }
  }) : (0, n.jsx)(E, {
    platformType: A
  }) : null
}

function E(e) {
  let {
    platformType: t
  } = e, r = p.A.get(t);
  return (0, n.jsxs)(y.mP, {
    platformType: t,
    children: [(0, n.jsx)("div", {
      className: C.iU,
      children: S.intl.format(S.t.AOKOe7, {
        name: r.name
      })
    }), (0, n.jsx)("div", {
      className: C.UD,
      children: (0, n.jsx)(i.$n, {
        className: C.HM,
        disabled: true,
        children: (0, n.jsx)(u.y$y, {
          itemClassName: C.$N
        })
      })
    })]
  })
}

function g(e) {
  let {
    deeplink: t,
    onClick: r,
    platformType: c
  } = e, l = p.A.get(c);
  return (0, n.jsx)(y.mP, {
    platformType: c,
    children: (0, n.jsxs)("div", {
      className: C.UD,
      children: [(0, n.jsx)("div", {
        className: C.iU,
        children: S.intl.format(S.t["6ig6i5"], {
          connectionName: l.name
        })
      }), (0, n.jsx)(u.DUT, {
        tag: "a",
        href: t,
        onClick: r,
        target: "_self",
        children: (0, n.jsx)(i.$n, {
          className: C.HM,
          children: S.intl.string(S.t.flvacA)
        })
      })]
    })
  })
}
async function h(e) {
  let {
    platformType: t,
    code: r,
    state: n,
    openidParams: c,
    iss: l,
    handleCallbackResponse: o
  } = e;
  if (a.Fr || b) returnfalse;
  try {
    var i, u;
    let e = await O.default.request(m.e$_.CONNECTIONS_CALLBACK, (i = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, {
      code: r,
      openid_params: c,
      iss: l,
      state: n
    }), u = {
      providerType: t
    }, u = null != u ? u : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(u)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e))
    }), i)).finally(() => {
      O.default.disconnect()
    });
    return o(e), true
  } catch (e) {
    returnfalse
  }
}
async function v(e, t, r, n, c) {
  try {
    return await s.A.sessionHandoff(e, t, r, n, c), 0
  } catch (e) {
    var l, a;
    if ((null == e || null == (l = e.body) ? true : l.code) === 10020) return 2;
    if ((null == e || null == (a = e.body) ? true : a.code) === 40001) return 3;
    return 1
  }
}
async function _(e) {
  let {
    platformType: t,
    state: r,
    handleCallbackResponse: n,
    handleCallbackError: c,
    openidParams: l,
    code: a,
    iss: o
  } = e;
  try {
    let e = await s.A.callback(t, {
      code: a,
      openid_params: l,
      state: r,
      iss: o
    }, !b);
    return n(e), true
  } catch (e) {
    return c(e), true
  }
}