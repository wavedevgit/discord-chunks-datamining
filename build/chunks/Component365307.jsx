/** Chunk was on 70830 **/
/** chunk id: 365307, original params: e,t,n (module,exports,require) **/
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
  Chunk360606 = require("./360606.js"),
  Chunk999382 = require("./999382.js"),
  Chunk821864 = require("./821864.js"),
  Chunk905753 = require("./905753.js");

function g(e) {
  let {
    refToScroller: t
  } = e, n = (0, i.e7)([d.Z], () => d.Z.getGuild()), {
    section: l,
    sectionId: a,
    integrations: o,
    editedIntegration: u,
    webhooks: m,
    editedWebhook: g,
    isFetching: p,
    errors: h
  } = (0, i.cj)([c.default], () => ({
    editedIntegration: c.default.editedIntegration,
    editedWebhook: c.default.editedWebhook,
    errors: c.default.getErrors(),
    integrations: c.default.integrations,
    isFetching: c.default.isFetching(),
    section: c.default.getSection(),
    sectionId: c.default.getSectionId(),
    webhooks: c.default.webhooks
  }));
  return null == n ? null : (0, r.jsx)(s.Z, {
    guild: n,
    section: l,
    sectionId: a,
    integrations: o,
    webhooks: m,
    editedIntegration: u,
    editedWebhook: g,
    isFetchingWebhooks: p,
    hasChanges: c.default.hasChanges,
    errors: h,
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
        if (null != Chunk360606.default.editedIntegration) Chunk139387.Z.saveIntegration(module.id, Chunk360606.default.editedIntegration);
        else if (null != Chunk360606.default.editedWebhook) Chunk139387.Z.saveWebhook(module.id, Chunk360606.default.editedWebhook);
        else if (null != Chunk360606.default.editedCommandId) {
          let t = Chunk360606.default.getSectionId(),
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