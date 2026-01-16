/** Chunk was on 27278 **/
/** chunk id: 701011, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  S: () => v,
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk812206 = require("./812206.js"),
  Chunk554370 = require("./554370.jsx"),
  Chunk788983 = require("./788983.js"),
  Chunk317381 = require("./317381.js"),
  Chunk426419 = require("./426419.js"),
  Chunk16609 = require("./16609.js"),
  Chunk781780 = require("./781780.jsx"),
  Chunk325749 = require("./325749.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk350325 = require("./350325.js");

function v(e) {
  let {
    activity: n,
    renderHeader: t,
    renderActivityIFrameWithLoadedData: s,
    isLoading: f = false
  } = e, p = o.useRef(null), m = (0, c.Z)(n);
  o.useEffect(() => {
    null != n ? clearTimeout(p.current) : null != m && null == n && (p.current = window.setTimeout(() => {
      (0, u.close)(h.KJ3.ACTIVITY_POPOUT)
    }, 5e3))
  }, [m, n]);
  let v = (0, i.e7)([l.Z], () => {
      let e = null == n ? true : n.applicationId;
      return null == e ? true : l.Z.getApplication(e)
    }),
    C = (0, b.P)();
  return (0, a.jsx)("div", {
    className: _.container,
    children: null == n || null == v || f ? (0, a.jsx)(r.$jN, {
      className: _.iframe
    }) : (0, a.jsx)("div", {
      className: _.loadedContentContainer,
      children: (0, a.jsxs)("div", {
        className: _.iframeAndHeaderContainer,
        children: [(0, a.jsx)("div", {
          className: _.headerContainer,
          children: t({
            application: v
          })
        }), (0, a.jsx)("div", {
          className: _.iframeContainer,
          children: s({
            application: v
          })
        }), C ? (0, a.jsx)(d.Z, {
          isEmbeddedActivity: true
        }) : null]
      })
    })
  })
}

function C() {
  let {
    embeddedActivity: e,
    channelId: n,
    guildId: t
  } = (0, i.cj)([s.ZP], () => {
    let e = s.ZP.getCurrentEmbeddedActivity(),
      n = (0, f.p)(null == e ? true : e.location),
      t = (0, f.j)(null == e ? true : e.location);
    return {
      embeddedActivity: e,
      channelId: n,
      guildId: t
    }
  }), r = (0, i.e7)([s.ZP], () => (null == e ? true : e.applicationId) != null && s.ZP.isProxyTicketRefreshing(e.applicationId), [e]), c = o.useCallback(e => {
    let {
      application: t
    } = e;
    return (0, a.jsx)(m.Z, {
      applicationId: t.id,
      channelId: n
    })
  }, [n]), l = o.useCallback(o => {
    let {
      application: i
    } = o, r = {};
    if (null != e) {
      var c, l, d;
      r.instance_id = null != (d = null != (l = e.compositeInstanceId) ? l : e.launchId) ? d : "", r.location_id = null == (c = e.location) ? true : c.id, r.launch_id = e.launchId, r.referrer_id = e.referrerId, r.custom_id = e.customId, null != t && "" !== t && (r.guild_id = t), null != n && "" !== n && (r.channel_id = n)
    }
    let u = null == e ? true : e.url;
    return (0, a.jsx)(p.Z, {
      application: i,
      queryParams: r,
      url: u
    })
  }, [n, t, e]);
  return (0, a.jsx)(v, {
    activity: e,
    isLoading: r,
    renderHeader: c,
    renderActivityIFrameWithLoadedData: l
  })
}