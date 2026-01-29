/** Chunk was on 87557 **/
/** chunk id: 429707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  At: () => h,
  F6: () => m,
  Mx: () => p
});
var Chunk247775 = require("./247775.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk626584 = require("./626584.js"),
  Chunk961350 = require("./961350.js"),
  Chunk274303 = require("./274303.js"),
  Chunk652215 = require("./652215.js");
let u = new Chunk626584.A("MultiAccountActionCreators");

function m() {
  let e = o.default.getId();
  c.A.getUsers().forEach(async t => {
    let n, {
        id: i
      } = t,
      s = a.getToken(i);
    if (null == s || "" === s) return void r.h.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
      userId: i
    });
    r.h.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: i
    });
    try {
      n = await l.Bo.get({
        url: d.Rsh.ME,
        headers: {
          authorization: s
        },
        retries: 3,
        rejectWithError: false
      })
    } catch (t) {
      let e = (null == t ? true : t.status) === 401 || (null == t ? true : t.status) === 403;
      r.h.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: i
      });
      return
    }
    r.h.dispatch({
      type: e === i ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), r.h.dispatch({
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
  return null == n ? (u.log("Switching accounts failed because there was no token"), r.h.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : i.A.switchAccountToken(n, t)
}

function h(e) {
  r.h.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}