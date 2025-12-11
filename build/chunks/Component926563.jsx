/** Chunk was on 76215 **/
/** chunk id: 926563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk687158 = require("./687158.js"),
  Chunk899007 = require("./899007.jsx"),
  Chunk648052 = require("./648052.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk502762 = require("./502762.jsx"),
  Chunk530 = require("./530.jsx"),
  Chunk4517 = require("./4517.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk440674 = require("./440674.js");

function b(e) {
  var t;
  let {
    user: n,
    previewText: b,
    previewEmoji: h,
    previewStatus: S,
    placeHolderText: T,
    transitionState: v
  } = e, j = (0, a.ZP)(n.id), P = null != b && "" !== b || null != h ? O.intl.formatToPlainString(O.t.UpF5Qa, {
    emoji: null != (t = null == h ? true : h.name) ? t : "",
    status: b
  }) : "".concat(O.intl.string(O.t.EVV6uZ), ": ").concat(T);
  return (0, r.jsx)("div", {
    role: "img",
    "aria-label": P,
    children: (0, r.jsxs)(c.Z, {
      user: n,
      displayProfile: j,
      themeType: p.l.POPOUT,
      className: g.profilePreviewContainer,
      "aria-hidden": "true",
      children: [(0, r.jsxs)("header", {
        children: [(0, r.jsx)(s.Z, {
          user: n,
          displayProfile: j,
          themeType: p.l.POPOUT
        }), (0, r.jsx)("div", {
          inert: true,
          children: (0, r.jsx)(o.Z, {
            user: n,
            displayProfile: j,
            themeType: p.l.POPOUT,
            previewStatus: S,
            className: g.avatar
          })
        }), (0, r.jsx)(m.Z, {
          user: n,
          themeType: p.l.POPOUT,
          previewText: b,
          previewEmoji: h,
          placeholderText: T,
          hasEntered: v === i.Dvm.ENTERED
        })]
      }), (null == j ? true : j.profileEffect) != null && (0, r.jsx)(l.Z, {
        skuId: j.profileEffect.skuId
      }), (0, r.jsx)("div", {
        className: g.usernameContainer,
        inert: true,
        children: (0, r.jsx)(d.Z, {
          user: n,
          nickname: f.ZP.getName(null, null, n),
          pronouns: null == j ? true : j.pronouns,
          tags: (0, r.jsx)(u.Z, {
            displayProfile: j,
            themeType: p.l.POPOUT
          })
        })
      })]
    })
  })
}