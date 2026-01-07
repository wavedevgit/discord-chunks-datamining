/** Chunk was on 67127 **/
/** chunk id: 675207, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  VerifyAccountDeekLink: () => E,
  VerifyAccountLoading: () => v,
  default: () => m
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828700 = require("./828700.js"),
  Chunk873546 = require("./873546.js"),
  Chunk604039 = require("./604039.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk733427 = require("./733427.js"),
  Chunk169382 = require("./169382.js"),
  Chunk726542 = require("./726542.js"),
  Chunk536285 = require("./536285.js"),
  Chunk591759 = require("./591759.js"),
  Chunk656649 = require("./656649.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk936502 = require("./936502.js");
let S = null != window.opener;

function m() {
  var e, t;
  let n = (0, o.k6)(),
    i = (0, f.l)(),
    u = i.get("code"),
    O = i.get("oauth_verifier"),
    C = null != (e = i.get("state")) ? e : "",
    y = i.get("loading"),
    m = null != (t = i.get("iss")) ? t : true,
    {
      type: R
    } = (0, o.UO)(),
    _ = (0, b.vJ)(R),
    [A, T] = c.useState(false),
    [D, x] = c.useState(false),
    Z = (0, d.Z)(),
    k = null == O ? null != u ? u : "" : O;
  c.useEffect(() => {
    let e;
    if (null != y) return;
    for (let t of i.keys()) t.startsWith("openid.") && (null == e && (e = {}), e[t] = i.get(t));
    let t = (0, b.vJ)(R);
    !async function() {
      if (null == t || !p.Z.isSupported(t)) return;

      function r(e) {
        let {
          status: r,
          body: c
        } = e;
        if (null != t) {
          if (null == c ? true : c.redirect) {
            window.location = c.redirect;
            return
          }
          if ([200, 204].includes(r)) {
            n.replace(g.Z5c.CONNECTIONS_SUCCESS(t)), S && window.close();
            return
          }(null == c ? true : c.code) != null && i.append("error-code", c.code), n.replace("".concat(g.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        }
      }
      if (await h({
          platformType: t,
          code: k,
          state: C,
          openidParams: e,
          iss: m,
          handleCallbackResponse: r
        })) return;
      let c = await j(t, C, k, e, m);
      0 === c ? T(true) : 1 === c ? n.replace("".concat(g.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString())) : 3 === c ? l.tq ? x(true) : n.replace("".concat(g.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString())) : w({
        platformType: t,
        state: C,
        handleCallbackResponse: r,
        handleCallbackError: e => {
          var r;
          (null == e || null == (r = e.body) ? true : r.code) != null && i.append("error-code", e.body.code), n.replace("".concat(g.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        },
        openidParams: e,
        code: k,
        iss: m
      })
    }()
  }, [k, n, y, R, i, C, m]), c.useEffect(() => {
    let e;
    if (!A) return;
    let t = 0;
    async function r() {
      if (null == _) return;
      let {
        handoff_status: c,
        success_redirect: o
      } = (await s.Z.getHandoffStatus(_, C)).body;
      if (c === a.g.HANDOFF_SUCCESS)
        if (null == N.Z.toURLSafe(o)) return n.replace(g.Z5c.CONNECTIONS_SUCCESS(_));
        else {
          window.location = o;
          return
        } if (c === a.g.HANDOFF_ERROR || t >= 10) return n.replace(g.Z5c.CONNECTIONS_ERROR(_));
      e = setTimeout(() => {
        Z() && (t += 1, r())
      }, 1e3)
    }
    return r(), () => {
      null != e && clearTimeout(e)
    }
  }, [Z, n, _, A, C]);
  let I = c.useMemo(() => {
    if (null != _) return "discord://".concat(g.Z5c.CONNECTIONS(_), "/?").concat(i.toString())
  }, [_, i]);
  return null != _ && p.Z.isSupported(_) ? D ? (0, r.jsx)(E, {
    platformType: _,
    deeplink: I,
    onClick: () => {
      x(false), T(true)
    }
  }) : (0, r.jsx)(v, {
    platformType: _
  }) : null
}

function v(e) {
  let {
    platformType: t
  } = e, n = p.Z.get(t);
  return (0, r.jsxs)(b.UV, {
    platformType: t,
    children: [(0, r.jsx)("div", {
      className: y.message,
      children: C.intl.format(C.t.AOKOe7, {
        name: n.name
      })
    }), (0, r.jsx)("div", {
      className: y.buttonContainer,
      children: (0, r.jsx)(i.zx, {
        className: y.btn,
        disabled: true,
        children: (0, r.jsx)(u.$jN, {
          itemClassName: y.spinnerItem
        })
      })
    })]
  })
}

function E(e) {
  let {
    deeplink: t,
    onClick: n,
    platformType: c
  } = e, o = p.Z.get(c);
  return (0, r.jsx)(b.UV, {
    platformType: c,
    children: (0, r.jsxs)("div", {
      className: y.buttonContainer,
      children: [(0, r.jsx)("div", {
        className: y.message,
        children: C.intl.format(C.t["6ig6i5"], {
          connectionName: o.name
        })
      }), (0, r.jsx)(u.P3F, {
        tag: "a",
        href: t,
        onClick: n,
        target: "_self",
        children: (0, r.jsx)(i.zx, {
          className: y.btn,
          children: C.intl.string(C.t.flvacA)
        })
      })]
    })
  })
}
async function h(e) {
  let {
    platformType: t,
    code: n,
    state: r,
    openidParams: c,
    iss: o,
    handleCallbackResponse: a
  } = e;
  if (l.tq || S) returnfalse;
  try {
    var i, u;
    let e = await O.default.request(g.Etm.CONNECTIONS_CALLBACK, (i = function(e) {
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
      openid_params: c,
      iss: o,
      state: r
    }), u = {
      providerType: t
    }, u = null != u ? u : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(u)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e))
    }), i)).finally(() => {
      O.default.disconnect()
    });
    return a(e), true
  } catch (e) {
    returnfalse
  }
}
async function j(e, t, n, r, c) {
  try {
    return await s.Z.sessionHandoff(e, t, n, r, c), 0
  } catch (e) {
    var o, l;
    if ((null == e || null == (o = e.body) ? true : o.code) === 10020) return 2;
    if ((null == e || null == (l = e.body) ? true : l.code) === 40001) return 3;
    return 1
  }
}
async function w(e) {
  let {
    platformType: t,
    state: n,
    handleCallbackResponse: r,
    handleCallbackError: c,
    openidParams: o,
    code: l,
    iss: a
  } = e;
  try {
    let e = await s.Z.callback(t, {
      code: l,
      openid_params: o,
      state: n,
      iss: a
    }, !S);
    return r(e), true
  } catch (e) {
    return c(e), true
  }
}