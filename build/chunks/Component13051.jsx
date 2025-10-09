/** Chunk was on 58511 **/
/** chunk id: 13051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
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
  Chunk755721 = require("./755721.js"),
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

function A(e) {
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

function D(e, t) {
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

function R(e) {
  let t, {
      guild: n,
      integration: l,
      editedIntegration: o,
      isExpanded: R,
      onToggleExpand: L,
      onDisable: M,
      onEnable: U
    } = e,
    [B, W] = r.useState(false),
    H = (0, p.e7)([N.Z], () => N.Z.hidePersonalInformation),
    G = (0, p.e7)([C.Z], () => C.Z.can(E.Plq.KICK_MEMBERS, n)),
    z = r.useCallback(() => {
      W(true), U(l)
    }, [l, U]),
    K = r.useCallback(() => {
      l.syncing || (0, f.h7j)(e => {
        if (!G && l.expire_behavior === c.l.KICK) return (0, i.jsx)(f.ConfirmModal, D(A({}, e), {
          header: T.intl.string(T.t.emx3lJ),
          confirmText: T.intl.string(T.t.BddRzc),
          confirmButtonColor: m.Tt.BRAND,
          children: (0, i.jsx)(f.Text, {
            variant: "text-md/normal",
            children: l.type === u.b.YOUTUBE ? T.intl.string(T.t.pDCiER) : T.intl.string(T.t.sQqHFh)
          })
        }));
        let t = l.expire_behavior === c.l.REMOVE_ROLE ? T.intl.string(T.t["6kpw4u"]) : T.intl.string(T.t.fQUQIC);
        return (0, i.jsx)(f.ConfirmModal, D(A({}, e), {
          header: T.intl.string(T.t.emx3lJ),
          confirmText: t,
          cancelText: T.intl.string(T.t["ETE/oK"]),
          onConfirm: () => M(l),
          children: (0, i.jsx)(f.Text, {
            variant: "text-md/normal",
            children: l.type === u.b.YOUTUBE ? T.intl.string(T.t.anKQWV) : T.intl.string(T.t["BW/xtr"])
          })
        }))
      })
    }, [l, M, G]),
    F = r.useCallback(() => {
      O.Z.syncIntegration(n.id, l.id)
    }, [n.id, l.id]),
    q = r.useCallback(() => {
      null != l.role_id && (O.Z.setSection(E.pNK.ROLES), O.Z.selectRole(l.role_id))
    }, [l.role_id]),
    {
      serviceName: V,
      channelURL: Y,
      expireBehaviorLabel: J,
      syncLabel: X,
      subscribersText: Q
    } = r.useMemo(() => {
      var e, t, n, i, r;
      let a = null != (n = null == (t = x.Z.get(l.type)) || null == (e = t.getPlatformUserUrl) ? true : e.call(t, {
        id: l.account.id,
        name: l.account.name
      })) ? n : "";
      switch (l.type) {
        case u.b.YOUTUBE:
          return {
            serviceName: T.intl.string(T.t.aS6cKy), expireBehaviorLabel: T.intl.string(T.t.A5MiqK), syncLabel: T.intl.string(T.t["7vHKVV"]), subscribersText: T.intl.formatToPlainString(T.t["7lNtcX"], {
              subscribers: null != (i = l.subscriber_count) ? i : 0
            }), channelURL: a
          };
        case u.b.TWITCH:
        default:
          return {
            serviceName: T.intl.string(T.t.q4pBGx), expireBehaviorLabel: T.intl.string(T.t["S/WCrK"]), syncLabel: T.intl.string(T.t["0jbPKy"]), subscribersText: T.intl.formatToPlainString(T.t.RdUTrq, {
              subscribers: null != (r = l.subscriber_count) ? r : 0
            }), channelURL: a
          }
      }
    }, [l.account, l.subscriber_count, l.type]),
    $ = (0, p.e7)([_.Z], () => null != l.role_id ? _.Z.getRole(n.id, l.role_id) : true),
    {
      roleLink: ee,
      syncDescriptionText: et
    } = r.useMemo(() => {
      let e;
      e = null != $ ? (0, i.jsx)(f.eee, {
        onClick: q,
        children: $.name
      }) : T.intl.string(T.t.PoWNfX);
      let t = x.Z.get(l.type);
      return {
        roleLink: e,
        syncDescriptionText: l.revoked && null != t ? T.intl.formatToPlainString(T.t.G16Wjo, {
          user: l.user,
          platformName: t.name
        }) : T.intl.formatToPlainString(T.t.unl3AA, {
          datetime: s()(l.synced_at).calendar()
        })
      }
    }, [$, q, l.revoked, l.synced_at, l.type, l.user]),
    en = (0, p.e7)([_.Z], () => _.Z.getSortedRoles(n.id)),
    ei = r.useMemo(() => {
      let e = v.ZP.getGuildEmoji(n.id),
        t = en.filter(e => null != e.tags && e.tags.integration_id === l.id).map(e => e.id);
      return l.enable_emoticons ? e.filter(e => null != l.role_id && (null == e ? true : e.roles.some(e => t.includes(e)))).sort((e, t) => e.name.localeCompare(t.name)) : []
    }, [n.id, en, l.enable_emoticons, l.id, l.role_id]);
  if (r.useEffect(() => {
      (null == o ? true : o.id) === l.id && (null == o ? true : o.enabled) === true && W(false)
    }, [o, l.id]), l.enabled && null != l.user) t = [{
    icon: f.T39,
    text: H ? T.intl.formatToPlainString(T.t.gcdJ8P, {
      timestamp: P.default.extractTimestamp(l.id)
    }) : T.intl.formatToPlainString(T.t.Nu9sam, {
      user: null != l.user ? new y.Z(l.user).tag : null,
      timestamp: P.default.extractTimestamp(l.id)
    })
  }];
  else {
    let e = new URL(Y);
    t = [{
      text: T.intl.format(T.t.BegylZ, {
        serviceName: V,
        accountUrl: Y,
        accountUrlText: e.hostname + e.pathname
      })
    }]
  }
  let er = (0, i.jsxs)(j.Z, {
      className: Z.header,
      align: j.Z.Align.CENTER,
      children: [(0, i.jsx)(I.Z, {
        name: "".concat(l.name),
        detailsClassName: Z.description,
        details: t
      }), l.enabled ? (0, i.jsx)(j.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsx)(S.Z, {
          className: Z.expandIcon,
          expanded: R && !B,
          "aria-hidden": true
        })
      }) : (0, i.jsx)(j.Z.Child, {
        shrink: 0,
        grow: 0,
        children: B ? (0, i.jsx)(f.hU, {
          variant: "primary",
          size: "sm",
          disabled: true,
          icon: f.DuK,
          "aria-label": T.intl.string(T.t["7sCN8v"])
        }) : (0, i.jsx)(f.zxk, {
          variant: "primary",
          size: "sm",
          onClick: z,
          text: T.intl.string(T.t["7sCN8v"])
        })
      })]
    }),
    el = null;
  return R && !B && null != o && (el = (0, i.jsxs)(j.Z, {
    className: Z.body,
    direction: j.Z.Direction.VERTICAL,
    children: [(0, i.jsx)(f.izJ, {
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
      return (0, i.jsxs)(j.Z, {
        children: [(0, i.jsxs)(j.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(f.X6q, {
            variant: "heading-md/semibold",
            className: k.marginBottom8,
            children: T.intl.string(T.t.eBtNBQ)
          }), (0, i.jsx)(f.Text, {
            className: Z.syncedRole,
            color: "header-primary",
            variant: "text-sm/normal",
            children: a
          })]
        }), (0, i.jsxs)(j.Z.Child, {
          basis: "50%",
          children: [(0, i.jsx)(f.X6q, {
            variant: "heading-sm/semibold",
            className: k.marginBottom8,
            children: n
          }), (0, i.jsxs)(j.Z, {
            justify: j.Z.Justify.BETWEEN,
            children: [(0, i.jsxs)(j.Z, {
              direction: j.Z.Direction.VERTICAL,
              children: [(0, i.jsx)(f.Text, {
                color: "header-primary",
                variant: "text-sm/normal",
                children: r
              }), (0, i.jsx)(f.Text, {
                color: "header-secondary",
                variant: "text-xs/normal",
                children: l
              })]
            }), t.syncing ? (0, i.jsx)(f.hU, {
              size: "sm",
              variant: "primary",
              icon: f.DuK,
              "aria-label": T.intl.string(T.t.BkuOOz),
              disabled: true
            }) : (0, i.jsx)(f.zxk, {
              size: "sm",
              variant: "primary",
              text: T.intl.string(T.t.BkuOOz),
              disabled: t.revoked,
              onClick: o
            })]
          })]
        })]
      })
    }({
      integration: o,
      labelText: X,
      subscribersText: Q,
      descriptionText: et,
      roleLink: ee,
      onSync: F
    }), (0, i.jsx)(f.izJ, {
      className: Z.midDivider
    }), function(e) {
      let {
        integration: t,
        labelText: n,
        onBehaviorChange: r,
        onGracePeriodChange: l
      } = e;
      return (0, i.jsxs)(j.Z, {
        children: [(0, i.jsx)(j.Z.Child, {
          basis: "50%",
          children: (0, i.jsx)(f.q4e, {
            label: n,
            placeholder: n,
            value: "".concat(t.expire_behavior),
            options: [{
              value: c.l.REMOVE_ROLE.toString(),
              label: T.intl.string(T.t["6kpw4u"])
            }, {
              value: c.l.KICK.toString(),
              label: T.intl.string(T.t.fQUQIC)
            }],
            isDisabled: t.syncing,
            onChange: e => r(parseInt(e))
          })
        }), (0, i.jsx)(j.Z.Child, {
          basis: "50%",
          children: (0, i.jsx)(f.q4e, {
            label: T.intl.string(T.t.uiXMo6),
            placeholder: T.intl.string(T.t.uiXMo6),
            maxVisibleItems: 5,
            value: "".concat(t.expire_grace_period),
            options: Object.values(d.W).filter(Number.isInteger).map(e => ({
              value: "".concat(e),
              label: T.intl.formatToPlainString(T.t.eGjmy8, {
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
      labelText: J,
      onBehaviorChange: function(e) {
        h.Z.updateIntegration({
          expireBehavior: e
        })
      },
      onGracePeriodChange: function(e) {
        h.Z.updateIntegration({
          expireGracePeriod: e
        })
      }
    }), !G && o.expire_behavior === c.l.KICK && (0, i.jsx)(f.Text, {
      className: Z.kickPermissionWarning,
      color: "text-danger",
      variant: "text-sm/normal",
      children: T.intl.string(T.t.mThMlJ)
    }), l.type === u.b.TWITCH ? function(e) {
      let {
        integration: t,
        emojis: n,
        onToggle: r
      } = e;
      return (0, i.jsxs)(j.Z, {
        direction: j.Z.Direction.VERTICAL,
        children: [(0, i.jsx)(g.VL, {
          className: a()(k.marginTop20, k.marginBottom8),
          checked: t.enable_emoticons,
          disabled: t.syncing,
          onChange: e => r(e),
          label: T.intl.string(T.t["7r4OKi"])
        }), (0, i.jsx)(j.Z, {
          wrap: j.Z.Wrap.WRAP,
          className: Z.__invalid_twitchEmojis,
          children: n.map((e, t) => (0, i.jsx)(b.u, {
            text: e.name,
            children: (0, i.jsx)("img", {
              alt: T.intl.formatToPlainString(T.t.n6ZZn5, {
                name: e.name
              }),
              draggable: false,
              className: a()(Z.emoji, "emoji", "jumboable"),
              src: w.ZP.getEmojiURL({
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
      emojis: ei,
      onToggle: function(e) {
        h.Z.updateIntegration({
          enableEmoticons: e
        })
      }
    }) : null, (0, i.jsx)(f.izJ, {
      className: Z.bottomDivider
    }), (0, i.jsx)(j.Z, {
      children: (0, i.jsx)(f.zxk, {
        size: "sm",
        variant: "critical-secondary",
        text: T.intl.string(T.t.M6q6eX),
        onClick: K
      })
    })]
  })), (0, i.jsx)(f.Zbd, {
    editable: true,
    className: Z.card,
    children: (0, i.jsxs)(j.Z, {
      direction: j.Z.Direction.VERTICAL,
      children: [l.enabled ? (0, i.jsx)(f.P3F, {
        className: Z.expandableHeader,
        "aria-expanded": R && !B,
        onClick: L,
        children: er
      }) : er, el]
    })
  })
}