/** Chunk was on web.js **/
/** chunk id: 693912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B2: () => l,
  DS: () => o,
  hj: () => c,
  nh: () => s
});
var Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    application: t,
    username: n,
    usernameHook: o = i.dG4,
    applicationNameHook: s = i.dG4
  } = e;
  return null != t ? a.intl.format(a.t.J8SaGx, {
    username: n,
    otherUsername: t.name,
    usernameHook: o,
    otherUsernameHook: s,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t["+6V2sb"], {
    username: n,
    usernameHook: o,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function s(e) {
  let {
    application: t,
    username: n,
    usernameHook: o = i.dG4,
    applicationNameHook: s = i.dG4
  } = e;
  return null != t ? a.intl.format(a.t.eGCDam, {
    username: n,
    otherUsername: t.name,
    usernameHook: o,
    otherUsernameHook: s,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : a.intl.format(a.t.sAX6rq, {
    username: n,
    usernameHook: o,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
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
  return null != t ? a.intl.formatToParts(a.t["8r+Z+P"], {
    username: n,
    otherUsername: t.name,
    usernameOnClick: o,
    otherUsernameOnClick: s,
    medium: l,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t.ojysqa, {
    username: n,
    usernameOnClick: o,
    medium: l,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
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
  return null != t ? a.intl.formatToParts(a.t.zmc0mp, {
    username: n,
    otherUsername: t.name,
    usernameOnClick: o,
    otherUsernameOnClick: s,
    medium: l,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : a.intl.formatToParts(a.t["x2CN/f"], {
    username: n,
    usernameOnClick: o,
    medium: l,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}