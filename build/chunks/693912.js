/** Chunk was on 85679 **/
n.d(e, {
  B2: () => o,
  DS: () => u,
  hj: () => s,
  nh: () => i
});
var r = n(63063),
  l = n(981631),
  a = n(388032);

function u(t) {
  let {
    application: e,
    username: n,
    usernameHook: u = l.dG4,
    applicationNameHook: i = l.dG4
  } = t;
  return null != e ? a.NW.format(a.t.J8SaGx, {
    username: n,
    otherUsername: e.name,
    usernameHook: u,
    otherUsernameHook: i,
    helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.NW.format(a.t["+6V2sb"], {
    username: n,
    usernameHook: u,
    helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function i(t) {
  let {
    application: e,
    username: n,
    usernameHook: u = l.dG4,
    applicationNameHook: i = l.dG4
  } = t;
  return null != e ? a.NW.format(a.t.eGCDam, {
    username: n,
    otherUsername: e.name,
    usernameHook: u,
    otherUsernameHook: i,
    helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.NW.format(a.t.sAX6rq, {
    username: n,
    usernameHook: u,
    helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function o(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: u,
    applicationNameOnClick: i,
    medium: o
  } = t;
  return null != e ? a.NW.formatToParts(a.t["8r+Z+P"], {
    username: n,
    otherUsername: e.name,
    usernameOnClick: u,
    otherUsernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.NW.formatToParts(a.t.ojysqa, {
    username: n,
    usernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function s(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: u,
    applicationNameOnClick: i,
    medium: o
  } = t;
  return null != e ? a.NW.formatToParts(a.t.zmc0mp, {
    username: n,
    otherUsername: e.name,
    usernameOnClick: u,
    otherUsernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.NW.formatToParts(a.t["x2CN/f"], {
    username: n,
    usernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}