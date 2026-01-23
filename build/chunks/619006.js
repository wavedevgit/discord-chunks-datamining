/** Chunk was on 80971 **/
/** chunk id: 619006, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  XC: () => r,
  os: () => o,
  qK: () => s
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk545868 = require("./545868.js"),
  Chunk652215 = require("./652215.js");

function o(e, n) {
  l.Bo.get({
    url: i.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
    rejectWithError: true
  }).then(e => {
    let t = [];
    e.body.length > 0 && (t = e.body.map(e => e.map(e => ({
      connectionType: e.connection_type,
      connectionMetadataField: e.connection_metadata_field,
      applicationId: e.application_id,
      operator: e.operator,
      value: e.value
    })))), a.h.dispatch({
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId: n,
      roleConnectionConfigurations: t
    })
  }).catch(() => {})
}
async function s(e, n, t) {
  let o = t.map(e => e.map(e => ({
      connection_type: e.connectionType,
      connection_metadata_field: e.connectionMetadataField,
      application_id: e.applicationId,
      operator: e.operator,
      value: e.value
    }))),
    s = await l.Bo.put({
      url: i.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, n),
      body: 0 === o.length ? [] : o,
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
    r = await (0, c.a)(e, n, false);
  null != r && a.h.dispatch({
    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
    guildId: e,
    roleId: n,
    count: r
  }), a.h.dispatch({
    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
    roleId: n,
    roleConnectionConfigurations: s
  })
}
async function r() {
  return (await l.Bo.get({
    url: i.Rsh.APPLICATION_USER_ROLE_CONNECTIONS,
    rejectWithError: false
  })).body
}