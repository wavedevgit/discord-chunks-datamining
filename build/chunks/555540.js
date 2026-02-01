/** Chunk was on 7602 **/
/** chunk id: 555540, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  $: () => n
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function n(e, t, s) {
  let n = i.useRef(null),
    [r, l] = i.useState(false),
    a = i.useCallback(() => {
      if (e && null !== n.current) {
        var s;
        l((null == (s = n.current) ? true : s.offsetHeight) > 2.5 * t)
      }
    }, [l, e, t]);
  return i.useLayoutEffect(() => {
    a()
  }, [a, e, s]), {
    postTitleRef: n,
    isNewBadgeOverflow: r
  }
}