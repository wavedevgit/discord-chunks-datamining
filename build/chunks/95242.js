/** Chunk was on 3205 **/
"use strict";
n.d(t, {
  Z: () => i
}), n(47120);
var r = n(192379);

function i(e) {
  var t;
  let [n, i] = r.useState(e), s = r.useRef(null);
  return r.useEffect(() => {
    var t, n;
    i(null !== (n = null === (t = s.current) || void 0 === t ? void 0 : t.offsetHeight) && void 0 !== n ? n : e)
  }, [e, null === (t = s.current) || void 0 === t ? void 0 : t.offsetHeight]), {
    headerHeight: n,
    headerRef: s
  }
}