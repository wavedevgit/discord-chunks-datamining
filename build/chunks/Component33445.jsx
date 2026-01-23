/** Chunk was on 13492 **/
/** chunk id: 33445, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => h,
  E: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk587895 = require("./587895.js"),
  Chunk200042 = require("./200042.jsx"),
  Chunk574172 = require("./574172.js"),
  Chunk933958 = require("./933958.js"),
  Chunk57220 = require("./57220.js"),
  Chunk969151 = require("./969151.js"),
  Chunk833147 = require("./833147.jsx"),
  Chunk780376 = require("./780376.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk405429 = require("./405429.js");

function y(e) {
  let {
    activity: n,
    renderHeader: t,
    renderActivityIFrameWithLoadedData: d,
    isLoading: p = false
  } = e, b = o.useRef(null), f = (0, l.A)(n);
  o.useEffect(() => {
    null != n ? clearTimeout(b.current) : null != f && null == n && (b.current = window.setTimeout(() => {
      (0, s.close)(m.MLl.ACTIVITY_POPOUT)
    }, 5e3))
  }, [f, n]);
  let y = (0, a.bG)([c.A], () => {
      let e = null == n ? true : n.applicationId;
      return null == e ? true : c.A.getApplication(e)
    }),
    h = (0, u.V)();
  return (0, r.jsx)("div", {
    className: v.kL,
    children: null == n || null == y || p ? (0, r.jsx)(i.y$y, {
      className: v.pU
    }) : (0, r.jsx)("div", {
      className: v.U$,
      children: (0, r.jsxs)("div", {
        className: v.kq,
        children: [(0, r.jsx)("div", {
          className: v.N1,
          children: t({
            application: y
          })
        }), (0, r.jsx)("div", {
          className: v.Wc,
          children: d({
            application: y
          })
        }), h ? (0, r.jsx)(_.A, {
          isEmbeddedActivity: true
        }) : null]
      })
    })
  })
}

function h() {
  let {
    embeddedActivity: e,
    channelId: n,
    guildId: t
  } = (0, a.cf)([d.Ay], () => {
    let e = d.Ay.getCurrentEmbeddedActivity(),
      n = (0, p.H)(null == e ? true : e.location),
      t = (0, p.D)(null == e ? true : e.location);
    return {
      embeddedActivity: e,
      channelId: n,
      guildId: t
    }
  }), i = (0, a.bG)([d.Ay], () => (null == e ? true : e.applicationId) != null && d.Ay.isProxyTicketRefreshing(e.applicationId), [e]), l = o.useCallback(e => {
    let {
      application: t
    } = e;
    return (0, r.jsx)(f.A, {
      applicationId: t.id,
      channelId: n
    })
  }, [n]), c = o.useCallback(o => {
    let {
      application: a
    } = o, i = {};
    if (null != e) {
      var l, c, _;
      i.instance_id = null != (l = null != (c = e.compositeInstanceId) ? c : e.launchId) ? l : "", i.location_id = null == (_ = e.location) ? true : _.id, i.launch_id = e.launchId, i.referrer_id = e.referrerId, i.custom_id = e.customId, null != t && "" !== t && (i.guild_id = t), null != n && "" !== n && (i.channel_id = n)
    }
    let s = null == e ? true : e.url;
    return (0, r.jsx)(b.A, {
      application: a,
      queryParams: i,
      url: s
    })
  }, [n, t, e]);
  return (0, r.jsx)(y, {
    activity: e,
    isLoading: i,
    renderHeader: l,
    renderActivityIFrameWithLoadedData: c
  })
}