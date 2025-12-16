/** Chunk was on 29725 **/
/** chunk id: 474376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => y
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk598077 = require("./598077.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk480387 = require("./480387.js"),
  Chunk726745 = require("./726745.js"),
  Chunk251423 = require("./251423.js"),
  Chunk383832 = require("./383832.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk608125 = require("./608125.js");

function y(e) {
  let t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
    n = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
    y = (0, r.e7)([o.Z], () => (0, i.wj)(o.Z.theme)),
    {
      multiAccountUsers: C
    } = (0, x.L)(),
    _ = C.map(r => {
      let i = new c.Z(r),
        o = i.id === (null == t ? true : t.id),
        d = r.tokenStatus === f.q.INVALID,
        u = n ? null : "#".concat(i.discriminator);
      return (0, a.jsx)(s.sNh, {
        id: i.id,
        focusedClassName: j.focused,
        label: e => {
          let {
            isFocused: t
          } = e;
          return (0, a.jsxs)("div", {
            className: j.userMenuItem,
            children: [(0, a.jsx)(s.qEK, {
              src: i.getAvatarURL(true, 40),
              size: s.EFr.SIZE_24,
              "aria-label": r.username
            }), (0, a.jsxs)("div", {
              className: j.userMenuUsername,
              children: [(0, a.jsx)(s.Text, {
                className: j.userMenuText,
                variant: "text-sm/normal",
                children: p.ZP.getUserTag(i, {
                  mode: "username",
                  identifiable: n ? "never" : "always"
                })
              }), !i.hasUniqueUsername() && (0, a.jsx)(s.Text, {
                className: j.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: u
              })]
            }), o && (0, a.jsx)(s.owK, {
              size: "sm",
              color: t ? l.Z.unsafe_rawColors.WHITE_500.css : l.Z.unsafe_rawColors.BRAND_500.css,
              secondaryColor: t && y || t && !y ? l.Z.unsafe_rawColors.BRAND_500.css : l.Z.unsafe_rawColors.WHITE_500.css,
              className: j.activeIcon
            }), d && (0, a.jsx)(s.Mgn, {
              color: l.Z.unsafe_rawColors.RED_400.css,
              secondaryColor: t && y || t && !y ? l.Z.unsafe_rawColors.BRAND_500.css : l.Z.unsafe_rawColors.WHITE_500.css,
              size: "xs",
              className: j.activeIcon
            })]
          })
        },
        action: () => {
          if (null == e || e(), d)(0, b.Z)();
          else {
            var n;
            (n = i.id) !== (null == t ? true : t.id) && (m.default.track(g.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: g.jXE.USER_PROFILE
              }
            }), h.yD(n))
          }
        }
      }, i.id)
    });
  return _.push((0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.Clw, {}), (0, a.jsx)(s.sNh, {
      id: "manage-accounts",
      label: v.intl.string(v.t.WbFpq4),
      action: () => {
        null == e || e(), (0, b.Z)()
      }
    })]
  })), _
}