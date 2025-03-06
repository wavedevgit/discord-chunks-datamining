/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  _: () => i
});
var r = n(192379),
  l = n(772848),
  a = n(638730),
  s = n(626135);
let o = (e, t, n, r) => {
    let {
      scrollTop: l = 0,
      scrollOffset: a = 0,
      scrollHeight: o = 0,
      scrollWidth: i = 0
    } = r;
    if (o > 0) {
      let r = (l + a) / o;
      r > 0 && s.default.track(e, {
        scroll_visible_percent: r,
        source: n,
        page_height: Math.round(o),
        page_width: Math.round(i),
        page_session_id: t
      })
    }
  },
  i = (e, t) => {
    let n = r.useRef(null),
      s = r.useRef((0, l.Z)()),
      i = (0, a.h)(o, 5e3, [], {
        trailing: !0
      }),
      c = r.useCallback(() => {
        var r;
        let l = null === (r = n.current) || void 0 === r ? void 0 : r.getScrollerNode();
        null != l && i(e, s.current, t, {
          scrollTop: l.scrollTop,
          scrollOffset: l.offsetHeight,
          scrollHeight: l.scrollHeight,
          scrollWidth: l.scrollWidth
        })
      }, [i, e, t]);
    return {
      scrollerRef: n,
      scrollHandler: c,
      sessionId: s.current
    }
  }