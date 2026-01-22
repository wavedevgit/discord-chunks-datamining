/** Chunk was on web.js **/
/** chunk id: 241518, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if ("object" != typeof e || null === e || !e.hasOwnProperty("oneofKind")) returnfalse;
  switch (typeof e.oneofKind) {
    case "string":
      if (true === e[e.oneofKind]) returnfalse;
      return 2 == Object.keys(e).length;
    case "undefined":
      return 1 == Object.keys(e).length;
    default:
      returnfalse
  }
}
require.d(exports, {
  Zs: () => r
})