/** Chunk was on 5665 **/
/** chunk id: 153349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
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
  Chunk112848 = require("./112848.js");

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

function N(e, t) {
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
let A = Chunk647438.memo(function(e) {
    let {
      toggleRequestToSpeakSidebar: t,
      chatOpen: n
    } = e, i = (0, r.jsx)(m.ZP.Icon, {
      icon: u.Dio,
      tooltip: P.intl.string(P.t.cpT0Cg),
      onClick: t
    });
    return (0, r.jsxs)(m.ZP, {
      toolbar: i,
      className: a()(Z.headerContainer, {
        [Z.chatOpen]: n
      }),
      children: [(0, r.jsx)(m.ZP.Icon, {
        icon: u.V9,
        disabled: true,
        "aria-label": P.intl.string(P.t.TYZgzc)
      }), (0, r.jsx)(m.ZP.Title, {
        children: P.intl.string(P.t.TYZgzc)
      })]
    })
  }),
  w = Chunk647438.memo(function(e) {
    var t;
    let {
      channel: l,
      participant: a,
      tempDisableOnInit: o = false
    } = e, m = i.useRef(null), [_, x] = i.useState(o);
    (0, h.ZP)(() => {
      if (!_) return;
      let e = setTimeout(() => x(false), 1e3);
      return () => clearTimeout(e)
    });
    let E = l.getGuildId();
    s()(null != E, "Channel cannot be guildless");
    let {
      isMobile: S,
      status: I
    } = (0, c.cj)([C.Z], () => ({
      isMobile: C.Z.isMobileOnline(a.user.id),
      status: C.Z.getStatus(a.user.id, E)
    })), A = (0, c.e7)([y.ZP], () => y.ZP.getMember(E, a.user.id)), w = (0, g.X7)(l.guild_id, null == A ? true : A.userId, null != (t = null == A ? true : A.colorStrings) ? t : null), R = i.useMemo(() => ({
      [E]: [a.user.id]
    }), [E, a.user.id]);
    (0, f.$)(R, "RequestToSpeakSidebar");
    let M = a.rtsState === j.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;

    function D() {
      (0, v.DT)(l, a.user.id, false)
    }

    function L() {
      (0, v.DT)(l, a.user.id, true)
    }
    let k = e => {
      (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("52021")]).then(n.bind(n, 757387));
        return t => (0, r.jsx)(e, N(T({}, t), {
          user: a.user,
          guildId: E,
          channel: l,
          showMediaItems: true
        }))
      })
    };
    return (0, r.jsxs)("div", {
      className: Z.participantRowContainer,
      children: [(0, r.jsx)(b.Z, {
        targetElementRef: m,
        user: a.user,
        guildId: l.guild_id,
        channelId: l.id,
        position: "left",
        spacing: 16,
        clickTrap: true,
        children: e => {
          var t;
          return (0, r.jsxs)(u.P3F, N(T({
            innerRef: m,
            className: Z.participantMemberContainer,
            onContextMenu: k
          }, e), {
            children: [(0, r.jsx)(p.Z, {
              size: u.EFr.SIZE_40,
              className: Z.participantAvatar,
              user: a.user,
              isMobile: S,
              status: I
            }), (0, r.jsxs)("div", {
              className: Z.participantTextContainer,
              children: [(0, r.jsx)(u.PUh, {
                name: a.userNick,
                colorString: null != (t = null == A ? true : A.colorString) ? t : null,
                colorStrings: w,
                className: Z.participantName
              }), (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: (0, O.$)(a)
              })]
            })]
          }))
        }
      }), (0, r.jsxs)("div", {
        className: Z.buttonContainer,
        children: [(0, r.jsx)(u.ua7, {
          text: M ? P.intl.string(P.t.h9rsTU) : P.intl.string(P.t.f0T7hI),
          children: e => (0, r.jsx)("div", N(T({}, e), {
            children: (0, r.jsx)(u.hU, {
              onClick: D,
              disabled: M || _,
              icon: u.Lrb,
              variant: "secondary",
              "aria-label": M ? P.intl.string(P.t.h9rsTU) : P.intl.string(P.t.f0T7hI)
            })
          }))
        }), (0, r.jsx)(u.ua7, {
          text: P.intl.string(P.t.moABMz),
          children: e => (0, r.jsx)("div", N(T({}, e), {
            children: (0, r.jsx)(u.hU, {
              "aria-label": P.intl.string(P.t.moABMz),
              onClick: L,
              icon: u.Dio,
              variant: "secondary"
            })
          }))
        })]
      })]
    })
  }),
  R = Chunk647438.memo(function(e) {
    let {
      channel: t
    } = e, [n, i] = (0, E.h)(t.id);
    return (0, r.jsx)(u.j7V, {
      className: Z.toggle,
      onChange: i,
      value: n,
      children: P.intl.string(P.t.GYCh0d)
    })
  }),
  M = Chunk647438.memo(function() {
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk112848.emptyStateContainer,
      children: [(0, Chunk951288.jsx)(Chunk618896.Z, {}), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk112848.emptyStateTitle,
        variant: "text-lg/semibold",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t["7R24mZ"])
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk112848.emptyStateBody,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.Rpr2s7)
      })]
    })
  });

function D(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    chatOpen: i
  } = e, l = (0, x.Fd)(t.id), o = [+!!(0, c.e7)([_.Z], () => _.Z.can(I.Pl.MANAGE_CHANNELS, t) || _.Z.can(I.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
  return (0, r.jsxs)("div", {
    className: a()(Z.container, {
      [Z.chatOpen]: i
    }),
    children: [(0, r.jsx)(A, {
      toggleRequestToSpeakSidebar: n,
      chatOpen: i
    }), (0, r.jsx)(u.aVo, {
      className: Z.contentContainer,
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
            return (0, r.jsx)(R, {
              channel: t
            }, "rts-toggle");
          case 1: {
            if (0 === l.length) return (0, r.jsx)(M, {}, "participants-empty");
            let e = l[i];
            return (0, r.jsx)(w, {
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
          className: Z.listTitle,
          variant: "text-xs/bold",
          color: "header-secondary",
          children: l.length > 0 ? P.intl.formatToPlainString(P.t["5z7q5e"], {
            numHands: l.length
          }) : P.intl.string(P.t.TYZgzc)
        }, "participants-section") : null
      }
    })]
  })
}