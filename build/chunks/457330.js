/** Chunk was on web.js **/
/** chunk id: 457330, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk990547 = require("./990547.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk275759 = require("./275759.js"),
  Chunk185669 = require("./185669.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk553795 = require("./553795.js"),
  Chunk626135 = require("./626135.js"),
  Chunk573261 = require("./573261.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = new Chunk710845.Z("ConnectedAccounts");

function b(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  return i.tn.post({
    url: _.ANM.CONNECTIONS_CALLBACK(e),
    body: h(g(h({}, t), {
      insecure: n,
      friend_sync: _.BFP.has(e)
    }), s.g.getCurrentConfig({
      location: "ConnectedAccountsActionCreators.callback"
    }).enabled ? {
      session_id: c.default.getSessionId()
    } : {}),
    oldFormErrors: true,
    rejectWithError: false
  })
}
let y = {
  fetch: () => Chunk544891.tn.get({
    url: Chunk981631.ANM.CONNECTIONS,
    oldFormErrors: true,
    rejectWithError: true
  }).then(e => o.Z.dispatch({
    type: "USER_CONNECTIONS_UPDATE",
    local: true,
    accounts: e.body
  }), () => Chunk570140.Z.dispatch({
    type: "USER_CONNECTIONS_UPDATE",
    local: true,
    accounts: []
  })),
  async authorize(e) {
    var t;
    let {
      location: n,
      twoWayLinkType: r,
      userCode: o,
      twoWayLink: l,
      successRedirect: f,
      handle: p
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    d.default.track(_.rMx.CONNECTED_ACCOUNT_INITIATED, {
      platform_type: e,
      location: n
    });
    let h = _.ANM.CONNECTIONS_AUTHORIZE(e),
      m = new URLSearchParams;
    null != o && m.append("two_way_user_code", o), null != f && m.append("success_redirect", f), null != r ? (m.append("two_way_link_type", r), m.append("two_way_link", "true")) : null != l && m.append("two_way_link", String(l)), null != p && m.append("handle", p);
    let {
      enabled: g
    } = s.g.getCurrentConfig({
      location: "ConnectedAcountsActionCreators.authorize"
    }, {
      autoTrackExposure: true
    });
    if (g) {
      let e = c.default.getSessionId();
      null != e && m.append("session_id", e)
    }
    h = h + "?" + m.toString();
    let E = await i.tn.get({
        url: h,
        oldFormErrors: true,
        rejectWithError: false
      }),
      {
        state: b
      } = (0, a.xp)(null != (t = E.body.url) ? t : "");
    return null == b || s.g.getCurrentConfig({
      location: "ConnectedAccountsActionCreators.authorize"
    }).enabled || u.Z.addPendingAuthorizedState(b), E
  },
  callback: b,
  connect(e, t, n, i, o) {
    var a;
    return f.Z.put({
      url: _.ANM.CONNECTION(e, t),
      body: {
        name: n,
        friend_sync: null != (a = null == o ? true : o.friend_sync) ? a : _.BFP.has(e)
      },
      context: {
        location: i
      },
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
        properties: {
          name: n,
          friend_sync: _.BFP.has(e)
        }
      },
      rejectWithError: false
    })
  },
  disconnect: (e, t) => i.tn.del({
    url: _.ANM.CONNECTION(e, t),
    oldFormErrors: true,
    rejectWithError: false
  }),
  refresh: (e, t) => i.tn.post({
    url: _.ANM.CONNECTION_REFRESH(e, t),
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
  update: (e, t, n) => f.Z.patch({
    url: _.ANM.CONNECTION(e, t),
    body: n,
    oldFormErrors: true,
    trackedActionData: {
      event: r.NetworkActionNames.USER_CONNECTIONS_UPDATE,
      properties: h({}, n)
    },
    rejectWithError: false
  }),
  joinServer(e, t) {
    o.Z.dispatch({
      type: "USER_CONNECTIONS_INTEGRATION_JOINING",
      integrationId: e,
      joining: true
    }), i.tn.post({
      url: _.ANM.INTEGRATION_JOIN(e),
      oldFormErrors: true,
      rejectWithError: false
    }, n => {
      o.Z.dispatch({
        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
        integrationId: e,
        joining: false
      }), n.ok || (o.Z.dispatch({
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
        url: _.ANM.CONNECTION_ACCESS_TOKEN(e, t),
        oldFormErrors: true,
        rejectWithError: false
      });
      return o.Z.dispatch({
        type: "USER_CONNECTION_UPDATE",
        platformType: e,
        id: t,
        accessToken: n
      }), n
    } catch (n) {
      throw n.body.code === _.evJ.CONNECTION_REVOKED && o.Z.dispatch({
        type: "USER_CONNECTION_UPDATE",
        platformType: e,
        id: t,
        revoked: true
      }), n
    }
  },
  linkDispatchAuthCallback: (e, t) => i.tn.post({
    url: _.ANM.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
    body: h({}, t),
    oldFormErrors: true,
    rejectWithError: false
  }),
  async completeTwoWayLink(e, t, n, r, i) {
    if (null == t) return void E.error("Two-way link: missing authorize location");
    let {
      code: o,
      error: s,
      errorDescription: l
    } = (0, a.xp)(t);
    return null != s ? void E.error("Two-way link: missing authorize code", {
      error: s,
      errorDescription: l
    }) : await b(e, {
      code: n,
      state: r,
      two_way_link_code: o,
      token_redirect_uri: i
    })
  },
  sessionHandoff: function(e, t, n, r, o) {
    return i.tn.post({
      url: _.ANM.CONNECTIONS_SESSION_HANDOFF(e),
      body: {
        state: t,
        code: n,
        openid_params: r,
        iss: o
      },
      oldFormErrors: true,
      rejectWithError: false
    })
  },
  getHandoffStatus: function(e, t) {
    let n = new URLSearchParams;
    n.append("state", t);
    let r = "".concat(_.ANM.CONNECTIONS_SESSION_HANDOFF(e), "?").concat(n.toString());
    return i.tn.get({
      url: r,
      body: {
        state: t
      },
      rejectWithError: true
    })
  }
}