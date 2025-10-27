/** Chunk was on web.js **/
/** chunk id: 407661, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk7284 = require("./7284.js"),
  Chunk739566 = require("./739566.js"),
  Chunk884902 = require("./884902.js"),
  Chunk623292 = require("./623292.js"),
  Chunk703656 = require("./703656.js"),
  Chunk665906 = require("./665906.js"),
  Chunk488131 = require("./488131.js"),
  Chunk375954 = require("./375954.js"),
  Chunk962293 = require("./962293.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk204427 = require("./204427.js");
let I = 2,
  T = 10;

function S(e, t) {
  let n = e.id,
    r = t.id;
  return (0, s.e7)([E.Z], () => {
    let e = r;
    for (let t = 0; t < T; t++) {
      let r = E.Z.getMessage(n, e);
      if ((null == r ? true : r.type) !== y.uaV.REPLY || null == r.messageReference) return t;
      e = r.messageReference.message_id
    }
    return T
  }, [n, r])
}

function A(e) {
  let {
    channel: t,
    message: n,
    replyChainLength: a
  } = e;

  function o() {
    (0, p.A6)(t.id), (0, g.R6)(t, n, "Reply Chain Nudge")
  }
  let s = i.useRef(a);
  return i.useEffect(() => {
    s.current = a
  }), i.useEffect(() => {
    (0, u.yw)(y.rMx.THREAD_NUDGE_SHOWN, {
      type: "Reply Chain (".concat(I + 1, ")"),
      reply_chain_length: s.current + 1,
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t]), (0, r.jsxs)(c.P3F, {
    onClick: o,
    className: v.threadSuggestionBar,
    focusProps: {
      offset: {
        right: false,
        left: false
      }
    },
    children: [(0, r.jsx)(c.Text, {
      color: "header-secondary",
      className: v.text,
      variant: "text-sm/normal",
      children: O.intl.format(O.t.B3V0FM, {
        count: Math.min(T, a + 1)
      })
    }), (0, r.jsx)(c.Text, {
      color: "text-link",
      className: v.createThreadButton,
      variant: "text-sm/semibold",
      children: O.intl.string(O.t.rBIGBL)
    })]
  })
}

function C(e) {
  let {
    reply: t,
    chatInputType: n
  } = e, {
    channel: i,
    message: a,
    shouldMention: s,
    showMentionToggle: u
  } = t, {
    guildId: g,
    nick: E,
    colorString: T,
    colorStrings: C,
    colorRoleName: N,
    authorId: R,
    displayNameStyles: P
  } = (0, f.ZP)(a), D = (0, _.X7)(g, R, C), w = (0, d.j)({
    displayNameStyles: P
  }), L = S(i, a), x = (0, m.NE)(i, a), M = n.showThreadPromptOnReply && L >= I && x, k = () => (0, h.uL)(y.Z5c.CHANNEL(i.getGuildId(), i.id, a.id));

  function j(e) {
    e.stopPropagation(), (0, p.qx)(i.id, !s)
  }

  function U(e) {
    e.stopPropagation(), (0, p.A6)(i.id)
  }
  return (0, r.jsx)("div", {
    className: v.clipContainer,
    children: (0, r.jsxs)("div", {
      className: v.container,
      children: [(0, r.jsxs)("div", {
        className: v.replyBar,
        children: [(0, r.jsx)(c.P3F, {
          onClick: k,
          focusProps: {
            offset: {
              top: false,
              right: false,
              bottom: false,
              left: false
            }
          },
          children: (0, r.jsx)(c.Text, {
            color: "header-secondary",
            className: o()(v.text, v.replyLabel),
            variant: "text-sm/normal",
            children: O.intl.format(O.t["8E4GxS"], {
              userHook: (e, t) => (0, r.jsx)(c.PUh, {
                className: v.name,
                name: E,
                colorString: T,
                colorStrings: D,
                roleName: N,
                displayNameStylesFont: w
              }, t)
            })
          })
        }), (0, r.jsxs)("div", {
          className: v.actions,
          children: [u && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.u, {
              asContainer: true,
              text: s ? O.intl.string(O.t.DH2o6R) : O.intl.string(O.t.utGGIY),
              children: (0, r.jsx)(c.P3F, {
                role: "switch",
                "aria-checked": s,
                onClick: j,
                children: (0, r.jsxs)(c.Text, {
                  variant: "text-sm/bold",
                  color: s ? "text-link" : "text-muted",
                  className: v.mentionButton,
                  children: [(0, r.jsx)(c.lOy, {
                    size: "md",
                    color: "currentColor",
                    "aria-label": O.intl.string(O.t.P8tvKG),
                    className: v.mentionIcon
                  }), s ? O.intl.string(O.t.p9jC2r) : O.intl.string(O.t.U7f3bK)]
                })
              })
            }), (0, r.jsx)("div", {
              className: v.separator,
              "aria-hidden": true
            })]
          }), (0, r.jsx)(b.B, {
            onClick: U
          })]
        })]
      }), M && (0, r.jsx)(A, {
        channel: i,
        message: a,
        replyChainLength: L
      })]
    })
  })
}