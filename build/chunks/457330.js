/** Chunk was on web.js **/
/** chunk id: 457330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk990547 = require("./990547.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk275759 = require("./275759.js"),
  Chunk710845 = require("./710845.js"),
  Chunk553795 = require("./553795.js"),
  Chunk626135 = require("./626135.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");

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
let m = new Chunk710845.Z("ConnectedAccounts");

function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return i.tn.post({
    url: d.ANM.CONNECTIONS_CALLBACK(e),
    body: h(p({}, t), {
      insecure: n,
      friend_sync: d.BFP.has(e)
    }),
    oldFormErrors: true,
    rejectWithError: false
  })
}
let E = {
  fetch: () => i.tn.get({
    url: d.ANM.CONNECTIONS,
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => a.Z.dispatch({
    type: "USER_CONNECTIONS_UPDATE",
    local: true,
    accounts: e.body
  }), () => a.Z.dispatch({
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
    c.default.track(d.rMx.CONNECTED_ACCOUNT_INITIATED, {
      platform_type: e,
      location: n
    });
    let p = d.ANM.CONNECTIONS_AUTHORIZE(e),
      _ = new URLSearchParams;
    null != a && _.append("two_way_user_code", a), null != u && _.append("success_redirect", u), null != r ? (_.append("two_way_link_type", r), _.append("two_way_link", "true")) : null != s && _.append("two_way_link", String(s)), null != f && _.append("handle", f), p = p + "?" + _.toString();
    let h = await i.tn.get({
        url: p,
        oldFormErrors: true,
        rejectWithError: false
      }),
      {
        state: m
      } = (0, o.xp)(null != (t = h.body.url) ? t : "");
    return null != m && l.Z.addPendingAuthorizedState(m), h
  },
  callback: g,
  connect(e, t, n, i, a) {
    var o;
    return u.Z.put({
      url: d.ANM.CONNECTION(e, t),
      body: {
        name: n,
        friend_sync: null != (o = null == a ? true : a.friend_sync) ? o : d.BFP.has(e)
      },
      context: {
        location: i
      },
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
        properties: {
          name: n,
          friend_sync: d.BFP.has(e)
        }
      },
      rejectWithError: false
    })
  },
  disconnect: (e, t) => i.tn.del({
    url: d.ANM.CONNECTION(e, t),
    oldFormErrors: true,
    rejectWithError: false
  }),
  refresh: (e, t) => i.tn.post({
    url: d.ANM.CONNECTION_REFRESH(e, t),
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
  update: (e, t, n) => u.Z.patch({
    url: d.ANM.CONNECTION(e, t),
    body: n,
    oldFormErrors: true,
    trackedActionData: {
      event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
      properties: p({}, n)
    },
    rejectWithError: false
  }),
  joinServer(e, t) {
    a.Z.dispatch({
      type: "USER_CONNECTIONS_INTEGRATION_JOINING",
      integrationId: e,
      joining: true
    }), i.tn.post({
      url: d.ANM.INTEGRATION_JOIN(e),
      oldFormErrors: true,
      rejectWithError: false
    }, n => {
      a.Z.dispatch({
        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
        integrationId: e,
        joining: false
      }), n.ok || (a.Z.dispatch({
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
      } = await i.tn.get({
        url: d.ANM.CONNECTION_ACCESS_TOKEN(e, t),
        oldFormErrors: true,
        rejectWithError: false
      });
      return a.Z.dispatch({
        type: "USER_CONNECTION_UPDATE",
        platformType: e,
        id: t,
        accessToken: n
      }), n
    } catch (n) {
      throw n.body.code === d.evJ.CONNECTION_REVOKED && a.Z.dispatch({
        type: "USER_CONNECTION_UPDATE",
        platformType: e,
        id: t,
        revoked: true
      }), n
    }
  },
  linkDispatchAuthCallback: (e, t) => i.tn.post({
    url: d.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
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
    } = (0, o.xp)(t);
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
    return i.tn.post({
      url: d.ANM.CONNECTIONS_SESSION_HANDOFF(e),
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
    let r = "".concat(d.ANM.CONNECTIONS_SESSION_HANDOFF(e), "?").concat(n.toString());
    return i.tn.get({
      url: r,
      body: {
        state: t
      },
      rejectWithError: true
    })
  }
}