/** Chunk was on web.js **/
/** chunk id: 64621, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk705738 = require("./705738.js"),
  Chunk425637 = require("./425637.js"),
  Chunk685741 = require("./685741.js");
let I = 200,
  T = 32,
  S = 30;

function A(e) {
  let {
    sourceType: t,
    children: n,
    user: A,
    targetElementRef: N
  } = e, {
    themeType: C
  } = (0, m.z)(), R = (0, h.T)({
    location: "UserProfilePopoutInteractionCoachmark"
  }), P = (0, a.e7)([p.default], () => {
    var e;
    return (null == (e = p.default.getCurrentUser()) ? true : e.id) === A.id
  }), w = (0, a.e7)([_.Z], () => _.Z.findActivity(A.id, e => {
    let {
      type: t
    } = e;
    return t === E.IIU.CUSTOM_STATUS
  })), D = () => !P && C === g.lY.POPOUT && (t === g.n_.AVATAR ? R && null == w : t === g.n_.STATUS ? R : t === g.n_.ACTIVITY && !R), [L, x] = i.useState(false);
  (0, c.Z)(() => x(true), D() ? I : null);
  let {
    asset: M,
    assetClassName: k,
    className: j,
    content: U,
    header: G,
    spacing: B,
    dismissibleContentType: V
  } = R ? {
    asset: v,
    assetClassName: y.profileImage,
    className: y.profileCoachmark,
    content: b.intl.string(b.t.HEGlIC),
    header: b.intl.string(b.t["R/RaKy"]),
    spacing: S,
    dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ALL
  } : {
    asset: O,
    assetClassName: true,
    className: y.activityCoachmark,
    content: b.intl.string(b.t.LQ32TU),
    header: b.intl.string(b.t.XDBiPT),
    spacing: T,
    dismissibleContentType: o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK_ACTIVITY
  }, F = (0, u.Nj)(o.z.USER_PROFILE_POPOUT_INTERACTION_COACHMARK), Z = L && !F ? [V] : [], [H, Y] = (0, d.US)(Z);
  return (0, r.jsx)(l.yRy, {
    targetElementRef: N,
    align: "center",
    position: t === g.n_.AVATAR ? "left" : "right",
    shouldShow: null != H,
    spacing: B,
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
          className: j,
          asset: (0, r.jsx)("img", {
            alt: "",
            src: M,
            className: k
          }),
          buttonCTA: b.intl.string(b.t["+IrDzM"]),
          buttonLayout: f._F.STACKED,
          buttonProps: {
            color: s.Tt.BRAND_INVERTED,
            size: s.zx.Sizes.SMALL
          },
          caretPosition: "right" === t ? f.DF.LEFT_CENTER : f.DF.RIGHT_CENTER,
          content: (0, r.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: U
          }),
          header: G,
          headerClassName: y.tooltipHeader,
          markAsDismissed: Y,
          onClick: n
        })
      })
    },
    children: () => n
  })
}