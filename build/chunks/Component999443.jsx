/** Chunk was on web.js **/
/** chunk id: 999443, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => z
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk280230 = require("./280230.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk9578 = require("./9578.jsx"),
  Chunk268218 = require("./268218.js"),
  Chunk508675 = require("./508675.js"),
  Chunk232042 = require("./232042.jsx"),
  Chunk906754 = require("./906754.jsx"),
  Chunk332173 = require("./332173.jsx"),
  Chunk37632 = require("./37632.jsx"),
  Chunk253174 = require("./253174.jsx"),
  Chunk490040 = require("./490040.jsx"),
  Chunk930101 = require("./930101.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk302031 = require("./302031.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk957565 = require("./957565.js"),
  Chunk365526 = require("./365526.js"),
  Chunk678473 = require("./678473.jsx"),
  Chunk997954 = require("./997954.jsx"),
  Chunk556300 = require("./556300.jsx"),
  Chunk990474 = require("./990474.jsx"),
  Chunk620700 = require("./620700.jsx"),
  Chunk783833 = require("./783833.jsx"),
  Chunk49005 = require("./49005.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk206314 = require("./206314.js"),
  Chunk829681 = require("./829681.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e) {
  let {
    emojiTooltipPosition: t = "top",
    enableEmojiClick: n = true
  } = e;
  return {
    react(e, i, a) {
      let {
        key: s,
        channelId: o,
        messageId: l
      } = a;
      return e.src ? (0, r.jsx)(y.H, {
        node: e,
        tooltipPosition: t,
        enableClick: n,
        channelId: o,
        messageId: l
      }, s) : (0, r.jsx)("span", {
        children: e.surrogate
      }, s)
    }
  }
}

function H(e) {
  let {
    emojiTooltipPosition: t = "top",
    enableEmojiClick: n = true
  } = e;
  return {
    react(e, i, a) {
      let {
        key: s,
        guildId: o,
        channelId: l,
        messageId: c,
        isInteracting: u
      } = a, d = f.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
      if (null != d) {
        let t = d.require_colons;
        e = F(G({}, e), {
          name: t ? ":".concat(d.name, ":") : d.name
        })
      }
      return (0, r.jsx)(y.X, {
        isInteracting: u,
        node: e,
        tooltipPosition: t,
        enableClick: n,
        channelId: l,
        messageId: c
      }, s)
    }
  }
}

function Y(e, t, n) {
  let r = I.A.getGuild(e);
  if (null == e || null == r) return;
  let i = t => {
    r.features.has(L.GuildFeatures.COMMUNITY) && (0, b.pX)(L.BVt.CHANNEL(e, t))
  };
  switch (t) {
    case "home":
    case "guide":
      i(j.VV.GUILD_HOME);
      break;
    case "browse":
      i(j.VV.CHANNEL_BROWSER);
      break;
    case "customize":
      i(j.VV.CUSTOMIZE_COMMUNITY);
      break;
    case "linked-roles":
      if (null != n) {
        let t = v.Ay.getSelfMember(e);
        if (null == t) return null;
        let r = A.A.getRole(e, n);
        null == r || t.roles.includes(r.id) ? c.h.dispatch({
          type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
          guildId: e
        }) : c.h.dispatch({
          type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
          guildId: e,
          role: r
        })
      } else c.h.dispatch({
        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
        guildId: e
      })
  }
}

function W(e) {
  let {
    text: t
  } = e, [n, a] = i.useState(false), s = () => {
    (0, S.C)(t, () => a(true), () => a(false))
  };
  return (0, r.jsx)(l.DUT, {
    onClick: s,
    children: n ? (0, r.jsx)(l.A9s, {
      size: "xs",
      color: "currentColor"
    }) : (0, r.jsx)(l.TdU, {
      size: "xs",
      color: "currentColor"
    })
  })
}
let K = {
  blockQuote: {
    react: (e, t, n) => (0, r.jsxs)("div", {
      className: M.h,
      children: [(0, r.jsx)("div", {
        className: M.r
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
      children: (0, T.t)(e, t, n)
    }, n.key)
  },
  codeBlock: {
    react(e, t, i) {
      let a = () => (0, r.jsx)("code", {
        className: s()(k.kw, "hljs"),
        children: (0, T.t)(e, t, i)
      });
      return (0, r.jsx)("pre", {
        children: (0, r.jsxs)("div", {
          className: M.Hy,
          children: [S.p5 ? (0, r.jsx)("div", {
            className: M.lB,
            children: (0, r.jsx)(W, {
              text: e.content
            })
          }) : null, (0, r.jsx)(d.c2, {
            createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
            webpackId: 752238,
            renderFallback: a,
            render: t => {
              if (!(e.lang && t.hasLanguage(e.lang))) return a();
              {
                let n = t.highlight(e.lang, e.content, true);
                return null == n ? a() : (0, r.jsx)("code", {
                  className: s()(k.kw, "hljs", n.language),
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
    react: (e, t, n) => (0, r.jsx)(O.Ay, {
      type: O.Ay.Types.TEXT,
      inline: n.formatInline,
      renderTextElement: (e, t) => null == e || e.type !== u.A || t ? e : i.cloneElement(e, {
        tabIndex: false
      }),
      children: () => t(e.content, n)
    }, n.key)
  },
  soundboard: {
    react: (e, t, n) => (0, r.jsx)(E.Ay, {
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
      return (0, T.d)(e.id) ? (0, r.jsxs)(h.A, {
        role: "link",
        onClick: i,
        className: "channelMention",
        iconType: e.id,
        children: [t(e.mainContent, n), null != e.itemContent ? (0, r.jsx)(m.A, {}) : null, null != e.itemContent ? t(e.itemContent, n) : null]
      }, n.key) : null
    }
  },
  timestamp: {
    react: (e, t, n) => (0, r.jsx)(C.A, {
      node: e
    }, n.key)
  },
  list: {
    react: (e, t, n) => {
      let i = e.ordered ? "ol" : "ul",
        a = null == e.start ? true : (e.start + (e.items.length - 1)).toString().length;
      return (0, o.reactElement)(i, "".concat(n.key), {
        start: e.start,
        className: n.formatInline ? M.tZ : null,
        style: {
          "--totalCharacters": a
        },
        children: e.items.map((e, i) => {
          let a = (0, o.reactElement)("span", "".concat(n.key, "-").concat(i, "-innerSpan"), {
            children: t(e, n)
          });
          return (0, o.reactElement)("li", "".concat(n.key, "-").concat(i) + i, {
            children: [a, (0, r.jsx)(l.AC4, {
              children: ","
            }, "screen-reader-pause")]
          })
        })
      })
    }
  },
  heading: {
    react: (e, t, n) => {
      let i = (0, o.reactElement)("span", "".concat(n.key, "-innerSpan"), {
        children: t(e.content, n)
      });
      return (0, o.reactElement)("h" + e.level, (null == n ? true : n.key) != null ? "".concat(n.key) : null, {
        children: [i, (0, r.jsx)(l.AC4, {
          children: ","
        }, "screen-reader-pause")],
        className: n.formatInline ? M.tZ : null
      })
    }
  },
  guild: {
    react: (e, t, n) => {
      let i = I.A.getGuild(e.guildId);
      return (0, r.jsx)(_.A, {
        guild: i,
        children: (0, T.t)(e, t, n)
      }, n.key)
    }
  },
  channel: {
    react: (e, t, n) => (0, r.jsx)(p.A, {
      iconType: e.iconType,
      children: (0, T.t)(e, t, n)
    }, n.key)
  },
  message: {
    react: (e, t, n) => (0, r.jsx)(g.A, {}, n.key)
  },
  subtext: {
    react: (e, t, n) => {
      let r = (0, o.reactElement)("span", "".concat(n.key, "-innerSpan"), {
        children: t(e.content, n)
      });
      return (0, o.reactElement)("small", (null == n ? true : n.key) != null ? "".concat(n.key) : null, {
        children: r,
        className: n.formatInline ? M.tZ : null
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
  return F(G({}, K), {
    link: (0, x.A)(e),
    devLink: (0, P.A)(e),
    emoji: B(e),
    customEmoji: H(e),
    channelMention: (0, w.A)(e),
    commandMention: (0, R.Ay)(e),
    attachmentLink: (0, N.A)(e),
    gameMention: D.A
  })
}