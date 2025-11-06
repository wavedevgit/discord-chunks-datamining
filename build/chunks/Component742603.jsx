/** Chunk was on 88647 **/
/** chunk id: 742603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk657305 = require("./657305.js"),
  Chunk835473 = require("./835473.js"),
  Chunk12498 = require("./12498.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk554747 = require("./554747.js"),
  Chunk954313 = require("./954313.js"),
  Chunk897669 = require("./897669.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk910611 = require("./910611.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk134483 = require("./134483.jsx"),
  Chunk210975 = require("./210975.js"),
  Chunk809244 = require("./809244.js"),
  Chunk618158 = require("./618158.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk362721 = require("./362721.js"),
  Chunk887012 = require("./887012.js"),
  Chunk613548 = require("./613548.jsx"),
  Chunk221888 = require("./221888.jsx"),
  Chunk339340 = require("./339340.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk39219 = require("./39219.js"),
  Chunk430864 = require("./430864.js");

function B(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, i = (0, O.bp)(), l = (0, a.e7)([I.Z], () => I.Z.getLayout(n.id, i));
  return (0, r.jsx)(P.Z, {
    children: (0, r.jsx)(A.Z, {
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: i === R.IlC.POPOUT || l === R.AEg.FULL_SCREEN
    })
  })
}

function V(e) {
  let {
    user: t,
    channel: n,
    stream: i,
    color: l
  } = e, a = (0, S.Z)(n, t, i);
  return null == t || null == i ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      className: L.avatar,
      size: s.EFr.SIZE_24,
      user: t,
      animate: false
    }), (0, r.jsx)(s.Text, {
      className: L.playingText,
      variant: "text-md/medium",
      color: l,
      children: a
    })]
  })
}

function F(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: i,
      channel: l
    } = e,
    a = (0, T.Z)(l, true),
    o = (0, g.qY)(l.id),
    c = null != o ? (0, b.DK)(o) : null,
    d = null != o;
  if ((null == i ? true : i.type) === M.fO.ACTIVITY) null != n && (t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.ZP.Divider, {
      className: L.divider
    }), (0, r.jsx)(m.Z, {
      game: n,
      className: L.activityIcon
    }), (0, r.jsx)(s.Text, {
      className: L.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, u.Z)(n.name)
    }), a && (0, r.jsx)(B, {
      channel: l,
      focusedParticipant: i
    })]
  }));
  else if ((null == i ? true : i.type) === M.fO.STREAM) {
    let e = i.user,
      n = i.stream;
    t = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(y.ZP.Divider, {
        className: L.divider
      }), (0, r.jsx)(V, {
        user: e,
        channel: l,
        stream: n,
        color: a ? "header-primary" : "none"
      }), a && (0, r.jsx)(B, {
        channel: l,
        focusedParticipant: i
      })]
    })
  } else d && (t = (0, r.jsx)(_.Z, {
    guildEvent: o,
    recurrenceId: c
  }));
  return (0, r.jsx)("div", {
    className: L.container,
    children: t
  })
}

function H(e) {
  let {
    channel: t,
    guild: i,
    appContext: c,
    inCall: u,
    isChatOpen: m,
    exitFullScreen: g
  } = e, {
    focusedParticipant: b
  } = (0, a.cj)([I.Z], () => ({
    focusedParticipant: I.Z.getSelectedParticipant(t.id),
    participantsOpen: I.Z.getParticipantsOpen(t.id)
  }), [t.id]), _ = (0, f.ZP)(t), O = (0, h.KS)(t), [S] = (0, d.Z)((null == b ? true : b.type) === M.fO.ACTIVITY ? [b.applicationId] : []), P = k.intl.string(k.t.BVZqJl);
  t.isDM() ? P = k.intl.string(k.t.jN2DfZ) : t.isGroupDM() && (P = k.intl.string(k.t["e5y+gm"]));
  let T = (0, a.e7)([p.Z], () => p.Z.getChannelStatus(t)),
    A = t.isGuildVoice() && u && null != T && T.length > 0,
    R = (0, Z.ZP)(t),
    B = A ? (0, r.jsx)(o.u, {
      asContainer: true,
      text: k.intl.string(k.t.Mgpxiw),
      delay: 500,
      position: "bottom",
      shouldShow: R,
      children: (0, r.jsxs)(s.P3F, {
        className: l()(L.channelStatusClickable, {
          [L.hoverable]: R
        }),
        onClick: R ? function() {
          (0, s.ZDy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 339340));
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
            modalKey: w.a
          })
        } : true,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          className: l()(L.channelStatus, U.markup, {
            [L.hoverable]: R
          }),
          children: x.Z.parseVoiceChannelStatus(T, true, {
            channelId: t.id
          })
        }), R && (0, r.jsx)(s.vdY, {
          size: "custom",
          color: "currentColor",
          className: l()(L.pencilIcon, L.hoverable),
          width: 14,
          height: 14
        })]
      })
    }) : null,
    V = (0, j.m$)({
      channelId: t.id
    });
  return (0, r.jsxs)("div", {
    className: L.subtitleContainer,
    children: [(0, r.jsx)(s.f6W, {
      theme: D.BR.DARK,
      children: e => (0, r.jsxs)(y.ZP, {
        onDoubleClick: C.O,
        transparent: true,
        className: l()(e, L.headerBar),
        innerClassName: L.headerBarChildren,
        toolbarClassName: L.toolbar,
        childrenBottom: B,
        toolbar: (0, r.jsx)(N.Z, {
          channel: t,
          appContext: c,
          inCall: u,
          isChatOpen: m,
          exitFullScreen: g
        }),
        children: [(0, r.jsx)(y.ZP.Title, {
          wrapperClassName: L.title,
          children: (0, r.jsxs)(r.Fragment, {
            children: [null != O ? (0, r.jsx)(y.ZP.ChannelIcon, {
              icon: O,
              "aria-label": P
            }) : null, _, V && (0, r.jsx)(o.u, {
              text: k.intl.string(k.t.QyZ4Td),
              children: (0, r.jsx)(s.tQf, {
                size: "xs",
                "aria-label": k.intl.string(k.t.VHXh8a),
                color: s.TVs.colors.INTERACTIVE_NORMAL,
                className: L.secureFramesIcon
              })
            })]
          })
        }), (0, r.jsx)(v.TS, {
          channel: t,
          guild: i
        }), (0, r.jsx)(F, {
          focusedApplication: S,
          focusedParticipant: b,
          channel: t
        })]
      })
    }), (0, r.jsx)(E.Z, {
      channelId: t.id
    })]
  })
}