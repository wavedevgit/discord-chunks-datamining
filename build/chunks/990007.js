/** Chunk was on 21738 **/
/** chunk id: 990007, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./747238.js"), require("./938796.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk488428 = require("./488428.js"),
  Chunk485845 = require("./485845.js"),
  Chunk179771 = require("./179771.js"),
  Chunk136722 = require("./136722.js"),
  Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk898467 = require("./898467.js"),
  Chunk420970 = require("./420970.js"),
  Chunk506774 = require("./506774.js"),
  Chunk73153 = require("./73153.js"),
  Chunk587895 = require("./587895.js"),
  Chunk224750 = require("./224750.js"),
  Chunk716965 = require("./716965.js"),
  Chunk671523 = require("./671523.js"),
  Chunk337095 = require("./337095.js"),
  Chunk611010 = require("./611010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk488926 = require("./488926.js"),
  Chunk636401 = require("./636401.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");

function S(e) {
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

function C(e, t) {
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
let N = "CachedTokens",
  T = {
    "1273616940451102832": new Chunk898467.A(2, +Chunk927813.A.Millis.MINUTE)
  };
async function j(e, t, n) {
  let r, l, o, c, u, {
    client_id: d,
    response_type: p = "code",
    redirect_uri: E,
    code_challenge: I,
    code_challenge_method: S,
    state: C,
    nonce: N,
    scope: j,
    permissions: x,
    guild_id: P,
    channel_id: w,
    prompt: L,
    disable_guild_select: R,
    integration_type: D,
    pid: M,
    signal: k,
    isSocketRpcPrivateScope: U
  } = e;
  if (null == k ? true : k.aborted) throw new y.A({
    errorCode: v.Lw6.UNKNOWN_ERROR
  }, "Request aborted");
  if (null == d) throw new y.A({
    errorCode: v.Lw6.OAUTH2_ERROR
  }, "No Client ID provided");
  if (!U && null != E) throw new y.A({
    errorCode: v.Lw6.OAUTH2_ERROR
  }, "Redirect URI cannot be used in the RPC OAuth2 Authorization flow");
  let G = [];
  if ("string" == typeof j ? G = j.split(" ").filter(e => e.length > 0) : Array.isArray(j) && (G = j), null == b.default.getCurrentUser()) throw new y.A({
    errorCode: v.Lw6.OAUTH2_ERROR
  }, "Client is not logged in");
  if (null != D) l = Number(D);
  else {
    let e = e => {
        var t;
        return null != e && (0, s.Lt)(e.flags, v.gfo.EMBEDDED) && (null == (t = e.integrationTypesConfig) ? true : t[i.b.USER_INSTALL]) != null
      },
      t = h.A.getApplication(d);
    l = e(t) || e(t = _.Ay.createFromServer(await (0, A.TA)(d, k))) ? i.b.USER_INSTALL : i.b.GUILD_INSTALL
  }
  try {
    [o, {
      disclosures: c,
      allAcked: u
    }] = await Promise.all([(0, f.qY)({
      clientId: d,
      scopes: G,
      responseType: p,
      redirectUri: E,
      codeChallenge: I,
      codeChallengeMethod: S,
      state: C,
      integrationType: l,
      signal: k
    }), (0, g.vG)(d)])
  } catch (t) {
    let {
      body: e
    } = t;
    throw new y.A({
      errorCode: v.Lw6.OAUTH2_ERROR
    }, "OAuth2 Authorization Error: ".concat((null == e ? true : e.message) || "Unknown Error"))
  }
  if (L === m.l.NONE && null != o && o.authorized && u) try {
    return (await (0, f.Gq)({
      authorize: true,
      clientId: d,
      scopes: G,
      responseType: p,
      redirectUri: E,
      codeChallenge: I,
      codeChallengeMethod: S,
      state: C,
      nonce: N,
      integrationType: l
    })).location
  } catch (t) {
    let {
      body: e
    } = t;
    throw new y.A({
      errorCode: v.Lw6.OAUTH2_ERROR
    }, "OAuth2 Authorize Error: ".concat((null == e ? true : e.message) || "Unknown Error"))
  }
  null == n || n(o.application, w, M);
  let V = O.x3;
  try {
    V = a.iu(null != x ? x : 0)
  } catch (e) {}
  if (null != o.integration_type && Object.values(i.b).includes(o.integration_type) && (r = new Map).set(o.integration_type, o), null != T[o.application.id] && (await T[o.application.id].process(), null == k ? true : k.aborted)) throw new y.A({
    errorCode: v.Lw6.UNKNOWN_ERROR
  }, "Request aborted");
  return t({
    clientId: d,
    authorizations: r,
    scopes: G,
    parsedPermissions: V,
    responseType: p,
    redirectUri: E,
    codeChallenge: I,
    codeChallengeMethod: S,
    state: C,
    guildId: P,
    channelId: w,
    prompt: L,
    disableGuildSelect: R,
    disclosures: c,
    integrationType: l,
    pid: M,
    signal: k
  })
}

function x(e, t) {
  if (e.authorization.accessToken) throw new y.A({
    errorCode: v.Lw6.INVALID_COMMAND
  }, "Already authenticated");
  if (e.authorization.authing) throw new y.A({
    errorCode: v.Lw6.INVALID_COMMAND
  }, "Already authenticating");
  return e.authorization.authing = true, o.Bo.get({
    url: v.Rsh.OAUTH2_CURRENT_AUTH,
    headers: {
      Authorization: "Bearer ".concat(t)
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(n => {
    e.authorization.authing = false;
    let {
      application: r,
      user: i,
      scopes: l,
      expires: a
    } = n.body;
    if (e.application.id !== r.id) throw new y.A({
      errorCode: v.Lw6.INVALID_CLIENTID
    }, "Application does not match the connection's");
    let s = b.default.getCurrentUser();
    if (null == s || !i || s.id !== i.id) throw new y.A({
      errorCode: v.Lw6.INVALID_TOKEN
    }, "Token does not match current user");
    return e.authorization.scopes = [...e.authorization.scopes, ...l, I.VH], e.authorization.accessToken = t, e.authorization.expires = new Date(a), p.h.dispatch({
      type: "RPC_APP_AUTHENTICATED",
      socketId: e.id,
      application: e.application
    }), C(S({}, n.body), {
      access_token: t
    })
  }, () => {
    throw new y.A({
      errorCode: v.Lw6.INVALID_TOKEN
    }, "Invalid access token: ".concat(t))
  }).catch(t => {
    throw e.authorization.authing = false, t
  })
}

function P(e, t) {
  return {
    [v.e$_.AUTHENTICATE]: (0, u.T)(v.e$_.AUTHENTICATE, {
      handler(n) {
        let {
          socket: i,
          signal: a,
          args: {
            access_token: s
          }
        } = n;
        if (null == s && i.transport === I.z4.IPC) {
          let n = i.application.id;
          if (null == n) throw new y.A({
            errorCode: v.Lw6.INVALID_COMMAND
          }, "No application.");
          let o = l.F.IDENTIFY,
            c = () => j({
              client_id: n,
              scope: o,
              response_type: "token",
              signal: a,
              isSocketRpcPrivateScope: false
            }, e, t).then(e => {
              var t, l, a, s, o;
              let c;
              if (null == e) throw new y.A({
                errorCode: v.Lw6.UNKNOWN_ERROR
              }, "Unknown error occurred");
              let u = e.split(/#|\?/),
                p = r.parse(u[u.length - 1]);
              if (null != p.error) throw new y.A({
                errorCode: v.Lw6.OAUTH2_ERROR
              }, "OAuth2 Error: ".concat(p.error, ": ").concat(null != (t = p.error_description) ? t : "unknown error"));
              return l = p.access_token, a = p.scope, s = p.expires_in, (c = null != (o = d.w.get(N)) ? o : {})[n] = {
                accessToken: l,
                scope: a,
                expires: Date.now() + s
              }, d.w.set(N, c), x(i, p.access_token)
            });
          return null != (s = function(e, t) {
            let n = d.w.get(N);
            if (null != n && null != n[e]) {
              let r = n[e];
              if (!(r.scope !== t || r.expires <= Date.now())) return r.accessToken;
              delete n[e], d.w.set(N, n)
            }
          }(n, o)) ? x(i, s).catch(() => {
            var e;
            let t;
            return t = null != (e = d.w.get(N)) ? e : {}, delete t[n], d.w.set(N, t), c()
          }) : c()
        }
        if (null == s) throw new y.A({
          errorCode: v.Lw6.INVALID_TOKEN
        }, "No access token provided");
        return x(i, s)
      }
    }),
    [v.e$_.AUTHORIZE]: {
      handler(n) {
        let {
          socket: r,
          signal: i,
          args: l
        } = n, a = l.client_id;
        if (!a) throw new y.A({
          errorCode: v.Lw6.INVALID_CLIENTID
        }, "No client id provided");
        if (null != r.authorization.accessToken) throw new y.A({
          errorCode: v.Lw6.INVALID_COMMAND
        }, "Already authenticated");
        if (r.authorization.authing) throw new y.A({
          errorCode: v.Lw6.INVALID_COMMAND
        }, "Already authing");
        if (r.authorization.authing = true, "token" === l.response_type) throw r.authorization.authing = false, new y.A({
          errorCode: v.Lw6.INVALID_COMMAND
        }, 'Authorization response_type "token" is not supported');
        let s = r.authorization.scopes.includes(I.LQ);
        if (!s && r.application.id !== a) throw r.authorization.authing = false, new y.A({
          errorCode: v.Lw6.INVALID_CLIENTID
        }, "Application does not match the connection's");
        let o = l.scopes || l.scope;
        return delete l.scopes, j(C(S({}, l), {
          scope: o,
          signal: i,
          isSocketRpcPrivateScope: s
        }), e, t).then(e => {
          if (r.authorization.authing = false, null == e) throw new y.A({
            errorCode: v.Lw6.UNKNOWN_ERROR
          }, "Unknown error occurred");
          let t = new URL(e),
            n = t.searchParams.get("code");
          if (s) return {
            code: n,
            location: e
          };
          let i = t.searchParams.get("error");
          if (null != i && "" !== i) {
            var l;
            let e = null != (l = t.searchParams.get("error_description")) ? l : "unknown error";
            throw new y.A({
              errorCode: v.Lw6.OAUTH2_ERROR
            }, "OAuth2 Error: ".concat(i, ": ").concat(e))
          }
          if (null == n) throw new y.A({
            errorCode: v.Lw6.OAUTH2_ERROR
          }, "OAuth2 Error: Unable to find auth code");
          return {
            code: n
          }
        }).catch(e => {
          throw r.authorization.authing = false, e
        })
      }
    }
  }
}