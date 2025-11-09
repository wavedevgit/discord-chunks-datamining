/** Chunk was on 29679 **/
/** chunk id: 789574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x,
  j: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    isFetching: p,
    errors: f
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
  } = (0, Chunk442837.cj)([Chunk999382.Z], () => ({
    guild: Chunk999382.Z.getGuild(),
    submitting: Chunk999382.Z.isSubmitting()
  })), c = (0, Chunk442837.e7)([Chunk496675.Z], () => Chunk496675.Z.can(Chunk981631.Plq.KICK_MEMBERS, exports)), x = false, j = null;
  return Chunk490655 || (null == (e = Chunk145260.default.editedIntegration) ? true : module.expire_behavior) !== Chunk13107.l.KICK || (x = true, j = (0, Chunk951288.jsx)(Chunk481060.Text, {
    color: "text-danger",
    variant: "text-md/normal",
    children: Chunk388032.intl.string(Chunk388032.t["mrO/ZQ"])
  })), (0, Chunk951288.jsx)(Chunk796027.Z, {
    submitting: require,
    disabled: x,
    errorMessage: j,
    onReset: () => {
      Chunk139387.Z.init(), Chunk821864.Ui(), null != exports && Chunk434404.Z.init(exports.id)
    },
    onSave: () => {
      if (null != exports) {
        if (null != Chunk145260.default.editedIntegration) Chunk139387.Z.saveIntegration(exports.id, Chunk145260.default.editedIntegration);
        else if (null != Chunk145260.default.editedWebhook) Chunk139387.Z.saveWebhook(exports.id, Chunk145260.default.editedWebhook);
        else if (null != Chunk145260.default.editedCommandId) {
          let e = Chunk145260.default.getSectionId(),
            n = Chunk905753.Z.getEditedApplication();
          if (null == module || null == require) return;
          Chunk139387.Z.saveApplicationPermissions(module, exports.id, Object.values(require))
        }
        Chunk999382.Z.hasChanges() && Chunk434404.Z.saveGuild(exports.id, {
          features: exports.features
        })
      }
    }
  })
}