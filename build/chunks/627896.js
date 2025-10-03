/** Chunk was on 22173 **/
/** chunk id: 627896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js");

function a(e, t, n) {
  let a = l.useRef(null),
    [s, r] = l.useState(false),
    i = l.useCallback(() => {
      if (e && null !== a.current) {
        var n;
        r((null == (n = a.current) ? true : n.offsetHeight) > 2.5 * t)
      }
    }, [r, e, t]);
  return l.useLayoutEffect(() => {
    i()
  }, [i, e, n]), {
    postTitleRef: a,
    isNewBadgeOverflow: s
  }
}