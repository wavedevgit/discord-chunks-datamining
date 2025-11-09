/** Chunk was on 67127 **/
/** chunk id: 675207, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  VerifyAccountDeekLink: () => E,
  VerifyAccountLoading: () => v,
  default: () => m
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk843611 = require("./843611.js"),
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
  Chunk339166 = require("./339166.js");
let S = null != window.opener;

function m() {
  var e, t;
  let n = (0, Chunk843611.k6)(),
    i = (0, Chunk169382.l)(),
    u = Chunk755721.get("code"),
    O = Chunk755721.get("oauth_verifier"),
    b = null != (e = Chunk755721.get("state")) ? module : "",
    y = Chunk755721.get("loading"),
    m = null != (t = Chunk755721.get("iss")) ? exports : true,
    {
      type: w
    } = (0, Chunk843611.UO)(),
    R = (0, Chunk656649.vJ)(w),
    [A, T] = Chunk647438.useState(false),
    [D, x] = Chunk647438.useState(false),
    Z = (0, Chunk733427.Z)(),
    k = null == Chunk536285 ? null != Chunk481060 ? Chunk481060 : "" : Chunk536285;
  Chunk647438.useEffect(() => {
    let e;
    if (null != Chunk339166) return;
    for (let t of Chunk755721.keys()) exports.startsWith("openid.") && (null == module && (e = {}), module[exports] = Chunk755721.get(exports));
    let t = (0, Chunk656649.vJ)(w);
    !async function() {
      if (null == exports || !Chunk726542.Z.isSupported(exports)) return;

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
            n.replace(C.Z5c.CONNECTIONS_SUCCESS(t)), S && window.close();
            return
          }(null == c ? true : c.code) != null && i.append("error-code", c.code), n.replace("".concat(C.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        }
      }
      if (await _({
          platformType: exports,
          code: k,
          state: Chunk388032,
          openidParams: module,
          iss: m,
          handleCallbackResponse: Chunk951288
        })) return;
      let c = await h(exports, Chunk388032, k, module, m);
      0 === Chunk647438 ? T(true) : 1 === Chunk647438 ? require.replace("".concat(Chunk981631.Z5c.CONNECTIONS_ERROR(exports), "?").concat(Chunk755721.toString())) : 3 === Chunk647438 ? Chunk873546.tq ? x(true) : require.replace("".concat(Chunk981631.Z5c.CONNECTIONS_ERROR(exports), "?").concat(Chunk755721.toString())) : j({
        platformType: exports,
        state: Chunk388032,
        handleCallbackResponse: Chunk951288,
        handleCallbackError: e => {
          var r;
          (null == e || null == (r = e.body) ? true : r.code) != null && i.append("error-code", e.body.code), n.replace("".concat(C.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        },
        openidParams: module,
        code: k,
        iss: m
      })
    }()
  }, [k, require, Chunk339166, w, Chunk755721, Chunk388032, m]), Chunk647438.useEffect(() => {
    let e;
    if (!A) return;
    let t = 0;
    async function r() {
      if (null == R) return;
      let {
        handoff_status: c,
        success_redirect: o
      } = (await Chunk457330.Z.getHandoffStatus(R, Chunk388032)).body;
      if (Chunk647438 === Chunk604039.g.HANDOFF_SUCCESS)
        if (null == Chunk591759.Z.toURLSafe(Chunk843611)) return require.replace(Chunk981631.Z5c.CONNECTIONS_SUCCESS(R));
        else {
          window.location = Chunk843611;
          return
        } if (Chunk647438 === Chunk604039.g.HANDOFF_ERROR || exports >= 10) return require.replace(Chunk981631.Z5c.CONNECTIONS_ERROR(R));
      e = setTimeout(() => {
        Z() && (t += 1, Chunk951288())
      }, 1e3)
    }
    return Chunk951288(), () => {
      null != module && clearTimeout(module)
    }
  }, [Z, require, R, A, Chunk388032]);
  let I = Chunk647438.useMemo(() => {
    if (null != R) return "discord://".concat(Chunk981631.Z5c.CONNECTIONS(R), "/?").concat(Chunk755721.toString())
  }, [R, Chunk755721]);
  return null != R && Chunk726542.Z.isSupported(R) ? D ? (0, Chunk951288.jsx)(E, {
    platformType: R,
    deeplink: I,
    onClick: () => {
      x(false), T(true)
    }
  }) : (0, Chunk951288.jsx)(v, {
    platformType: R
  }) : null
}

function v(e) {
  let {
    platformType: t
  } = e, n = p.Z.get(t);
  return (0, r.jsxs)(g.UV, {
    platformType: t,
    children: [(0, r.jsx)("div", {
      className: y.message,
      children: b.intl.format(b.t.AOKOe7, {
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
  return (0, r.jsx)(g.UV, {
    platformType: c,
    children: (0, r.jsxs)("div", {
      className: y.buttonContainer,
      children: [(0, r.jsx)("div", {
        className: y.message,
        children: b.intl.format(b.t["6ig6i5"], {
          connectionName: o.name
        })
      }), (0, r.jsx)(u.P3F, {
        tag: "a",
        href: t,
        onClick: n,
        target: "_self",
        children: (0, r.jsx)(i.zx, {
          className: y.btn,
          children: b.intl.string(b.t.flvacA)
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
    openidParams: c,
    iss: o,
    handleCallbackResponse: a
  } = e;
  if (l.tq || S) returnfalse;
  try {
    var i, u;
    let e = await O.default.request(C.Etm.CONNECTIONS_CALLBACK, (i = function(e) {
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
async function h(e, t, n, r, c) {
  try {
    return await s.Z.sessionHandoff(e, t, n, r, c), 0
  } catch (e) {
    var o, l;
    if ((null == e || null == (o = e.body) ? true : o.code) === 10020) return 2;
    if ((null == e || null == (l = e.body) ? true : l.code) === 40001) return 3;
    return 1
  }
}
async function j(e) {
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