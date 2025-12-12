/** Chunk was on 9558 **/
/** chunk id: 570849, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  l: () => l,
  u: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");

function l(e, t) {
  r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
    selectedTemplate: e,
    guildId: t
  })
}
async function s(e) {
  let t = (await n.tn.get({
    url: i.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
    rejectWithError: false
  })).body;
  null != t.templates && r.Z.dispatch({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
    templates: t.templates,
    guildId: e
  })
}