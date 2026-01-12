/** Chunk was on 9536 **/
/** chunk id: 789574, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x,
  j: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk13107 = require("./13107.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk490655 = require("./490655.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk145260 = require("./145260.js"),
  Chunk821864 = require("./821864.js"),
  Chunk905753 = require("./905753.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function x(e) {
  let {
    refToScroller: t
  } = e, n = (0, l.e7)([g.Z], () => g.Z.getGuild()), {
    section: i,
    sectionId: a,
    integrations: s,
    editedIntegration: o,
    webhooks: d,
    editedWebhook: u,
    isFetching: f,
    errors: b
  } = (0, l.cj)([m.default], () => ({
    editedIntegration: m.default.editedIntegration,
    editedWebhook: m.default.editedWebhook,
    errors: m.default.getErrors(),
    integrations: m.default.integrations,
    isFetching: m.default.isFetching(),
    section: m.default.getSection(),
    sectionId: m.default.getSectionId(),
    webhooks: m.default.webhooks
  }));
  return null == n ? null : (0, r.jsx)(c.Z, {
    guild: n,
    section: i,
    sectionId: a,
    integrations: s,
    webhooks: d,
    editedIntegration: o,
    editedWebhook: u,
    isFetchingWebhooks: f,
    hasChanges: m.default.hasChanges,
    errors: b,
    refToScroller: t
  })
}

function j() {
  var e;
  let {
    guild: t,
    submitting: n
  } = (0, l.cj)([g.Z], () => ({
    guild: g.Z.getGuild(),
    submitting: g.Z.isSubmitting()
  })), c = (0, l.e7)([d.Z], () => d.Z.can(p.Plq.KICK_MEMBERS, t)), x = false, j = null;
  return c || (null == (e = m.default.editedIntegration) ? true : e.expire_behavior) !== i.l.KICK || (x = true, j = (0, r.jsx)(s.Text, {
    color: "text-feedback-critical",
    variant: "text-md/normal",
    children: h.intl.string(h.t["mrO/ZQ"])
  })), (0, r.jsx)(a.Z, {
    submitting: n,
    disabled: x,
    errorMessage: j,
    onReset: () => {
      o.Z.init(), f.Ui(), null != t && u.Z.init(t.id)
    },
    onSave: () => {
      if (null != t) {
        if (null != m.default.editedIntegration) o.Z.saveIntegration(t.id, m.default.editedIntegration);
        else if (null != m.default.editedWebhook) o.Z.saveWebhook(t.id, m.default.editedWebhook);
        else if (null != m.default.editedCommandId) {
          let e = m.default.getSectionId(),
            n = b.Z.getEditedApplication();
          if (null == e || null == n) return;
          o.Z.saveApplicationPermissions(e, t.id, Object.values(n))
        }
        g.Z.hasChanges() && u.Z.saveGuild(t.id, {
          features: t.features
        })
      }
    }
  })
}