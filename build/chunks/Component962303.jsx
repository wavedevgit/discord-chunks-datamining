/** Chunk was on 90228 **/
/** chunk id: 962303, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  j: () => _
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544028 = require("./544028.js"),
  Chunk427157 = require("./427157.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk429707 = require("./429707.js"),
  Chunk274303 = require("./274303.js"),
  Chunk994125 = require("./994125.js"),
  Chunk347853 = require("./347853.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk877347 = require("./877347.js");

function _(e) {
  let t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
    n = (0, l.bG)([d.A], () => d.A.hidePersonalInformation),
    _ = (0, l.bG)([o.A], () => (0, i.Mw)(o.A.theme)),
    {
      multiAccountUsers: y
    } = (0, g.K)(),
    A = y.map(l => {
      let i = new c.A(l),
        o = i.id === (null == t ? true : t.id),
        d = l.tokenStatus === x.U.INVALID,
        u = n ? null : "#".concat(i.discriminator);
      return (0, a.jsx)(s.Drp, {
        id: i.id,
        focusedClassName: j.in,
        void_label: e => {
          let {
            isFocused: t
          } = e;
          return (0, a.jsxs)("div", {
            className: j.ci,
            children: [(0, a.jsx)(s.euF, {
              src: i.getAvatarURL(true, 40),
              size: s._3J.SIZE_24,
              "aria-label": l.username
            }), (0, a.jsxs)("div", {
              className: j.DD,
              children: [(0, a.jsx)(s.Text, {
                className: j.gE,
                variant: "text-sm/normal",
                children: p.Ay.getUserTag(i, {
                  mode: "username",
                  identifiable: n ? "never" : "always"
                })
              }), !i.hasUniqueUsername() && (0, a.jsx)(s.Text, {
                className: j.df,
                variant: "text-sm/normal",
                children: u
              })]
            }), o && (0, a.jsx)(s.yr3, {
              size: "sm",
              color: t ? r.A.unsafe_rawColors.WHITE.css : r.A.unsafe_rawColors.BRAND_500.css,
              secondaryColor: t && _ || t && !_ ? r.A.unsafe_rawColors.BRAND_500.css : r.A.unsafe_rawColors.WHITE.css,
              className: j.s0
            }), d && (0, a.jsx)(s.EpV, {
              color: r.A.unsafe_rawColors.RED_400.css,
              secondaryColor: t && _ || t && !_ ? r.A.unsafe_rawColors.BRAND_500.css : r.A.unsafe_rawColors.WHITE.css,
              size: "xs",
              className: j.s0
            })]
          })
        },
        action: () => {
          if (null == e || e(), d)(0, f.A)();
          else {
            var n;
            (n = i.id) !== (null == t ? true : t.id) && (m.default.track(b.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: b.JJy.USER_PROFILE
              }
            }), h.Mx(n))
          }
        }
      }, i.id)
    });
  return A.push((0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.bXX, {}), (0, a.jsx)(s.Drp, {
      id: "manage-accounts",
      label: v.intl.string(v.t.WbFpq4),
      action: () => {
        null == e || e(), (0, f.A)()
      }
    })]
  })), A
}