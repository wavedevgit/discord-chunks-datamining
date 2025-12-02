/** Chunk was on 27978 **/
/** chunk id: 480387, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  HJ: () => h,
  Zd: () => p,
  yD: () => g
});
var Chunk213919 = require("./213919.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk726745 = require("./726745.js"),
  Chunk981631 = require("./981631.js");
let d = new Chunk710845.Z("MultiAccountActionCreators");

function h() {
  let e = Chunk314897.default.getId();
  Chunk726745.Z.getUsers().forEach(async t => {
    let n, {
        id: l
      } = t,
      a = r.getToken(l);
    if (null == a || "" === a) return void s.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
      userId: l
    });
    s.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: l
    });
    try {
      n = await i.tn.get({
        url: u.ANM.ME,
        headers: {
          authorization: a
        },
        retries: 3,
        rejectWithError: false
      })
    } catch (t) {
      let e = (null == t ? true : t.status) === 401 || (null == t ? true : t.status) === 403;
      s.Z.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: l
      });
      return
    }
    s.Z.dispatch({
      type: e === l ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), s.Z.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: l
    })
  })
}

function g(e, t) {
  d.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let n = r.getToken(e);
  return null == n ? (d.log("Switching accounts failed because there was no token"), s.Z.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : l.Z.switchAccountToken(n, t)
}

function p(e) {
  s.Z.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}