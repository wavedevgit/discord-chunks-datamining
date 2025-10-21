/** Chunk was on 76215 **/
/** chunk id: 926563, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk527132 = require("./527132.js");

function b(e) {
  let {
    user: t,
    previewText: n,
    previewEmoji: b,
    previewStatus: g,
    placeHolderText: h,
    transitionState: S
  } = e, T = (0, a.ZP)(t.id);
  return (0, r.jsxs)(c.Z, {
    user: t,
    displayProfile: T,
    themeType: p.l.POPOUT,
    className: O.profilePreviewContainer,
    children: [(0, r.jsxs)("header", {
      children: [(0, r.jsx)(u.Z, {
        user: t,
        displayProfile: T,
        themeType: p.l.POPOUT
      }), (0, r.jsx)("div", {
        inert: true,
        children: (0, r.jsx)(o.Z, {
          user: t,
          displayProfile: T,
          themeType: p.l.POPOUT,
          previewStatus: g,
          className: O.avatar
        })
      }), (0, r.jsx)(m.Z, {
        user: t,
        themeType: p.l.POPOUT,
        previewText: n,
        previewEmoji: b,
        placeholderText: h,
        hasEntered: S === i.Dvm.ENTERED
      })]
    }), (null == T ? true : T.profileEffect) != null && (0, r.jsx)(l.Z, {
      skuId: T.profileEffect.skuId
    }), (0, r.jsx)("div", {
      className: O.usernameContainer,
      inert: true,
      children: (0, r.jsx)(d.Z, {
        user: t,
        nickname: f.ZP.getName(null, null, t),
        pronouns: null == T ? true : T.pronouns,
        tags: (0, r.jsx)(s.Z, {
          displayProfile: T,
          themeType: p.l.POPOUT
        })
      })
    })]
  })
}