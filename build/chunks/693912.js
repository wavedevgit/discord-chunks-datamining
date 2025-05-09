/** Chunk was on 66141 **/
n.d(e, {
  B2: () => o,
  DS: () => a,
  hj: () => c,
  nh: () => u
});
var r = n(63063),
  i = n(981631),
  l = n(388032);

function a(t) {
  let {
    application: e,
    username: n,
    usernameHook: a = i.dG4,
    applicationNameHook: u = i.dG4
  } = t;
  return null != e ? l.intl.format(l.t.J8SaGx, {
    username: n,
    otherUsername: e.name,
    usernameHook: a,
    otherUsernameHook: u,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : l.intl.format(l.t["+6V2sb"], {
    username: n,
    usernameHook: a,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(t) {
  let {
    application: e,
    username: n,
    usernameHook: a = i.dG4,
    applicationNameHook: u = i.dG4
  } = t;
  return null != e ? l.intl.format(l.t.eGCDam, {
    username: n,
    otherUsername: e.name,
    usernameHook: a,
    otherUsernameHook: u,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : l.intl.format(l.t.sAX6rq, {
    username: n,
    usernameHook: a,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function o(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: a,
    applicationNameOnClick: u,
    medium: o
  } = t;
  return null != e ? l.intl.formatToParts(l.t["8r+Z+P"], {
    username: n,
    otherUsername: e.name,
    usernameOnClick: a,
    otherUsernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : l.intl.formatToParts(l.t.ojysqa, {
    username: n,
    usernameOnClick: a,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function c(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: a,
    applicationNameOnClick: u,
    medium: o
  } = t;
  return null != e ? l.intl.formatToParts(l.t.zmc0mp, {
    username: n,
    otherUsername: e.name,
    usernameOnClick: a,
    otherUsernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : l.intl.formatToParts(l.t["x2CN/f"], {
    username: n,
    usernameOnClick: a,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}