/** Chunk was on web.js **/
/** chunk id: 343246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l
}), require("./747238.js");
var Chunk151258 = require("./151258.js"),
  Chunk773669 = require("./773669.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t) {
  try {
    return Intl.DateTimeFormat(e, t).format
  } catch (e) {
    return Intl.DateTimeFormat(true, t).format
  }
}

function o(e, t) {
  if (null == r.t) return null;
  try {
    let n = e === a.initialLocale,
      i = null != e && e.split("-")[0] === (null === a.systemLocale || true === a.systemLocale ? true : a.systemLocale.split("-")[0]),
      o = (0, r.t)(n && i ? true : e, t);
    if (null == o) return null;
    let l = null;
    return function(n) {
      try {
        return o(n)
      } catch (e) {}
      return null == l && (l = s(e, t)), l(n)
    }
  } catch (e) {
    return null
  }
}

function l(e) {
  let t = i.default.locale,
    n = o(t, e);
  return null != n ? n : s(t, e)
}