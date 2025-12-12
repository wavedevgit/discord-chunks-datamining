/** Chunk was on web.js **/
/** chunk id: 649256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  UD: () => u,
  ur: () => l,
  xB: () => c
}), require("./388685.js");
var Chunk666572 = require("./666572.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js");
require("./703047.js");
var Chunk981631 = require("./981631.js");
async function s(e, t) {
  if (null == e || null == t) return null;
  let n = (0, r._)(t);
  if (null == n) return null;
  if (n.type === r.e.MANAGED) {
    let {
      body: t
    } = await i.tn.get({
      url: a.ANM.APPLICATION_MANAGED_ACTIVITY_LINK(e, n.decodedLinkId),
      rejectWithError: false
    });
    return t
  }
  if (n.type === r.e.QUICK) {
    let {
      body: t
    } = await i.tn.get({
      url: a.ANM.APPLICATION_QUICK_ACTIVITY_LINK(e, n.decodedLinkId),
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
    let n = await s(e, t);
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
  let n = await s(e, t);
  if (null == n) return Promise.reject("fetchCustomActivityLink body is null");
  o.Z.dispatch({
    type: "CUSTOM_ACTIVITY_LINK_FETCH_SUCCESS",
    applicationId: e,
    link: n
  })
}