/** Chunk was on 48898 **/
/** chunk id: 555540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function s(e, t, n) {
  let s = i.useRef(null),
    [r, l] = i.useState(false),
    a = i.useCallback(() => {
      if (e && null !== s.current) {
        var n;
        l((null == (n = s.current) ? true : n.offsetHeight) > 2.5 * t)
      }
    }, [l, e, t]);
  return i.useLayoutEffect(() => {
    a()
  }, [a, e, n]), {
    postTitleRef: s,
    isNewBadgeOverflow: r
  }
}