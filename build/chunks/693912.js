/** Chunk was on 77897 **/
n.d(t, {
  B2: () => u,
  DS: () => l,
  hj: () => c,
  nh: () => o
});
var r = n(63063),
  i = n(981631),
  a = n(388032);

function l(e) {
  let {
    application: t,
    username: n,
    usernameHook: l = i.dG4,
    applicationNameHook: o = i.dG4
  } = e;
  return null != t ? a.intl.format(a.t.J8SaGx, {
    username: n,
    otherUsername: t.name,
    usernameHook: l,
    otherUsernameHook: o,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t["+6V2sb"], {
    username: n,
    usernameHook: l,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function o(e) {
  let {
    application: t,
    username: n,
    usernameHook: l = i.dG4,
    applicationNameHook: o = i.dG4
  } = e;
  return null != t ? a.intl.format(a.t.eGCDam, {
    username: n,
    otherUsername: t.name,
    usernameHook: l,
    otherUsernameHook: o,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t.sAX6rq, {
    username: n,
    usernameHook: l,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: l,
    applicationNameOnClick: o,
    medium: u
  } = e;
  return null != t ? a.intl.formatToParts(a.t["8r+Z+P"], {
    username: n,
    otherUsername: t.name,
    usernameOnClick: l,
    otherUsernameOnClick: o,
    medium: u,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t.ojysqa, {
    username: n,
    usernameOnClick: l,
    medium: u,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function c(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: l,
    applicationNameOnClick: o,
    medium: u
  } = e;
  return null != t ? a.intl.formatToParts(a.t.zmc0mp, {
    username: n,
    otherUsername: t.name,
    usernameOnClick: l,
    otherUsernameOnClick: o,
    medium: u,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t["x2CN/f"], {
    username: n,
    usernameOnClick: l,
    medium: u,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}