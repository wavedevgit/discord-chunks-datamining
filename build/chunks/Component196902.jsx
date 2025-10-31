/** Chunk was on 64982 **/
/** chunk id: 196902, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
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
  Chunk562915 = require("./562915.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764009 = require("./764009.js");
let x = function(e) {
  let {
    className: t,
    guildId: n,
    tag: i,
    badge: x,
    primaryColor: j,
    secondaryColor: v,
    isDisabled: _ = false
  } = e, C = (0, a.e7)([m.Z], () => m.Z.getProps().originalProfile), O = null != C && C.tag !== i;

  function y(e) {
    g.Z.updateGuildProfile(n, {
      tag: e
    })
  }
  return (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsx)(o.gNt, {
      label: h.intl.string(f.default["tN+8pD"]),
      children: e => (0, r.jsxs)("div", {
        className: b.tagContainer,
        children: [(0, r.jsx)("div", {
          className: b.tagInputContainer,
          children: (0, r.jsx)(s.Is, {
            id: e.controlId,
            className: b.tagInputWrapper,
            inputClassName: l()(b.tagInput, "heading-sm/semibold"),
            maxLength: 4,
            autoFocus: true,
            placeholder: "WUMP",
            prefixElement: (0, r.jsx)(c.v, {
              badge: x,
              width: 40,
              height: 40,
              primaryTintColor: j,
              secondaryTintColor: v
            }),
            disabled: _,
            value: null != i ? i : "",
            onChange: y
          })
        }), (0, r.jsx)("div", {
          className: b.tagTooltip,
          children: (0, r.jsx)(o.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: h.intl.string(f.default.CrHXHt)
          })
        })]
      })
    }), O && (0, r.jsx)(d.Z, {
      className: b.tagChangeInfoBox,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: h.intl.format(f.default["4ZKDXq"], {
          articleUrl: u.Z.getArticleURL(p.BhN.SERVER_TAGS)
        })
      })
    })]
  })
}