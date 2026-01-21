/** Chunk was on 82124 **/
/** chunk id: 742603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
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
  Chunk303962 = require("./303962.js"),
  Chunk960324 = require("./960324.js");

function G(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, i = (0, x.bp)(), l = (0, a.e7)([P.Z], () => P.Z.getLayout(n.id, i));
  return (0, r.jsx)(I.Z, {
    children: (0, r.jsx)(A.Z, {
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: i === D.IlC.POPOUT || l === D.AEg.FULL_SCREEN
    })
  })
}

function B(e) {
  let {
    user: t,
    channel: n,
    stream: i,
    color: l
  } = e, a = (0, _.Z)(n, t, i);
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
    a = (0, N.Z)(l, true),
    o = (0, m.qY)(l.id),
    c = null != o ? (0, b.DK)(o) : null,
    d = null != o;
  if ((null == i ? true : i.type) === R.fO.ACTIVITY) null != n && (t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(v.ZP.Divider, {
      className: L.divider
    }), (0, r.jsx)(g.Z, {
      game: n,
      className: L.activityIcon
    }), (0, r.jsx)(s.Text, {
      className: L.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, u.Z)(n.name)
    }), a && (0, r.jsx)(G, {
      channel: l,
      focusedParticipant: i
    })]
  }));
  else if ((null == i ? true : i.type) === R.fO.STREAM) {
    let e = i.user,
      n = i.stream;
    t = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(v.ZP.Divider, {
        className: L.divider
      }), (0, r.jsx)(B, {
        user: e,
        channel: l,
        stream: n,
        color: a ? "text-strong" : "none"
      }), a && (0, r.jsx)(G, {
        channel: l,
        focusedParticipant: i
      })]
    })
  } else d && (t = (0, r.jsx)(y.Z, {
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
    isChatOpen: g,
    exitFullScreen: m
  } = e, {
    focusedParticipant: b
  } = (0, a.cj)([P.Z], () => ({
    focusedParticipant: P.Z.getSelectedParticipant(t.id),
    participantsOpen: P.Z.getParticipantsOpen(t.id)
  }), [t.id]), y = (0, f.ZP)(t), x = (0, h.KS)(t), [_] = (0, d.Z)((null == b ? true : b.type) === R.fO.ACTIVITY ? [b.applicationId] : []), I = k.intl.string(k.t.BVZqJl);
  t.isDM() ? I = k.intl.string(k.t.jN2DfZ) : t.isGroupDM() && (I = k.intl.string(k.t["e5y+gm"]));
  let N = (0, a.e7)([p.Z], () => p.Z.getChannelStatus(t)),
    A = t.isGuildVoice() && u && null != N && N.length > 0,
    D = (0, Z.ZP)(t),
    G = A ? (0, r.jsx)(o.u, {
      asContainer: true,
      text: k.intl.string(k.t.Mgpxiw),
      delay: 500,
      position: "bottom",
      shouldShow: D,
      children: (0, r.jsxs)(s.P3F, {
        className: l()(L.channelStatusClickable, {
          [L.hoverable]: D
        }),
        onClick: D ? function() {
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
            [L.hoverable]: D
          }),
          children: C.Z.parseVoiceChannelStatus(N, true, {
            channelId: t.id
          })
        }), D && (0, r.jsx)(s.vdY, {
          size: "custom",
          color: "currentColor",
          className: l()(L.pencilIcon, L.hoverable),
          width: 14,
          height: 14
        })]
      })
    }) : null,
    B = (0, S.m$)({
      channelId: t.id
    });
  return (0, r.jsxs)("div", {
    className: L.subtitleContainer,
    children: [(0, r.jsx)(s.f6W, {
      theme: M.BR.DARK,
      children: e => (0, r.jsxs)(v.ZP, {
        onDoubleClick: O.O,
        transparent: true,
        className: l()(e, L.headerBar),
        innerClassName: L.headerBarChildren,
        toolbarClassName: L.toolbar,
        childrenBottom: G,
        toolbar: (0, r.jsx)(T.Z, {
          channel: t,
          appContext: c,
          inCall: u,
          isChatOpen: g,
          exitFullScreen: m
        }),
        children: [(0, r.jsx)(v.ZP.Title, {
          wrapperClassName: L.title,
          children: (0, r.jsxs)(r.Fragment, {
            children: [null != x ? (0, r.jsx)(v.ZP.ChannelIcon, {
              icon: x,
              "aria-label": I
            }) : null, y, B && (0, r.jsx)(o.u, {
              text: k.intl.string(k.t.QyZ4Td),
              children: (0, r.jsx)(s.tQf, {
                size: "xs",
                "aria-label": k.intl.string(k.t.VHXh8a),
                color: s.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                className: L.secureFramesIcon
              })
            })]
          })
        }), (0, r.jsx)(j.TS, {
          channel: t,
          guild: i
        }), (0, r.jsx)(F, {
          focusedApplication: _,
          focusedParticipant: b,
          channel: t
        })]
      })
    }), (0, r.jsx)(E.Z, {
      channelId: t.id
    })]
  })
}