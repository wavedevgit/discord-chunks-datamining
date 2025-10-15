/** Chunk was on 74318 **/
/** chunk id: 265452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  InstantInviteRefreshModal: () => eo
}), require("./388685.js"), require("./539854.js"), require("./993155.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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
  Chunk301873 = require("./301873.js"),
  Chunk264229 = require("./264229.js"),
  Chunk601953 = require("./601953.js"),
  Chunk277364 = require("./277364.js"),
  Chunk666258 = require("./666258.jsx"),
  Chunk530436 = require("./530436.jsx"),
  Chunk895976 = require("./895976.js"),
  Chunk245335 = require("./245335.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk890967 = require("./890967.js");

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
    onClick: a,
    isSelected: r,
    disabled: s
  } = e;
  return (0, l.jsxs)(g.P3F, {
    "aria-disabled": s,
    className: J.recipientRow,
    onClick: a,
    children: [(0, l.jsx)("div", {
      className: J.recipientAsset,
      children: t
    }), (0, l.jsxs)("div", {
      className: J.recipientLabels,
      children: [(0, l.jsx)(g.Text, {
        className: J.recipientLabel,
        variant: "text-md/medium",
        lineClamp: 1,
        children: n
      }), true !== i ? (0, l.jsx)(g.Text, {
        className: J.recipientSublabel,
        variant: "text-xs/normal",
        color: "text-muted",
        children: i
      }) : null]
    }), (0, l.jsx)(g.FZ5, {
      checked: r
    })]
  })
}

function ei(e) {
  let {
    guild: t,
    user: n,
    onToggle: a,
    isSelected: r,
    disabled: s
  } = e, o = F.ZP.useName(n), u = F.ZP.useUserTag(n, {
    decoration: "never"
  }), [c, m] = (0, d.Wu)([V.Z, D.Z], () => [V.Z.getNickname(n.id), D.Z.getStatus(n.id)], [n]), I = i.useCallback(() => a(n.id), [a, n.id]), f = [u];
  A.ZP.isMember(t.id, n.id) && f.push(X.intl.string(X.t.u1sEfz));
  let v = f.join("\xa0\xa0•\xa0\xa0");
  return (0, l.jsx)(el, {
    icon: (0, l.jsx)(p.Z, {
      "aria-hidden": true,
      size: g.EFr.SIZE_32,
      user: n,
      status: m
    }),
    label: null != c ? c : o,
    subLabel: v,
    onClick: I,
    isSelected: r,
    disabled: s
  })
}

function ea(e) {
  var t, n;
  let {
    channel: a,
    onToggle: r,
    isSelected: s,
    disabled: o
  } = e, u = i.useCallback(() => r(a.id), [r, a.id]), c = null != (t = (0, O.ZP)(a)) ? t : "", d = null != (n = (0, P._)(a)) ? n : "";
  return (0, l.jsx)(el, {
    icon: (0, l.jsx)(j.Z, {
      "aria-hidden": true,
      size: g.EFr.SIZE_32,
      channel: a,
      experimentLocation: "instant_invite_modal"
    }),
    label: c,
    subLabel: d,
    onClick: u,
    isSelected: s,
    disabled: o
  })
}

function er(e) {
  var t, n;
  let {
    channel: a,
    onToggle: r,
    isSelected: s,
    disabled: o
  } = e, u = (0, d.e7)([M.Z], () => M.Z.getGuild(null == a ? true : a.guild_id)), c = i.useCallback(() => r(a.id), [r, a.id]), g = null != (t = (0, O.ZP)(a)) ? t : "", m = null != (n = null == u ? true : u.name) ? n : "";
  return (0, l.jsx)(el, {
    icon: (0, l.jsx)(T.Z, {
      size: T.E.SMALL_32,
      guild: u,
      channel: a
    }),
    label: g,
    subLabel: m,
    onClick: c,
    isSelected: s,
    disabled: o
  })
}

function es(e) {
  let {
    guild: t,
    rows: n,
    onToggle: a,
    selection: r,
    scrollerRef: s,
    disabled: o
  } = e, u = i.useMemo(() => [n.length], [n.length]), d = (0, x.Z)("instant_invite_modal", s), m = i.useCallback(e => {
    var i, s, u;
    let c, {
      section: d,
      row: g
    } = e;
    if (d > 0) return;
    let m = n[g];
    switch (m.type) {
      case U.bm.FRIEND:
      case U.bm.DM:
        let I = m.item;
        return c = null != (i = r.includes(I.id)) && i, (0, l.jsx)(ei, {
          guild: t,
          user: I,
          isSelected: c,
          onToggle: a,
          disabled: o
        }, I.id);
      case U.bm.GROUP_DM:
        let p = m.item;
        return c = null != (s = r.includes(p.id)) && s, (0, l.jsx)(ea, {
          channel: p,
          isSelected: c,
          onToggle: a,
          disabled: o
        }, p.id);
      case U.bm.CHANNEL:
        let f = m.item;
        return c = null != (u = r.includes(f.id)) && u, (0, l.jsx)(er, {
          channel: f,
          isSelected: c,
          onToggle: a,
          disabled: o
        }, f.id);
      default:
        return null
    }
  }, [t, n, r, a, o]), I = i.useCallback(() => 48, []);
  return 0 === n.length ? (0, l.jsx)(g.OZU, {
    children: X.intl.string(X.t.ojoWgX)
  }) : (0, l.jsx)(c.bG, {
    navigator: d,
    children: (0, l.jsx)(c.SJ, {
      children: e => {
        var t, n, {
            ref: i
          } = e,
          a = function(e, t) {
            if (null == e) return {};
            var n, l, i = function(e, t) {
              if (null == e) return {};
              var n, l, i = {},
                a = Object.keys(e);
              for (l = 0; l < a.length; l++) n = a[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (l = 0; l < a.length; l++) n = a[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["ref"]);
        return (0, l.jsx)(g.YAO, (t = $({
          className: J.recipientList,
          style: {
            "--custom-recipient-row-height": "".concat(48, "px")
          },
          scrollerRef: e => {
            null !== e && (s.current = e, i.current = e.getScrollerNode())
          }
        }, a), n = n = {
          sections: u,
          sectionHeight: 0,
          renderRow: m,
          rowHeight: I
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
    guild: a,
    channel: s,
    guildScheduledEvent: c,
    source: p,
    streamUserId: x,
    applicationId: O,
    analyticsLocation: j
  } = e, T = null;
  null != O ? T = K.Iq.EMBEDDED_APPLICATION : null != x && (T = K.Iq.STREAM);
  let P = (0, G.xU)({
      guildId: a.id,
      location: "InstantInviteRefreshModal"
    }),
    [A, M] = i.useState([]),
    [V, F] = i.useState(""),
    {
      current: ee
    } = i.useRef($({}, en, null == P ? {} : {
      max_age: P
    }, null == O ? {} : {
      target_application_id: O
    }, null == T ? {} : {
      target_type: T
    }, null == x ? {} : {
      target_user_id: x
    })),
    [et, el] = i.useState(ee),
    [ei, ea] = i.useState(false),
    [er, eo] = i.useState(false),
    [eu, ec] = i.useState(null),
    ed = i.useRef(null),
    eg = i.useRef(null),
    {
      analyticsLocations: em
    } = (0, _.ZP)(h.Z.INSTANT_INVITE_MODAL),
    eI = i.useCallback(e => {
      var t;
      null == (t = eg.current) || t.scrollTo({
        to: 0
      }), F(e), (0, I.C)(e)
    }, [F]),
    ep = i.useCallback(() => {
      eI("")
    }, [eI]),
    ef = i.useCallback(e => el(t => $({}, t, e)), [el]),
    ev = i.useCallback(() => {
      M([]), el(ee), ep(), eo(false), ec(null)
    }, [ep, ee]),
    ex = i.useCallback(e => {
      M(t => {
        let n = t.findIndex(t => t === e);
        if (false === n) return [e, ...t];
        let l = [...t];
        return l.splice(n, 1), l
      })
    }, []),
    eh = i.useMemo(() => {
      var e;
      return null != s ? s : null != (e = Z.ZP.getDefaultChannel(a.id, true, Q.Plq.CREATE_INSTANT_INVITE)) ? e : null
    }, [a.id, s]),
    e_ = !(0, d.e7)([w.Z], () => null != eh && w.Z.can(Q.Plq.CREATE_INSTANT_INVITE, eh), [eh]) && !(null == eh ? true : eh.isGuildVocal()),
    eb = (0, b.Z)(eh),
    eO = (null == eh ? true : eh.type) === Q.d4z.GUILD_VOICE && !e_ && !eb,
    {
      enabled: eN
    } = S.o.useExperiment({
      guildId: a.id,
      location: "instant_invite_modal"
    }, {
      autoTrackExposure: eO
    }),
    {
      canCreateApplicationBypassInvites: eE,
      isManualApprovalGuild: ej
    } = (0, H.R)(a),
    eS = eN && eO,
    {
      rows: eT,
      showFriends: eP,
      initialCounts: ey
    } = (0, Y.B)({
      guild: a,
      inviteChannel: eh,
      inviteTargetType: T,
      applicationId: O
    });
  (0, f.ZP)(() => {
    switch (eP && L.default.track(Q.rMx.INVITE_SUGGESTION_OPENED, {
        location: p,
        num_suggestions: eT.length,
        num_friends: ey.numFriends,
        num_dms: ey.numDms,
        num_group_dms: ey.numGroupDms,
        guild_id: a.id,
        application_id: O
      }), T) {
      case K.Iq.EMBEDDED_APPLICATION:
        L.default.track(Q.rMx.OPEN_MODAL, {
          type: "Instant Invite Modal",
          source: p,
          location: j,
          application_id: O
        });
        break;
      case K.Iq.STREAM:
        if (null == x) break;
        let e = C.Z.getStreamForUser(x, a.id),
          t = (0, E.L2)(e, D.Z);
        L.default.track(Q.rMx.OPEN_MODAL, {
          type: "Send Stream Invite",
          source: p,
          location: j,
          other_user_id: x,
          application_id: null != t ? t.id : null,
          application_name: null != t ? t.name : null,
          game_id: null != t ? t.id : null
        });
        break;
      default:
        L.default.track(Q.rMx.OPEN_MODAL, {
          type: "Instant Invite Modal",
          source: p,
          location: j
        })
    }
  });
  let eC = i.useCallback(() => {
      ev(), n()
    }, [ev, n]),
    eZ = i.useCallback(async () => {
      var e, t, n, l;
      ea(true);
      let i = null,
        r = null != (e = y.Z.getStageInstanceByChannel(null == eh ? true : eh.id)) ? e : null;
      if (e_ && null != a.vanityURLCode) i = a.vanityURLCode;
      else if ((null == r ? true : r.invite_code) != null) i = r.invite_code;
      else if (null != eh) {
        let e = null != (t = R.Z.getInvite(eh.id, {
          targetType: et.target_type,
          targetUserId: et.target_user_id,
          targetApplicationId: et.target_application_id
        })) ? t : null;
        null !== e && (0, B.m)(e, et) || (await m.ZP.createInvite(eh.id, et, p), e = null != (n = R.Z.getInvite(eh.id, {
          targetType: et.target_type,
          targetUserId: et.target_user_id,
          targetApplicationId: et.target_application_id
        })) ? n : null), i = null != (l = null == e ? true : e.code) ? l : null
      }
      return null == i ? null : (ea(false), (0, z.tV)({
        baseCode: i,
        guildScheduledEventId: null == c ? true : c.id
      }))
    }, [eh, e_, a, et, p, null == c ? true : c.id]),
    eA = i.useCallback(async () => {
      if (er || ei) return;
      eo(true), ec(null);
      let e = false;
      try {
        let t = await eZ();
        o()(null != t, "Invite key could not be determined.");
        let n = eT.filter(e => A.includes(e.item.id)).map(e => {
          let n, l = em[0];
          switch (e.type) {
            case U.bm.FRIEND:
            case U.bm.DM:
              n = {
                type: v.m.USER,
                user: e.item,
                inviteKey: t,
                location: l,
                inviteAnalyticsMetadata: {
                  suggestionData: k.Z.getSelectedInviteMetadata(e),
                  source: p
                }
              };
              break;
            case U.bm.CHANNEL:
              n = {
                type: v.m.CHANNEL,
                channel: e.item,
                inviteKey: t,
                location: l,
                inviteAnalyticsMetadata: {
                  suggestionData: k.Z.getSelectedInviteMetadata(e),
                  source: p
                }
              };
              break;
            case U.bm.GROUP_DM:
              n = {
                type: v.m.GROUP_DM,
                channel: e.item,
                inviteKey: t,
                location: l,
                inviteAnalyticsMetadata: {
                  suggestionData: k.Z.getSelectedInviteMetadata(e),
                  source: p
                }
              };
              break;
            default:
              return Promise.resolve()
          }
          return new Promise((e, t) => {
            v.Z.enqueue(n, n => {
              n ? e() : t()
            })
          })
        });
        if (await Promise.allSettled(n), n.length > 0) {
          let e = A.length > 1 ? X.intl.string(X.t["4pl/xn"]) : X.intl.string(X.t.sVwWdV);
          (0, g.showToast)((0, g.createToast)(e, g.ToastType.INVITE))
        }
        e = true
      } catch (e) {
        ec(e), eo(false)
      }
      e && eC()
    }, [er, ei, eo, A, eT, eZ, em, p, eC]),
    eM = er || ei;
  return (0, l.jsx)(_.Gt, {
    value: em,
    children: (0, l.jsxs)(g.Y0X, {
      className: r()(J.modal, {
        [J.disabled]: eM
      }),
      transitionState: t,
      impression: {
        impressionName: u.ImpressionNames.GUILD_INVITE,
        impressionProperties: {
          invite_guild_id: a.id,
          invite_channel_id: null == eh ? true : eh.id
        }
      },
      parentComponent: "InstantInviteRefreshModal",
      children: [(0, l.jsxs)(g.xBx, {
        className: J.header,
        children: [(0, l.jsxs)("div", {
          className: J.titleLine,
          children: [(0, l.jsx)("div", {
            className: J.title,
            children: (0, l.jsx)(g.Heading, {
              variant: "heading-lg/semibold",
              children: X.intl.string(X.t.BN75l9)
            })
          }), (0, l.jsx)(g.olH, {
            className: J.closeButton,
            onClick: eC
          })]
        }), (0, l.jsx)(g.E1j, {
          ref: ed,
          query: V,
          onChange: eI,
          onClear: ep,
          placeholder: X.intl.string(X.t["5h0QOP"]),
          "aria-label": X.intl.string(X.t["5h0QOP"]),
          autoFocus: true
        })]
      }), (0, l.jsx)(g.hzk, {
        className: r()(J.body, {
          [J.empty]: 0 === eT.length
        }),
        children: (0, l.jsx)(es, {
          guild: a,
          rows: eT,
          onToggle: ex,
          scrollerRef: eg,
          selection: A,
          disabled: eM
        })
      }), (0, l.jsxs)(g.mzw, {
        direction: N.Z.Direction.VERTICAL,
        className: J.footer,
        children: [(0, l.jsx)(q.f, {
          className: J.footerContent,
          guild: a,
          channel: null != s ? s : null,
          applicationId: null != O ? O : null,
          getInviteKey: eZ,
          sendInvite: eA,
          canUseVanityURL: e_,
          disabled: eM,
          hasSelection: A.length > 0,
          options: et,
          setOptions: ef,
          isGuestInviteAllowed: eS,
          isTemporaryInviteAllowed: !eS && !ej,
          isApplicationBypassAllowed: eE,
          setError: ec,
          analyticsLocation: em[0]
        }), null !== eu && (0, l.jsx)(W.W, {
          guild: a,
          error: eu,
          onClose: eC
        })]
      })]
    })
  })
}