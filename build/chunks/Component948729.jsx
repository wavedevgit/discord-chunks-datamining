/** Chunk was on web.js **/
/** chunk id: 948729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
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

function _(e) {
  let {
    applicationId: t,
    message: n
  } = e, [a, o, l] = (0, s.yK)([d.A], () => [d.A.getApplication(t), d.A.isFetchingApplication(t), d.A.didFetchingApplicationFail(t)], [t]);
  return (i.useEffect(() => {
    null != a || o || l || u.Ay.fetchApplication(t)
  }, [a, o, l, t]), null != a && (0, p.Ie)({
    customInstallUrl: a.customInstallUrl,
    installParams: a.installParams,
    integrationTypesConfig: a.integrationTypesConfig
  })) ? (0, r.jsx)(h, {
    application: a,
    message: n
  }) : null
}

function h(e) {
  let {
    application: t,
    message: n
  } = e, s = i.useCallback(() => {
    (0, c.x)({
      type: a.ImpressionTypes.VIEW,
      name: a.ImpressionNames.APP_OAUTH2_LINK_EMBED,
      properties: {
        application_id: t.id
      }
    })
  }, [t.id]), {
    analyticsLocations: u
  } = (0, l.Ay)(o.A.APP_OAUTH2_LINK_EMBED);
  return (0, r.jsx)(l.f5, {
    value: u,
    children: (0, r.jsx)(f.W, {
      app: t,
      linkType: f.J.OAUTH,
      onView: s,
      message: n
    })
  })
}