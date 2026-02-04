/** Chunk was on 88474 **/
/** chunk id: 213012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let a = () => r.Bo.get({
  url: l.Rsh.GUILD_AFFINITIES,
  oldFormErrors: true,
  rejectWithError: false
}).then(e => {
  let {
    body: {
      guild_affinities: t
    }
  } = e;
  i.h.dispatch({
    type: "LOAD_GUILD_AFFINITIES_SUCCESS",
    guildAffinities: t
  })
}, () => {
  i.h.dispatch({
    type: "LOAD_GUILD_AFFINITIES_FAILURE"
  })
})