/** Chunk was on 16766 **/
/** chunk id: 693912, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  B2: () => o,
  DS: () => i,
  hj: () => s,
  nh: () => u
});
var Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function i(t) {
  let {
    application: e,
    username: n,
    usernameHook: i = l.dG4,
    applicationNameHook: u = l.dG4
  } = t;
  return null != e ? a.intl.format(a.t.J8SaGx, {
    username: n,
    otherUsername: e.name,
    usernameHook: i,
    otherUsernameHook: u,
    helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t["+6V2sb"], {
    username: n,
    usernameHook: i,
    helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(t) {
  let {
    application: e,
    username: n,
    usernameHook: i = l.dG4,
    applicationNameHook: u = l.dG4
  } = t;
  return null != e ? a.intl.format(a.t.eGCDam, {
    username: n,
    otherUsername: e.name,
    usernameHook: i,
    otherUsernameHook: u,
    helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t.sAX6rq, {
    username: n,
    usernameHook: i,
    helpCenterLink: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function o(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: i,
    applicationNameOnClick: u,
    medium: o
  } = t;
  return null != e ? a.intl.formatToParts(a.t["8r+Z+P"], {
    username: n,
    otherUsername: e.name,
    usernameOnClick: i,
    otherUsernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t.ojysqa, {
    username: n,
    usernameOnClick: i,
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
    usernameOnClick: i,
    applicationNameOnClick: u,
    medium: o
  } = t;
  return null != e ? a.intl.formatToParts(a.t.zmc0mp, {
    username: n,
    otherUsername: e.name,
    usernameOnClick: i,
    otherUsernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t["x2CN/f"], {
    username: n,
    usernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: r.Z.getArticleURL(l.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}