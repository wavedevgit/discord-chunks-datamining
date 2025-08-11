/** Chunk was on 21199 **/
/** chunk id: 464766, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk645331 = require("./645331.js");

function a(e) {
  let {
    selectedTab: n,
    onTabSelected: t,
    userCount: a,
    isHub: u = false
  } = e, d = i.useRef(null);
  i.useEffect(() => {
    var e, n, t;
    return null == (t = d.current) || null == (n = t.ref) || null == (e = n.blur) ? true : e.call(n)
  }, []);
  let f = c.intl.formatToPlainString(c.t["ZrTT/P"], {
      userCount: a
    }),
    g = [<r.njP.Item className={s.tabBarItem} id={o.fL.EVENT_INFO}>{c.intl.string(c.t.iW6Xur)}</r.njP.Item>];
  return u || g.push(<r.njP.Item className={s.tabBarItem} id={o.fL.RSVP_LIST}>{f}</r.njP.Item>), <div className={s.container}><r.njP className={s.tabBar} aria-label={c.intl.string(c.t["+1H47u"])} selectedItem={n} type={"top"} onItemSelect={t}>{g}</r.njP></div>
}