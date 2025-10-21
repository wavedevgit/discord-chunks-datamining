/** Chunk was on 42483 **/
/** chunk id: 215292, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  F: () => L,
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk881052 = require("./881052.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk308250 = require("./308250.js");

function L(t) {
  let {
    createdGuildId: n,
    hasFooter: e = true,
    onClose: L,
    onChannelPromptCompleted: x,
    isSlideReady: T
  } = t, [E, h] = l.useState(""), [G, I] = l.useState(null), [D, y] = l.useState(false), U = (0, C.Dt)(), z = (0, a.e7)([u.Z], () => u.Z.getGuild(n), [n]), N = l.useRef(null);
  l.useEffect(() => {
    var t;
    T && (null == (t = N.current) || t.focus())
  }, [T]);
  let f = l.useCallback(async t => {
      if (t.preventDefault(), null == z) return;
      y(true), I(null);
      let n = p.ZP.getDefaultChannel(z.id);
      try {
        let t = g.intl.formatToPlainString(g.t.V4lepJ, {
          topic: E
        });
        await d.Z.createTextChannel(z.id, E, null == n ? true : n.parent_id, t), x()
      } catch (t) {
        I(new c.yZ(t))
      }
      y(false)
    }, [z, E, x]),
    v = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.Button, {
        variant: "primary",
        text: g.intl.string(g.t.i4jeWR),
        onClick: f,
        disabled: 0 === E.length,
        loading: D
      }), (0, i.jsx)(s.zx, {
        className: _.skipButton,
        look: s.zx.Looks.BLANK,
        size: s.zx.Sizes.MIN,
        onClick: x,
        children: g.intl.string(g.t["5Wxrcd"])
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(r.xBx, {
        className: _.header,
        direction: o.Z.Direction.VERTICAL,
        separator: false,
        children: [null != z && (0, i.jsx)(m.Z, {
          guild: z
        }), (0, i.jsx)(r.Text, {
          className: _.guildName,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: null == z ? true : z.name
        }), (0, i.jsx)(r.Heading, {
          className: _.title,
          variant: "heading-sm/semibold",
          children: g.intl.string(g.t["8VRa7d"])
        }), (0, i.jsx)(r.Text, {
          className: _.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: g.intl.string(g.t["+855Pm"])
        }), null != L && (0, i.jsx)(r.olH, {
          className: _.closeButton,
          onClick: L
        })]
      }), (0, i.jsxs)(r.hzk, {
        className: _.channelPrompt,
        children: [(0, i.jsx)("form", {
          onSubmit: f,
          children: (0, i.jsx)(r.oil, {
            label: g.intl.string(g.t.bY20tU),
            error: null == G ? true : G.getFieldMessage("name"),
            type: "text",
            value: E,
            id: U,
            onChange: h,
            placeholder: g.intl.string(g.t.xGOYA8),
            inputRef: N
          })
        }), null != G && 0 === Object.keys(G.fields).length && (0, i.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: G.message
        })]
      }), e && (0, i.jsx)(r.mzw, {
        children: v
      })]
    }),
    footer: v
  }
}

function x(t) {
  let {
    content: n
  } = L(t);
  return n
}