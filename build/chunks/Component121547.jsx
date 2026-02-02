/** Chunk was on 51693 **/
/** chunk id: 121547, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk713517 = require("./713517.js"),
  Chunk384377 = require("./384377.js"),
  Chunk808247 = require("./808247.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk799559 = require("./799559.js");

function m(e) {
  let {
    wishlistId: t,
    sku: n,
    analyticsLocations: i,
    isHoveringOrFocusing: m,
    onHoverOrFocusChange: b
  } = e, y = l.useRef(null), {
    isHoveringOrFocusing: O
  } = (0, c.A)(y), j = l.useRef(b);
  l.useEffect(() => {
    j.current = b
  }, [b]), l.useEffect(() => {
    var e;
    null == (e = j.current) || e.call(j, O)
  }, [O]);
  let h = l.useCallback(async () => {
    if (null != t) try {
      await d.A.removeSkuFromWishlist(t, n.id, i)
    } catch (e) {
      (0, u.XA)(f.jM.SOMETHING_WENT_WRONG)
    }
  }, [t, n.id, i]);
  return (0, r.jsx)(o.m, {
    text: p.intl.string(p.t.jTW016),
    children: (0, r.jsx)(s.DUT, {
      innerRef: y,
      onClick: h,
      "aria-label": p.intl.string(p.t.jTW016),
      className: a()(g.vk, {
        [g.P8]: O || m
      }),
      children: (0, r.jsx)(s.ucK, {
        size: "refresh_sm",
        className: g.Kk,
        color: s.LU0.colors.ICON_FEEDBACK_CRITICAL
      })
    })
  })
}