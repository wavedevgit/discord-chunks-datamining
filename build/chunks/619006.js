/** Chunk was on 80971 **/
/** chunk id: 619006, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  XC: () => o,
  os: () => s,
  qK: () => r
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk545868 = require("./545868.js"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  n.Bo.get({
    url: c.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
    rejectWithError: true
  }).then(e => {
    let l = [];
    e.body.length > 0 && (l = e.body.map(e => e.map(e => ({
      connectionType: e.connection_type,
      connectionMetadataField: e.connection_metadata_field,
      applicationId: e.application_id,
      operator: e.operator,
      value: e.value
    })))), a.h.dispatch({
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId: t,
      roleConnectionConfigurations: l
    })
  }).catch(() => {})
}
async function r(e, t, l) {
  let s = l.map(e => e.map(e => ({
      connection_type: e.connectionType,
      connection_metadata_field: e.connectionMetadataField,
      application_id: e.applicationId,
      operator: e.operator,
      value: e.value
    }))),
    r = await n.Bo.put({
      url: c.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(e, t),
      body: 0 === s.length ? [] : s,
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
    o = await (0, i.a)(e, t, false);
  null != o && a.h.dispatch({
    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
    guildId: e,
    roleId: t,
    count: o
  }), a.h.dispatch({
    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
    roleId: t,
    roleConnectionConfigurations: r
  })
}
async function o() {
  return (await n.Bo.get({
    url: c.Rsh.APPLICATION_USER_ROLE_CONNECTIONS,
    rejectWithError: false
  })).body
}