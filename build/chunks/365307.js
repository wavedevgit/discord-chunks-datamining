/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => g,
  j: () => f
});
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(139387),
  a = n(852860),
  l = n(490655),
  o = n(434404),
  A = n(360606),
  c = n(999382),
  d = n(821864),
  u = n(905753);

function g(e) {
  let {
    refToScroller: t
  } = e, n = (0, i.e7)([c.Z], () => c.Z.getGuild()), {
    section: s,
    sectionId: a,
    integrations: o,
    editedIntegration: d,
    webhooks: u,
    editedWebhook: g,
    isFetching: f,
    errors: m
  } = (0, i.cj)([A.default], () => ({
    editedIntegration: A.default.editedIntegration,
    editedWebhook: A.default.editedWebhook,
    errors: A.default.getErrors(),
    integrations: A.default.integrations,
    isFetching: A.default.isFetching(),
    section: A.default.getSection(),
    sectionId: A.default.getSectionId(),
    webhooks: A.default.webhooks
  }));
  return null == n ? null : (0, r.jsx)(l.Z, {
    guild: n,
    section: s,
    sectionId: a,
    integrations: o,
    webhooks: u,
    editedIntegration: d,
    editedWebhook: g,
    isFetchingWebhooks: f,
    hasChanges: A.default.hasChanges,
    errors: m,
    refToScroller: t
  })
}

function f() {
  let {
    guild: e,
    submitting: t
  } = (0, i.cj)([c.Z], () => ({
    guild: c.Z.getGuild(),
    submitting: c.Z.isSubmitting()
  }));
  return (0, r.jsx)(a.Z, {
    submitting: t,
    onReset: () => {
      s.Z.init(), d.Ui(), null != e && o.Z.init(e.id)
    },
    onSave: () => {
      if (null != e) {
        if (null != A.default.editedIntegration) s.Z.saveIntegration(e.id, A.default.editedIntegration);
        else if (null != A.default.editedWebhook) s.Z.saveWebhook(e.id, A.default.editedWebhook);
        else if (null != A.default.editedCommandId) {
          let t = A.default.getSectionId(),
            n = u.Z.getEditedApplication();
          if (null == t || null == n) return;
          s.Z.saveApplicationPermissions(t, e.id, Object.values(n))
        }
        c.Z.hasChanges() && o.Z.saveGuild(e.id, {
          features: e.features
        })
      }
    }
  })
}