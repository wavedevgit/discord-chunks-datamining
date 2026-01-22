/** Chunk was on web.js **/
/** chunk id: 326687, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return {
    android: null != e.android ? {
      androidAppId: e.android.android_app_id
    } : true,
    ios: null != e.ios ? {
      iosAppId: e.ios.ios_app_id
    } : true,
    link: e.link,
    buttonLabel: e.button_label,
    subtitle: e.subtitle
  }
}
require.d(exports, {
  W: () => r
})