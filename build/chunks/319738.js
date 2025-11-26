/** Chunk was on 45476 **/
/** chunk id: 319738, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KZ: () => x,
  TA: () => p,
  UK: () => h
}), require("./415506.js");
var Chunk990547 = require("./990547.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk681678 = require("./681678.js"),
  Chunk598077 = require("./598077.js"),
  Chunk573261 = require("./573261.js"),
  Chunk439128 = require("./439128.js"),
  Chunk163558 = require("./163558.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484710 = require("./484710.js");

function p(e, t) {
  var n;
  let a = d.Z.getUser(t);
  if (null == a) throw Error("User not found");
  let l = null == (n = d.Z.getPool(e)) ? true : n.password;
  if (null == l) throw Error("Pool password not found");
  if (null == a.email) throw Error("User email not found");
  return i.Z.login({
    login: a.email,
    password: l,
    isMultiAccount: true,
    source: "generated_test_user"
  }).catch(() => (r.Z.showFailedToast(m.wQ.GENERIC_ERROR), null))
}
async function h(e, t) {
  return await o.Z.get({
    url: u.ANM.GENERATED_POOL_BY_ID(e),
    trackedActionData: {
      event: a.NetworkActionNames.USER_LOGIN
    },
    rejectWithError: false
  }).then(e => {
    let {
      ok: n,
      body: a
    } = e;
    if (!n) return void r.Z.showFailedToast(m.wQ.GENERIC_ERROR);
    let {
      generated_pool: i,
      users: o
    } = a;
    l.Z.dispatch({
      type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
      pool: c.w.fromServer(i).setPassword(t),
      users: o.map(e => new s.Z(e))
    })
  }).catch(() => (r.Z.showFailedToast(m.wQ.GENERIC_ERROR), null))
}

function x(e) {
  l.Z.dispatch({
    type: "GENERATED_POOL_REMOVE_FROM_LIST",
    poolId: e
  })
}