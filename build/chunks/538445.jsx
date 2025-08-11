/** Chunk was on 34779 **/
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
  Chunk906732 = require("./906732.js"),
  Chunk204418 = require("./204418.jsx"),
  Chunk879892 = require("./879892.js"),
  Chunk742409 = require("./742409.js"),
  Chunk970731 = require("./970731.js"),
  Chunk485386 = require("./485386.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk944888 = require("./944888.js"),
  Chunk234368 = require("./234368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk951078 = require("./951078.js"),
  Chunk183375 = require("./183375.js"),
  Chunk445648 = require("./445648.js"),
  Chunk128647 = require("./128647.js");

function N(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e, l = (null == t ? true : t.premiumProgressBarEnabled) === true ? g.DF.LEFT_TOP : g.DF.TOP_CENTER, N = l === g.DF.TOP_CENTER || l === g.DF.LEFT_TOP ? S[l] : "", {
    analyticsLocations: w
  } = (0, d.ZP)(u.Z.GUILD_BOOSTING_ENHANCED_ROLE_COLOR_COACHMARK), Z = i.useCallback(() => {
    (0, p.u)({
      analyticsLocation: {
        section: C.jXE.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK
      },
      numberOfBoostsToAdd: 1,
      analyticsLocations: w,
      guild: t
    })
  }, [t, w]), T = (0, a.e7)([b.default], () => b.default.getCurrentUser()), A = function(e) {
    let t = (0, a.e7)([m.Z], () => m.Z.getSortedRoles(e).find(_.YB));
    return (null == t ? true : t.colorStrings) != null ? t.colorStrings : {
      primaryColor: (0, s.Rf)(y.oC.primary_color),
      secondaryColor: (0, s.Rf)(y.oC.secondary_color),
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
  return <g.ZP asset={(0, r.jsxs)("div", {
      className: S.imageContainer,
      children: [null != T ? (0, r.jsx)("div", {
        className: S.messageContainer,
        children: (0, r.jsx)(f.l, {
          avatar: (0, r.jsx)(h.Z, {
            user: T,
            guildId: t.id,
            avatarSize: c.EFr.SIZE_40,
            "aria-hidden": true
          }),
          usernameStyle: R,
          usernameClassName: o()(D, x.animateGradient),
          username: O.ZP.getName(t.id, null, T),
          asset: (0, r.jsx)("img", {
            alt: "",
            src: I.Z
          })
        })
      }) : (0, r.jsx)("img", {
        alt: "",
        src: P.Z,
        className: S.image
      }), (0, r.jsx)(c.olH, {
        className: S.close,
        innerClassName: S.innerClose,
        onClick: () => null == n ? true : n(v.L.USER_DISMISS)
      })]
    })} header={(0, r.jsx)(c.Text, {
      variant: "text-md/semibold",
      children: E.intl.string(j.default.bw76aG)
    })} content={(0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: E.intl.string(j.default["/DTbiY"])
    })} buttonCTA={E.intl.string(E.t["oPAx7+"])} onClick={Z} className={o()(S.container, N)} caretPosition={l} markAsDismissed={n} />
}