/** Chunk was on 47841 **/
/** chunk id: 826292, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h,
  K: () => j
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk788373 = require("./788373.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk282956 = require("./282956.js"),
  Chunk875264 = require("./875264.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk53656 = require("./53656.js"),
  Chunk542580 = require("./542580.js"),
  Chunk803378 = require("./803378.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    refToScroller: t
  } = e, n = (0, l.bG)([f.A], () => f.A.getGuild()), {
    section: i,
    sectionId: s,
    integrations: a,
    editedIntegration: c,
    webhooks: d,
    editedWebhook: u,
    isFetching: b,
    errors: m
  } = (0, l.cf)([g.default], () => ({
    editedIntegration: g.default.editedIntegration,
    editedWebhook: g.default.editedWebhook,
    errors: g.default.getErrors(),
    integrations: g.default.integrations,
    isFetching: g.default.isFetching(),
    section: g.default.getSection(),
    sectionId: g.default.getSectionId(),
    webhooks: g.default.webhooks
  }));
  return null == n ? null : (0, r.jsx)(o.A, {
    guild: n,
    section: i,
    sectionId: s,
    integrations: a,
    webhooks: d,
    editedIntegration: c,
    editedWebhook: u,
    isFetchingWebhooks: b,
    hasChanges: g.default.hasChanges,
    errors: m,
    refToScroller: t
  })
}

function j() {
  var e;
  let {
    guild: t,
    submitting: n
  } = (0, l.cf)([f.A], () => ({
    guild: f.A.getGuild(),
    submitting: f.A.isSubmitting()
  })), o = (0, l.bG)([d.A], () => d.A.can(p.xBc.KICK_MEMBERS, t)), h = false, j = null;
  return o || (null == (e = g.default.editedIntegration) ? true : e.expire_behavior) !== i.F.KICK || (h = true, j = (0, r.jsx)(a.Text, {
    color: "text-feedback-critical",
    variant: "text-md/normal",
    children: x.intl.string(x.t["mrO/ZQ"])
  })), (0, r.jsx)(s.A, {
    submitting: n,
    disabled: h,
    errorMessage: j,
    onReset: () => {
      c.A.init(), b.C8(), null != t && u.A.init(t.id)
    },
    onSave: () => {
      if (null != t) {
        if (null != g.default.editedIntegration) c.A.saveIntegration(t.id, g.default.editedIntegration);
        else if (null != g.default.editedWebhook) c.A.saveWebhook(t.id, g.default.editedWebhook);
        else if (null != g.default.editedCommandId) {
          let e = g.default.getSectionId(),
            n = m.A.getEditedApplication();
          if (null == e || null == n) return;
          c.A.saveApplicationPermissions(e, t.id, Object.values(n))
        }
        f.A.hasChanges() && u.A.saveGuild(t.id, {
          features: t.features
        })
      }
    }
  })
}