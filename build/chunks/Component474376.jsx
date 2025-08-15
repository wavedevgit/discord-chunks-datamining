/** Chunk was on 30202 **/
/** chunk id: 474376, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => E
}), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function E(e) {
  let t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
    n = (0, r.e7)([d.Z], () => d.Z.hidePersonalInformation),
    E = (0, r.e7)([o.Z], () => (0, s.wj)(o.Z.theme)),
    {
      multiAccountUsers: C
    } = (0, f.L)(),
    O = C.map(r => {
      let s = new c.Z(r),
        o = s.id === (null == t ? true : t.id),
        d = r.tokenStatus === h.q.INVALID,
        u = n ? null : "#".concat(s.discriminator);
      return (0, i.jsx)(a.sNh, {
        id: s.id,
        focusedClassName: j.focused,
        label: e => {
          let {
            isFocused: t
          } = e;
          return (0, i.jsxs)("div", {
            className: j.userMenuItem,
            children: [(0, i.jsx)(a.qEK, {
              src: s.getAvatarURL(true, 40),
              size: a.EFr.SIZE_24,
              "aria-label": r.username
            }), (0, i.jsxs)("div", {
              className: j.userMenuUsername,
              children: [(0, i.jsx)(a.Text, {
                className: j.userMenuText,
                variant: "text-sm/normal",
                children: p.ZP.getUserTag(s, {
                  mode: "username",
                  identifiable: n ? "never" : "always"
                })
              }), !s.hasUniqueUsername() && (0, i.jsx)(a.Text, {
                className: j.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: u
              })]
            }), o && (0, i.jsx)(a.owK, {
              size: "sm",
              color: (0, l.Lq)(t ? x.Ilk.WHITE_500 : x.Ilk.BRAND_500),
              secondaryColor: (0, l.Lq)(t && E || t && !E ? x.Ilk.BRAND_500 : x.Ilk.WHITE_500),
              className: j.activeIcon
            }), d && (0, i.jsx)(a.Mgn, {
              color: (0, l.Lq)(x.Ilk.RED_400),
              secondaryColor: (0, l.Lq)(t && E || t && !E ? x.Ilk.BRAND_500 : x.Ilk.WHITE_500),
              size: "xs",
              className: j.activeIcon
            })]
          })
        },
        action: () => {
          if (null == e || e(), d)(0, b.Z)();
          else {
            var n;
            (n = s.id) !== (null == t ? true : t.id) && (m.default.track(x.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: x.jXE.USER_PROFILE
              }
            }), g.yD(n))
          }
        }
      }, s.id)
    });
  return O.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.Clw, {}), (0, i.jsx)(a.sNh, {
      id: "manage-accounts",
      label: _.intl.string(_.t.WbFpq6),
      action: () => {
        null == e || e(), (0, b.Z)()
      }
    })]
  })), O
}