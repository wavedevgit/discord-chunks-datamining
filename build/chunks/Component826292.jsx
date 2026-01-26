/** Chunk was on 39048 **/
/** chunk id: 826292, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x,
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

function x(e) {
  let {
    refToScroller: t
  } = e, n = (0, l.bG)([g.A], () => g.A.getGuild()), {
    section: i,
    sectionId: s,
    integrations: a,
    editedIntegration: o,
    webhooks: d,
    editedWebhook: u,
    isFetching: p,
    errors: f
  } = (0, l.cf)([m.default], () => ({
    editedIntegration: m.default.editedIntegration,
    editedWebhook: m.default.editedWebhook,
    errors: m.default.getErrors(),
    integrations: m.default.integrations,
    isFetching: m.default.isFetching(),
    section: m.default.getSection(),
    sectionId: m.default.getSectionId(),
    webhooks: m.default.webhooks
  }));
  return null == n ? null : (0, r.jsx)(c.A, {
    guild: n,
    section: i,
    sectionId: s,
    integrations: a,
    webhooks: d,
    editedIntegration: o,
    editedWebhook: u,
    isFetchingWebhooks: p,
    hasChanges: m.default.hasChanges,
    errors: f,
    refToScroller: t
  })
}

function j() {
  var e;
  let {
    guild: t,
    submitting: n
  } = (0, l.cf)([g.A], () => ({
    guild: g.A.getGuild(),
    submitting: g.A.isSubmitting()
  })), c = (0, l.bG)([d.A], () => d.A.can(h.xBc.KICK_MEMBERS, t)), x = false, j = null;
  return c || (null == (e = m.default.editedIntegration) ? true : e.expire_behavior) !== i.F.KICK || (x = true, j = (0, r.jsx)(a.Text, {
    color: "text-feedback-critical",
    variant: "text-md/normal",
    children: b.intl.string(b.t["mrO/ZQ"])
  })), (0, r.jsx)(s.A, {
    submitting: n,
    disabled: x,
    errorMessage: j,
    onReset: () => {
      o.A.init(), p.C8(), null != t && u.A.init(t.id)
    },
    onSave: () => {
      if (null != t) {
        if (null != m.default.editedIntegration) o.A.saveIntegration(t.id, m.default.editedIntegration);
        else if (null != m.default.editedWebhook) o.A.saveWebhook(t.id, m.default.editedWebhook);
        else if (null != m.default.editedCommandId) {
          let e = m.default.getSectionId(),
            n = f.A.getEditedApplication();
          if (null == e || null == n) return;
          o.A.saveApplicationPermissions(e, t.id, Object.values(n))
        }
        g.A.hasChanges() && u.A.saveGuild(t.id, {
          features: t.features
        })
      }
    }
  })
}