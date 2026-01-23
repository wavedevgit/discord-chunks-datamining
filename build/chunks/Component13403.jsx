/** Chunk was on web.js **/
/** chunk id: 13403, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk735991 = require("./735991.js"),
  Chunk690456 = require("./690456.js"),
  Chunk359800 = require("./359800.jsx"),
  Chunk362490 = require("./362490.js"),
  Chunk587895 = require("./587895.js"),
  Chunk354287 = require("./354287.js"),
  Chunk574660 = require("./574660.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk928550 = require("./928550.js"),
  Chunk760751 = require("./760751.js"),
  Chunk320501 = require("./320501.js"),
  Chunk139675 = require("./139675.js"),
  Chunk486020 = require("./486020.js"),
  Chunk456060 = require("./456060.js"),
  Chunk659051 = require("./659051.js"),
  Chunk837197 = require("./837197.js"),
  Chunk359549 = require("./359549.js"),
  Chunk537643 = require("./537643.js"),
  Chunk444901 = require("./444901.jsx"),
  Chunk842157 = require("./842157.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

function x(e, t) {
  var n;
  let r = (0, y.d)(e),
    i = (0, a.bG)([p.A, b.A], () => {
      let t = p.A.getApplication(e);
      return null != t ? b.A.getGameByApplication(t) : null
    }, [e]);
  return {
    openGameProfileModal: (0, E.A)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: null != (n = null == i ? true : i.id) ? n : true,
      source: g.Ob.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    launchableAppId: r
  }
}

function L(e, t) {
  var n, r, i, a;
  let {
    bot: s
  } = t, o = (null == (r = e.activity) ? true : r.icon_override) != null ? (0, v.uD)(t.id, null == (i = e.activity) ? true : i.icon_override) : null;
  return {
    iconSrc: null != o ? o : A.Ay.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: s
    }),
    name: null != (n = null == (a = e.activity) ? true : a.name_override) ? n : t.name
  }
}

function j(e) {
  var t, n;
  let {
    analyticsLocations: p,
    application: g,
    channel: E,
    currentUserId: y,
    currentUserPresenceActivity: b,
    hideParty: v,
    message: A,
    onView: j,
    partyStatusElement: M,
    presenceActivity: k
  } = e, U = (0, c.Ag)(g), {
    iconSrc: G,
    name: V
  } = L(A, g), F = null != (t = (0, N.I)({
    messageId: A.id,
    presenceActivity: k,
    application: g
  })) ? t : true, {
    openGameProfileModal: B,
    launchableAppId: H
  } = x(g.id, A.author.id), Y = (0, C.A)({
    application: g,
    analyticsLocations: p
  }), W = i.useMemo(() => {
    if (null != Y) return {
      label: D.intl.string(D.t["jaYS/h"]),
      icon: l.hpF,
      trackingArea: _.kY.CLOUD_PLAY,
      onClick: Y
    }
  }, [Y]), K = (0, h.F)(g), z = i.useMemo(() => null != B ? B : null != K && U ? K : true, [U, B, K]), q = u.A.useConfig({
    location: "RichPresenceGameActivityInviteEmbed"
  }), {
    canStartAuthorization: X,
    hasAlreadyLinked: Z,
    startAuthorization: Q
  } = (0, f.RD)(g), $ = (0, d.z)(Q, Z), J = !(0, S.A)(k, A, g.id), ee = (0, I.n$)(V, null == (n = A.activity) ? true : n.type, J), et = i.useRef(null), en = (0, a.bG)([O.A], () => O.A.getMessages(E.id)), er = () => {
    let e = [];
    return (0, T.G)(A.id, en) && X && !Z && q.enabled && e.push(s.M.GAME_INVITE_ACCOUNT_LINK_UPSELL), (0, r.jsx)(m.Ay, {
      contentTypes: e,
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: n
        } = e;
        if (t === s.M.GAME_INVITE_ACCOUNT_LINK_UPSELL) return (0, r.jsx)(o.AM, {
          graphic: {
            type: "dynamic",
            component: l.Z86.ACCOUNT_LINK_DISPLAY,
            props: {
              application: g
            }
          },
          title: D.intl.formatToPlainString(D.t["lo6H6+"], {
            gameName: g.name
          }),
          body: D.intl.string(D.t.qYAzOp),
          targetElementRef: et,
          caretConfig: {
            align: "start"
          },
          shouldShow: true,
          gradientColor: "purple",
          onRequestClose: () => n(P.i.USER_DISMISS)
        })
      }
    })
  };
  return J ? (0, r.jsx)(R.A, {
    message: A,
    application: g,
    applicationName: V,
    channel: E,
    header: ee,
    currentUserId: y,
    launchableAppId: H,
    isEmbeddedApplication: U,
    tryWithGdnAction: W,
    staticBannerSrc: F,
    onClickContent: z,
    iconSrc: G,
    onView: j,
    presenceActivity: k,
    analyticsLocations: p,
    showAuthButton: X && !Z && q.enabled,
    startAuthorization: $,
    accountLinkButtonRef: et,
    renderAccountLinkUpsell: er
  }) : (0, r.jsx)(w.A, {
    message: A,
    application: g,
    applicationName: V,
    channel: E,
    header: ee,
    currentUserId: y,
    launchableAppId: H,
    isEmbeddedApplication: U,
    tryWithGdnAction: W,
    staticBannerSrc: F,
    onClickContent: z,
    iconSrc: G,
    onView: j,
    presenceActivity: k,
    currentUserPresenceActivity: b,
    hideParty: v,
    partyStatusElement: M,
    analyticsLocations: p,
    showAuthButton: X && !Z && q.enabled,
    startAuthorization: $,
    accountLinkButtonRef: et,
    renderAccountLinkUpsell: er
  })
}