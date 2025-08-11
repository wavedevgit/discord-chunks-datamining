/** Chunk was on 75708 **/
/** chunk id: 329013, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => w,
  i: () => D
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk514361 = require("./514361.js"),
  Chunk705262 = require("./705262.js"),
  Chunk550385 = require("./550385.js"),
  Chunk266454 = require("./266454.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk504983 = require("./504983.js"),
  Chunk984802 = require("./984802.js"),
  Chunk626135 = require("./626135.js"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk967655 = require("./967655.js");
let R = () => {
    (0, Chunk266454.Q3)(Chunk704215.z.CLIENT_THEMES_SPARKLE_PREVIEW, {
      dismissAction: Chunk921944.L.PRIMARY,
      forceTrack: true
    }), (0, Chunk550385.XO)(Chunk550385.wh.CLIENT_THEMES), (0, Chunk37234.xf)()
  },
  D = () => {
    var e, t;
    let {
      analyticsLocations: n
    } = (0, Chunk906732.ZP)(Chunk100527.Z.USER_SETTINGS), a = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.isPreview), l = (null == (t = (0, Chunk639119.N)()) || null == (e = exports.subscription_trial) ? true : module.sku_id) === Chunk474936.Si.TIER_2, d = (0, Chunk104494.Ng)(), u = (0, Chunk104494.Wp)(Chunk37234, Chunk474936.Si.TIER_2);
    return Chunk73800.useEffect(() => {
      Chunk704215 && Chunk626135.default.track(Chunk981631.rMx.PREMIUM_UPSELL_VIEWED, {
        type: Chunk474936.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
        location_stack: require
      })
    }, [Chunk704215, require]), <div>{<Chunk705262.ZP type={Chunk705262.yH.SETTINGS}>{<Chunk705262.ZP.Basic className={Chunk967655.basicThemeSelectors} />}{<Z />}{<Chunk504983.Z className={Chunk967655.featureBorder} isShown={Chunk704215} type={Chunk504983.Y.PREMIUM}>{<Chunk705262.ZP.Gradient disabled={Chunk704215} renderCTAButtons={() => !Chunk704215 || Chunk780384 ? null : (0, Chunk255367.jsxs)("div", {
              className: Chunk967655.tryItOutButtons,
              children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
                variant: "secondary",
                text: Chunk388032.intl.string(Chunk388032.t["E+COuL"]),
                onClick: () => R()
              }), (0, Chunk255367.jsx)(Chunk767714.Z, {
                showGradient: false,
                subscriptionTier: Chunk474936.Si.TIER_2,
                textOptions: {
                  textOverride: Chunk857595 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.bkQ4bG, {
                    percent: null == Chunk37234 ? true : Chunk37234.discount.amount
                  }) : Chunk388032.intl.string(Chunk388032.t.mr4K7O)
                },
                className: Chunk967655.premiumCta
              })]
            })} />}{Chunk780384 && Chunk704215 && <div>{<Chunk755721.zx className={Chunk967655.previewThemeButtonWide} color={Chunk755721.zx.Colors.PRIMARY} onClick={() => R()}>{Chunk388032.intl.string(Chunk388032.t["E+COuL"])}</Chunk755721.zx>}{<div className={Chunk967655.premiumTier2Divider} />}{<Chunk165583.ZP type={Chunk474936.cd.PREMIUM_CLIENT_THEME_SETTINGS_UPSELL} subscriptionTier={Chunk474936.Si.TIER_2} />}</div>}</Chunk504983.Z>}</Chunk705262.ZP>}{<Chunk481060.$i$ className={Chunk967655.divider} />}</div>
  };

function Z() {
  let e = (0, Chunk984802.A6)(),
    {
      theme: t,
      useForcedColors: n,
      gradientPreset: r
    } = (0, Chunk442837.cj)([Chunk210887.Z, Chunk607070.Z, Chunk514361.Z], () => ({
      theme: Chunk210887.Z.theme,
      useForcedColors: Chunk607070.Z.useForcedColors,
      gradientPreset: Chunk514361.Z.gradientPreset
    }));
  return exports !== Chunk981631.BRd.LIGHT ? null : <Chunk481060.j7V hideBorder={true} value={module && (0, Chunk780384.ap)(exports) && !require} disabled={exports !== Chunk981631.BRd.LIGHT || require || null != Chunk73800} onChange={Chunk857595.lq} className={Chunk967655.darkSidebarToggle}><span className={Chunk967655.title}>{Chunk388032.intl.string(Chunk388032.t.yF54Ki)}</span></Chunk481060.j7V>
}
let w = () => (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.isPreview) ? null : <Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t.qYXrkZ)} onClick={R} />