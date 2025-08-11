/** Chunk was on web.js **/
/** chunk id: 742603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk854698 = require("./854698.js"),
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
  Chunk610633 = require("./610633.js"),
  Chunk73433 = require("./73433.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
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

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = 5;

function W(e) {
  let {
    focusedParticipant: t,
    channel: n
  } = e, i = (0, u.bp)(), o = (0, s.e7)([R.Z], () => R.Z.getLayout(n.id, i));
  return (0, r.jsx)(C.Z, {
    children: (0, r.jsx)(L.Z, {
      participant: t,
      maxVisibleUsers: Y,
      guildId: n.getGuildId(),
      channelId: n.id,
      disableInteraction: i === k.IlC.POPOUT || o === k.AEg.FULL_SCREEN
    })
  })
}

function K(e) {
  let {
    user: t,
    channel: n,
    stream: i,
    color: o
  } = e, a = (0, A.Z)(n, t, i);
  return null == t || null == i ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Z, {
      className: G.avatar,
      size: l.EFr.SIZE_24,
      user: t,
      animate: false
    }), (0, r.jsx)(l.Text, {
      className: G.playingText,
      variant: "text-md/medium",
      color: o,
      children: a
    })]
  })
}

function z(e) {
  let t, {
      focusedApplication: n,
      focusedParticipant: i,
      channel: o
    } = e,
    a = (0, w.Z)(o, true),
    s = (0, g.qY)(o.id),
    c = null != s ? (0, E.DK)(s) : null,
    u = null != s;
  if ((null == i ? true : i.type) === M.fO.ACTIVITY) null != n && (t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(y.ZP.Divider, {
      className: G.divider
    }), (0, r.jsx)(m.Z, {
      game: n,
      className: G.activityIcon
    }), (0, r.jsx)(l.Text, {
      className: G.playingText,
      variant: "text-md/normal",
      color: "none",
      children: (0, d.Z)(n.name)
    }), a && (0, r.jsx)(W, {
      channel: o,
      focusedParticipant: i
    })]
  }));
  else if ((null == i ? true : i.type) === M.fO.STREAM) {
    let e = i.user,
      n = i.stream;
    t = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(y.ZP.Divider, {
        className: G.divider
      }), (0, r.jsx)(K, {
        user: e,
        channel: o,
        stream: n,
        color: a ? "header-primary" : "none"
      }), a && (0, r.jsx)(W, {
        channel: o,
        focusedParticipant: i
      })]
    })
  } else u && (t = (0, r.jsx)(b.Z, {
    guildEvent: s,
    recurrenceId: c
  }));
  return (0, r.jsx)("div", {
    className: G.container,
    children: t
  })
}

function q(e) {
  let {
    channel: t,
    guild: o,
    appContext: c,
    inCall: u,
    isChatOpen: d,
    exitFullScreen: m
  } = e, {
    focusedParticipant: g
  } = (0, s.cj)([R.Z], () => ({
    focusedParticipant: R.Z.getSelectedParticipant(t.id),
    participantsOpen: R.Z.getParticipantsOpen(t.id)
  }), [t.id]), E = i.useContext(N.h9), b = (0, p.ZP)(t), A = (0, h.KS)(t), [C] = (0, f.Z)((null == g ? true : g.type) === M.fO.ACTIVITY ? [g.applicationId] : []), w = U.intl.string(U.t.BVZqJi);
  t.isDM() ? w = U.intl.string(U.t.jN2DfX) : t.isGroupDM() && (w = U.intl.string(U.t["e5y+go"]));
  let L = (0, s.e7)([_.Z], () => _.Z.getChannelStatus(t)),
    k = t.isGuildVoice() && u && null != L && L.length > 0,
    Z = (0, P.ZP)(t),
    V = k ? (0, r.jsx)(l.ua7, {
      text: U.intl.string(U.t.Mgpxi4),
      delay: 500,
      position: "bottom",
      shouldShow: Z,
      children: e => (0, r.jsxs)(l.P3F, H(F({}, e), {
        className: a()(G.channelStatusClickable, {
          [G.hoverable]: Z
        }),
        onClick: Z ? Y : true,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-xs/normal",
          className: a()(G.channelStatus, B.markup, {
            [G.hoverable]: Z
          }),
          children: I.Z.parseVoiceChannelStatus(L, true, {
            channelId: t.id
          })
        }), Z && (0, r.jsx)(l.vdY, {
          size: "custom",
          color: "currentColor",
          className: a()(G.pencilIcon, G.hoverable),
          width: 14,
          height: 14
        })]
      }))
    }) : null;

  function Y() {
    (0, l.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 339340));
      return n => (0, r.jsx)(e, F({
        channel: t
      }, n))
    }, {
      modalKey: x.a
    })
  }
  let W = (0, S.m$)({
    channelId: t.id
  });
  return (0, r.jsxs)("div", {
    className: G.subtitleContainer,
    children: [(0, r.jsx)(l.f6W, {
      theme: j.BR.DARK,
      children: e => (0, r.jsxs)(y.ZP, {
        onDoubleClick: O.O,
        transparent: true,
        showToolbar: !E,
        className: a()(e, G.headerBar),
        innerClassName: G.headerBarChildren,
        toolbarClassName: G.toolbar,
        childrenBottom: V,
        toolbar: (0, r.jsx)(D.Z, {
          channel: t,
          appContext: c,
          inCall: u,
          isChatOpen: d,
          exitFullScreen: m
        }),
        children: [(0, r.jsx)(y.ZP.Title, {
          wrapperClassName: G.title,
          children: (0, r.jsxs)(r.Fragment, {
            children: [null != A ? (0, r.jsx)(y.ZP.ChannelIcon, {
              icon: A,
              "aria-label": w
            }) : null, b, W && (0, r.jsx)(l.ua7, {
              text: U.intl.string(U.t.QyZ4TU),
              children: e => (0, r.jsx)(l.tQf, H(F({}, e), {
                size: "xs",
                "aria-label": U.intl.string(U.t.VHXh8f),
                color: l.TVs.colors.INTERACTIVE_NORMAL,
                className: G.secureFramesIcon
              }))
            })]
          })
        }), (0, r.jsx)(v.TS, {
          channel: t,
          guild: o
        }), (0, r.jsx)(z, {
          focusedApplication: C,
          focusedParticipant: g,
          channel: t
        })]
      })
    }), (0, r.jsx)(T.Z, {
      channelId: t.id
    })]
  })
}