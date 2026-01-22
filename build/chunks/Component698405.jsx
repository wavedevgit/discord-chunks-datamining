/** Chunk was on web.js **/
/** chunk id: 698405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  w: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk915089 = require("./915089.js"),
  Chunk403362 = require("./403362.js"),
  Chunk857071 = require("./857071.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk270920 = require("./270920.js"),
  h = function(e) {
    return e[e.CHAT = 0] = "CHAT", e[e.REACTIONS = 1] = "REACTIONS", e
  }({});
let m = e => {
  let {
    type: t,
    guild: h,
    closePopout: m,
    ctaRef: g
  } = e, E = (0, c.GV)(), [b, y] = i.useState(false), O = (0, a.bG)([d.A], () => d.A.isLurking(h.id), [h.id]);
  i.useEffect(() => {
    b && !O && m()
  }, [b, O, m]);
  let A = null,
    v = p.intl.string(p.t.d7b1p6);
  switch (t) {
    case 0:
      A = p.intl.string(p.t.Xiwf1Q);
      break;
    case 1:
      A = p.intl.string(p.t.GXvlU9);
      break;
    default:
      return (0, u.xb)(t)
  }
  if (null == A) return null;
  let S = async () => {
    y(true);
    try {
      await l.A.joinGuild(h.id, {
        source: f.Q4z.CHAT_INPUT_BLOCKER
      }), m()
    } catch (e) {
      y(false)
    }
  };
  return (0, r.jsxs)(o.lGe, {
    className: _.kL,
    "aria-labelledby": E,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: _.Sl,
      src: n(303528)
    }), (0, r.jsxs)("div", {
      className: _.Qs,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        id: E,
        children: A
      }), (0, r.jsx)(o.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: v
      }), (0, r.jsxs)("div", {
        className: _.UD,
        children: [(0, r.jsx)(o.Button, {
          variant: "primary",
          text: p.intl.string(p.t["9VLmlZ"]),
          buttonRef: g,
          onClick: S,
          loading: b
        }), (0, r.jsx)(s.$n, {
          onClick: m,
          look: s.$n.Looks.BLANK,
          className: _.ZT,
          children: p.intl.string(p.t["2m+Sqk"])
        })]
      })]
    })]
  })
}