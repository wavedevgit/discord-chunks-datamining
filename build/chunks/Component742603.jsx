/** Chunk was on 5665 **/
/** chunk id: 742603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk937995 = require("./937995.jsx"),
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

function G(e, t) {
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

function H(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, i = (0, u.bp)(), l = (0, o.e7)([Z.Z], () => Z.Z.getLayout(n.id, i));
  return (0, r.jsx)(P.Z, {
    children: (0, r.jsx)(w.Z, {
      participant: t,
      maxVisibleUsers: 5,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: i === D.IlC.POPOUT || l === D.AEg.FULL_SCREEN
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
      className: U.avatar,
      size: s.EFr.SIZE_24,
      user: t,
      animate: false
    }), (0, r.jsx)(s.Text, {
      className: U.playingText,
      variant: "text-md/medium",
      color: l,
      children: a
    })]
  })
}

function z(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: i,
      channel: l
    } = e,
    a = (0, N.Z)(l, true),
    o = (0, b.qY)(l.id),
    c = null != o ? (0, _.DK)(o) : null,
    u = null != o;
  if ((null == i ? true : i.type) === M.fO.ACTIVITY) null != n && (t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(C.ZP.Divider, {
      className: U.divider
    }), (0, r.jsx)(g.Z, {
      game: n,
      className: U.activityIcon
    }), (0, r.jsx)(s.Text, {
      className: U.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, d.Z)(n.name)
    }), a && (0, r.jsx)(H, {
      channel: l,
      focusedParticipant: i
    })]
  }));
  else if ((null == i ? true : i.type) === M.fO.STREAM) {
    let e = i.user,
      n = i.stream;
    t = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(C.ZP.Divider, {
        className: U.divider
      }), (0, r.jsx)(V, {
        user: e,
        channel: l,
        stream: n,
        color: a ? "header-primary" : "none"
      }), a && (0, r.jsx)(H, {
        channel: l,
        focusedParticipant: i
      })]
    })
  } else u && (t = (0, r.jsx)(y.Z, {
    guildEvent: o,
    recurrenceId: c
  }));
  return (0, r.jsx)("div", {
    className: U.container,
    children: t
  })
}

function W(e) {
  let {
    channel: t,
    guild: l,
    appContext: c,
    inCall: u,
    isChatOpen: d,
    exitFullScreen: g
  } = e, {
    focusedParticipant: b
  } = (0, o.cj)([Z.Z], () => ({
    focusedParticipant: Z.Z.getSelectedParticipant(t.id),
    participantsOpen: Z.Z.getParticipantsOpen(t.id)
  }), [t.id]), _ = i.useContext(I.h9), y = (0, f.ZP)(t), S = (0, m.KS)(t), [P] = (0, p.Z)((null == b ? true : b.type) === M.fO.ACTIVITY ? [b.applicationId] : []), N = k.intl.string(k.t.BVZqJi);
  t.isDM() ? N = k.intl.string(k.t.jN2DfX) : t.isGroupDM() && (N = k.intl.string(k.t["e5y+go"]));
  let w = (0, o.e7)([h.Z], () => h.Z.getChannelStatus(t)),
    D = t.isGuildVoice() && u && null != w && w.length > 0,
    H = (0, T.ZP)(t),
    V = D ? (0, r.jsx)(s.ua7, {
      text: k.intl.string(k.t.Mgpxi4),
      delay: 500,
      position: "bottom",
      shouldShow: H,
      children: e => (0, r.jsxs)(s.P3F, G(F({}, e), {
        className: a()(U.channelStatusClickable, {
          [U.hoverable]: H
        }),
        onClick: H ? W : true,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          className: a()(U.channelStatus, B.markup, {
            [U.hoverable]: H
          }),
          children: O.Z.parseVoiceChannelStatus(w, true, {
            channelId: t.id
          })
        }), H && (0, r.jsx)(s.vdY, {
          size: "custom",
          color: "currentColor",
          className: a()(U.pencilIcon, U.hoverable),
          width: 14,
          height: 14
        })]
      }))
    }) : null;

  function W() {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 339340));
      return n => (0, r.jsx)(e, F({
        channel: t
      }, n))
    }, {
      modalKey: R.a
    })
  }
  let Y = (0, E.m$)({
    channelId: t.id
  });
  return (0, r.jsxs)("div", {
    className: U.subtitleContainer,
    children: [(0, r.jsx)(s.f6W, {
      theme: L.BR.DARK,
      children: e => (0, r.jsxs)(C.ZP, {
        onDoubleClick: x.O,
        transparent: true,
        showToolbar: !_,
        className: a()(e, U.headerBar),
        innerClassName: U.headerBarChildren,
        toolbarClassName: U.toolbar,
        childrenBottom: V,
        toolbar: (0, r.jsx)(A.Z, {
          channel: t,
          appContext: c,
          inCall: u,
          isChatOpen: d,
          exitFullScreen: g
        }),
        children: [(0, r.jsx)(C.ZP.Title, {
          wrapperClassName: U.title,
          children: (0, r.jsxs)(r.Fragment, {
            children: [null != S ? (0, r.jsx)(C.ZP.ChannelIcon, {
              icon: S,
              "aria-label": N
            }) : null, y, Y && (0, r.jsx)(s.ua7, {
              text: k.intl.string(k.t.QyZ4TU),
              children: e => (0, r.jsx)(s.tQf, G(F({}, e), {
                size: "xs",
                "aria-label": k.intl.string(k.t.VHXh8f),
                color: s.TVs.colors.INTERACTIVE_NORMAL,
                className: U.secureFramesIcon
              }))
            })]
          })
        }), (0, r.jsx)(v.TS, {
          channel: t,
          guild: l
        }), (0, r.jsx)(z, {
          focusedApplication: P,
          focusedParticipant: b,
          channel: t
        })]
      })
    }), (0, r.jsx)(j.Z, {
      channelId: t.id
    })]
  })
}