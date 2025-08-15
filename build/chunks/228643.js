/** Chunk was on 68930 **/
/** chunk id: 228643, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  L_: () => r,
  nj: () => s,
  sE: () => l
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk480608 = require("./480608.js"),
  Chunk981631 = require("./981631.js");

function l(e, n) {
  c.tn.get({
    url: i.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
    rejectWithError: true
  }).then(e => {
    let t = [];
    e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
      connectionType: e.connection_type,
      connectionMetadataField: e.connection_metadata_field,
      applicationId: e.application_id,
      operator: e.operator,
      value: e.value
    })))), o.Z.dispatch({
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId: n,
      roleConnectionConfigurations: t
    })
  }).catch(() => {})
}
async function r(e, n, t) {
  let l = t.map(e => e.map(e => ({
      connection_type: e.connectionType,
      connection_metadata_field: e.connectionMetadataField,
      application_id: e.applicationId,
      operator: e.operator,
      value: e.value
    }))),
    r = await c.tn.put({
      url: i.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
      body: 0 === l.length ? [] : l,
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      let n = [];
      return e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
        connectionType: e.connection_type,
        connectionMetadataField: e.connection_metadata_field,
        applicationId: e.application_id,
        operator: e.operator,
        value: e.value
      })))), n
    }),
    s = await (0, a.H)(e, n, false);
  null != s && o.Z.dispatch({
    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
    guildId: e,
    roleId: n,
    count: s
  }), o.Z.dispatch({
    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
    roleId: n,
    roleConnectionConfigurations: r
  })
}
async function s() {
  return (await Chunk544891.tn.get({
    url: Chunk981631.ANM.APPLICATION_USER_ROLE_CONNECTIONS,
    rejectWithError: false
  })).body
}