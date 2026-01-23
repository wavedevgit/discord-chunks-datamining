/** Chunk was on web.js **/
/** chunk id: 416379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk73392 = require("./73392.js"),
  Chunk763754 = require("./763754.js"),
  Chunk967144 = require("./967144.js"),
  Chunk118517 = require("./118517.js"),
  Chunk976860 = require("./976860.js"),
  Chunk406704 = require("./406704.js"),
  Chunk747926 = require("./747926.js"),
  Chunk320501 = require("./320501.js"),
  Chunk927057 = require("./927057.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk785263 = require("./785263.js");
let A = 2,
  I = 10;

function S(e, t) {
  let n = e.id,
    r = t.id;
  return (0, o.bG)([E.A], () => {
    let e = r;
    for (let t = 0; t < I; t++) {
      let r = E.A.getMessage(n, e);
      if ((null == r ? true : r.type) !== b.lAJ.REPLY || null == r.messageReference) return t;
      e = r.messageReference.message_id
    }
    return I
  }, [n, r])
}

function T(e) {
  let {
    channel: t,
    message: n,
    replyChainLength: a
  } = e;

  function s() {
    (0, _.Jx)(t.id), (0, g.Tv)(t, n, "Reply Chain Nudge")
  }
  let o = i.useRef(a);
  return i.useEffect(() => {
    o.current = a
  }), i.useEffect(() => {
    (0, u.zV)(b.HAw.THREAD_NUDGE_SHOWN, {
      type: "Reply Chain (".concat(A + 1, ")"),
      reply_chain_length: o.current + 1,
      channel_id: t.id,
      guild_id: t.guild_id
    })
  }, [t]), (0, r.jsxs)(c.DUT, {
    onClick: s,
    className: v._r,
    focusProps: {
      offset: {
        right: false,
        left: false
      }
    },
    children: [(0, r.jsx)(c.Text, {
      color: "text-default",
      className: v.Qq,
      variant: "text-sm/normal",
      children: O.intl.format(O.t.B3V0FM, {
        count: Math.min(I, a + 1)
      })
    }), (0, r.jsx)(c.Text, {
      color: "text-link",
      className: v.NG,
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
    shouldMention: o,
    showMentionToggle: u
  } = t, {
    guildId: g,
    nick: E,
    colorString: I,
    colorStrings: C,
    colorRoleName: N,
    authorId: w,
    displayNameStyles: R
  } = (0, f.Ay)(a), P = (0, p.gn)(g, w, C), D = (0, d.a)({
    displayNameStyles: R
  }), x = S(i, a), L = (0, m.n)(i, a), j = n.showThreadPromptOnReply && x >= A && L, M = () => (0, h.pX)(b.BVt.CHANNEL(i.getGuildId(), i.id, a.id));

  function k(e) {
    e.stopPropagation(), (0, _.vz)(i.id, !o)
  }

  function U(e) {
    e.stopPropagation(), (0, _.Jx)(i.id)
  }
  return (0, r.jsx)("div", {
    className: v.e1,
    children: (0, r.jsxs)("div", {
      className: v.kL,
      children: [(0, r.jsxs)("div", {
        className: v.eU,
        children: [(0, r.jsx)(c.DUT, {
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
            className: s()(v.Qq, v.Fn),
            variant: "text-sm/normal",
            children: O.intl.format(O.t["8E4GxS"], {
              userHook: (e, t) => (0, r.jsx)(c.gyj, {
                className: v.UU,
                name: E,
                colorString: I,
                colorStrings: P,
                roleName: N,
                displayNameStylesFont: D
              }, t)
            })
          })
        }), (0, r.jsxs)("div", {
          className: v.o1,
          children: [u && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.m, {
              asContainer: true,
              text: o ? O.intl.string(O.t.DH2o6R) : O.intl.string(O.t.utGGIY),
              children: (0, r.jsx)(c.DUT, {
                role: "switch",
                "aria-checked": o,
                onClick: k,
                children: (0, r.jsxs)(c.Text, {
                  variant: "text-sm/bold",
                  color: o ? "text-link" : "text-muted",
                  className: v.Z4,
                  children: [(0, r.jsx)(c.XxR, {
                    size: "md",
                    color: "currentColor",
                    "aria-label": O.intl.string(O.t.P8tvKG),
                    className: v.mM
                  }), o ? O.intl.string(O.t.p9jC2r) : O.intl.string(O.t.U7f3bK)]
                })
              })
            }), (0, r.jsx)("div", {
              className: v.me,
              "aria-hidden": true
            })]
          }), (0, r.jsx)(y.x, {
            onClick: U
          })]
        })]
      }), j && (0, r.jsx)(T, {
        channel: i,
        message: a,
        replyChainLength: x
      })]
    })
  })
}