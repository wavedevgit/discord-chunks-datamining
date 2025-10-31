/** Chunk was on 86736 **/
/** chunk id: 228643, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L_: () => s,
  nj: () => c,
  sE: () => o
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk480608 = require("./480608.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  i.tn.get({
    url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
    rejectWithError: true
  }).then(e => {
    let n = [];
    e.body.length > 0 && (n = e.body.map(e => e.map(e => ({
      connectionType: e.connection_type,
      connectionMetadataField: e.connection_metadata_field,
      applicationId: e.application_id,
      operator: e.operator,
      value: e.value
    })))), r.Z.dispatch({
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId: t,
      roleConnectionConfigurations: n
    })
  }).catch(() => {})
}
async function s(e, t, n) {
  let o = n.map(e => e.map(e => ({
      connection_type: e.connectionType,
      connection_metadata_field: e.connectionMetadataField,
      application_id: e.applicationId,
      operator: e.operator,
      value: e.value
    }))),
    s = await i.tn.put({
      url: a.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
      body: 0 === o.length ? [] : o,
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      let t = [];
      return e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
        connectionType: e.connection_type,
        connectionMetadataField: e.connection_metadata_field,
        applicationId: e.application_id,
        operator: e.operator,
        value: e.value
      })))), t
    }),
    c = await (0, l.H)(e, t, false);
  null != c && r.Z.dispatch({
    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
    guildId: e,
    roleId: t,
    count: c
  }), r.Z.dispatch({
    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
    roleId: t,
    roleConnectionConfigurations: s
  })
}
async function c() {
  return (await Chunk544891.tn.get({
    url: Chunk981631.ANM.APPLICATION_USER_ROLE_CONNECTIONS,
    rejectWithError: false
  })).body
}