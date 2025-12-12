/** Chunk was on web.js **/
/** chunk id: 846821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => o
});
var Chunk473749 = require("./473749.js");
let i = 1e3;

function o(e) {
  let {
    keyboardDelegate: t,
    selectionManager: n,
    onTypeSelect: o
  } = e, s = (0, r.useRef)({
    search: "",
    timeout: true
  }).current, l = e => {
    let r = a(e.key);
    if (r && !e.ctrlKey && !e.metaKey && e.currentTarget.contains(e.target) && (0 !== s.search.length || " " !== r)) {
      if (" " === r && s.search.trim().length > 0 && (e.preventDefault(), "continuePropagation" in e || e.stopPropagation()), s.search += r, null != t.getKeyForSearch) {
        let e = t.getKeyForSearch(s.search, n.focusedKey);
        null == e && (e = t.getKeyForSearch(s.search)), null != e && (n.setFocusedKey(e), o && o(e))
      }
      clearTimeout(s.timeout), s.timeout = setTimeout(() => {
        s.search = ""
      }, i)
    }
  };
  return {
    typeSelectProps: {
      onKeyDownCapture: t.getKeyForSearch ? l : true
    }
  }
}

function a(e) {
  return 1 !== e.length && /^[A-Z]/i.test(e) ? "" : e
}