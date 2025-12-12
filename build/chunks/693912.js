/** Chunk was on web.js **/
/** chunk id: 693912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B2: () => l,
  DS: () => a,
  hj: () => c,
  nh: () => s
});
var Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let {
    application: t,
    username: n,
    usernameHook: a = i.dG4,
    applicationNameHook: s = i.dG4
  } = e;
  return null != t ? o.intl.format(o.t.J8SaGy, {
    username: n,
    otherUsername: t.name,
    usernameHook: a,
    otherUsernameHook: s,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : o.intl.format(o.t["+6V2sd"], {
    username: n,
    usernameHook: a,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function s(e) {
  let {
    application: t,
    username: n,
    usernameHook: a = i.dG4,
    applicationNameHook: s = i.dG4
  } = e;
  return null != t ? o.intl.format(o.t.eGCDak, {
    username: n,
    otherUsername: t.name,
    usernameHook: a,
    otherUsernameHook: s,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  }) : o.intl.format(o.t.sAX6rs, {
    username: n,
    usernameHook: a,
    helpCenterLink: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
  })
}

function l(e) {
  let {
    application: t,
    username: n,
    usernameOnClick: a,
    applicationNameOnClick: s,
    medium: l
  } = e;
  return null != t ? o.intl.formatToParts(o.t["8r+Z+I"], {
    username: n,
    otherUsername: t.name,
    usernameOnClick: a,
    otherUsernameOnClick: s,
    medium: l,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : o.intl.formatToParts(o.t.ojysqe, {
    username: n,
    usernameOnClick: a,
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
    usernameOnClick: a,
    applicationNameOnClick: s,
    medium: l
  } = e;
  return null != t ? o.intl.formatToParts(o.t.zmc0mq, {
    username: n,
    otherUsername: t.name,
    usernameOnClick: a,
    otherUsernameOnClick: s,
    medium: l,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  }) : o.intl.formatToParts(o.t["x2CN/Z"], {
    username: n,
    usernameOnClick: a,
    medium: l,
    helpCenterLink: {
      url: r.Z.getArticleURL(i.BhN.PRIVATE_CHANNEL_INTEGRATIONS)
    }
  })
}