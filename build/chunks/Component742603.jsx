/** Chunk was on 62987 **/
/** chunk id: 742603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk40851 = require("./40851.jsx"),
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

function U(e) {
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
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, i = (0, c.bp)(), l = (0, a.e7)([I.Z], () => I.Z.getLayout(n.id, i));
  return (0, r.jsx)(S.Z, {
    children: (0, r.jsx)(N.Z, {
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: i === R.IlC.POPOUT || l === R.AEg.FULL_SCREEN
    })
  })
}

function H(e) {
  let {
    user: t,
    channel: n,
    stream: i,
    color: l
  } = e, a = (0, E.Z)(n, t, i);
  return null == t || null == i ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.Z, {
      className: k.avatar,
      size: o.EFr.SIZE_24,
      user: t,
      animate: false
    }), (0, r.jsx)(o.Text, {
      className: k.playingText,
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
    a = (0, Z.Z)(l, true),
    s = (0, g.qY)(l.id),
    c = null != s ? (0, b.DK)(s) : null,
    d = null != s;
  if ((null == i ? true : i.type) === w.fO.ACTIVITY) null != n && (t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.ZP.Divider, {
      className: k.divider
    }), (0, r.jsx)(m.Z, {
      game: n,
      className: k.activityIcon
    }), (0, r.jsx)(o.Text, {
      className: k.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, u.Z)(n.name)
    }), a && (0, r.jsx)(G, {
      channel: l,
      focusedParticipant: i
    })]
  }));
  else if ((null == i ? true : i.type) === w.fO.STREAM) {
    let e = i.user,
      n = i.stream;
    t = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.ZP.Divider, {
        className: k.divider
      }), (0, r.jsx)(H, {
        user: e,
        channel: l,
        stream: n,
        color: a ? "header-primary" : "none"
      }), a && (0, r.jsx)(G, {
        channel: l,
        focusedParticipant: i
      })]
    })
  } else d && (t = (0, r.jsx)(y.Z, {
    guildEvent: s,
    recurrenceId: c
  }));
  return (0, r.jsx)("div", {
    className: k.container,
    children: t
  })
}

function V(e) {
  let {
    channel: t,
    guild: i,
    appContext: s,
    inCall: c,
    isChatOpen: u,
    exitFullScreen: m
  } = e, {
    focusedParticipant: g
  } = (0, a.cj)([I.Z], () => ({
    focusedParticipant: I.Z.getSelectedParticipant(t.id),
    participantsOpen: I.Z.getParticipantsOpen(t.id)
  }), [t.id]), b = (0, h.ZP)(t), y = (0, f.KS)(t), [E] = (0, d.Z)((null == g ? true : g.type) === w.fO.ACTIVITY ? [g.applicationId] : []), S = D.intl.string(D.t.BVZqJi);
  t.isDM() ? S = D.intl.string(D.t.jN2DfX) : t.isGroupDM() && (S = D.intl.string(D.t["e5y+go"]));
  let Z = (0, a.e7)([p.Z], () => p.Z.getChannelStatus(t)),
    N = t.isGuildVoice() && c && null != Z && Z.length > 0,
    R = (0, P.ZP)(t),
    G = N ? (0, r.jsx)(o.ua7, {
      text: D.intl.string(D.t.Mgpxi4),
      delay: 500,
      position: "bottom",
      shouldShow: R,
      children: e => (0, r.jsxs)(o.P3F, B(U({}, e), {
        className: l()(k.channelStatusClickable, {
          [k.hoverable]: R
        }),
        onClick: R ? H : true,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-xs/normal",
          className: l()(k.channelStatus, L.markup, {
            [k.hoverable]: R
          }),
          children: x.Z.parseVoiceChannelStatus(Z, true, {
            channelId: t.id
          })
        }), R && (0, r.jsx)(o.vdY, {
          size: "custom",
          color: "currentColor",
          className: l()(k.pencilIcon, k.hoverable),
          width: 14,
          height: 14
        })]
      }))
    }) : null;

  function H() {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 339340));
      return n => (0, r.jsx)(e, U({
        channel: t
      }, n))
    }, {
      modalKey: A.a
    })
  }
  let V = (0, j.m$)({
    channelId: t.id
  });
  return (0, r.jsxs)("div", {
    className: k.subtitleContainer,
    children: [(0, r.jsx)(o.f6W, {
      theme: M.BR.DARK,
      children: e => (0, r.jsxs)(_.ZP, {
        onDoubleClick: C.O,
        transparent: true,
        className: l()(e, k.headerBar),
        innerClassName: k.headerBarChildren,
        toolbarClassName: k.toolbar,
        childrenBottom: G,
        toolbar: (0, r.jsx)(T.Z, {
          channel: t,
          appContext: s,
          inCall: c,
          isChatOpen: u,
          exitFullScreen: m
        }),
        children: [(0, r.jsx)(_.ZP.Title, {
          wrapperClassName: k.title,
          children: (0, r.jsxs)(r.Fragment, {
            children: [null != y ? (0, r.jsx)(_.ZP.ChannelIcon, {
              icon: y,
              "aria-label": S
            }) : null, b, V && (0, r.jsx)(o.ua7, {
              text: D.intl.string(D.t.QyZ4TU),
              children: e => (0, r.jsx)(o.tQf, B(U({}, e), {
                size: "xs",
                "aria-label": D.intl.string(D.t.VHXh8f),
                color: o.TVs.colors.INTERACTIVE_NORMAL,
                className: k.secureFramesIcon
              }))
            })]
          })
        }), (0, r.jsx)(v.TS, {
          channel: t,
          guild: i
        }), (0, r.jsx)(F, {
          focusedApplication: E,
          focusedParticipant: g,
          channel: t
        })]
      })
    }), (0, r.jsx)(O.Z, {
      channelId: t.id
    })]
  })
}