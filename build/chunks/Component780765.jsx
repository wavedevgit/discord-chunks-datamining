/** Chunk was on 21968 **/
/** chunk id: 780765, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L
}), require("./896048.js"), require("./638769.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk788373 = require("./788373.js"),
  Chunk667244 = require("./667244.js"),
  Chunk125744 = require("./125744.js"),
  Chunk311907 = require("./311907.js"),
  Chunk862482 = require("./862482.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk282956 = require("./282956.js"),
  Chunk573648 = require("./573648.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk508675 = require("./508675.js"),
  Chunk997509 = require("./997509.js"),
  Chunk427157 = require("./427157.js"),
  Chunk317525 = require("./317525.js"),
  Chunk576705 = require("./576705.js"),
  Chunk351906 = require("./351906.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk661191 = require("./661191.js"),
  Chunk447066 = require("./447066.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk86789 = require("./86789.js"),
  Chunk473169 = require("./473169.js");

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function L(e) {
  let t, {
      guild: n,
      integration: l,
      editedIntegration: s,
      isExpanded: L,
      onToggleExpand: D,
      onDisable: M,
      onEnable: G
    } = e,
    [U, B] = r.useState(false),
    W = (0, p.bG)([_.A], () => _.A.hidePersonalInformation),
    H = (0, p.bG)([v.A], () => v.A.can(C.xBc.KICK_MEMBERS, n)),
    V = r.useCallback(() => {
      B(true), G(l)
    }, [l, G]),
    z = r.useCallback(() => {
      l.syncing || (0, b.qfG)(e => {
        if (!H && l.expire_behavior === c.F.KICK) return (0, i.jsx)(b.VoidConfirmModal, R(k({}, e), {
          header: S.intl.string(S.t.emx3lN),
          confirmText: S.intl.string(S.t.BddRzS),
          confirmButtonColor: m.XD.BRAND,
          children: (0, i.jsx)(b.Text, {
            variant: "text-md/normal",
            children: l.type === u.s.YOUTUBE ? S.intl.string(S.t.pDCiEf) : S.intl.string(S.t.sQqHFk)
          })
        }));
        let t = l.expire_behavior === c.F.REMOVE_ROLE ? S.intl.string(S.t["6kpw4i"]) : S.intl.string(S.t.fQUQIJ);
        return (0, i.jsx)(b.VoidConfirmModal, R(k({}, e), {
          header: S.intl.string(S.t.emx3lN),
          confirmText: t,
          cancelText: S.intl.string(S.t["ETE/oC"]),
          onConfirm: () => M(l),
          children: (0, i.jsx)(b.Text, {
            variant: "text-md/normal",
            children: l.type === u.s.YOUTUBE ? S.intl.string(S.t.anKQWU) : S.intl.string(S.t["BW/xtn"])
          })
        }))
      })
    }, [l, M, H]),
    K = r.useCallback(() => {
      O.A.syncIntegration(n.id, l.id)
    }, [n.id, l.id]),
    F = r.useCallback(() => {
      null != l.role_id && (O.A.setSection(C.BEX.ROLES), O.A.selectRole(l.role_id))
    }, [l.role_id]),
    {
      serviceName: Y,
      channelURL: q,
      expireBehaviorLabel: J,
      syncLabel: Q,
      subscribersText: Z
    } = r.useMemo(() => {
      var e, t, n, i, r;
      let a = null != (e = null == (n = h.A.get(l.type)) || null == (t = n.getPlatformUserUrl) ? true : t.call(n, {
        id: l.account.id,
        name: l.account.name
      })) ? e : "";
      switch (l.type) {
        case u.s.YOUTUBE:
          return {
            serviceName: S.intl.string(S.t.aS6cK4), expireBehaviorLabel: S.intl.string(S.t.A5MiqO), syncLabel: S.intl.string(S.t["7vHKVe"]), subscribersText: S.intl.formatToPlainString(S.t["7lNtce"], {
              subscribers: null != (i = l.subscriber_count) ? i : 0
            }), channelURL: a
          };
        case u.s.TWITCH:
        default:
          return {
            serviceName: S.intl.string(S.t.q4pBG3), expireBehaviorLabel: S.intl.string(S.t["S/WCrG"]), syncLabel: S.intl.string(S.t["0jbPK4"]), subscribersText: S.intl.formatToPlainString(S.t.RdUTrl, {
              subscribers: null != (r = l.subscriber_count) ? r : 0
            }), channelURL: a
          }
      }
    }, [l.account, l.subscriber_count, l.type]),
    X = (0, p.bG)([A.A], () => null != l.role_id ? A.A.getRole(n.id, l.role_id) : true),
    {
      roleLink: $,
      syncDescriptionText: ee
    } = r.useMemo(() => {
      let e;
      e = null != X ? (0, i.jsx)(b.MzZ, {
        onClick: F,
        children: X.name
      }) : S.intl.string(S.t.PoWNfe);
      let t = h.A.get(l.type);
      return {
        roleLink: e,
        syncDescriptionText: l.revoked && null != t ? S.intl.formatToPlainString(S.t.G16Wji, {
          user: l.user,
          platformName: t.name
        }) : S.intl.formatToPlainString(S.t.unl3AP, {
          datetime: o()(l.synced_at).calendar()
        })
      }
    }, [X, F, l.revoked, l.synced_at, l.type, l.user]),
    et = (0, p.bG)([A.A], () => A.A.getSortedRoles(n.id)),
    en = r.useMemo(() => {
      let e = j.Ay.getGuildEmoji(n.id),
        t = et.filter(e => null != e.tags && e.tags.integration_id === l.id).map(e => e.id);
      return l.enable_emoticons ? e.filter(e => null != l.role_id && (null == e ? true : e.roles.some(e => t.includes(e)))).sort((e, t) => e.name.localeCompare(t.name)) : []
    }, [n.id, et, l.enable_emoticons, l.id, l.role_id]);
  if (r.useEffect(() => {
      (null == s ? true : s.id) === l.id && (null == s ? true : s.enabled) === true && B(false)
    }, [s, l.id]), l.enabled && null != l.user) t = [{
    icon: b.O4,
    text: W ? S.intl.formatToPlainString(S.t.gcdJ8J, {
      timestamp: T.default.extractTimestamp(l.id)
    }) : S.intl.formatToPlainString(S.t.Nu9sat, {
      user: null != l.user ? new y.A(l.user).tag : null,
      timestamp: T.default.extractTimestamp(l.id)
    })
  }];
  else {
    let e = new URL(q);
    t = [{
      text: S.intl.format(S.t.BegylZ, {
        serviceName: Y,
        accountUrl: q,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let ei = (0, i.jsxs)(x.A, {
      className: I.wx,
      align: x.A.Align.CENTER,
      children: [(0, i.jsx)(E.A, {
        name: "".concat(l.name),
        detailsClassName: I.h_,
        details: t
      }), l.enabled ? (0, i.jsx)(x.A.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsx)(N.A, {
          className: I.eO,
          expanded: L && !U,
          "aria-hidden": true
        })
      }) : (0, i.jsx)(x.A.Child, {
        shrink: 0,
        grow: 0,
        children: U ? (0, i.jsx)(b.K0, {
          variant: "primary",
          size: "sm",
          disabled: true,
          icon: b.fNY,
          "aria-label": S.intl.string(S.t["7sCN8m"])
        }) : (0, i.jsx)(b.Button, {
          variant: "primary",
          size: "sm",
          onClick: V,
          text: S.intl.string(S.t["7sCN8m"])
        })
      })]
    }),
    er = null;
  return L && !U && null != s && (er = (0, i.jsxs)(x.A, {
    className: I.rf,
    direction: x.A.Direction.VERTICAL,
    children: [(0, i.jsx)(b.cGx, {
      className: I.fV
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        subscribersText: r,
        descriptionText: l,
        roleLink: a,
        onSync: s
      } = e;
      return (0, i.jsxs)(x.A, {
        children: [(0, i.jsxs)(x.A.Child, {
          basis: "50%",
          children: [(0, i.jsx)(b.Heading, {
            variant: "heading-md/semibold",
            className: P.QB,
            children: S.intl.string(S.t.eBtNBa)
          }), (0, i.jsx)(b.Text, {
            className: I.RZ,
            color: "text-strong",
            variant: "text-sm/normal",
            children: a
          })]
        }), (0, i.jsxs)(x.A.Child, {
          basis: "50%",
          children: [(0, i.jsx)(b.Heading, {
            variant: "heading-sm/semibold",
            className: P.QB,
            children: n
          }), (0, i.jsxs)(x.A, {
            justify: x.A.Justify.BETWEEN,
            children: [(0, i.jsxs)(x.A, {
              direction: x.A.Direction.VERTICAL,
              children: [(0, i.jsx)(b.Text, {
                color: "text-strong",
                variant: "text-sm/normal",
                children: r
              }), (0, i.jsx)(b.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                children: l
              })]
            }), t.syncing ? (0, i.jsx)(b.K0, {
              size: "sm",
              variant: "primary",
              icon: b.fNY,
              "aria-label": S.intl.string(S.t.BkuOO6),
              disabled: true
            }) : (0, i.jsx)(b.Button, {
              size: "sm",
              variant: "primary",
              text: S.intl.string(S.t.BkuOO6),
              disabled: t.revoked,
              onClick: s
            })]
          })]
        })]
      })
    }({
      integration: s,
      labelText: Q,
      subscribersText: Z,
      descriptionText: ee,
      roleLink: $,
      onSync: K
    }), (0, i.jsx)(b.cGx, {
      className: I.W7
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        onBehaviorChange: r,
        onGracePeriodChange: l
      } = e;
      return (0, i.jsxs)(x.A, {
        children: [(0, i.jsx)(x.A.Child, {
          basis: "50%",
          children: (0, i.jsx)(b.l6P, {
            selectionMode: "single",
            label: n,
            placeholder: n,
            value: "".concat(t.expire_behavior),
            options: [{
              id: "remove-role",
              value: c.F.REMOVE_ROLE.toString(),
              label: S.intl.string(S.t["6kpw4i"])
            }, {
              id: "kick",
              value: c.F.KICK.toString(),
              label: S.intl.string(S.t.fQUQIJ)
            }],
            disabled: t.syncing,
            onSelectionChange: e => r(parseInt(e))
          })
        }), (0, i.jsx)(x.A.Child, {
          basis: "50%",
          children: (0, i.jsx)(b.l6P, {
            selectionMode: "single",
            label: S.intl.string(S.t.uiXMow),
            placeholder: S.intl.string(S.t.uiXMow),
            maxOptionsVisible: 5,
            value: "".concat(t.expire_grace_period),
            options: Object.values(d.u).filter(Number.isInteger).map(e => ({
              id: "".concat(e),
              value: "".concat(e),
              label: S.intl.formatToPlainString(S.t.eGjmy5, {
                days: e
              })
            })),
            onSelectionChange: e => l(parseInt(e)),
            disabled: t.syncing
          })
        })]
      })
    }({
      integration: s,
      labelText: J,
      onBehaviorChange: function(e) {
        f.A.updateIntegration({
          expireBehavior: e
        })
      },
      onGracePeriodChange: function(e) {
        f.A.updateIntegration({
          expireGracePeriod: e
        })
      }
    }), !H && s.expire_behavior === c.F.KICK && (0, i.jsx)(b.Text, {
      className: I.Ce,
      color: "text-feedback-critical",
      variant: "text-sm/normal",
      children: S.intl.string(S.t.mThMlB)
    }), l.type === u.s.TWITCH ? function(e) {
      let {
        integration: t,
        emojis: n,
        onToggle: r
      } = e;
      return (0, i.jsxs)(x.A, {
        direction: x.A.Direction.VERTICAL,
        children: [(0, i.jsx)("div", {
          className: a()(P.QX, P.QB),
          children: (0, i.jsx)(b.Checkbox, {
            checked: !!t.enable_emoticons,
            disabled: t.syncing,
            onChange: e => r(e),
            label: S.intl.string(S.t["7r4OKg"])
          })
        }), (0, i.jsx)(x.A, {
          wrap: x.A.Wrap.WRAP,
          className: I.__invalid_twitchEmojis,
          children: n.map((e, t) => (0, i.jsx)(g.m, {
            text: e.name,
            children: (0, i.jsx)("img", {
              alt: S.intl.formatToPlainString(S.t.n6ZZn4, {
                name: e.name
              }),
              draggable: false,
              className: a()(I.Zg, "emoji", "jumboable"),
              src: w.Ay.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: 28
              })
            }, e.name)
          }, t))
        })]
      })
    }({
      integration: s,
      emojis: en,
      onToggle: function(e) {
        f.A.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, i.jsx)(b.cGx, {
      className: I.Bd
    }), (0, i.jsx)(x.A, {
      children: (0, i.jsx)(b.Button, {
        size: "sm",
        variant: "critical-secondary",
        text: S.intl.string(S.t.M6q6eX),
        onClick: z
      })
    })]
  })), (0, i.jsx)(b.ZpM, {
    editable: true,
    className: I.Nr,
    children: (0, i.jsxs)(x.A, {
      direction: x.A.Direction.VERTICAL,
      children: [l.enabled ? (0, i.jsx)(b.DUT, {
        className: I._S,
        "aria-expanded": L && !U,
        onClick: D,
        children: ei
      }) : ei, er]
    })
  })
}