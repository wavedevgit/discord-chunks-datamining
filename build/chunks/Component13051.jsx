/** Chunk was on 58511 **/
/** chunk id: 13051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./642613.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk951284 = require("./951284.js"),
  Chunk442837 = require("./442837.js"),
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

function w(e) {
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

function I(e) {
  let t, {
      guild: n,
      integration: l,
      editedIntegration: o,
      isExpanded: I,
      onToggleExpand: P,
      onDisable: T,
      onEnable: E
    } = e,
    [k, A] = r.useState(false),
    D = (0, d.e7)([j.Z], () => j.Z.hidePersonalInformation),
    R = r.useCallback(() => {
      A(true), E(l)
    }, [l, E]),
    L = r.useCallback(() => {
      l.syncing || (0, u.h7j)(e => {
        var t, n;
        let r = 0 === l.expire_behavior ? N.intl.string(N.t["6kpw4u"]) : N.intl.string(N.t.fQUQIC);
        return (0, i.jsx)(u.ConfirmModal, (t = w({}, e), n = n = {
          header: N.intl.string(N.t.emx3lJ),
          confirmText: r,
          cancelText: N.intl.string(N.t["ETE/oK"]),
          onConfirm: () => T(l),
          children: (0, i.jsx)(u.Text, {
            variant: "text-md/normal",
            children: l.type === c.b.YOUTUBE ? N.intl.string(N.t.anKQWV) : N.intl.string(N.t["BW/xtr"])
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
    M = r.useCallback(() => {
      f.Z.syncIntegration(n.id, l.id)
    }, [n.id, l.id]),
    B = r.useCallback(() => {
      null != l.role_id && (f.Z.setSection(C.pNK.ROLES), f.Z.selectRole(l.role_id))
    }, [l.role_id]),
    {
      serviceName: U,
      channelURL: W,
      expireBehaviorLabel: H,
      syncLabel: G,
      subscribersText: z
    } = r.useMemo(() => {
      var e, t, n, i, r;
      let a = null != (n = null == (t = m.Z.get(l.type)) || null == (e = t.getPlatformUserUrl) ? true : e.call(t, {
        id: l.account.id,
        name: l.account.name
      })) ? n : "";
      switch (l.type) {
        case c.b.YOUTUBE:
          return {
            serviceName: N.intl.string(N.t.aS6cKy), expireBehaviorLabel: N.intl.string(N.t.A5MiqK), syncLabel: N.intl.string(N.t["7vHKVV"]), subscribersText: N.intl.formatToPlainString(N.t["7lNtcX"], {
              subscribers: null != (i = l.subscriber_count) ? i : 0
            }), channelURL: a
          };
        case c.b.TWITCH:
        default:
          return {
            serviceName: N.intl.string(N.t.q4pBGx), expireBehaviorLabel: N.intl.string(N.t["S/WCrK"]), syncLabel: N.intl.string(N.t["0jbPKy"]), subscribersText: N.intl.formatToPlainString(N.t.RdUTrq, {
              subscribers: null != (r = l.subscriber_count) ? r : 0
            }), channelURL: a
          }
      }
    }, [l.account, l.subscriber_count, l.type]),
    F = (0, d.e7)([x.Z], () => null != l.role_id ? x.Z.getRole(n.id, l.role_id) : true),
    {
      roleLink: K,
      syncDescriptionText: q
    } = r.useMemo(() => {
      let e;
      e = null != F ? (0, i.jsx)(u.eee, {
        onClick: B,
        children: F.name
      }) : N.intl.string(N.t.PoWNfX);
      let t = m.Z.get(l.type);
      return {
        roleLink: e,
        syncDescriptionText: l.revoked && null != t ? N.intl.formatToPlainString(N.t.G16Wjo, {
          user: l.user,
          platformName: t.name
        }) : N.intl.formatToPlainString(N.t.unl3AA, {
          datetime: s()(l.synced_at).calendar()
        })
      }
    }, [F, B, l.revoked, l.synced_at, l.type, l.user]),
    V = (0, d.e7)([x.Z], () => x.Z.getSortedRoles(n.id)),
    Y = r.useMemo(() => {
      let e = g.ZP.getGuildEmoji(n.id),
        t = V.filter(e => null != e.tags && e.tags.integration_id === l.id).map(e => e.id);
      return l.enable_emoticons ? e.sort((e, t) => e.name.localeCompare(t.name)).filter(e => null != l.role_id && (null == e ? true : e.roles.some(e => t.includes(e)))) : []
    }, [n.id, V, l.enable_emoticons, l.id, l.role_id]);
  if (r.useEffect(() => {
      (null == o ? true : o.id) === l.id && (null == o ? true : o.enabled) === true && A(false)
    }, [o, l.id]), l.enabled && null != l.user) t = [{
    icon: u.T39,
    text: D ? N.intl.formatToPlainString(N.t.gcdJ8P, {
      timestamp: O.default.extractTimestamp(l.id)
    }) : N.intl.formatToPlainString(N.t.Nu9sam, {
      user: null != l.user ? new h.Z(l.user).tag : null,
      timestamp: O.default.extractTimestamp(l.id)
    })
  }];
  else {
    let e = new URL(W);
    t = [{
      text: N.intl.format(N.t.BegylZ, {
        serviceName: U,
        accountUrl: W,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let X = (0, i.jsxs)(b.Z, {
      className: Z.header,
      align: b.Z.Align.CENTER,
      children: [(0, i.jsx)(_.Z, {
        name: "".concat(l.name),
        detailsClassName: Z.description,
        details: t
      }), l.enabled ? (0, i.jsx)(b.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsx)(v.Z, {
          className: Z.expandIcon,
          expanded: I && !k,
          "aria-hidden": true
        })
      }) : (0, i.jsx)(b.Z.Child, {
        shrink: 0,
        grow: 0,
        children: k ? (0, i.jsx)(u.hU, {
          variant: "primary",
          size: "sm",
          disabled: true,
          icon: u.DuK,
          "aria-label": N.intl.string(N.t["7sCN8v"])
        }) : (0, i.jsx)(u.zxk, {
          variant: "primary",
          size: "sm",
          onClick: R,
          text: N.intl.string(N.t["7sCN8v"])
        })
      })]
    }),
    $ = null;
  return I && !k && null != o && ($ = (0, i.jsxs)(b.Z, {
    className: Z.body,
    direction: b.Z.Direction.VERTICAL,
    children: [(0, i.jsx)(u.$i$, {
      className: Z.topDivider
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        subscribersText: r,
        descriptionText: l,
        roleLink: a,
        onSync: o
      } = e;
      return (0, i.jsxs)(b.Z, {
        children: [(0, i.jsxs)(b.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(u.vwX, {
            className: S.marginBottom8,
            children: N.intl.string(N.t.eBtNBQ)
          }), (0, i.jsx)(u.Text, {
            className: Z.syncedRole,
            color: "header-primary",
            variant: "text-sm/normal",
            children: a
          })]
        }), (0, i.jsxs)(b.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(u.vwX, {
            className: S.marginBottom8,
            children: n
          }), (0, i.jsxs)(b.Z, {
            justify: b.Z.Justify.BETWEEN,
            children: [(0, i.jsxs)(b.Z, {
              direction: b.Z.Direction.VERTICAL,
              children: [(0, i.jsx)(u.Text, {
                color: "header-primary",
                variant: "text-sm/normal",
                children: r
              }), (0, i.jsx)(u.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: l
              })]
            }), t.syncing ? (0, i.jsx)(u.hU, {
              size: "sm",
              variant: "primary",
              icon: u.DuK,
              "aria-label": N.intl.string(N.t.BkuOOz),
              disabled: true
            }) : (0, i.jsx)(u.zxk, {
              size: "sm",
              variant: "primary",
              text: N.intl.string(N.t.BkuOOz),
              disabled: t.revoked,
              onClick: o
            })]
          })]
        })]
      })
    }({
      integration: o,
      labelText: G,
      subscribersText: z,
      descriptionText: q,
      roleLink: K,
      onSync: M
    }), (0, i.jsx)(u.$i$, {
      className: Z.midDivider
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        onBehaviorChange: r,
        onGracePeriodChange: l
      } = e;
      return (0, i.jsxs)(b.Z, {
        children: [(0, i.jsxs)(b.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(u.vwX, {
            className: S.marginBottom8,
            children: n
          }), (0, i.jsx)(u.q4e, {
            placeholder: n,
            value: "".concat(t.expire_behavior),
            options: [{
              value: "0",
              label: N.intl.string(N.t["6kpw4u"])
            }, {
              value: "1",
              label: N.intl.string(N.t.fQUQIC)
            }],
            isDisabled: t.syncing,
            onChange: e => r(parseInt(e))
          })]
        }), (0, i.jsxs)(b.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(u.vwX, {
            className: S.marginBottom8,
            children: N.intl.string(N.t.uiXMo6)
          }), (0, i.jsx)(u.q4e, {
            placeholder: N.intl.string(N.t.uiXMo6),
            maxVisibleItems: 5,
            value: "".concat(t.expire_grace_period),
            options: [1, 3, 7, 14, 30].map(e => ({
              value: "".concat(e),
              label: N.intl.formatToPlainString(N.t.eGjmy8, {
                days: e
              })
            })),
            onChange: e => l(parseInt(e)),
            isDisabled: t.syncing
          })]
        })]
      })
    }({
      integration: o,
      labelText: H,
      onBehaviorChange: function(e) {
        p.Z.updateIntegration({
          expireBehavior: e
        })
      },
      onGracePeriodChange: function(e) {
        p.Z.updateIntegration({
          expireGracePeriod: e
        })
      }
    }), l.type === c.b.TWITCH ? function(e) {
      let {
        integration: t,
        emojis: n,
        onToggle: r
      } = e;
      return (0, i.jsxs)(b.Z, {
        direction: b.Z.Direction.VERTICAL,
        children: [(0, i.jsx)(u.XZJ, {
          type: u.XZJ.Types.INVERTED,
          className: a()(S.marginTop20, S.marginBottom8),
          value: t.enable_emoticons,
          disabled: t.syncing,
          onChange: e => {
            let {
              currentTarget: t
            } = e;
            return r(t.checked)
          },
          children: (0, i.jsx)(u.R94, {
            children: N.intl.string(N.t["7r4OKi"])
          })
        }), (0, i.jsx)(b.Z, {
          wrap: b.Z.Wrap.WRAP,
          className: Z.__invalid_twitchEmojis,
          children: n.map((e, t) => (0, i.jsx)(u.ua7, {
            text: e.name,
            children: t => (0, i.jsx)("img", w({
              alt: N.intl.formatToPlainString(N.t.n6ZZn5, {
                name: e.name
              }),
              draggable: false,
              className: a()(Z.emoji, "emoji", "jumboable"),
              src: y.ZP.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: 28
              })
            }, t), e.name)
          }, t))
        })]
      })
    }({
      integration: o,
      emojis: Y,
      onToggle: function(e) {
        p.Z.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, i.jsx)(u.$i$, {
      className: Z.bottomDivider
    }), (0, i.jsx)(b.Z, {
      children: (0, i.jsx)(u.zxk, {
        size: "sm",
        variant: "critical-secondary",
        text: N.intl.string(N.t.M6q6eX),
        onClick: L
      })
    })]
  })), (0, i.jsx)(u.Zbd, {
    editable: true,
    className: Z.card,
    children: (0, i.jsxs)(b.Z, {
      direction: b.Z.Direction.VERTICAL,
      children: [l.enabled ? (0, i.jsx)(u.P3F, {
        className: Z.expandableHeader,
        "aria-expanded": I && !k,
        onClick: P,
        children: X
      }) : X, $]
    })
  })
}