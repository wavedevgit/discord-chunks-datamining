/** Chunk was on 95017 **/
/** chunk id: 480387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  HJ: () => m,
  Zd: () => h,
  yD: () => p
});
var Chunk213919 = require("./213919.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk726745 = require("./726745.js"),
  Chunk981631 = require("./981631.js");
let u = new Chunk710845.Z("MultiAccountActionCreators");

function m() {
  let e = Chunk314897.default.getId();
  Chunk726745.Z.getUsers().forEach(async t => {
    let n, {
        id: i
      } = t,
      o = a.getToken(i);
    if (null == o || "" === o) return void l.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
      userId: i
    });
    l.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: i
    });
    try {
      n = await r.tn.get({
        url: d.ANM.ME,
        headers: {
          authorization: o
        },
        retries: 3,
        rejectWithError: false
      })
    } catch (t) {
      let e = (null == t ? true : t.status) === 401 || (null == t ? true : t.status) === 403;
      l.Z.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: i
      });
      return
    }
    l.Z.dispatch({
      type: e === i ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), l.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: i
    })
  })
}

function p(e, t) {
  u.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let n = a.getToken(e);
  return null == n ? (u.log("Switching accounts failed because there was no token"), l.Z.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : i.Z.switchAccountToken(n, t)
}

function h(e) {
  l.Z.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}