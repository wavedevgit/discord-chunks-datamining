/** Chunk was on web.js **/
/** chunk id: 194359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./35282.js");
var Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk391650 = require("./391650.jsx"),
  Chunk877215 = require("./877215.js"),
  Chunk895886 = require("./895886.jsx"),
  Chunk681678 = require("./681678.js"),
  Chunk397550 = require("./397550.js"),
  Chunk594174 = require("./594174.js"),
  Chunk657682 = require("./657682.js"),
  Chunk51144 = require("./51144.js"),
  Chunk668781 = require("./668781.js"),
  Chunk239091 = require("./239091.js"),
  Chunk981631 = require("./981631.js"),
  Chunk858380 = require("./858380.js"),
  Chunk388032 = require("./388032.jsx");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e) {
  (0, m.Zy)(), _.Z.show(e)
}

function v() {
  (0, m.Zy)(), (0, l.default)()
}

function S(e, t, n) {
  let {
    status: r,
    body: i
  } = e, a = i && i.code;
  switch (r) {
    case 429:
      0 === t && O({
        title: E.intl.string(E.t["3D5eox"]),
        body: E.intl.string(E.t.TuJriJ),
        confirmText: E.intl.string(E.t.DppXIx)
      });
      break;
    case 403:
      if (a === h.evJ.EMAIL_VERIFICATION_REQUIRED) {
        O({
          title: E.intl.string(E.t.Gqf33E),
          body: E.intl.string(E.t.GHOBdx),
          confirmText: E.intl.string(E.t.HbTSE6),
          onConfirm: () => {
            o.j()
          }
        });
        break
      }
    default:
      if (a === h.evJ.USER_QUARANTINED) v();
      else if ((0, u.b)(r, a)) break;
      else if (a === h.evJ.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
      else if (0 === t) {
        let e = null != n ? (0, f.NF)(a || 0, n) : E.intl.string(E.t.paDJBM);
        O({
          title: E.intl.string(E.t["6moJ8s"]),
          body: e,
          confirmText: E.intl.string(E.t.BddRzS)
        })
      }
  }
  throw e
}
let I = {
    sendRequest(e) {
      let {
        discordTag: t,
        context: n,
        captchaPayload: i,
        errorUxConfig: a = 0
      } = e, [o, s] = t.split("#");
      return r.tn.post({
        url: h.ANM.USER_RELATIONSHIPS(),
        body: y({
          username: o,
          discriminator: parseInt(s)
        }, i),
        context: n,
        oldFormErrors: true,
        rejectWithError: false
      }).catch(e => {
        S(e, a, t)
      })
    },
    addRelationship(e, t) {
      let {
        userId: n,
        context: i,
        type: a,
        fromFriendSuggestion: o,
        confirmStrangerRequest: s,
        captchaPayload: l
      } = e, c = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0, u = d.default.getUser(n);
      return r.tn.put({
        url: h.ANM.USER_RELATIONSHIP(n),
        body: y({
          type: a,
          from_friend_suggestion: o,
          confirm_stranger_request: s
        }, l),
        context: i,
        oldFormErrors: true,
        rejectWithError: false
      }).then(() => {
        null == t || t()
      }).catch(e => (S(e, c, p.ZP.getUserTag(u)), Promise.reject(e)))
    },
    acceptFriendRequest(e) {
      function t() {
        i.uv.announce(E.intl.string(E.t["3goNa5"]))
      }
      return I.addRelationship(e, t)
    },
    cancelFriendRequest(e, t) {
      function n() {
        i.uv.announce(E.intl.string(E.t.pLUaxR))
      }
      return I.removeRelationship(e, t, n)
    },
    removeFriend(e, t) {
      function n() {
        i.uv.announce(E.intl.string(E.t.vGSLa2))
      }
      I.removeRelationship(e, t, n)
    },
    blockUser(e, t) {
      function n() {
        i.uv.announce(E.intl.string(E.t.mU0Vrp))
      }
      return I.addRelationship({
        userId: e,
        context: t,
        type: h.OGo.BLOCKED
      }, n)
    },
    unblockUser(e, t) {
      function n() {
        i.uv.announce(E.intl.string(E.t["9t1au7"]))
      }
      return I.removeRelationship(e, t, n)
    },
    removeRelationship: (e, t, n) => r.tn.del({
      url: h.ANM.USER_RELATIONSHIP(e),
      context: t,
      oldFormErrors: true,
      rejectWithError: false
    }).then(() => {
      null == n || n()
    }).catch(() => {
      i.uv.announce(E.intl.string(E.t.n6Jo3E))
    }),
    updateRelationship: (e, t) => r.tn.patch({
      url: h.ANM.USER_RELATIONSHIP(e),
      body: {
        nickname: t
      },
      rejectWithError: false
    }),
    fetchRelationships() {
      r.tn.get({
        url: h.ANM.USER_RELATIONSHIPS(),
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => a.Z.dispatch({
        type: "LOAD_RELATIONSHIPS_SUCCESS",
        relationships: e.body
      }), () => a.Z.dispatch({
        type: "LOAD_RELATIONSHIPS_FAILURE"
      }))
    },
    confirmClearPendingRelationships(e) {
      (0, s.Z)(e)
    },
    clearPendingRelationships: () => r.tn.del({
      url: h.ANM.USER_RELATIONSHIPS(),
      query: {
        relationship_type: h.OGo.PENDING_INCOMING
      },
      rejectWithError: false
    }).then(() => {
      a.Z.dispatch({
        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
      })
    }).catch(() => {
      i.uv.announce(E.intl.string(E.t.n6Jo3E))
    }),
    clearPendingSpamAndIgnored: () => r.tn.del({
      url: h.ANM.USER_RELATIONSHIPS(),
      query: {
        relationship_type: h.OGo.PENDING_INCOMING
      },
      body: {
        filters: [g.G.SPAM, g.G.IGNORED]
      },
      rejectWithError: false
    }).then(() => {
      a.Z.dispatch({
        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
      })
    }).catch(() => {
      i.uv.announce(E.intl.string(E.t.n6Jo3E))
    }),
    ignoreUser: (e, t, n) => r.tn.put({
      url: h.ANM.IGNORE_USER(e),
      context: {
        location: t
      },
      rejectWithError: false
    }).then(() => {
      c.Z.showIgnoreSuccessToast(e, n), i.uv.announce(E.intl.string(E.t.Us93Ca)), a.Z.dispatch({
        type: "RELATIONSHIP_IGNORE_USER_SUCCESS",
        userId: e,
        timestamp: Date.now()
      })
    }).catch(() => {
      c.Z.showFailedToast(), i.uv.announce(E.intl.string(E.t.n6Jo3E))
    }),
    unignoreUser: (e, t, n) => r.tn.del({
      url: h.ANM.IGNORE_USER(e),
      context: {
        location: t
      },
      rejectWithError: false
    }).then(() => {
      c.Z.showUnignoreSuccessToast(e, n), i.uv.announce(E.intl.string(E.t.QlH5w6))
    }).catch(() => {
      c.Z.showFailedToast(), i.uv.announce(E.intl.string(E.t.n6Jo3E))
    })
  },
  T = I