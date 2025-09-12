/** Chunk was on 42483 **/
/** chunk id: 215292, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  F: () => g,
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

function g(t) {
  let {
    createdGuildId: n,
    hasFooter: e = true,
    onClose: g,
    onChannelPromptCompleted: x,
    isSlideReady: T
  } = t, [E, h] = l.useState(""), [I, G] = l.useState(null), [y, D] = l.useState(false), z = (0, m.Dt)(), U = (0, a.e7)([u.Z], () => u.Z.getGuild(n), [n]), N = l.useRef(null);
  l.useEffect(() => {
    var t;
    T && (null == (t = N.current) || t.focus())
  }, [T]);
  let j = l.useCallback(async t => {
      if (t.preventDefault(), null == U) return;
      D(true), G(null);
      let n = p.ZP.getDefaultChannel(U.id);
      try {
        let t = _.intl.formatToPlainString(_.t.V4lepK, {
          topic: E
        });
        await d.Z.createTextChannel(U.id, E, null == n ? true : n.parent_id, t), x()
      } catch (t) {
        G(new c.yZ(t))
      }
      D(false)
    }, [U, E, x]),
    f = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.zxk, {
        variant: "primary",
        text: _.intl.string(_.t.i4jeWV),
        onClick: j,
        disabled: 0 === E.length,
        loading: y
      }), (0, i.jsx)(s.zx, {
        className: L.skipButton,
        look: s.zx.Looks.BLANK,
        size: s.zx.Sizes.MIN,
        onClick: x,
        children: _.intl.string(_.t["5WxrcX"])
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(r.xBx, {
        className: L.header,
        direction: o.Z.Direction.VERTICAL,
        separator: false,
        children: [null != U && (0, i.jsx)(C.Z, {
          guild: U
        }), (0, i.jsx)(r.Text, {
          className: L.guildName,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: null == U ? true : U.name
        }), (0, i.jsx)(r.X6q, {
          className: L.title,
          variant: "heading-sm/semibold",
          children: _.intl.string(_.t["8VRa7e"])
        }), (0, i.jsx)(r.Text, {
          className: L.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: _.intl.string(_.t["+855Pj"])
        }), null != g && (0, i.jsx)(r.olH, {
          className: L.closeButton,
          onClick: g
        })]
      }), (0, i.jsxs)(r.hzk, {
        className: L.channelPrompt,
        children: [(0, i.jsx)("form", {
          onSubmit: j,
          children: (0, i.jsx)(r.oil, {
            label: _.intl.string(_.t.bY20tb),
            error: null == I ? true : I.getFieldMessage("name"),
            type: "text",
            value: E,
            id: z,
            onChange: h,
            placeholder: _.intl.string(_.t.xGOYAw),
            inputRef: N
          })
        }), null != I && 0 === Object.keys(I.fields).length && (0, i.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: I.message
        })]
      }), e && (0, i.jsx)(r.mzw, {
        children: f
      })]
    }),
    footer: f
  }
}

function x(t) {
  let {
    content: n
  } = g(t);
  return n
}