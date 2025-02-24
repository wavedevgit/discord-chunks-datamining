/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120), n(301563);
var r = n(544891),
  i = n(780384),
  o = n(570140),
  a = n(391650),
  s = n(877215),
  l = n(895886),
  c = n(681678),
  u = n(397550),
  d = n(594174),
  f = n(657682),
  p = n(51144),
  _ = n(668781),
  h = n(239091),
  m = n(981631),
  g = n(858380),
  E = n(388032);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function y(e) {
  (0, h.Zy)(), _.Z.show(e)
}

function O() {
  (0, h.Zy)(), (0, l.default)()
}

function S(e, t, n) {
  let {
    status: r,
    body: i
  } = e, o = i && i.code;
  switch (r) {
    case 429:
      0 === t && y({
        title: E.NW.string(E.t["3D5eo6"]),
        body: E.NW.string(E.t.TuJriI),
        confirmText: E.NW.string(E.t.DppXIy)
      });
      break;
    case 403:
      if (o === m.evJ.EMAIL_VERIFICATION_REQUIRED) {
        y({
          title: E.NW.string(E.t.Gqf33N),
          body: E.NW.string(E.t.GHOBd3),
          confirmText: E.NW.string(E.t.HbTSEx),
          onConfirm: () => {
            a.j()
          }
        });
        break
      }
    default:
      if (o === m.evJ.USER_QUARANTINED) O();
      else if ((0, u.b)(r, o)) break;
      else if (0 === t) {
        let e = null != n ? (0, f.NF)(o || 0, n) : E.NW.string(E.t.paDJBA);
        y({
          title: E.NW.string(E.t["6moJ8v"]),
          body: e,
          confirmText: E.NW.string(E.t.BddRzc)
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
        errorUxConfig: o = 0
      } = e, [a, s] = t.split("#");
      return r.tn.post({
        url: m.ANM.USER_RELATIONSHIPS(),
        body: b({
          username: a,
          discriminator: parseInt(s)
        }, i),
        context: n,
        oldFormErrors: !0,
        rejectWithError: !1
      }).catch(e => {
        S(e, o, t)
      })
    },
    addRelationship(e, t) {
      let {
        userId: n,
        context: i,
        type: o,
        friendToken: a,
        fromFriendSuggestion: s,
        captchaPayload: l
      } = e, c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, u = d.default.getUser(n);
      return r.tn.put({
        url: m.ANM.USER_RELATIONSHIP(n),
        body: b({
          type: o,
          friend_token: a,
          from_friend_suggestion: s
        }, l),
        context: i,
        oldFormErrors: !0,
        rejectWithError: !1
      }).then(() => {
        null == t || t()
      }).catch(e => {
        S(e, c, p.ZP.getUserTag(u))
      })
    },
    acceptFriendRequest(e) {
      function t() {
        i.uv.announce(E.NW.string(E.t["3goNa2"]))
      }
      return I.addRelationship(e, t)
    },
    cancelFriendRequest(e, t) {
      function n() {
        i.uv.announce(E.NW.string(E.t.pLUaxc))
      }
      return I.removeRelationship(e, t, n)
    },
    removeFriend(e, t) {
      function n() {
        i.uv.announce(E.NW.string(E.t.vGSLa2))
      }
      I.removeRelationship(e, t, n)
    },
    unblockUser(e, t) {
      function n() {
        i.uv.announce(E.NW.string(E.t["9t1au7"]))
      }
      return I.removeRelationship(e, t, n)
    },
    removeRelationship: (e, t, n) => r.tn.del({
      url: m.ANM.USER_RELATIONSHIP(e),
      context: t,
      oldFormErrors: !0,
      rejectWithError: !1
    }).then(() => {
      null == n || n()
    }).catch(() => {
      i.uv.announce(E.NW.string(E.t.n6Jo3N))
    }),
    updateRelationship: (e, t) => r.tn.patch({
      url: m.ANM.USER_RELATIONSHIP(e),
      body: {
        nickname: t
      },
      rejectWithError: !1
    }),
    fetchRelationships() {
      r.tn.get({
        url: m.ANM.USER_RELATIONSHIPS(),
        oldFormErrors: !0,
        rejectWithError: !0
      }).then(e => o.Z.dispatch({
        type: "LOAD_RELATIONSHIPS_SUCCESS",
        relationships: e.body
      }), () => o.Z.dispatch({
        type: "LOAD_RELATIONSHIPS_FAILURE"
      }))
    },
    confirmClearPendingRelationships(e) {
      (0, s.Z)(e)
    },
    clearPendingRelationships: () => r.tn.del({
      url: m.ANM.USER_RELATIONSHIPS(),
      query: {
        relationship_type: m.OGo.PENDING_INCOMING
      },
      rejectWithError: !1
    }).then(() => {
      o.Z.dispatch({
        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
      })
    }).catch(() => {
      i.uv.announce(E.NW.string(E.t.n6Jo3N))
    }),
    clearPendingSpamAndIgnored: () => r.tn.del({
      url: m.ANM.USER_RELATIONSHIPS(),
      query: {
        relationship_type: m.OGo.PENDING_INCOMING
      },
      body: {
        filters: [g.G.SPAM, g.G.IGNORED]
      },
      rejectWithError: !1
    }).then(() => {
      o.Z.dispatch({
        type: "RELATIONSHIP_PENDING_INCOMING_REMOVED"
      })
    }).catch(() => {
      i.uv.announce(E.NW.string(E.t.n6Jo3N))
    }),
    ignoreUser: (e, t, n) => r.tn.put({
      url: m.ANM.IGNORE_USER(e),
      context: {
        location: t
      },
      rejectWithError: !1
    }).then(() => {
      c.Z.showIgnoreSuccessToast(e, n), i.uv.announce(E.NW.string(E.t.Us93CQ))
    }).catch(() => {
      c.Z.showFailedToast(), i.uv.announce(E.NW.string(E.t.n6Jo3N))
    }),
    unignoreUser: (e, t, n) => r.tn.del({
      url: m.ANM.IGNORE_USER(e),
      context: {
        location: t
      },
      rejectWithError: !1
    }).then(() => {
      c.Z.showUnignoreSuccessToast(e, n), i.uv.announce(E.NW.string(E.t.QlH5w8))
    }).catch(() => {
      c.Z.showFailedToast(), i.uv.announce(E.NW.string(E.t.n6Jo3N))
    })
  },
  T = I