/** Chunk was on web.js **/
/** chunk id: 64621, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk980591 = require("./980591.js"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk970731 = require("./970731.jsx"),
  Chunk158776 = require("./158776.js"),
  Chunk594174 = require("./594174.js"),
  Chunk81570 = require("./81570.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk705738 = require("./705738.js"),
  Chunk425637 = require("./425637.js"),
  Chunk685741 = require("./685741.js");
let T = 200,
  S = 32,
  A = 30;

function N(e) {
  let {
    sourceType: t,
    children: n,
    user: N,
    targetElementRef: C
  } = e, {
    themeType: R
  } = (0, m.z)(), P = (0, h.T)({
    location: "UserProfilePopoutInteractionCoachmark"
  }), w = (0, a.e7)([p.default], () => {
    var e;
    return (null == (e = p.default.getCurrentUser()) ? true : e.id) === N.id
  }), D = (0, a.e7)([_.Z], () => _.Z.findActivity(N.id, e => {
    let {
      type: t
    } = e;
    return t === E.IIU.CUSTOM_STATUS
  })), L = () => !w && R === b.l.POPOUT && (t === g.n_.AVATAR ? P && null == D : t === g.n_.STATUS ? P : t === g.n_.ACTIVITY && !P), [x, M] = i.useState(false);
  (0, c.Z)(() => M(true), L() ? T : null);
  let {
    asset: k,
    assetClassName: j,
    className: U,
    content: G,
    header: B,
    spacing: V,
    dismissibleContentType: F
  } = P ? {
    asset: I,
    assetClassName: O.profileImage,
    className: O.profileCoachmark,
    content: y.intl.string(y.t.HEGlIC),
    header: y.intl.string(y.t["R/RaKy"]),
    spacing: A,
    dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
  } : {
    asset: v,
    assetClassName: true,
    className: O.activityCoachmark,
    content: y.intl.string(y.t.LQ32TU),
    header: y.intl.string(y.t.XDBiPT),
    spacing: S,
    dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
  }, Z = (0, u.Nj)(o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK), H = x && !Z ? [F] : [], [Y, W] = (0, d.US)(H);
  return (0, r.jsx)(l.yRy, {
    targetElementRef: C,
    align: "center",
    position: t === g.n_.AVATAR ? "left" : "right",
    shouldShow: null != Y,
    spacing: V,
    renderPopout: e => {
      let {
        position: t,
        closePopout: n,
        setPopoutRef: i
      } = e;
      return (0, r.jsx)(l.VqE, {
        ref: e => {
          null == i || i(e)
        },
        children: (0, r.jsx)(f.ZP, {
          className: U,
          asset: (0, r.jsx)("img", {
            alt: "",
            src: k,
            className: j
          }),
          buttonCTA: y.intl.string(y.t["+IrDzM"]),
          buttonLayout: f._F.STACKED,
          buttonProps: {
            color: s.Tt.BRAND_INVERTED,
            size: s.zx.Sizes.SMALL
          },
          caretPosition: "right" === t ? f.DF.LEFT_CENTER : f.DF.RIGHT_CENTER,
          content: (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: G
          }),
          header: B,
          headerClassName: O.tooltipHeader,
          markAsDismissed: W,
          onClick: n
        })
      })
    },
    children: () => n
  })
}