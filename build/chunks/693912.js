/** Chunk was on 97870 **/
n.d(t, {
  B2: () => l,
  DS: () => o,
  hj: () => s,
  nh: () => c
});
var a = n(63063),
  r = n(981631),
  i = n(388032);

function o(e) {
  let {
    application: t,
    username: n,
    usernameHook: o = r.dG4,
    applicationNameHook: c = r.dG4
  } = e;
  return null != t ? i.intl.format(i.t.J8SaGx, {
    username: n,
    otherUsername: t.name,
    usernameHook: o,
    otherUsernameHook: c,
    helpCenterLink: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : i.intl.format(i.t["+6V2sb"], {
    username: n,
    usernameHook: o,
    helpCenterLink: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function c(e) {
  let {
    application: t,
    username: n,
    usernameHook: o = r.dG4,
    applicationNameHook: c = r.dG4
  } = e;
  return null != t ? i.intl.format(i.t.eGCDam, {
    username: n,
    otherUsername: t.name,
    usernameHook: o,
    otherUsernameHook: c,
    helpCenterLink: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : i.intl.format(i.t.sAX6rq, {
    username: n,
    usernameHook: o,
    helpCenterLink: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function l(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: o,
    applicationNameOnClick: c,
    medium: l
  } = e;
  return null != t ? i.intl.formatToParts(i.t["8r+Z+P"], {
    username: n,
    otherUsername: t.name,
    usernameOnClick: o,
    otherUsernameOnClick: c,
    medium: l,
    helpCenterLink: {
      url: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : i.intl.formatToParts(i.t.ojysqa, {
    username: n,
    usernameOnClick: o,
    medium: l,
    helpCenterLink: {
      url: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function s(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: o,
    applicationNameOnClick: c,
    medium: l
  } = e;
  return null != t ? i.intl.formatToParts(i.t.zmc0mp, {
    username: n,
    otherUsername: t.name,
    usernameOnClick: o,
    otherUsernameOnClick: c,
    medium: l,
    helpCenterLink: {
      url: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : i.intl.formatToParts(i.t["x2CN/f"], {
    username: n,
    usernameOnClick: o,
    medium: l,
    helpCenterLink: {
      url: a.Z.getArticleURL(r.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}