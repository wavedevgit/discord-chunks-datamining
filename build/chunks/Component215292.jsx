/** Chunk was on 42483 **/
/** chunk id: 215292, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  F: () => L,
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = t, [E, h] = a.useState(""), [G, I] = a.useState(null), [D, y] = a.useState(false), U = (0, m.Dt)(), z = (0, l.e7)([C.Z], () => C.Z.getGuild(n), [n]), f = a.useRef(null);
  a.useEffect(() => {
    var t;
    T && (null == (t = f.current) || t.focus())
  }, [T]);
  let N = a.useCallback(async t => {
      if (t.preventDefault(), null == z) return;
      y(true), I(null);
      let n = g.ZP.getDefaultChannel(z.id);
      try {
        let t = u.intl.formatToPlainString(u.t.V4lepJ, {
          topic: E
        });
        await d.Z.createTextChannel(z.id, E, null == n ? true : n.parent_id, t), x()
      } catch (t) {
        I(new o.yZ(t))
      }
      y(false)
    }, [z, E, x]),
    v = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.Button, {
        variant: "primary",
        text: u.intl.string(u.t.i4jeWR),
        onClick: N,
        disabled: 0 === E.length,
        loading: D
      }), (0, i.jsx)(s.zx, {
        "data-migration-pending": true,
        className: _.skipButton,
        look: s.zx.Looks.BLANK,
        size: s.zx.Sizes.MIN,
        onClick: x,
        children: u.intl.string(u.t["5Wxrcd"])
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(r.xBx, {
        "data-migration-pending": true,
        className: _.header,
        direction: c.Z.Direction.VERTICAL,
        separator: false,
        children: [null != z && (0, i.jsx)(p.Z, {
          guild: z
        }), (0, i.jsx)(r.Text, {
          className: _.guildName,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: null == z ? true : z.name
        }), (0, i.jsx)(r.Heading, {
          className: _.title,
          variant: "heading-sm/semibold",
          children: u.intl.string(u.t["8VRa7d"])
        }), (0, i.jsx)(r.Text, {
          className: _.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: u.intl.string(u.t["+855Pm"])
        }), null != L && (0, i.jsx)(r.olH, {
          "data-migration-pending": true,
          className: _.closeButton,
          onClick: L
        })]
      }), (0, i.jsxs)(r.hzk, {
        "data-migration-pending": true,
        className: _.channelPrompt,
        children: [(0, i.jsx)("form", {
          onSubmit: N,
          children: (0, i.jsx)(r.oil, {
            label: u.intl.string(u.t.bY20tU),
            error: null == G ? true : G.getFieldMessage("name"),
            type: "text",
            value: E,
            id: U,
            onChange: h,
            placeholder: u.intl.string(u.t.xGOYA8),
            inputRef: f
          })
        }), null != G && 0 === Object.keys(G.fields).length && (0, i.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: G.message
        })]
      }), e && (0, i.jsx)(r.mzw, {
        "data-migration-pending": true,
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