/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  _: () => s
});
var n = r(192379),
  i = r(772848),
  l = r(638730),
  o = r(626135);
let a = (e, t, r, n) => {
    let {
      scrollTop: i = 0,
      scrollOffset: l = 0,
      scrollHeight: a = 0,
      scrollWidth: s = 0
    } = n;
    if (a > 0) {
      let n = (i + l) / a;
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
      o = n.useRef((0, i.Z)()),
      s = (0, l.h)(a, 5e3, [], {
        trailing: !0
      }),
      c = n.useCallback(() => {
        var n;
        let i = null === (n = r.current) || void 0 === n ? void 0 : n.getScrollerNode();
        null != i && s(e, o.current, t, {
          scrollTop: i.scrollTop,
          scrollOffset: i.offsetHeight,
          scrollHeight: i.scrollHeight,
          scrollWidth: i.scrollWidth
        })
      }, [s, e, t]);
    return {
      scrollerRef: r,
      scrollHandler: c,
      sessionId: o.current
    }
  }