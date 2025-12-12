/** Chunk was on web.js **/
/** chunk id: 855796, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk668781 = require("./668781.js"),
  Chunk881052 = require("./881052.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = new a.Hx(e).getAnyErrorMessage();
  o.Z.show({
    title: l.intl.string(l.t["328j/I"]),
    body: null != t ? t : l.intl.string(l.t.fEptJP)
  })
}

function u(e) {
  let {
    userId: t,
    applicationId: n,
    onSuccess: i,
    type: o
  } = e;
  return r.tn.put({
    url: s.ANM.USER_GAME_RELATIONSHIP(t, n),
    body: {
      type: o
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
    await r.tn.del({
      url: s.ANM.USER_GAME_RELATIONSHIP(t, n),
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
        i.uv.announce(l.intl.string(l.t.zRf8cO))
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
      type: s.OGo.FRIEND,
      onSuccess: () => {
        i.uv.announce(l.intl.string(l.t.taJiuc))
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
        i.uv.announce(l.intl.string(l.t.XMf21q))
      }
    })
  }
}