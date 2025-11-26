/** Chunk was on 34740 **/
/** chunk id: 742603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk854698 = require("./854698.js"),
  Chunk897669 = require("./897669.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk910611 = require("./910611.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk801604 = require("./801604.jsx"),
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

function F(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, r = (0, x.bp)(), l = (0, a.e7)([I.Z], () => I.Z.getLayout(n.id, r));
  return (0, i.jsx)(P.Z, {
    children: (0, i.jsx)(A.Z, {
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: r === R.IlC.POPOUT || l === R.AEg.FULL_SCREEN
    })
  })
}

function B(e) {
  let {
    user: t,
    channel: n,
    stream: r,
    color: l
  } = e, a = (0, S.Z)(n, t, r);
  return null == t || null == r ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.Z, {
      className: k.avatar,
      size: s.EFr.SIZE_24,
      user: t,
      animate: false
    }), (0, i.jsx)(s.Text, {
      className: k.playingText,
      variant: "text-md/medium",
      color: l,
      children: a
    })]
  })
}

function H(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: r,
      channel: l
    } = e,
    a = (0, T.Z)(l, true),
    o = (0, g.qY)(l.id),
    c = null != o ? (0, b.DK)(o) : null,
    d = null != o;
  if ((null == r ? true : r.type) === M.fO.ACTIVITY) null != n && (t = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(C.ZP.Divider, {
      className: k.divider
    }), (0, i.jsx)(m.Z, {
      game: n,
      className: k.activityIcon
    }), (0, i.jsx)(s.Text, {
      className: k.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, u.Z)(n.name)
    }), a && (0, i.jsx)(F, {
      channel: l,
      focusedParticipant: r
    })]
  }));
  else if ((null == r ? true : r.type) === M.fO.STREAM) {
    let e = r.user,
      n = r.stream;
    t = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(C.ZP.Divider, {
        className: k.divider
      }), (0, i.jsx)(B, {
        user: e,
        channel: l,
        stream: n,
        color: a ? "header-primary" : "none"
      }), a && (0, i.jsx)(F, {
        channel: l,
        focusedParticipant: r
      })]
    })
  } else d && (t = (0, i.jsx)(y.Z, {
    guildEvent: o,
    recurrenceId: c
  }));
  return (0, i.jsx)("div", {
    className: k.container,
    children: t
  })
}

function V(e) {
  let {
    channel: t,
    guild: r,
    appContext: c,
    inCall: u,
    isChatOpen: m,
    exitFullScreen: g
  } = e, {
    focusedParticipant: b
  } = (0, a.cj)([I.Z], () => ({
    focusedParticipant: I.Z.getSelectedParticipant(t.id),
    participantsOpen: I.Z.getParticipantsOpen(t.id)
  }), [t.id]), y = (0, h.ZP)(t), x = (0, f.KS)(t), [S] = (0, d.Z)((null == b ? true : b.type) === M.fO.ACTIVITY ? [b.applicationId] : []), P = D.intl.string(D.t.BVZqJl);
  t.isDM() ? P = D.intl.string(D.t.jN2DfZ) : t.isGroupDM() && (P = D.intl.string(D.t["e5y+gm"]));
  let T = (0, a.e7)([p.Z], () => p.Z.getChannelStatus(t)),
    A = t.isGuildVoice() && u && null != T && T.length > 0,
    R = (0, Z.ZP)(t),
    F = A ? (0, i.jsx)(o.u, {
      asContainer: true,
      text: D.intl.string(D.t.Mgpxiw),
      delay: 500,
      position: "bottom",
      shouldShow: R,
      children: (0, i.jsxs)(s.P3F, {
        className: l()(k.channelStatusClickable, {
          [k.hoverable]: R
        }),
        onClick: R ? function() {
          (0, s.ZDy)(async () => {
            let {
              default: e
            } = await Promise.resolve().then(n.bind(n, 339340));
            return n => (0, i.jsx)(e, function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), i.forEach(function(t) {
                  var i;
                  i = n[t], t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = i
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
        children: [(0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          className: l()(k.channelStatus, U.markup, {
            [k.hoverable]: R
          }),
          children: O.Z.parseVoiceChannelStatus(T, true, {
            channelId: t.id
          })
        }), R && (0, i.jsx)(s.vdY, {
          size: "custom",
          color: "currentColor",
          className: l()(k.pencilIcon, k.hoverable),
          width: 14,
          height: 14
        })]
      })
    }) : null,
    B = (0, E.m$)({
      channelId: t.id
    });
  return (0, i.jsxs)("div", {
    className: k.subtitleContainer,
    children: [(0, i.jsx)(s.f6W, {
      theme: L.BR.DARK,
      children: e => (0, i.jsxs)(C.ZP, {
        onDoubleClick: v.O,
        transparent: true,
        className: l()(e, k.headerBar),
        innerClassName: k.headerBarChildren,
        toolbarClassName: k.toolbar,
        childrenBottom: F,
        toolbar: (0, i.jsx)(N.Z, {
          channel: t,
          appContext: c,
          inCall: u,
          isChatOpen: m,
          exitFullScreen: g
        }),
        children: [(0, i.jsx)(C.ZP.Title, {
          wrapperClassName: k.title,
          children: (0, i.jsxs)(i.Fragment, {
            children: [null != x ? (0, i.jsx)(C.ZP.ChannelIcon, {
              icon: x,
              "aria-label": P
            }) : null, y, B && (0, i.jsx)(o.u, {
              text: D.intl.string(D.t.QyZ4Td),
              children: (0, i.jsx)(s.tQf, {
                size: "xs",
                "aria-label": D.intl.string(D.t.VHXh8a),
                color: s.TVs.colors.INTERACTIVE_NORMAL,
                className: k.secureFramesIcon
              })
            })]
          })
        }), (0, i.jsx)(_.TS, {
          channel: t,
          guild: r
        }), (0, i.jsx)(H, {
          focusedApplication: S,
          focusedParticipant: b,
          channel: t
        })]
      })
    }), (0, i.jsx)(j.Z, {
      channelId: t.id
    })]
  })
}