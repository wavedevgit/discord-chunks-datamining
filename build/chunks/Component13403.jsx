/** Chunk was on 64935 **/
/** chunk id: 13403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => R
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

function R(e) {
  var t, n, R, D, L;
  let M, k, {
      analyticsLocations: U,
      application: G,
      channel: B,
      currentUserId: F,
      currentUserPresenceActivity: H,
      hideParty: V,
      message: z,
      onView: W,
      partyStatusElement: K,
      presenceActivity: Y
    } = e,
    q = (0, c.Ag)(G),
    {
      iconSrc: J,
      name: Q
    } = function(e, t) {
      var n, r, i, l;
      let {
        bot: a
      } = t, s = (null == (r = e.activity) ? true : r.icon_override) != null ? (0, O.uD)(t.id, null == (i = e.activity) ? true : i.icon_override) : null;
      return {
        iconSrc: null != s ? s : x.Ay.getApplicationIconURL({
          id: t.id,
          icon: t.icon,
          bot: a
        }),
        name: null != (n = null == (l = e.activity) ? true : l.name_override) ? n : t.name
      }
    }(z, G),
    X = null != (t = (0, S.I)({
      messageId: z.id,
      presenceActivity: Y,
      application: G
    })) ? t : true,
    {
      openGameProfileModal: Z,
      launchableAppId: $
    } = (R = G.id, D = z.author.id, M = (0, y.d)(R), k = (0, l.bG)([m.A, A.A], () => {
      let e = m.A.getApplication(R);
      return null != e ? A.A.getGameByApplication(e) : null
    }, [R]), {
      openGameProfileModal: (0, b.A)({
        location: "Rich Presence Activity Invite Embed",
        applicationId: null != (L = null == k ? true : k.id) ? L : true,
        source: h.Ob.Embed,
        trackEntryPointImpression: true,
        sourceUserId: D
      }),
      launchableAppId: M
    }),
    ee = (0, I.A)({
      application: G,
      analyticsLocations: U
    }),
    et = i.useMemo(() => {
      if (null != ee) return {
        label: w.intl.string(w.t["jaYS/h"]),
        icon: o.hpF,
        trackingArea: f.kY.CLOUD_PLAY,
        onClick: ee
      }
    }, [ee]),
    en = (0, g.F)(G),
    er = i.useMemo(() => null != Z ? Z : null != en && q ? en : true, [q, Z, en]),
    ei = u.A.useConfig({
      location: "RichPresenceGameActivityInviteEmbed"
    }),
    {
      canStartAuthorization: el,
      hasAlreadyLinked: ea,
      startAuthorization: es
    } = (0, p.RD)(G),
    eo = (0, d.z)(es, ea),
    ec = !(0, j.A)(Y, z, G.id),
    eu = (0, E.n$)(Q, null == (n = z.activity) ? true : n.type, ec),
    ed = i.useRef(null),
    ep = (0, l.bG)([v.A], () => v.A.getMessages(B.id)),
    em = () => {
      let e = [];
      return (0, C.G)(z.id, ep) && el && !ea && ei.enabled && e.push(a.M.GAME_INVITE_ACCOUNT_LINK_UPSELL), (0, r.jsx)(_.Ay, {
        contentTypes: e,
        children: e => {
          let {
            visibleContent: t,
            markAsDismissed: n
          } = e;
          if (t === a.M.GAME_INVITE_ACCOUNT_LINK_UPSELL) return (0, r.jsx)(s.AM, {
            graphic: {
              type: "dynamic",
              component: o.Z86.ACCOUNT_LINK_DISPLAY,
              props: {
                application: G
              }
            },
            title: w.intl.formatToPlainString(w.t["lo6H6+"], {
              gameName: G.name
            }),
            body: w.intl.string(w.t.qYAzOp),
            targetElementRef: ed,
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
  return ec ? (0, r.jsx)(T.A, {
    message: z,
    application: G,
    applicationName: Q,
    channel: B,
    header: eu,
    currentUserId: F,
    launchableAppId: $,
    isEmbeddedApplication: q,
    tryWithGdnAction: et,
    staticBannerSrc: X,
    onClickContent: er,
    iconSrc: J,
    onView: W,
    presenceActivity: Y,
    analyticsLocations: U,
    showAuthButton: el && !ea && ei.enabled,
    startAuthorization: eo,
    accountLinkButtonRef: ed,
    renderAccountLinkUpsell: em
  }) : (0, r.jsx)(N.A, {
    message: z,
    application: G,
    applicationName: Q,
    channel: B,
    header: eu,
    currentUserId: F,
    launchableAppId: $,
    isEmbeddedApplication: q,
    tryWithGdnAction: et,
    staticBannerSrc: X,
    onClickContent: er,
    iconSrc: J,
    onView: W,
    presenceActivity: Y,
    currentUserPresenceActivity: H,
    hideParty: V,
    partyStatusElement: K,
    analyticsLocations: U,
    showAuthButton: el && !ea && ei.enabled,
    startAuthorization: eo,
    accountLinkButtonRef: ed,
    renderAccountLinkUpsell: em
  })
}