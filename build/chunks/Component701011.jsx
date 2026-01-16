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
    renderActivityIFrameWithLoadedData: s
  } = e, f = o.useRef(null), p = (0, i.Z)(n);
  o.useEffect(() => {
    null != n ? clearTimeout(f.current) : null != p && null == n && (f.current = window.setTimeout(() => {
      (0, u.close)(h.KJ3.ACTIVITY_POPOUT)
    }, 5e3))
  }, [p, n]);
  let m = (0, r.e7)([l.Z], () => {
      let e = null == n ? true : n.applicationId;
      return null == e ? true : l.Z.getApplication(e)
    }),
    v = (0, b.P)();
  return (0, a.jsx)("div", {
    className: _.container,
    children: null == n || null == m ? (0, a.jsx)(c.$jN, {
      className: _.iframe
    }) : (0, a.jsx)("div", {
      className: _.loadedContentContainer,
      children: (0, a.jsxs)("div", {
        className: _.iframeAndHeaderContainer,
        children: [(0, a.jsx)("div", {
          className: _.headerContainer,
          children: t({
            application: m
          })
        }), (0, a.jsx)("div", {
          className: _.iframeContainer,
          children: s({
            application: m
          })
        }), v ? (0, a.jsx)(d.Z, {
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
  } = (0, r.cj)([s.ZP], () => {
    let e = s.ZP.getCurrentEmbeddedActivity(),
      n = (0, f.p)(null == e ? true : e.location),
      t = (0, f.j)(null == e ? true : e.location);
    return {
      embeddedActivity: e,
      channelId: n,
      guildId: t
    }
  }), c = o.useCallback(e => {
    let {
      application: t
    } = e;
    return (0, a.jsx)(m.Z, {
      applicationId: t.id,
      channelId: n
    })
  }, [n]), i = o.useCallback(o => {
    let {
      application: r
    } = o, c = {};
    if (null != e) {
      var i, l, d;
      c.instance_id = null != (d = null != (l = e.compositeInstanceId) ? l : e.launchId) ? d : "", c.location_id = null == (i = e.location) ? true : i.id, c.launch_id = e.launchId, c.referrer_id = e.referrerId, c.custom_id = e.customId, null != t && "" !== t && (c.guild_id = t), null != n && "" !== n && (c.channel_id = n)
    }
    let u = null == e ? true : e.url;
    return (0, a.jsx)(p.Z, {
      application: r,
      queryParams: c,
      url: u
    })
  }, [n, t, e]);
  return (0, a.jsx)(v, {
    activity: e,
    renderHeader: c,
    renderActivityIFrameWithLoadedData: i
  })
}