/** Chunk was on web.js **/
/** chunk id: 33154, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h,
  s: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk313201 = require("./313201.js"),
  Chunk823379 = require("./823379.js"),
  Chunk41776 = require("./41776.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk576385 = require("./576385.js"),
  m = function(e) {
    return e[e.CHAT = 0] = "CHAT", e[e.REACTIONS = 1] = "REACTIONS", e
  }({});
let h = e => {
  let {
    type: t,
    guild: m,
    closePopout: h,
    ctaRef: g
  } = e, E = (0, c.Dt)(), [b, y] = i.useState(false), O = (0, a.e7)([d.Z], () => d.Z.isLurking(m.id), [m.id]);
  i.useEffect(() => {
    b && !O && h()
  }, [b, O, h]);
  let v = null,
    S = p.intl.string(p.t.d7b1p6);
  switch (t) {
    case 0:
      v = p.intl.string(p.t.Xiwf1Q);
      break;
    case 1:
      v = p.intl.string(p.t.GXvlU9);
      break;
    default:
      return (0, u.vE)(t)
  }
  if (null == v) return null;
  let I = async () => {
    y(true);
    try {
      await l.Z.joinGuild(m.id, {
        source: f.vtS.CHAT_INPUT_BLOCKER
      }), h()
    } catch (e) {
      y(false)
    }
  };
  return (0, r.jsxs)(s.VqE, {
    className: _.container,
    "aria-labelledby": E,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: _.image,
      src: n(64395)
    }), (0, r.jsxs)("div", {
      className: _.content,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        id: E,
        children: v
      }), (0, r.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: S
      }), (0, r.jsxs)("div", {
        className: _.buttonContainer,
        children: [(0, r.jsx)(s.Button, {
          variant: "primary",
          text: p.intl.string(p.t["9VLmlZ"]),
          buttonRef: g,
          onClick: I,
          loading: b
        }), (0, r.jsx)(o.zx, {
          onClick: h,
          look: o.zx.Looks.BLANK,
          className: _.cancel,
          children: p.intl.string(p.t["2m+Sqk"])
        })]
      })]
    })]
  })
}