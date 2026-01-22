/** Chunk was on 263 **/
/** chunk id: 336200, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  c: () => l,
  y: () => i
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");

function l(e, t) {
  a.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
    selectedTemplate: e,
    guildId: t
  })
}
async function i(e) {
  let t = (await r.Bo.get({
    url: n.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
    rejectWithError: false
  })).body;
  null != t.templates && a.h.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
    templates: t.templates,
    guildId: e
  })
}