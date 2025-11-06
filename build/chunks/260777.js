/** Chunk was on 69283 **/
/** chunk id: 260777, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk308982 = require("./308982.js");
let i = Math.floor(18.75);

function l(e) {
  let {
    containerRef: t,
    channelId: n,
    memberIds: l
  } = e;
  return {
    animateToMember: r.useCallback((e, r) => {
      var o;
      let c = new Map;
      if (null == (o = t.current) || o.querySelectorAll('ul[data-animated="true"] li').forEach(e => {
          let t = e.getAttribute("data-member-id");
          null != t && c.set(t, e)
        }), 0 === c.size) return void r();
      let u = e => {
          let t = null,
            r = null;
          if (null != e && l.length > 1) {
            let n = l.indexOf(e);
            if (false !== n) {
              let e = (n - 1 + l.length) % l.length;
              t = l[e];
              let a = (n + 1) % l.length;
              r = l[a]
            }
          }
          a.kg.getState().setAnimationState(n, {
            animatingMemberId: e,
            previousMemberId: t,
            nextMemberId: r
          }), c.forEach((n, a) => {
            n.removeAttribute("data-shuffle-state"), a === e ? n.setAttribute("data-shuffle-state", "animating") : a === t ? n.setAttribute("data-shuffle-state", "previous") : a === r && n.setAttribute("data-shuffle-state", "next")
          })
        },
        s = ((l.indexOf(e) - i) % l.length + l.length) % l.length,
        d = 0,
        _ = setInterval(() => {
          let e = (s + d) % l.length,
            t = l[e];
          d++, u(t), d >= i && (clearInterval(_), setTimeout(() => {
            u(null), r()
          }, 80))
        }, 80)
    }, [t, n, l])
  }
}