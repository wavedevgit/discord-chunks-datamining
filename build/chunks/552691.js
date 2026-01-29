/** Chunk was on 73734 **/
/** chunk id: 552691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A0: () => o,
  eu: () => a,
  g6: () => s,
  uk: () => c
});
var Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let {
    application: t,
    username: n,
    usernameHook: a = i.tEg,
    applicationNameHook: o = i.tEg
  } = e;
  return null != t ? l.intl.format(l.t.J8SaGy, {
    username: n,
    otherUsername: t.name,
    usernameHook: a,
    otherUsernameHook: o,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : l.intl.format(l.t["+6V2sd"], {
    username: n,
    usernameHook: a,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function o(e) {
  let {
    application: t,
    username: n,
    usernameHook: a = i.tEg,
    applicationNameHook: o = i.tEg
  } = e;
  return null != t ? l.intl.format(l.t.eGCDak, {
    username: n,
    otherUsername: t.name,
    usernameHook: a,
    otherUsernameHook: o,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : l.intl.format(l.t.sAX6rs, {
    username: n,
    usernameHook: a,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function s(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: a,
    applicationNameOnClick: o,
    medium: s
  } = e;
  return null != t ? l.intl.formatToParts(l.t["8r+Z+I"], {
    username: n,
    otherUsername: t.name,
    usernameOnClick: a,
    otherUsernameOnClick: o,
    medium: s,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : l.intl.formatToParts(l.t.ojysqe, {
    username: n,
    usernameOnClick: a,
    medium: s,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function c(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: a,
    applicationNameOnClick: o,
    medium: s
  } = e;
  return null != t ? l.intl.formatToParts(l.t.zmc0mq, {
    username: n,
    otherUsername: t.name,
    usernameOnClick: a,
    otherUsernameOnClick: o,
    medium: s,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : l.intl.formatToParts(l.t["x2CN/Z"], {
    username: n,
    usernameOnClick: a,
    medium: s,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}