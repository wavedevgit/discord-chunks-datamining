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
  Chunk801790 = require("./801790.js");

function L(t) {
  let {
    createdGuildId: n,
    hasFooter: e = true,
    onClose: L,
    onChannelPromptCompleted: x,
    isSlideReady: T
  } = t, [E, G] = a.useState(""), [I, h] = a.useState(null), [D, U] = a.useState(false), y = (0, m.Dt)(), f = (0, l.e7)([g.Z], () => g.Z.getGuild(n), [n]), z = a.useRef(null);
  a.useEffect(() => {
    var t;
    T && (null == (t = z.current) || t.focus())
  }, [T]);
  let N = a.useCallback(async t => {
      if (t.preventDefault(), null == f) return;
      U(true), h(null);
      let n = C.ZP.getDefaultChannel(f.id);
      try {
        let t = u.intl.formatToPlainString(u.t.V4lepJ, {
          topic: E
        });
        await d.Z.createTextChannel(f.id, E, null == n ? true : n.parent_id, t), x()
      } catch (t) {
        h(new o.yZ(t))
      }
      U(false)
    }, [f, E, x]),
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
        children: [null != f && (0, i.jsx)(p.Z, {
          guild: f
        }), (0, i.jsx)(r.Text, {
          className: _.guildName,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: null == f ? true : f.name
        }), (0, i.jsx)(r.Heading, {
          className: _.title,
          variant: "heading-sm/semibold",
          children: u.intl.string(u.t["8VRa7d"])
        }), (0, i.jsx)(r.Text, {
          className: _.subtitle,
          color: "text-default",
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
            error: null == I ? true : I.getFieldMessage("name"),
            type: "text",
            value: E,
            id: y,
            onChange: G,
            placeholder: u.intl.string(u.t.xGOYA8),
            inputRef: z
          })
        }), null != I && 0 === Object.keys(I.fields).length && (0, i.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: I.message
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