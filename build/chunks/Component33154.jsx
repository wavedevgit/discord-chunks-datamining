/** Chunk was on 38626 **/
/** chunk id: 33154, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  s: () => g
}), require("./388685.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  } = e, j = (0, u.Dt)(), [O, y] = l.useState(false), v = (0, o.e7)([h.Z], () => h.Z.isLurking(i.id), [i.id]);
  l.useEffect(() => {
    O && !v && g()
  }, [O, v, g]);
  let T = null,
    S = m.intl.string(m.t.d7b1p6);
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
  let x = async () => {
    y(true);
    try {
      await c.Z.joinGuild(i.id, {
        source: p.vtS.CHAT_INPUT_BLOCKER
      }), g()
    } catch (e) {
      y(false)
    }
  };
  return (0, r.jsxs)(s.VqE, {
    className: f.container,
    "aria-labelledby": j,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: f.image,
      src: n(64395)
    }), (0, r.jsxs)("div", {
      className: f.content,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-md/semibold",
        id: j,
        children: T
      }), (0, r.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: S
      }), (0, r.jsxs)("div", {
        className: f.buttonContainer,
        children: [(0, r.jsx)(s.zxk, {
          variant: "primary",
          text: m.intl.string(m.t["9VLmlZ"]),
          buttonRef: b,
          onClick: x,
          loading: O
        }), (0, r.jsx)(a.zx, {
          onClick: g,
          look: a.zx.Looks.BLANK,
          className: f.cancel,
          children: m.intl.string(m.t["2m+Sqq"])
        })]
      })]
    })]
  })
}