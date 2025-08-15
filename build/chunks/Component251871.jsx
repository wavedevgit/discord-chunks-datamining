/** Chunk was on 40390 **/
/** chunk id: 251871, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk715903 = require("./715903.js"),
  Chunk295474 = require("./295474.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk276575 = require("./276575.js");

function E(t) {
  var n;
  let {
    onClose: e,
    transitionState: E,
    guildId: m
  } = t, k = (0, l.e7)([c.default], () => c.default.getId()), p = (0, l.e7)([_.ZP], () => _.ZP.getMember(m, k), [m, k]), v = (0, l.e7)([h.Z], () => h.Z.getGuild(m), [m]), O = null != (n = null == v ? true : v.name) ? n : "", U = (0, f.no)(p), {
    analyticsLocations: j
  } = (0, o.ZP)(d.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [P, R] = (0, N.ww)({
    guildId: m,
    analyticsLocations: j,
    openWithoutBackstack: true
  }), M = U.has(A.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? C.intl.string(C.t.SpDXIy) : C.intl.string(C.t["QRN+Sk"]);
  R || (M = C.intl.string(C.t.FFj5Dg));
  let T = R ? C.intl.string(C.t["/PGQf3"]) : C.intl.string(C.t.WikgZ2);
  return ((0, s.ZP)(() => {
    g.default.track(x.rMx.OPEN_MODAL, {
      type: I.dc,
      guild_id: m,
      other_user_id: k
    })
  }), r.useEffect(() => {
    if (null == v) return void e()
  }, [v, e]), null == v) ? null : (0, i.jsxs)(a.Y0X, {
    transitionState: E,
    size: a.CgR.SMALL,
    parentComponent: "AutomodUserProfileQuarantineAlert",
    children: [(0, i.jsx)(a.xBx, {
      separator: false,
      children: (0, i.jsxs)("div", {
        className: Z.headerContainer,
        children: [(0, i.jsxs)("div", {
          className: Z.guildIconContainer,
          children: [(0, i.jsx)(u.Z, {
            guild: v,
            size: u.Z.Sizes.LARGER
          }), (0, i.jsx)("div", {
            className: Z.statusContainer,
            children: (0, i.jsx)(a.ics, {
              size: "md",
              color: "currentColor",
              className: Z.statusIcon
            })
          })]
        }), (0, i.jsx)(a.X6q, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: C.intl.format(C.t.kcYdTk, {
            guildName: O
          })
        })]
      })
    }), (0, i.jsx)(a.hzk, {
      children: (0, i.jsx)("div", {
        className: Z.descriptionContainer,
        children: (0, i.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: M
        })
      })
    }), (0, i.jsx)(a.mzw, {
      children: (0, i.jsxs)(a.hE2, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(a.zxk, {
          variant: "primary",
          text: T,
          onClick: () => {
            P(), e()
          }
        }), (0, i.jsx)(a.zxk, {
          variant: "secondary",
          text: C.intl.string(C.t["ETE/oK"]),
          onClick: e
        })]
      })
    })]
  })
}