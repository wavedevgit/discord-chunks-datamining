/** Chunk was on 91488 **/
/** chunk id: 538445, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk204418 = require("./204418.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk742409 = require("./742409.jsx"),
  Chunk970731 = require("./970731.jsx"),
  Chunk485386 = require("./485386.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk944888 = require("./944888.js"),
  Chunk234368 = require("./234368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk49777 = require("./49777.js"),
  Chunk842926 = require("./842926.js"),
  Chunk445648 = require("./445648.js"),
  Chunk128647 = require("./128647.js");

function N(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e, l = (null == t ? true : t.premiumProgressBarEnabled) === true ? g.DF.LEFT_TOP : g.DF.TOP_CENTER, N = l === g.DF.TOP_CENTER || l === g.DF.LEFT_TOP ? E[l] : "", {
    analyticsLocations: Z
  } = (0, d.ZP)(u.Z.GUILD_BOOSTING_ENHANCED_ROLE_COLOR_COACHMARK), w = i.useCallback(() => {
    (0, h.u)({
      analyticsLocation: {
        section: v.jXE.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: Z,
      guild: t
    })
  }, [t, Z]), T = (0, s.e7)([b.default], () => b.default.getCurrentUser()), A = function(e) {
    let t = (0, s.e7)([m.Z], () => m.Z.getSortedRoles(e).find(y.YB));
    return (null == t ? true : t.colorStrings) != null ? t.colorStrings : {
      primaryColor: (0, a.Rf)(_.oC.primary_color),
      secondaryColor: (0, a.Rf)(_.oC.secondary_color),
      tertiaryColor: null
    }
  }(t.id), {
    gradientStyle: R,
    gradientClassname: D
  } = (0, c.Icv)({
    colorStrings: A,
    roleStyle: "username",
    includeConvenienceGlow: true,
    animateGradient: true
  });
  return (0, r.jsx)(g.ZP, {
    asset: (0, r.jsxs)("div", {
      className: E.imageContainer,
      children: [null != T ? (0, r.jsx)("div", {
        className: E.messageContainer,
        children: (0, r.jsx)(f.l, {
          avatar: (0, r.jsx)(p.Z, {
            user: T,
            guildId: t.id,
            avatarSize: c.EFr.SIZE_40,
            "aria-hidden": true
          }),
          usernameStyle: R,
          usernameClassName: o()(D, S.animateGradient),
          username: O.ZP.getName(t.id, null, T),
          asset: (0, r.jsx)("img", {
            alt: "",
            src: P.Z
          })
        })
      }) : (0, r.jsx)("img", {
        alt: "",
        src: I.Z,
        className: E.image
      }), (0, r.jsx)(c.olH, {
        className: E.close,
        innerClassName: E.innerClose,
        onClick: () => null == n ? true : n(j.L.USER_DISMISS)
      })]
    }),
    header: (0, r.jsx)(c.Text, {
      variant: "text-md/semibold",
      children: C.intl.string(x.default.bw76aG)
    }),
    content: (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: C.intl.string(x.default["/DTbiY"])
    }),
    buttonCTA: C.intl.string(C.t["oPAx7+"]),
    onClick: w,
    className: o()(E.container, N),
    caretPosition: l,
    markAsDismissed: n
  })
}