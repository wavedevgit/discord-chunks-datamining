/** Chunk was on web.js **/
/** chunk id: 162297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk213609 = require("./213609.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk230171 = require("./230171.js"),
  Chunk433534 = require("./433534.js");

function p(e) {
  let {
    applicationId: t
  } = e, [n, o, s] = (0, a.Wu)([d.Z], () => [d.Z.getApplication(t), d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t)], [t]);
  return (i.useEffect(() => {
    null != n || o || s || u.ZP.fetchApplication(t)
  }, [n, o, s, t]), null != n && (0, _.Eb)({
    customInstallUrl: n.customInstallUrl,
    installParams: n.installParams,
    integrationTypesConfig: n.integrationTypesConfig
  })) ? <h application={n} /> : null
}

function h(e) {
  let {
    application: t
  } = e, n = i.useCallback(() => {
    (0, c.h)({
      type: o.ImpressionTypes.VIEW,
      name: o.ImpressionNames.APP_OAUTH2_LINK_EMBED,
      properties: {
        application_id: t.id
      }
    })
  }, [t.id]), {
    analyticsLocations: a
  } = (0, l.ZP)(s.Z.APP_OAUTH2_LINK_EMBED);
  return <l.Gt value={a}><f.O app={t} linkType={f.U.OAUTH} onView={n} /></l.Gt>
}