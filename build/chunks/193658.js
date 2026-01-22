/** Chunk was on web.js **/
/** chunk id: 193658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk252452 = require("./252452.js"),
  Chunk775602 = require("./775602.js"),
  Chunk628965 = require("./628965.js"),
  Chunk355097 = require("./355097.js"),
  Chunk652215 = require("./652215.js");

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
    [Chunk355097.Ew.ProfileCustomizationScrollPositions.TRY_IT_OUT]: Chunk652215.nc_.PROFILE_CUSTOMIZATION,
    [Chunk355097.Ew.ProfileCustomizationScrollPositions.GUILD_TAG]: Chunk652215.nc_.PROFILE_CUSTOMIZATION,
    [Chunk355097.Ew.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: Chunk652215.nc_.ACCESSIBILITY,
    [Chunk355097.Ew.AppearanceScrollPositions.CUSTOM_APP_ICONS]: Chunk652215.nc_.APPEARANCE,
    [Chunk355097.Ew.ContentAndSocialScrollPositions.DM_SAFETY_ALERTS_V2]: Chunk652215.nc_.CONTENT_AND_SOCIAL,
    [Chunk355097.Ew.ContentAndSocialScrollPositions.MESSAGE_REQUESTS_V2]: Chunk652215.nc_.CONTENT_AND_SOCIAL,
    [Chunk355097.Ew.ContentAndSocialScrollPositions.EXPLICIT_MEDIA_REDACTION_V2]: Chunk652215.nc_.CONTENT_AND_SOCIAL,
    [Chunk355097.Ew.ContentAndSocialScrollPositions.RESTRICTED_ACCOUNTS]: Chunk652215.nc_.CONTENT_AND_SOCIAL,
    [Chunk355097.Ew.AccountScrollPositions.DISABLE_ACCOUNT]: Chunk652215.nc_.ACCOUNT
  }),
  p = function(e, t, n) {
    let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 0,
      c = (0, i.bG)([s.A], () => s.A.useReducedMotion),
      u = (0, i.bG)([o.A], () => o.A.getScrollPosition());
    (0, r.useEffect)(() => {
      let r = e.current;
      null != r && t === u && setTimeout(() => {
        let e = requestAnimationFrame(() => {
          r.scrollIntoView(d({
            behavior: c ? "auto" : "smooth"
          }, n)), a.A.clearScrollPosition(f[t])
        });
        return () => cancelAnimationFrame(e)
      }, l)
    }, [e, t, u, c, n, l])
  }