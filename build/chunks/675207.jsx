/** Chunk was on 67127 **/
/** chunk id: 675207, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  VerifyAccountDeekLink: () => E,
  VerifyAccountLoading: () => m,
  default: () => S
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk114858 = require("./114858.js"),
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
  Chunk5194 = require("./5194.js");
let v = null != window.opener;

function S() {
  var e, t;
  let n = (0, Chunk114858.k6)(),
    i = (0, Chunk169382.l)(),
    s = Chunk755721.get("code"),
    O = Chunk755721.get("oauth_verifier"),
    b = null != (e = Chunk755721.get("state")) ? module : "",
    y = Chunk755721.get("loading"),
    S = null != (t = Chunk755721.get("iss")) ? exports : true,
    {
      type: w
    } = (0, Chunk114858.UO)(),
    R = (0, Chunk656649.vJ)(w),
    [A, T] = Chunk73800.useState(false),
    [x, D] = Chunk73800.useState(false),
    Z = (0, Chunk733427.Z)(),
    k = null == Chunk536285 ? null != Chunk481060 ? Chunk481060 : "" : Chunk536285;
  Chunk73800.useEffect(() => {
    let e;
    if (null != Chunk5194) return;
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
            n.replace(C.Z5c.CONNECTIONS_SUCCESS(t)), v && window.close();
            return
          }(null == c ? true : c.code) != null && i.append("error-code", c.code), n.replace("".concat(C.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        }
      }
      if (await _({
          platformType: exports,
          code: k,
          state: Chunk388032,
          openidParams: module,
          iss: S,
          handleCallbackResponse: Chunk255367
        })) return;
      let c = await h(exports, Chunk388032, k, module, S);
      0 === Chunk73800 ? T(true) : 1 === Chunk73800 ? require.replace("".concat(Chunk981631.Z5c.CONNECTIONS_ERROR(exports), "?").concat(Chunk755721.toString())) : 3 === Chunk73800 ? Chunk873546.tq ? D(true) : require.replace("".concat(Chunk981631.Z5c.CONNECTIONS_ERROR(exports), "?").concat(Chunk755721.toString())) : j({
        platformType: exports,
        state: Chunk388032,
        handleCallbackResponse: Chunk255367,
        handleCallbackError: e => {
          var r;
          (null == e || null == (r = e.body) ? true : r.code) != null && i.append("error-code", e.body.code), n.replace("".concat(C.Z5c.CONNECTIONS_ERROR(t), "?").concat(i.toString()))
        },
        openidParams: module,
        code: k,
        iss: S
      })
    }()
  }, [k, require, Chunk5194, w, Chunk755721, Chunk388032, S]), Chunk73800.useEffect(() => {
    let e;
    if (!A) return;
    let t = 0;
    async function r() {
      if (null == R) return;
      let {
        handoff_status: c,
        success_redirect: o
      } = (await Chunk457330.Z.getHandoffStatus(R, Chunk388032)).body;
      if (Chunk73800 === Chunk604039.g.HANDOFF_SUCCESS)
        if (null == Chunk591759.Z.toURLSafe(Chunk114858)) return require.replace(Chunk981631.Z5c.CONNECTIONS_SUCCESS(R));
        else {
          window.location = Chunk114858;
          return
        } if (Chunk73800 === Chunk604039.g.HANDOFF_ERROR || exports >= 10) return require.replace(Chunk981631.Z5c.CONNECTIONS_ERROR(R));
      e = setTimeout(() => {
        Z() && (t += 1, Chunk255367())
      }, 1e3)
    }
    return Chunk255367(), () => {
      null != module && clearTimeout(module)
    }
  }, [Z, require, R, A, Chunk388032]);
  let I = Chunk73800.useMemo(() => {
    if (null != R) return "discord://".concat(Chunk981631.Z5c.CONNECTIONS(R), "/?").concat(Chunk755721.toString())
  }, [R, Chunk755721]);
  return null != R && Chunk726542.Z.isSupported(R) ? x ? <E platformType={R} deeplink={I} onClick={() => {
      D(false), T(true)
    }} /> : <m platformType={R} /> : null
}

function m(e) {
  let {
    platformType: t
  } = e, n = p.Z.get(t);
  return <N.UV platformType={t}>{<div className={y.message}>{b.intl.format(b.t.AOKOe3, {
        name: n.name
      })}</div>}{<div className={y.buttonContainer}><i.zx className={y.btn} disabled={true}><s.$jN itemClassName={y.spinnerItem} /></i.zx></div>}</N.UV>
}

function E(e) {
  let {
    deeplink: t,
    onClick: n,
    platformType: c
  } = e, o = p.Z.get(c);
  return <N.UV platformType={c}><div className={y.buttonContainer}>{<div className={y.message}>{b.intl.format(b.t["6ig6i4"], {
          connectionName: o.name
        })}</div>}{<s.P3F tag={"a"} href={t} onClick={n} target={"_self"}><i.zx className={y.btn}>{b.intl.string(b.t.flvacH)}</i.zx></s.P3F>}</div></N.UV>
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
  if (l.tq || v) returnfalse;
  try {
    var i, s;
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
    return a(e), true
  } catch (e) {
    returnfalse
  }
}
async function h(e, t, n, r, c) {
  try {
    return await u.Z.sessionHandoff(e, t, n, r, c), 0
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
    let e = await u.Z.callback(t, {
      code: l,
      openid_params: o,
      state: n,
      iss: a
    }, !v);
    return r(e), true
  } catch (e) {
    return c(e), true
  }
}