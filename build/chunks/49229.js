/** Chunk was on web.js **/
/** chunk id: 49229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js"), require("./747238.js");
var Chunk562465 = require("./562465.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk315982 = require("./315982.jsx"),
  Chunk395484 = require("./395484.js"),
  Chunk700241 = require("./700241.jsx"),
  Chunk662502 = require("./662502.js"),
  Chunk30076 = require("./30076.js"),
  Chunk287809 = require("./287809.js"),
  Chunk395422 = require("./395422.js"),
  Chunk427262 = require("./427262.js"),
  Chunk157559 = require("./157559.js"),
  Chunk442433 = require("./442433.js"),
  Chunk652215 = require("./652215.js"),
  Chunk235627 = require("./235627.js"),
  Chunk985018 = require("./985018.jsx");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function O(e) {
  (0, h.Z_)(), _.A.show(e)
}

function v() {
  (0, h.Z_)(), (0, l.default)()
}

function A(e, t, n) {
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
      if (a === m.t02.EMAIL_VERIFICATION_REQUIRED) {
        O({
          title: E.intl.string(E.t.Gqf33E),
          body: E.intl.string(E.t.GHOBdx),
          confirmText: E.intl.string(E.t.HbTSE6),
          onConfirm: () => {
            s.R()
          }
        });
        break
      }
    default:
      if (a === m.t02.USER_QUARANTINED) v();
      else if ((0, u.O)(r, a)) break;
      else if (a === m.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
      else if (0 === t) {
        let e = null != n ? (0, f.vU)(a || 0, n) : E.intl.string(E.t.paDJBM);
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
      } = e, [s, o] = t.split("#");
      return r.Bo.post({
        url: m.Rsh.USER_RELATIONSHIPS(),
        body: b({
          username: s,
          discriminator: parseInt(o)
        }, i),
        context: n,
        oldFormErrors: true,
        rejectWithError: false
      }).catch(e => {
        A(e, a, t)
      })
    },
    addRelationship(e, t) {
      let {
        userId: n,
        context: i,
        type: a,
        fromFriendSuggestion: s,
        confirmStrangerRequest: o,
        captchaPayload: l
      } = e, c = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0, u = d.default.getUser(n);
      return r.Bo.put({
        url: m.Rsh.USER_RELATIONSHIP(n),
        body: b({
          type: a,
          from_friend_suggestion: s,
          confirm_stranger_request: o
        }, l),
        context: i,
        oldFormErrors: true,
        rejectWithError: false
      }).then(() => {
        null == t || t()
      }).catch(e => (A(e, c, p.Ay.getUserTag(u)), Promise.reject(e)))
    },
    acceptFriendRequest(e) {
      function t() {
        i.OR.announce(E.intl.string(E.t["3goNa5"]))
      }
      return I.addRelationship(e, t)
    },
    cancelFriendRequest(e, t) {
      function n() {
        i.OR.announce(E.intl.string(E.t.pLUaxR))
      }
      return I.removeRelationship(e, t, n)
    },
    removeFriend(e, t) {
      function n() {
        i.OR.announce(E.intl.string(E.t.vGSLa2))
      }
      I.removeRelationship(e, t, n)
    },
    blockUser(e, t) {
      function n() {
        i.OR.announce(E.intl.string(E.t.mU0Vrp))
      }
      return I.addRelationship({
        userId: e,
        context: t,
        type: m.eA$.BLOCKED
      }, n)
    },
    unblockUser(e, t) {
      function n() {
        i.OR.announce(E.intl.string(E.t["9t1au7"]))
      }
      return I.removeRelationship(e, t, n)
    },
    removeRelationship: (e, t, n) => r.Bo.del({
      url: m.Rsh.USER_RELATIONSHIP(e),
      context: t,
      oldFormErrors: true,
      rejectWithError: false
    }).then(() => {
      null == n || n()
    }).catch(() => {
      i.OR.announce(E.intl.string(E.t.n6Jo3E))
    }),
    updateRelationship: (e, t) => r.Bo.patch({
      url: m.Rsh.USER_RELATIONSHIP(e),
      body: {
        nickname: t
      },
      rejectWithError: false
    }),
    fetchRelationships() {
      r.Bo.get({
        url: m.Rsh.USER_RELATIONSHIPS(),
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => a.h.dispatch({
        type: "LOAD_RELATIONSHIPS_SUCCESS",
        relationships: e.body
      }), () => a.h.dispatch({
        type: "LOAD_RELATIONSHIPS_FAILURE"
      }))
    },
    confirmClearPendingRelationships(e) {
      (0, o.A)(e)
    },
    clearPendingRelationships: () => r.Bo.del({
      url: m.Rsh.USER_RELATIONSHIPS(),
      query: {
        relationship_type: m.eA$.PENDING_INCOMING
      },
      rejectWithError: false
    }).then(() => {
      a.h.dispatch({
        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
      })
    }).catch(() => {
      i.OR.announce(E.intl.string(E.t.n6Jo3E))
    }),
    clearPendingSpamAndIgnored: () => r.Bo.del({
      url: m.Rsh.USER_RELATIONSHIPS(),
      query: {
        relationship_type: m.eA$.PENDING_INCOMING
      },
      body: {
        filters: [g.w.SPAM, g.w.IGNORED]
      },
      rejectWithError: false
    }).then(() => {
      a.h.dispatch({
        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
      })
    }).catch(() => {
      i.OR.announce(E.intl.string(E.t.n6Jo3E))
    }),
    ignoreUser: (e, t, n) => r.Bo.put({
      url: m.Rsh.IGNORE_USER(e),
      context: {
        location: t
      },
      rejectWithError: false
    }).then(() => {
      c.A.showIgnoreSuccessToast(e, n), i.OR.announce(E.intl.string(E.t.Us93Ca)), a.h.dispatch({
        type: "RELATIONSHIP_IGNORE_USER_SUCCESS",
        userId: e,
        timestamp: Date.now()
      })
    }).catch(() => {
      c.A.showFailedToast(), i.OR.announce(E.intl.string(E.t.n6Jo3E))
    }),
    unignoreUser: (e, t, n) => r.Bo.del({
      url: m.Rsh.IGNORE_USER(e),
      context: {
        location: t
      },
      rejectWithError: false
    }).then(() => {
      c.A.showUnignoreSuccessToast(e, n), i.OR.announce(E.intl.string(E.t.QlH5w6))
    }).catch(() => {
      c.A.showFailedToast(), i.OR.announce(E.intl.string(E.t.n6Jo3E))
    })
  },
  S = I