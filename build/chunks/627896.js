/** Chunk was on 22173 **/
/** chunk id: 627896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function l(e, t, n) {
  let l = a.useRef(null),
    [s, r] = a.useState(false),
    i = a.useCallback(() => {
      if (e && null !== l.current) {
        var n;
        r((null == (n = l.current) ? true : n.offsetHeight) > 2.5 * t)
      }
    }, [r, e, t]);
  return a.useLayoutEffect(() => {
    i()
  }, [i, e, n]), {
    postTitleRef: l,
    isNewBadgeOverflow: s
  }
}