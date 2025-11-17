/** Chunk was on 91394 **/
/** chunk id: 474376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => _
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
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
  Chunk681285 = require("./681285.js");

function _(e) {
  let t = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
    n = (0, l.e7)([d.Z], () => d.Z.hidePersonalInformation),
    _ = (0, l.e7)([o.Z], () => (0, r.wj)(o.Z.theme)),
    {
      multiAccountUsers: y
    } = (0, g.L)(),
    C = y.map(l => {
      let r = new c.Z(l),
        o = r.id === (null == t ? true : t.id),
        d = l.tokenStatus === x.q.INVALID,
        u = n ? null : "#".concat(r.discriminator);
      return (0, a.jsx)(i.sNh, {
        id: r.id,
        focusedClassName: j.focused,
        label: e => {
          let {
            isFocused: t
          } = e;
          return (0, a.jsxs)("div", {
            className: j.userMenuItem,
            children: [(0, a.jsx)(i.qEK, {
              src: r.getAvatarURL(true, 40),
              size: i.EFr.SIZE_24,
              "aria-label": l.username
            }), (0, a.jsxs)("div", {
              className: j.userMenuUsername,
              children: [(0, a.jsx)(i.Text, {
                className: j.userMenuText,
                variant: "text-sm/normal",
                children: p.ZP.getUserTag(r, {
                  mode: "username",
                  identifiable: n ? "never" : "always"
                })
              }), !r.hasUniqueUsername() && (0, a.jsx)(i.Text, {
                className: j.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: u
              })]
            }), o && (0, a.jsx)(i.owK, {
              size: "sm",
              color: (0, s.Lq)(t ? b.Ilk.WHITE_500 : b.Ilk.BRAND_500),
              secondaryColor: (0, s.Lq)(t && _ || t && !_ ? b.Ilk.BRAND_500 : b.Ilk.WHITE_500),
              className: j.activeIcon
            }), d && (0, a.jsx)(i.Mgn, {
              color: (0, s.Lq)(b.Ilk.RED_400),
              secondaryColor: (0, s.Lq)(t && _ || t && !_ ? b.Ilk.BRAND_500 : b.Ilk.WHITE_500),
              size: "xs",
              className: j.activeIcon
            })]
          })
        },
        action: () => {
          if (null == e || e(), d)(0, f.Z)();
          else {
            var n;
            (n = r.id) !== (null == t ? true : t.id) && (m.default.track(b.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: b.jXE.USER_PROFILE
              }
            }), h.yD(n))
          }
        }
      }, r.id)
    });
  return C.push((0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.Clw, {}), (0, a.jsx)(i.sNh, {
      id: "manage-accounts",
      label: v.intl.string(v.t.WbFpq4),
      action: () => {
        null == e || e(), (0, f.Z)()
      }
    })]
  })), C
}