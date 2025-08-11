/** Chunk was on web.js **/
/** chunk id: 537006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk335131 = require("./335131.js"),
  Chunk313201 = require("./313201.js"),
  Chunk211644 = require("./211644.js"),
  Chunk266454 = require("./266454.js"),
  Chunk605236 = require("./605236.js"),
  Chunk767714 = require("./767714.js"),
  Chunk703656 = require("./703656.js"),
  Chunk914010 = require("./914010.js"),
  Chunk785717 = require("./785717.js"),
  Chunk652853 = require("./652853.js"),
  Chunk732380 = require("./732380.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk869310 = require("./869310.js");

function R(e) {
  let {
    onClose: t
  } = e;
  return <u.P3F aria-label={N.intl.string(N.t.WAI6xs)} onClick={t} className={C.upsellCloseIconWrapper}><u.Dio size={"xs"} className={C.upsellCloseIcon} color={"currentColor"} /></u.P3F>
}

function P(e) {
  let {
    tiny: t,
    isPremiumUser: n,
    onInteraction: i
  } = e, {
    analyticsLocations: o,
    newestAnalyticsLocation: a
  } = (0, d.ZP)(), {
    trackUserProfileAction: s
  } = (0, y.KZ)();
  return <div className={C.upsellButtons}>{<div className={C.upsellButtonWrapper}>{n ? (0, r.jsx)(v.O1, {
        action: I.yM.VIEW_PREMIUM_PERKS,
        fullWidth: true,
        size: "sm",
        variant: "secondary",
        icon: u.SrA,
        text: N.intl.string(N.t["0Q61kJ"]),
        onClick: () => {
          (0, E.uL)(T.Z5c.APPLICATION_STORE), null == i || i()
        }
      }) : (0, r.jsx)(g.Z, {
        onClick: () => {
          s({
            action: I.yM.GET_PREMIUM
          }), null == i || i()
        },
        textOptions: {
          textOverride: N.intl.string(N.t.x6rkDg)
        },
        subscriptionTier: A.Si.TIER_2,
        premiumModalAnalyticsLocation: {
          section: T.jXE.USER_PROFILE
        },
        className: C.matchManaColors,
        size: t ? c.zx.Sizes.TINY : c.zx.Sizes.SMALL,
        look: c.zx.Looks.FILLED,
        color: c.zx.Colors.PRIMARY,
        onlyShineOnHover: true,
        fullWidth: true
      })}</div>}{<div className={C.upsellButtonWrapper}><v.O1 action={I.yM.VISIT_SHOP} fullWidth={true} icon={u.EOn} text={N.intl.string(N.t.b2d0Nz)} size={"sm"} variant={"secondary"} onClick={() => {
          (0, f.mK)({
            analyticsLocations: o,
            openInLayer: false,
            analyticsSource: a
          }), null == i || i()
        }} /></div>}</div>
}

function w(e) {
  let {
    isPremiumUser: t,
    onInteraction: n,
    className: o
  } = e, c = (0, _.Dt)(), {
    themeType: d
  } = (0, O.z)(), f = d === I.lY.MODAL, g = (0, h.Nj)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS), E = (0, s.e7)([b.Z], () => b.Z.getGuildId());
  if (i.useEffect(() => {
      if (!g) return (0, m.kk)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS), () => {
        (0, p.gE)({
          content: l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS
        }, false)
      }
    }, [g]), g) return null;
  let y = <u.X6q variant={"text-sm/normal"} id={c}>{N.intl.string(N.t.EIYbj4)}</u.X6q>,
    v = <R onClose={() => {
        (0, h.Q3)(l.z.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS, {
          dismissAction: S.L.USER_DISMISS,
          guildId: E,
          forceTrack: true
        })
      }} />,
    T = <P isPremiumUser={t} onInteraction={n} tiny={f} />;
  return f ? <aside className={a()(C.upsellContainer, o)} aria-labelledby={c}><div className={a()(C.upsellContent, C.upsellRowContent)}>{y}{<div className={C.upsellRowRight}>{<div>{T}</div>}{<div>{v}</div>}</div>}</div></aside> : <aside className={a()(C.upsellContainer, o)} aria-labelledby={c}><div className={a()(C.upsellContent, C.upsellDefaultContent)}>{<div className={C.upsellHeader}>{y}{<div>{v}</div>}</div>}{T}</div></aside>
}