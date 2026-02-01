/** Chunk was on web.js **/
/** chunk id: 552691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A0: () => s,
  eu: () => o,
  g6: () => l,
  uk: () => c
});
var Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    application: t,
    username: n,
    usernameHook: o = i.tEg,
    applicationNameHook: s = i.tEg
  } = e;
  return null != t ? a.intl.format(a.t.J8SaGy, {
    username: n,
    otherUsername: t.name,
    usernameHook: o,
    otherUsernameHook: s,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t["+6V2sd"], {
    username: n,
    usernameHook: o,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function s(e) {
  let {
    application: t,
    username: n,
    usernameHook: o = i.tEg,
    applicationNameHook: s = i.tEg
  } = e;
  return null != t ? a.intl.format(a.t.eGCDak, {
    username: n,
    otherUsername: t.name,
    usernameHook: o,
    otherUsernameHook: s,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t.sAX6rs, {
    username: n,
    usernameHook: o,
    helpCenterLink: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function l(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: o,
    applicationNameOnClick: s,
    medium: l
  } = e;
  return null != t ? a.intl.formatToParts(a.t["8r+Z+I"], {
    username: n,
    otherUsername: t.name,
    usernameOnClick: o,
    otherUsernameOnClick: s,
    medium: l,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t.ojysqe, {
    username: n,
    usernameOnClick: o,
    medium: l,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}

function c(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: o,
    applicationNameOnClick: s,
    medium: l
  } = e;
  return null != t ? a.intl.formatToParts(a.t.zmc0mq, {
    username: n,
    otherUsername: t.name,
    usernameOnClick: o,
    otherUsernameOnClick: s,
    medium: l,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t["x2CN/Z"], {
    username: n,
    usernameOnClick: o,
    medium: l,
    helpCenterLink: {
      url: r.A.getArticleURL(i.MVz.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}