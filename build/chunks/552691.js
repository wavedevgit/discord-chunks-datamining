/** Chunk was on 98797 **/
/** chunk id: 552691, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A0: () => o,
  eu: () => a,
  g6: () => u,
  uk: () => s
});
var Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function a(t) {
  let {
    application: e,
    username: n,
    usernameHook: a = i.tEg,
    applicationNameHook: o = i.tEg
  } = t;
  return null != e ? l.intl.format(l.t.J8SaGy, {
    username: n,
    otherUsername: e.name,
    usernameHook: a,
    otherUsernameHook: o,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : l.intl.format(l.t["+6V2sd"], {
    username: n,
    usernameHook: a,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function o(t) {
  let {
    application: e,
    username: n,
    usernameHook: a = i.tEg,
    applicationNameHook: o = i.tEg
  } = t;
  return null != e ? l.intl.format(l.t.eGCDak, {
    username: n,
    otherUsername: e.name,
    usernameHook: a,
    otherUsernameHook: o,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : l.intl.format(l.t.sAX6rs, {
    username: n,
    usernameHook: a,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function u(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: a,
    applicationNameOnClick: o,
    medium: u
  } = t;
  return null != e ? l.intl.formatToParts(l.t["8r+Z+I"], {
    username: n,
    otherUsername: e.name,
    usernameOnClick: a,
    otherUsernameOnClick: o,
    medium: u,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : l.intl.formatToParts(l.t.ojysqe, {
    username: n,
    usernameOnClick: a,
    medium: u,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function s(t) {
  let {
    application: e,
    username: n,
    usernameOnClick: a,
    applicationNameOnClick: o,
    medium: u
  } = t;
  return null != e ? l.intl.formatToParts(l.t.zmc0mq, {
    username: n,
    otherUsername: e.name,
    usernameOnClick: a,
    otherUsernameOnClick: o,
    medium: u,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : l.intl.formatToParts(l.t["x2CN/Z"], {
    username: n,
    usernameOnClick: a,
    medium: u,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}