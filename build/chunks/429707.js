/** Chunk was on 86142 **/
/** chunk id: 429707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  At: () => g,
  F6: () => h,
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

function h() {
  let e = o.default.getId();
  c.A.getUsers().forEach(async t => {
    let n, {
        id: l
      } = t,
      a = r.getToken(l);
    if (null == a || "" === a) return void s.h.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
      userId: l
    });
    s.h.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
      userId: l
    });
    try {
      n = await i.Bo.get({
        url: d.Rsh.ME,
        headers: {
          authorization: a
        },
        retries: 3,
        rejectWithError: false
      })
    } catch (t) {
      let e = (null == t ? true : t.status) === 401 || (null == t ? true : t.status) === 403;
      s.h.dispatch({
        type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
        userId: l
      });
      return
    }
    s.h.dispatch({
      type: e === l ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
      user: n.body
    }), s.h.dispatch({
      type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
      userId: l
    })
  })
}

function p(e, t) {
  u.log("Switching account to ".concat(e), {
    switchSynchronously: t
  });
  let n = r.getToken(e);
  return null == n ? (u.log("Switching accounts failed because there was no token"), s.h.dispatch({
    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
    userId: e
  }), Promise.resolve()) : l.A.switchAccountToken(n, t)
}

function g(e) {
  s.h.dispatch({
    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
    userId: e
  })
}