/** Chunk was on 90194 **/
/** chunk id: 441715, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  $: () => a
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk549479 = require("./549479.js"),
  Chunk652215 = require("./652215.js");
async function a(e) {
  let t = r.A.getAllowedApplicationIds(e);
  if (null !== t) return Promise.resolve(t);
  if (r.A.isFetching(e)) return new Promise(t => {
    let l = () => {
      let n = r.A.getAllowedApplicationIds(e);
      null !== n && (r.A.removeChangeListener(l), t(n))
    };
    r.A.addChangeListener(l)
  });
  i.h.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START",
    guildId: e
  });
  try {
    var l;
    let t = await n.Bo.get({
      url: o.Rsh.GUILD_ONBOARDING_ALLOWED_APPLICATIONS(e),
      rejectWithError: false
    });
    if (t.ok && (null == (l = t.body) ? true : l.application_ids)) {
      let l = t.body.application_ids.map(e => String(e));
      return i.h.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
        guildId: e,
        applicationIds: l
      }), l
    }
    return i.h.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
      guildId: e,
      applicationIds: []
    }), []
  } catch (t) {
    return i.h.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE",
      guildId: e
    }), []
  }
}