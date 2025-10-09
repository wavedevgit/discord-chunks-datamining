/** Chunk was on 58511 **/
/** chunk id: 13051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
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
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk726542 = require("./726542.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk434404 = require("./434404.js"),
  Chunk598077 = require("./598077.js"),
  Chunk485386 = require("./485386.js"),
  Chunk246946 = require("./246946.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk709054 = require("./709054.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk516941 = require("./516941.js"),
  Chunk197571 = require("./197571.js");

function T(e) {
  let t, {
      guild: n,
      integration: l,
      editedIntegration: o,
      isExpanded: T,
      onToggleExpand: k,
      onDisable: A,
      onEnable: D
    } = e,
    [R, L] = r.useState(false),
    M = (0, p.e7)([_.Z], () => _.Z.hidePersonalInformation),
    U = r.useCallback(() => {
      L(true), D(l)
    }, [l, D]),
    B = r.useCallback(() => {
      l.syncing || (0, g.h7j)(e => {
        var t, n;
        let r = l.expire_behavior === c.l.REMOVE_ROLE ? I.intl.string(I.t["6kpw4u"]) : I.intl.string(I.t.fQUQIC);
        return (0, i.jsx)(g.ConfirmModal, (t = function(e) {
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
        }({}, e), n = n = {
          header: I.intl.string(I.t.emx3lJ),
          confirmText: r,
          cancelText: I.intl.string(I.t["ETE/oK"]),
          onConfirm: () => A(l),
          children: (0, i.jsx)(g.Text, {
            variant: "text-md/normal",
            children: l.type === u.b.YOUTUBE ? I.intl.string(I.t.anKQWV) : I.intl.string(I.t["BW/xtr"])
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    }, [l, A]),
    W = r.useCallback(() => {
      v.Z.syncIntegration(n.id, l.id)
    }, [n.id, l.id]),
    H = r.useCallback(() => {
      null != l.role_id && (v.Z.setSection(P.pNK.ROLES), v.Z.selectRole(l.role_id))
    }, [l.role_id]),
    {
      serviceName: G,
      channelURL: z,
      expireBehaviorLabel: F,
      syncLabel: K,
      subscribersText: q
    } = r.useMemo(() => {
      var e, t, n, i, r;
      let a = null != (n = null == (t = h.Z.get(l.type)) || null == (e = t.getPlatformUserUrl) ? true : e.call(t, {
        id: l.account.id,
        name: l.account.name
      })) ? n : "";
      switch (l.type) {
        case u.b.YOUTUBE:
          return {
            serviceName: I.intl.string(I.t.aS6cKy), expireBehaviorLabel: I.intl.string(I.t.A5MiqK), syncLabel: I.intl.string(I.t["7vHKVV"]), subscribersText: I.intl.formatToPlainString(I.t["7lNtcX"], {
              subscribers: null != (i = l.subscriber_count) ? i : 0
            }), channelURL: a
          };
        case u.b.TWITCH:
        default:
          return {
            serviceName: I.intl.string(I.t.q4pBGx), expireBehaviorLabel: I.intl.string(I.t["S/WCrK"]), syncLabel: I.intl.string(I.t["0jbPKy"]), subscribersText: I.intl.formatToPlainString(I.t.RdUTrq, {
              subscribers: null != (r = l.subscriber_count) ? r : 0
            }), channelURL: a
          }
      }
    }, [l.account, l.subscriber_count, l.type]),
    V = (0, p.e7)([y.Z], () => null != l.role_id ? y.Z.getRole(n.id, l.role_id) : true),
    {
      roleLink: Y,
      syncDescriptionText: J
    } = r.useMemo(() => {
      let e;
      e = null != V ? (0, i.jsx)(g.eee, {
        onClick: H,
        children: V.name
      }) : I.intl.string(I.t.PoWNfX);
      let t = h.Z.get(l.type);
      return {
        roleLink: e,
        syncDescriptionText: l.revoked && null != t ? I.intl.formatToPlainString(I.t.G16Wjo, {
          user: l.user,
          platformName: t.name
        }) : I.intl.formatToPlainString(I.t.unl3AA, {
          datetime: s()(l.synced_at).calendar()
        })
      }
    }, [V, H, l.revoked, l.synced_at, l.type, l.user]),
    X = (0, p.e7)([y.Z], () => y.Z.getSortedRoles(n.id)),
    Q = r.useMemo(() => {
      let e = j.ZP.getGuildEmoji(n.id),
        t = X.filter(e => null != e.tags && e.tags.integration_id === l.id).map(e => e.id);
      return l.enable_emoticons ? e.filter(e => null != l.role_id && (null == e ? true : e.roles.some(e => t.includes(e)))).sort((e, t) => e.name.localeCompare(t.name)) : []
    }, [n.id, X, l.enable_emoticons, l.id, l.role_id]);
  if (r.useEffect(() => {
      (null == o ? true : o.id) === l.id && (null == o ? true : o.enabled) === true && L(false)
    }, [o, l.id]), l.enabled && null != l.user) t = [{
    icon: g.T39,
    text: M ? I.intl.formatToPlainString(I.t.gcdJ8P, {
      timestamp: S.default.extractTimestamp(l.id)
    }) : I.intl.formatToPlainString(I.t.Nu9sam, {
      user: null != l.user ? new O.Z(l.user).tag : null,
      timestamp: S.default.extractTimestamp(l.id)
    })
  }];
  else {
    let e = new URL(z);
    t = [{
      text: I.intl.format(I.t.BegylZ, {
        serviceName: G,
        accountUrl: z,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let $ = (0, i.jsxs)(x.Z, {
      className: E.header,
      align: x.Z.Align.CENTER,
      children: [(0, i.jsx)(w.Z, {
        name: "".concat(l.name),
        detailsClassName: E.description,
        details: t
      }), l.enabled ? (0, i.jsx)(x.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsx)(C.Z, {
          className: E.expandIcon,
          expanded: T && !R,
          "aria-hidden": true
        })
      }) : (0, i.jsx)(x.Z.Child, {
        shrink: 0,
        grow: 0,
        children: R ? (0, i.jsx)(g.hU, {
          variant: "primary",
          size: "sm",
          disabled: true,
          icon: g.DuK,
          "aria-label": I.intl.string(I.t["7sCN8v"])
        }) : (0, i.jsx)(g.zxk, {
          variant: "primary",
          size: "sm",
          onClick: U,
          text: I.intl.string(I.t["7sCN8v"])
        })
      })]
    }),
    ee = null;
  return T && !R && null != o && (ee = (0, i.jsxs)(x.Z, {
    className: E.body,
    direction: x.Z.Direction.VERTICAL,
    children: [(0, i.jsx)(g.izJ, {
      className: E.topDivider
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
          children: [(0, i.jsx)(g.vwX, {
            className: Z.marginBottom8,
            children: I.intl.string(I.t.eBtNBQ)
          }), (0, i.jsx)(g.Text, {
            className: E.syncedRole,
            color: "header-primary",
            variant: "text-sm/normal",
            children: a
          })]
        }), (0, i.jsxs)(x.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(g.vwX, {
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
              "aria-label": I.intl.string(I.t.BkuOOz),
              disabled: true
            }) : (0, i.jsx)(g.zxk, {
              size: "sm",
              variant: "primary",
              text: I.intl.string(I.t.BkuOOz),
              disabled: t.revoked,
              onClick: o
            })]
          })]
        })]
      })
    }({
      integration: o,
      labelText: K,
      subscribersText: q,
      descriptionText: J,
      roleLink: Y,
      onSync: W
    }), (0, i.jsx)(g.izJ, {
      className: E.midDivider
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
              label: I.intl.string(I.t["6kpw4u"])
            }, {
              value: c.l.KICK.toString(),
              label: I.intl.string(I.t.fQUQIC)
            }],
            isDisabled: t.syncing,
            onChange: e => r(parseInt(e))
          })
        }), (0, i.jsx)(x.Z.Child, {
          basis: "50%",
          children: (0, i.jsx)(g.q4e, {
            label: I.intl.string(I.t.uiXMo6),
            placeholder: I.intl.string(I.t.uiXMo6),
            maxVisibleItems: 5,
            value: "".concat(t.expire_grace_period),
            options: Object.values(d.W).filter(Number.isInteger).map(e => ({
              value: "".concat(e),
              label: I.intl.formatToPlainString(I.t.eGjmy8, {
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
      labelText: F,
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
    }), l.type === u.b.TWITCH ? function(e) {
      let {
        integration: t,
        emojis: n,
        onToggle: r
      } = e;
      return (0, i.jsxs)(x.Z, {
        direction: x.Z.Direction.VERTICAL,
        children: [(0, i.jsx)(b.VL, {
          className: a()(Z.marginTop20, Z.marginBottom8),
          checked: t.enable_emoticons,
          disabled: t.syncing,
          onChange: e => r(e),
          label: I.intl.string(I.t["7r4OKi"])
        }), (0, i.jsx)(x.Z, {
          wrap: x.Z.Wrap.WRAP,
          className: E.__invalid_twitchEmojis,
          children: n.map((e, t) => (0, i.jsx)(m.u, {
            text: e.name,
            children: (0, i.jsx)("img", {
              alt: I.intl.formatToPlainString(I.t.n6ZZn5, {
                name: e.name
              }),
              draggable: false,
              className: a()(E.emoji, "emoji", "jumboable"),
              src: N.ZP.getEmojiURL({
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
      emojis: Q,
      onToggle: function(e) {
        f.Z.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, i.jsx)(g.izJ, {
      className: E.bottomDivider
    }), (0, i.jsx)(x.Z, {
      children: (0, i.jsx)(g.zxk, {
        size: "sm",
        variant: "critical-secondary",
        text: I.intl.string(I.t.M6q6eX),
        onClick: B
      })
    })]
  })), (0, i.jsx)(g.Zbd, {
    editable: true,
    className: E.card,
    children: (0, i.jsxs)(x.Z, {
      direction: x.Z.Direction.VERTICAL,
      children: [l.enabled ? (0, i.jsx)(g.P3F, {
        className: E.expandableHeader,
        "aria-expanded": T && !R,
        onClick: k,
        children: $
      }) : $, ee]
    })
  })
}