/** Chunk was on 40390 **/
/** chunk id: 251871, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk170692 = require("./170692.js");

function N(t) {
  var n;
  let {
    onClose: e,
    transitionState: N,
    guildId: f
  } = t, v = (0, s.e7)([u.default], () => u.default.getId()), E = (0, s.e7)([h.ZP], () => h.ZP.getMember(f, v), [f, v]), I = (0, s.e7)([x.Z], () => x.Z.getGuild(f), [f]), R = null != (n = null == I ? true : I.name) ? n : "", Z = (0, C.no)(E), {
    analyticsLocations: z
  } = (0, l.ZP)(d.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [M, O] = (0, p.ww)({
    guildId: f,
    analyticsLocations: z,
    openWithoutBackstack: true
  }), P = Z.has(j.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? k.intl.string(k.t.SpDXIy) : k.intl.string(k.t["QRN+Sk"]);
  O || (P = k.intl.string(k.t.FFj5Dg));
  let T = O ? k.intl.string(k.t["/PGQf3"]) : k.intl.string(k.t.WikgZ2);
  return ((0, o.ZP)(() => {
    _.default.track(m.rMx.OPEN_MODAL, {
      type: g.dc,
      guild_id: f,
      other_user_id: v
    })
  }), r.useEffect(() => {
    if (null == I) return void e()
  }, [I, e]), null == I) ? null : (0, i.jsxs)(a.Y0X, {
    transitionState: N,
    size: a.CgR.SMALL,
    parentComponent: "AutomodUserProfileQuarantineAlert",
    children: [(0, i.jsx)(a.xBx, {
      separator: false,
      children: (0, i.jsxs)("div", {
        className: A.headerContainer,
        children: [(0, i.jsxs)("div", {
          className: A.guildIconContainer,
          children: [(0, i.jsx)(c.Z, {
            guild: I,
            size: c.Z.Sizes.LARGER
          }), (0, i.jsx)("div", {
            className: A.statusContainer,
            children: (0, i.jsx)(a.ics, {
              size: "md",
              color: "currentColor",
              className: A.statusIcon
            })
          })]
        }), (0, i.jsx)(a.X6q, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: k.intl.format(k.t.kcYdTk, {
            guildName: R
          })
        })]
      })
    }), (0, i.jsx)(a.hzk, {
      children: (0, i.jsx)("div", {
        className: A.descriptionContainer,
        children: (0, i.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: P
        })
      })
    }), (0, i.jsx)(a.mzw, {
      children: (0, i.jsxs)(a.hE2, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(a.zxk, {
          variant: "primary",
          text: T,
          onClick: () => {
            M(), e()
          }
        }), (0, i.jsx)(a.zxk, {
          variant: "secondary",
          text: k.intl.string(k.t["ETE/oK"]),
          onClick: e
        })]
      })
    })]
  })
}