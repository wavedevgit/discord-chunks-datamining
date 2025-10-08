/** Chunk was on 98039 **/
/** chunk id: 13051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./642613.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
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
  Chunk88270 = require("./88270.js"),
  Chunk10198 = require("./10198.js");

function Z(e) {
  let t, {
      guild: n,
      integration: l,
      editedIntegration: o,
      isExpanded: Z,
      onToggleExpand: E,
      onDisable: T,
      onEnable: k
    } = e,
    [A, D] = r.useState(false),
    R = (0, d.e7)([y.Z], () => y.Z.hidePersonalInformation),
    L = r.useCallback(() => {
      D(true), k(l)
    }, [l, k]),
    M = r.useCallback(() => {
      l.syncing || (0, m.h7j)(e => {
        var t, n;
        let r = 0 === l.expire_behavior ? S.intl.string(S.t["6kpw4u"]) : S.intl.string(S.t.fQUQIC);
        return (0, i.jsx)(m.ConfirmModal, (t = function(e) {
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
          header: S.intl.string(S.t.emx3lJ),
          confirmText: r,
          cancelText: S.intl.string(S.t["ETE/oK"]),
          onConfirm: () => T(l),
          children: (0, i.jsx)(m.Text, {
            variant: "text-md/normal",
            children: l.type === c.b.YOUTUBE ? S.intl.string(S.t.anKQWV) : S.intl.string(S.t["BW/xtr"])
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
    }, [l, T]),
    U = r.useCallback(() => {
      x.Z.syncIntegration(n.id, l.id)
    }, [n.id, l.id]),
    B = r.useCallback(() => {
      null != l.role_id && (x.Z.setSection(w.pNK.ROLES), x.Z.selectRole(l.role_id))
    }, [l.role_id]),
    {
      serviceName: W,
      channelURL: H,
      expireBehaviorLabel: G,
      syncLabel: z,
      subscribersText: F
    } = r.useMemo(() => {
      var e, t, n, i, r;
      let a = null != (n = null == (t = g.Z.get(l.type)) || null == (e = t.getPlatformUserUrl) ? true : e.call(t, {
        id: l.account.id,
        name: l.account.name
      })) ? n : "";
      switch (l.type) {
        case c.b.YOUTUBE:
          return {
            serviceName: S.intl.string(S.t.aS6cKy), expireBehaviorLabel: S.intl.string(S.t.A5MiqK), syncLabel: S.intl.string(S.t["7vHKVV"]), subscribersText: S.intl.formatToPlainString(S.t["7lNtcX"], {
              subscribers: null != (i = l.subscriber_count) ? i : 0
            }), channelURL: a
          };
        case c.b.TWITCH:
        default:
          return {
            serviceName: S.intl.string(S.t.q4pBGx), expireBehaviorLabel: S.intl.string(S.t["S/WCrK"]), syncLabel: S.intl.string(S.t["0jbPKy"]), subscribersText: S.intl.formatToPlainString(S.t.RdUTrq, {
              subscribers: null != (r = l.subscriber_count) ? r : 0
            }), channelURL: a
          }
      }
    }, [l.account, l.subscriber_count, l.type]),
    K = (0, d.e7)([v.Z], () => null != l.role_id ? v.Z.getRole(n.id, l.role_id) : true),
    {
      roleLink: q,
      syncDescriptionText: V
    } = r.useMemo(() => {
      let e;
      e = null != K ? (0, i.jsx)(m.eee, {
        onClick: B,
        children: K.name
      }) : S.intl.string(S.t.PoWNfX);
      let t = g.Z.get(l.type);
      return {
        roleLink: e,
        syncDescriptionText: l.revoked && null != t ? S.intl.formatToPlainString(S.t.G16Wjo, {
          user: l.user,
          platformName: t.name
        }) : S.intl.formatToPlainString(S.t.unl3AA, {
          datetime: s()(l.synced_at).calendar()
        })
      }
    }, [K, B, l.revoked, l.synced_at, l.type, l.user]),
    J = (0, d.e7)([v.Z], () => v.Z.getSortedRoles(n.id)),
    Y = r.useMemo(() => {
      let e = h.ZP.getGuildEmoji(n.id),
        t = J.filter(e => null != e.tags && e.tags.integration_id === l.id).map(e => e.id);
      return l.enable_emoticons ? e.filter(e => null != l.role_id && (null == e ? true : e.roles.some(e => t.includes(e)))).sort((e, t) => e.name.localeCompare(t.name)) : []
    }, [n.id, J, l.enable_emoticons, l.id, l.role_id]);
  if (r.useEffect(() => {
      (null == o ? true : o.id) === l.id && (null == o ? true : o.enabled) === true && D(false)
    }, [o, l.id]), l.enabled && null != l.user) t = [{
    icon: m.T39,
    text: R ? S.intl.formatToPlainString(S.t.gcdJ8P, {
      timestamp: C.default.extractTimestamp(l.id)
    }) : S.intl.formatToPlainString(S.t.Nu9sam, {
      user: null != l.user ? new j.Z(l.user).tag : null,
      timestamp: C.default.extractTimestamp(l.id)
    })
  }];
  else {
    let e = new URL(H);
    t = [{
      text: S.intl.format(S.t.BegylZ, {
        serviceName: W,
        accountUrl: H,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let X = (0, i.jsxs)(f.Z, {
      className: P.header,
      align: f.Z.Align.CENTER,
      children: [(0, i.jsx)(N.Z, {
        name: "".concat(l.name),
        detailsClassName: P.description,
        details: t
      }), l.enabled ? (0, i.jsx)(f.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsx)(O.Z, {
          className: P.expandIcon,
          expanded: Z && !A,
          "aria-hidden": true
        })
      }) : (0, i.jsx)(f.Z.Child, {
        shrink: 0,
        grow: 0,
        children: A ? (0, i.jsx)(m.hU, {
          variant: "primary",
          size: "sm",
          disabled: true,
          icon: m.DuK,
          "aria-label": S.intl.string(S.t["7sCN8v"])
        }) : (0, i.jsx)(m.zxk, {
          variant: "primary",
          size: "sm",
          onClick: L,
          text: S.intl.string(S.t["7sCN8v"])
        })
      })]
    }),
    Q = null;
  return Z && !A && null != o && (Q = (0, i.jsxs)(f.Z, {
    className: P.body,
    direction: f.Z.Direction.VERTICAL,
    children: [(0, i.jsx)(m.izJ, {
      className: P.topDivider
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        subscribersText: r,
        descriptionText: l,
        roleLink: a,
        onSync: o
      } = e;
      return (0, i.jsxs)(f.Z, {
        children: [(0, i.jsxs)(f.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(m.vwX, {
            className: I.marginBottom8,
            children: S.intl.string(S.t.eBtNBQ)
          }), (0, i.jsx)(m.Text, {
            className: P.syncedRole,
            color: "header-primary",
            variant: "text-sm/normal",
            children: a
          })]
        }), (0, i.jsxs)(f.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(m.vwX, {
            className: I.marginBottom8,
            children: n
          }), (0, i.jsxs)(f.Z, {
            justify: f.Z.Justify.BETWEEN,
            children: [(0, i.jsxs)(f.Z, {
              direction: f.Z.Direction.VERTICAL,
              children: [(0, i.jsx)(m.Text, {
                color: "header-primary",
                variant: "text-sm/normal",
                children: r
              }), (0, i.jsx)(m.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: l
              })]
            }), t.syncing ? (0, i.jsx)(m.hU, {
              size: "sm",
              variant: "primary",
              icon: m.DuK,
              "aria-label": S.intl.string(S.t.BkuOOz),
              disabled: true
            }) : (0, i.jsx)(m.zxk, {
              size: "sm",
              variant: "primary",
              text: S.intl.string(S.t.BkuOOz),
              disabled: t.revoked,
              onClick: o
            })]
          })]
        })]
      })
    }({
      integration: o,
      labelText: z,
      subscribersText: F,
      descriptionText: V,
      roleLink: q,
      onSync: U
    }), (0, i.jsx)(m.izJ, {
      className: P.midDivider
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        onBehaviorChange: r,
        onGracePeriodChange: l
      } = e;
      return (0, i.jsxs)(f.Z, {
        children: [(0, i.jsx)(f.Z.Child, {
          basis: "50%",
          children: (0, i.jsx)(m.q4e, {
            label: n,
            placeholder: n,
            value: "".concat(t.expire_behavior),
            options: [{
              value: "0",
              label: S.intl.string(S.t["6kpw4u"])
            }, {
              value: "1",
              label: S.intl.string(S.t.fQUQIC)
            }],
            isDisabled: t.syncing,
            onChange: e => r(parseInt(e))
          })
        }), (0, i.jsx)(f.Z.Child, {
          basis: "50%",
          children: (0, i.jsx)(m.q4e, {
            label: S.intl.string(S.t.uiXMo6),
            placeholder: S.intl.string(S.t.uiXMo6),
            maxVisibleItems: 5,
            value: "".concat(t.expire_grace_period),
            options: [1, 3, 7, 14, 30].map(e => ({
              value: "".concat(e),
              label: S.intl.formatToPlainString(S.t.eGjmy8, {
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
      labelText: G,
      onBehaviorChange: function(e) {
        b.Z.updateIntegration({
          expireBehavior: e
        })
      },
      onGracePeriodChange: function(e) {
        b.Z.updateIntegration({
          expireGracePeriod: e
        })
      }
    }), l.type === c.b.TWITCH ? function(e) {
      let {
        integration: t,
        emojis: n,
        onToggle: r
      } = e;
      return (0, i.jsxs)(f.Z, {
        direction: f.Z.Direction.VERTICAL,
        children: [(0, i.jsx)(p.VL, {
          className: a()(I.marginTop20, I.marginBottom8),
          checked: t.enable_emoticons,
          disabled: t.syncing,
          onChange: e => r(e),
          label: S.intl.string(S.t["7r4OKi"])
        }), (0, i.jsx)(f.Z, {
          wrap: f.Z.Wrap.WRAP,
          className: P.__invalid_twitchEmojis,
          children: n.map((e, t) => (0, i.jsx)(u.u, {
            text: e.name,
            children: (0, i.jsx)("img", {
              alt: S.intl.formatToPlainString(S.t.n6ZZn5, {
                name: e.name
              }),
              draggable: false,
              className: a()(P.emoji, "emoji", "jumboable"),
              src: _.ZP.getEmojiURL({
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
      emojis: Y,
      onToggle: function(e) {
        b.Z.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, i.jsx)(m.izJ, {
      className: P.bottomDivider
    }), (0, i.jsx)(f.Z, {
      children: (0, i.jsx)(m.zxk, {
        size: "sm",
        variant: "critical-secondary",
        text: S.intl.string(S.t.M6q6eX),
        onClick: M
      })
    })]
  })), (0, i.jsx)(m.Zbd, {
    editable: true,
    className: P.card,
    children: (0, i.jsxs)(f.Z, {
      direction: f.Z.Direction.VERTICAL,
      children: [l.enabled ? (0, i.jsx)(m.P3F, {
        className: P.expandableHeader,
        "aria-expanded": Z && !A,
        onClick: E,
        children: X
      }) : X, Q]
    })
  })
}