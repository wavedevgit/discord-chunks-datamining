/** Chunk was on 81985 **/
/** chunk id: 153349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
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

function T(e) {
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

function A(e, t) {
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
      icon: d.Dio,
      tooltip: Z.intl.string(Z.t.cpT0Cq),
      onClick: t
    });
    return (0, r.jsxs)(m.ZP, {
      toolbar: i,
      className: a()(N.headerContainer, {
        [N.chatOpen]: n
      }),
      children: [(0, r.jsx)(m.ZP.Icon, {
        icon: d.V9,
        disabled: true,
        "aria-label": Z.intl.string(Z.t.TYZgzW)
      }), (0, r.jsx)(m.ZP.Title, {
        children: Z.intl.string(Z.t.TYZgzW)
      })]
    })
  }),
  R = Chunk473749.memo(function(e) {
    var t;
    let {
      channel: l,
      participant: a,
      tempDisableOnInit: o = false
    } = e, m = i.useRef(null), [O, C] = i.useState(o);
    (0, h.ZP)(() => {
      if (!O) return;
      let e = setTimeout(() => C(false), 1e3);
      return () => clearTimeout(e)
    });
    let _ = l.getGuildId();
    s()(null != _, "Channel cannot be guildless");
    let {
      isMobile: I,
      status: P
    } = (0, c.cj)([j.Z], () => ({
      isMobile: j.Z.isMobileOnline(a.user.id),
      status: j.Z.getStatus(a.user.id, _)
    })), w = (0, c.e7)([v.ZP], () => v.ZP.getMember(_, a.user.id)), R = (0, b.X7)(l.guild_id, null == w ? true : w.userId, null != (t = null == w ? true : w.colorStrings) ? t : null), D = i.useMemo(() => ({
      [_]: [a.user.id]
    }), [_, a.user.id]);
    (0, g.$)(D, "RequestToSpeakSidebar");
    let M = a.rtsState === S.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
      k = e => {
        (0, p.jW)(e, async () => {
          let {
            default: e
          } = await Promise.all([n.e("79695"), n.e("4040"), n.e("92524"), n.e("7717"), n.e("9393")]).then(n.bind(n, 757387));
          return t => (0, r.jsx)(e, A(T({}, t), {
            user: a.user,
            guildId: _,
            channel: l,
            showMediaItems: true
          }))
        })
      };
    return (0, r.jsxs)("div", {
      className: N.participantRowContainer,
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
          return (0, r.jsxs)(d.P3F, A(T({
            innerRef: m,
            className: N.participantMemberContainer,
            onContextMenu: k
          }, e), {
            children: [(0, r.jsx)(f.Z, {
              size: d.EFr.SIZE_40,
              className: N.participantAvatar,
              user: a.user,
              isMobile: I,
              status: P
            }), (0, r.jsxs)("div", {
              className: N.participantTextContainer,
              children: [(0, r.jsx)(d.PUh, {
                name: a.userNick,
                colorString: null != (t = null == w ? true : w.colorString) ? t : null,
                colorStrings: R,
                className: N.participantName
              }), (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                children: (0, E.$)(a)
              })]
            })]
          }))
        }
      }), (0, r.jsxs)("div", {
        className: N.buttonContainer,
        children: [(0, r.jsx)(u.u, {
          text: M ? Z.intl.string(Z.t.h9rsTd) : Z.intl.string(Z.t.f0T7hI),
          asContainer: true,
          children: (0, r.jsx)(d.hU, {
            onClick: function() {
              (0, x.DT)(l, a.user.id, false)
            },
            disabled: M || O,
            icon: d.Lrb,
            variant: "secondary",
            "aria-label": M ? Z.intl.string(Z.t.h9rsTd) : Z.intl.string(Z.t.f0T7hI)
          })
        }), (0, r.jsx)(u.u, {
          text: Z.intl.string(Z.t.moABMy),
          asContainer: true,
          children: (0, r.jsx)(d.hU, {
            "aria-label": Z.intl.string(Z.t.moABMy),
            onClick: function() {
              (0, x.DT)(l, a.user.id, true)
            },
            icon: d.Dio,
            variant: "secondary"
          })
        })]
      })]
    })
  }),
  D = Chunk473749.memo(function(e) {
    let {
      channel: t
    } = e, [n, i] = (0, _.h)(t.id);
    return (0, r.jsx)(d.rsf, {
      label: Z.intl.string(Z.t.GYCh0W),
      checked: n,
      onChange: i
    })
  }),
  M = Chunk473749.memo(function() {
    return (0, r.jsxs)("div", {
      className: N.emptyStateContainer,
      children: [(0, r.jsx)(I.Z, {}), (0, r.jsx)(d.Text, {
        className: N.emptyStateTitle,
        variant: "text-lg/semibold",
        color: "text-strong",
        children: Z.intl.string(Z.t["7R24mX"])
      }), (0, r.jsx)(d.Text, {
        className: N.emptyStateBody,
        variant: "text-sm/normal",
        color: "text-default",
        children: Z.intl.string(Z.t.Rpr2s0)
      })]
    })
  });

function k(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    chatOpen: i
  } = e, l = (0, C.Fd)(t.id), o = [+!!(0, c.e7)([O.Z], () => O.Z.can(P.Pl.MANAGE_CHANNELS, t) || O.Z.can(P.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
  return (0, r.jsxs)("div", {
    className: a()(N.container, {
      [N.chatOpen]: i
    }),
    children: [(0, r.jsx)(w, {
      toggleRequestToSpeakSidebar: n,
      chatOpen: i
    }), (0, r.jsx)(d.aVo, {
      className: N.contentContainer,
      sections: o,
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
            if (0 === l.length) return (0, r.jsx)(M, {}, "participants-empty");
            let e = l[i];
            return (0, r.jsx)(R, {
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
        return 1 === t ? (0, r.jsx)(d.Text, {
          className: N.listTitle,
          variant: "text-xs/bold",
          color: "text-default",
          children: l.length > 0 ? Z.intl.formatToPlainString(Z.t["5z7q5a"], {
            numHands: l.length
          }) : Z.intl.string(Z.t.TYZgzW)
        }, "participants-section") : null
      }
    })]
  })
}