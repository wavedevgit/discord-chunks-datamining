/** Chunk was on web.js **/
/** chunk id: 122567, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  var t, n, r;
  let {
    listRef: i,
    searchQuery: o,
    nitroLockedSectionStates: a,
    scrollTop: s
  } = e;
  if ("" !== o) return {
    isNitroLockedSectionVisible: false,
    areOnlyNitroLockedSectionsVisible: false
  };
  let l = null == i || null == (t = i.current) ? true : t.getSectionDescriptors(),
    c = null == (r = i.current) || null == (n = r.getListDimensions()) ? true : n.height;
  if (null == l || l.length !== a.length || null == c || c <= 0) return {
    isNitroLockedSectionVisible: false,
    areOnlyNitroLockedSectionsVisible: false
  };
  let u = s,
    d = s + c,
    f = false,
    p = false;
  return a.forEach((e, t) => {
    let n = l[t];
    n.offset.top < d && n.offset.bottom > u && (e.isNitroLocked ? f = true : p = true)
  }), {
    isNitroLockedSectionVisible: f,
    areOnlyNitroLockedSectionsVisible: f && !p
  }
}
require.d(exports, {
  y: () => r
}), require("./473749.js")