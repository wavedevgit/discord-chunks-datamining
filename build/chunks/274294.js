/** Chunk was on web.js **/
/** chunk id: 274294, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk562465 = require("./562465.js"),
  Chunk582754 = require("./582754.js"),
  Chunk157559 = require("./157559.js"),
  Chunk198982 = require("./198982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let t = new o.LG(e).getAnyErrorMessage();
  a.A.show({
    title: l.intl.string(l.t["328j/I"]),
    body: null != t ? t : l.intl.string(l.t.fEptJP)
  })
}

function u(e) {
  let {
    userId: t,
    applicationId: n,
    onSuccess: i,
    type: a
  } = e;
  return r.Bo.put({
    url: s.Rsh.USER_GAME_RELATIONSHIP(t, n),
    body: {
      type: a
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(() => {
    i()
  }).catch(e => (c(e), Promise.reject(e)))
}
async function d(e) {
  let {
    userId: t,
    applicationId: n,
    onSuccess: i
  } = e;
  try {
    await r.Bo.del({
      url: s.Rsh.USER_GAME_RELATIONSHIP(t, n),
      oldFormErrors: true,
      rejectWithError: false
    }), i()
  } catch (e) {
    c(e)
  }
}
let f = {
  removeGameFriend: async function(e) {
    let {
      userId: t,
      applicationId: n
    } = e;
    await d({
      userId: t,
      applicationId: n,
      onSuccess: () => {
        i.OR.announce(l.intl.string(l.t.zRf8cO))
      }
    })
  },
  acceptGameFriendRequest: function(e) {
    let {
      userId: t,
      applicationId: n
    } = e;
    return u({
      userId: t,
      applicationId: n,
      type: s.eA$.FRIEND,
      onSuccess: () => {
        i.OR.announce(l.intl.string(l.t.taJiuc))
      }
    })
  },
  cancelGameFriendRequest: async function(e) {
    let {
      userId: t,
      applicationId: n
    } = e;
    await d({
      userId: t,
      applicationId: n,
      onSuccess: () => {
        i.OR.announce(l.intl.string(l.t.XMf21q))
      }
    })
  }
}