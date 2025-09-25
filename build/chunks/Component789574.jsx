/** Chunk was on 27087 **/
/** chunk id: 789574, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g,
  j: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk139387 = require("./139387.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk490655 = require("./490655.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk145260 = require("./145260.js"),
  Chunk821864 = require("./821864.js"),
  Chunk905753 = require("./905753.js");

function g(e) {
  let {
    refToScroller: t
  } = e, n = (0, i.e7)([c.Z], () => c.Z.getGuild()), {
    section: l,
    sectionId: s,
    integrations: o,
    editedIntegration: u,
    webhooks: m,
    editedWebhook: g,
    isFetching: p,
    errors: f
  } = (0, i.cj)([d.default], () => ({
    editedIntegration: d.default.editedIntegration,
    editedWebhook: d.default.editedWebhook,
    errors: d.default.getErrors(),
    integrations: d.default.integrations,
    isFetching: d.default.isFetching(),
    section: d.default.getSection(),
    sectionId: d.default.getSectionId(),
    webhooks: d.default.webhooks
  }));
  return null == n ? null : (0, r.jsx)(a.Z, {
    guild: n,
    section: l,
    sectionId: s,
    integrations: o,
    webhooks: m,
    editedIntegration: u,
    editedWebhook: g,
    isFetchingWebhooks: p,
    hasChanges: d.default.hasChanges,
    errors: f,
    refToScroller: t
  })
}

function p() {
  let {
    guild: e,
    submitting: t
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => ({
    guild: Chunk999382.Z.getGuild(),
    submitting: Chunk999382.Z.isSubmitting()
  }));
  return (0, Chunk951288.jsx)(Chunk852860.Z, {
    submitting: exports,
    onReset: () => {
      Chunk139387.Z.init(), Chunk821864.Ui(), null != module && Chunk434404.Z.init(module.id)
    },
    onSave: () => {
      if (null != module) {
        if (null != Chunk145260.default.editedIntegration) Chunk139387.Z.saveIntegration(module.id, Chunk145260.default.editedIntegration);
        else if (null != Chunk145260.default.editedWebhook) Chunk139387.Z.saveWebhook(module.id, Chunk145260.default.editedWebhook);
        else if (null != Chunk145260.default.editedCommandId) {
          let t = Chunk145260.default.getSectionId(),
            n = Chunk905753.Z.getEditedApplication();
          if (null == exports || null == require) return;
          Chunk139387.Z.saveApplicationPermissions(exports, module.id, Object.values(require))
        }
        Chunk999382.Z.hasChanges() && Chunk434404.Z.saveGuild(module.id, {
          features: module.features
        })
      }
    }
  })
}