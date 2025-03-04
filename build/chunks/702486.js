/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  _: () => a
});
var n = r(192379),
  l = r(772848),
  i = r(638730),
  o = r(626135);
let s = (e, t, r, n) => {
    let {
      scrollTop: l = 0,
      scrollOffset: i = 0,
      scrollHeight: s = 0,
      scrollWidth: a = 0
    } = n;
    if (s > 0) {
      let n = (l + i) / s;
      n > 0 && o.default.track(e, {
        scroll_visible_percent: n,
        source: r,
        page_height: Math.round(s),
        page_width: Math.round(a),
        page_session_id: t
      })
    }
  },
  a = (e, t) => {
    let r = n.useRef(null),
      o = n.useRef((0, l.Z)()),
      a = (0, i.h)(s, 5e3, [], {
        trailing: !0
      }),
      c = n.useCallback(() => {
        var n;
        let l = null === (n = r.current) || void 0 === n ? void 0 : n.getScrollerNode();
        null != l && a(e, o.current, t, {
          scrollTop: l.scrollTop,
          scrollOffset: l.offsetHeight,
          scrollHeight: l.scrollHeight,
          scrollWidth: l.scrollWidth
        })
      }, [a, e, t]);
    return {
      scrollerRef: r,
      scrollHandler: c,
      sessionId: o.current
    }
  }