/** Chunk was on 10667 **/
/** chunk id: 428681, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  E: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk421580 = require("./421580.js"),
  Chunk159277 = require("./159277.js"),
  Chunk585183 = require("./585183.js"),
  Chunk981631 = require("./981631.js"),
  Chunk927923 = require("./927923.js");

function l(t) {
  let {
    platformType: n,
    authToken: e,
    onContinue: l,
    onError: d,
    onClose: u
  } = t, p = n === a.ABu.PLAYSTATION_STAGING ? r.t.PLAYSTATION_STAGING_APPLICATION_ID : r.t.PLAYSTATION_APPLICATION_ID, _ = n === a.ABu.PLAYSTATION_STAGING ? i.x.PLAYSTATION_STAGING : i.x.PLAYSTATION;
  return <s.h platformType={n} clientId={p} scopes={c.KL} authToken={e} onContinue={l} onError={d} onClose={u} redirectUri={_} />
}