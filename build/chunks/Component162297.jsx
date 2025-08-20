/** Chunk was on 26434 **/
/** chunk id: 162297, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk230171 = require("./230171.jsx"),
  Chunk433534 = require("./433534.js");

function f(e) {
  let {
    applicationId: t
  } = e, [n, l, a] = (0, o.Wu)([d.Z], () => [d.Z.getApplication(t), d.Z.isFetchingApplication(t), d.Z.didFetchingApplicationFail(t)], [t]);
  return (i.useEffect(() => {
    null != n || l || a || u.ZP.fetchApplication(t)
  }, [n, l, a, t]), null != n && (0, m.Eb)({
    customInstallUrl: n.customInstallUrl,
    installParams: n.installParams,
    integrationTypesConfig: n.integrationTypesConfig
  })) ? (0, r.jsx)(g, {
    application: n
  }) : null
}

function g(e) {
  let {
    application: t
  } = e, n = i.useCallback(() => {
    (0, c.h)({
      type: l.ImpressionTypes.VIEW,
      name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
      properties: {
        application_id: t.id
      }
    })
  }, [t.id]), {
    analyticsLocations: o
  } = (0, s.ZP)(a.Z.APP_OAUTH2_LINK_EMBED);
  return (0, r.jsx)(s.Gt, {
    value: o,
    children: (0, r.jsx)(p.O, {
      app: t,
      linkType: p.U.OAUTH,
      onView: n
    })
  })
}