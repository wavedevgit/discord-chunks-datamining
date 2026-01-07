/** Chunk was on 41700 **/
/** chunk id: 153349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk616780 = require("./616780.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk670188 = require("./670188.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk471253 = require("./471253.js"),
  Chunk431328 = require("./431328.js"),
  Chunk145834 = require("./145834.js"),
  Chunk590415 = require("./590415.js"),
  Chunk614173 = require("./614173.js"),
  Chunk618896 = require("./618896.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk200537 = require("./200537.js");

function N(e) {
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

function R(e, t) {
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
let w = Chunk473749.memo(function(e) {
    let {
      toggleRequestToSpeakSidebar: t,
      chatOpen: n
    } = e, i = (0, r.jsx)(m.ZP.Icon, {
      icon: u.Dio,
      tooltip: P.intl.string(P.t.cpT0Cq),
      onClick: t
    });
    return (0, r.jsxs)(m.ZP, {
      toolbar: i,
      className: a()(T.headerContainer, {
        [T.chatOpen]: n
      }),
      children: [(0, r.jsx)(m.ZP.Icon, {
        icon: u.V9,
        disabled: true,
        "aria-label": P.intl.string(P.t.TYZgzW)
      }), (0, r.jsx)(m.ZP.Title, {
        children: P.intl.string(P.t.TYZgzW)
      })]
    })
  }),
  A = Chunk473749.memo(function(e) {
    var t;
    let {
      channel: l,
      participant: a,
      tempDisableOnInit: s = false
    } = e, m = i.useRef(null), [x, C] = i.useState(s);
    (0, f.ZP)(() => {
      if (!x) return;
      let e = setTimeout(() => C(false), 1e3);
      return () => clearTimeout(e)
    });
    let S = l.getGuildId();
    o()(null != S, "Channel cannot be guildless");
    let {
      isMobile: E,
      status: Z
    } = (0, c.cj)([j.Z], () => ({
      isMobile: j.Z.isMobileOnline(a.user.id),
      status: j.Z.getStatus(a.user.id, S)
    })), w = (0, c.e7)([O.ZP], () => O.ZP.getMember(S, a.user.id)), A = (0, b.X7)(l.guild_id, null == w ? true : w.userId, null != (t = null == w ? true : w.colorStrings) ? t : null), D = i.useMemo(() => ({
      [S]: [a.user.id]
    }), [S, a.user.id]);
    (0, g.$)(D, "RequestToSpeakSidebar");
    let L = a.rtsState === _.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
      M = e => {
        (0, p.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("66165"), n.e("8982"), n.e("7717"), n.e("9393")]).then(n.bind(n, 757387));
          return t => (0, r.jsx)(e, R(N({}, t), {
            user: a.user,
            guildId: S,
            channel: l,
            showMediaItems: true
          }))
        })
      };
    return (0, r.jsxs)("div", {
      className: T.participantRowContainer,
      children: [(0, r.jsx)(y.Z, {
        targetElementRef: m,
        user: a.user,
        guildId: l.guild_id,
        channelId: l.id,
        position: "left",
        spacing: 16,
        clickTrap: true,
        children: e => {
          var t;
          return (0, r.jsxs)(u.P3F, R(N({
            innerRef: m,
            className: T.participantMemberContainer,
            onContextMenu: M
          }, e), {
            children: [(0, r.jsx)(h.Z, {
              size: u.EFr.SIZE_40,
              className: T.participantAvatar,
              user: a.user,
              isMobile: E,
              status: Z
            }), (0, r.jsxs)("div", {
              className: T.participantTextContainer,
              children: [(0, r.jsx)(u.PUh, {
                name: a.userNick,
                colorString: null != (t = null == w ? true : w.colorString) ? t : null,
                colorStrings: A,
                className: T.participantName
              }), (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: (0, I.$)(a)
              })]
            })]
          }))
        }
      }), (0, r.jsxs)("div", {
        className: T.buttonContainer,
        children: [(0, r.jsx)(d.u, {
          text: L ? P.intl.string(P.t.h9rsTd) : P.intl.string(P.t.f0T7hI),
          asContainer: true,
          children: (0, r.jsx)(u.hU, {
            onClick: function() {
              (0, v.DT)(l, a.user.id, false)
            },
            disabled: L || x,
            icon: u.Lrb,
            variant: "secondary",
            "aria-label": L ? P.intl.string(P.t.h9rsTd) : P.intl.string(P.t.f0T7hI)
          })
        }), (0, r.jsx)(d.u, {
          text: P.intl.string(P.t.moABMy),
          asContainer: true,
          children: (0, r.jsx)(u.hU, {
            "aria-label": P.intl.string(P.t.moABMy),
            onClick: function() {
              (0, v.DT)(l, a.user.id, true)
            },
            icon: u.Dio,
            variant: "secondary"
          })
        })]
      })]
    })
  }),
  D = Chunk473749.memo(function(e) {
    let {
      channel: t
    } = e, [n, i] = (0, S.h)(t.id);
    return (0, r.jsx)(u.rsf, {
      label: P.intl.string(P.t.GYCh0W),
      checked: n,
      onChange: i
    })
  }),
  L = Chunk473749.memo(function() {
    return (0, r.jsxs)("div", {
      className: T.emptyStateContainer,
      children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)(u.Text, {
        className: T.emptyStateTitle,
        variant: "text-lg/semibold",
        color: "text-strong",
        children: P.intl.string(P.t["7R24mX"])
      }), (0, r.jsx)(u.Text, {
        className: T.emptyStateBody,
        variant: "text-sm/normal",
        color: "text-default",
        children: P.intl.string(P.t.Rpr2s0)
      })]
    })
  });

function M(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    chatOpen: i
  } = e, l = (0, C.Fd)(t.id), s = [+!!(0, c.e7)([x.Z], () => x.Z.can(Z.Pl.MANAGE_CHANNELS, t) || x.Z.can(Z.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
  return (0, r.jsxs)("div", {
    className: a()(T.container, {
      [T.chatOpen]: i
    }),
    children: [(0, r.jsx)(w, {
      toggleRequestToSpeakSidebar: n,
      chatOpen: i
    }), (0, r.jsx)(u.aVo, {
      className: T.contentContainer,
      sections: s,
      sectionHeight: function(e) {
        return 40 * (1 === e)
      },
      rowHeight: function(e) {
        switch (e) {
          case 0:
            return 66;
          case 1:
            if (0 === l.length) return 178;
            return 48
        }
        return 0
      },
      renderRow: function(e) {
        let {
          section: n,
          row: i
        } = e;
        switch (n) {
          case 0:
            return (0, r.jsx)(D, {
              channel: t
            }, "rts-toggle");
          case 1: {
            if (0 === l.length) return (0, r.jsx)(L, {}, "participants-empty");
            let e = l[i];
            return (0, r.jsx)(A, {
              channel: t,
              participant: e,
              tempDisableOnInit: true
            }, e.id)
          }
        }
        return null
      },
      renderSection: function(e) {
        let {
          section: t
        } = e;
        return 1 === t ? (0, r.jsx)(u.Text, {
          className: T.listTitle,
          variant: "text-xs/bold",
          color: "text-default",
          children: l.length > 0 ? P.intl.formatToPlainString(P.t["5z7q5a"], {
            numHands: l.length
          }) : P.intl.string(P.t.TYZgzW)
        }, "participants-section") : null
      }
    })]
  })
}