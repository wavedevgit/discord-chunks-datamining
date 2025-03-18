/** Chunk was on 81281 **/
n.d(e, {
  B2: () => o,
  DS: () => l,
  hj: () => c,
  nh: () => u
});
var r = n(63063),
  i = n(981631),
  a = n(388032);

function l(t) {
  let {
    application: e,
    username: n,
    usernameHook: l = i.dG4,
    applicationNameHook: u = i.dG4
  } = t;
  return null != e ? a.NW.format(a.t.J8SaGx, {
    username: n,
    otherUsername: e.name,
    usernameHook: l,
    otherUsernameHook: u,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.NW.format(a.t["+6V2sb"], {
    username: n,
    usernameHook: l,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(t) {
  let {
    application: e,
    username: n,
    usernameHook: l = i.dG4,
    applicationNameHook: u = i.dG4
  } = t;
  return null != e ? a.NW.format(a.t.eGCDam, {
    username: n,
    otherUsername: e.name,
    usernameHook: l,
    otherUsernameHook: u,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.NW.format(a.t.sAX6rq, {
    username: n,
    usernameHook: l,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function o(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: l,
    applicationNameOnClick: u,
    medium: o
  } = t;
  return null != e ? a.NW.formatToParts(a.t["8r+Z+P"], {
    username: n,
    otherUsername: e.name,
    usernameOnClick: l,
    otherUsernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.NW.formatToParts(a.t.ojysqa, {
    username: n,
    usernameOnClick: l,
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
    usernameOnClick: l,
    applicationNameOnClick: u,
    medium: o
  } = t;
  return null != e ? a.NW.formatToParts(a.t.zmc0mp, {
    username: n,
    otherUsername: e.name,
    usernameOnClick: l,
    otherUsernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.NW.formatToParts(a.t["x2CN/f"], {
    username: n,
    usernameOnClick: l,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}