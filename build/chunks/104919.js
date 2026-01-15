/** Chunk was on web.js **/
/** chunk id: 104919, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => d
});
var Chunk373793 = require("./373793.js"),
  Chunk367907 = require("./367907.js"),
  Chunk69580 = require("./69580.jsx"),
  Chunk973616 = require("./973616.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk433534 = require("./433534.js"),
  Chunk981631 = require("./981631.js");
async function d(e) {
  var t, n, d;
  let {
    applicationId: f,
    channel: p,
    commandIntegrationTypes: _,
    appLauncherContext: h
  } = e;
  if (!(0, c.x$)({
      applicationId: f,
      channel: p,
      commandIntegrationTypes: _
    })) return Promise.resolve({
    isAuthorized: true
  });
  let m = l.Z.getApplication(f);
  if (null == m) {
    let e = await (0, s.UM)(f);
    m = o.ZP.createFromServer(e)
  }
  let g = r.Y.USER_INSTALL,
    E = null == m || null == (d = m.integrationTypesConfig) || null == (n = d[g]) || null == (t = n.oauth2InstallParams) ? true : t.scopes;
  return null != h && (0, i.yw)(u.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
    application_id: f,
    location: h.location,
    section_name: h.sectionName,
    source: h.entrypoint
  }), new Promise(e => {
    (0, a.openOAuth2Modal)({
      clientId: f,
      integrationType: g,
      scopes: E,
      callback: t => {
        let {
          location: n
        } = t;
        null != n ? (null != h && (0, i.yw)(u.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
          application_id: f,
          location: h.location,
          section_name: h.sectionName,
          source: h.entrypoint
        }), e({
          isAuthorized: true
        })) : e({
          isAuthorized: false
        })
      }
    }, () => {
      e({
        isAuthorized: false
      })
    })
  })
}