/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  _: () => s
});
var n = r(192379),
  l = r(772848),
  i = r(638730),
  o = r(626135);
let a = (e, t, r, n) => {
    let {
      scrollTop: l = 0,
      scrollOffset: i = 0,
      scrollHeight: a = 0,
      scrollWidth: s = 0
    } = n;
    if (a > 0) {
      let n = (l + i) / a;
      n > 0 && o.default.track(e, {
        scroll_visible_percent: n,
        source: r,
        page_height: Math.round(a),
        page_width: Math.round(s),
        page_session_id: t
      })
    }
  },
  s = (e, t) => {
    let r = n.useRef(null),
      o = n.useRef((0, l.Z)()),
      s = (0, i.h)(a, 5e3, [], {
        trailing: !0
      }),
      c = n.useCallback(() => {
        var n;
        let l = null === (n = r.current) || void 0 === n ? void 0 : n.getScrollerNode();
        null != l && s(e, o.current, t, {
          scrollTop: l.scrollTop,
          scrollOffset: l.offsetHeight,
          scrollHeight: l.scrollHeight,
          scrollWidth: l.scrollWidth
        })
      }, [s, e, t]);
    return {
      scrollerRef: r,
      scrollHandler: c,
      sessionId: o.current
    }
  }