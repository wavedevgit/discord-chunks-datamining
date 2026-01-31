/** Chunk was on 64935 **/
/** chunk id: 842157, original params: e,t,n (module,exports,require) **/
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
  } = e, l = (0, T.z4)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: w.yTV.DESKTOP
  }), o = i.useMemo(() => l.map(e => {
    switch (e) {
      case T.FL.MOBILE:
        return (0, r.jsx)(c.u6o, {
          size: "xxs",
          color: "currentColor"
        });
      case T.FL.ANDROID:
        return (0, r.jsx)(N.x, {
          width: s.E.xxs,
          height: s.E.xxs,
          color: "currentColor"
        });
      case T.FL.IOS:
        return (0, r.jsx)(c.z0, {
          size: "xxs",
          color: "currentColor"
        });
      case T.FL.PLAYSTATION:
        return (0, r.jsx)(c.Xj, {
          size: "xxs",
          color: "currentColor"
        });
      case T.FL.XBOX:
        return (0, r.jsx)(c.YWd, {
          size: "xxs",
          color: "currentColor"
        });
      case T.FL.VR:
        return (0, r.jsx)(a.VrHeadsetIcon, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(A.Vq), [l]);
  if (!(null != n || o.length > 0)) return null;
  let u = null != n ? (0, C.C)(n) : D.intl.string(D.t["4dGUP0"]);
  return (0, r.jsxs)("div", {
    className: L.qr,
    children: [(0, r.jsx)("div", {
      className: L.E6,
      children: o.map((e, t) => (0, r.jsx)("div", {
        className: L.F2,
        children: e
      }, t))
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: L.kB,
      children: u
    })]
  })
}

function k(e) {
  var t, n, a;
  let {
    message: s,
    application: A,
    applicationName: C,
    channel: T,
    header: N,
    currentUserId: k,
    launchableAppId: U,
    isEmbeddedApplication: G,
    tryWithGdnAction: B,
    staticBannerSrc: F,
    onClickContent: H,
    iconSrc: V,
    onView: z,
    presenceActivity: W,
    currentUserPresenceActivity: K,
    hideParty: Y,
    partyStatusElement: q,
    analyticsLocations: J,
    showAuthButton: Q,
    startAuthorization: X,
    accountLinkButtonRef: Z,
    renderAccountLinkUpsell: $
  } = e, ee = null != (t = null == W || null == (n = W.timestamps) ? true : n.start) ? t : null == W ? true : W.created_at, et = i.useMemo(() => {
    var e;
    return null != ee ? (0, r.jsxs)("div", {
      className: L.Ym,
      children: [(0, r.jsx)(c._xR, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(g.z, {
        entry: {
          start: ee,
          end: null == W || null == (e = W.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [ee, null == W || null == (a = W.timestamps) ? true : a.end]), en = (0, E.v)(s), er = (0, b.s)(A.id), ei = i.useMemo(() => er.some(e => (0, _.CZ)(e) === l.m.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Y3C, {
      size: "xxs",
      color: "currentColor"
    }), D.intl.string(D.t.TsWCdW)]
  }) : null, [er]), el = i.useMemo(() => (0, r.jsxs)(c.Text, {
    variant: "text-xs/normal",
    className: L.dS,
    color: "none",
    lineClamp: 2,
    children: [en ? (0, v.YC)(s, C, T, k, false) : et, en ? null : ei]
  }), [en, s, C, T, k, et, ei]), ea = i.useMemo(() => (0, r.jsxs)("div", {
    className: L.pq,
    children: [el, Y || en ? null : q]
  }), [el, Y, en, q]), es = (0, h.e)(A), {
    canJoin: eo,
    remoteJoinPlatform: ec
  } = (0, O.D)({
    presenceActivity: W,
    currentUserPresenceActivity: K,
    currentUserId: k,
    message: s,
    application: A,
    isEmbeddedApplication: G,
    isFrameApplication: es,
    isGameLaunchable: !!U
  }), eu = (0, O.M)(W, K, s, A), ed = (0, x.E)(W, s, A, k), ep = (0, j.w)(K, W), em = (0, o.bG)([y.A], () => null != W && null != W.application_id && y.A.getState(W.application_id, w.xL.JOIN) === w.eAD.LOADING), {
    actions: ef,
    hasAccountLinkButton: eg
  } = i.useMemo(() => {
    let e = null,
      t = true,
      n = false;
    eo ? e = {
      label: D.intl.string(D.t.VJlc0S),
      trackingArea: f.kY.JOIN,
      submitting: em,
      onClick: () => {
        var e, t;
        d.A.join({
          userId: s.author.id,
          sessionId: W.session_id,
          applicationId: W.application_id,
          channelId: T.id,
          messageId: s.id,
          source: w.ThZ.MESSAGE_EMBED,
          analyticsLocations: J,
          embedded: (0, I.A)(W, w.jUm.EMBEDDED),
          remotePartyId: null != ec ? null == (e = W.party) ? true : e.id : true
        }), (0, S.A)({
          type: w.UqL.JOIN,
          source: w.ThZ.MESSAGE_EMBED,
          userId: s.author.id,
          guildId: T.guild_id,
          channelId: T.id,
          applicationId: W.application_id,
          partyId: null == (t = W.party) ? true : t.id,
          messageId: s.id,
          analyticsLocations: J,
          remoteJoinPlatform: ec
        })
      }
    } : eu ? (e = {
      label: D.intl.string(D.t.VJlc0S),
      trackingArea: f.kY.SYNC,
      onClick: () => {
        null != W && p.OH(W, s.author.id)
      }
    }, t = false) : ed ? e = {
      label: D.intl.string(D.t["hC/Zey"]),
      trackingArea: f.kY.INVITE,
      onClick: () => {
        null != W && u.A.sendActivityInvite({
          type: w.xL.JOIN,
          channelId: T.id,
          activity: W,
          location: w.ThZ.MESSAGE_EMBED
        })
      },
      disabled: s.author.id === k,
      disabledReason: s.author.id === k ? D.intl.string(D.t.IBl8ID) : true
    } : ep ? e = {
      label: D.intl.string(D.t.KC26NR),
      trackingArea: f.kY.PLAY,
      onClick: () => {},
      disabled: true
    } : null != B && (e = B, t = false);
    let r = [];
    return null != e && (r.push(e), Q && t && (r.push({
      label: D.intl.string(D.t.lw71Nf),
      trackingArea: f.kY.CONNECT_ACCOUNT,
      onClick: () => {
        X({
          analyticsLocations: J
        })
      },
      icon: c.A5T,
      iconButton: true,
      buttonRef: Z
    }), n = true)), {
      actions: r,
      hasAccountLinkButton: n
    }
  }, [eo, eu, ed, ep, B, s.author.id, s.id, W, T.id, T.guild_id, J, ec, k, em, Q, X, Z]), e_ = ef.some(e => e.trackingArea === f.kY.CLOUD_PLAY);
  (0, P.A)(e_, J);
  let eh = i.useMemo(() => ep ? null : (0, r.jsx)(M, {
    presenceActivity: W,
    remoteJoinPlatform: ec
  }), [ep, W, ec]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.h, {
      header: N,
      title: C,
      staticBannerSrc: F,
      onClickBanner: H,
      bannerAspectRatio: m.u.ACTIVITY,
      iconSrc: null != V ? V : true,
      info: ea,
      actions: ef,
      primaryActionFirst: true,
      onClickContent: H,
      trackingConfig: {
        id: A.id,
        linkType: R.J.RICH_PRESENCE_INVITE,
        onView: z,
        referrerId: s.author.id,
        guildId: T.guild_id,
        channelId: s.channel_id,
        messageId: s.id
      },
      footer: eh
    }), eg ? $() : null]
  })
}