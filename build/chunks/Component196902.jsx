/** Chunk was on 29679 **/
/** chunk id: 196902, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk510918 = require("./510918.jsx"),
  Chunk494620 = require("./494620.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk755032 = require("./755032.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk565744 = require("./565744.js");
let b = function(e) {
  let {
    className: t,
    guildId: n,
    tag: i,
    badge: b,
    primaryColor: j,
    secondaryColor: _,
    isDisabled: v = false
  } = e, C = (0, s.e7)([m.Z], () => m.Z.getProps().originalProfile), O = null != C && C.tag !== i;
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(o.vwX, {
      className: x.sectionTitle,
      children: h.intl.string(f.default["tN+8pK"])
    }), (0, r.jsxs)("div", {
      className: x.tagContainer,
      children: [(0, r.jsx)("div", {
        className: x.tagInputContainer,
        children: (0, r.jsx)(a.Is, {
          className: x.tagInputWrapper,
          inputClassName: l()(x.tagInput, "heading-sm/semibold"),
          maxLength: 4,
          autoFocus: true,
          placeholder: "WUMP",
          prefixElement: (0, r.jsx)(c.v, {
            badge: b,
            width: 40,
            height: 40,
            primaryTintColor: j,
            secondaryTintColor: _
          }),
          disabled: v,
          value: null != i ? i : "",
          onChange: function(e) {
            g.Z.updateGuildProfile(n, {
              tag: e
            })
          }
        })
      }), (0, r.jsx)("div", {
        className: x.tagTooltip,
        children: (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: h.intl.string(f.default.CrHXHh)
        })
      })]
    }), O && (0, r.jsx)(d.Z, {
      className: x.tagChangeInfoBox,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: h.intl.format(f.default["4ZKDXl"], {
          articleUrl: u.Z.getArticleURL(p.BhN.SERVER_TAGS)
        })
      })
    })]
  })
}