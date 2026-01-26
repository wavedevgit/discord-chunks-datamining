/** Chunk was on 65298 **/
/** chunk id: 238193, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  cD: () => x,
  gs: () => h,
  sl: () => p
}), require("./65821.js");
var Chunk110259 = require("./110259.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk662502 = require("./662502.js"),
  Chunk427157 = require("./427157.js"),
  Chunk499785 = require("./499785.js"),
  Chunk559 = require("./559.js"),
  Chunk624622 = require("./624622.js"),
  Chunk652215 = require("./652215.js"),
  Chunk835002 = require("./835002.js");

function p(e, t) {
  var n;
  let a = d.A.getUser(t);
  if (null == a) throw Error("User not found");
  let l = null == (n = d.A.getPool(e)) ? true : n.password;
  if (null == l) throw Error("Pool password not found");
  if (null == a.email) throw Error("User email not found");
  return r.A.login({
    login: a.email,
    password: l,
    isMultiAccount: true,
    source: "generated_test_user"
  }).catch(() => (i.A.showFailedToast(m.OB.GENERIC_ERROR), null))
}
async function h(e, t) {
  return await o.A.get({
    url: u.Rsh.GENERATED_POOL_BY_ID(e),
    trackedActionData: {
      event: a.NetworkActionNames.USER_LOGIN
    },
    rejectWithError: false
  }).then(e => {
    let {
      ok: n,
      body: a
    } = e;
    if (!n) return void i.A.showFailedToast(m.OB.GENERIC_ERROR);
    let {
      generated_pool: r,
      users: o
    } = a;
    l.h.dispatch({
      type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
      pool: c.N.fromServer(r).setPassword(t),
      users: o.map(e => new s.A(e))
    })
  }).catch(() => (i.A.showFailedToast(m.OB.GENERIC_ERROR), null))
}

function x(e) {
  l.h.dispatch({
    type: "GENERATED_POOL_REMOVE_FROM_LIST",
    poolId: e
  })
}