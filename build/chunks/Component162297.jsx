/** Chunk was on web.js **/
/** chunk id: 162297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk230171 = require("./230171.jsx"),
  Chunk433534 = require("./433534.js");

function _(e) {
  let {
    applicationId: t,
    message: n
  } = e, [a, s, l] = (0, o.Wu)([d.Z], () => [d.Z.getApplication(t), d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t)], [t]);
  return (i.useEffect(() => {
    null != a || s || l || u.ZP.fetchApplication(t)
  }, [a, s, l, t]), null != a && (0, p.Eb)({
    customInstallUrl: a.customInstallUrl,
    installParams: a.installParams,
    integrationTypesConfig: a.integrationTypesConfig
  })) ? (0, r.jsx)(m, {
    application: a,
    message: n
  }) : null
}

function m(e) {
  let {
    application: t,
    message: n
  } = e, o = i.useCallback(() => {
    (0, c.h)({
      type: a.ImpressionTypes.VIEW,
      name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
      properties: {
        application_id: t.id
      }
    })
  }, [t.id]), {
    analyticsLocations: u
  } = (0, l.ZP)(s.Z.APP_OAUTH2_LINK_EMBED);
  return (0, r.jsx)(l.Gt, {
    value: u,
    children: (0, r.jsx)(f.O, {
      app: t,
      linkType: f.U.OAUTH,
      onView: o,
      message: n
    })
  })
}