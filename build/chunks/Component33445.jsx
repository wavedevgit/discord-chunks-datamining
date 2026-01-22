/** Chunk was on 13492 **/
/** chunk id: 33445, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => v,
  E: () => A
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

function A(e) {
  let {
    activity: t,
    renderHeader: a,
    renderActivityIFrameWithLoadedData: b,
    isLoading: u = false
  } = e, p = n.useRef(null), _ = (0, r.A)(t);
  n.useEffect(() => {
    null != t ? clearTimeout(p.current) : null != _ && null == t && (p.current = window.setTimeout(() => {
      (0, f.close)(m.MLl.ACTIVITY_POPOUT)
    }, 5e3))
  }, [_, t]);
  let A = (0, l.bG)([o.A], () => {
      let e = null == t ? true : t.applicationId;
      return null == e ? true : o.A.getApplication(e)
    }),
    v = (0, s.V)();
  return (0, c.jsx)("div", {
    className: x.kL,
    children: null == t || null == A || u ? (0, c.jsx)(d.y$y, {
      className: x.pU
    }) : (0, c.jsx)("div", {
      className: x.U$,
      children: (0, c.jsxs)("div", {
        className: x.kq,
        children: [(0, c.jsx)("div", {
          className: x.N1,
          children: a({
            application: A
          })
        }), (0, c.jsx)("div", {
          className: x.Wc,
          children: b({
            application: A
          })
        }), v ? (0, c.jsx)(i.A, {
          isEmbeddedActivity: true
        }) : null]
      })
    })
  })
}

function v() {
  let {
    embeddedActivity: e,
    channelId: t,
    guildId: a
  } = (0, l.cf)([b.Ay], () => {
    let e = b.Ay.getCurrentEmbeddedActivity(),
      t = (0, u.H)(null == e ? true : e.location),
      a = (0, u.D)(null == e ? true : e.location);
    return {
      embeddedActivity: e,
      channelId: t,
      guildId: a
    }
  }), d = (0, l.bG)([b.Ay], () => (null == e ? true : e.applicationId) != null && b.Ay.isProxyTicketRefreshing(e.applicationId), [e]), r = n.useCallback(e => {
    let {
      application: a
    } = e;
    return (0, c.jsx)(_.A, {
      applicationId: a.id,
      channelId: t
    })
  }, [t]), o = n.useCallback(n => {
    let {
      application: l
    } = n, d = {};
    if (null != e) {
      var r, o, i;
      d.instance_id = null != (r = null != (o = e.compositeInstanceId) ? o : e.launchId) ? r : "", d.location_id = null == (i = e.location) ? true : i.id, d.launch_id = e.launchId, d.referrer_id = e.referrerId, d.custom_id = e.customId, null != a && "" !== a && (d.guild_id = a), null != t && "" !== t && (d.channel_id = t)
    }
    let f = null == e ? true : e.url;
    return (0, c.jsx)(p.A, {
      application: l,
      queryParams: d,
      url: f
    })
  }, [t, a, e]);
  return (0, c.jsx)(A, {
    activity: e,
    isLoading: d,
    renderHeader: r,
    renderActivityIFrameWithLoadedData: o
  })
}