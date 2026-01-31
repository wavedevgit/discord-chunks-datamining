/** Chunk was on 17534 **/
/** chunk id: 681281, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => F
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk440594 = require("./440594.js"),
  Chunk429913 = require("./429913.js"),
  Chunk309698 = require("./309698.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk508654 = require("./508654.js"),
  Chunk974930 = require("./974930.js"),
  Chunk961314 = require("./961314.jsx"),
  Chunk58736 = require("./58736.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk353428 = require("./353428.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk46054 = require("./46054.js"),
  Chunk164203 = require("./164203.jsx"),
  Chunk665691 = require("./665691.js"),
  Chunk241756 = require("./241756.js"),
  Chunk447404 = require("./447404.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk532622 = require("./532622.js"),
  Chunk780642 = require("./780642.js"),
  Chunk416528 = require("./416528.jsx"),
  Chunk525788 = require("./525788.jsx"),
  Chunk136523 = require("./136523.jsx"),
  Chunk806931 = require("./806931.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk597217 = require("./597217.js"),
  Chunk206314 = require("./206314.js");

function V(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, l = (0, j.Us)(), i = (0, s.bG)([I.A], () => I.A.getLayout(n.id, l));
  return (0, r.jsx)(S.A, {
    children: (0, r.jsx)(w.A, {
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: l === L.BRT.POPOUT || i === L.DUB.FULL_SCREEN
    })
  })
}

function B(e) {
  let {
    user: t,
    channel: n,
    stream: l,
    color: i
  } = e, s = (0, C.A)(n, t, l);
  return null == t || null == l ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.A, {
      className: k.my,
      size: o._3J.SIZE_24,
      user: t,
      animate: false
    }), (0, r.jsx)(o.Text, {
      className: k.W$,
      variant: "text-md/medium",
      color: i,
      children: s
    })]
  })
}

function H(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: l,
      channel: i
    } = e,
    s = (0, T.A)(i, true),
    a = (0, m.Qs)(i.id),
    c = null != a ? (0, b.G3)(a) : null,
    d = null != a;
  if ((null == l ? true : l.type) === D.lp.ACTIVITY) null != n && (t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.Ay.Divider, {
      className: k.yF
    }), (0, r.jsx)(f.A, {
      game: n,
      className: k.RI
    }), (0, r.jsx)(o.Text, {
      className: k.W$,
      variant: "text-md/normal",
      color: "none",
      children: (0, u.A)(n.name)
    }), s && (0, r.jsx)(V, {
      channel: i,
      focusedParticipant: l
    })]
  }));
  else if ((null == l ? true : l.type) === D.lp.STREAM) {
    let e = l.user,
      n = l.stream;
    t = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(y.Ay.Divider, {
        className: k.yF
      }), (0, r.jsx)(B, {
        user: e,
        channel: i,
        stream: n,
        color: s ? "text-strong" : "none"
      }), s && (0, r.jsx)(V, {
        channel: i,
        focusedParticipant: l
      })]
    })
  } else d && (t = (0, r.jsx)(A.A, {
    guildEvent: a,
    recurrenceId: c
  }));
  return (0, r.jsx)("div", {
    className: k.kL,
    children: t
  })
}

function F(e) {
  let {
    channel: t,
    guild: l,
    appContext: c,
    inCall: u,
    isChatOpen: f,
    exitFullScreen: m
  } = e, {
    focusedParticipant: b
  } = (0, s.cf)([I.A], () => ({
    focusedParticipant: I.A.getSelectedParticipant(t.id),
    participantsOpen: I.A.getParticipantsOpen(t.id)
  }), [t.id]), A = (0, p.Ay)(t), j = (0, g.gU)(t), [C] = (0, d.A)((null == b ? true : b.type) === D.lp.ACTIVITY ? [b.applicationId] : []), S = G.intl.string(G.t.BVZqJl);
  t.isDM() ? S = G.intl.string(G.t.jN2DfZ) : t.isGroupDM() && (S = G.intl.string(G.t["e5y+gm"]));
  let T = (0, s.bG)([h.A], () => h.A.getChannelStatus(t)),
    w = t.isGuildVoice() && u && null != T && T.length > 0,
    L = (0, N.Ay)(t),
    V = w ? (0, r.jsx)(a.m, {
      asContainer: true,
      text: G.intl.string(G.t.Mgpxiw),
      delay: 500,
      position: "bottom",
      shouldShow: L,
      children: (0, r.jsxs)(o.DUT, {
        className: i()(k.WH, {
          [k.BI]: L
        }),
        onClick: L ? function() {
          (0, o.mMO)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 136523));
            return n => (0, r.jsx)(e, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({
              channel: t
            }, n))
          }, {
            modalKey: R.m
          })
        } : true,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: i()(k.Gh, U.PT, {
            [k.BI]: L
          }),
          children: x.A.parseVoiceChannelStatus(T, true, {
            channelId: t.id
          })
        }), L && (0, r.jsx)(o.R2l, {
          size: "custom",
          color: "currentColor",
          className: i()(k.rD, k.BI),
          width: 14,
          height: 14
        })]
      })
    }) : null,
    B = (0, E.bG)({
      channelId: t.id
    });
  return (0, r.jsxs)("div", {
    className: k.SC,
    children: [(0, r.jsx)(o.NPJ, {
      theme: M.NJ.DARK,
      children: e => (0, r.jsxs)(y.Ay, {
        onDoubleClick: O.I,
        transparent: true,
        className: i()(e, k.jr),
        innerClassName: k.gi,
        toolbarClassName: k.KE,
        childrenBottom: V,
        toolbar: (0, r.jsx)(P.A, {
          channel: t,
          appContext: c,
          inCall: u,
          isChatOpen: f,
          exitFullScreen: m
        }),
        children: [(0, r.jsx)(y.Ay.Title, {
          wrapperClassName: k.DD,
          children: (0, r.jsxs)(r.Fragment, {
            children: [null != j ? (0, r.jsx)(y.Ay.ChannelIcon, {
              icon: j,
              "aria-label": S
            }) : null, A, B && (0, r.jsx)(a.m, {
              text: G.intl.string(G.t.QyZ4Td),
              children: (0, r.jsx)(o.m5V, {
                size: "xs",
                "aria-label": G.intl.string(G.t.VHXh8a),
                color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                className: k.vW
              })
            })]
          })
        }), (0, r.jsx)(_.i$, {
          channel: t,
          guild: l
        }), (0, r.jsx)(H, {
          focusedApplication: C,
          focusedParticipant: b,
          channel: t
        })]
      })
    }), (0, r.jsx)(v.A, {
      channelId: t.id
    })]
  })
}