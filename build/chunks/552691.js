/** Chunk was on 34795 **/
/** chunk id: 552691, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A0: () => u,
  eu: () => i,
  g6: () => o,
  uk: () => s
});
var Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function i(t) {
  let {
    application: e,
    username: n,
    usernameHook: i = l.tEg,
    applicationNameHook: u = l.tEg
  } = t;
  return null != e ? a.intl.format(a.t.J8SaGy, {
    username: n,
    otherUsername: e.name,
    usernameHook: i,
    otherUsernameHook: u,
    helpCenterLink: r.A.getArticleURL(l.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t["+6V2sd"], {
    username: n,
    usernameHook: i,
    helpCenterLink: r.A.getArticleURL(l.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(t) {
  let {
    application: e,
    username: n,
    usernameHook: i = l.tEg,
    applicationNameHook: u = l.tEg
  } = t;
  return null != e ? a.intl.format(a.t.eGCDak, {
    username: n,
    otherUsername: e.name,
    usernameHook: i,
    otherUsernameHook: u,
    helpCenterLink: r.A.getArticleURL(l.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t.sAX6rs, {
    username: n,
    usernameHook: i,
    helpCenterLink: r.A.getArticleURL(l.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
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
  return null != e ? a.intl.formatToParts(a.t["8r+Z+I"], {
    username: n,
    otherUsername: e.name,
    usernameOnClick: i,
    otherUsernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.A.getArticleURL(l.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t.ojysqe, {
    username: n,
    usernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: r.A.getArticleURL(l.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
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
  return null != e ? a.intl.formatToParts(a.t.zmc0mq, {
    username: n,
    otherUsername: e.name,
    usernameOnClick: i,
    otherUsernameOnClick: u,
    medium: o,
    helpCenterLink: {
      url: r.A.getArticleURL(l.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t["x2CN/Z"], {
    username: n,
    usernameOnClick: i,
    medium: o,
    helpCenterLink: {
      url: r.A.getArticleURL(l.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}