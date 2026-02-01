/** Chunk was on 13492 **/
/** chunk id: 33445, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O,
  E: () => v
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

function v(e) {
  let {
    activity: t,
    renderHeader: n,
    renderActivityIFrameWithLoadedData: d,
    isLoading: f = false
  } = e, m = r.useRef(null), A = (0, a.A)(t);
  r.useEffect(() => {
    null != t ? clearTimeout(m.current) : null != A && null == t && (m.current = window.setTimeout(() => {
      (0, u.close)(b.MLl.ACTIVITY_POPOUT)
    }, 5e3))
  }, [A, t]);
  let v = (0, i.bG)([c.A], () => {
      let e = null == t ? true : t.applicationId;
      return null == e ? true : c.A.getApplication(e)
    }),
    O = (0, p.V)();
  return (0, l.jsx)("div", {
    className: y.kL,
    children: null == t || null == v || f ? (0, l.jsx)(o.y$y, {
      className: y.pU
    }) : (0, l.jsx)("div", {
      className: y.U$,
      children: (0, l.jsxs)("div", {
        className: y.kq,
        children: [(0, l.jsx)("div", {
          className: y.N1,
          children: n({
            application: v
          })
        }), (0, l.jsx)("div", {
          className: y.Wc,
          children: d({
            application: v
          })
        }), O ? (0, l.jsx)(s.A, {
          isEmbeddedActivity: true
        }) : null]
      })
    })
  })
}

function O() {
  let {
    embeddedActivity: e,
    channelId: t,
    guildId: n
  } = (0, i.cf)([d.Ay], () => {
    let e = d.Ay.getCurrentEmbeddedActivity(),
      t = (0, f.H)(null == e ? true : e.location),
      n = (0, f.D)(null == e ? true : e.location);
    return {
      embeddedActivity: e,
      channelId: t,
      guildId: n
    }
  }), o = (0, i.bG)([d.Ay], () => (null == e ? true : e.applicationId) != null && d.Ay.isProxyTicketRefreshing(e.applicationId), [e]), a = r.useCallback(e => {
    let {
      application: n
    } = e;
    return (0, l.jsx)(A.A, {
      applicationId: n.id,
      channelId: t
    })
  }, [t]), c = r.useCallback(r => {
    let {
      application: i
    } = r, o = {};
    if (null != e) {
      var a, c, s;
      o.instance_id = null != (a = null != (c = e.compositeInstanceId) ? c : e.launchId) ? a : "", o.location_id = null == (s = e.location) ? true : s.id, o.launch_id = e.launchId, o.referrer_id = e.referrerId, o.custom_id = e.customId, null != n && "" !== n && (o.guild_id = n), null != t && "" !== t && (o.channel_id = t)
    }
    let u = null == e ? true : e.url;
    return (0, l.jsx)(m.A, {
      application: i,
      queryParams: o,
      url: u
    })
  }, [t, n, e]);
  return (0, l.jsx)(v, {
    activity: e,
    isLoading: o,
    renderHeader: a,
    renderActivityIFrameWithLoadedData: c
  })
}