/** Chunk was on 4566 **/
n.d(t, {
  Z: () => k
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(512722),
  s = n.n(a),
  c = n(442837),
  u = n(481060),
  d = n(239091),
  p = n(99690),
  h = n(493773),
  f = n(616780),
  m = n(665149),
  g = n(484459),
  b = n(347475),
  _ = n(271383),
  C = n(496675),
  v = n(158776),
  y = n(471253),
  x = n(431328),
  j = n(145834),
  O = n(590415),
  N = n(614173),
  E = n(618896),
  I = n(231338),
  P = n(388032),
  S = n(235791);

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function T(e, t) {
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
let A = i.memo(function(e) {
    let {
      toggleRequestToSpeakSidebar: t,
      chatOpen: n
    } = e, i = (0, r.jsx)(m.ZP.Icon, {
      icon: u.Dio,
      tooltip: P.NW.string(P.t.cpT0Cg),
      onClick: t
    });
    return (0, r.jsxs)(m.ZP, {
      toolbar: i,
      className: o()(S.headerContainer, {
        [S.chatOpen]: n
      }),
      children: [(0, r.jsx)(m.ZP.Icon, {
        icon: u.V9,
        disabled: !0,
        "aria-label": P.NW.string(P.t.TYZgzc)
      }), (0, r.jsx)(m.ZP.Title, {
        children: P.NW.string(P.t.TYZgzc)
      })]
    })
  }),
  w = i.memo(function(e) {
    let {
      channel: t,
      participant: l,
      tempDisableOnInit: a = !1
    } = e, [m, C] = i.useState(a);
    (0, h.ZP)(() => {
      if (!m) return;
      let e = setTimeout(() => C(!1), 1e3);
      return () => clearTimeout(e)
    });
    let x = t.getGuildId();
    s()(null != x, "Channel cannot be guildless");
    let {
      isMobile: N,
      status: E
    } = (0, c.cj)([v.Z], () => ({
      isMobile: v.Z.isMobileOnline(l.user.id),
      status: v.Z.getStatus(l.user.id, x)
    })), I = (0, c.e7)([_.ZP], () => _.ZP.getMember(x, l.user.id)), A = i.useMemo(() => ({
      [x]: [l.user.id]
    }), [x, l.user.id]);
    (0, f.$)(A);
    let w = l.rtsState === O.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;

    function R() {
      (0, y.DT)(t, l.user.id, !1)
    }

    function M() {
      (0, y.DT)(t, l.user.id, !0)
    }
    let k = e => {
      (0, d.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("98783"), n.e("97589"), n.e("7717"), n.e("22685")]).then(n.bind(n, 757387));
        return n => (0, r.jsx)(e, T(Z({}, n), {
          user: l.user,
          guildId: x,
          channel: t,
          showMediaItems: !0
        }))
      })
    };
    return (0, r.jsxs)("div", {
      className: S.participantRowContainer,
      children: [(0, r.jsx)(u.yRy, {
        preload: () => (0, g.Z)(l.user.id, l.user.getAvatarURL(t.guild_id, 80), {
          guildId: t.guild_id,
          channelId: t.id
        }),
        renderPopout: e => (0, r.jsx)(b.Z, T(Z({}, e), {
          userId: l.user.id,
          guildId: x,
          channelId: t.id
        })),
        position: "left",
        spacing: 16,
        children: e => {
          var t;
          return (0, r.jsxs)(u.P3F, T(Z({
            className: S.participantMemberContainer,
            onContextMenu: k
          }, e), {
            children: [(0, r.jsx)(p.Z, {
              size: u.EFr.SIZE_40,
              className: S.participantAvatar,
              user: l.user,
              isMobile: N,
              status: E
            }), (0, r.jsxs)("div", {
              className: S.participantTextContainer,
              children: [(0, r.jsx)(u.PUh, {
                name: l.userNick,
                color: null !== (t = null == I ? void 0 : I.colorString) && void 0 !== t ? t : void 0,
                className: S.participantName
              }), (0, r.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                children: (0, j.$)(l)
              })]
            })]
          }))
        }
      }), (0, r.jsx)(u.ua7, {
        text: w ? P.NW.string(P.t.h9rsTU) : P.NW.string(P.t.f0T7hI),
        children: e => (0, r.jsx)(u.zxk, T(Z({}, e), {
          innerClassName: S.buttonContainer,
          look: u.zxk.Looks.BLANK,
          size: u.zxk.Sizes.NONE,
          onClick: R,
          disabled: w || m,
          children: (0, r.jsx)(u.Lrb, {
            size: "xs",
            color: "currentColor"
          })
        }))
      }), (0, r.jsx)(u.ua7, {
        text: P.NW.string(P.t.moABMz),
        children: e => (0, r.jsx)(u.zxk, T(Z({}, e), {
          innerClassName: o()(S.buttonContainer, S.buttonMargin),
          look: u.zxk.Looks.BLANK,
          size: u.zxk.Sizes.NONE,
          onClick: M,
          children: (0, r.jsx)(u.Dio, {
            size: "xs",
            color: "currentColor"
          })
        }))
      })]
    })
  }),
  R = i.memo(function(e) {
    let {
      channel: t
    } = e, [n, i] = (0, N.h)(t.id);
    return (0, r.jsx)(u.j7V, {
      className: S.toggle,
      onChange: i,
      value: n,
      children: P.NW.string(P.t.GYCh0d)
    })
  }),
  M = i.memo(function() {
    return (0, r.jsxs)("div", {
      className: S.emptyStateContainer,
      children: [(0, r.jsx)(E.Z, {}), (0, r.jsx)(u.Text, {
        className: S.emptyStateTitle,
        variant: "text-lg/semibold",
        color: "header-primary",
        children: P.NW.string(P.t["7R24mZ"])
      }), (0, r.jsx)(u.Text, {
        className: S.emptyStateBody,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.NW.string(P.t.Rpr2s7)
      })]
    })
  });

function k(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    chatOpen: i
  } = e, l = (0, x.Fd)(t.id), a = [+!!(0, c.e7)([C.Z], () => C.Z.can(I.Pl.MANAGE_CHANNELS, t) || C.Z.can(I.Pl.MANAGE_ROLES, t)), Math.max(1, l.length)];
  return (0, r.jsxs)("div", {
    className: o()(S.container, {
      [S.chatOpen]: i
    }),
    children: [(0, r.jsx)(A, {
      toggleRequestToSpeakSidebar: n,
      chatOpen: i
    }), (0, r.jsx)(u.aVo, {
      className: S.contentContainer,
      sections: a,
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
              tempDisableOnInit: !0
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
          className: S.listTitle,
          variant: "text-xs/bold",
          color: "header-secondary",
          children: l.length > 0 ? P.NW.formatToPlainString(P.t["5z7q5e"], {
            numHands: l.length
          }) : P.NW.string(P.t.TYZgzc)
        }, "participants-section") : null
      }
    })]
  })
}