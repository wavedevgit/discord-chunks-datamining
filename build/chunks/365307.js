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
  c = n(360606),
  A = n(999382),
  d = n(821864),
  u = n(905753);

function g(e) {
  let {
    refToScroller: t
  } = e, n = (0, i.e7)([A.Z], () => A.Z.getGuild()), {
    section: s,
    sectionId: a,
    integrations: o,
    editedIntegration: d,
    webhooks: u,
    editedWebhook: g,
    isFetching: f,
    errors: m
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
  return null == n ? null : (0, r.jsx)(l.Z, {
    guild: n,
    section: s,
    sectionId: a,
    integrations: o,
    webhooks: u,
    editedIntegration: d,
    editedWebhook: g,
    isFetchingWebhooks: f,
    hasChanges: c.default.hasChanges,
    errors: m,
    refToScroller: t
  })
}

function f() {
  let {
    guild: e,
    submitting: t
  } = (0, i.cj)([A.Z], () => ({
    guild: A.Z.getGuild(),
    submitting: A.Z.isSubmitting()
  }));
  return (0, r.jsx)(a.Z, {
    submitting: t,
    onReset: () => {
      s.Z.init(), d.Ui(), null != e && o.Z.init(e.id)
    },
    onSave: () => {
      if (null != e) {
        if (null != c.default.editedIntegration) s.Z.saveIntegration(e.id, c.default.editedIntegration);
        else if (null != c.default.editedWebhook) s.Z.saveWebhook(e.id, c.default.editedWebhook);
        else if (null != c.default.editedCommandId) {
          let t = c.default.getSectionId(),
            n = u.Z.getEditedApplication();
          if (null == t || null == n) return;
          s.Z.saveApplicationPermissions(t, e.id, Object.values(n))
        }
        A.Z.hasChanges() && o.Z.saveGuild(e.id, {
          features: e.features
        })
      }
    }
  })
}