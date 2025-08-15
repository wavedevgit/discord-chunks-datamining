/** Chunk was on 22173 **/
/** chunk id: 627896, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js");

function a(e, t, n) {
  let a = r.useRef(null),
    [s, l] = r.useState(false),
    i = r.useCallback(() => {
      if (e && null !== a.current) {
        var n;
        l((null == (n = a.current) ? true : n.offsetHeight) > 2.5 * t)
      }
    }, [l, e, t]);
  return r.useLayoutEffect(() => {
    i()
  }, [i, e, n]), {
    postTitleRef: a,
    isNewBadgeOverflow: s
  }
}