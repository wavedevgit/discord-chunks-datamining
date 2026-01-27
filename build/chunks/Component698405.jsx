/** Chunk was on 7034 **/
/** chunk id: 698405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b,
  w: () => g
}), require("./896048.js");
var i, Chunk627968 = require("./627968.js"),
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
  g = ((i = {})[i.CHAT = 0] = "CHAT", i[i.REACTIONS = 1] = "REACTIONS", i);
let b = e => {
  let {
    type: t,
    guild: i,
    closePopout: g,
    ctaRef: b
  } = e, y = (0, c.GV)(), [O, v] = r.useState(false), j = (0, o.bG)([p.A], () => p.A.isLurking(i.id), [i.id]);
  r.useEffect(() => {
    O && !j && g()
  }, [O, j, g]);
  let A = null,
    T = m.intl.string(m.t.d7b1p6);
  switch (t) {
    case 0:
      A = m.intl.string(m.t.Xiwf1Q);
      break;
    case 1:
      A = m.intl.string(m.t.GXvlU9);
      break;
    default:
      return (0, d.xb)(t)
  }
  if (null == A) return null;
  let E = async () => {
    v(true);
    try {
      await u.A.joinGuild(i.id, {
        source: h.Q4z.CHAT_INPUT_BLOCKER
      }), g()
    } catch (e) {
      v(false)
    }
  };
  return (0, l.jsxs)(s.lGe, {
    className: f.kL,
    "aria-labelledby": y,
    children: [(0, l.jsx)("img", {
      alt: "",
      className: f.Sl,
      src: n(303528)
    }), (0, l.jsxs)("div", {
      className: f.Qs,
      children: [(0, l.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        id: y,
        children: A
      }), (0, l.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: T
      }), (0, l.jsxs)("div", {
        className: f.UD,
        children: [(0, l.jsx)(s.Button, {
          variant: "primary",
          text: m.intl.string(m.t["9VLmlZ"]),
          buttonRef: b,
          onClick: E,
          loading: O
        }), (0, l.jsx)(a.$n, {
          onClick: g,
          look: a.$n.Looks.BLANK,
          className: f.ZT,
          children: m.intl.string(m.t["2m+Sqk"])
        })]
      })]
    })]
  })
}