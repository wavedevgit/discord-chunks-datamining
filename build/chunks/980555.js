/** Chunk was on 11798 **/
/** chunk id: 980555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => a
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk987350 = require("./987350.js"),
  Chunk981631 = require("./981631.js");
async function a(e) {
  let t = r.Z.getAllowedApplicationIds(e);
  if (null !== t) return Promise.resolve(t);
  if (r.Z.isFetching(e)) return new Promise(t => {
    let n = () => {
      let l = r.Z.getAllowedApplicationIds(e);
      null !== l && (r.Z.removeChangeListener(n), t(l))
    };
    r.Z.addChangeListener(n)
  });
  i.Z.dispatch({
    type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START",
    guildId: e
  });
  try {
    var n;
    let t = await l.tn.get({
      url: o.ANM.GUILD_ONBOARDING_ALLOWED_APPLICATIONS(e),
      rejectWithError: false
    });
    if (t.ok && (null == (n = t.body) ? true : n.application_ids)) {
      let n = t.body.application_ids.map(e => String(e));
      return i.Z.dispatch({
        type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
        guildId: e,
        applicationIds: n
      }), n
    }
    return i.Z.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS",
      guildId: e,
      applicationIds: []
    }), []
  } catch (t) {
    return i.Z.dispatch({
      type: "GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE",
      guildId: e
    }), []
  }
}