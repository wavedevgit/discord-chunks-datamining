/** Chunk was on 31649 **/
/** chunk id: 926563, original params: t,e,n (module,exports,require) **/
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
  Chunk580792 = require("./580792.js");

function b(t) {
  let {
    user: e,
    previewText: n,
    previewEmoji: b,
    previewStatus: S,
    placeHolderText: g,
    transitionState: j,
    label: O
  } = t, v = (0, i.ZP)(e.id);
  return (0, l.jsxs)(c.Z, {
    user: e,
    displayProfile: v,
    themeType: p.l.POPOUT,
    className: h.profilePreviewContainer,
    children: [(0, l.jsxs)("header", {
      children: [(0, l.jsx)(u.Z, {
        user: e,
        displayProfile: v,
        themeType: p.l.POPOUT
      }), (0, l.jsx)("div", {
        inert: true,
        children: (0, l.jsx)(o.Z, {
          user: e,
          displayProfile: v,
          themeType: p.l.POPOUT,
          previewStatus: S,
          className: h.avatar
        })
      }), (0, l.jsx)(m.Z, {
        location: "CustomStatusUserProfilePreview",
        user: e,
        themeType: p.l.POPOUT,
        previewText: n,
        previewEmoji: b,
        placeholderText: g,
        hasEntered: j === a.Dvm.ENTERED,
        previewLabel: O
      })]
    }), (null == v ? true : v.profileEffect) != null && (0, l.jsx)(r.Z, {
      profileEffectId: v.profileEffect.id
    }), (0, l.jsx)("div", {
      className: h.usernameContainer,
      inert: true,
      children: (0, l.jsx)(d.Z, {
        user: e,
        nickname: f.ZP.getName(null, null, e),
        pronouns: null == v ? true : v.pronouns,
        tags: (0, l.jsx)(s.Z, {
          displayProfile: v,
          themeType: p.l.POPOUT
        })
      })
    })]
  })
}