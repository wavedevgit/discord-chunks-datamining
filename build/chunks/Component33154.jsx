/** Chunk was on web.js **/
/** chunk id: 33154, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  s: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk313201 = require("./313201.js"),
  Chunk823379 = require("./823379.js"),
  Chunk41776 = require("./41776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk29030 = require("./29030.js"),
  h = function(e) {
    return e[e.CHAT = 0] = "CHAT", e[e.REACTIONS = 1] = "REACTIONS", e
  }({});
let m = e => {
  let {
    type: t,
    guild: h,
    closePopout: m,
    ctaRef: g
  } = e, E = (0, c.Dt)(), [b, y] = i.useState(false), O = (0, a.e7)([d.Z], () => d.Z.isLurking(h.id), [h.id]);
  i.useEffect(() => {
    b && !O && m()
  }, [b, O, m]);
  let v = null,
    I = _.intl.string(_.t.d7b1p6);
  switch (t) {
    case 0:
      v = _.intl.string(_.t.Xiwf1Q);
      break;
    case 1:
      v = _.intl.string(_.t.GXvlU9);
      break;
    default:
      return (0, u.vE)(t)
  }
  if (null == v) return null;
  let T = async () => {
    y(true);
    try {
      await l.Z.joinGuild(h.id, {
        source: f.vtS.CHAT_INPUT_BLOCKER
      }), m()
    } catch (e) {
      y(false)
    }
  };
  return (0, r.jsxs)(s.VqE, {
    className: p.container,
    "aria-labelledby": E,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: p.image,
      src: n(64395)
    }), (0, r.jsxs)("div", {
      className: p.content,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        id: E,
        children: v
      }), (0, r.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: I
      }), (0, r.jsxs)("div", {
        className: p.buttonContainer,
        children: [(0, r.jsx)(s.Button, {
          variant: "primary",
          text: _.intl.string(_.t["9VLmlZ"]),
          buttonRef: g,
          onClick: T,
          loading: b
        }), (0, r.jsx)(o.zx, {
          onClick: m,
          look: o.zx.Looks.BLANK,
          className: p.cancel,
          children: _.intl.string(_.t["2m+Sqk"])
        })]
      })]
    })]
  })
}