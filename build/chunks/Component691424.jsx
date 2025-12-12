/** Chunk was on web.js **/
/** chunk id: 691424, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk794295 = require("./794295.jsx"),
  Chunk663993 = require("./663993.js"),
  Chunk339085 = require("./339085.js"),
  Chunk779699 = require("./779699.jsx"),
  Chunk359875 = require("./359875.jsx"),
  Chunk124072 = require("./124072.jsx"),
  Chunk891984 = require("./891984.jsx"),
  Chunk695503 = require("./695503.jsx"),
  Chunk628692 = require("./628692.jsx"),
  Chunk590956 = require("./590956.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk411405 = require("./411405.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk572004 = require("./572004.js"),
  Chunk746878 = require("./746878.js"),
  Chunk285063 = require("./285063.jsx"),
  Chunk943362 = require("./943362.jsx"),
  Chunk551452 = require("./551452.jsx"),
  Chunk69626 = require("./69626.jsx"),
  Chunk142990 = require("./142990.jsx"),
  Chunk382056 = require("./382056.jsx"),
  Chunk532901 = require("./532901.jsx"),
  Chunk311739 = require("./311739.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk430864 = require("./430864.js"),
  Chunk154257 = require("./154257.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function V(e) {
  let {
    emojiTooltipPosition: t = "top",
    enableEmojiClick: n = true
  } = e;
  return {
    react(e, i, o) {
      let {
        key: a,
        channelId: s,
        messageId: l
      } = o;
      return e.src ? (0, r.jsx)(b.c, {
        node: e,
        tooltipPosition: t,
        enableClick: n,
        channelId: s,
        messageId: l
      }, a) : (0, r.jsx)("span", {
        children: e.surrogate
      }, a)
    }
  }
}

function H(e) {
  let {
    emojiTooltipPosition: t = "top",
    enableEmojiClick: n = true
  } = e;
  return {
    react(e, i, o) {
      let {
        key: a,
        guildId: s,
        channelId: l,
        messageId: c,
        isInteracting: u
      } = o, d = f.ZP.getDisambiguatedEmojiContext(s).getById(e.emojiId);
      if (null != d) {
        let t = d.require_colons;
        e = B(Z({}, e), {
          name: t ? ":".concat(d.name, ":") : d.name
        })
      }
      return (0, r.jsx)(b.Y, {
        isInteracting: u,
        node: e,
        tooltipPosition: t,
        enableClick: n,
        channelId: l,
        messageId: c
      }, a)
    }
  }
}

function Y(e, t, n) {
  let r = I.Z.getGuild(e);
  if (null == e || null == r) return;
  let i = t => {
    r.features.has(j.GuildFeatures.COMMUNITY) && (0, y.uL)(j.Z5c.CHANNEL(e, t))
  };
  switch (t) {
    case "home":
    case "guide":
      i(M.oC.GUILD_HOME);
      break;
    case "browse":
      i(M.oC.CHANNEL_BROWSER);
      break;
    case "customize":
      i(M.oC.CUSTOMIZE_COMMUNITY);
      break;
    case "linked-roles":
      if (null != n) {
        let t = v.ZP.getSelfMember(e);
        if (null == t) return null;
        let r = S.Z.getRole(e, n);
        null == r || t.roles.includes(r.id) ? c.Z.dispatch({
          type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
          guildId: e
        }) : c.Z.dispatch({
          type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
          guildId: e,
          role: r
        })
      } else c.Z.dispatch({
        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
        guildId: e
      })
  }
}

function W(e) {
  let {
    text: t
  } = e, [n, o] = i.useState(false), a = () => {
    (0, T.JG)(t, () => o(true), () => o(false))
  };
  return (0, r.jsx)(l.P3F, {
    onClick: a,
    children: n ? (0, r.jsx)(l.dz2, {
      size: "xs",
      color: "currentColor"
    }) : (0, r.jsx)(l.TIy, {
      size: "xs",
      color: "currentColor"
    })
  })
}
require("./324509.js");
let K = {
  blockQuote: {
    react: (e, t, n) => (0, r.jsxs)("div", {
      className: k.blockquoteContainer,
      children: [(0, r.jsx)("div", {
        className: k.blockquoteDivider
      }), (0, r.jsx)("blockquote", {
        children: t(e.content, n)
      })]
    }, n.key)
  },
  s: {
    react: (e, t, n) => (0, r.jsx)("s", {
      children: t(e.content, n)
    }, n.key)
  },
  highlight: {
    react: (e, t, n) => (0, r.jsx)("span", {
      className: "highlight",
      children: e.content
    }, n.key)
  },
  paragraph: {
    react: (e, t, n) => (0, r.jsx)("p", {
      children: t(e.content, n)
    }, n.key)
  },
  inlineCode: {
    react: (e, t, n) => (0, r.jsx)("code", {
      className: "inline",
      children: (0, C.S)(e, t, n)
    }, n.key)
  },
  codeBlock: {
    react(e, t, i) {
      let o = () => (0, r.jsx)("code", {
        className: a()(U.scrollbarGhostHairline, "hljs"),
        children: (0, C.S)(e, t, i)
      });
      return (0, r.jsx)("pre", {
        children: (0, r.jsxs)("div", {
          className: k.codeContainer,
          children: [T.wS ? (0, r.jsx)("div", {
            className: k.codeActions,
            children: (0, r.jsx)(W, {
              text: e.content
            })
          }) : null, (0, r.jsx)(d.GI, {
            createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
            webpackId: 364964,
            renderFallback: o,
            render: t => {
              if (!(e.lang && t.hasLanguage(e.lang))) return o();
              {
                let n = t.highlight(e.lang, e.content, true);
                return null == n ? o() : (0, r.jsx)("code", {
                  className: a()(U.scrollbarGhostHairline, "hljs", n.language),
                  dangerouslySetInnerHTML: {
                    __html: n.value
                  }
                })
              }
            }
          })]
        })
      }, i.key)
    }
  },
  text: {
    react: (e, t, n) => "string" == typeof e.content ? (0, r.jsx)("span", {
      children: e.content
    }, n.key) : (0, r.jsx)("span", {
      children: t(e.content, n)
    }, n.key)
  },
  spoiler: {
    react: (e, t, n) => (0, r.jsx)(O.ZP, {
      type: O.ZP.Types.TEXT,
      inline: n.formatInline,
      renderTextElement: (e, t) => null == e || e.type !== u.Z || t ? e : i.cloneElement(e, {
        tabIndex: false
      }),
      children: () => t(e.content, n)
    }, n.key)
  },
  soundboard: {
    react: (e, t, n) => (0, r.jsx)(E.ZP, {
      channelId: e.channelId,
      messageId: e.messageId,
      soundId: e.soundId,
      jumbo: e.jumboable,
      messageSounds: n.soundboardSounds
    })
  },
  staticRouteLink: {
    react(e, t, n) {
      let i = () => {
        Y(e.guildId, e.id, e.itemId)
      };
      return (0, C.k)(e.id) ? (0, r.jsxs)(m.Z, {
        role: "link",
        onClick: i,
        className: "channelMention",
        iconType: e.id,
        children: [t(e.mainContent, n), null != e.itemContent ? (0, r.jsx)(h.Z, {}) : null, null != e.itemContent ? t(e.itemContent, n) : null]
      }, n.key) : null
    }
  },
  timestamp: {
    react: (e, t, n) => (0, r.jsx)(A.Z, {
      node: e
    }, n.key)
  },
  list: {
    react: (e, t, n) => {
      let i = e.ordered ? "ol" : "ul",
        o = null == e.start ? true : (e.start + (e.items.length - 1)).toString().length;
      return (0, s.reactElement)(i, "".concat(n.key), {
        start: e.start,
        className: n.formatInline ? k.inlineFormat : null,
        style: {
          "--totalCharacters": o
        },
        children: e.items.map((e, i) => {
          let o = (0, s.reactElement)("span", "".concat(n.key, "-").concat(i, "-innerSpan"), {
            children: t(e, n)
          });
          return (0, s.reactElement)("li", "".concat(n.key, "-").concat(i) + i, {
            children: [o, (0, r.jsx)(l.nn4, {
              children: ","
            }, "screen-reader-pause")]
          })
        })
      })
    }
  },
  heading: {
    react: (e, t, n) => {
      let i = (0, s.reactElement)("span", "".concat(n.key, "-innerSpan"), {
        children: t(e.content, n)
      });
      return (0, s.reactElement)("h" + e.level, (null == n ? true : n.key) != null ? "".concat(n.key) : null, {
        children: [i, (0, r.jsx)(l.nn4, {
          children: ","
        }, "screen-reader-pause")],
        className: n.formatInline ? k.inlineFormat : null
      })
    }
  },
  guild: {
    react: (e, t, n) => {
      let i = I.Z.getGuild(e.guildId);
      return (0, r.jsx)(_.Z, {
        guild: i,
        children: (0, C.S)(e, t, n)
      }, n.key)
    }
  },
  channel: {
    react: (e, t, n) => (0, r.jsx)(p.Z, {
      iconType: e.iconType,
      children: (0, C.S)(e, t, n)
    }, n.key)
  },
  message: {
    react: (e, t, n) => (0, r.jsx)(g.Z, {}, n.key)
  },
  subtext: {
    react: (e, t, n) => {
      let r = (0, s.reactElement)("span", "".concat(n.key, "-innerSpan"), {
        children: t(e.content, n)
      });
      return (0, s.reactElement)("small", (null == n ? true : n.key) != null ? "".concat(n.key) : null, {
        children: r,
        className: n.formatInline ? k.inlineFormat : null
      })
    }
  },
  silentPrefix: {
    react: (e, t, n) => "string" == typeof e.content ? (0, r.jsx)("span", {
      children: e.content
    }, n.key) : (0, r.jsx)("span", {
      children: t(e.content, n)
    }, n.key)
  }
};

function z(e) {
  return B(Z({}, K), {
    link: (0, x.Z)(e),
    devLink: (0, w.Z)(e),
    emoji: V(e),
    customEmoji: H(e),
    channelMention: (0, P.Z)(e),
    commandMention: (0, R.ZP)(e),
    attachmentLink: (0, N.Z)(e),
    shopLink: (0, L.Z)(e),
    gameMention: D.Z
  })
}