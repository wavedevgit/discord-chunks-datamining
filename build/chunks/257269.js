/** Chunk was on web.js **/
/** chunk id: 257269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Py: () => u,
  VP: () => c,
  d9: () => l
}), require("./896048.js");
var Chunk526218 = require("./526218.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js");
require("./346835.js");
var Chunk652215 = require("./652215.js");
async function o(e, t) {
  if (null == e || null == t) return null;
  let n = (0, r.t)(t);
  if (null == n) return null;
  if (n.type === r.G.MANAGED) {
    let {
      body: t
    } = await i.Bo.get({
      url: s.Rsh.APPLICATION_MANAGED_ACTIVITY_LINK(e, n.decodedLinkId),
      rejectWithError: false
    });
    return t
  }
  if (n.type === r.G.QUICK) {
    let {
      body: t
    } = await i.Bo.get({
      url: s.Rsh.APPLICATION_QUICK_ACTIVITY_LINK(e, n.decodedLinkId),
      rejectWithError: false
    });
    return t
  }
  return null
}
async function l(e, t, n) {
  let r = null != n ? n : true;
  if (null == t || null != r) return {
    customId: r
  };
  try {
    let n = await o(e, t);
    if (null == n) return {
      customId: r
    };
    return {
      customId: null != r ? r : n.custom_id
    }
  } catch (e) {
    return {
      customId: r
    }
  }
}

function c(e) {
  if (null != e) return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/attachments-quick-links/").concat(e)
}
async function u(e, t) {
  if (null == e || null == t) return Promise.reject("appId or linkId null");
  let n = await o(e, t);
  if (null == n) return Promise.reject("fetchCustomActivityLink body is null");
  a.h.dispatch({
    type: "CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS",
    applicationId: e,
    link: n
  })
}