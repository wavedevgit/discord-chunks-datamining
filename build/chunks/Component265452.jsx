/** Chunk was on 7654 **/
/** chunk id: 265452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => eo
}), require("./388685.js"), require("./539854.js"), require("./993155.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk247272 = require("./247272.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk630810 = require("./630810.js"),
  Chunk724757 = require("./724757.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk447003 = require("./447003.js"),
  Chunk933557 = require("./933557.js"),
  Chunk259473 = require("./259473.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk687516 = require("./687516.js"),
  Chunk266076 = require("./266076.jsx"),
  Chunk227672 = require("./227672.js"),
  Chunk810123 = require("./810123.jsx"),
  Chunk448486 = require("./448486.js"),
  Chunk427679 = require("./427679.js"),
  Chunk199902 = require("./199902.js"),
  Chunk984933 = require("./984933.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk341165 = require("./341165.js"),
  Chunk751771 = require("./751771.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk971130 = require("./971130.js"),
  Chunk51144 = require("./51144.js"),
  Chunk264229 = require("./264229.js"),
  Chunk601953 = require("./601953.js"),
  Chunk277364 = require("./277364.js"),
  Chunk666258 = require("./666258.jsx"),
  Chunk530436 = require("./530436.jsx"),
  Chunk895976 = require("./895976.js"),
  Chunk245335 = require("./245335.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk924726 = require("./924726.js");

function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let {
  INVITE_OPTIONS_7_DAYS: ee,
  INVITE_OPTIONS_UNLIMITED: et
} = Chunk971130.ZP, en = {
  max_age: ee.value,
  max_uses: et.value
};

function el(e) {
  let {
    icon: t,
    label: n,
    subLabel: i,
    onClick: r,
    isSelected: s,
    disabled: a
  } = e;
  return (0, l.jsxs)(g.P3F, {
    "aria-disabled": a,
    className: Q.recipientRow,
    onClick: r,
    children: [(0, l.jsx)("div", {
      className: Q.recipientAsset,
      children: t
    }), (0, l.jsxs)("div", {
      className: Q.recipientLabels,
      children: [(0, l.jsx)(g.Text, {
        className: Q.recipientLabel,
        variant: "text-md/medium",
        lineClamp: 1,
        children: n
      }), true !== i ? (0, l.jsx)(g.Text, {
        className: Q.recipientSublabel,
        variant: "text-xs/normal",
        color: "text-muted",
        children: i
      }) : null]
    }), (0, l.jsx)(g.XZJ, {
      type: g.XZJ.Types.INVERTED,
      displayOnly: true,
      size: 24,
      value: s,
      className: Q.checkbox
    })]
  })
}

function ei(e) {
  let {
    guild: t,
    user: n,
    onToggle: r,
    isSelected: s,
    disabled: a
  } = e, o = B.ZP.useName(n), u = B.ZP.useUserTag(n, {
    decoration: "never"
  }), [d, h] = (0, c.Wu)([V.Z, L.Z], () => [V.Z.getNickname(n.id), L.Z.getStatus(n.id)], [n]), m = i.useCallback(() => r(n.id), [r, n.id]), v = [u];
  A.ZP.isMember(t.id, n.id) && v.push(J.intl.string(J.t.u1sEf3));
  let x = v.join("\xa0\xa0•\xa0\xa0");
  return (0, l.jsx)(el, {
    icon: (0, l.jsx)(p.Z, {
      "aria-hidden": true,
      size: g.EFr.SIZE_32,
      user: n,
      status: h
    }),
    label: null != d ? d : o,
    subLabel: x,
    onClick: m,
    isSelected: s,
    disabled: a
  })
}

function er(e) {
  var t, n;
  let {
    channel: r,
    onToggle: s,
    isSelected: a,
    disabled: o
  } = e, u = i.useCallback(() => s(r.id), [s, r.id]), d = null != (t = (0, _.ZP)(r)) ? t : "", c = null != (n = (0, C._)(r)) ? n : "";
  return (0, l.jsx)(el, {
    icon: (0, l.jsx)(T.Z, {
      "aria-hidden": true,
      size: g.EFr.SIZE_32,
      channel: r,
      experimentLocation: "instant_invite_modal"
    }),
    label: d,
    subLabel: c,
    onClick: u,
    isSelected: a,
    disabled: o
  })
}

function es(e) {
  var t, n;
  let {
    channel: r,
    onToggle: s,
    isSelected: a,
    disabled: o
  } = e, u = (0, c.e7)([M.Z], () => M.Z.getGuild(null == r ? true : r.guild_id)), d = i.useCallback(() => s(r.id), [s, r.id]), g = null != (t = (0, _.ZP)(r)) ? t : "", h = null != (n = null == u ? true : u.name) ? n : "";
  return (0, l.jsx)(el, {
    icon: (0, l.jsx)(y.Z, {
      size: y.E.SMALL_32,
      guild: u,
      channel: r
    }),
    label: g,
    subLabel: h,
    onClick: d,
    isSelected: a,
    disabled: o
  })
}

function ea(e) {
  let {
    guild: t,
    rows: n,
    onToggle: r,
    selection: s,
    scrollerRef: a,
    disabled: o
  } = e, u = i.useMemo(() => [n.length], [n.length]), c = (0, I.Z)("instant_invite_modal", a), h = i.useCallback(e => {
    var i, a, u;
    let d, {
      section: c,
      row: g
    } = e;
    if (c > 0) return;
    let h = n[g];
    switch (h.type) {
      case F.bm.FRIEND:
      case F.bm.DM:
        let m = h.item;
        return d = null != (i = s.includes(m.id)) && i, (0, l.jsx)(ei, {
          guild: t,
          user: m,
          isSelected: d,
          onToggle: r,
          disabled: o
        }, m.id);
      case F.bm.GROUP_DM:
        let p = h.item;
        return d = null != (a = s.includes(p.id)) && a, (0, l.jsx)(er, {
          channel: p,
          isSelected: d,
          onToggle: r,
          disabled: o
        }, p.id);
      case F.bm.CHANNEL:
        let v = h.item;
        return d = null != (u = s.includes(v.id)) && u, (0, l.jsx)(es, {
          channel: v,
          isSelected: d,
          onToggle: r,
          disabled: o
        }, v.id);
      default:
        return null
    }
  }, [t, n, s, r, o]), m = i.useCallback(() => 48, []);
  return 0 === n.length ? (0, l.jsx)(g.OZU, {
    children: J.intl.string(J.t.ojoWgY)
  }) : (0, l.jsx)(d.bG, {
    navigator: c,
    children: (0, l.jsx)(d.SJ, {
      children: e => {
        var t, n, {
            ref: i
          } = e,
          r = function(e, t) {
            if (null == e) return {};
            var n, l, i = function(e, t) {
              if (null == e) return {};
              var n, l, i = {},
                r = Object.keys(e);
              for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["ref"]);
        return (0, l.jsx)(g.YAO, (t = $({
          className: Q.recipientList,
          style: {
            "--custom-recipient-row-height": "".concat(48, "px")
          },
          scrollerRef: e => {
            null !== e && (a.current = e, i.current = e.getScrollerNode())
          }
        }, r), n = n = {
          sections: u,
          sectionHeight: 0,
          renderRow: h,
          rowHeight: m
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })
  })
}

function eo(e) {
  let {
    transitionState: t,
    onClose: n,
    guild: r,
    channel: a,
    guildScheduledEvent: d,
    source: p,
    streamUserId: I,
    applicationId: _,
    analyticsLocation: T
  } = e, y = null;
  null != _ ? y = K.Iq.EMBEDDED_APPLICATION : null != I && (y = K.Iq.STREAM);
  let C = (0, S.Z)({
      guildId: r.id
    }),
    [A, M] = i.useState([]),
    [V, B] = i.useState(""),
    {
      current: ee
    } = i.useRef($({}, en, null == C ? {} : {
      max_age: C
    }, null == _ ? {} : {
      target_application_id: _
    }, null == y ? {} : {
      target_type: y
    }, null == I ? {} : {
      target_user_id: I
    })),
    [et, el] = i.useState(ee),
    [ei, er] = i.useState(false),
    [es, eo] = i.useState(false),
    [eu, ed] = i.useState(null),
    ec = i.useRef(null),
    eg = i.useRef(null),
    {
      analyticsLocations: eh
    } = (0, j.ZP)(f.Z.INSTANT_INVITE_MODAL),
    em = i.useCallback(e => {
      var t;
      null == (t = eg.current) || t.scrollTo({
        to: 0
      }), B(e), (0, m.C)(e)
    }, [B]),
    ep = i.useCallback(() => {
      em("")
    }, [em]),
    ev = i.useCallback(e => el(t => $({}, t, e)), [el]),
    ex = i.useCallback(() => {
      M([]), el(ee), ep(), eo(false), ed(null)
    }, [ep, ee]),
    eI = i.useCallback(e => {
      M(t => {
        let n = t.findIndex(t => t === e);
        if (false === n) return [e, ...t];
        let l = [...t];
        return l.splice(n, 1), l
      })
    }, []),
    ef = i.useMemo(() => {
      var e;
      return null != a ? a : null != (e = w.ZP.getDefaultChannel(r.id, true, X.Plq.CREATE_INSTANT_INVITE)) ? e : null
    }, [r.id, a]),
    ej = !(0, c.e7)([D.Z], () => null != ef && D.Z.can(X.Plq.CREATE_INSTANT_INVITE, ef), [ef]) && !(null == ef ? true : ef.isGuildVocal()),
    eN = (0, N.Z)(ef),
    e_ = (null == ef ? true : ef.type) === X.d4z.GUILD_VOICE && !ej && !eN,
    {
      enabled: eS
    } = O.o.useExperiment({
      guildId: r.id,
      location: "instant_invite_modal"
    }, {
      autoTrackExposure: e_
    }),
    {
      canCreateApplicationBypassInvites: eE,
      isManualApprovalGuild: eb
    } = (0, H.R)(r),
    eT = eS && e_,
    {
      rows: eO,
      showFriends: ey,
      initialCounts: eC
    } = (0, Y.B)({
      guild: r,
      inviteChannel: ef,
      inviteTargetType: y,
      applicationId: _
    });
  (0, v.ZP)(() => {
    switch (ey && U.default.track(X.rMx.INVITE_SUGGESTION_OPENED, {
        location: p,
        num_suggestions: eO.length,
        num_friends: eC.numFriends,
        num_dms: eC.numDms,
        num_group_dms: eC.numGroupDms,
        guild_id: r.id,
        application_id: _
      }), y) {
      case K.Iq.EMBEDDED_APPLICATION:
        U.default.track(X.rMx.OPEN_MODAL, {
          type: "Instant Invite Modal",
          source: p,
          location: T,
          application_id: _
        });
        break;
      case K.Iq.STREAM:
        if (null == I) break;
        let e = Z.Z.getStreamForUser(I, r.id),
          t = (0, b.L2)(e, L.Z);
        U.default.track(X.rMx.OPEN_MODAL, {
          type: "Send Stream Invite",
          source: p,
          location: T,
          other_user_id: I,
          application_id: null != t ? t.id : null,
          application_name: null != t ? t.name : null,
          game_id: null != t ? t.id : null
        });
        break;
      default:
        U.default.track(X.rMx.OPEN_MODAL, {
          type: "Instant Invite Modal",
          source: p,
          location: T
        })
    }
  });
  let eP = i.useCallback(() => {
      ex(), n()
    }, [ex, n]),
    eZ = i.useCallback(async () => {
      var e, t, n, l;
      er(true);
      let i = null,
        s = null != (e = P.Z.getStageInstanceByChannel(null == ef ? true : ef.id)) ? e : null;
      if (ej && null != r.vanityURLCode) i = r.vanityURLCode;
      else if ((null == s ? true : s.invite_code) != null) i = s.invite_code;
      else if (null != ef) {
        let e = null != (t = R.Z.getInvite(ef.id, {
          targetType: et.target_type,
          targetUserId: et.target_user_id,
          targetApplicationId: et.target_application_id
        })) ? t : null;
        null !== e && (0, G.m)(e, et) || (await h.ZP.createInvite(ef.id, et, p), e = null != (n = R.Z.getInvite(ef.id, {
          targetType: et.target_type,
          targetUserId: et.target_user_id,
          targetApplicationId: et.target_application_id
        })) ? n : null), i = null != (l = null == e ? true : e.code) ? l : null
      }
      return null == i ? null : (er(false), (0, z.tV)({
        baseCode: i,
        guildScheduledEventId: null == d ? true : d.id
      }))
    }, [ef, ej, r, et, p, null == d ? true : d.id]),
    ew = i.useCallback(async () => {
      if (es || ei) return;
      eo(true), ed(null);
      let e = false;
      try {
        let t = await eZ();
        o()(null != t, "Invite key could not be determined.");
        let n = eO.filter(e => A.includes(e.item.id)).map(e => {
          var n;
          let l, i = eh[0],
            r = null != (n = k.Z.getSelectedInviteMetadata(e)) ? n : null;
          switch (e.type) {
            case F.bm.FRIEND:
            case F.bm.DM:
              l = {
                type: x.m.USER,
                user: e.item,
                inviteKey: t,
                location: i,
                suggested: r
              };
              break;
            case F.bm.CHANNEL:
              l = {
                type: x.m.CHANNEL,
                channel: e.item,
                inviteKey: t,
                location: i,
                suggested: r
              };
              break;
            case F.bm.GROUP_DM:
              l = {
                type: x.m.GROUP_DM,
                channel: e.item,
                inviteKey: t,
                location: i,
                suggested: r
              };
              break;
            default:
              return Promise.resolve()
          }
          return new Promise((e, t) => {
            x.Z.enqueue(l, n => {
              n ? e() : t()
            })
          })
        });
        if (await Promise.allSettled(n), n.length > 0) {
          let e = A.length > 1 ? J.intl.string(J.t["4pl/xs"]) : J.intl.string(J.t.sVwWdX);
          (0, g.showToast)((0, g.createToast)(e, g.ToastType.INVITE))
        }
        e = true
      } catch (e) {
        ed(e), eo(false)
      }
      e && eP()
    }, [es, ei, eo, A, eO, eZ, eh, eP]),
    eA = es || ei;
  return (0, l.jsx)(j.Gt, {
    value: eh,
    children: (0, l.jsxs)(g.Y0X, {
      className: s()(Q.modal, {
        [Q.disabled]: eA
      }),
      transitionState: t,
      impression: {
        impressionName: u.ImpressionNames.GUILD_INVITE,
        impressionProperties: {
          invite_guild_id: r.id,
          invite_channel_id: null == ef ? true : ef.id
        }
      },
      parentComponent: "InstantInviteRefreshModal",
      children: [(0, l.jsxs)(g.xBx, {
        className: Q.header,
        children: [(0, l.jsxs)("div", {
          className: Q.titleLine,
          children: [(0, l.jsx)("div", {
            className: Q.title,
            children: (0, l.jsx)(g.X6q, {
              variant: "heading-lg/semibold",
              children: J.intl.string(J.t.BN75l5)
            })
          }), (0, l.jsx)(g.olH, {
            className: Q.closeButton,
            onClick: eP
          })]
        }), (0, l.jsx)(g.E1j, {
          ref: ec,
          query: V,
          onChange: em,
          onClear: ep,
          placeholder: J.intl.string(J.t["5h0QOD"]),
          "aria-label": J.intl.string(J.t["5h0QOD"]),
          autoFocus: true
        })]
      }), (0, l.jsx)(g.hzk, {
        className: s()(Q.body, {
          [Q.empty]: 0 === eO.length
        }),
        children: (0, l.jsx)(ea, {
          guild: r,
          rows: eO,
          onToggle: eI,
          scrollerRef: eg,
          selection: A,
          disabled: eA
        })
      }), (0, l.jsxs)(g.mzw, {
        direction: E.Z.Direction.VERTICAL,
        className: Q.footer,
        children: [(0, l.jsx)(q.f, {
          className: Q.footerContent,
          guild: r,
          channel: null != a ? a : null,
          applicationId: null != _ ? _ : null,
          getInviteKey: eZ,
          sendInvite: ew,
          canUseVanityURL: ej,
          disabled: eA,
          hasSelection: A.length > 0,
          options: et,
          setOptions: ev,
          isGuestInviteAllowed: eT,
          isTemporaryInviteAllowed: !eT && !eb,
          isApplicationBypassAllowed: eE,
          setError: ed,
          analyticsLocation: eh[0]
        }), null !== eu && (0, l.jsx)(W.W, {
          guild: r,
          error: eu,
          onClose: eP
        })]
      })]
    })
  })
}