/** Chunk was on 52030 **/
/** chunk id: 658550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Gz: () => a,
  P0: () => d,
  gH: () => s,
  tL: () => i,
  th: () => r
}), require("./415506.js");
var Chunk544891 = require("./544891.js");
let r = 8,
  i = 11,
  s = 6,
  a = 6;
async function o(e) {
  let {
    ticket: t,
    mfaType: n,
    data: r
  } = e, i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 2;
  try {
    return (await l.tn.post({
      url: "/mfa/finish",
      body: {
        ticket: t,
        mfa_type: n,
        data: r
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
async function d(e, t) {
  let {
    token: n
  } = await o(e);
  return new Promise((e, l) => {
    t({
      "X-Discord-MFA-Authorization": n
    }, t => {
      var n, r;
      return (null == (n = t.body) ? true : n.code) === 60008 || (null == (r = t.body) ? true : r.code) === 60003 ? (l(Error(t.body.message)), true) : (e(), false)
    })
  })
}