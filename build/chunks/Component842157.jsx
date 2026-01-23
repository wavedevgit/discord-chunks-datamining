/** Chunk was on web.js **/
/** chunk id: 842157, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk379834 = require("./379834.js"),
  Chunk934551 = require("./934551.js"),
  Chunk27989 = require("./27989.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308368 = require("./308368.js"),
  Chunk544420 = require("./544420.js"),
  Chunk729937 = require("./729937.js"),
  Chunk572211 = require("./572211.jsx"),
  Chunk354287 = require("./354287.js"),
  Chunk693879 = require("./693879.jsx"),
  Chunk583846 = require("./583846.js"),
  Chunk207371 = require("./207371.js"),
  Chunk205184 = require("./205184.js"),
  Chunk689168 = require("./689168.js"),
  Chunk403362 = require("./403362.js"),
  Chunk456060 = require("./456060.js"),
  Chunk131724 = require("./131724.js"),
  Chunk987709 = require("./987709.js"),
  Chunk850670 = require("./850670.js"),
  Chunk206589 = require("./206589.js"),
  Chunk154297 = require("./154297.js"),
  Chunk833349 = require("./833349.js"),
  Chunk946255 = require("./946255.js"),
  Chunk755420 = require("./755420.js"),
  Chunk877044 = require("./877044.jsx"),
  Chunk878831 = require("./878831.js"),
  Chunk652215 = require("./652215.js"),
  Chunk768349 = require("./768349.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk609653 = require("./609653.js");

function M(e) {
  let {
    presenceActivity: t,
    remoteJoinPlatform: n
  } = e, a = (0, w.z4)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: D.yTV.DESKTOP
  }), l = i.useMemo(() => a.map(e => {
    switch (e) {
      case w.FL.MOBILE:
        return (0, r.jsx)(c.u6o, {
          size: "xxs",
          color: "currentColor"
        });
      case w.FL.ANDROID:
        return (0, r.jsx)(R.x, {
          width: o.E.xxs,
          height: o.E.xxs,
          color: "currentColor"
        });
      case w.FL.IOS:
        return (0, r.jsx)(c.z0, {
          size: "xxs",
          color: "currentColor"
        });
      case w.FL.PLAYSTATION:
        return (0, r.jsx)(c.Xj, {
          size: "xxs",
          color: "currentColor"
        });
      case w.FL.XBOX:
        return (0, r.jsx)(c.YWd, {
          size: "xxs",
          color: "currentColor"
        });
      case w.FL.VR:
        return (0, r.jsx)(s.VrHeadsetIcon, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(b.Vq), [a]);
  if (!(null != n || l.length > 0)) return null;
  let u = null != n ? (0, T.C)(n) : L.intl.string(L.t["4dGUP0"]);
  return (0, r.jsxs)("div", {
    className: j.qr,
    children: [(0, r.jsx)("div", {
      className: j.E6,
      children: l.map((e, t) => (0, r.jsx)("div", {
        className: j.F2,
        children: e
      }, t))
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: j.kB,
      children: u
    })]
  })
}

function k(e) {
  var t, n, s;
  let {
    message: o,
    application: b,
    applicationName: T,
    channel: w,
    header: R,
    currentUserId: k,
    launchableAppId: U,
    isEmbeddedApplication: G,
    tryWithGdnAction: V,
    staticBannerSrc: F,
    onClickContent: B,
    iconSrc: H,
    onView: Y,
    presenceActivity: W,
    currentUserPresenceActivity: K,
    hideParty: z,
    partyStatusElement: q,
    analyticsLocations: Z,
    showAuthButton: X,
    startAuthorization: Q,
    accountLinkButtonRef: J,
    renderAccountLinkUpsell: $
  } = e, ee = null != (t = null == W || null == (n = W.timestamps) ? true : n.start) ? t : null == W ? true : W.created_at, et = i.useMemo(() => {
    var e;
    return null != ee ? (0, r.jsxs)("div", {
      className: j.Ym,
      children: [(0, r.jsx)(c._xR, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(h.z, {
        entry: {
          start: ee,
          end: null == W || null == (e = W.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [ee, null == W || null == (s = W.timestamps) ? true : s.end]), en = (0, I.v)(o), er = (0, E.s)(b.id), ei = i.useMemo(() => er.some(e => (0, m.CZ)(e) === a.m.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Y3C, {
      size: "xxs",
      color: "currentColor"
    }), L.intl.string(L.t.TsWCdW)]
  }) : null, [er]), ea = i.useMemo(() => (0, r.jsxs)(c.Text, {
    variant: "text-xs/normal",
    className: j.dS,
    color: "none",
    lineClamp: 2,
    children: [en ? (0, O.YC)(o, T, w, k, false) : et, en ? null : ei]
  }), [en, o, T, w, k, et, ei]), es = i.useMemo(() => (0, r.jsxs)("div", {
    className: j.pq,
    children: [ea, z || en ? null : q]
  }), [ea, z, en, q]), eo = !!U, el = (0, g.e)(b), {
    canJoin: ec,
    remoteJoinPlatform: eu
  } = (0, v.D)({
    presenceActivity: W,
    currentUserPresenceActivity: K,
    currentUserId: k,
    message: o,
    application: b,
    isEmbeddedApplication: G,
    isFrameApplication: el,
    isGameLaunchable: eo
  }), ed = (0, v.M)(W, K, o, b), ef = (0, A.E)(W, o, b, k), ep = (0, S.w)(K, W), e_ = (0, l.bG)([y.A], () => null != W && null != W.application_id && y.A.getState(W.application_id, D.xL.JOIN) === D.eAD.LOADING), {
    actions: eh,
    hasAccountLinkButton: em
  } = i.useMemo(() => {
    let e = null,
      t = true,
      n = false;
    ec ? e = {
      label: L.intl.string(L.t.VJlc0S),
      trackingArea: _.kY.JOIN,
      submitting: e_,
      onClick: () => {
        var e, t;
        d.A.join({
          userId: o.author.id,
          sessionId: W.session_id,
          applicationId: W.application_id,
          channelId: w.id,
          messageId: o.id,
          source: D.ThZ.MESSAGE_EMBED,
          analyticsLocations: Z,
          embedded: (0, C.A)(W, D.jUm.EMBEDDED),
          remotePartyId: null != eu ? null == (e = W.party) ? true : e.id : true
        }), (0, N.A)({
          type: D.UqL.JOIN,
          source: D.ThZ.MESSAGE_EMBED,
          userId: o.author.id,
          guildId: w.guild_id,
          channelId: w.id,
          applicationId: W.application_id,
          partyId: null == (t = W.party) ? true : t.id,
          messageId: o.id,
          analyticsLocations: Z,
          remoteJoinPlatform: eu
        })
      }
    } : ed ? (e = {
      label: L.intl.string(L.t.VJlc0S),
      trackingArea: _.kY.SYNC,
      onClick: () => {
        null != W && f.OH(W, o.author.id)
      }
    }, t = false) : ef ? e = {
      label: L.intl.string(L.t["hC/Zey"]),
      trackingArea: _.kY.INVITE,
      onClick: () => {
        null != W && u.A.sendActivityInvite({
          type: D.xL.JOIN,
          channelId: w.id,
          activity: W,
          location: D.ThZ.MESSAGE_EMBED
        })
      },
      disabled: o.author.id === k,
      disabledReason: o.author.id === k ? L.intl.string(L.t.IBl8ID) : true
    } : ep ? e = {
      label: L.intl.string(L.t.KC26NR),
      trackingArea: _.kY.PLAY,
      onClick: () => {},
      disabled: true
    } : null != V && (e = V, t = false);
    let r = [];
    return null != e && (r.push(e), X && t && (r.push({
      label: L.intl.string(L.t.lw71Nf),
      trackingArea: _.kY.CONNECT_ACCOUNT,
      onClick: () => {
        Q({
          analyticsLocations: Z
        })
      },
      icon: c.A5T,
      iconButton: true,
      buttonRef: J
    }), n = true)), {
      actions: r,
      hasAccountLinkButton: n
    }
  }, [ec, ed, ef, ep, V, o.author.id, o.id, W, w.id, w.guild_id, Z, eu, k, e_, X, Q, J]), eg = eh.some(e => e.trackingArea === _.kY.CLOUD_PLAY);
  (0, P.A)(eg, Z);
  let eE = i.useMemo(() => ep ? null : (0, r.jsx)(M, {
    presenceActivity: W,
    remoteJoinPlatform: eu
  }), [ep, W, eu]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.h, {
      header: R,
      title: T,
      staticBannerSrc: F,
      onClickBanner: B,
      bannerAspectRatio: p.u.ACTIVITY,
      iconSrc: null != H ? H : true,
      info: es,
      actions: eh,
      primaryActionFirst: true,
      onClickContent: B,
      trackingConfig: {
        id: b.id,
        linkType: x.J.RICH_PRESENCE_INVITE,
        onView: Y,
        referrerId: o.author.id,
        guildId: w.guild_id,
        channelId: o.channel_id,
        messageId: o.id
      },
      footer: eE
    }), em ? $() : null]
  })
}