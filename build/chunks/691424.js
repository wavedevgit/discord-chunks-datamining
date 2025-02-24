/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => Y
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(477660),
  l = n(481060),
  c = n(570140),
  u = n(794295),
  d = n(663993),
  f = n(95398),
  p = n(339085),
  _ = n(779699),
  h = n(359875),
  m = n(124072),
  g = n(692629),
  E = n(695503),
  v = n(628692),
  b = n(590956),
  y = n(703656),
  O = n(271383),
  S = n(430824),
  I = n(572004),
  T = n(746878),
  N = n(285063),
  A = n(943362),
  C = n(551452),
  R = n(69626),
  P = n(142990),
  w = n(532901),
  D = n(311739),
  x = n(981631),
  L = n(176505),
  M = n(368365),
  k = n(28149);

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let {
    emojiTooltipPosition: t = "top",
    enableEmojiClick: n = !0
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

function F(e) {
  let {
    emojiTooltipPosition: t = "top",
    enableEmojiClick: n = !0
  } = e;
  return {
    react(e, i, o) {
      let {
        key: a,
        guildId: s,
        channelId: l,
        messageId: c,
        isInteracting: u
      } = o, d = p.ZP.getDisambiguatedEmojiContext(s).getById(e.emojiId);
      if (null != d) {
        let t = d.require_colons;
        e = B(U({}, e), {
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

function V(e, t, n) {
  let r = S.Z.getGuild(e);
  if (null == e || null == r) return;
  let i = t => {
    r.hasFeature(x.oNc.COMMUNITY) && (0, y.uL)(x.Z5c.CHANNEL(e, t))
  };
  switch (t) {
    case "home":
    case "guide":
      i(L.oC.GUILD_HOME);
      break;
    case "browse":
      i(L.oC.CHANNEL_BROWSER);
      break;
    case "customize":
      i(L.oC.CUSTOMIZE_COMMUNITY);
      break;
    case "linked-roles":
      if (null != n) {
        let t = O.ZP.getSelfMember(e);
        if (null == t) return null;
        let r = S.Z.getRoles(e)[n];
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

function H(e) {
  let {
    text: t
  } = e, [n, o] = i.useState(!1), a = () => {
    try {
      (0, I.JG)(t), o(!0)
    } catch (e) {
      o(!1)
    }
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
n(448461);
let W = {
  blockQuote: {
    react: (e, t, n) => (0, r.jsxs)("div", {
      className: M.blockquoteContainer,
      children: [(0, r.jsx)("div", {
        className: M.blockquoteDivider
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
      children: (0, T.S)(e, t, n)
    }, n.key)
  },
  codeBlock: {
    react(e, t, i) {
      let o = () => (0, r.jsx)("code", {
        className: a()(k.scrollbarGhostHairline, "hljs"),
        children: (0, T.S)(e, t, i)
      });
      return (0, r.jsx)("pre", {
        children: (0, r.jsxs)("div", {
          className: M.codeContainer,
          children: [I.wS ? (0, r.jsx)("div", {
            className: M.codeActions,
            children: (0, r.jsx)(H, {
              text: e.content
            })
          }) : null, (0, r.jsx)(d.GI, {
            createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
            webpackId: 364964,
            renderFallback: o,
            render: t => {
              if (!(e.lang && t.hasLanguage(e.lang))) return o();
              {
                let n = t.highlight(e.lang, e.content, !0);
                return null == n ? o() : (0, r.jsx)("code", {
                  className: a()(k.scrollbarGhostHairline, "hljs", n.language),
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
    react: (e, t, n) => (0, r.jsx)(f.Z, {
      type: f.Z.Types.TEXT,
      inline: n.formatInline,
      renderTextElement: (e, t) => null == e || e.type !== u.Z || t ? e : i.cloneElement(e, {
        tabIndex: -1
      }),
      children: () => t(e.content, n)
    }, n.key)
  },
  soundboard: {
    react: (e, t, n) => (0, r.jsx)(v.ZP, {
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
        V(e.guildId, e.id, e.itemId)
      };
      return (0, T.k)(e.id) ? (0, r.jsxs)(m.Z, {
        role: "link",
        onClick: i,
        className: "channelMention",
        iconType: e.id,
        children: [t(e.mainContent, n), null != e.itemContent ? (0, r.jsx)(g.Z, {}) : null, null != e.itemContent ? t(e.itemContent, n) : null]
      }, n.key) : null
    }
  },
  timestamp: {
    react: (e, t, n) => (0, r.jsx)(N.Z, {
      node: e
    }, n.key)
  },
  list: {
    react: (e, t, n) => {
      let r = e.ordered ? "ol" : "ul",
        i = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
      return (0, s.reactElement)(r, "".concat(n.key), {
        start: e.start,
        className: n.formatInline ? M.inlineFormat : null,
        style: {
          "--totalCharacters": i
        },
        children: e.items.map((e, r) => {
          let i = (0, s.reactElement)("span", "".concat(n.key, "-").concat(r, "-innerSpan"), {
            children: t(e, n)
          });
          return (0, s.reactElement)("li", "".concat(n.key, "-").concat(r) + r, {
            children: i
          })
        })
      })
    }
  },
  heading: {
    react: (e, t, n) => {
      let r = (0, s.reactElement)("span", "".concat(n.key, "-innerSpan"), {
        children: t(e.content, n)
      });
      return (0, s.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
        children: r,
        className: n.formatInline ? M.inlineFormat : null
      })
    }
  },
  guild: {
    react: (e, t, n) => {
      let i = S.Z.getGuild(e.guildId);
      return (0, r.jsx)(h.Z, {
        guild: i,
        children: (0, T.S)(e, t, n)
      }, n.key)
    }
  },
  channel: {
    react: (e, t, n) => (0, r.jsx)(_.Z, {
      iconType: e.iconType,
      children: (0, T.S)(e, t, n)
    }, n.key)
  },
  message: {
    react: (e, t, n) => (0, r.jsx)(E.Z, {}, n.key)
  },
  subtext: {
    react: (e, t, n) => {
      let r = (0, s.reactElement)("span", "".concat(n.key, "-innerSpan"), {
        children: t(e.content, n)
      });
      return (0, s.reactElement)("small", (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
        children: r,
        className: n.formatInline ? M.inlineFormat : null
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

function Y(e) {
  return B(U({}, W), {
    link: (0, w.Z)(e),
    devLink: (0, P.Z)(e),
    emoji: Z(e),
    customEmoji: F(e),
    channelMention: (0, C.Z)(e),
    commandMention: (0, R.ZP)(e),
    attachmentLink: (0, A.Z)(e),
    shopLink: (0, D.Z)(e)
  })
}