/** Chunk was on 86746 **/
/** chunk id: 362311, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => x,
  m: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk198982 = require("./198982.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk435631 = require("./435631.js");

function u(t) {
  let {
    createdGuildId: e,
    hasFooter: n = true,
    onClose: u,
    onChannelPromptCompleted: x,
    isSlideReady: T
  } = t, [E, G] = a.useState(""), [I, b] = a.useState(null), [D, h] = a.useState(false), A = (0, m.GV)(), U = (0, l.bG)([g.A], () => g.A.getGuild(e), [e]), y = a.useRef(null);
  a.useEffect(() => {
    var t;
    T && (null == (t = y.current) || t.focus())
  }, [T]);
  let v = a.useCallback(async t => {
      if (t.preventDefault(), null == U) return;
      h(true), b(null);
      let e = C.Ay.getDefaultChannel(U.id);
      try {
        let t = _.intl.formatToPlainString(_.t.V4lepJ, {
          topic: E
        });
        await d.A.createTextChannel(U.id, E, null == e ? true : e.parent_id, t), x()
      } catch (t) {
        b(new c.Wl(t))
      }
      h(false)
    }, [U, E, x]),
    N = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(s.Button, {
        variant: "primary",
        text: _.intl.string(_.t.i4jeWR),
        onClick: v,
        disabled: 0 === E.length,
        loading: D
      }), (0, i.jsx)(r.$n, {
        "data-migration-pending": true,
        className: L.SZ,
        look: r.$n.Looks.BLANK,
        size: r.$n.Sizes.MIN,
        onClick: x,
        children: _.intl.string(_.t["5Wxrcd"])
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(s.rQ0, {
        "data-migration-pending": true,
        className: L.wx,
        direction: o.A.Direction.VERTICAL,
        separator: false,
        children: [null != U && (0, i.jsx)(p.A, {
          guild: U
        }), (0, i.jsx)(s.Text, {
          className: L.J5,
          color: "text-strong",
          variant: "text-sm/semibold",
          children: null == U ? true : U.name
        }), (0, i.jsx)(s.Heading, {
          className: L.DD,
          variant: "heading-sm/semibold",
          children: _.intl.string(_.t["8VRa7d"])
        }), (0, i.jsx)(s.Text, {
          className: L.VA,
          color: "text-default",
          variant: "text-md/normal",
          children: _.intl.string(_.t["+855Pm"])
        }), null != u && (0, i.jsx)(s.s_y, {
          "data-migration-pending": true,
          className: L.b,
          onClick: u
        })]
      }), (0, i.jsxs)(s.$mQ, {
        "data-migration-pending": true,
        className: L.Q6,
        children: [(0, i.jsx)("form", {
          onSubmit: v,
          children: (0, i.jsx)(s.ksK, {
            label: _.intl.string(_.t.bY20tU),
            error: null == I ? true : I.getFieldMessage("name"),
            type: "text",
            value: E,
            id: A,
            onChange: G,
            placeholder: _.intl.string(_.t.xGOYA8),
            inputRef: y
          })
        }), null != I && 0 === Object.keys(I.fields).length && (0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: I.message
        })]
      }), n && (0, i.jsx)(s.jlY, {
        "data-migration-pending": true,
        children: N
      })]
    }),
    footer: N
  }
}

function x(t) {
  let {
    content: e
  } = u(t);
  return e
}