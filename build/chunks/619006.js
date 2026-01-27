/** Chunk was on 71905 **/
/** chunk id: 619006, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  XC: () => c,
  os: () => s,
  qK: () => l
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk545868 = require("./545868.js"),
  Chunk652215 = require("./652215.js");

function s(t, e) {
  i.Bo.get({
    url: r.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(t, e),
    rejectWithError: true
  }).then(t => {
    let n = [];
    t.body.length > 0 && (n = t.body.map(t => t.map(t => ({
      connectionType: t.connection_type,
      connectionMetadataField: t.connection_metadata_field,
      applicationId: t.application_id,
      operator: t.operator,
      value: t.value
    })))), o.h.dispatch({
      type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
      roleId: e,
      roleConnectionConfigurations: n
    })
  }).catch(() => {})
}
async function l(t, e, n) {
  let s = n.map(t => t.map(t => ({
      connection_type: t.connectionType,
      connection_metadata_field: t.connectionMetadataField,
      application_id: t.applicationId,
      operator: t.operator,
      value: t.value
    }))),
    l = await i.Bo.put({
      url: r.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATION(t, e),
      body: 0 === s.length ? [] : s,
      oldFormErrors: true,
      rejectWithError: false
    }).then(t => {
      let e = [];
      return t.body.length > 0 && (e = t.body.map(t => t.map(t => ({
        connectionType: t.connection_type,
        connectionMetadataField: t.connection_metadata_field,
        applicationId: t.application_id,
        operator: t.operator,
        value: t.value
      })))), e
    }),
    c = await (0, a.a)(t, e, false);
  null != c && o.h.dispatch({
    type: "GUILD_ROLE_MEMBER_COUNT_UPDATE",
    guildId: t,
    roleId: e,
    count: c
  }), o.h.dispatch({
    type: "GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS",
    roleId: e,
    roleConnectionConfigurations: l
  })
}
async function c() {
  return (await i.Bo.get({
    url: r.Rsh.APPLICATION_USER_ROLE_CONNECTIONS,
    rejectWithError: false
  })).body
}