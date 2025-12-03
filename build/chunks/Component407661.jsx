/** Chunk was on web.js **/
/** chunk id: 407661, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let S = 2,
  I = 10;

function T(e, t) {
  let n = e.id,
    r = t.id;
  return (0, s.e7)([E.Z], () => {
    let e = r;
    for (let t = 0; t < I; t++) {
      let r = E.Z.getMessage(n, e);
      if ((null == r ? true : r.type) !== y.uaV.REPLY || null == r.messageReference) return t;
      e = r.messageReference.message_id
    }
    return I
  }, [n, r])
}

function A(e) {
  let {
    channel: t,
    message: n,
    replyChainLength: a
  } = e;

  function o() {
    (0, _.A6)(t.id), (0, g.R6)(t, n, "Reply Chain Nudge")
  }
  let s = i.useRef(a);
  return i.useEffect(() => {
    s.current = a
  }), i.useEffect(() => {
    (0, u.yw)(y.rMx.THREAD_NUDGE_SHOWN, {
      type: "Reply Chain (".concat(S + 1, ")"),
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
      color: "text-default",
      className: v.text,
      variant: "text-sm/normal",
      children: O.intl.format(O.t.B3V0FM, {
        count: Math.min(I, a + 1)
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
    colorString: I,
    colorStrings: C,
    colorRoleName: N,
    authorId: P,
    displayNameStyles: R
  } = (0, f.ZP)(a), w = (0, p.X7)(g, P, C), D = (0, d.j)({
    displayNameStyles: R
  }), x = T(i, a), L = (0, h.NE)(i, a), j = n.showThreadPromptOnReply && x >= S && L, M = () => (0, m.uL)(y.Z5c.CHANNEL(i.getGuildId(), i.id, a.id));

  function k(e) {
    e.stopPropagation(), (0, _.qx)(i.id, !s)
  }

  function U(e) {
    e.stopPropagation(), (0, _.A6)(i.id)
  }
  return (0, r.jsx)("div", {
    className: v.clipContainer,
    children: (0, r.jsxs)("div", {
      className: v.container,
      children: [(0, r.jsxs)("div", {
        className: v.replyBar,
        children: [(0, r.jsx)(c.P3F, {
          onClick: M,
          focusProps: {
            offset: {
              top: false,
              right: false,
              bottom: false,
              left: false
            }
          },
          children: (0, r.jsx)(c.Text, {
            color: "text-default",
            className: o()(v.text, v.replyLabel),
            variant: "text-sm/normal",
            children: O.intl.format(O.t["8E4GxS"], {
              userHook: (e, t) => (0, r.jsx)(c.PUh, {
                className: v.name,
                name: E,
                colorString: I,
                colorStrings: w,
                roleName: N,
                displayNameStylesFont: D
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
                onClick: k,
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
      }), j && (0, r.jsx)(A, {
        channel: i,
        message: a,
        replyChainLength: x
      })]
    })
  })
}