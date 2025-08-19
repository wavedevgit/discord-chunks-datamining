/** Chunk was on 38626 **/
/** chunk id: 33154, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  s: () => g
}), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
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
  Chunk576385 = require("./576385.js"),
  g = ((i = {})[i.CHAT = 0] = "CHAT", i[i.REACTIONS = 1] = "REACTIONS", i);
let b = e => {
  let {
    type: t,
    guild: i,
    closePopout: g,
    ctaRef: b
  } = e, j = (0, u.Dt)(), [v, O] = r.useState(false), y = (0, o.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
  r.useEffect(() => {
    v && !y && g()
  }, [v, y, g]);
  let T = null,
    x = m.intl.string(m.t.d7b1p6);
  switch (t) {
    case 0:
      T = m.intl.string(m.t.Xiwf1d);
      break;
    case 1:
      T = m.intl.string(m.t.GXvlU1);
      break;
    default:
      return (0, d.vE)(t)
  }
  if (null == T) return null;
  let S = async () => {
    O(true);
    try {
      await c.Z.joinGuild(i.id, {
        source: p.vtS.CHAT_INPUT_BLOCKER
      }), g()
    } catch (e) {
      O(false)
    }
  };
  return (0, l.jsxs)(s.VqE, {
    className: f.container,
    "aria-labelledby": j,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: f.image,
      src: n(64395)
    }), (0, l.jsxs)("div", {
      className: f.content,
      children: [(0, l.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        id: j,
        children: T
      }), (0, l.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: x
      }), (0, l.jsxs)("div", {
        className: f.buttonContainer,
        children: [(0, l.jsx)(s.zxk, {
          variant: "primary",
          text: m.intl.string(m.t["9VLmlZ"]),
          buttonRef: b,
          onClick: S,
          loading: v
        }), (0, l.jsx)(a.zx, {
          onClick: g,
          look: a.zx.Looks.BLANK,
          className: f.cancel,
          children: m.intl.string(m.t["2m+Sqq"])
        })]
      })]
    })]
  })
}