/** Chunk was on web.js **/
/** chunk id: 194359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./35282.js");
var Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk391650 = require("./391650.js"),
  Chunk877215 = require("./877215.js"),
  Chunk895886 = require("./895886.js"),
  Chunk681678 = require("./681678.js"),
  Chunk397550 = require("./397550.js"),
  Chunk594174 = require("./594174.js"),
  Chunk657682 = require("./657682.js"),
  Chunk51144 = require("./51144.js"),
  Chunk668781 = require("./668781.js"),
  Chunk239091 = require("./239091.js"),
  Chunk981631 = require("./981631.js"),
  Chunk858380 = require("./858380.js"),
  Chunk388032 = require("./388032.js");

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
  (0, h.Zy)(), p.Z.show(e)
}

function v() {
  (0, Chunk239091.Zy)(), (0, Chunk895886.default)()
}

function I(e, t, n) {
  let {
    status: r,
    body: i
  } = e, o = i && i.code;
  switch (r) {
    case 429:
      0 === t && O({
        title: E.intl.string(E.t["3D5eo6"]),
        body: E.intl.string(E.t.TuJriI),
        confirmText: E.intl.string(E.t.DppXIy)
      });
      break;
    case 403:
      if (o === m.evJ.EMAIL_VERIFICATION_REQUIRED) {
        O({
          title: E.intl.string(E.t.Gqf33N),
          body: E.intl.string(E.t.GHOBd3),
          confirmText: E.intl.string(E.t.HbTSEx),
          onConfirm: () => {
            a.j()
          }
        });
        break
      }
    default:
      if (o === m.evJ.USER_QUARANTINED) v();
      else if ((0, u.b)(r, o)) break;
      else if (o === m.evJ.RELATIONSHIP_INVALID_NO_CONFIRMATION) break;
      else if (0 === t) {
        let e = null != n ? (0, f.NF)(o || 0, n) : E.intl.string(E.t.paDJBA);
        O({
          title: E.intl.string(E.t["6moJ8v"]),
          body: e,
          confirmText: E.intl.string(E.t.BddRzc)
        })
      }
  }
  throw e
}
let T = {
    sendRequest(e) {
      let {
        discordTag: t,
        context: n,
        captchaPayload: i,
        errorUxConfig: o = 0
      } = e, [a, s] = t.split("#");
      return r.tn.post({
        url: m.ANM.USER_RELATIONSHIPS(),
        body: y({
          username: a,
          discriminator: parseInt(s)
        }, i),
        context: n,
        oldFormErrors: true,
        rejectWithError: false
      }).catch(e => {
        I(e, o, t)
      })
    },
    addRelationship(e, t) {
      let {
        userId: n,
        context: i,
        type: o,
        fromFriendSuggestion: a,
        confirmStrangerRequest: s,
        captchaPayload: l
      } = e, c = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0, u = d.default.getUser(n);
      return r.tn.put({
        url: m.ANM.USER_RELATIONSHIP(n),
        body: y({
          type: o,
          from_friend_suggestion: a,
          confirm_stranger_request: s
        }, l),
        context: i,
        oldFormErrors: true,
        rejectWithError: false
      }).then(() => {
        null == t || t()
      }).catch(e => (I(e, c, _.ZP.getUserTag(u)), Promise.reject(e)))
    },
    acceptFriendRequest(e) {
      function t() {
        i.uv.announce(E.intl.string(E.t["3goNa2"]))
      }
      return T.addRelationship(e, t)
    },
    cancelFriendRequest(e, t) {
      function n() {
        i.uv.announce(E.intl.string(E.t.pLUaxc))
      }
      return T.removeRelationship(e, t, n)
    },
    removeFriend(e, t) {
      function n() {
        i.uv.announce(E.intl.string(E.t.vGSLa2))
      }
      T.removeRelationship(e, t, n)
    },
    blockUser(e, t) {
      function n() {
        i.uv.announce(E.intl.string(E.t.mU0Vrq))
      }
      return T.addRelationship({
        userId: e,
        context: t,
        type: m.OGo.BLOCKED
      }, n)
    },
    unblockUser(e, t) {
      function n() {
        i.uv.announce(E.intl.string(E.t["9t1au7"]))
      }
      return T.removeRelationship(e, t, n)
    },
    removeRelationship: (e, t, n) => r.tn.del({
      url: m.ANM.USER_RELATIONSHIP(e),
      context: t,
      oldFormErrors: true,
      rejectWithError: false
    }).then(() => {
      null == n || n()
    }).catch(() => {
      i.uv.announce(E.intl.string(E.t.n6Jo3N))
    }),
    updateRelationship: (e, t) => r.tn.patch({
      url: m.ANM.USER_RELATIONSHIP(e),
      body: {
        nickname: t
      },
      rejectWithError: false
    }),
    fetchRelationships() {
      Chunk544891.tn.get({
        url: Chunk981631.ANM.USER_RELATIONSHIPS(),
        oldFormErrors: true,
        rejectWithError: true
      }).then(e => o.Z.dispatch({
        type: "LOAD_RELATIONSHIPS_SUCCESS",
        relationships: e.body
      }), () => Chunk570140.Z.dispatch({
        type: "LOAD_RELATIONSHIPS_FAILURE"
      }))
    },
    confirmClearPendingRelationships(e) {
      (0, s.Z)(e)
    },
    clearPendingRelationships: () => Chunk544891.tn.del({
      url: Chunk981631.ANM.USER_RELATIONSHIPS(),
      query: {
        relationship_type: Chunk981631.OGo.PENDING_INCOMING
      },
      rejectWithError: false
    }).then(() => {
      Chunk570140.Z.dispatch({
        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
      })
    }).catch(() => {
      Chunk780384.uv.announce(Chunk388032.intl.string(Chunk388032.t.n6Jo3N))
    }),
    clearPendingSpamAndIgnored: () => Chunk544891.tn.del({
      url: Chunk981631.ANM.USER_RELATIONSHIPS(),
      query: {
        relationship_type: Chunk981631.OGo.PENDING_INCOMING
      },
      body: {
        filters: [Chunk858380.G.SPAM, Chunk858380.G.IGNORED]
      },
      rejectWithError: false
    }).then(() => {
      Chunk570140.Z.dispatch({
        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
      })
    }).catch(() => {
      Chunk780384.uv.announce(Chunk388032.intl.string(Chunk388032.t.n6Jo3N))
    }),
    ignoreUser: (e, t, n) => r.tn.put({
      url: m.ANM.IGNORE_USER(e),
      context: {
        location: t
      },
      rejectWithError: false
    }).then(() => {
      c.Z.showIgnoreSuccessToast(e, n), i.uv.announce(E.intl.string(E.t.Us93CQ)), o.Z.dispatch({
        type: "RELATIONSHIP_IGNORE_USER_SUCCESS",
        userId: e,
        timestamp: Date.now()
      })
    }).catch(() => {
      c.Z.showFailedToast(), i.uv.announce(E.intl.string(E.t.n6Jo3N))
    }),
    unignoreUser: (e, t, n) => r.tn.del({
      url: m.ANM.IGNORE_USER(e),
      context: {
        location: t
      },
      rejectWithError: false
    }).then(() => {
      c.Z.showUnignoreSuccessToast(e, n), i.uv.announce(E.intl.string(E.t.QlH5w8))
    }).catch(() => {
      c.Z.showFailedToast(), i.uv.announce(E.intl.string(E.t.n6Jo3N))
    })
  },
  S = T