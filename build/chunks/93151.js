/** Chunk was on 21738 **/
/** chunk id: 93151, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => l
});
var Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js");
async function l(e, t) {
  if (true === e) returnfalse;
  try {
    let {
      body: n
    } = await r.Bo.get({
      url: i.Rsh.ACTIVITIES_TRUSTED_LINKS(e),
      rejectWithError: false,
      query: {
        url: t
      },
      timeout: 500
    });
    return !!n.trusted
  } catch (e) {
    returnfalse
  }
}