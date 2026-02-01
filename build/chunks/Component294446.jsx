/** Chunk was on 21738 **/
/** chunk id: 294446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk851907 = require("./851907.js"),
  Chunk587895 = require("./587895.js"),
  Chunk200330 = require("./200330.jsx"),
  Chunk321987 = require("./321987.jsx"),
  Chunk595244 = require("./595244.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk837921 = require("./837921.js"),
  Chunk636401 = require("./636401.js"),
  Chunk990007 = require("./990007.js"),
  Chunk546983 = require("./546983.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function A(e) {
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
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = (0, Chunk990007.A)(e => {
  var t;
  let {
    clientId: n,
    authorizations: u,
    scopes: d,
    parsedPermissions: h,
    responseType: b,
    redirectUri: E,
    codeChallenge: O,
    codeChallengeMethod: y,
    state: I,
    guildId: v,
    channelId: S,
    prompt: C,
    disableGuildSelect: N,
    disclosures: T,
    integrationType: j,
    pid: x,
    signal: P
  } = e, w = "OAuth2Authorize_".concat(n, "_").concat(v, "_").concat(S), L = null != j ? null == u ? true : u.get(j) : true, R = null != (t = null == L ? true : L.application) ? t : a.A.getApplication(n);
  return new Promise((e, t) => {
    let a = (0, g.d5)(x),
      L = i.SYi;
    null != R && null != (0, l.Ay)({
      application: R,
      channelId: S
    }) ? L = i.KX8 : a.context === m.BRT.POPOUT && (L = i.KX8);
    let D = false,
      M = l => {
        let {
          clientId: s,
          location: o
        } = l;
        if (null == s || s === n) {
          if (D = true, null == o) {
            t(new p.A({
              errorCode: m.Lw6.OAUTH2_ERROR
            }, "OAuth2 Error: No location provided")), a.lock();
            return
          }(e(o), null == E || null == R) ? a.lock(): null == new URL(o).searchParams.get("error") ? (0, i.qfG)(e => (0, r.jsx)(c.Sm, A({
            application: R
          }, e)), {
            onCloseCallback: () => {
              a.lock()
            }
          }, L) : (0, i.qfG)(e => (0, r.jsx)(c.xb, A({}, e)), {
            onCloseCallback: () => {
              a.lock()
            }
          }, L)
        }
      },
      {
        cleanup: k
      } = function(e, t) {
        function n() {
          (0, i.OoC)(e) && (0, i.qfG)(e => (0, r.jsx)(o.f, _(A({}, e), {
            title: f.intl.string(f.t.j2d6Km),
            subtitle: f.intl.string(f.t["4LKmN5"]),
            actions: [{
              text: f.intl.string(f.t.cpT0Cq),
              onClick: e.onClose
            }]
          })))
        }
        return null == t || t.addEventListener("abort", n), {
          cleanup: function() {
            null == t || t.removeEventListener("abort", n)
          }
        }
      }(w, P);
    (0, i.qfG)(e => (0, r.jsx)(s.OAuth2AuthorizeModal, _(A({}, e), {
      authorizations: u,
      clientId: n,
      scopes: null != d ? d : [],
      disclosures: null != T ? T : [],
      callback: M,
      responseType: b,
      redirectUri: E,
      codeChallenge: O,
      codeChallengeMethod: y,
      state: I,
      permissions: h,
      guildId: v,
      channelId: S,
      prompt: C,
      disableGuildSelect: "boolean" == typeof N ? N : "true" === N,
      integrationType: j,
      cancelCompletesFlow: true
    })), {
      modalKey: w,
      onCloseCallback: () => {
        k(), D || (t(new p.A({
          errorCode: m.Lw6.OAUTH2_ERROR
        }, "User cancelled authorization")), a.lock())
      }
    }, L)
  })
}, function(e, t, n) {
  if ((0, g.kS)(n) || !u.isPlatformEmbedded) return;
  let r = (0, l.Ay)({
    application: e,
    channelId: t
  });
  (0, u.isWindows)() ? d.Ay.minimize(r): d.Ay.restore(r), d.Ay.focus(r)
})