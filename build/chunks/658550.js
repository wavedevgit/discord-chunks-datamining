/** Chunk was on 52030 **/
/** chunk id: 658550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gz: () => a,
  P0: () => c,
  gH: () => s,
  tL: () => i,
  th: () => l
}), require("./415506.js");
var Chunk544891 = require("./544891.js");
let l = 8,
  i = 11,
  s = 6,
  a = 6;
async function o(e) {
  let {
    ticket: t,
    mfaType: n,
    data: l
  } = e, i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 2;
  try {
    return (await r.tn.post({
      url: "/mfa/finish",
      body: {
        ticket: t,
        mfa_type: n,
        data: l
      },
      retries: i,
      rejectWithError: false
    })).body
  } catch (e) {
    var s;
    if (null == (s = e.body) ? true : s.message) throw Error(e.body.message);
    throw e
  }
}
async function c(e, t) {
  let {
    token: n
  } = await o(e);
  return new Promise((e, r) => {
    t({
      "X-Discord-MFA-Authorization": n
    }, t => {
      var n, l;
      return (null == (n = t.body) ? true : n.code) === 60008 || (null == (l = t.body) ? true : l.code) === 60003 ? (r(Error(t.body.message)), true) : (e(), false)
    })
  })
}