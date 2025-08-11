/** Chunk was on web.js **/
/** chunk id: 968358, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if (null == e) returnfalse;
  for (var t = 0; t < e.length; t++)
    if (e[t].voiceState.selfStream) returntrue;
  returnfalse
}
require.d(exports, {
  a: () => r
})