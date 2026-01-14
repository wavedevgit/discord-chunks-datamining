/** Chunk was on web.js **/
/** chunk id: 996073, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk230711 = require("./230711.js"),
  Chunk607070 = require("./607070.js"),
  Chunk663389 = require("./663389.js"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = Object.freeze({
    [Chunk526761.KQ.ProfileCustomizationScrollPositions.TRY_IT_OUT]: Chunk981631.oAB.PROFILE_CUSTOMIZATION,
    [Chunk526761.KQ.ProfileCustomizationScrollPositions.GUILD_TAG]: Chunk981631.oAB.PROFILE_CUSTOMIZATION,
    [Chunk526761.KQ.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: Chunk981631.oAB.ACCESSIBILITY,
    [Chunk526761.KQ.AppearanceScrollPositions.CUSTOM_APP_ICONS]: Chunk981631.oAB.APPEARANCE,
    [Chunk526761.KQ.ContentAndSocialScrollPositions.DM_SAFETY_ALERTS_V2]: Chunk981631.oAB.CONTENT_AND_SOCIAL,
    [Chunk526761.KQ.ContentAndSocialScrollPositions.MESSAGE_REQUESTS_V2]: Chunk981631.oAB.CONTENT_AND_SOCIAL,
    [Chunk526761.KQ.ContentAndSocialScrollPositions.EXPLICIT_MEDIA_REDACTION_V2]: Chunk981631.oAB.CONTENT_AND_SOCIAL,
    [Chunk526761.KQ.ContentAndSocialScrollPositions.RESTRICTED_ACCOUNTS]: Chunk981631.oAB.CONTENT_AND_SOCIAL,
    [Chunk526761.KQ.AccountScrollPositions.DISABLE_ACCOUNT]: Chunk981631.oAB.ACCOUNT
  }),
  p = function(e, t, n) {
    let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 0,
      c = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
      u = (0, i.e7)([s.Z], () => s.Z.getScrollPosition());
    (0, r.useEffect)(() => {
      let r = e.current;
      null != r && t === u && setTimeout(() => {
        let e = requestAnimationFrame(() => {
          r.scrollIntoView(d({
            behavior: c ? "auto" : "smooth"
          }, n)), a.Z.clearScrollPosition(f[t])
        });
        return () => cancelAnimationFrame(e)
      }, l)
    }, [e, t, u, c, n, l])
  }