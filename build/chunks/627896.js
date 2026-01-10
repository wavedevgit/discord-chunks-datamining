/** Chunk was on 87646 **/
/** chunk id: 627896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

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