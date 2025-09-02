/** Chunk was on web.js **/
/** chunk id: 474376, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => O
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function O(e) {
  let t = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
    n = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
    O = (0, i.e7)([l.Z], () => (0, a.wj)(l.Z.theme)),
    {
      multiAccountUsers: v
    } = (0, m.L)(),
    I = e => {
      e !== (null == t ? true : t.id) && (f.default.track(E.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
        location: {
          section: E.jXE.USER_PROFILE
        }
      }), p.yD(e))
    },
    S = v.map(i => {
      let a = new c.Z(i),
        l = a.id === (null == t ? true : t.id),
        u = i.tokenStatus === h.q.INVALID,
        d = n ? null : "#".concat(a.discriminator);
      return (0, r.jsx)(o.sNh, {
        id: a.id,
        focusedClassName: y.focused,
        label: e => {
          let {
            isFocused: t
          } = e;
          return (0, r.jsxs)("div", {
            className: y.userMenuItem,
            children: [(0, r.jsx)(o.qEK, {
              src: a.getAvatarURL(true, 40),
              size: o.EFr.SIZE_24,
              "aria-label": i.username
            }), (0, r.jsxs)("div", {
              className: y.userMenuUsername,
              children: [(0, r.jsx)(o.Text, {
                className: y.userMenuText,
                variant: "text-sm/normal",
                children: _.ZP.getUserTag(a, {
                  mode: "username",
                  identifiable: n ? "never" : "always"
                })
              }), !a.hasUniqueUsername() && (0, r.jsx)(o.Text, {
                className: y.userMenuDiscriminator,
                variant: "text-sm/normal",
                children: d
              })]
            }), l && (0, r.jsx)(o.owK, {
              size: "sm",
              color: (0, s.Lq)(t ? E.Ilk.WHITE_500 : E.Ilk.BRAND_500),
              secondaryColor: (0, s.Lq)(t && O || t && !O ? E.Ilk.BRAND_500 : E.Ilk.WHITE_500),
              className: y.activeIcon
            }), u && (0, r.jsx)(o.Mgn, {
              color: (0, s.Lq)(E.Ilk.RED_400),
              secondaryColor: (0, s.Lq)(t && O || t && !O ? E.Ilk.BRAND_500 : E.Ilk.WHITE_500),
              size: "xs",
              className: y.activeIcon
            })]
          })
        },
        action: () => {
          null == e || e(), u ? (0, g.Z)() : I(a.id)
        }
      }, a.id)
    });
  return S.push((0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.Clw, {}), (0, r.jsx)(o.sNh, {
      id: "manage-accounts",
      label: b.intl.string(b.t.WbFpq6),
      action: () => {
        null == e || e(), (0, g.Z)()
      }
    })]
  })), S
}