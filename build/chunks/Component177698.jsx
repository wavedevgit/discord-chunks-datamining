/** Chunk was on 1272 **/
/** chunk id: 177698, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk531826 = require("./531826.js"),
  Chunk812206 = require("./812206.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk787025 = require("./787025.jsx"),
  Chunk397394 = require("./397394.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk996106 = require("./996106.js"),
  Chunk703912 = require("./703912.js"),
  Chunk852926 = require("./852926.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
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

function E(e, t) {
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
let _ = (0, Chunk703912.Z)(e => {
  var t;
  let {
    clientId: n,
    authorizations: u,
    scopes: d,
    parsedPermissions: f,
    responseType: _,
    redirectUri: O,
    codeChallenge: v,
    codeChallengeMethod: I,
    state: y,
    guildId: C,
    channelId: S,
    prompt: T,
    disableGuildSelect: N,
    disclosures: j,
    integrationType: x,
    pid: P,
    signal: A
  } = e, Z = "OAuth2Authorize_".concat(n, "_").concat(C, "_").concat(S), w = null != x ? null == u ? true : u.get(x) : true, L = null != (t = null == w ? true : w.application) ? t : a.Z.getApplication(n);
  return new Promise((e, t) => {
    let a = (0, g.jU)(P),
      w = i.z1l;
    null != L && null != (0, l.ZP)({
      application: L,
      channelId: S
    }) ? w = i.u1M : a.context === h.IlC.POPOUT && (w = i.u1M);
    let R = false,
      D = l => {
        let {
          clientId: o,
          location: s
        } = l;
        if (null == o || o === n) {
          if (R = true, null == s) {
            t(new p.Z({
              errorCode: h.lTL.OAUTH2_ERROR
            }, "OAuth2 Error: No location provided")), a.lock();
            return
          }
          if (e(s), null == O || null == L) return void a.lock();
          null == new URL(s).searchParams.get("error") ? (0, i.h7j)(e => (0, r.jsx)(c.$0, b({
            application: L
          }, e)), {
            onCloseCallback: () => {
              a.lock()
            }
          }, w) : (0, i.h7j)(e => (0, r.jsx)(c.ks, b({}, e)), {
            onCloseCallback: () => {
              a.lock()
            }
          }, w)
        }
      },
      {
        cleanup: M
      } = function(e, t) {
        function n() {
          (0, i.Mr3)(e) && (0, i.h7j)(e => (0, r.jsx)(s.j, E(b({}, e), {
            title: m.intl.string(m.t.j2d6Km),
            subtitle: m.intl.string(m.t["4LKmN5"]),
            actions: [{
              text: m.intl.string(m.t.cpT0Cq),
              onClick: e.onClose
            }]
          })))
        }
        return null == t || t.addEventListener("abort", n), {
          cleanup: function() {
            null == t || t.removeEventListener("abort", n)
          }
        }
      }(Z, A);
    (0, i.h7j)(e => (0, r.jsx)(o.OAuth2AuthorizeModal, E(b({}, e), {
      authorizations: u,
      clientId: n,
      scopes: null != d ? d : [],
      disclosures: null != j ? j : [],
      callback: D,
      responseType: _,
      redirectUri: O,
      codeChallenge: v,
      codeChallengeMethod: I,
      state: y,
      permissions: f,
      guildId: C,
      channelId: S,
      prompt: T,
      disableGuildSelect: "boolean" == typeof N ? N : "true" === N,
      integrationType: x,
      cancelCompletesFlow: true
    })), {
      modalKey: Z,
      onCloseCallback: () => {
        M(), R || (t(new p.Z({
          errorCode: h.lTL.OAUTH2_ERROR
        }, "User cancelled authorization")), a.lock())
      }
    }, w)
  })
}, function(e, t, n) {
  if ((0, g.br)(n) || !u.isPlatformEmbedded) return;
  let r = (0, l.ZP)({
    application: e,
    channelId: t
  });
  (0, u.isWindows)() ? d.ZP.minimize(r): d.ZP.restore(r), d.ZP.focus(r)
})