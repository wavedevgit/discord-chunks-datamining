/** Chunk was on 59077 **/
/** chunk id: 13051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js"), require("./642613.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk13107 = require("./13107.js"),
  Chunk400284 = require("./400284.js"),
  Chunk951284 = require("./951284.js"),
  Chunk442837 = require("./442837.js"),
  Chunk693789 = require("./693789.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk726542 = require("./726542.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk434404 = require("./434404.js"),
  Chunk598077 = require("./598077.js"),
  Chunk485386 = require("./485386.js"),
  Chunk496675 = require("./496675.js"),
  Chunk246946 = require("./246946.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk516941 = require("./516941.js"),
  Chunk197571 = require("./197571.js");

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

function A(e, t) {
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

function D(e) {
  let t, {
      guild: n,
      integration: l,
      editedIntegration: o,
      isExpanded: D,
      onToggleExpand: R,
      onDisable: L,
      onEnable: M
    } = e,
    [B, U] = r.useState(false),
    W = (0, p.e7)([C.Z], () => C.Z.hidePersonalInformation),
    H = (0, p.e7)([_.Z], () => _.Z.can(P.Plq.KICK_MEMBERS, n)),
    G = r.useCallback(() => {
      U(true), M(l)
    }, [l, M]),
    K = r.useCallback(() => {
      l.syncing || (0, g.h7j)(e => {
        if (!H && l.expire_behavior === c.l.KICK) return (0, i.jsx)(g.ConfirmModal, A(k({}, e), {
          header: w.intl.string(w.t.emx3lJ),
          confirmText: w.intl.string(w.t.BddRzc),
          confirmButtonColor: m.Tt.BRAND,
          children: (0, i.jsx)(g.Text, {
            variant: "text-md/normal",
            children: l.type === u.b.YOUTUBE ? w.intl.string(w.t.pDCiER) : w.intl.string(w.t.sQqHFh)
          })
        }));
        let t = l.expire_behavior === c.l.REMOVE_ROLE ? w.intl.string(w.t["6kpw4u"]) : w.intl.string(w.t.fQUQIC);
        return (0, i.jsx)(g.ConfirmModal, A(k({}, e), {
          header: w.intl.string(w.t.emx3lJ),
          confirmText: t,
          cancelText: w.intl.string(w.t["ETE/oK"]),
          onConfirm: () => L(l),
          children: (0, i.jsx)(g.Text, {
            variant: "text-md/normal",
            children: l.type === u.b.YOUTUBE ? w.intl.string(w.t.anKQWV) : w.intl.string(w.t["BW/xtr"])
          })
        }))
      })
    }, [l, L, H]),
    F = r.useCallback(() => {
      v.Z.syncIntegration(n.id, l.id)
    }, [n.id, l.id]),
    z = r.useCallback(() => {
      null != l.role_id && (v.Z.setSection(P.pNK.ROLES), v.Z.selectRole(l.role_id))
    }, [l.role_id]),
    {
      serviceName: q,
      channelURL: V,
      expireBehaviorLabel: Y,
      syncLabel: J,
      subscribersText: Q
    } = r.useMemo(() => {
      var e, t, n, i, r;
      let a = null != (n = null == (t = h.Z.get(l.type)) || null == (e = t.getPlatformUserUrl) ? true : e.call(t, {
        id: l.account.id,
        name: l.account.name
      })) ? n : "";
      switch (l.type) {
        case u.b.YOUTUBE:
          return {
            serviceName: w.intl.string(w.t.aS6cKy), expireBehaviorLabel: w.intl.string(w.t.A5MiqK), syncLabel: w.intl.string(w.t["7vHKVV"]), subscribersText: w.intl.formatToPlainString(w.t["7lNtcX"], {
              subscribers: null != (i = l.subscriber_count) ? i : 0
            }), channelURL: a
          };
        case u.b.TWITCH:
        default:
          return {
            serviceName: w.intl.string(w.t.q4pBGx), expireBehaviorLabel: w.intl.string(w.t["S/WCrK"]), syncLabel: w.intl.string(w.t["0jbPKy"]), subscribersText: w.intl.formatToPlainString(w.t.RdUTrq, {
              subscribers: null != (r = l.subscriber_count) ? r : 0
            }), channelURL: a
          }
      }
    }, [l.account, l.subscriber_count, l.type]),
    X = (0, p.e7)([O.Z], () => null != l.role_id ? O.Z.getRole(n.id, l.role_id) : true),
    {
      roleLink: $,
      syncDescriptionText: ee
    } = r.useMemo(() => {
      let e;
      e = null != X ? (0, i.jsx)(g.Anchor, {
        onClick: z,
        children: X.name
      }) : w.intl.string(w.t.PoWNfX);
      let t = h.Z.get(l.type);
      return {
        roleLink: e,
        syncDescriptionText: l.revoked && null != t ? w.intl.formatToPlainString(w.t.G16Wjo, {
          user: l.user,
          platformName: t.name
        }) : w.intl.formatToPlainString(w.t.unl3AA, {
          datetime: s()(l.synced_at).calendar()
        })
      }
    }, [X, z, l.revoked, l.synced_at, l.type, l.user]),
    et = (0, p.e7)([O.Z], () => O.Z.getSortedRoles(n.id)),
    en = r.useMemo(() => {
      let e = j.ZP.getGuildEmoji(n.id),
        t = et.filter(e => null != e.tags && e.tags.integration_id === l.id).map(e => e.id);
      return l.enable_emoticons ? e.filter(e => null != l.role_id && (null == e ? true : e.roles.some(e => t.includes(e)))).sort((e, t) => e.name.localeCompare(t.name)) : []
    }, [n.id, et, l.enable_emoticons, l.id, l.role_id]);
  if (r.useEffect(() => {
      (null == o ? true : o.id) === l.id && (null == o ? true : o.enabled) === true && U(false)
    }, [o, l.id]), l.enabled && null != l.user) t = [{
    icon: g.T39,
    text: W ? w.intl.formatToPlainString(w.t.gcdJ8P, {
      timestamp: I.default.extractTimestamp(l.id)
    }) : w.intl.formatToPlainString(w.t.Nu9sam, {
      user: null != l.user ? new y.default(l.user).tag : null,
      timestamp: I.default.extractTimestamp(l.id)
    })
  }];
  else {
    let e = new URL(V);
    t = [{
      text: w.intl.format(w.t.BegylZ, {
        serviceName: q,
        accountUrl: V,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let ei = (0, i.jsxs)(x.Z, {
      className: T.header,
      align: x.Z.Align.CENTER,
      children: [(0, i.jsx)(E.Z, {
        name: "".concat(l.name),
        detailsClassName: T.description,
        details: t
      }), l.enabled ? (0, i.jsx)(x.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsx)(N.Z, {
          className: T.expandIcon,
          expanded: D && !B,
          "aria-hidden": true
        })
      }) : (0, i.jsx)(x.Z.Child, {
        shrink: 0,
        grow: 0,
        children: B ? (0, i.jsx)(g.hU, {
          variant: "primary",
          size: "sm",
          disabled: true,
          icon: g.DuK,
          "aria-label": w.intl.string(w.t["7sCN8v"])
        }) : (0, i.jsx)(g.Button, {
          variant: "primary",
          size: "sm",
          onClick: G,
          text: w.intl.string(w.t["7sCN8v"])
        })
      })]
    }),
    er = null;
  return D && !B && null != o && (er = (0, i.jsxs)(x.Z, {
    className: T.body,
    direction: x.Z.Direction.VERTICAL,
    children: [(0, i.jsx)(g.izJ, {
      className: T.topDivider
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        subscribersText: r,
        descriptionText: l,
        roleLink: a,
        onSync: o
      } = e;
      return (0, i.jsxs)(x.Z, {
        children: [(0, i.jsxs)(x.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(g.Heading, {
            variant: "heading-md/semibold",
            className: Z.marginBottom8,
            children: w.intl.string(w.t.eBtNBQ)
          }), (0, i.jsx)(g.Text, {
            className: T.syncedRole,
            color: "header-primary",
            variant: "text-sm/normal",
            children: a
          })]
        }), (0, i.jsxs)(x.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(g.Heading, {
            variant: "heading-sm/semibold",
            className: Z.marginBottom8,
            children: n
          }), (0, i.jsxs)(x.Z, {
            justify: x.Z.Justify.BETWEEN,
            children: [(0, i.jsxs)(x.Z, {
              direction: x.Z.Direction.VERTICAL,
              children: [(0, i.jsx)(g.Text, {
                color: "header-primary",
                variant: "text-sm/normal",
                children: r
              }), (0, i.jsx)(g.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: l
              })]
            }), t.syncing ? (0, i.jsx)(g.hU, {
              size: "sm",
              variant: "primary",
              icon: g.DuK,
              "aria-label": w.intl.string(w.t.BkuOOz),
              disabled: true
            }) : (0, i.jsx)(g.Button, {
              size: "sm",
              variant: "primary",
              text: w.intl.string(w.t.BkuOOz),
              disabled: t.revoked,
              onClick: o
            })]
          })]
        })]
      })
    }({
      integration: o,
      labelText: J,
      subscribersText: Q,
      descriptionText: ee,
      roleLink: $,
      onSync: F
    }), (0, i.jsx)(g.izJ, {
      className: T.midDivider
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        onBehaviorChange: r,
        onGracePeriodChange: l
      } = e;
      return (0, i.jsxs)(x.Z, {
        children: [(0, i.jsx)(x.Z.Child, {
          basis: "50%",
          children: (0, i.jsx)(g.q4e, {
            label: n,
            placeholder: n,
            value: "".concat(t.expire_behavior),
            options: [{
              value: c.l.REMOVE_ROLE.toString(),
              label: w.intl.string(w.t["6kpw4u"])
            }, {
              value: c.l.KICK.toString(),
              label: w.intl.string(w.t.fQUQIC)
            }],
            isDisabled: t.syncing,
            onChange: e => r(parseInt(e))
          })
        }), (0, i.jsx)(x.Z.Child, {
          basis: "50%",
          children: (0, i.jsx)(g.q4e, {
            label: w.intl.string(w.t.uiXMo6),
            placeholder: w.intl.string(w.t.uiXMo6),
            maxVisibleItems: 5,
            value: "".concat(t.expire_grace_period),
            options: Object.values(d.W).filter(Number.isInteger).map(e => ({
              value: "".concat(e),
              label: w.intl.formatToPlainString(w.t.eGjmy8, {
                days: e
              })
            })),
            onChange: e => l(parseInt(e)),
            isDisabled: t.syncing
          })
        })]
      })
    }({
      integration: o,
      labelText: Y,
      onBehaviorChange: function(e) {
        f.Z.updateIntegration({
          expireBehavior: e
        })
      },
      onGracePeriodChange: function(e) {
        f.Z.updateIntegration({
          expireGracePeriod: e
        })
      }
    }), !H && o.expire_behavior === c.l.KICK && (0, i.jsx)(g.Text, {
      className: T.kickPermissionWarning,
      color: "text-danger",
      variant: "text-sm/normal",
      children: w.intl.string(w.t.mThMlJ)
    }), l.type === u.b.TWITCH ? function(e) {
      let {
        integration: t,
        emojis: n,
        onToggle: r
      } = e;
      return (0, i.jsxs)(x.Z, {
        direction: x.Z.Direction.VERTICAL,
        children: [(0, i.jsx)("div", {
          className: a()(Z.marginTop20, Z.marginBottom8),
          children: (0, i.jsx)(g.Checkbox, {
            checked: !!t.enable_emoticons,
            disabled: t.syncing,
            onChange: e => r(e),
            label: w.intl.string(w.t["7r4OKi"])
          })
        }), (0, i.jsx)(x.Z, {
          wrap: x.Z.Wrap.WRAP,
          className: T.__invalid_twitchEmojis,
          children: n.map((e, t) => (0, i.jsx)(b.u, {
            text: e.name,
            children: (0, i.jsx)("img", {
              alt: w.intl.formatToPlainString(w.t.n6ZZn5, {
                name: e.name
              }),
              draggable: false,
              className: a()(T.emoji, "emoji", "jumboable"),
              src: S.ZP.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: 28
              })
            }, e.name)
          }, t))
        })]
      })
    }({
      integration: o,
      emojis: en,
      onToggle: function(e) {
        f.Z.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, i.jsx)(g.izJ, {
      className: T.bottomDivider
    }), (0, i.jsx)(x.Z, {
      children: (0, i.jsx)(g.Button, {
        size: "sm",
        variant: "critical-secondary",
        text: w.intl.string(w.t.M6q6eX),
        onClick: K
      })
    })]
  })), (0, i.jsx)(g.Zbd, {
    editable: true,
    className: T.card,
    children: (0, i.jsxs)(x.Z, {
      direction: x.Z.Direction.VERTICAL,
      children: [l.enabled ? (0, i.jsx)(g.P3F, {
        className: T.expandableHeader,
        "aria-expanded": D && !B,
        onClick: R,
        children: ei
      }) : ei, er]
    })
  })
}