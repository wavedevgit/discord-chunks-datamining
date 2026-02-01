/** Chunk was on 9753 **/
/** chunk id: 948729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk417597 = require("./417597.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk485724 = require("./485724.jsx"),
  Chunk204776 = require("./204776.js");

function f(e) {
  let {
    applicationId: t,
    message: n
  } = e, [l, s, o] = (0, a.yK)([d.A], () => [d.A.getApplication(t), d.A.isFetchingApplication(t), d.A.didFetchingApplicationFail(t)], [t]);
  return (i.useEffect(() => {
    null != l || s || o || u.Ay.fetchApplication(t)
  }, [l, s, o, t]), null != l && (0, m.Ie)({
    customInstallUrl: l.customInstallUrl,
    installParams: l.installParams,
    integrationTypesConfig: l.integrationTypesConfig
  })) ? (0, r.jsx)(g, {
    application: l,
    message: n
  }) : null
}

function g(e) {
  let {
    application: t,
    message: n
  } = e, a = i.useCallback(() => {
    (0, c.x)({
      type: l.ImpressionTypes.VIEW,
      name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
      properties: {
        application_id: t.id
      }
    })
  }, [t.id]), {
    analyticsLocations: u
  } = (0, o.Ay)(s.A.APP_OAUTH2_LINK_EMBED);
  return (0, r.jsx)(o.f5, {
    value: u,
    children: (0, r.jsx)(p.W, {
      app: t,
      linkType: p.J.OAUTH,
      onView: a,
      message: n
    })
  })
}