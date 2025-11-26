/** Chunk was on 22173 **/
/** chunk id: 627896, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  x: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js");

function l(e, n, t) {
  let l = s.useRef(null),
    [a, r] = s.useState(false),
    i = s.useCallback(() => {
      if (e && null !== l.current) {
        var t;
        r((null == (t = l.current) ? true : t.offsetHeight) > 2.5 * n)
      }
    }, [r, e, n]);
  return s.useLayoutEffect(() => {
    i()
  }, [i, e, t]), {
    postTitleRef: l,
    isNewBadgeOverflow: a
  }
}