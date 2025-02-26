/** Chunk was on 48799 **/
n.d(t, {
  Z: () => W
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(512722),
  s = n.n(o),
  l = n(442837),
  a = n(481060),
  c = n(493683),
  d = n(13245),
  u = n(99690),
  h = n(835473),
  p = n(194082),
  f = n(442550),
  g = n(297781),
  m = n(371991),
  y = n(656709),
  _ = n(561308),
  v = n(593481),
  O = n(371651),
  b = n(703656),
  S = n(199902),
  x = n(592125),
  E = n(158776),
  j = n(594174),
  N = n(237997),
  C = n(5192),
  I = n(145597),
  Z = n(312839),
  P = n(981631),
  w = n(701488),
  k = n(987650),
  T = n(388032),
  D = n(995816);

function M(e) {
  let {
    game: t,
    trackClick: n,
    onDismissClick: o
  } = e, s = (0, h.q)(t.id), c = (0, l.e7)([N.default], () => N.default.showInviteNotification), u = r.useCallback(e => {
    e.stopPropagation(), n(c ? "muted" : "unmuted"), d.Z.setShowGameInviteNotification(!c)
  }, [c, n]);
  if (null == s) return null;
  let p = s.getIconURL(w.Si.LARGE);
  return (0, i.jsxs)("div", {
    className: D.header,
    children: [(0, i.jsxs)("div", {
      className: D.headerLeft,
      children: [(0, i.jsx)(f.f, {
        src: p,
        size: 16
      }), (0, i.jsx)(a.Text, {
        className: D.gameInfo,
        variant: "text-sm/semibold",
        color: "header-primary",
        children: s.name
      })]
    }), (0, i.jsxs)("div", {
      className: D.headerRight,
      children: [(0, i.jsx)(a.zxk, {
        look: a.zxk.Looks.BLANK,
        size: a.zxk.Sizes.NONE,
        className: D.muteButton,
        onClick: u,
        children: c ? (0, i.jsx)(a.Dkj, {
          size: "xs",
          color: a.TVs.colors.WHITE,
          className: D.muteIcon
        }) : (0, i.jsx)(a.owu, {
          size: "xs",
          color: a.TVs.colors.WHITE,
          className: D.muteIcon
        })
      }), (0, i.jsx)(a.zxk, {
        look: a.zxk.Looks.BLANK,
        size: a.zxk.Sizes.NONE,
        onClick: o,
        className: D.dismissButton,
        children: (0, i.jsx)(a.CTb, {
          size: "xs",
          color: a.TVs.colors.WHITE,
          className: D.dismissIcon
        })
      })]
    })]
  })
}

function R(e) {
  let {
    entry: t,
    idx: n
  } = e, o = (0, l.e7)([j.default], () => j.default.getUser(t.author_id)), h = (0, _.kr)(t), f = h ? a.TVs.colors.TEXT_POSITIVE : a.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY, [v, O] = r.useState("unsent"), [I, Z] = r.useState(!1), w = (0, l.e7)([N.default], () => N.default.customInviteMessage), k = (0, l.e7)([S.Z], () => null != o ? S.Z.getAnyStreamForUser(o.id) : null, [o]), {
    isMobileOnline: M,
    status: R
  } = (0, l.cj)([E.Z], () => null == o ? {
    isMobileOnline: void 0,
    status: void 0
  } : {
    isMobileOnline: E.Z.isMobileOnline(o.id),
    status: E.Z.getStatus(o.id)
  }, [o]);
  r.useEffect(() => {
    if ("sent" === v) {
      let e = setTimeout(() => Z(!0), 2e3);
      return () => clearTimeout(e)
    }
  }, [v]);
  let A = async e => {
    if (null != o && "unsent" === v) {
      e.stopPropagation();
      try {
        var i;
        O("sending");
        let e = await c.Z.getOrEnsurePrivateChannel(o.id),
          r = null !== (i = x.Z.getChannel(e)) && void 0 !== i ? i : null;
        s()(null != r, "Send channel must be defined"), (0, b.uL)(P.Z5c.CHANNEL(r.guild_id, r.id)), await (0, y.p)({
          channel: r,
          content: null != w ? w : T.NW.string(T.t.DwAcMz),
          entry: t,
          whenReady: !0
        }), d.Z.track(P.rMx.OVERLAY_GAME_INVITE_SENT, {
          target_user_id: o.id,
          target_content_entry_id: t.id,
          target_index: n,
          sent_custom_message: null != w
        }), O("sent")
      } catch (e) {
        O("unsent")
      }
    }
  }, L = async () => {
    var e;
    if (null == o) return;
    let t = await c.Z.getOrEnsurePrivateChannel(o.id),
      n = null !== (e = x.Z.getChannel(t)) && void 0 !== e ? e : null;
    s()(null != n, "Send channel must be defined"), (0, b.uL)(P.Z5c.CHANNEL(n.guild_id, n.id))
  };
  return null == o ? null : (0, i.jsxs)("div", {
    className: D.userRow,
    children: [(0, i.jsx)(u.Z, {
      className: D.avatarContainer,
      user: o,
      isMobile: M,
      status: R
    }), (0, i.jsxs)("div", {
      className: D.userInfo,
      children: [(0, i.jsxs)("div", {
        className: D.usernameWrapper,
        children: [(0, i.jsx)(a.Text, {
          className: D.username,
          variant: "text-md/medium",
          color: "header-primary",
          children: C.ZP.getName(void 0, void 0, o)
        }), null != k && (0, i.jsx)(p.ZP, {})]
      }), (0, i.jsxs)(g.m7, {
        children: [(0, i.jsx)(a.iWm, {
          size: "xxs",
          color: f
        }), (0, i.jsx)(m.ZP, {
          entry: t,
          textColor: h ? "text-positive" : "content-inventory-overlay-text-secondary",
          bold: !0
        })]
      })]
    }), (0, i.jsx)("div", {
      className: D.inviteButtonWrapper,
      children: (0, i.jsx)(a.zxk, {
        submitting: "sending" === v,
        onClick: I ? L : A,
        className: D.inviteButton,
        color: a.Ttl.PRIMARY,
        look: "sent" === v ? a.iLD.OUTLINED : a.iLD.FILLED,
        size: a.PhG.MAX,
        children: "sent" === v ? I ? (0, i.jsx)(a.kBi, {
          size: "sm"
        }) : (0, i.jsx)(a.kSu, {
          size: "sm",
          color: a.TVs.colors.WHITE
        }) : (0, i.jsx)(a.Uuj, {
          size: "sm"
        })
      })
    })]
  })
}

function A(e) {
  let {
    onCancel: t,
    onSave: n
  } = e, o = (0, l.e7)([N.default], () => N.default.customInviteMessage), s = r.createRef(), [c, u] = r.useState(null != o ? o : T.NW.string(T.t.DwAcMz)), [h, p] = r.useState(c.length), f = e => {
    e.stopPropagation(), d.Z.setInviteMessage(c), n(e)
  };
  return (0, i.jsxs)("div", {
    className: D.editMessageContainer,
    children: [(0, i.jsx)(a.oil, {
      autoFocus: !0,
      inputRef: s,
      onClick: e => e.stopPropagation(),
      onKeyDown: e => {
        if (e.stopPropagation(), " " === e.key) {
          var n, i;
          if (e.preventDefault(), null == s.current) return;
          let t = s.current,
            r = null !== (n = t.selectionStart) && void 0 !== n ? n : 0,
            o = null !== (i = t.selectionEnd) && void 0 !== i ? i : 0,
            l = t.value;
          t.value = l.substring(0, r) + " " + l.substring(o), t.setSelectionRange(r + 1, r + 1), p(l.length)
        }
        "Enter" === e.key && f(e), "Escape" === e.key && (e.preventDefault(), t(e))
      },
      onKeyUp: e => e.stopPropagation(),
      maxLength: 99,
      onChange: e => {
        u(e), p(e.length)
      },
      value: c
    }), (0, i.jsxs)("div", {
      className: D.editMessageButtons,
      children: [(0, i.jsxs)(a.Text, {
        className: D.charCount,
        variant: "text-xs/normal",
        color: "header-muted",
        children: [h, "/", 99]
      }), (0, i.jsx)(a.zxk, {
        onClick: t,
        className: D.cancelButton,
        look: a.zxk.Looks.BLANK,
        size: a.zxk.Sizes.TINY,
        children: T.NW.string(T.t["ETE/oK"])
      }), (0, i.jsx)(a.zxk, {
        onClick: f,
        color: a.zxk.Colors.PRIMARY,
        look: a.zxk.Looks.FILLED,
        size: a.zxk.Sizes.TINY,
        children: T.NW.string(T.t.R3BPHx)
      })]
    })]
  })
}

function L(e) {
  let {
    entries: t
  } = e, n = t.slice(0, 5), o = (0, l.e7)([N.default], () => N.default.customInviteMessage), s = T.NW.formatToPlainString(T.t["5uzKGB"], {
    inviteMessage: null != o ? o : T.NW.string(T.t.DwAcMz)
  }), [c, u] = r.useState(!1);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(v.iz, {}), (0, i.jsxs)(a.Text, {
      className: D.helpText,
      variant: "text-sm/medium",
      color: "header-secondary",
      children: [s, (0, i.jsx)(a.zxk, {
        onClick: e => {
          e.stopPropagation(), u(!c), d.Z.setInstanceLocked(c)
        },
        className: D.editButton,
        look: a.zxk.Looks.BLANK,
        size: a.zxk.Sizes.NONE,
        children: (0, i.jsx)(a.vdY, {
          color: "currentColor",
          size: "xxs"
        })
      })]
    }), c && (0, i.jsx)(A, {
      onSave: e => {
        e.stopPropagation(), u(!1)
      },
      onCancel: e => {
        e.stopPropagation(), u(!1), d.Z.setInstanceLocked(!0)
      }
    }), !c && n.map((e, t) => (0, i.jsx)(R, {
      idx: t,
      entry: e
    }, t))]
  })
}

function W(e, t) {
  let {
    trackView: n,
    trackClick: r
  } = (0, Z.R)(k.n0.SendGameInvitesNotification, {
    notif_type: k.n0.SendGameInvitesNotification
  });
  return s()(t.length > 0, "Some entries must be present"), {
    icon: null,
    title: t => (0, i.jsx)(M, {
      game: e,
      trackClick: r,
      onDismissClick: t
    }),
    body: (0, i.jsx)(L, {
      entries: t
    }),
    onNotificationShow: () => {
      n(), d.Z.track(P.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
        user_ids: t.map(e => e.author_id),
        entry_ids: t.map(e => e.id)
      })
    },
    onNotificationClick: (e, t) => {
      e.stopPropagation(), r("unlock"), O.default.isOverlayOOPEnabledForPid((0, I.getPID)()) ? d.Z.setInputLocked(!1, (0, I.getPID)()) : d.Z.setInstanceLocked(!1)
    },
    onDismissClick: () => {
      r("dismiss")
    }
  }
}