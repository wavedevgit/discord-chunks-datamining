/** Chunk was on web.js **/
/** chunk id: 240864, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  var t, n, r;
  let {
    listRef: i,
    searchQuery: a,
    nitroLockedSectionStates: s,
    scrollTop: o
  } = e;
  if ("" !== a) return {
    isNitroLockedSectionVisible: false,
    areOnlyNitroLockedSectionsVisible: false
  };
  let l = null == i || null == (t = i.current) ? true : t.getSectionDescriptors(),
    c = null == (r = i.current) || null == (n = r.getListDimensions()) ? true : n.height;
  if (null == l || l.length !== s.length || null == c || c <= 0) return {
    isNitroLockedSectionVisible: false,
    areOnlyNitroLockedSectionsVisible: false
  };
  let u = o,
    d = o + c,
    f = false,
    p = false;
  return s.forEach((e, t) => {
    let n = l[t];
    n.offset.top < d && n.offset.bottom > u && (e.isNitroLocked ? f = true : p = true)
  }), {
    isNitroLockedSectionVisible: f,
    areOnlyNitroLockedSectionsVisible: f && !p
  }
}
require.d(exports, {
  s: () => r
}), require("./64700.js")