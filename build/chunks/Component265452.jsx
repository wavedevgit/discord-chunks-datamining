/** Chunk was on 7654 **/
/** chunk id: 265452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => eu
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
  Chunk755721 = require("./755721.js"),
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

function ee(e) {
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
  INVITE_OPTIONS_7_DAYS: et,
  INVITE_OPTIONS_UNLIMITED: en
} = Chunk971130.ZP, el = {
  max_age: et.value,
  max_uses: en.value
};

function ei(e) {
  let {
    icon: t,
    label: n,
    subLabel: i,
    onClick: s,
    isSelected: r,
    disabled: a
  } = e;
  return (0, l.jsxs)(h.P3F, {
    "aria-disabled": a,
    className: $.recipientRow,
    onClick: s,
    children: [(0, l.jsx)("div", {
      className: $.recipientAsset,
      children: t
    }), (0, l.jsxs)("div", {
      className: $.recipientLabels,
      children: [(0, l.jsx)(h.Text, {
        className: $.recipientLabel,
        variant: "text-md/medium",
        lineClamp: 1,
        children: n
      }), true !== i ? (0, l.jsx)(h.Text, {
        className: $.recipientSublabel,
        variant: "text-xs/normal",
        color: "text-muted",
        children: i
      }) : null]
    }), (0, l.jsx)(g.VL, {
      checked: r,
      className: $.checkbox,
      isIndicator: true
    })]
  })
}

function es(e) {
  let {
    guild: t,
    user: n,
    onToggle: s,
    isSelected: r,
    disabled: a
  } = e, o = B.ZP.useName(n), u = B.ZP.useUserTag(n, {
    decoration: "never"
  }), [d, g] = (0, c.Wu)([L.Z, D.Z], () => [L.Z.getNickname(n.id), D.Z.getStatus(n.id)], [n]), m = i.useCallback(() => s(n.id), [s, n.id]), p = [u];
  M.ZP.isMember(t.id, n.id) && p.push(J.intl.string(J.t.u1sEf3));
  let I = p.join("\xa0\xa0•\xa0\xa0");
  return (0, l.jsx)(ei, {
    icon: (0, l.jsx)(v.Z, {
      "aria-hidden": true,
      size: h.EFr.SIZE_32,
      user: n,
      status: g
    }),
    label: null != d ? d : o,
    subLabel: I,
    onClick: m,
    isSelected: r,
    disabled: a
  })
}

function er(e) {
  var t, n;
  let {
    channel: s,
    onToggle: r,
    isSelected: a,
    disabled: o
  } = e, u = i.useCallback(() => r(s.id), [r, s.id]), d = null != (t = (0, S.ZP)(s)) ? t : "", c = null != (n = (0, C._)(s)) ? n : "";
  return (0, l.jsx)(ei, {
    icon: (0, l.jsx)(y.Z, {
      "aria-hidden": true,
      size: h.EFr.SIZE_32,
      channel: s,
      experimentLocation: "instant_invite_modal"
    }),
    label: d,
    subLabel: c,
    onClick: u,
    isSelected: a,
    disabled: o
  })
}

function ea(e) {
  var t, n;
  let {
    channel: s,
    onToggle: r,
    isSelected: a,
    disabled: o
  } = e, u = (0, c.e7)([w.Z], () => w.Z.getGuild(null == s ? true : s.guild_id)), d = i.useCallback(() => r(s.id), [r, s.id]), g = null != (t = (0, S.ZP)(s)) ? t : "", h = null != (n = null == u ? true : u.name) ? n : "";
  return (0, l.jsx)(ei, {
    icon: (0, l.jsx)(O.Z, {
      size: O.E.SMALL_32,
      guild: u,
      channel: s
    }),
    label: g,
    subLabel: h,
    onClick: d,
    isSelected: a,
    disabled: o
  })
}

function eo(e) {
  let {
    guild: t,
    rows: n,
    onToggle: s,
    selection: r,
    scrollerRef: a,
    disabled: o
  } = e, u = i.useMemo(() => [n.length], [n.length]), c = (0, f.Z)("instant_invite_modal", a), g = i.useCallback(e => {
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
        return d = null != (i = r.includes(m.id)) && i, (0, l.jsx)(es, {
          guild: t,
          user: m,
          isSelected: d,
          onToggle: s,
          disabled: o
        }, m.id);
      case F.bm.GROUP_DM:
        let p = h.item;
        return d = null != (a = r.includes(p.id)) && a, (0, l.jsx)(er, {
          channel: p,
          isSelected: d,
          onToggle: s,
          disabled: o
        }, p.id);
      case F.bm.CHANNEL:
        let v = h.item;
        return d = null != (u = r.includes(v.id)) && u, (0, l.jsx)(ea, {
          channel: v,
          isSelected: d,
          onToggle: s,
          disabled: o
        }, v.id);
      default:
        return null
    }
  }, [t, n, r, s, o]), m = i.useCallback(() => 48, []);
  return 0 === n.length ? (0, l.jsx)(h.OZU, {
    children: J.intl.string(J.t.ojoWgY)
  }) : (0, l.jsx)(d.bG, {
    navigator: c,
    children: (0, l.jsx)(d.SJ, {
      children: e => {
        var t, n, {
            ref: i
          } = e,
          s = function(e, t) {
            if (null == e) return {};
            var n, l, i = function(e, t) {
              if (null == e) return {};
              var n, l, i = {},
                s = Object.keys(e);
              for (l = 0; l < s.length; l++) n = s[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              for (l = 0; l < s.length; l++) n = s[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(e, ["ref"]);
        return (0, l.jsx)(h.YAO, (t = ee({
          className: $.recipientList,
          style: {
            "--custom-recipient-row-height": "".concat(48, "px")
          },
          scrollerRef: e => {
            null !== e && (a.current = e, i.current = e.getScrollerNode())
          }
        }, s), n = n = {
          sections: u,
          sectionHeight: 0,
          renderRow: g,
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

function eu(e) {
  let {
    transitionState: t,
    onClose: n,
    guild: s,
    channel: a,
    guildScheduledEvent: d,
    source: g,
    streamUserId: v,
    applicationId: f,
    analyticsLocation: S
  } = e, y = null;
  null != f ? y = X.Iq.EMBEDDED_APPLICATION : null != v && (y = X.Iq.STREAM);
  let O = (0, z.xU)({
      guildId: s.id,
      location: "InstantInviteRefreshModal"
    }),
    [C, M] = i.useState([]),
    [w, L] = i.useState(""),
    {
      current: B
    } = i.useRef(ee({}, el, null == O ? {} : {
      max_age: O
    }, null == f ? {} : {
      target_application_id: f
    }, null == y ? {} : {
      target_type: y
    }, null == v ? {} : {
      target_user_id: v
    })),
    [et, en] = i.useState(B),
    [ei, es] = i.useState(false),
    [er, ea] = i.useState(false),
    [eu, ed] = i.useState(null),
    ec = i.useRef(null),
    eg = i.useRef(null),
    {
      analyticsLocations: eh
    } = (0, _.ZP)(N.Z.INSTANT_INVITE_MODAL),
    em = i.useCallback(e => {
      var t;
      null == (t = eg.current) || t.scrollTo({
        to: 0
      }), L(e), (0, p.C)(e)
    }, [L]),
    ep = i.useCallback(() => {
      em("")
    }, [em]),
    ev = i.useCallback(e => en(t => ee({}, t, e)), [en]),
    eI = i.useCallback(() => {
      M([]), en(B), ep(), ea(false), ed(null)
    }, [ep, B]),
    ex = i.useCallback(e => {
      M(t => {
        let n = t.findIndex(t => t === e);
        if (false === n) return [e, ...t];
        let l = [...t];
        return l.splice(n, 1), l
      })
    }, []),
    ef = i.useMemo(() => {
      var e;
      return null != a ? a : null != (e = A.ZP.getDefaultChannel(s.id, true, Q.Plq.CREATE_INSTANT_INVITE)) ? e : null
    }, [s.id, a]),
    eN = !(0, c.e7)([k.Z], () => null != ef && k.Z.can(Q.Plq.CREATE_INSTANT_INVITE, ef), [ef]) && !(null == ef ? true : ef.isGuildVocal()),
    e_ = (0, j.Z)(ef),
    ej = (null == ef ? true : ef.type) === Q.d4z.GUILD_VOICE && !eN && !e_,
    {
      enabled: eS
    } = T.o.useExperiment({
      guildId: s.id,
      location: "instant_invite_modal"
    }, {
      autoTrackExposure: ej
    }),
    {
      canCreateApplicationBypassInvites: eb,
      isManualApprovalGuild: eE
    } = (0, q.R)(s),
    ey = eS && ej,
    {
      rows: eT,
      showFriends: eO,
      initialCounts: eC
    } = (0, K.B)({
      guild: s,
      inviteChannel: ef,
      inviteTargetType: y,
      applicationId: f
    });
  (0, I.ZP)(() => {
    switch (eO && U.default.track(Q.rMx.INVITE_SUGGESTION_OPENED, {
        location: g,
        num_suggestions: eT.length,
        num_friends: eC.numFriends,
        num_dms: eC.numDms,
        num_group_dms: eC.numGroupDms,
        guild_id: s.id,
        application_id: f
      }), y) {
      case X.Iq.EMBEDDED_APPLICATION:
        U.default.track(Q.rMx.OPEN_MODAL, {
          type: "Instant Invite Modal",
          source: g,
          location: S,
          application_id: f
        });
        break;
      case X.Iq.STREAM:
        if (null == v) break;
        let e = Z.Z.getStreamForUser(v, s.id),
          t = (0, E.L2)(e, D.Z);
        U.default.track(Q.rMx.OPEN_MODAL, {
          type: "Send Stream Invite",
          source: g,
          location: S,
          other_user_id: v,
          application_id: null != t ? t.id : null,
          application_name: null != t ? t.name : null,
          game_id: null != t ? t.id : null
        });
        break;
      default:
        U.default.track(Q.rMx.OPEN_MODAL, {
          type: "Instant Invite Modal",
          source: g,
          location: S
        })
    }
  });
  let eP = i.useCallback(() => {
      eI(), n()
    }, [eI, n]),
    eZ = i.useCallback(async () => {
      var e, t, n, l;
      es(true);
      let i = null,
        r = null != (e = P.Z.getStageInstanceByChannel(null == ef ? true : ef.id)) ? e : null;
      if (eN && null != s.vanityURLCode) i = s.vanityURLCode;
      else if ((null == r ? true : r.invite_code) != null) i = r.invite_code;
      else if (null != ef) {
        let e = null != (t = R.Z.getInvite(ef.id, {
          targetType: et.target_type,
          targetUserId: et.target_user_id,
          targetApplicationId: et.target_application_id
        })) ? t : null;
        null !== e && (0, H.m)(e, et) || (await m.ZP.createInvite(ef.id, et, g), e = null != (n = R.Z.getInvite(ef.id, {
          targetType: et.target_type,
          targetUserId: et.target_user_id,
          targetApplicationId: et.target_application_id
        })) ? n : null), i = null != (l = null == e ? true : e.code) ? l : null
      }
      return null == i ? null : (es(false), (0, G.tV)({
        baseCode: i,
        guildScheduledEventId: null == d ? true : d.id
      }))
    }, [ef, eN, s, et, g, null == d ? true : d.id]),
    eA = i.useCallback(async () => {
      if (er || ei) return;
      ea(true), ed(null);
      let e = false;
      try {
        let t = await eZ();
        o()(null != t, "Invite key could not be determined.");
        let n = eT.filter(e => C.includes(e.item.id)).map(e => {
          let n, l = eh[0];
          switch (e.type) {
            case F.bm.FRIEND:
            case F.bm.DM:
              n = {
                type: x.m.USER,
                user: e.item,
                inviteKey: t,
                location: l,
                inviteAnalyticsMetadata: {
                  suggestionData: V.Z.getSelectedInviteMetadata(e),
                  source: g
                }
              };
              break;
            case F.bm.CHANNEL:
              n = {
                type: x.m.CHANNEL,
                channel: e.item,
                inviteKey: t,
                location: l,
                inviteAnalyticsMetadata: {
                  suggestionData: V.Z.getSelectedInviteMetadata(e),
                  source: g
                }
              };
              break;
            case F.bm.GROUP_DM:
              n = {
                type: x.m.GROUP_DM,
                channel: e.item,
                inviteKey: t,
                location: l,
                inviteAnalyticsMetadata: {
                  suggestionData: V.Z.getSelectedInviteMetadata(e),
                  source: g
                }
              };
              break;
            default:
              return Promise.resolve()
          }
          return new Promise((e, t) => {
            x.Z.enqueue(n, n => {
              n ? e() : t()
            })
          })
        });
        if (await Promise.allSettled(n), n.length > 0) {
          let e = C.length > 1 ? J.intl.string(J.t["4pl/xs"]) : J.intl.string(J.t.sVwWdX);
          (0, h.showToast)((0, h.createToast)(e, h.ToastType.INVITE))
        }
        e = true
      } catch (e) {
        ed(e), ea(false)
      }
      e && eP()
    }, [er, ei, ea, C, eT, eZ, eh, g, eP]),
    eM = er || ei;
  return (0, l.jsx)(_.Gt, {
    value: eh,
    children: (0, l.jsxs)(h.Y0X, {
      className: r()($.modal, {
        [$.disabled]: eM
      }),
      transitionState: t,
      impression: {
        impressionName: u.ImpressionNames.GUILD_INVITE,
        impressionProperties: {
          invite_guild_id: s.id,
          invite_channel_id: null == ef ? true : ef.id
        }
      },
      parentComponent: "InstantInviteRefreshModal",
      children: [(0, l.jsxs)(h.xBx, {
        className: $.header,
        children: [(0, l.jsxs)("div", {
          className: $.titleLine,
          children: [(0, l.jsx)("div", {
            className: $.title,
            children: (0, l.jsx)(h.X6q, {
              variant: "heading-lg/semibold",
              children: J.intl.string(J.t.BN75l5)
            })
          }), (0, l.jsx)(h.olH, {
            className: $.closeButton,
            onClick: eP
          })]
        }), (0, l.jsx)(h.E1j, {
          ref: ec,
          query: w,
          onChange: em,
          onClear: ep,
          placeholder: J.intl.string(J.t["5h0QOD"]),
          "aria-label": J.intl.string(J.t["5h0QOD"]),
          autoFocus: true
        })]
      }), (0, l.jsx)(h.hzk, {
        className: r()($.body, {
          [$.empty]: 0 === eT.length
        }),
        children: (0, l.jsx)(eo, {
          guild: s,
          rows: eT,
          onToggle: ex,
          scrollerRef: eg,
          selection: C,
          disabled: eM
        })
      }), (0, l.jsxs)(h.mzw, {
        direction: b.Z.Direction.VERTICAL,
        className: $.footer,
        children: [(0, l.jsx)(W.f, {
          className: $.footerContent,
          guild: s,
          channel: null != a ? a : null,
          applicationId: null != f ? f : null,
          getInviteKey: eZ,
          sendInvite: eA,
          canUseVanityURL: eN,
          disabled: eM,
          hasSelection: C.length > 0,
          options: et,
          setOptions: ev,
          isGuestInviteAllowed: ey,
          isTemporaryInviteAllowed: !ey && !eE,
          isApplicationBypassAllowed: eb,
          setError: ed,
          analyticsLocation: eh[0]
        }), null !== eu && (0, l.jsx)(Y.W, {
          guild: s,
          error: eu,
          onClose: eP
        })]
      })]
    })
  })
}