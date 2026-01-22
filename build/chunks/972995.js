/** Chunk was on web.js **/
/** chunk id: 972995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => d
});
var Chunk485845 = require("./485845.js"),
  Chunk58149 = require("./58149.js"),
  Chunk200330 = require("./200330.jsx"),
  Chunk611010 = require("./611010.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk204776 = require("./204776.js"),
  Chunk652215 = require("./652215.js");
async function d(e) {
  var t, n, d;
  let {
    applicationId: f,
    channel: p,
    commandIntegrationTypes: _,
    appLauncherContext: h
  } = e;
  if (!(0, c.Rx)({
      applicationId: f,
      channel: p,
      commandIntegrationTypes: _
    })) return Promise.resolve({
    isAuthorized: true
  });
  let m = l.A.getApplication(f);
  if (null == m) {
    let e = await (0, o.TA)(f);
    m = s.Ay.createFromServer(e)
  }
  let g = r.b.USER_INSTALL,
    E = null == m || null == (d = m.integrationTypesConfig) || null == (n = d[g]) || null == (t = n.oauth2InstallParams) ? true : t.scopes;
  return null != h && (0, i.zV)(u.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
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
        null != n ? (null != h && (0, i.zV)(u.HAw.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, {
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