/** Chunk was on 63962 **/
/** chunk id: 153349, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk285421 = require("./285421.js");

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
let R = Chunk647438.memo(function(e) {
    let {
      toggleRequestToSpeakSidebar: t,
      chatOpen: n
    } = e, i = (0, r.jsx)(g.ZP.Icon, {
      icon: d.Dio,
      tooltip: Z.intl.string(Z.t.cpT0Cg),
      onClick: t
    });
    return (0, r.jsxs)(g.ZP, {
      toolbar: i,
      className: a()(P.headerContainer, {
        [P.chatOpen]: n
      }),
      children: [(0, r.jsx)(g.ZP.Icon, {
        icon: d.V9,
        disabled: true,
        "aria-label": Z.intl.string(Z.t.TYZgzc)
      }), (0, r.jsx)(g.ZP.Title, {
        children: Z.intl.string(Z.t.TYZgzc)
      })]
    })
  }),
  w = Chunk647438.memo(function(e) {
    var t;
    let {
      channel: l,
      participant: a,
      tempDisableOnInit: s = false
    } = e, g = i.useRef(null), [_, x] = i.useState(s);
    (0, h.ZP)(() => {
      if (!_) return;
      let e = setTimeout(() => x(false), 1e3);
      return () => clearTimeout(e)
    });
    let I = l.getGuildId();
    o()(null != I, "Channel cannot be guildless");
    let {
      isMobile: E,
      status: S
    } = (0, c.cj)([O.Z], () => ({
      isMobile: O.Z.isMobileOnline(a.user.id),
      status: O.Z.getStatus(a.user.id, I)
    })), R = (0, c.e7)([y.ZP], () => y.ZP.getMember(I, a.user.id)), w = (0, m.X7)(l.guild_id, null == R ? true : R.userId, null != (t = null == R ? true : R.colorStrings) ? t : null), A = i.useMemo(() => ({
      [I]: [a.user.id]
    }), [I, a.user.id]);
    (0, f.$)(A, "RequestToSpeakSidebar");
    let D = a.rtsState === C.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;

    function L() {
      (0, j.DT)(l, a.user.id, false)
    }

    function M() {
      (0, j.DT)(l, a.user.id, true)
    }
    let k = e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("8982"), n.e("7717"), n.e("19848")]).then(n.bind(n, 757387));
        return t => (0, r.jsx)(e, N(T({}, t), {
          user: a.user,
          guildId: I,
          channel: l,
          showMediaItems: true
        }))
      })
    };
    return (0, r.jsxs)("div", {
      className: P.participantRowContainer,
      children: [(0, r.jsx)(b.Z, {
        targetElementRef: g,
        user: a.user,
        guildId: l.guild_id,
        channelId: l.id,
        position: "left",
        spacing: 16,
        clickTrap: true,
        children: e => {
          var t;
          return (0, r.jsxs)(d.P3F, N(T({
            innerRef: g,
            className: P.participantMemberContainer,
            onContextMenu: k
          }, e), {
            children: [(0, r.jsx)(p.Z, {
              size: d.EFr.SIZE_40,
              className: P.participantAvatar,
              user: a.user,
              isMobile: E,
              status: S
            }), (0, r.jsxs)("div", {
              className: P.participantTextContainer,
              children: [(0, r.jsx)(d.PUh, {
                name: a.userNick,
                colorString: null != (t = null == R ? true : R.colorString) ? t : null,
                colorStrings: w,
                className: P.participantName
              }), (0, r.jsx)(d.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: (0, v.$)(a)
              })]
            })]
          }))
        }
      }), (0, r.jsxs)("div", {
        className: P.buttonContainer,
        children: [(0, r.jsx)(d.ua7, {
          text: D ? Z.intl.string(Z.t.h9rsTU) : Z.intl.string(Z.t.f0T7hI),
          children: e => (0, r.jsx)("div", N(T({}, e), {
            children: (0, r.jsx)(d.hU, {
              onClick: L,
              disabled: D || _,
              icon: d.Lrb,
              variant: "secondary",
              "aria-label": D ? Z.intl.string(Z.t.h9rsTU) : Z.intl.string(Z.t.f0T7hI)
            })
          }))
        }), (0, r.jsx)(d.ua7, {
          text: Z.intl.string(Z.t.moABMz),
          children: e => (0, r.jsx)("div", N(T({}, e), {
            children: (0, r.jsx)(d.hU, {
              "aria-label": Z.intl.string(Z.t.moABMz),
              onClick: M,
              icon: d.Dio,
              variant: "secondary"
            })
          }))
        })]
      })]
    })
  }),
  A = Chunk647438.memo(function(e) {
    let {
      channel: t
    } = e, [n, i] = (0, I.h)(t.id);
    return (0, r.jsx)(d.rsf, {
      label: Z.intl.string(Z.t.GYCh0d),
      checked: n,
      onChange: i
    })
  }),
  D = Chunk647438.memo(function() {
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk285421.emptyStateContainer,
      children: [(0, Chunk951288.jsx)(Chunk618896.Z, {}), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk285421.emptyStateTitle,
        variant: "text-lg/semibold",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t["7R24mZ"])
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk285421.emptyStateBody,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.Rpr2s7)
      })]
    })
  });

function L(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    chatOpen: i
  } = e, l = (0, x.Fd)(t.id), s = [+!!(0, c.e7)([_.Z], () => _.Z.can(S.Pl.MANAGE_CHANNELS, t) || _.Z.can(S.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
  return (0, r.jsxs)("div", {
    className: a()(P.container, {
      [P.chatOpen]: i
    }),
    children: [(0, r.jsx)(R, {
      toggleRequestToSpeakSidebar: n,
      chatOpen: i
    }), (0, r.jsx)(d.aVo, {
      className: P.contentContainer,
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
            return (0, r.jsx)(A, {
              channel: t
            }, "rts-toggle");
          case 1: {
            if (0 === l.length) return (0, r.jsx)(D, {}, "participants-empty");
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
        return 1 === t ? (0, r.jsx)(d.Text, {
          className: P.listTitle,
          variant: "text-xs/bold",
          color: "header-secondary",
          children: l.length > 0 ? Z.intl.formatToPlainString(Z.t["5z7q5e"], {
            numHands: l.length
          }) : Z.intl.string(Z.t.TYZgzc)
        }, "participants-section") : null
      }
    })]
  })
}