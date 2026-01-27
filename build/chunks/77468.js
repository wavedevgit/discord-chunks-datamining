/** Chunk was on web.js **/
/** chunk id: 77468, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk110259 = require("./110259.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk370480 = require("./370480.js"),
  Chunk626584 = require("./626584.js"),
  Chunk962173 = require("./962173.js"),
  Chunk954571 = require("./954571.js"),
  Chunk499785 = require("./499785.js"),
  Chunk652215 = require("./652215.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = new Chunk626584.A("ConnectedAccounts");

function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return i.Bo.post({
    url: d.Rsh.CONNECTIONS_CALLBACK(e),
    body: h(p({}, t), {
      insecure: n,
      friend_sync: d.txh.has(e)
    }),
    oldFormErrors: true,
    rejectWithError: false
  })
}
let E = {
  fetch: () => i.Bo.get({
    url: d.Rsh.CONNECTIONS,
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => a.h.dispatch({
    type: "USER_CONNECTIONS_UPDATE",
    local: true,
    accounts: e.body
  }), () => a.h.dispatch({
    type: "USER_CONNECTIONS_UPDATE",
    local: true,
    accounts: []
  })),
  async authorize(e) {
    var t;
    let {
      location: n,
      twoWayLinkType: r,
      userCode: a,
      twoWayLink: s,
      successRedirect: u,
      handle: f
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    c.default.track(d.HAw.CONNECTED_ACCOUNT_INITIATED, {
      platform_type: e,
      location: n
    });
    let p = d.Rsh.CONNECTIONS_AUTHORIZE(e),
      _ = new URLSearchParams;
    null != a && _.append("two_way_user_code", a), null != u && _.append("success_redirect", u), null != r ? (_.append("two_way_link_type", r), _.append("two_way_link", "true")) : null != s && _.append("two_way_link", String(s)), null != f && _.append("handle", f), p = p + "?" + _.toString();
    let h = await i.Bo.get({
        url: p,
        oldFormErrors: true,
        rejectWithError: false
      }),
      {
        state: m
      } = (0, o.vA)(null != (t = h.body.url) ? t : "");
    return null != m && l.A.addPendingAuthorizedState(m), h
  },
  callback: g,
  connect(e, t, n, i, a) {
    var o;
    return u.A.put({
      url: d.Rsh.CONNECTION(e, t),
      body: {
        name: n,
        friend_sync: null != (o = null == a ? true : a.friend_sync) ? o : d.txh.has(e)
      },
      context: {
        location: i
      },
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
        properties: {
          name: n,
          friend_sync: d.txh.has(e)
        }
      },
      rejectWithError: false
    })
  },
  disconnect: (e, t) => i.Bo.del({
    url: d.Rsh.CONNECTION(e, t),
    oldFormErrors: true,
    rejectWithError: false
  }),
  refresh: (e, t) => i.Bo.post({
    url: d.Rsh.CONNECTION_REFRESH(e, t),
    oldFormErrors: true,
    rejectWithError: false
  }),
  setVisibility(e, t, n) {
    return this.update(e, t, {
      visibility: 1 === n
    })
  },
  setMetadataVisibility(e, t, n) {
    return this.update(e, t, {
      metadata_visibility: 1 === n
    })
  },
  setFriendSync(e, t, n) {
    return this.update(e, t, {
      friend_sync: n
    })
  },
  setShowActivity(e, t, n) {
    return this.update(e, t, {
      show_activity: n
    })
  },
  update: (e, t, n) => u.A.patch({
    url: d.Rsh.CONNECTION(e, t),
    body: n,
    oldFormErrors: true,
    trackedActionData: {
      event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
      properties: p({}, n)
    },
    rejectWithError: false
  }),
  joinServer(e, t) {
    a.h.dispatch({
      type: "USER_CONNECTIONS_INTEGRATION_JOINING",
      integrationId: e,
      joining: true
    }), i.Bo.post({
      url: d.Rsh.INTEGRATION_JOIN(e),
      oldFormErrors: true,
      rejectWithError: false
    }, n => {
      a.h.dispatch({
        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
        integrationId: e,
        joining: false
      }), n.ok || (a.h.dispatch({
        type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR",
        integrationId: e,
        error: n.hasErr ? true : n.body.message
      }), null == t || t())
    })
  },
  async refreshAccessToken(e, t) {
    try {
      let {
        body: {
          access_token: n
        }
      } = await i.Bo.get({
        url: d.Rsh.CONNECTION_ACCESS_TOKEN(e, t),
        oldFormErrors: true,
        rejectWithError: false
      });
      return a.h.dispatch({
        type: "USER_CONNECTION_UPDATE",
        platformType: e,
        id: t,
        accessToken: n
      }), n
    } catch (n) {
      throw n.body.code === d.t02.CONNECTION_REVOKED && a.h.dispatch({
        type: "USER_CONNECTION_UPDATE",
        platformType: e,
        id: t,
        revoked: true
      }), n
    }
  },
  linkDispatchAuthCallback: (e, t) => i.Bo.post({
    url: d.Rsh.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
    body: p({}, t),
    oldFormErrors: true,
    rejectWithError: false
  }),
  async completeTwoWayLink(e, t, n, r, i) {
    if (null == t) return void m.error("Two-way link: missing authorize location");
    let {
      code: a,
      error: s,
      errorDescription: l
    } = (0, o.vA)(t);
    return null != s ? void m.error("Two-way link: missing authorize code", {
      error: s,
      errorDescription: l
    }) : await g(e, {
      code: n,
      state: r,
      two_way_link_code: a,
      token_redirect_uri: i
    })
  },
  sessionHandoff: function(e, t, n, r, a) {
    return i.Bo.post({
      url: d.Rsh.CONNECTIONS_SESSION_HANDOFF(e),
      body: {
        state: t,
        code: n,
        openid_params: r,
        iss: a
      },
      oldFormErrors: true,
      rejectWithError: false
    })
  },
  getHandoffStatus: function(e, t) {
    let n = new URLSearchParams;
    n.append("state", t);
    let r = "".concat(d.Rsh.CONNECTIONS_SESSION_HANDOFF(e), "?").concat(n.toString());
    return i.Bo.get({
      url: r,
      body: {
        state: t
      },
      rejectWithError: true
    })
  }
}