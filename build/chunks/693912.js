/** Chunk was on 60691 **/
n.d(e, {
  B2: () => o,
  DS: () => l,
  hj: () => s,
  nh: () => i
});
var r = n(63063),
  a = n(981631),
  u = n(388032);

function l(t) {
  let {
    application: e,
    username: n,
    usernameHook: l = a.dG4,
    applicationNameHook: i = a.dG4
  } = t;
  return null != e ? u.NW.format(u.t.J8SaGx, {
    username: n,
    otherUsername: e.name,
    usernameHook: l,
    otherUsernameHook: i,
    helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : u.NW.format(u.t["+6V2sb"], {
    username: n,
    usernameHook: l,
    helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function i(t) {
  let {
    application: e,
    username: n,
    usernameHook: l = a.dG4,
    applicationNameHook: i = a.dG4
  } = t;
  return null != e ? u.NW.format(u.t.eGCDam, {
    username: n,
    otherUsername: e.name,
    usernameHook: l,
    otherUsernameHook: i,
    helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : u.NW.format(u.t.sAX6rq, {
    username: n,
    usernameHook: l,
    helpCenterLink: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function o(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: l,
    applicationNameOnClick: i,
    medium: o
  } = t;
  return null != e ? u.NW.formatToParts(u.t["8r+Z+P"], {
    username: n,
    otherUsername: e.name,
    usernameOnClick: l,
    otherUsernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : u.NW.formatToParts(u.t.ojysqa, {
    username: n,
    usernameOnClick: l,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function s(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: l,
    applicationNameOnClick: i,
    medium: o
  } = t;
  return null != e ? u.NW.formatToParts(u.t.zmc0mp, {
    username: n,
    otherUsername: e.name,
    usernameOnClick: l,
    otherUsernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : u.NW.formatToParts(u.t["x2CN/f"], {
    username: n,
    usernameOnClick: l,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(a.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}