/** Chunk was on 85362 **/
/** chunk id: 538445, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  } = e, l = (null == t ? true : t.premiumProgressBarEnabled) === true ? g.DF.LEFT_TOP : g.DF.TOP_CENTER, N = l === g.DF.TOP_CENTER || l === g.DF.LEFT_TOP ? x[l] : "", {
    analyticsLocations: w
  } = (0, d.ZP)(u.Z.GUILD_BOOSTING_ENHANCED_ROLE_COLOR_COACHMARK), Z = i.useCallback(() => {
    (0, f.u)({
      analyticsLocation: {
        section: v.jXE.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: w,
      guild: t
    })
  }, [t, w]), T = (0, s.e7)([b.default], () => b.default.getCurrentUser()), A = function(e) {
    let t = (0, s.e7)([m.Z], () => m.Z.getSortedRoles(e).find(O.YB));
    return (null == t ? true : t.colorStrings) != null ? t.colorStrings : {
      primaryColor: (0, a.Rf)(y.oC.primary_color),
      secondaryColor: (0, a.Rf)(y.oC.secondary_color),
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
      className: x.imageContainer,
      children: [null != T ? (0, r.jsx)("div", {
        className: x.messageContainer,
        children: (0, r.jsx)(h.l, {
          avatar: (0, r.jsx)(p.Z, {
            user: T,
            guildId: t.id,
            avatarSize: c.EFr.SIZE_40,
            "aria-hidden": true
          }),
          usernameStyle: R,
          usernameClassName: o()(D, S.animateGradient),
          username: _.ZP.getName(t.id, null, T),
          asset: (0, r.jsx)("img", {
            alt: "",
            src: I.Z
          })
        })
      }) : (0, r.jsx)("img", {
        alt: "",
        src: P.Z,
        className: x.image
      }), (0, r.jsx)(c.olH, {
        className: x.close,
        innerClassName: x.innerClose,
        onClick: () => null == n ? true : n(j.L.USER_DISMISS)
      })]
    }),
    header: (0, r.jsx)(c.Text, {
      variant: "text-md/semibold",
      children: E.intl.string(C.default.bw76aG)
    }),
    content: (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: E.intl.string(C.default["/DTbiY"])
    }),
    buttonCTA: E.intl.string(E.t["oPAx7+"]),
    onClick: Z,
    className: o()(x.container, N),
    caretPosition: l,
    markAsDismissed: n
  })
}